import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Phone, Video, Send, Paperclip, Smile, MoreVertical } from 'lucide-react'
import { directMessages, students } from '../../data/dummy'
import Avatar from '../../components/Avatar'
import MeetingScheduler from '../../components/MeetingScheduler'
import SimulatedCall from '../../components/SimulatedCall'
import FeedbackForm from '../../components/FeedbackForm'

export default function DirectMessageScreen() {
  const { params, goBack, navigate, conversations } = useNav()
  
  // Find conversation by conversationId or userId
  let conv = null
  let isExistingConversation = false
  
  if (params.conversationId) {
    // Direct navigation from messages list
    conv = conversations.find(c => c.id === params.conversationId)
    isExistingConversation = !!conv
  } else if (params.userId) {
    // Navigation from other screens (discover, profile, etc.)
    conv = conversations.find(c => c.userId === params.userId)
    isExistingConversation = !!conv
    
    // If no conversation exists, create a placeholder
    if (!conv) {
      const student = students.find(s => s.id === params.userId)
      if (student) {
        conv = {
          id: `c${params.userId.slice(1)}`,
          userId: params.userId,
          name: student.name,
          avatar: student.avatar,
          avatarColor: student.avatarColor,
          lastMessage: 'Start a conversation...',
          lastMessageTime: 'Now',
          unread: 0,
          online: student.online || false,
        }
      }
    }
  }
  
  // Fallback to first conversation if nothing found
  if (!conv && conversations.length > 0) {
    conv = conversations[0]
    isExistingConversation = true
  }
  
  // Ensure we have a valid conversation
  if (!conv) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Conversation not found</p>
          <button onClick={goBack} className="mt-4 text-violet-600">Go back</button>
        </div>
      </div>
    )
  }
  
  const buddy = students.find(s => s.id === conv.userId) || {
    id: conv.userId,
    name: conv.name,
    avatar: conv.avatar,
    avatarColor: conv.avatarColor,
  }
  
  // Get existing messages or create initial messages for new conversations
  const existingMessages = directMessages[conv.id] || []
  const initialMessages = existingMessages.length === 0 ? [
    {
      id: 'welcome1',
      fromMe: true,
      text: `Hi ${conv.name}! Thanks for connecting. I'm looking forward to studying together!`,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ] : []
  
  const messages = existingMessages.length > 0 ? existingMessages : initialMessages
  const [input, setInput] = useState('')
  const [showScheduler, setShowScheduler] = useState(false)
  const [showPhoneOptions, setShowPhoneOptions] = useState(false)
  const [showCall, setShowCall] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [meetingScheduled, setMeetingScheduled] = useState(null)

  const handleScheduleMeeting = (meetingData) => {
    setMeetingScheduled(meetingData)
    setShowScheduler(false)
  }

  const handleStartCall = () => {
    setShowCall(true)
  }

  const handleCallEnd = () => {
    setShowCall(false)
    // Always show feedback after a call, regardless of whether it was scheduled
    setShowFeedback(true)
  }

  const handleFeedbackSubmit = (feedbackData) => {
    console.log('Feedback submitted:', feedbackData)
    setShowFeedback(false)
    // Only reset meetingScheduled if it exists
    if (meetingScheduled) {
      setMeetingScheduled(null)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 shadow-sm flex-shrink-0">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <button onClick={goBack} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={() => navigate('user-profile-preview', { userId: conv.userId })}
            className="flex items-center gap-2.5 flex-1 min-w-0"
          >
            <Avatar initials={conv.avatar} colorClass={conv.avatarColor} size="sm" online={conv.online} />
            <div className="min-w-0">
              <p className="font-bold text-gray-900 text-sm truncate">{conv.name}</p>
              <p className={`text-xs ${conv.online ? 'text-emerald-500' : 'text-gray-400'}`}>
                {conv.online ? 'Online' : 'Last seen recently'}
              </p>
            </div>
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowPhoneOptions(true)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                meetingScheduled
                  ? 'bg-emerald-100 hover:bg-emerald-200'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              title={meetingScheduled ? 'Meeting scheduled' : 'Phone meeting options'}
            >
              <Phone
                size={15}
                className={meetingScheduled ? 'text-emerald-600' : 'text-gray-600'}
              />
            </button>
            <button
              onClick={handleStartCall}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                'bg-violet-100 hover:bg-violet-200'
              }`}
              title="Start call"
            >
              <Video
                size={15}
                className={'text-violet-600'}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-4 space-y-2.5 max-w-4xl mx-auto w-full">
        {showPhoneOptions && (
          <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Phone meeting</h3>
              <p className="text-sm text-gray-600 mb-4">Choose an option to continue:</p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setShowPhoneOptions(false)
                    setShowScheduler(false)
                    setShowCall(true)
                  }}
                  className="w-full px-4 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors"
                >
                  Instant meeting
                </button>
                <button
                  onClick={() => {
                    setShowPhoneOptions(false)
                    setShowScheduler(true)
                  }}
                  className="w-full px-4 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Schedule another time
                </button>
                <button
                  onClick={() => setShowPhoneOptions(false)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Date */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[10px] text-gray-400 font-medium">Today</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.fromMe
                  ? 'bg-violet-600 text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.fromMe ? 'text-violet-300' : 'text-gray-400'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}

      {/* Typing indicator */}
        {conv.online && (
          <div className="flex items-end gap-2">
            <Avatar initials={conv.avatar} colorClass={conv.avatarColor} size="xs" />
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm flex items-center gap-1">
              {[0, 0.2, 0.4].map((delay, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Meeting Scheduled Info */}
        {meetingScheduled && (
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 max-w-xs">
              <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wide mb-2">
                ✓ Meeting Scheduled
              </p>
              <p className="text-sm font-semibold text-emerald-900">
                {meetingScheduled.subject}
              </p>
              <p className="text-xs text-emerald-700 mt-1">
                {meetingScheduled.date} at {meetingScheduled.time}
              </p>
              <button
                onClick={handleStartCall}
                className="mt-3 w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Start Call Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-8 py-3 flex items-center gap-3 flex-shrink-0">
        <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
          <Paperclip size={16} className="text-gray-500" />
        </button>
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <button className="hover:opacity-75 transition-opacity">
            <Smile size={16} className="text-gray-400" />
          </button>
        </div>
        <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          input.trim() ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-100'
        }`}>
          <Send size={15} className={input.trim() ? 'text-white' : 'text-gray-400'} />
        </button>
      </div>

      {/* Modals */}
      {showScheduler && (
        <MeetingScheduler
          buddy={buddy}
          onClose={() => setShowScheduler(false)}
          onSchedule={handleScheduleMeeting}
        />
      )}

      {showCall && (
        <SimulatedCall
          buddy={buddy}
          onCallEnd={handleCallEnd}
        />
      )}

      {showFeedback && (
        <FeedbackForm
          buddy={buddy}
          onClose={() => setShowFeedback(false)}
          onSubmit={handleFeedbackSubmit}
        />
      )}
    </div>
  )
}
