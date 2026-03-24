import { useState } from 'react'
import { Search, Edit } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import Avatar from '../../components/Avatar'

export default function MessagesScreen() {
  const { navigate, conversations } = useNav()
  const [query, setQuery] = useState('')

  const filtered = conversations.filter(c =>
    query === '' || c.name.toLowerCase().includes(query.toLowerCase())
  )
  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-5 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
              {totalUnread > 0 && (
                <p className="text-sm text-violet-600 font-medium mt-0.5">{totalUnread} unread messages</p>
              )}
            </div>
            <button className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl">
              <Edit size={15} />
              New Message
            </button>
          </div>
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full px-8 py-6 flex gap-6 flex-1">
        {/* Conversation list */}
        <div className="flex-1 bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Online buddies row */}
          <div className="border-b border-gray-100 px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Online now</p>
            <div className="flex gap-5">
              {conversations.filter(c => c.online).map(c => (
                <button
                  key={c.id}
                  onClick={() => navigate('direct-message', { conversationId: c.id })}
                  className="flex flex-col items-center gap-1.5"
                >
                  <Avatar initials={c.avatar} colorClass={c.avatarColor} size="md" online={c.online} />
                  <span className="text-xs text-gray-600 font-medium">{c.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conversations */}
          <div>
            {filtered.map((conv, i) => (
              <button
                key={conv.id}
                onClick={() => navigate('direct-message', { conversationId: conv.id })}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors ${
                  i < filtered.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <Avatar initials={conv.avatar} colorClass={conv.avatarColor} size="md" online={conv.online} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`text-sm ${conv.unread > 0 ? 'font-bold text-gray-900' : 'font-semibold text-gray-800'}`}>
                      {conv.name}
                    </p>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{conv.lastMessageTime}</span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className={`text-sm truncate ${conv.unread > 0 ? 'text-gray-700' : 'text-gray-400'}`}>
                      {conv.lastMessage}
                    </p>
                    {conv.unread > 0 && (
                      <span className="bg-violet-600 text-white text-[10px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1 flex-shrink-0 ml-2">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
