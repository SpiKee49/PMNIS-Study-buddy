import { ChevronLeft, MessageCircle, Star, Zap } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { students } from '../../data/dummy'

export default function WeakAreaMatchScreen() {
  const { navigate, goBack, params } = useNav()
  const weakTopics = params?.weakTopics || []

  // Normalize British/American spelling variants before comparing
  const norm = t => t.toLowerCase().replace(/isation/g, 'ization').replace(/isation/g, 'ization').trim()

  const matches = students
    .map(s => {
      const matched = weakTopics.filter(t =>
        s.specializations?.some(spec => norm(spec) === norm(t))
      )
      return { ...s, matchedTopics: matched }
    })
    .filter(s => s.matchedTopics.length > 0)
    .sort((a, b) => b.matchedTopics.length - a.matchedTopics.length)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => goBack()} className="flex items-center gap-1 hover:text-gray-800">
            <ChevronLeft size={16} />
          </button>
          <span>/</span>
          <span className="font-semibold text-gray-900">Recommended Study Partners</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6">
        {/* Weak topics summary */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6">
          <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Your weak areas from the test</p>
          <div className="flex flex-wrap gap-2">
            {weakTopics.map(t => (
              <span key={t} className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>

        {matches.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <p className="text-gray-500 text-sm">No partners found specialising in these topics yet.</p>
            <button
              onClick={() => navigate('discover')}
              className="mt-4 px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-xl"
            >
              Browse all students
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">
              {matches.length} partner{matches.length > 1 ? 's' : ''} found
            </p>
            <div className="space-y-4">
              {matches.map(student => (
                <div key={student.id} className="bg-white rounded-2xl shadow-sm p-5 flex gap-4 items-start">
                  {/* Avatar */}
                  <div className={`w-12 h-12 ${student.avatarColor} rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {student.avatar}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="font-bold text-gray-900">{student.name}</p>
                      {student.online && <span className="w-2 h-2 bg-emerald-400 rounded-full" />}
                    </div>
                    <p className="text-xs text-gray-400 mb-2">{student.year} · {student.faculty}</p>

                    {/* Matched topics */}
                    <div className="flex items-center gap-1.5 flex-wrap mb-3">
                      <Zap size={11} className="text-amber-500 flex-shrink-0" />
                      <span className="text-xs text-gray-500">Specialises in:</span>
                      {student.matchedTopics.map(t => (
                        <span key={t} className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>

                    {/* Match reason */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-3 italic">
                      "{student.name.split(' ')[0]} can help you with{' '}
                      {student.matchedTopics.length === 1
                        ? student.matchedTopics[0]
                        : `${student.matchedTopics.slice(0, -1).join(', ')} and ${student.matchedTopics[student.matchedTopics.length - 1]}`}
                      — covering {student.matchedTopics.length} of your {weakTopics.length} weak area{weakTopics.length > 1 ? 's' : ''}."
                    </p>

                    {/* Rating & sessions */}
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Star size={11} className="text-amber-400" />{student.rating}</span>
                      <span>{student.sessionsCount} sessions</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    <button
                      onClick={() => navigate('user-profile-preview', { userId: student.id })}
                      className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-xl transition-colors"
                    >
                      View Profile
                    </button>
                    <button
                      onClick={() => navigate('direct-message', { userId: student.id })}
                      className="flex items-center justify-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-xl transition-colors"
                    >
                      <MessageCircle size={12} />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('discover')}
              className="w-full mt-5 py-2.5 border-2 border-dashed border-gray-200 rounded-2xl text-sm text-gray-400 hover:border-violet-300 hover:text-violet-600 transition-colors"
            >
              Browse all students
            </button>
          </>
        )}
      </div>
    </div>
  )
}
