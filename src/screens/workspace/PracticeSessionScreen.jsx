import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, Trash2, Users } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { mySubjects, practiceTests, sampleQuestions } from '../../data/dummy'

export default function PracticeSessionScreen() {
  const { navigate, params, mySubjects, subjectPracticeTests, addPracticeTest, removePracticeTest } = useNav()
  const subjectId = params?.subjectId || 'sub1'
  const testId = params?.testId || null

  const subject = mySubjects.find(s => s.id === subjectId) || mySubjects[0]
  const tests = subjectPracticeTests[subjectId] || []

  const [isNewTestDialogOpen, setIsNewTestDialogOpen] = useState(false)
  const [newTestName, setNewTestName] = useState(`Auto Test ${tests.length + 1}`)
  const [selectedTestId, setSelectedTestId] = useState(testId || (tests[0]?.id || null))
  const [showExample, setShowExample] = useState(false)

  const test = tests.find(t => t.id === selectedTestId) || tests[0] || null
  const questions = test ? sampleQuestions.slice(0, Math.max(test.questionCount || 10, 10)) : []

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [isAnswerChecked, setIsAnswerChecked] = useState(false)
  const [isExerciseFinished, setIsExerciseFinished] = useState(false)
  const startTimeRef = useRef(Date.now())
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setNewTestName(`Auto Test ${tests.length + 1}`)
  }, [tests.length])

  const createNewTest = () => {
    const testName = newTestName.trim() || `Auto Test ${tests.length + 1}`
    const newTestId = addPracticeTest(subjectId, testName)
    if (newTestId) {
      setSelectedTestId(newTestId)
      setIsNewTestDialogOpen(false)
      navigate('practice-session', { subjectId, testId: newTestId })
    }
  }

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const q = questions[currentQuestion]
  const correct = answers.filter(a => a.correct).length
  const wrong = answers.filter(a => !a.correct).length

  const handleCheck = () => {
    if (selectedAnswer === null || !q) return
    const isCorrect = selectedAnswer === q.correctIndex
    setAnswers(prev => [...prev, { questionId: q.id, correct: isCorrect }])
    setIsAnswerChecked(true)
  }

  const handleNextQuestion = () => {
    if (!q) return

    if (!isAnswerChecked && selectedAnswer !== null) {
      const isCorrect = selectedAnswer === q.correctIndex
      setAnswers(prev => [...prev, { questionId: q.id, correct: isCorrect }])
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(i => i + 1)
      setSelectedAnswer(null)
      setIsAnswerChecked(false)
      setShowExample(false)
    } else {
      setIsExerciseFinished(true)
      setIsAnswerChecked(false)
      setShowExample(false)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(i => i - 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('my-workspace')} className="hover:text-gray-800">My Workspace</button>
          <span>/</span>
          <button onClick={() => navigate('subject-detail', { subjectId })} className="hover:text-gray-800">{subject?.name || 'Subject'}</button>
          <span>/</span>
          <span className="font-semibold text-gray-900">Practice Tests</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Practice Tests • {subject?.name || 'Unknown'}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setIsNewTestDialogOpen(true)}
              className="bg-amber-600 text-white px-4 py-2 rounded-xl text-sm"
            >
              New Test
            </button>
            <button
              onClick={() => navigate('subject-detail', { subjectId })}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm">
              Back to Subject
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white rounded-2xl p-4 shadow-sm h-[70vh]">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Tests</h3>
            <div className="space-y-2 h-[calc(70vh-2.5rem)] overflow-y-auto pr-1">
              {tests.length === 0 && <p className="text-xs text-gray-400">No tests available.</p>}
              {tests.map(test => (
                <div
                  key={test.id}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl ${selectedTestId === test.id ? 'bg-amber-100 text-amber-800' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
                  <button
                    onClick={() => {
                      setSelectedTestId(test.id)
                      setCurrentQuestion(0)
                      setSelectedAnswer(null)
                      setAnswers([])
                      setIsAnswerChecked(false)
                      setIsExerciseFinished(false)
                      startTimeRef.current = Date.now()
                      setElapsed(0)
                    }}
                    className="w-full text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{test.name}</span>
                      <span className="text-xs text-gray-500">{test.questionCount || 10} Qs</span>
                    </div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removePracticeTest(subjectId, test.id)
                      if (selectedTestId === test.id) {
                        const remaining = tests.filter(t => t.id !== test.id)
                        const next = remaining[0] || null
                        if (next) {
                          setSelectedTestId(next.id)
                          setCurrentQuestion(0)
                          setSelectedAnswer(null)
                          setAnswers([])
                          startTimeRef.current = Date.now()
                          setElapsed(0)
                        }
                      }
                    }}
                    className="ml-2 p-1 rounded-full text-red-500 hover:bg-red-100"
                    title="Delete test"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-3xl shadow-sm p-6 min-h-[60vh] flex flex-col">
            {isExerciseFinished ? (
              <div className="flex-1 overflow-y-auto">
                {/* Score header */}
                <div className="text-center mb-6">
                  <p className="text-2xl font-bold text-gray-900 mb-1">Test Complete</p>
                  <div className="flex items-center justify-center gap-6 mt-3">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-emerald-600">{correct}</p>
                      <p className="text-xs text-gray-500">Correct</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-red-500">{wrong}</p>
                      <p className="text-xs text-gray-500">Incorrect</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gray-700">{Math.round((correct / (answers.length || 1)) * 100)}%</p>
                      <p className="text-xs text-gray-500">Score</p>
                    </div>
                  </div>
                </div>

                {/* Weak topics */}
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

                {/* Wrong answers breakdown */}
                {wrong > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Review incorrect answers</p>
                    <div className="space-y-3">
                      {answers.filter(a => !a.correct).map(a => {
                        const q = questions.find(q => q.id === a.questionId)
                        if (!q) return null
                        return (
                          <div key={a.questionId} className="bg-white border border-red-100 rounded-2xl p-4">
                            <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-1">{q.topic}</p>
                            <p className="text-sm font-semibold text-gray-900 mb-2">{q.question}</p>
                            <p className="text-xs text-emerald-700 font-medium mb-2">✓ {q.options[q.correctIndex]}</p>
                            <p className="text-xs text-gray-600 leading-relaxed">{q.explanation}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => {
                    setCurrentQuestion(0)
                    setSelectedAnswer(null)
                    setAnswers([])
                    setIsAnswerChecked(false)
                    setIsExerciseFinished(false)
                    setShowExample(false)
                    startTimeRef.current = Date.now()
                    setElapsed(0)
                  }}
                  className="w-full px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-colors"
                >
                  Retry Test
                </button>
              </div>
            ) : !test || questions.length === 0 ? (
              <div className="flex-1 flex flex-col justify-center items-center text-center">
                <p className="text-lg font-semibold text-gray-600">No questions in selected test</p>
                <p className="text-sm text-gray-400">Create or select a test from the left</p>
              </div>
            ) : (
              <>
                {/* Question card */}
                {q && (
                  <div className="bg-white rounded-3xl p-6 shadow-sm text-center mb-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Question</p>
                    <p className="text-lg font-bold text-gray-900 leading-snug mb-4">{q.question}</p>
                    <p className="text-sm text-gray-300 mb-3">tap an option below to answer</p>
                    {isAnswerChecked && (
                      <p className={`text-sm font-semibold ${q && selectedAnswer === q.correctIndex ? 'text-green-600' : 'text-red-600'}`}>
                        {selectedAnswer === q.correctIndex ? 'Correct! Well done.' : 'Incorrect. Check the right answer below.'}
                      </p>
                    )}
                  </div>
                )}

                {/* Answer options */}
                {q && (
                  <div className="space-y-3 mb-4">
                    {q.options.map((option, i) => {
                      const isCorrect = i === q.correctIndex
                      const isWrongSelection = isAnswerChecked && selectedAnswer === i && !isCorrect
                      const isCorrectSelection = isAnswerChecked && isCorrect

                      return (
                        <button
                          key={i}
                          onClick={() => {
                            if (!isAnswerChecked) setSelectedAnswer(i)
                          }}
                          disabled={isAnswerChecked}
                          className={`w-full flex items-center gap-4 rounded-2xl p-4 border-2 text-left transition-all ${
                            isCorrectSelection
                              ? 'border-green-500 bg-green-50'
                              : isWrongSelection
                              ? 'border-red-500 bg-red-50'
                              : selectedAnswer === i
                              ? 'border-amber-500 bg-amber-50'
                              : 'bg-white border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                            isCorrectSelection
                              ? 'border-green-500 bg-green-500'
                              : isWrongSelection
                              ? 'border-red-500 bg-red-500'
                              : selectedAnswer === i
                              ? 'border-amber-500 bg-amber-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedAnswer === i && <div className="w-2 h-2 bg-white rounded-full" />}
                          </div>
                          <span className={`text-sm font-medium ${
                            isCorrectSelection
                              ? 'text-green-800'
                              : isWrongSelection
                              ? 'text-red-800'
                              : selectedAnswer === i
                              ? 'text-amber-900'
                              : 'text-gray-800'
                          }`}>
                            {option}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* Explanation panel — shown after checking */}
                {isAnswerChecked && q?.explanation && (
                  <div className={`rounded-2xl p-4 mb-4 border-l-4 ${selectedAnswer === q.correctIndex ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
                    <p className="text-xs font-bold uppercase tracking-wide mb-1 ${selectedAnswer === q.correctIndex ? 'text-green-700' : 'text-red-700'}">
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

                {/* Bottom navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold text-sm disabled:opacity-40"
                  >
                    ← Previous Questions
                  </button>
                  <button
                    onClick={handleCheck}
                    disabled={selectedAnswer === null || isAnswerChecked}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-2xl font-bold text-sm disabled:opacity-50"
                  >
                    Check Answer
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="flex-1 bg-gradient-to-r from-lime-600 to-emerald-500 text-white py-3 rounded-2xl font-bold text-sm"
                  >
                    Next Question →
                  </button>
                </div>

                {/* Session stats */}
                <p className="text-xs text-gray-400 text-center mt-3">
                  ✓ {correct} correct · ✗ {wrong} wrong · ⏱ {formatTime(elapsed)} elapsed
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {isNewTestDialogOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-5">
            <h3 className="text-lg font-bold mb-3">Create a new test</h3>
            <input
              value={newTestName}
              onChange={(e) => setNewTestName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Test name"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setIsNewTestDialogOpen(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={createNewTest}
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
