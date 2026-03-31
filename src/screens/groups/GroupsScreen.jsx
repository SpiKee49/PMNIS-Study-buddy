import { useState } from 'react'
import { Plus, Users, Clock, X, ChevronRight, Check, Search } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { students } from '../../data/dummy'

export default function GroupsScreen() {
  const { navigate, allGroups, createGroup, buddies } = useNav()
  const [showCreate, setShowCreate] = useState(false)
  const [step, setStep] = useState(1) // 1=details, 2=invite
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [description, setDescription] = useState('')
  const [invited, setInvited] = useState(new Set())
  const [created, setCreated] = useState(false)
  const [inviteQuery, setInviteQuery] = useState('')

  const myGroups = allGroups.filter(g => g.isJoined)

  // All students except u0, buddies first
  const allInvitable = [
    ...students.filter(s => buddies.includes(s.id)),
    ...students.filter(s => !buddies.includes(s.id) && s.id !== 'u0'),
  ]

  const queryLower = inviteQuery.toLowerCase()
  const filteredInvitable = inviteQuery.trim()
    ? allInvitable.filter(s =>
        s.name.toLowerCase().includes(queryLower) ||
        s.faculty.toLowerCase().includes(queryLower) ||
        s.subjects.some(sub => sub.toLowerCase().includes(queryLower))
      )
    : allInvitable

  const buddyIds = new Set(buddies)

  const toggleInvite = (id) => {
    setInvited(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleCreate = () => {
    createGroup(name, subject, description, [...invited])
    setCreated(true)
    setTimeout(() => {
      setShowCreate(false)
      setCreated(false)
      setStep(1)
      setName('')
      setSubject('')
      setDescription('')
      setInvited(new Set())
    }, 1200)
  }

  const closeModal = () => {
    setShowCreate(false)
    setStep(1)
    setName('')
    setSubject('')
    setDescription('')
    setInvited(new Set())
    setCreated(false)
    setInviteQuery('')
  }

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
            <button
              onClick={() => setShowCreate(true)}
              className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-violet-700 transition-colors"
            >
              <Plus size={16} />
              Create Group
            </button>
          </div>
          <p className="text-sm text-gray-500">{myGroups.length} {myGroups.length === 1 ? 'group' : 'groups'}</p>
        </div>
      </div>

      {/* Groups grid */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        {myGroups.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No groups yet — create one!
          </div>
        )}
        <div className="grid grid-cols-2 gap-4">
          {myGroups.map(group => (
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
                  {group.description ? (
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{group.description}</p>
                  ) : null}
                  {group.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {group.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-500 text-xs font-medium px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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

      {/* Create Group Modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-md shadow-xl overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {created ? 'Group Created!' : step === 1 ? 'Create Study Group' : 'Invite Members'}
                </h3>
                {!created && (
                  <p className="text-xs text-gray-400 mt-0.5">Step {step} of 2</p>
                )}
              </div>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            {created ? (
              <div className="px-6 py-10 text-center">
                <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={28} className="text-emerald-600" />
                </div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {invited.size > 0 ? `Invitations sent to ${invited.size} member${invited.size > 1 ? 's' : ''}` : 'Group created successfully'}
                </p>
              </div>
            ) : step === 1 ? (
              <div className="px-6 py-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Group Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="e.g. ML Study Squad"
                    className="w-full mt-1.5 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    placeholder="e.g. Machine Learning"
                    className="w-full mt-1.5 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Description</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="What will this group study together?"
                    rows={3}
                    className="w-full mt-1.5 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                  />
                </div>
                <div className="flex gap-2 pt-1">
                  <button onClick={closeModal} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">
                    Cancel
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!name.trim()}
                    className="flex-1 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold disabled:opacity-40 flex items-center justify-center gap-1 hover:bg-violet-700 transition-colors"
                  >
                    Next: Invite <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-6 py-5">
                {/* Search bar */}
                <div className="relative mb-3">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={inviteQuery}
                    onChange={e => setInviteQuery(e.target.value)}
                    placeholder="Search by name, faculty or subject…"
                    className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>

                {/* Discover link */}
                <button
                  onClick={() => { closeModal(); navigate('discover') }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 mb-4 text-xs font-semibold text-violet-600 bg-violet-50 hover:bg-violet-100 rounded-xl transition-colors"
                >
                  <Compass size={13} />
                  Browse all students in Discover
                </button>

                {/* Student list */}
                <div className="space-y-2 max-h-56 overflow-y-auto mb-3 pr-0.5">
                  {filteredInvitable.length === 0 && (
                    <p className="text-center text-xs text-gray-400 py-6">No students match your search.</p>
                  )}
                  {filteredInvitable.map(s => (
                    <button
                      key={s.id}
                      onClick={() => toggleInvite(s.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                        invited.has(s.id) ? 'bg-violet-50 border border-violet-200' : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`w-8 h-8 ${s.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-[10px] font-bold text-white">{s.avatar}</span>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center gap-1.5">
                          <p className="text-sm font-semibold text-gray-800 truncate">{s.name}</p>
                          {buddyIds.has(s.id) && (
                            <span className="text-[9px] font-bold bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-full flex-shrink-0">Buddy</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 truncate">{s.faculty}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        invited.has(s.id) ? 'bg-violet-600 border-violet-600' : 'border-gray-300'
                      }`}>
                        {invited.has(s.id) && <Check size={11} className="text-white" />}
                      </div>
                    </button>
                  ))}
                </div>

                {invited.size > 0 && (
                  <p className="text-xs text-violet-600 font-semibold mb-3">{invited.size} member{invited.size > 1 ? 's' : ''} selected</p>
                )}

                <div className="flex gap-2">
                  <button onClick={() => setStep(1)} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">
                    Back
                  </button>
                  <button
                    onClick={handleCreate}
                    className="flex-1 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"
                  >
                    {invited.size > 0 ? `Create & Send ${invited.size} Invite${invited.size > 1 ? 's' : ''}` : 'Create Group'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
