import { useState, useEffect } from 'react'
import { useNav } from '../context/NavigationContext'
import {
  Star,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Trophy,
  AlertCircle,
  CheckCircle,
  X,
  Coins,
} from 'lucide-react'

const CoinAnimation = () => {
  const [coins, setCoins] = useState([])
  
  useEffect(() => {
    const newCoins = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      delay: i * 100,
      left: Math.random() * 40 - 20,
    }))
    setCoins(newCoins)
  }, [])
  
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {coins.map(coin => (
        <div
          key={coin.id}
          className="coin-bounce"
          style={{
            animationDelay: `${coin.delay}ms`,
            left: `${50 + coin.left}%`,
            top: '100%',
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <Coins size={18} className="text-amber-900" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function FeedbackForm({ buddy, onClose, onSubmit }) {
  const { addCoins } = useNav()
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [feedbackType, setFeedbackType] = useState(null) // 'positive' or 'needs-improvement'
  const [comments, setComments] = useState('')
  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const questions = [
    'Great communication skills',
    'Clear explanations',
    'Patient and supportive',
    'Well-prepared',
    'Flexible with pace',
    'Encouraged participation',
  ]

  const improvementQuestions = [
    'Could improve listening',
    'Needs better pace control',
    'Could be more organized',
    'Need more practice examples',
    'Could improve availability',
    'Other feedback',
  ]

  const activeQuestions = feedbackType === 'positive' ? questions : improvementQuestions

  const handleToggleQuestion = (question) => {
    setSelectedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    )
  }

  const handleSubmit = async () => {
    if (rating > 0 && feedbackType && selectedQuestions.length > 0) {
      onSubmit({
        rating,
        feedbackType,
        selectedQuestions,
        comments,
        buddy: buddy.name,
        timestamp: new Date().toLocaleString(),
      })
      // Award coins for providing feedback
      addCoins(25)
      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
      }, 2000)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Rate Your Session
            </h2>
            <p className="text-sm text-gray-600 mt-1">with {buddy.name}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Info Note */}
        <div className="mb-6 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
              <Coins size={22} className="text-amber-900" />
            </div>
            <p className="text-base font-extrabold text-amber-900 tracking-tight">Your feedback matters!</p>
            <span className="ml-auto bg-amber-900/20 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full whitespace-nowrap">+25 Coins</span>
          </div>
          <div className="bg-amber-50 px-4 py-3 flex items-center gap-2">
            <Coins size={14} className="text-amber-500 flex-shrink-0" />
            <p className="text-xs text-amber-800">
              Your honest feedback improves buddy-matching for everyone — and you'll earn <span className="font-bold">Study Coins</span> for sharing it!
            </p>
          </div>
        </div>

        {/* Success State */}
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mt-4">
              Thank you for your feedback!
            </p>
            <p className="text-sm text-gray-600 mt-2">
              This helps us improve your study buddy matching
            </p>
            
            {/* Coin Animation */}
            <div className="mt-8 mb-8">
              <CoinAnimation />
            </div>
            
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-full flex items-center gap-2 border border-amber-300 shadow-md">
              <Coins size={20} className="text-amber-600 animate-pulse" />
              <div>
                <p className="text-xs text-amber-600 font-medium">You earned</p>
                <p className="text-2xl font-bold text-amber-700">+25 Coins</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Star Rating */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                How would you rate this session?
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-all transform hover:scale-110"
                  >
                    <Star
                      size={40}
                      className={`transition-all ${
                        (hoveredRating || rating) >= star
                          ? 'fill-yellow-400 stroke-yellow-400'
                          : 'stroke-gray-300 fill-gray-100'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-xs text-gray-600 mt-2">
                  {rating === 5 && '⭐ Excellent session!'}
                  {rating === 4 && '👍 Very good session'}
                  {rating === 3 && '👌 Good session'}
                  {rating === 2 && '🤔 Could be better'}
                  {rating === 1 && '❌ Needs improvement'}
                </p>
              )}
            </div>

            {/* Feedback Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Was the experience positive or needs improvement?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFeedbackType('positive')}
                  className={`p-4 rounded-xl border-2 transition-all font-semibold flex items-center justify-center gap-2 ${
                    feedbackType === 'positive'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-emerald-300'
                  }`}
                >
                  <ThumbsUp
                    size={20}
                    className={feedbackType === 'positive' ? 'fill-current' : ''}
                  />
                  Positive
                </button>
                <button
                  onClick={() => setFeedbackType('needs-improvement')}
                  className={`p-4 rounded-xl border-2 transition-all font-semibold flex items-center justify-center gap-2 ${
                    feedbackType === 'needs-improvement'
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300'
                  }`}
                >
                  <AlertCircle size={20} />
                  Needs Improvement
                </button>
              </div>
            </div>

            {/* Related Questions */}
            {feedbackType && (
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  {feedbackType === 'positive' ? (
                    <>
                      <Trophy size={16} className="text-emerald-600" />
                      What went well?
                    </>
                  ) : (
                    <>
                      <AlertCircle size={16} className="text-amber-600" />
                      What could improve?
                    </>
                  )}
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {activeQuestions.map(question => (
                    <button
                      key={question}
                      onClick={() => handleToggleQuestion(question)}
                      className={`p-3 rounded-lg border-2 text-left font-medium transition-all flex items-center gap-2 ${
                        selectedQuestions.includes(question)
                          ? feedbackType === 'positive'
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-amber-500 bg-amber-50 text-amber-900'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                          selectedQuestions.includes(question)
                            ? feedbackType === 'positive'
                              ? 'bg-emerald-500 border-emerald-500'
                              : 'bg-amber-500 border-amber-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {selectedQuestions.includes(question) && (
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        )}
                      </div>
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MessageSquare size={16} className="text-violet-600" />
                Additional Comments (Optional)
              </label>
              <textarea
                value={comments}
                onChange={e => setComments(e.target.value)}
                placeholder="Share any additional thoughts..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-none"
                rows={3}
              />
            </div>

            {/* Validation Message */}
            {(rating === 0 || !feedbackType || selectedQuestions.length === 0) && (
              <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                <AlertCircle size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-700">
                  Please complete rating, feedback type, and select at least one question
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
              <button
                onClick={handleSubmit}
                disabled={rating === 0 || !feedbackType || selectedQuestions.length === 0}
                className="flex-1 px-4 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <CheckCircle size={18} />
                Submit Feedback
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
