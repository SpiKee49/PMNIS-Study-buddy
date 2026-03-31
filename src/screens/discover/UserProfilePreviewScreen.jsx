import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { MessageCircle, UserPlus, Clock, BookOpen, Zap, ChevronLeft, X } from 'lucide-react'
import Avatar from '../../components/Avatar'
import { students, conversations, currentUser } from '../../data/dummy'
import { computeMatchScore, getMatchLabel } from '../../utils/matchScore'

export default function UserProfilePreviewScreen() {
  const { params, navigate, goBack, addBuddy, buddies, matchPreferences } = useNav()
  const student = students.find(s => s.id === params.userId) || students[0]
  const [showReason, setShowReason] = useState(false)
  const { score, positives, negatives } = computeMatchScore(currentUser, student, matchPreferences)
  const matchInfo = getMatchLabel(score)

  const handleAddBuddy = () => {
    if (!buddies.includes(student.id)) {
      addBuddy(student.id)
      alert(`${student.name} has been added to your buddies!`)
      navigate('buddies')
    } else {
      alert(`${student.name} is already in your buddies!`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-2 shadow-sm">
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium">
          <ChevronLeft size={18} /> Back
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Discover</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-500">{student.name}</span>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="grid grid-cols-3 gap-6">
          {/* Left card */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-6 text-center">
              <div className="flex justify-center">
                <Avatar initials={student.avatar} colorClass="bg-white/30" size="xl" online={student.online} />
              </div>
              <h1 className="text-lg font-bold text-white mt-3">{student.name}</h1>
              <p className="text-white/70 text-sm">{student.username}</p>
              <button
                onClick={() => setShowReason(true)}
                className="flex items-center justify-center gap-1.5 mt-3 bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full mx-auto w-fit transition-colors cursor-pointer"
              >
                <Zap size={12} className="text-amber-300" />
                <span className="text-xs font-bold text-white">{matchInfo.label}</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm grid grid-cols-3 divide-x divide-gray-100">
              {[
                { label: 'Rating', value: student.rating, icon: '⭐' },
                { label: 'Sessions', value: student.sessionsCount, icon: '📚' },
                { label: 'Buddies', value: student.buddiesCount, icon: '👥' },
              ].map(stat => (
                <div key={stat.label} className="text-center px-1">
                  <p className="text-sm">{stat.icon}</p>
                  <p className="font-bold text-gray-900 text-base">{stat.value}</p>
                  <p className="text-[10px] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const conversation = conversations.find(c => c.userId === student.id)
                navigate('direct-message', conversation ? { conversationId: conversation.id } : { userId: student.id })
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gray-100 rounded-2xl font-semibold text-sm text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <MessageCircle size={16} /> Message
            </button>
            <button
              onClick={handleAddBuddy}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl font-semibold text-sm text-white shadow-md shadow-violet-200"
            >
              <UserPlus size={16} /> Add Buddy
            </button>
          </div>

          {/* Right details */}
          <div className="col-span-2 space-y-4">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-2">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{student.bio}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-3">
              <BookOpen size={18} className="text-violet-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800">{student.university}</p>
                <p className="text-sm text-gray-500 mt-0.5">{student.faculty} · {student.year}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h2 className="font-bold text-gray-800 mb-3">Learning Style</h2>
                <span className="bg-violet-100 text-violet-700 text-sm font-semibold px-3 py-1.5 rounded-full">
                  {student.learningStyle} Learner
                </span>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h2 className="font-bold text-gray-800 mb-3">Availability</h2>
                <div className="space-y-1.5">
                  {student.availability.map(slot => (
                    <div key={slot} className="flex items-center gap-2">
                      <Clock size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-600">{slot}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-800 mb-3">Studying</h2>
              <div className="flex flex-wrap gap-2">
                {student.subjects.map(sub => (
                  <span key={sub} className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1.5 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Match detail modal */}
      {showReason && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={() => setShowReason(false)}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-violet-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Match with {student.name.split(' ')[0]}</p>
                  <p className="text-[11px] text-gray-400">Based on your preferences</p>
                </div>
              </div>
              <button onClick={() => setShowReason(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            {/* Score bar + label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all"
                  style={{ width: `${score}%` }}
                />
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${matchInfo.bg} ${matchInfo.text}`}>
                {matchInfo.label}
              </span>
            </div>

            {/* Positives */}
            {positives.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide mb-2">Works in your favour</p>
                <ul className="space-y-2">
                  {positives.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Negatives */}
            {negatives.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-rose-600 uppercase tracking-wide mb-2">What lowered the score</p>
                <ul className="space-y-2">
                  {negatives.map(n => (
                    <li key={n} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-rose-400 font-bold flex-shrink-0 mt-0.5">✗</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {positives.length === 0 && negatives.length === 0 && (
              <p className="text-sm text-gray-500 text-center py-2">Not enough data to explain this match yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
