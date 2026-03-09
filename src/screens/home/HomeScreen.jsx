import { Bell, Sparkles, Calendar } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import Avatar from '../../components/Avatar'
import { currentUser, schedule, aiSuggestions, notifications } from '../../data/dummy'

export default function HomeScreen() {
  const { navigate } = useNav()
  const unreadNotifs = notifications.filter(n => !n.read).length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-8 pt-8 pb-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white/70 text-sm font-medium">Good afternoon,</p>
            <h1 className="text-white text-2xl font-bold mt-0.5">{currentUser.name.split(' ')[0]} 👋</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bell size={18} className="text-white" />
              {unreadNotifs > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">
                  {unreadNotifs}
                </span>
              )}
            </button>
            <Avatar initials={currentUser.avatar} colorClass="bg-white/30" size="sm" />
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto flex gap-4 mt-6">
          {[
            { label: 'Sessions', value: currentUser.sessionsCount },
            { label: 'Buddies', value: currentUser.buddiesCount },
            { label: 'Rating', value: `${currentUser.rating}★` },
          ].map(stat => (
            <div key={stat.label} className="flex-1 max-w-[140px] bg-white/15 backdrop-blur rounded-2xl py-3 text-center">
              <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
              <p className="text-white/60 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div className="max-w-4xl mx-auto px-8 -mt-8 pb-10">
        <div className="grid grid-cols-3 gap-5">
          {/* Schedule Widget — spans 2 cols */}
          <div className="col-span-2 bg-white rounded-3xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-violet-600" />
                <h2 className="font-bold text-sm text-gray-800">Upcoming Sessions</h2>
              </div>
              <button className="text-violet-600 text-xs font-semibold">See all</button>
            </div>
            <div className="space-y-3">
              {schedule.map(s => (
                <div key={s.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                  <div className={`w-1.5 h-12 ${s.color} rounded-full flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 truncate">{s.title}</p>
                    <p className="text-xs text-gray-500 truncate">{s.subtitle}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-gray-700">{s.time}</p>
                    <p className="text-xs text-gray-400">{s.day}</p>
                  </div>
                  <button className="text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-xl flex-shrink-0">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="bg-white rounded-3xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-amber-500" />
              <h2 className="font-bold text-sm text-gray-800">AI Suggestions</h2>
            </div>
            <div className="space-y-3">
              {aiSuggestions.map(s => (
                <div key={s.id} className="p-3 bg-amber-50 rounded-2xl">
                  <p className="text-xs text-gray-700 leading-relaxed mb-2">{s.text}</p>
                  <button
                    onClick={() => {
                      if (s.type === 'buddy') navigate('user-profile-preview', { userId: s.targetId })
                      else if (s.type === 'group') navigate('group-detail', { groupId: s.targetId })
                    }}
                    className="text-[11px] font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full"
                  >
                    {s.action}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications — full width */}
          <div className="col-span-3 bg-white rounded-3xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell size={16} className="text-gray-600" />
                <h2 className="font-bold text-sm text-gray-800">Notifications</h2>
              </div>
              {unreadNotifs > 0 && (
                <span className="bg-rose-100 text-rose-600 text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {unreadNotifs} new
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {notifications.map(n => (
                <div
                  key={n.id}
                  className={`flex items-start gap-3 p-3 rounded-2xl ${n.read ? 'bg-gray-50' : 'bg-violet-50'}`}
                >
                  <span className="text-xl">{n.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs leading-relaxed ${n.read ? 'text-gray-600' : 'text-gray-800 font-medium'}`}>
                      {n.text}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{n.time}</p>
                  </div>
                  {!n.read && <div className="w-2 h-2 bg-violet-500 rounded-full flex-shrink-0 mt-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
