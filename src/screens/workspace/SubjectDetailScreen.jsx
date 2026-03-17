import { ChevronLeft, FileText, Code, Plus, Upload } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { mySubjects, subjectMaterials, flashcardDecks, practiceTests } from '../../data/dummy'

function FileIcon({ type }) {
  if (type === 'pdf') return <FileText size={18} className="text-rose-600" />
  return <FileText size={18} className="text-blue-600" />
}

function FileIconBg({ type }) {
  if (type === 'pdf') return 'bg-rose-100'
  return 'bg-blue-100'
}

export default function SubjectDetailScreen() {
  const { navigate, goBack, params } = useNav()
  const subjectId = params?.subjectId || 'sub1'
  const subject = mySubjects.find(s => s.id === subjectId) || mySubjects[0]
  const materials = subjectMaterials[subjectId] || []
  const decks = flashcardDecks[subjectId] || []
  const tests = practiceTests[subjectId] || []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <button
            onClick={() => navigate('my-workspace')}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-gray-300 text-sm">/</span>
          <button
            onClick={() => navigate('my-workspace')}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            My Workspace
          </button>
          <span className="text-gray-300 text-sm">/</span>
          <span className="text-sm font-semibold text-gray-900">{subject.name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        {/* Subject header bar */}
        <div className="flex items-center gap-4 bg-white rounded-3xl p-5 shadow-sm mb-6">
          <div className={`w-14 h-14 ${subject.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
            {subject.abbrev}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-lg text-gray-900">{subject.name}</p>
            <p className="text-xs text-gray-500 mb-2">
              {subject.materialsCount} materials · {subject.flashcardsCount} cards · {subject.testsCount} tests
            </p>
            <div className="flex items-center gap-2 max-w-xs">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${subject.color} rounded-full`} style={{ width: `${subject.mastery}%` }} />
              </div>
              <span className="text-xs font-semibold text-gray-600">{subject.mastery}% mastery</span>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2.5 rounded-2xl font-semibold text-sm flex-shrink-0">
            <Plus size={16} />
            Add Material
          </button>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left: Materials (col-span-2) */}
          <div className="col-span-2">
            <h2 className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">Study Materials</h2>
            <div className="space-y-2 mb-4">
              {materials.length > 0 ? materials.map(mat => (
                <div key={mat.id} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
                  <div className={`w-9 h-9 ${FileIconBg({ type: mat.type })} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <FileIcon type={mat.type} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-800 truncate">{mat.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {mat.size ? `${mat.size} · ` : ''}{mat.date}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-1.5 rounded-xl">
                      🃏 Cards
                    </button>
                    <button className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-xl">
                      ✏️ Test
                    </button>
                  </div>
                </div>
              )) : (
                <p className="text-sm text-gray-400 py-4 text-center">No materials yet for this subject.</p>
              )}
            </div>

            {/* Upload zone */}
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50 cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-all">
              <Upload size={20} className="text-gray-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-600">Drop files here or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PDF, DOCX, images, text notes</p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {/* Flashcard Decks */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-800 mb-3">🃏 Flashcard Decks</h3>
              <div className="space-y-2 mb-4">
                {decks.map(deck => (
                  <div key={deck.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
                    <p className="text-sm text-gray-800 font-medium">{deck.name}</p>
                    <span className="text-xs text-gray-500">{deck.cardCount} cards</span>
                  </div>
                ))}
                {decks.length === 0 && (
                  <p className="text-xs text-gray-400 text-center py-2">No decks yet</p>
                )}
              </div>
              <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 rounded-2xl font-semibold text-sm">
                Generate New Deck
              </button>
            </div>

            {/* Practice Tests */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-800 mb-3">✏️ Practice Tests</h3>
              <div className="space-y-2 mb-4">
                {tests.map(test => (
                  <button
                    key={test.id}
                    onClick={() => navigate('practice-session', { subjectId, testId: test.id })}
                    className="w-full flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 hover:bg-violet-50 transition-colors"
                  >
                    <p className="text-sm text-gray-800 font-medium">{test.name}</p>
                    <span className="text-xs text-gray-500">{test.questionCount} Qs</span>
                  </button>
                ))}
                {tests.length === 0 && (
                  <p className="text-xs text-gray-400 text-center py-2">No tests yet</p>
                )}
              </div>
              <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 rounded-2xl font-semibold text-sm">
                Generate New Test
              </button>
            </div>

            {/* Quick Summary */}
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-5 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800 mb-2">📝 Quick Summary</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Select any material above and get an instant summary of the key concepts, formulas, and definitions.
              </p>
              <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-2xl font-semibold text-sm">
                Summarize Selected
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
