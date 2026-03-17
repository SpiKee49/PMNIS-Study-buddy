import { useState } from 'react'
import { ChevronLeft, Search, Plus } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { mySubjects } from '../../data/dummy'

export default function MyWorkspaceScreen() {
  const { navigate, reset } = useNav()
  const [query, setQuery] = useState('')

  const filtered = mySubjects.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  )

  const totalMaterials = mySubjects.reduce((sum, s) => sum + s.materialsCount, 0)
  const totalFlashcards = mySubjects.reduce((sum, s) => sum + s.flashcardsCount, 0)
  const totalTests = mySubjects.reduce((sum, s) => sum + s.testsCount, 0)

  const stats = [
    { emoji: '📚', value: mySubjects.length, label: 'Subjects' },
    { emoji: '📄', value: totalMaterials, label: 'Materials' },
    { emoji: '🃏', value: totalFlashcards, label: 'Flashcards' },
    { emoji: '✏️', value: totalTests, label: 'Practice Tests' },
  ]

  const quickActions = [
    { emoji: '🃏', title: 'Create Flashcards', sub: 'Turn your notes into study cards' },
    { emoji: '✏️', title: 'Generate Practice Test', sub: 'Get questions from your materials' },
    { emoji: '📝', title: 'Summarize Notes', sub: 'Get key points from uploaded docs' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <button
            onClick={() => reset('home')}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-gray-300 text-sm">/</span>
          <span className="text-sm font-semibold text-gray-900">My Workspace</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        {/* Top bar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative max-w-md flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search subjects or materials..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-violet-400"
            />
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2.5 rounded-2xl font-semibold text-sm ml-auto">
            <Plus size={16} />
            Add Subject
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm text-center">
              <p className="text-2xl mb-1">{stat.emoji}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Your Subjects */}
        <h2 className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Your Subjects</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {filtered.map(subject => (
            <button
              key={subject.id}
              onClick={() => navigate('subject-detail', { subjectId: subject.id })}
              className="bg-white rounded-3xl p-5 shadow-sm text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${subject.color} rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {subject.abbrev}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 truncate">{subject.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {subject.materialsCount} materials · {subject.flashcardsCount} cards · {subject.testsCount} tests
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${subject.color} rounded-full`}
                    style={{ width: `${subject.mastery}%` }}
                  />
                </div>
                <span className="text-xs font-semibold text-gray-600 flex-shrink-0">{subject.mastery}%</span>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map(action => (
            <div
              key={action.title}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-5 bg-gray-50 text-center hover:border-violet-300 hover:bg-violet-50 transition-all cursor-pointer"
            >
              <p className="text-3xl mb-2">{action.emoji}</p>
              <p className="font-semibold text-sm text-gray-800">{action.title}</p>
              <p className="text-xs text-gray-500 mt-1">{action.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
