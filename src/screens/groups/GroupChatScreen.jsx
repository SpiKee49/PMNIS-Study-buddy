import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Send, Paperclip, Smile, Users } from 'lucide-react'
import { groups, groupMessages } from '../../data/dummy'

export default function GroupChatScreen() {
  const { params, navigate, goBack } = useNav()
  const group = groups.find(g => g.id === params.groupId) || groups[0]
  const messages = groupMessages[group.id] || []
  const [input, setInput] = useState('')

  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100vh' }}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 flex items-center gap-3 shadow-sm flex-shrink-0">
        <button onClick={goBack} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
          <ChevronLeft size={20} className="text-gray-700" />
        </button>
        <div className={`w-9 h-9 ${group.color} rounded-xl flex items-center justify-center`}>
          <div className={`w-5 h-5 ${group.accent} rounded-lg`} />
        </div>
        <div className="flex-1 min-w-0">
          <h1 className="font-bold text-gray-900 text-sm truncate">{group.name}</h1>
          <p className="text-xs text-gray-500">{group.memberCount} members · {group.lastActivity}</p>
        </div>
        <button
          onClick={() => navigate('group-detail', { groupId: group.id })}
          className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <Users size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-8 py-4 space-y-3 max-w-4xl mx-auto w-full">
        {/* Date divider */}
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-[10px] text-gray-400 font-medium">Today</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {messages.map(msg => {
          const isMe = msg.userId === 'u0'
          return (
            <div key={msg.id} className={`flex gap-2.5 ${isMe ? 'flex-row-reverse' : ''}`}>
              {!isMe && (
                <div className={`w-8 h-8 ${msg.avatarColor} rounded-full flex items-center justify-center flex-shrink-0 self-end`}>
                  <span className="text-[10px] font-bold text-white">{msg.avatar}</span>
                </div>
              )}
              <div className={`max-w-[70%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                {!isMe && (
                  <span className="text-[10px] text-gray-500 font-medium mb-1 ml-1">{msg.userName}</span>
                )}
                <div className={`px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  isMe
                    ? 'bg-violet-600 text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm'
                }`}>
                  {msg.text}
                </div>
                <span className="text-[9px] text-gray-400 mt-1 mx-1">{msg.time}</span>
              </div>
            </div>
          )
        })}
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
            placeholder="Type a message..."
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
