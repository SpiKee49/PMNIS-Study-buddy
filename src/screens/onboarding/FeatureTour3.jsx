import { useNav } from '../../context/NavigationContext'
import FeatureTourLayout from '../../components/FeatureTourLayout'

export default function FeatureTour3() {
  const { navigate, reset } = useNav()

  const detailContent = (
    <div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 flex items-start gap-3">
        <div className="w-1 self-stretch bg-violet-500 rounded-full flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800">ML Study Squad</p>
          <p className="text-xs text-gray-500 mt-0.5">Wed 16:00 — best overlap for 4/5 members</p>
        </div>
        <span className="bg-violet-100 text-violet-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
          Suggested
        </span>
      </div>
      <p className="text-xs text-gray-400 italic mt-2 text-center">
        ↑ The app found the optimal time automatically
      </p>
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
        onClick={() => navigate('feature-tour-4')}
        className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm"
      >
        Next →
      </button>
    </>
  )

  return (
    <FeatureTourLayout
      step={3}
      icon="🎯"
      iconBg="bg-emerald-100"
      title="Scheduling That Thinks Ahead"
      description="When you create or join a study session, the app looks at everyone's availability and finds the time slots where the most members overlap. It also learns from past sessions — if a regular slot works well, it'll become a recurring suggestion."
      detailTitle="Example"
      detailContent={detailContent}
      buttons={buttons}
    />
  )
}
