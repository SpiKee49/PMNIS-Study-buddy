import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, MessageCircle, FolderOpen, Users, Calendar } from 'lucide-react'
import { groups } from '../../data/dummy'

export default function GroupDetailScreen() {
  const { params, navigate, goBack } = useNav()
  const group = groups.find(g => g.id === params.groupId) || groups[0]

  const memberDetails = [
    { id: 'u0', name: 'Alex Johnson', role: 'Member', avatar: 'AJ', color: 'bg-violet-500' },
    { id: 'u1', name: 'Maria Kovač', role: 'Admin', avatar: 'MK', color: 'bg-pink-500' },
    { id: 'u2', name: 'Tomáš Novák', role: 'Member', avatar: 'TN', color: 'bg-blue-500' },
  ].slice(0, group.memberCount)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-2 shadow-sm">
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors">
          <ChevronLeft size={18} /> Back
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Groups</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-500">{group.name}</span>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-8 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className={`w-16 h-16 ${group.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <div className={`w-8 h-8 ${group.accent} rounded-xl`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{group.name}</h1>
              <p className="text-white/70 mt-0.5">{group.subject}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-white/70 text-sm">{group.memberCount} members active</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('group-chat', { groupId: group.id })}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <MessageCircle size={16} /> Chat
            </button>
            <button
              onClick={() => navigate('workspace', { groupId: group.id })}
              className="flex items-center gap-2 bg-white text-violet-700 text-sm font-semibold px-4 py-2.5 rounded-xl"
            >
              <FolderOpen size={16} /> Workspace
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Main */}
          <div className="col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-2">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{group.description}</p>
            </div>

            <div className="bg-violet-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-violet-600" />
                <span className="font-bold text-violet-800">Next Session</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-lg">{group.nextSession}</p>
                  <p className="text-sm text-gray-500 mt-0.5">Duration: 2 hours · Online via Meet</p>
                </div>
                <button className="bg-violet-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl">
                  Join Session
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {group.tags.map(tag => (
                  <span key={tag} className={`${group.color} ${group.textAccent} text-sm font-semibold px-3 py-1.5 rounded-full`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-800">Members</h2>
                <span className="text-xs text-gray-500">{group.memberCount}/{group.maxMembers}</span>
              </div>
              <div className="space-y-3">
                {memberDetails.map(m => (
                  <div key={m.id} className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${m.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xs font-bold text-white">{m.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{m.name}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      m.role === 'Admin' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {m.role}
                    </span>
                  </div>
                ))}
              </div>
              {group.memberCount < group.maxMembers && (
                <p className="text-xs text-emerald-600 font-medium mt-3 pt-3 border-t border-gray-100">
                  {group.maxMembers - group.memberCount} spots open
                </p>
              )}
            </div>

            <button className={`w-full py-3 rounded-2xl font-bold text-sm ${
              group.isJoined
                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200'
            } transition-colors`}>
              {group.isJoined ? 'Leave Group' : 'Join Group'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
