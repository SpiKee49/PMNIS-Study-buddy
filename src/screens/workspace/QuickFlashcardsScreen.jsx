import { useState } from 'react'
import { ChevronLeft, Upload, FileText, Folder, Plus, X, Check, BookOpen } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'

const SAMPLE_CARDS = [
  { id: 'qc1', question: 'What is the time complexity of binary search?', answer: 'O(log n) — the search space is halved at each step, so it takes logarithmic time.' },
  { id: 'qc2', question: 'What is a hash table?', answer: 'A data structure that maps keys to values using a hash function, providing O(1) average-case lookup, insertion, and deletion.' },
  { id: 'qc3', question: 'What is the difference between BFS and DFS?', answer: 'BFS explores nodes level by level using a queue; DFS explores as deep as possible first using a stack or recursion.' },
  { id: 'qc4', question: 'What does Big-O notation describe?', answer: 'The worst-case upper bound on how the runtime or space requirements of an algorithm grow as input size increases.' },
  { id: 'qc5', question: 'What is dynamic programming?', answer: 'An optimization technique that solves problems by breaking them into overlapping subproblems and storing results to avoid redundant computation.' },
  { id: 'qc6', question: 'What is a greedy algorithm?', answer: 'An algorithm that makes the locally optimal choice at each step, hoping to reach a globally optimal solution.' },
  { id: 'qc7', question: 'What is the time complexity of merge sort?', answer: 'O(n log n) in all cases — the array is always divided into halves and merged, regardless of input order.' },
  { id: 'qc8', question: 'What is memoization?', answer: 'A technique of caching the results of expensive function calls so they are not recomputed when the same inputs occur again.' },
]

const folderFiles = {
  lecture: [
    { id: 'lec1', name: 'Lecture Notes - Topic 1.pdf', type: 'pdf', size: '2.1 MB' },
    { id: 'lec2', name: 'Lecture Slides - Topic 2.pptx', type: 'pptx', size: '3.4 MB' },
  ],
  exercise: [
    { id: 'ex1', name: 'Exercise Sheet - Week 1.docx', type: 'docx', size: '1.6 MB' },
    { id: 'ex2', name: 'Practice Problems - Week 2.pdf', type: 'pdf', size: '2.9 MB' },
  ],
}

export default function QuickFlashcardsScreen() {
  const { navigate, mySubjects, addFlashcardDeck, addSubject } = useNav()

  const [showFilePicker, setShowFilePicker] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [cards, setCards] = useState(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const [showAddToSubject, setShowAddToSubject] = useState(false)
  const [selectedSubjectId, setSelectedSubjectId] = useState(mySubjects[0]?.id || '')
  const [isCreatingNew, setIsCreatingNew] = useState(false)
  const [newSubjectName, setNewSubjectName] = useState('')
  const [savedTo, setSavedTo] = useState(null)

  const handleFileToggle = (file) => {
    setSelectedFiles(prev =>
      prev.some(f => f.id === file.id)
        ? prev.filter(f => f.id !== file.id)
        : [...prev, file]
    )
  }

  const handleGenerate = () => {
    if (selectedFiles.length === 0) return
    setIsGenerating(true)
    setCards(null)
    setTimeout(() => {
      setCards(SAMPLE_CARDS)
      setIsGenerating(false)
      setCurrentCardIndex(0)
      setIsFlipped(false)
      setSavedTo(null)
    }, 2000)
  }

  const handleSave = () => {
    let subjectId = selectedSubjectId
    let subjectName = mySubjects.find(s => s.id === subjectId)?.name || ''

    if (isCreatingNew) {
      if (!newSubjectName.trim()) return
      subjectId = addSubject(newSubjectName.trim())
      subjectName = newSubjectName.trim()
    }

    if (!subjectId) return

    const deckName = selectedFiles.length === 1
      ? selectedFiles[0].name.replace(/\.[^.]+$/, '')
      : `Quick Deck (${selectedFiles.length} files)`

    addFlashcardDeck(subjectId, deckName, cards)
    setSavedTo(subjectName)
    setShowAddToSubject(false)
    setIsCreatingNew(false)
    setNewSubjectName('')
  }

  const currentCard = cards?.[currentCardIndex] || null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('my-workspace')} className="flex items-center gap-1 hover:text-gray-800">
            <ChevronLeft size={16} />
          </button>
          <span>/</span>
          <button onClick={() => navigate('my-workspace')} className="hover:text-gray-800">My Workspace</button>
          <span>/</span>
          <span className="font-semibold text-gray-900">Create Flashcards</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6 space-y-6">

        {/* Upload section */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-violet-100 rounded-2xl flex items-center justify-center">
              <Upload size={20} className="text-violet-600" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Select Source Files</h2>
              <p className="text-xs text-gray-500">Choose files to generate flashcards from</p>
            </div>
          </div>

          {/* Drop zone */}
          <div
            onClick={() => setShowFilePicker(true)}
            className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-all mb-5"
          >
            <Upload size={22} className="text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-600">Drop files here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">PDF, DOCX, images, text notes</p>
          </div>

          {/* Selected files chips */}
          {selectedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedFiles.map(f => (
                <span key={f.id} className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  <FileText size={11} />
                  {f.name}
                  <button onClick={() => handleFileToggle(f)} className="ml-0.5 hover:text-violet-900">
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={selectedFiles.length === 0 || isGenerating}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl disabled:opacity-40 transition-opacity"
          >
            {isGenerating ? 'Generating flashcards…' : 'Generate Flashcards'}
          </button>
        </div>

        {/* Generating skeleton */}
        {isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-violet-200 border-t-violet-600 animate-spin" />
            <p className="text-sm text-gray-500 font-medium">Analysing your files and creating cards…</p>
          </div>
        )}

        {/* Flashcard viewer */}
        {cards && !isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <BookOpen size={20} className="text-violet-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Generated Flashcards</h2>
                  <p className="text-xs text-gray-500">{cards.length} cards from {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              {savedTo ? (
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-sm font-semibold px-3 py-1.5 rounded-xl">
                  <Check size={14} />
                  Saved to {savedTo}
                </div>
              ) : (
                <button
                  onClick={() => setShowAddToSubject(true)}
                  className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  <Plus size={15} />
                  Add to Subject
                </button>
              )}
            </div>

            {/* Card */}
            <div
              onClick={() => setIsFlipped(prev => !prev)}
              className={`rounded-3xl border border-gray-200 p-8 flex flex-col justify-center items-center text-center cursor-pointer select-none transition hover:shadow-lg min-h-56 ${isFlipped ? 'bg-gray-100 text-gray-900' : 'bg-violet-900 text-white'}`}
            >
              <p className="text-xs uppercase tracking-widest mb-3 font-semibold opacity-70">{isFlipped ? 'Answer' : 'Question'}</p>
              <h2 className="text-2xl font-bold leading-snug max-w-2xl">
                {isFlipped ? currentCard?.answer : currentCard?.question}
              </h2>
              <p className="mt-4 text-xs font-semibold opacity-50">Card {currentCardIndex + 1} of {cards.length} · click to flip</p>
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => { setCurrentCardIndex(i => Math.max(i - 1, 0)); setIsFlipped(false) }}
                disabled={currentCardIndex === 0}
                className="flex-1 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={() => setIsFlipped(prev => !prev)}
                className="flex-1 py-2.5 rounded-xl bg-gray-200 text-gray-700 font-semibold text-sm"
              >
                Flip
              </button>
              <button
                onClick={() => { setCurrentCardIndex(i => (i + 1) % cards.length); setIsFlipped(false) }}
                className="flex-1 py-2.5 rounded-xl bg-violet-600 text-white font-semibold text-sm"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* File picker modal */}
      {showFilePicker && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Select Files</h3>
              <button onClick={() => setShowFilePicker(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">Choose files from the folders below.</p>

            <div className="space-y-3 mb-5">
              {Object.entries(folderFiles).map(([folder, files]) => (
                <div key={folder} className="border border-gray-200 rounded-2xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder size={15} className="text-violet-500" />
                    <span className="text-sm font-semibold text-gray-700 capitalize">{folder}</span>
                  </div>
                  <div className="space-y-1.5">
                    {files.map(file => {
                      const isSelected = selectedFiles.some(f => f.id === file.id)
                      return (
                        <button
                          key={file.id}
                          onClick={() => handleFileToggle(file)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${isSelected ? 'bg-violet-50 border border-violet-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <FileText size={14} className={isSelected ? 'text-violet-500' : 'text-gray-400'} />
                          <span className="flex-1 text-left text-sm font-medium text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-400">{file.size}</span>
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

            <button
              onClick={() => setShowFilePicker(false)}
              disabled={selectedFiles.length === 0}
              className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl disabled:opacity-40 transition-colors"
            >
              {selectedFiles.length === 0 ? 'Select files above' : `Confirm ${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''}`}
            </button>
          </div>
        </div>
      )}

      {/* Add to Subject modal */}
      {showAddToSubject && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Add to Subject</h3>
              <button onClick={() => { setShowAddToSubject(false); setIsCreatingNew(false); setNewSubjectName('') }} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>

            {!isCreatingNew ? (
              <>
                <p className="text-sm text-gray-500 mb-3">Choose a subject to save these flashcards to:</p>

                {mySubjects.length > 0 ? (
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {mySubjects.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSubjectId(s.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left ${selectedSubjectId === s.id ? 'bg-violet-50 border border-violet-300' : 'bg-gray-50 hover:bg-gray-100 border border-transparent'}`}
                      >
                        <div className={`w-8 h-8 ${s.color} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {s.abbrev}
                        </div>
                        <span className="font-medium text-sm text-gray-800">{s.name}</span>
                        {selectedSubjectId === s.id && <Check size={15} className="text-violet-600 ml-auto" />}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 mb-4">No subjects yet.</p>
                )}

                <button
                  onClick={() => setIsCreatingNew(true)}
                  className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-violet-300 hover:text-violet-600 transition-colors mb-4"
                >
                  <Plus size={14} />
                  Create new subject
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => { setShowAddToSubject(false); setNewSubjectName('') }}
                    className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!selectedSubjectId}
                    className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold disabled:opacity-40"
                  >
                    Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-3">Enter a name for the new subject:</p>
                <input
                  autoFocus
                  value={newSubjectName}
                  onChange={e => setNewSubjectName(e.target.value)}
                  placeholder="e.g. Operating Systems"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsCreatingNew(false)}
                    className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!newSubjectName.trim()}
                    className="flex-1 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold disabled:opacity-40"
                  >
                    Create & Save
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
