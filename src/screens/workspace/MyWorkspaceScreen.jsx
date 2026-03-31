import { useState, useEffect } from 'react'
import { ChevronLeft, Search, Plus, X, Trash2, Sparkles } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'

export default function MyWorkspaceScreen() {
  const { navigate, reset, params, mySubjects, addSubject, removeSubject, addFlashcardDeck, addPracticeTest, summaryOnboarding, setSummaryOnboarding } = useNav()
  const joinedSession = params?.joinedSession || null
  const [query, setQuery] = useState('')
  const [showAddSubject, setShowAddSubject] = useState(false)
  const [newSubjectName, setNewSubjectName] = useState('')
  const [actionType, setActionType] = useState(null)
  const [showActionModal, setShowActionModal] = useState(false)
  const [selectedSubjectId, setSelectedSubjectId] = useState(mySubjects[0]?.id || '')
  const [actionName, setActionName] = useState('')
  const [actionStatus, setActionStatus] = useState('')
  const [subjectToDelete, setSubjectToDelete] = useState(null)

  const filtered = mySubjects.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase())
  )

  const totalMaterials = mySubjects.reduce((sum, s) => sum + s.materialsCount, 0)
  const totalFlashcards = mySubjects.reduce((sum, s) => sum + s.flashcardsCount, 0)
  const totalTests = mySubjects.reduce((sum, s) => sum + s.testsCount, 0)

  const stats = [
    { emoji: '📚', value: mySubjects.length, label: 'Subjects' },
    { emoji: '📄', value: totalMaterials, label: 'Materials' },
    { emoji: '🃏', value: totalFlashcards, label: 'Cards' },
    { emoji: '✏️', value: totalTests, label: 'Tests' },
  ]

  useEffect(() => {
    if (mySubjects.length > 0 && !mySubjects.some(sub => sub.id === selectedSubjectId)) {
      setSelectedSubjectId(mySubjects[0].id)
    }
  }, [mySubjects, selectedSubjectId])

  const quickActions = [
    { emoji: '🃏', title: 'Create Flashcards', sub: 'Turn your notes into study cards', type: 'flashcards' },
    { emoji: '✏️', title: 'Generate Practice Test', sub: 'Get questions from your materials', type: 'practice' },
    { emoji: '📝', title: 'Summarize Notes', sub: 'Get key points from uploaded docs', type: 'summarize' },
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

      {/* Joined session banner */}
      {joinedSession && (
        <div className="bg-violet-50 border-b border-violet-100 px-8 py-3">
          <div className="max-w-5xl mx-auto flex items-center gap-2">
            <span className="text-base">🟢</span>
            <p className="text-sm font-semibold text-violet-800">
              Joined: <span className="font-bold">{joinedSession.title}</span>
              {joinedSession.subtitle && <span className="font-normal text-violet-600"> · {joinedSession.subtitle}</span>}
            </p>
            <span className="ml-auto text-xs text-violet-500">{joinedSession.time} · {joinedSession.day}</span>
          </div>
        </div>
      )}

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
          <button
            onClick={() => setShowAddSubject(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2.5 rounded-2xl font-semibold text-sm ml-auto"
          >
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
            <div
              key={subject.id}
              className="relative bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => navigate('subject-detail', { subjectId: subject.id })}
                className="w-full text-left"
              >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${subject.color} rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {subject.abbrev}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-900 truncate">{subject.name}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-8 mt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  <span className="font-bold text-base">{subject.materialsCount}</span>
                  <span className="text-xs text-gray-500">Materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🃏</span>
                  <span className="font-bold text-base">{subject.flashcardsCount}</span>
                  <span className="text-xs text-gray-500">Cards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">✏️</span>
                  <span className="font-bold text-base">{subject.testsCount}</span>
                  <span className="text-xs text-gray-500">Tests</span>
                </div>
              </div>
              </button>
              <button
                onClick={() => setSubjectToDelete(subject)}
                className="absolute top-3 right-3 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Quick Actions</h2>
        <div className="grid grid-cols-3 gap-4">
          {quickActions.map(action => {
            const card = (
              <button
                key={action.title}
                onClick={() => {
                  if (action.type === 'flashcards') { navigate('quick-flashcards'); return }
                  if (action.type === 'practice') { navigate('quick-practice'); return }
                  if (action.type === 'summarize') { navigate('quick-summary') }
                }}
                className="w-full border-2 border-dashed border-gray-200 rounded-2xl p-5 bg-gray-50 text-center hover:border-violet-300 hover:bg-violet-50 transition-all"
              >
                <p className="text-3xl mb-2">{action.emoji}</p>
                <p className="font-semibold text-sm text-gray-800">{action.title}</p>
                <p className="text-xs text-gray-500 mt-1">{action.sub}</p>
              </button>
            )

            if (action.type !== 'summarize') return card

            return (
              <div key={action.title} className="relative">
                {summaryOnboarding && (
                  <div className="absolute bottom-full left-0 right-0 z-10 mb-2 rounded-xl bg-indigo-600 shadow-lg p-3">
                    <div className="absolute -bottom-2 left-6 w-3.5 h-3.5 bg-indigo-600 rotate-45" />
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          <Sparkles size={10} />
                          New
                        </span>
                        <span className="text-xs font-semibold text-white">Quick Summary</span>
                      </div>
                      <button onClick={() => setSummaryOnboarding(false)} className="text-white/60 hover:text-white flex-shrink-0">
                        <X size={13} />
                      </button>
                    </div>
                    <ol className="space-y-0.5 text-xs text-indigo-100 list-decimal list-inside mb-3">
                      <li>Go into any subject</li>
                      <li>Check the materials you want to include</li>
                      <li>Press <span className="font-semibold text-white">Summarize Selected</span></li>
                    </ol>
                    <button
                      onClick={() => setSummaryOnboarding(false)}
                      className="w-full bg-white text-indigo-600 text-xs font-bold py-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Got it
                    </button>
                  </div>
                )}
                {card}
              </div>
            )
          })}
        </div>
      </div>

      {showAddSubject && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Add New Subject</h3>
              <button onClick={() => setShowAddSubject(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">Enter the subject name to add it to your workspace.</p>
            <input
              type="text"
              value={newSubjectName}
              onChange={e => setNewSubjectName(e.target.value)}
              placeholder="Subject name"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowAddSubject(false)}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  addSubject(newSubjectName)
                  setNewSubjectName('')
                  setShowAddSubject(false)
                }}
                disabled={!newSubjectName.trim()}
                className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold disabled:opacity-50"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {subjectToDelete && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">Delete Subject</h3>
              <button onClick={() => setSubjectToDelete(null)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-5">
              Are you sure you want to delete <span className="font-semibold text-gray-800">{subjectToDelete.name}</span>? All its materials, flashcards, and tests will be permanently removed.
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setSubjectToDelete(null)}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  removeSubject(subjectToDelete.id)
                  setSubjectToDelete(null)
                }}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showActionModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">
                {actionType === 'flashcards' && 'Create Flashcard Deck'}
                {actionType === 'practice' && 'Generate Practice Test'}
                {actionType === 'summarize' && 'Summarize Notes'}
              </h3>
              <button onClick={() => setShowActionModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            {actionType !== 'summarize' && (
              <>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Subject</label>
                <select
                  value={selectedSubjectId}
                  onChange={e => setSelectedSubjectId(e.target.value)}
                  className="w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded-xl text-sm"
                >
                  {mySubjects.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>

                <label className="text-xs text-gray-500 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  value={actionName}
                  onChange={e => setActionName(e.target.value)}
                  placeholder={actionType === 'flashcards' ? 'e.g. Biology Review' : 'e.g. Midterm Practice'}
                  className="w-full mt-2 mb-4 px-3 py-2 border border-gray-300 rounded-xl text-sm"
                />
              </>
            )}

            {actionStatus && <p className="text-sm text-violet-600 mb-3">{actionStatus}</p>}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowActionModal(false)}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
              {actionType !== 'summarize' && (
                <button
                  onClick={() => {
                    if (!selectedSubjectId) return
                    if (!actionName.trim()) {
                      setActionStatus('Please enter a name for the item.')
                      return
                    }

                    if (actionType === 'flashcards') {
                      const normalizedName = actionName.trim() || `Flashcard Deck ${Date.now()}`
                      const cards = Array.from({ length: 10 }).map((_, i) => ({
                        id: `c${Date.now()}_${i}`,
                        question: `${normalizedName} Question ${i + 1}`,
                        answer: `${normalizedName} Answer ${i + 1}`,
                      }))
                      addFlashcardDeck(selectedSubjectId, normalizedName, cards)
                      setActionStatus('10 flashcards created in a new deck!')
                    }
                    if (actionType === 'practice') {
                      addPracticeTest(selectedSubjectId, actionName)
                      setActionStatus('Practice test generated!')
                    }

                    setTimeout(() => {
                      setShowActionModal(false)
                    }, 700)
                  }}
                  className="px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-semibold"
                >
                  Confirm
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
