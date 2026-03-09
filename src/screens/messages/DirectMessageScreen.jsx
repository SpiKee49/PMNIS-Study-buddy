import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Phone, Video, Send, Paperclip, Smile, MoreVertical } from 'lucide-react'
import { conversations, directMessages } from '../../data/dummy'
import Avatar from '../../components/Avatar'

export default function DirectMessageScreen() {
  const { params, goBack, navigate } = useNav()
  const conv = conversations.find(c => c.id === params.conversationId) || conversations[0]
  const messages = directMessages[conv.id] || []
  const [input, setInput] = useState('')

  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100vh' }}>
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
            <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
              <Phone size={15} className="text-gray-600" />
            </button>
            <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
              <Video size={15} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-4 space-y-2.5 max-w-4xl mx-auto w-full">
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
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-100 px-8 py-3 flex items-center gap-3 flex-shrink-0">
        <button className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
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
          <button>
            <Smile size={16} className="text-gray-400" />
          </button>
        </div>
        <button className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
          input.trim() ? 'bg-violet-600' : 'bg-gray-100'
        }`}>
          <Send size={15} className={input.trim() ? 'text-white' : 'text-gray-400'} />
        </button>
      </div>
    </div>
  )
}
