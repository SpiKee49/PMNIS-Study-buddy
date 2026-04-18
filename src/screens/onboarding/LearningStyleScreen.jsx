import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { learningStyles } from '../../data/dummy'

const STYLE_ID_TO_LABEL = { visual: 'Visual', auditory: 'Auditory', reading: 'Reading/Writing', kinesthetic: 'Kinesthetic' }

export default function LearningStyleScreen() {
  const { navigate, updateUserProfile } = useNav()
  const [selected, setSelected] = useState('visual')

  return (
    <div className="bg-white">
      {/* Progress */}
      <div className="pt-8 px-8">
        <div className="flex gap-1.5 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i === 1 ? 'bg-violet-600' : 'bg-gray-200'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Step 1 of 6</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">How do you learn best?</h1>
        <p className="text-gray-500 text-sm mt-2">We'll match you with compatible study buddies</p>
      </div>

      {/* Options */}
      <div className="px-8 pt-6 space-y-3">
        {learningStyles.map(style => (
          <button
            key={style.id}
            onClick={() => setSelected(style.id)}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
              selected === style.id
                ? 'border-violet-500 bg-violet-50'
                : 'border-gray-100 bg-gray-50 hover:border-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                selected === style.id ? 'bg-violet-100' : 'bg-white'
              }`}>
                {style.emoji}
              </div>
              <div className="flex-1">
                <p className={`font-semibold text-sm ${selected === style.id ? 'text-violet-700' : 'text-gray-800'}`}>
                  {style.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{style.description}</p>
              </div>
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selected === style.id ? 'border-violet-500 bg-violet-500' : 'border-gray-300'
              }`}>
                {selected === style.id && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Next */}
      <div className="px-8 pb-8 pt-6">
        <button
          onClick={() => {
            updateUserProfile({ learningStyle: STYLE_ID_TO_LABEL[selected] || 'Visual' })
            navigate('onboarding-availability')
          }}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200 active:scale-95 transition-transform"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
