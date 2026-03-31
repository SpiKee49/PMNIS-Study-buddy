import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, MessageCircle, FolderOpen, Calendar, Bell, Check, X, Clock, UserPlus, Sparkles, FileText, File, Code2 } from 'lucide-react'
import { students, currentUser } from '../../data/dummy'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']

function resolveMember(memberId, isFirst) {
  if (memberId === 'u0') {
    return {
      id: 'u0',
      name: currentUser.name,
      role: isFirst ? 'Admin' : 'Member',
      avatar: currentUser.avatar,
      color: currentUser.avatarColor,
    }
  }
  const s = students.find(st => st.id === memberId)
  return s
    ? { id: s.id, name: s.name, role: isFirst ? 'Admin' : 'Member', avatar: s.avatar, color: s.avatarColor }
    : { id: memberId, name: memberId, role: 'Member', avatar: '?', color: 'bg-gray-400' }
}

export default function GroupDetailScreen() {
  const { params, navigate, goBack, allGroups, joinGroup, leaveGroup, updateGroupSession, addReminder, reminders, groupMessages, groupWorkspaceFiles } = useNav()
  const group = allGroups.find(g => g.id === params.groupId) || allGroups[0]

  const [reminderSet, setReminderSet] = useState(() => reminders.some(r => r.groupId === group?.id))
  const [justJoined, setJustJoined] = useState(false)
  const [showOverview, setShowOverview] = useState(false)
  const [showSchedule, setShowSchedule] = useState(false)
  const [schedDay, setSchedDay] = useState('Mon')
  const [schedTime, setSchedTime] = useState('16:00')
  const [schedSaved, setSchedSaved] = useState(false)

  if (!group) return null

  const memberDetails = group.membersData.map((m, i) => resolveMember(m.id, i === 0))

  const handleJoinLeave = () => {
    if (group.isJoined) {
      leaveGroup(group.id)
    } else {
      joinGroup(group.id)
      setJustJoined(true)
      setTimeout(() => setJustJoined(false), 2000)
    }
  }

  const handleSetReminder = () => {
    if (!reminderSet) {
      addReminder(group.id, group.name, group.nextSession)
      setReminderSet(true)
    }
  }

  const handleSaveSession = () => {
    updateGroupSession(group.id, `${schedDay}, ${schedTime}`)
    setSchedSaved(true)
    setTimeout(() => {
      setShowSchedule(false)
      setSchedSaved(false)
    }, 900)
  }

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
              onClick={() => setShowOverview(true)}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
            >
              <Sparkles size={16} /> Overview
            </button>
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
              <p className="text-sm text-gray-600 leading-relaxed">{group.description || 'No description yet.'}</p>
            </div>

            {/* Next Session */}
            <div className="bg-violet-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-violet-600" />
                <span className="font-bold text-violet-800">Next Session</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-lg">{group.nextSession}</p>
                  {group.nextSession !== 'Not scheduled' && (
                    <p className="text-sm text-gray-500 mt-0.5">Duration: 2 hours · Online via Meet</p>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  <button
                    onClick={() => setShowSchedule(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-violet-200 text-violet-700 hover:bg-violet-100 transition-colors"
                  >
                    <Clock size={13} />
                    {group.nextSession === 'Not scheduled' ? 'Schedule' : 'Reschedule'}
                  </button>
                  {group.nextSession !== 'Not scheduled' && (
                    <>
                      <button
                        onClick={handleSetReminder}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          reminderSet ? 'bg-emerald-100 text-emerald-700' : 'bg-white border border-violet-200 text-violet-700 hover:bg-violet-100'
                        }`}
                      >
                        {reminderSet ? <><Check size={13} /> Reminder set</> : <><Bell size={13} /> Set Reminder</>}
                      </button>
                      <button className="bg-violet-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl">
                        Join Session
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {group.tags.length > 0 && (
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
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-800">Members</h2>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{group.memberCount}/{group.maxMembers}</span>
                  {group.memberCount < group.maxMembers && (
                    <button
                      onClick={() => navigate('discover', { pickGroupId: group.id })}
                      className="flex items-center gap-1 text-[10px] font-bold bg-violet-100 text-violet-700 hover:bg-violet-200 px-2 py-1 rounded-lg transition-colors"
                    >
                      <UserPlus size={11} /> Invite
                    </button>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                {memberDetails.map(m => (
                  <div key={m.id} className="flex items-center gap-3">
                    <div className={`w-9 h-9 ${m.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xs font-bold text-white">{m.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{m.name}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                      m.role === 'Admin' ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {m.role}
                    </span>
                  </div>
                ))}
              </div>
              {group.memberCount < group.maxMembers && (
                <p className="text-xs text-emerald-600 font-medium mt-3 pt-3 border-t border-gray-100">
                  {group.maxMembers - group.memberCount} spot{group.maxMembers - group.memberCount !== 1 ? 's' : ''} open
                </p>
              )}
            </div>

            {justJoined && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-3 flex items-center gap-2">
                <Check size={16} className="text-emerald-600 flex-shrink-0" />
                <p className="text-sm text-emerald-700 font-medium">You joined the group!</p>
              </div>
            )}

            <button
              onClick={handleJoinLeave}
              className={`w-full py-3 rounded-2xl font-bold text-sm transition-colors ${
                group.isJoined
                  ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  : 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-200'
              }`}
            >
              {group.isJoined ? 'Leave Group' : 'Join Group'}
            </button>
          </div>
        </div>
      </div>

      {/* Overview Panel */}
      {showOverview && (() => {
        const msgs = groupMessages[group.id] || []
        const files = groupWorkspaceFiles[group.id] ?? groupWorkspaceFiles.global ?? []

        // Derive topics covered from file names + chat keywords
        const fileTopics = files.map(f => f.name.replace(/\.[^.]+$/, '').replace(/[_-]/g, ' '))
        // Pick substantive messages: longer than 40 chars, treat as "insights"
        const insights = msgs.filter(m => m.text.length > 40)
        // Questions raised: messages with '?'
        const questions = msgs.filter(m => m.text.includes('?'))
        // Resources shared: messages with links (contain '.')
        const sharedLinks = msgs.filter(m => /https?:\/\/|www\.|\.org|\.com/.test(m.text))
        // All unique contributors
        const contributors = [...new Map(msgs.map(m => [m.userId, m])).values()]

        const fileIconClass = (type) => {
          if (type === 'pdf') return 'bg-red-100 text-red-600'
          if (type === 'code') return 'bg-emerald-100 text-emerald-700'
          if (type === 'slides') return 'bg-amber-100 text-amber-700'
          return 'bg-blue-100 text-blue-600'
        }
        const fileIcon = (type) => {
          if (type === 'code') return <Code2 size={13} />
          if (type === 'pdf') return <FileText size={13} />
          return <File size={13} />
        }

        return (
          <div className="fixed inset-0 z-50 flex" onClick={() => setShowOverview(false)}>
            <div className="flex-1 bg-black/40" />
            <div
              className="w-full max-w-md bg-white h-full overflow-y-auto shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-6 pt-6 pb-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <span className="text-white font-bold">What we've covered</span>
                  </div>
                  <button
                    onClick={() => setShowOverview(false)}
                    className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X size={16} className="text-white" />
                  </button>
                </div>
                <p className="text-white font-bold text-xl">{group.name}</p>
                <p className="text-white/70 text-sm mt-0.5">{group.subject}</p>
                {/* Stats row */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{msgs.length}</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-wide">messages</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{files.length}</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-wide">files shared</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{contributors.length}</p>
                    <p className="text-white/60 text-[10px] uppercase tracking-wide">contributors</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 px-6 py-5 space-y-6">

                {/* Topics covered */}
                {(fileTopics.length > 0 || group.subject) && (
                  <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Topics covered</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {group.subject}
                      </span>
                      {fileTopics.slice(0, 5).map((topic, i) => (
                        <span key={i} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Key insights from chat */}
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Key discussion highlights</h3>
                    {msgs.length > 0 && (
                      <button
                        onClick={() => { setShowOverview(false); navigate('group-chat', { groupId: group.id }) }}
                        className="text-[11px] text-violet-600 font-semibold hover:underline"
                      >
                        Full chat →
                      </button>
                    )}
                  </div>
                  {insights.length === 0 && msgs.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-sm text-gray-400">No discussion yet — be the first to start!</p>
                    </div>
                  ) : insights.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-sm text-gray-400">Chat is just getting started.</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {insights.slice(0, 3).map(msg => (
                        <div key={msg.id} className="bg-gray-50 rounded-2xl p-3.5 flex items-start gap-3">
                          <div className={`w-7 h-7 ${msg.avatarColor} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-[9px] font-bold text-white">{msg.avatar}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-gray-500 mb-1">{msg.userName}</p>
                            <p className="text-sm text-gray-800 leading-relaxed">"{msg.text}"</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>

                {/* Open questions */}
                {questions.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Open questions raised</h3>
                    <div className="space-y-2">
                      {questions.slice(0, 3).map(msg => (
                        <div key={msg.id} className="bg-amber-50 border border-amber-100 rounded-xl px-3.5 py-2.5 flex items-start gap-2.5">
                          <span className="text-amber-500 text-sm font-bold flex-shrink-0 mt-0.5">?</span>
                          <div>
                            <p className="text-xs text-gray-700 leading-relaxed">{msg.text}</p>
                            <p className="text-[10px] text-gray-400 mt-1">— {msg.userName}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Shared resources */}
                {sharedLinks.length > 0 && (
                  <section>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Resources shared in chat</h3>
                    <div className="space-y-2">
                      {sharedLinks.slice(0, 3).map(msg => (
                        <div key={msg.id} className="bg-emerald-50 border border-emerald-100 rounded-xl px-3.5 py-2.5">
                          <p className="text-xs text-gray-700 leading-relaxed">{msg.text}</p>
                          <p className="text-[10px] text-gray-400 mt-1">— {msg.userName}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Files */}
                <section>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Shared files & notes</h3>
                    {files.length > 0 && (
                      <button
                        onClick={() => { setShowOverview(false); navigate('workspace', { groupId: group.id }) }}
                        className="text-[11px] text-violet-600 font-semibold hover:underline"
                      >
                        Workspace →
                      </button>
                    )}
                  </div>
                  {files.length === 0 ? (
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-sm text-gray-400">No files shared yet.</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {files.slice(0, 5).map(f => (
                        <div key={f.id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${fileIconClass(f.type)}`}>
                            {fileIcon(f.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-800 truncate">{f.name}</p>
                            <p className="text-[10px] text-gray-400 mt-0.5">by {f.uploadedBy} · {f.time}</p>
                          </div>
                        </div>
                      ))}
                      {files.length > 5 && (
                        <p className="text-xs text-gray-400 text-center pt-1">+{files.length - 5} more in workspace</p>
                      )}
                    </div>
                  )}
                </section>

              </div>
            </div>
          </div>
        )
      })()}

      {/* Schedule Session Modal */}
      {showSchedule && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-sm shadow-xl">
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900">Schedule Session</h3>
              <button onClick={() => { setShowSchedule(false); setSchedSaved(false) }} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            {schedSaved ? (
              <div className="px-6 py-10 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={24} className="text-emerald-600" />
                </div>
                <p className="font-bold text-gray-900">Session scheduled!</p>
                <p className="text-sm text-gray-500 mt-1">{schedDay}, {schedTime}</p>
              </div>
            ) : (
              <div className="px-6 py-5 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Day</label>
                  <div className="grid grid-cols-7 gap-1">
                    {DAYS.map(d => (
                      <button
                        key={d}
                        onClick={() => setSchedDay(d)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                          schedDay === d ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Time</label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {TIMES.map(t => (
                      <button
                        key={t}
                        onClick={() => setSchedTime(t)}
                        className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                          schedTime === t ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-violet-50 rounded-2xl px-4 py-3 text-center">
                  <p className="text-xs text-gray-500">Selected session</p>
                  <p className="font-bold text-violet-700 mt-0.5">{schedDay}, {schedTime}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSchedule(false)}
                    className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveSession}
                    className="flex-1 py-2.5 bg-violet-600 text-white rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"
                  >
                    Confirm
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
