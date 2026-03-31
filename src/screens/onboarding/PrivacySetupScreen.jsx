import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { Eye, Users, Bell, MapPin } from 'lucide-react'

const privacySettings = [
  { id: 'profile', icon: Eye, label: 'Public Profile', description: 'Anyone can see your profile and subjects', defaultOn: false },
  { id: 'discover', icon: Users, label: 'Discoverable', description: 'Appear in search results for study buddies', defaultOn: false },
  { id: 'notifications', icon: Bell, label: 'Push Notifications', description: 'Session reminders and buddy requests', defaultOn: true },
  { id: 'location', icon: MapPin, label: 'Show University', description: 'Display your university on your profile', defaultOn: true },
]

function Toggle({ value, onChange }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-all ${value ? 'bg-violet-600' : 'bg-gray-300'}`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${value ? 'left-6' : 'left-0.5'}`}
      />
    </button>
  )
}

export default function PrivacySetupScreen() {
  const { navigate, goBack } = useNav()
  const [settings, setSettings] = useState(
    Object.fromEntries(privacySettings.map(s => [s.id, s.defaultOn]))
  )

  return (
    <div className="bg-white">
      {/* Progress */}
      <div className="pt-8 px-8">
        <div className="flex gap-1.5 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 4 ? 'bg-violet-600' : 'bg-gray-200'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Step 4 of 6</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">Privacy settings</h1>
        <p className="text-gray-500 text-sm mt-2">Control who can see your profile and find you</p>
      </div>

      {/* Settings */}
      <div className="px-8 pt-6 space-y-4">
        {privacySettings.map(setting => {
          const Icon = setting.icon
          return (
            <div key={setting.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-violet-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-gray-800">{setting.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{setting.description}</p>
              </div>
              <Toggle
                value={settings[setting.id]}
                onChange={v => setSettings(prev => ({ ...prev, [setting.id]: v }))}
              />
            </div>
          )
        })}

        {/* Info card */}
        <div className="bg-violet-50 rounded-2xl p-4 mt-2 space-y-2">
          <p className="text-xs text-violet-800 font-semibold">What does this mean for you?</p>
          <p className="text-xs text-violet-700 leading-relaxed">
            <span className="font-medium">Public profile + Discoverable</span> means other students can find and view your name, bio, subjects, and availability when searching for study partners.
          </p>
          <p className="text-xs text-violet-700 leading-relaxed">
            <span className="font-medium">Private profile</span> means only your existing buddies can see you. You won't appear in search results.
          </p>
          <p className="text-xs text-violet-500 mt-1">We never share your data with third parties or advertisers. You can change these settings anytime in your profile.</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-8 pb-8 pt-6 flex gap-3">
        <button
          onClick={goBack}
          className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 text-base"
        >
          Back
        </button>
        <button
          onClick={() => navigate('onboarding-match-prefs')}
          className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
