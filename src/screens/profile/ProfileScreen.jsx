import { useNav } from '../../context/NavigationContext'
import { Settings, Edit3 } from 'lucide-react'
import Avatar from '../../components/Avatar'
import { currentUser } from '../../data/dummy'

export default function ProfileScreen() {
  const { navigate } = useNav()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero header */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-8 pt-8 pb-20">
        <div className="max-w-4xl mx-auto flex items-start justify-between">
          <div className="flex items-center gap-6">
            <Avatar initials={currentUser.avatar} colorClass="bg-white/30" size="xl" />
            <div>
              <h1 className="text-2xl font-bold text-white">{currentUser.name}</h1>
              <p className="text-white/70 text-sm mt-0.5">{currentUser.username}</p>
              <p className="text-white/60 text-xs mt-1">{currentUser.faculty}</p>
              <p className="text-white/60 text-xs">{currentUser.university}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => navigate('edit-profile')} className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-3 py-2 rounded-xl transition-colors">
              <Edit3 size={14} /> Edit
            </button>
            <button onClick={() => navigate('settings')} className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors">
              <Settings size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 -mt-10 pb-10">
        {/* Stats row */}
        <div className="bg-white rounded-3xl shadow-lg p-5 grid grid-cols-3 divide-x divide-gray-100 mb-5">
          {[
            { label: 'Study Sessions', value: currentUser.sessionsCount, icon: '📚' },
            { label: 'Study Buddies', value: currentUser.buddiesCount, icon: '👥' },
            { label: 'Average Rating', value: `${currentUser.rating} ★`, icon: '⭐' },
          ].map(stat => (
            <div key={stat.label} className="text-center px-4">
              <p className="text-xl mb-1">{stat.icon}</p>
              <p className="font-bold text-gray-900 text-2xl leading-tight">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Main column */}
          <div className="col-span-2 space-y-4">
            {/* Bio */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">About Me</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{currentUser.bio}</p>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Subjects</h3>
              <div className="flex flex-wrap gap-2">
                {currentUser.subjects.map(sub => (
                  <span key={sub} className="bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Achievements</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { emoji: '🏆', label: '25 Sessions' },
                  { emoji: '⭐', label: 'Top Rated' },
                  { emoji: '🔥', label: '7-day Streak' },
                  { emoji: '👥', label: 'Social Bee' },
                ].map(a => (
                  <div key={a.label} className="flex flex-col items-center gap-2 bg-amber-50 rounded-2xl p-3">
                    <span className="text-2xl">{a.emoji}</span>
                    <span className="text-xs text-amber-700 font-semibold text-center leading-tight">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side column */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Details</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Learning Style</span>
                  <span className="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full">{currentUser.learningStyle}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Year</span>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{currentUser.year}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3">Availability</h3>
              <div className="space-y-2.5">
                {currentUser.availability.map(slot => (
                  <div key={slot} className="flex items-center gap-2.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-xs text-gray-600">{slot}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
