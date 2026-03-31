import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { defaultMatchPreferences } from '../../utils/matchScore'

const factors = [
  { key: 'learningStyle', label: 'Learning Style', emoji: '🧠', desc: 'How aligned your study approaches are' },
  { key: 'studyVibe', label: 'Study Vibe', emoji: '☕', desc: 'Casual, discussion or structured atmosphere' },
  { key: 'subjects', label: 'Shared Subjects', emoji: '📚', desc: 'Overlapping courses you both study' },
  { key: 'availability', label: 'Availability', emoji: '📅', desc: 'Matching free time slots during the week' },
  { key: 'yearProximity', label: 'Academic Year', emoji: '🎓', desc: 'Similar stage in your studies' },
  { key: 'rating', label: 'Peer Rating', emoji: '⭐', desc: 'How well others have rated the buddy' },
]

const levels = [
  { value: 'low', label: 'Not important' },
  { value: 'medium', label: 'Somewhat' },
  { value: 'high', label: 'Very important' },
]

export default function MatchPreferencesOnboardingScreen() {
  const { navigate, goBack, setMatchPreferences } = useNav()
  const [prefs, setPrefs] = useState(defaultMatchPreferences)

  const set = (key, value) => setPrefs(prev => ({ ...prev, [key]: value }))

  const handleContinue = () => {
    setMatchPreferences(prefs)
    navigate('onboarding-welcome')
  }

  return (
    <div className="bg-white">
      {/* Progress */}
      <div className="pt-8 px-8">
        <div className="flex gap-1.5 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 5 ? 'bg-violet-600' : 'bg-gray-200'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Step 5 of 6</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">What matters in a match?</h1>
        <p className="text-gray-500 text-sm mt-2">Tell us what to prioritise when finding your study buddy</p>
      </div>

      {/* Factors */}
      <div className="px-8 pt-6 pb-2 space-y-4">
        {factors.map(f => (
          <div key={f.key} className="bg-gray-50 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{f.emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{f.label}</p>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {levels.map(l => (
                <button
                  key={l.value}
                  onClick={() => set(f.key, l.value)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold border-2 transition-all ${
                    prefs[f.key] === l.value
                      ? 'border-violet-500 bg-violet-600 text-white'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-violet-200'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="px-8 pb-8 pt-4 flex gap-3">
        <button
          onClick={goBack}
          className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 text-base"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
