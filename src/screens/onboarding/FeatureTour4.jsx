import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import FeatureTourLayout from '../../components/FeatureTourLayout'

function Toggle({ on, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-9 h-5 rounded-full transition-colors flex-shrink-0 ${on ? 'bg-violet-600' : 'bg-gray-200'}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${on ? 'translate-x-4' : 'translate-x-0.5'}`}
      />
    </button>
  )
}

export default function FeatureTour4() {
  const { reset, navigate } = useNav()
  const [profileVisible, setProfileVisible] = useState(true)
  const [nudgesOn, setNudgesOn] = useState(true)

  const detailContent = (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">Profile visibility</p>
          <p className="text-xs text-gray-500 mt-0.5">Choose public, buddies-only, or hidden</p>
        </div>
        <Toggle on={profileVisible} onToggle={() => setProfileVisible(v => !v)} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">Suggestion frequency</p>
          <p className="text-xs text-gray-500 mt-0.5">Turn nudges on or off for each category</p>
        </div>
        <Toggle on={nudgesOn} onToggle={() => setNudgesOn(v => !v)} />
      </div>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-800">Data preferences</p>
          <p className="text-xs text-gray-500 mt-0.5">See what's used and delete anytime</p>
        </div>
        <span className="text-sm font-semibold text-violet-600 flex-shrink-0">View →</span>
      </div>
    </div>
  )

  const buttons = (
    <button
      onClick={() => navigate('feature-tour-5')}
      className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-2xl font-bold text-sm"
    >
      Got it — let's go! →
    </button>
  )

  return (
    <FeatureTourLayout
      step={4}
      icon="🔒"
      iconBg="bg-rose-100"
      title="You're Always in Control"
      description="Every recommendation is just a suggestion — you decide who to study with, what groups to join, and when to meet. The app never acts on your behalf, sends messages for you, or shares your data with anyone. Your study profile stays private unless you choose to make it visible."
      detailTitle="Your control panel"
      detailContent={detailContent}
      buttons={buttons}
      footerText="You can revisit this anytime in Settings"
    />
  )
}
