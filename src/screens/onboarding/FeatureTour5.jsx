import { useNav } from '../../context/NavigationContext'
import FeatureTourLayout from '../../components/FeatureTourLayout'

export default function FeatureTour5() {
  const { navigate, reset } = useNav()

  const detailContent = (
    <div className="space-y-3">
      {[
        { emoji: '🃏', label: 'Flashcards from your notes', sub: 'Upload a PDF or paste notes — get a deck of question-answer cards covering key concepts, ready for spaced repetition' },
        { emoji: '✏️', label: 'Practice tests that adapt', sub: 'Generate quizzes from your materials. After each attempt, the questions shift focus to topics where you struggled' },
        { emoji: '📝', label: 'Instant summaries', sub: 'Select any document and get a distilled overview of the main ideas, formulas, and definitions — perfect before exams' },
        { emoji: '📊', label: 'Mastery tracking', sub: 'See which topics you\'ve nailed and which need more work. Progress updates after every practice session' },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className="text-lg flex-shrink-0">{item.emoji}</span>
          <div>
            <p className="text-sm font-semibold text-gray-800">{item.label}</p>
            <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )

  const buttons = (
    <>
      <button
        onClick={() => navigate('feature-tour-4')}
        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold text-sm"
      >
        ← Back
      </button>
      <button
        onClick={() => reset('home')}
        className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm"
      >
        Got it — let's go! →
      </button>
    </>
  )

  return (
    <FeatureTourLayout
      step={5}
      icon="📓"
      iconBg="bg-blue-100"
      title="Your Personal Study Workshop"
      description="My Workspace is where your study materials become active tools. Upload notes, slides, or textbook chapters — then turn them into flashcards, practice tests, and condensed summaries. The app reads your materials and creates study exercises that focus on the concepts you need to review most."
      detailTitle="What you can do"
      detailContent={detailContent}
      buttons={buttons}
      footerText="You can revisit this anytime in Settings"
    />
  )
}
