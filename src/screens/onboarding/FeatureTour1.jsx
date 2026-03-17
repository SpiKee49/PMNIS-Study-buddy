import { useNav } from '../../context/NavigationContext'
import FeatureTourLayout from '../../components/FeatureTourLayout'

export default function FeatureTour1() {
  const { navigate, reset } = useNav()

  const detailContent = (
    <div className="space-y-3">
      {[
        { emoji: '📋', label: 'You fill in your profile', sub: 'Subjects, availability, preferred learning style' },
        { emoji: '🔍', label: 'We compare patterns', sub: 'Your profile is matched against other students' },
        { emoji: '⚡', label: 'You see a match score', sub: 'Percentage showing how compatible you are' },
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
        onClick={() => reset('home')}
        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold text-sm"
      >
        Skip tour
      </button>
      <button
        onClick={() => navigate('feature-tour-2')}
        className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm"
      >
        Next →
      </button>
    </>
  )

  return (
    <FeatureTourLayout
      step={1}
      icon="🧩"
      iconBg="bg-violet-100"
      title="Smart Study Matching"
      description="Study Buddy analyzes your subjects, schedule, and learning preferences to surface the students you're most likely to click with. No endless scrolling — just relevant matches ranked by compatibility."
      detailTitle="How it works"
      detailContent={detailContent}
      buttons={buttons}
    />
  )
}
