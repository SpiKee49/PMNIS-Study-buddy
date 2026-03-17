import { useNav } from '../../context/NavigationContext'
import FeatureTourLayout from '../../components/FeatureTourLayout'

export default function FeatureTour2() {
  const { navigate, reset } = useNav()

  const detailContent = (
    <div className="space-y-3">
      {[
        { emoji: '👤', label: '"Maria is a great match for your ML sessions"', sub: 'buddy suggestions based on shared interests' },
        { emoji: '📅', label: '"You\'re free Wed 10-14 — schedule a session?"', sub: 'availability-aware nudges' },
        { emoji: '📚', label: '"Join Database Design Club"', sub: 'group recommendations that match your subjects' },
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
        onClick={() => navigate('feature-tour-3')}
        className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm"
      >
        Next →
      </button>
    </>
  )

  return (
    <FeatureTourLayout
      step={2}
      icon="💡"
      iconBg="bg-amber-100"
      title="Personalized Suggestions"
      description="Your home feed adapts to your activity. It notices which subjects you study most, who you interact with, and when you're free — then nudges you toward groups, buddies, and sessions that fit naturally into your week."
      detailTitle="What you'll see"
      detailContent={detailContent}
      buttons={buttons}
    />
  )
}
