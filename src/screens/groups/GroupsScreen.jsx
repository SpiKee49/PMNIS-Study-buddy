import { useState } from 'react'
import { Plus, Users, Clock } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { groups } from '../../data/dummy'

export default function GroupsScreen() {
  const { navigate } = useNav()
  const [tab, setTab] = useState('my')

  const myGroups = groups.filter(g => g.isJoined)
  const discoverGroups = groups.filter(g => !g.isJoined)
  const displayed = tab === 'my' ? myGroups : discoverGroups

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-5 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Study Groups</h1>
              <p className="text-sm text-gray-500 mt-0.5">Collaborate and learn together</p>
            </div>
            <button className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl">
              <Plus size={16} />
              Create Group
            </button>
          </div>
          <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-64">
            {[
              { id: 'my', label: `My Groups (${myGroups.length})` },
              { id: 'discover', label: 'Discover' },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all ${
                  tab === t.id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Groups grid */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="grid grid-cols-2 gap-4">
          {displayed.map(group => (
            <button
              key={group.id}
              onClick={() => navigate('group-detail', { groupId: group.id })}
              className="bg-white rounded-3xl p-5 shadow-sm text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${group.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <div className={`w-7 h-7 ${group.accent} rounded-xl`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">{group.name}</h3>
                      <p className={`text-xs font-medium mt-0.5 ${group.textAccent}`}>{group.subject}</p>
                    </div>
                    {group.unreadCount > 0 && (
                      <span className="bg-violet-600 text-white text-[10px] font-bold min-w-[20px] h-5 rounded-full flex items-center justify-center px-1 flex-shrink-0">
                        {group.unreadCount}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{group.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {group.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Users size={13} className="text-gray-400" />
                        <span className="text-xs text-gray-500">{group.memberCount}/{group.maxMembers}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-gray-400" />
                        <span className="text-xs text-gray-500">{group.nextSession}</span>
                      </div>
                    </div>
                    <div className="flex -space-x-1.5">
                      {group.membersData.slice(0, 3).map(m => (
                        <div key={m.id} className={`w-6 h-6 ${m.avatarColor} rounded-full border-2 border-white flex items-center justify-center`}>
                          <span className="text-[8px] font-bold text-white">{m.avatar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
