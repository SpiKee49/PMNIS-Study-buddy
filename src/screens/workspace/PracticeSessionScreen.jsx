import { useState, useEffect, useRef } from 'react'
import { ChevronLeft } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { mySubjects, practiceTests, sampleQuestions } from '../../data/dummy'

export default function PracticeSessionScreen() {
  const { navigate, params } = useNav()
  const subjectId = params?.subjectId || 'sub1'
  const testId = params?.testId || 'pt1'
  const subject = mySubjects.find(s => s.id === subjectId) || mySubjects[0]
  const tests = practiceTests[subjectId] || []
  const test = tests.find(t => t.id === testId) || tests[0]

  const questions = sampleQuestions.slice(0, test?.questionCount || sampleQuestions.length)

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [answers, setAnswers] = useState([])
  const [mode, setMode] = useState('multiple-choice')
  const startTimeRef = useRef(Date.now())
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  const q = questions[currentQuestion]
  const correct = answers.filter(a => a.correct).length
  const wrong = answers.filter(a => !a.correct).length

  const modes = [
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'multiple-choice', label: 'Multiple Choice' },
    { id: 'written', label: 'Written' },
  ]

  const handleCheck = () => {
    if (selectedAnswer === null) return
    const isCorrect = selectedAnswer === q.correctIndex
    setAnswers(prev => [...prev, { questionId: q.id, correct: isCorrect }])
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(i => i + 1)
      setSelectedAnswer(null)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(i => i - 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Custom header */}
      <div className="bg-white border-b border-gray-100 px-8 py-3 flex items-center gap-3 shadow-sm">
        <button
          onClick={() => navigate('subject-detail', { subjectId })}
          className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm"
        >
          <ChevronLeft size={16} />
          Back to {subject.name}
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 mx-auto">
          <span className="text-sm font-semibold text-gray-700 mr-2">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          {questions.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i < currentQuestion
                  ? 'w-2 h-2 bg-violet-600'
                  : i === currentQuestion
                  ? 'w-2.5 h-2.5 bg-violet-600 ring-2 ring-violet-200'
                  : 'w-2 h-2 bg-gray-200'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => navigate('subject-detail', { subjectId })}
          className="bg-gray-100 text-gray-700 px-4 py-1.5 rounded-xl font-semibold text-sm flex-shrink-0"
        >
          End Session
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-6">
        {/* Mode tabs */}
        <div className="bg-gray-100 p-1 rounded-xl flex gap-1 mb-6">
          {modes.map(m => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                mode === m.id ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Question card */}
        {q && (
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center mb-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Question</p>
            <p className="text-lg font-bold text-gray-900 leading-snug mb-6">{q.question}</p>
            <p className="text-sm text-gray-300">tap an option below to answer</p>
          </div>
        )}

        {/* Answer options */}
        {q && (
          <div className="space-y-3 mb-4">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedAnswer(i)}
                className={`w-full flex items-center gap-4 bg-white rounded-2xl p-4 border-2 text-left transition-all ${
                  selectedAnswer === i
                    ? 'border-violet-500 bg-violet-50'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  selectedAnswer === i ? 'border-violet-500 bg-violet-500' : 'border-gray-300'
                }`}>
                  {selectedAnswer === i && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className={`text-sm font-medium ${selectedAnswer === i ? 'text-violet-900' : 'text-gray-800'}`}>
                  {option}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Bottom navigation */}
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold text-sm disabled:opacity-40"
          >
            ← Previous
          </button>
          <button
            onClick={handleCheck}
            disabled={selectedAnswer === null}
            className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm disabled:opacity-50"
          >
            Check Answer →
          </button>
        </div>

        {/* Session stats */}
        <p className="text-xs text-gray-400 text-center mt-3">
          ✓ {correct} correct · ✗ {wrong} wrong · ⏱ {formatTime(elapsed)} elapsed
        </p>
      </div>
    </div>
  )
}
