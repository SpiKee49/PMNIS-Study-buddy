import { useState } from 'react'
import { ChevronLeft, Upload, FileText, Folder, Plus, X, Check, ClipboardList, Users } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { sampleQuestions } from '../../data/dummy'

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

export default function QuickPracticeScreen() {
  const { navigate, mySubjects, addPracticeTest, addSubject } = useNav()

  const [showFilePicker, setShowFilePicker] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [questions, setQuestions] = useState(null)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [answers, setAnswers] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  const [showExample, setShowExample] = useState(false)

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
    setQuestions(null)
    setTimeout(() => {
      setQuestions(sampleQuestions.slice(0, 8))
      setIsGenerating(false)
      setCurrentQuestion(0)
      setSelectedAnswer(null)
      setIsAnswerChecked(false)
      setAnswers([])
      setIsFinished(false)
      setSavedTo(null)
    }, 2000)
  }

  const handleCheck = () => {
    if (selectedAnswer === null || !q) return
    const isCorrect = selectedAnswer === q.correctIndex
    setAnswers(prev => [...prev, { questionId: q.id, correct: isCorrect }])
    setIsAnswerChecked(true)
  }

  const handleNext = () => {
    if (!isAnswerChecked && selectedAnswer !== null) {
      setAnswers(prev => [...prev, { questionId: q.id, correct: selectedAnswer === q.correctIndex }])
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(i => i + 1)
      setSelectedAnswer(null)
      setIsAnswerChecked(false)
      setShowExample(false)
    } else {
      setIsFinished(true)
      setShowExample(false)
    }
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

    const testName = selectedFiles.length === 1
      ? selectedFiles[0].name.replace(/\.[^.]+$/, '')
      : `Quick Test (${selectedFiles.length} files)`

    addPracticeTest(subjectId, testName)
    setSavedTo(subjectName)
    setShowAddToSubject(false)
    setIsCreatingNew(false)
    setNewSubjectName('')
  }

  const q = questions?.[currentQuestion] || null
  const correct = answers.filter(a => a.correct).length

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
          <span className="font-semibold text-gray-900">Generate Practice Test</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6 space-y-6">

        {/* Upload section */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center">
              <Upload size={20} className="text-amber-600" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Select Source Files</h2>
              <p className="text-xs text-gray-500">Choose files to generate a practice test from</p>
            </div>
          </div>

          {/* Drop zone */}
          <div
            onClick={() => setShowFilePicker(true)}
            className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 cursor-pointer hover:border-amber-300 hover:bg-amber-50 transition-all mb-5"
          >
            <Upload size={22} className="text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-600">Drop files here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">PDF, DOCX, images, text notes</p>
          </div>

          {/* Selected file chips */}
          {selectedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedFiles.map(f => (
                <span key={f.id} className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  <FileText size={11} />
                  {f.name}
                  <button onClick={() => handleFileToggle(f)} className="ml-0.5 hover:text-amber-900">
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={selectedFiles.length === 0 || isGenerating}
            className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl disabled:opacity-40 transition-opacity"
          >
            {isGenerating ? 'Generating test…' : 'Generate Practice Test'}
          </button>
        </div>

        {/* Generating skeleton */}
        {isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin" />
            <p className="text-sm text-gray-500 font-medium">Analysing your files and generating questions…</p>
          </div>
        )}

        {/* Test viewer */}
        {questions && !isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center">
                  <ClipboardList size={20} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Generated Practice Test</h2>
                  <p className="text-xs text-gray-500">{questions.length} questions from {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}</p>
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
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
                >
                  <Plus size={15} />
                  Add to Subject
                </button>
              )}
            </div>

            {isFinished ? (
              <div className="py-6">
                <div className="text-center mb-6">
                  <p className="text-3xl font-bold text-gray-900 mb-1">{correct}/{questions.length}</p>
                  <p className="text-sm text-gray-500">questions correct</p>
                </div>

                {(() => {
                  const weakTopics = [...new Set(
                    answers
                      .filter(a => !a.correct)
                      .map(a => questions.find(q => q.id === a.questionId)?.topic)
                      .filter(Boolean)
                  )]
                  return weakTopics.length > 0 ? (
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-5">
                      <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Areas to improve</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {weakTopics.map(t => (
                          <span key={t} className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{t}</span>
                        ))}
                      </div>
                      <button
                        onClick={() => navigate('weak-area-match', { weakTopics })}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                      >
                        <Users size={13} />
                        Find a Study Partner for these topics
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-5 text-center">
                      <p className="text-sm font-semibold text-emerald-700">Perfect score! No weak areas detected.</p>
                    </div>
                  )
                })()}

                <button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setSelectedAnswer(null)
                    setIsAnswerChecked(false)
                    setAnswers([])
                    setIsFinished(false)
                  }}
                  className="w-full px-6 py-2.5 bg-amber-500 text-white font-semibold rounded-xl text-sm"
                >
                  Retry
                </button>
              </div>
            ) : q ? (
              <>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-xs text-gray-400">{correct} correct so far</span>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 mb-4">
                  <p className="text-base font-semibold text-gray-900">{q.question}</p>
                </div>

                <div className="space-y-2 mb-5">
                  {q.options.map((option, idx) => {
                    let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                    if (isAnswerChecked) {
                      if (idx === q.correctIndex) style = 'bg-emerald-50 border-emerald-400 text-emerald-800'
                      else if (idx === selectedAnswer) style = 'bg-red-50 border-red-400 text-red-800'
                    } else if (selectedAnswer === idx) {
                      style = 'bg-amber-50 border-amber-400 text-amber-800'
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => !isAnswerChecked && setSelectedAnswer(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-colors text-sm font-medium ${style}`}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation panel */}
                {isAnswerChecked && q?.explanation && (
                  <div className={`rounded-2xl p-4 mb-4 border-l-4 ${selectedAnswer === q.correctIndex ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: selectedAnswer === q.correctIndex ? '#15803d' : '#b91c1c' }}>
                      {selectedAnswer === q.correctIndex ? '✓ Why this is correct' : '✗ Why this is wrong'}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                    {q.example && (
                      <div className="mt-3">
                        <button
                          onClick={() => setShowExample(v => !v)}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline"
                        >
                          {showExample ? 'Hide example' : 'Show example'}
                        </button>
                        {showExample && (
                          <div className="mt-2 bg-white rounded-xl p-3 border border-gray-200">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Example</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{q.example}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => { setCurrentQuestion(i => Math.max(i - 1, 0)); setSelectedAnswer(null); setIsAnswerChecked(false); setShowExample(false) }}
                    disabled={currentQuestion === 0}
                    className="flex-1 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm disabled:opacity-40"
                  >
                    Previous
                  </button>
                  {!isAnswerChecked ? (
                    <button
                      onClick={handleCheck}
                      disabled={selectedAnswer === null}
                      className="flex-1 py-2.5 rounded-xl bg-amber-500 text-white font-semibold text-sm disabled:opacity-40"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="flex-1 py-2.5 rounded-xl bg-amber-500 text-white font-semibold text-sm"
                    >
                      {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish'}
                    </button>
                  )}
                </div>
              </>
            ) : null}
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
                    <Folder size={15} className="text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700 capitalize">{folder}</span>
                  </div>
                  <div className="space-y-1.5">
                    {files.map(file => {
                      const isSelected = selectedFiles.some(f => f.id === file.id)
                      return (
                        <button
                          key={file.id}
                          onClick={() => handleFileToggle(file)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${isSelected ? 'bg-amber-50 border border-amber-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <FileText size={14} className={isSelected ? 'text-amber-500' : 'text-gray-400'} />
                          <span className="flex-1 text-left text-sm font-medium text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-400">{file.size}</span>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleFileToggle(file)}
                            onClick={e => e.stopPropagation()}
                            className="accent-amber-500"
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
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-2xl disabled:opacity-40 transition-colors"
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
                <p className="text-sm text-gray-500 mb-3">Choose a subject to save this test to:</p>

                {mySubjects.length > 0 ? (
                  <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {mySubjects.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSubjectId(s.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-left ${selectedSubjectId === s.id ? 'bg-amber-50 border border-amber-300' : 'bg-gray-50 hover:bg-gray-100 border border-transparent'}`}
                      >
                        <div className={`w-8 h-8 ${s.color} rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                          {s.abbrev}
                        </div>
                        <span className="font-medium text-sm text-gray-800">{s.name}</span>
                        {selectedSubjectId === s.id && <Check size={15} className="text-amber-500 ml-auto" />}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 mb-4">No subjects yet.</p>
                )}

                <button
                  onClick={() => setIsCreatingNew(true)}
                  className="w-full flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-500 hover:border-amber-300 hover:text-amber-600 transition-colors mb-4"
                >
                  <Plus size={14} />
                  Create new subject
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowAddToSubject(false)}
                    className="flex-1 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={!selectedSubjectId}
                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold disabled:opacity-40"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-amber-400"
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
                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold disabled:opacity-40"
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
