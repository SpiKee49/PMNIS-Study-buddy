import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { subjects } from '../../data/dummy'
import { X } from 'lucide-react'

export default function SubjectsScreen() {
  const { navigate, goBack, updateUserProfile } = useNav()
  const [selected, setSelected] = useState(new Set(['Algorithms & Data Structures', 'Machine Learning', 'Databases', 'Web Development']))

  const toggle = (s) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(s) ? next.delete(s) : next.add(s)
      return next
    })
  }

  return (
    <div className="bg-white">
      {/* Progress */}
      <div className="pt-8 px-8">
        <div className="flex gap-1.5 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? 'bg-violet-600' : 'bg-gray-200'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Step 3 of 6</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">What are you studying?</h1>
        <p className="text-gray-500 text-sm mt-2">Select subjects you want to study together</p>
      </div>

      {/* Selected tags */}
      {selected.size > 0 && (
        <div className="px-8 pt-4">
          <div className="flex flex-wrap gap-2">
            {[...selected].map(s => (
              <button
                key={s}
                onClick={() => toggle(s)}
                className="flex items-center gap-1.5 bg-violet-100 text-violet-700 px-3 py-1.5 rounded-full text-xs font-medium"
              >
                {s}
                <X size={12} />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All subjects */}
      <div className="px-8 pt-4 pb-4">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-3">All subjects</p>
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => {
            const isSelected = selected.has(s)
            return (
              <button
                key={s}
                onClick={() => toggle(s)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="px-8 pb-8 pt-4 flex gap-3 border-t border-gray-100">
        <button
          onClick={goBack}
          className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 text-base"
        >
          Back
        </button>
        <button
          onClick={() => {
            updateUserProfile({ subjects: [...selected] })
            navigate('onboarding-privacy')
          }}
          className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
