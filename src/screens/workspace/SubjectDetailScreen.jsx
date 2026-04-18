import { useState, useEffect } from 'react'
import { ChevronLeft, FileText, Code, Plus, Upload, Folder, Trash2 } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { materialFlashcards, materialQuestions, genericFlashcardSets, genericQuestionSets } from '../../data/dummy'

function FileIcon({ type }) {
  if (type === 'pdf') return <FileText size={18} className="text-rose-600" />
  return <FileText size={18} className="text-blue-600" />
}

function FileIconBg({ type }) {
  if (type === 'pdf') return 'bg-rose-100'
  return 'bg-blue-100'
}

export default function SubjectDetailScreen() {
  const { navigate, goBack, params, mySubjects, setMySubjects, subjectMaterials, subjectFlashcardDecks, subjectPracticeTests, addMaterial, removeMaterial, addFlashcardDeck, addPracticeTest } = useNav()
  const subjectId = params?.subjectId || 'sub1'
  const subject = mySubjects.find(s => s.id === subjectId) || mySubjects[0]

  const [materials, setMaterials] = useState(subjectMaterials[subjectId] || [])
  const [decks, setDecks] = useState(subjectFlashcardDecks[subjectId] || [])
  const [tests, setTests] = useState(subjectPracticeTests[subjectId] || [])

  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const [uploadError, setUploadError] = useState('')

  const [summarySelection, setSummarySelection] = useState([])

  const [isDeckNameDialogOpen, setIsDeckNameDialogOpen] = useState(false)
  const [newDeckName, setNewDeckName] = useState(`Auto Deck ${decks.length + 1}`)
  const [selectedDeckId, setSelectedDeckId] = useState(null)

  const [isTestNameDialogOpen, setIsTestNameDialogOpen] = useState(false)
  const [newTestName, setNewTestName] = useState(`Auto Test ${tests.length + 1}`)
  const [selectedTestId, setSelectedTestId] = useState(null)

  useEffect(() => {
    setMaterials(subjectMaterials[subjectId] || [])
    const subjectDecks = subjectFlashcardDecks[subjectId] || []
    setDecks(subjectDecks)
    setTests(subjectPracticeTests[subjectId] || [])
    setSelectedFiles([])
    setUploadProgress(0)
    setIsUploading(false)
    setUploadSuccess(false)

  }, [subjectId, subjectMaterials, subjectFlashcardDecks, subjectPracticeTests])

  useEffect(() => {
    setNewDeckName(`Auto Deck ${decks.length + 1}`)
  }, [decks.length])

  useEffect(() => {
    setNewTestName(`Auto Test ${tests.length + 1}`)
  }, [tests.length])

  const currentDeck = decks[decks.length - 1] || decks[0] || null
  const totalFlashcardCount = subject.flashcardsCount || decks.reduce((sum, deck) => sum + (deck.cardCount || deck.cards?.length || 0), 0)

  const currentTest = tests[tests.length - 1] || tests[0] || null
  const totalTestCount = subject.testsCount || tests.length

  const folderFiles = {
    lecture: [
      { id: 'lec1', name: 'Lecture Notes - Topic 1.pdf', type: 'pdf', size: '2.1 MB' },
      { id: 'lec2', name: 'Lecture Slides - Topic 2.pptx', type: 'pptx', size: '3.4 MB' },
    ],
    exercise: [
      { id: 'ex1', name: 'Exercise Sheet - Week 1.docx', type: 'docx', size: '1.6 MB' },
      { id: 'ex2', name: 'Practice Problems - Week 2.pdf', type: 'pdf', size: '2.9 MB' },
    ]
  }

  const handleFileToggle = (file) => {
    setSelectedFiles(prev => {
      if (prev.some(f => f.id === file.id)) {
        return prev.filter(f => f.id !== file.id)
      }
      return [...prev, file]
    })
  }

  const toggleSummarySelection = (materialId) => {
    setSummarySelection(prev => prev.includes(materialId)
      ? prev.filter(id => id !== materialId)
      : [...prev, materialId]
    )
  }

  const handleSummarize = () => {
    const fromUploaded = materials.filter(m => summarySelection.includes(m.id))
    const fromNewFiles = selectedFiles.map(file => ({
      id: file.id,
      name: file.name,
      type: file.type,
      size: file.size,
    }))

    const allSources = [...fromUploaded, ...fromNewFiles]
    if (allSources.length === 0) {
      setUploadError('Select at least one uploaded file or choose new ones to summarize.')
      setTimeout(() => setUploadError(''), 3000)
      return
    }

    // Navigate to summary screen with selected materials
    navigate('summary', {
      subjectId,
      selectedMaterials: allSources
    })

  }


  const openDeckNameDialog = () => {
    setNewDeckName(`Auto Deck ${decks.length + 1}`)
    setIsDeckNameDialogOpen(true)
  }

  const createDeckWithName = (deckName) => {
    const sets = genericFlashcardSets[subjectId] || genericFlashcardSets.sub1
    const rawCards = sets[decks.length % sets.length]
    const cards = rawCards.map((c, i) => ({ id: `c${Date.now()}_${i}`, question: c.question, answer: c.answer }))
    const newDeckId = addFlashcardDeck(subjectId, deckName, cards)
    if (newDeckId) {
      setSelectedDeckId(newDeckId)
      setTimeout(() => navigate('flashcards', { subjectId, deckId: newDeckId }), 100)
    }
  }

  const openTestNameDialog = () => {
    setNewTestName(`Auto Test ${tests.length + 1}`)
    setIsTestNameDialogOpen(true)
  }

  const createTestWithName = (testName) => {
    const sets = genericQuestionSets[subjectId] || genericQuestionSets.sub1
    const questions = sets[tests.length % sets.length]
    const newTestId = addPracticeTest(subjectId, testName, questions)
    if (newTestId) {
      setSelectedTestId(newTestId)
      setTimeout(() => navigate('practice-session', { subjectId, testId: newTestId }), 100)
    }
  }

  const startUpload = () => {
    if (selectedFiles.length === 0 || isUploading) return

    // Prevent multiple uploads by setting flag immediately
    setIsUploading(true)

    // Filter out duplicates - only upload files that don't already exist
    const uniqueFiles = selectedFiles.filter(file =>
      !subjectMaterials[subjectId]?.some(mat => mat.name === file.name)
    )

    if (uniqueFiles.length === 0) {
      // All files are duplicates - show error message
      setUploadError('All selected files have already been uploaded.')
      setIsUploading(false)
      setTimeout(() => setUploadError(''), 3000)
      return
    }

    if (uniqueFiles.length < selectedFiles.length) {
      // Some files are duplicates - show warning but proceed with unique ones
      setUploadError(`${selectedFiles.length - uniqueFiles.length} file(s) already exist and will be skipped.`)
      setTimeout(() => setUploadError(''), 3000)
    }

    // Proceed with upload of unique files only
    proceedWithUpload(uniqueFiles)
  }

  const proceedWithUpload = (files) => {
    // isUploading is already set to true in startUpload
    setUploadProgress(0)
    setUploadSuccess(false)

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        const next = Math.min(prev + 20, 100)
        if (next >= 100) {
          clearInterval(progressInterval)
          // Upload complete - add materials
          setTimeout(() => {
            setIsUploading(false)
            setUploadSuccess(true)

            // Add each file using addMaterial to ensure proper state updates
            files.forEach(file => {
              const material = {
                name: file.name,
                type: file.type === 'pdf' ? 'pdf' : 'doc',
                size: file.size,
              }
              addMaterial(subjectId, material)
            })

            setSelectedFiles([])
            setTimeout(() => {
              setUploadSuccess(false)
              setIsUploadDialogOpen(false)
            }, 1000)
          }, 200)
        }
        return next
      })
    }, 100)
  }

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
              📚 {subject.materialsCount} materials · 🃏 {subject.flashcardsCount} cards · ✏️ {subject.testsCount} tests
            </p>
          </div>
          <button
            onClick={() => setIsUploadDialogOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2.5 rounded-2xl font-semibold text-sm flex-shrink-0"
          >
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
              {materials.length > 0 ? materials.map(mat => {
                const isSelected = summarySelection.includes(mat.id)
                return (
                  <div
                    key={mat.id}
                    onClick={() => toggleSummarySelection(mat.id)}
                    className={`cursor-pointer bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3 transition ${isSelected ? 'ring-2 ring-violet-400 bg-violet-50' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSummarySelection(mat.id)}
                      onClick={e => e.stopPropagation()}
                      className="mr-2 accent-violet-600"
                    />
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        const cards = materialFlashcards[mat.id]
                        if (cards) {
                          const deckName = mat.name
                          const newDeckId = addFlashcardDeck(subjectId, deckName, cards)
                          if (newDeckId) setTimeout(() => navigate('flashcards', { subjectId, deckId: newDeckId }), 100)
                        } else if (currentDeck) {
                          navigate('flashcards', { subjectId, deckId: currentDeck.id })
                        } else {
                          createDeckWithName(newDeckName)
                        }
                      }}
                      className="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-1.5 rounded-xl"
                    >
                      🃏 Cards
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        const questions = materialQuestions[mat.id]
                        if (questions) {
                          const testName = mat.name
                          const newTestId = addPracticeTest(subjectId, testName, questions)
                          if (newTestId) setTimeout(() => navigate('practice-session', { subjectId, testId: newTestId }), 100)
                        } else if (currentTest) {
                          navigate('practice-session', { subjectId, testId: currentTest.id })
                        } else {
                          createTestWithName(newTestName)
                        }
                      }}
                      className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-xl"
                    >
                      ✏️ Test
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removeMaterial(subjectId, mat.id)
                      }}
                      className="p-1.5 rounded-full text-red-500 hover:bg-red-100"
                      title="Delete material"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              )
              }) : (
                <p className="text-sm text-gray-400 py-4 text-center">No materials yet for this subject.</p>
              )}
            </div>

            {/* Upload zone */}
            <div
              onClick={() => setIsUploadDialogOpen(true)}
              className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center bg-gray-50 cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-all"
            >
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
              <div className="space-y-2 mb-2">
                <p className="text-xs text-gray-500">Total flashcards created: <span className="font-semibold text-gray-800">{totalFlashcardCount}</span></p>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                {currentDeck
                  ? `Latest deck: ${currentDeck.name} (${currentDeck.cardCount || currentDeck.cards?.length || 0} cards)`
                  : 'No decks yet. Tap New Flashcards to create your first 10 cards.'}
              </p>

              <button
                onClick={() => {
                  if (!currentDeck) return
                  navigate('flashcards', { subjectId, deckId: currentDeck.id })
                }}
                disabled={!currentDeck}
                className="w-full mb-3 bg-violet-700 text-white text-sm font-semibold py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Open Flashcards
              </button>

              <button
                onClick={openDeckNameDialog}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-2.5 rounded-2xl font-semibold text-sm"
              >
                New Flashcards
              </button>
            </div>

            {/* Practice Tests */}
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-sm text-gray-800 mb-3">✏️ Practice Tests</h3>
              <div className="space-y-2 mb-2">
                <p className="text-xs text-gray-500">Total tests created: <span className="font-semibold text-gray-800">{totalTestCount}</span></p>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                {currentTest
                  ? `Latest test: ${currentTest.name} (${currentTest.questionCount} questions)`
                  : 'No tests yet. Tap New Test to create your first practice test.'}
              </p>

              <button
                onClick={() => {
                  if (!currentTest) return
                  navigate('practice-session', { subjectId, testId: currentTest.id })
                }}
                disabled={!currentTest}
                className="w-full mb-3 bg-amber-600 text-white text-sm font-semibold py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Open Tests
              </button>

              <button
                onClick={openTestNameDialog}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2.5 rounded-2xl font-semibold text-sm"
              >
                New Test
              </button>
            </div>

            {/* Quick Summary */}
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-5 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800 mb-2">📝 Quick Summary</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Select any material above and get an instant summary of the key concepts, formulas, and definitions.
              </p>
              <button
                onClick={handleSummarize}
                className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-2xl font-semibold text-sm"
              >
                Summarize Selected
              </button>
              {uploadError && <p className="text-xs text-red-600 mt-2">{uploadError}</p>}
            </div>
          </div>
        </div>
      </div>

      {isUploadDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Select Files</h3>
              <button onClick={() => setIsUploadDialogOpen(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-3">Choose files from the folders below. Select one or both.</p>

            <div className="space-y-3 mb-4">
              {['lecture', 'exercise'].map(folder => (
                <div key={folder} className="border rounded-xl border-gray-200 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder size={16} className="text-violet-500" />
                    <h4 className="text-sm font-semibold text-gray-700 capitalize">{folder}</h4>
                  </div>
                  <div className="space-y-1">
                    {folderFiles[folder].map(file => {
                      const isSelected = selectedFiles.some(f => f.id === file.id)
                      return (
                        <button
                          key={file.id}
                          onClick={() => handleFileToggle(file)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${isSelected ? 'bg-violet-100 border border-violet-300' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <div className="flex items-center gap-2 text-left flex-1">
                            <span className="text-sm font-medium text-gray-700">{file.name}</span>
                            <span className="text-xs text-gray-400">{file.size}</span>
                          </div>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleFileToggle(file)}
                            onClick={e => e.stopPropagation()}
                            className="accent-violet-600"
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <button
                onClick={startUpload}
                className="w-full px-4 py-2.5 bg-violet-600 text-white font-semibold rounded-2xl disabled:opacity-50"
                disabled={selectedFiles.length === 0 || isUploading}
              >
                {isUploading ? 'Uploading...' : 'Select'}
              </button>

              {isUploading && (
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="h-full bg-violet-600 transition-all" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              )}

              {uploadSuccess && <p className="text-sm text-emerald-600 font-semibold">Upload complete! Files added to materials.</p>}

              {uploadError && <p className="text-sm text-red-600 font-semibold">{uploadError}</p>}
            </div>
          </div>
        </div>
      )}

      {isDeckNameDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-5">
            <h3 className="text-lg font-bold mb-3">Name your flashcard set</h3>
            <input
              value={newDeckName}
              onChange={(e) => setNewDeckName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Deck name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsDeckNameDialogOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const deckName = newDeckName.trim() || `Auto Deck ${decks.length + 1}`
                  setIsDeckNameDialogOpen(false)
                  createDeckWithName(deckName)
                }}
                className="px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {isTestNameDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-5">
            <h3 className="text-lg font-bold mb-3">Name your practice test</h3>
            <input
              value={newTestName}
              onChange={(e) => setNewTestName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Test name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsTestNameDialogOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const testName = newTestName.trim() || `Auto Test ${tests.length + 1}`
                  setIsTestNameDialogOpen(false)
                  createTestWithName(testName)
                }}
                className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
