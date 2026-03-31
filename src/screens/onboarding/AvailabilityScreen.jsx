import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const timeSlots = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']

export default function AvailabilityScreen() {
  const { navigate, goBack } = useNav()
  const [selected, setSelected] = useState(new Set(['Mon-14:00', 'Wed-10:00', 'Fri-16:00']))

  const toggle = (key) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  return (
    <div className="bg-white">
      {/* Progress */}
      <div className="pt-8 px-8">
        <div className="flex gap-1.5 mb-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 2 ? 'bg-violet-600' : 'bg-gray-200'}`} />
          ))}
        </div>
        <p className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Step 2 of 6</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-1 leading-tight">When are you free?</h1>
        <p className="text-gray-500 text-sm mt-2">Select your typical available time slots</p>
      </div>

      {/* Grid */}
      <div className="px-6 pt-5">
        {/* Time header */}
        <div className="flex mb-2">
          <div className="w-10" />
          {timeSlots.map(t => (
            <div key={t} className="flex-1 text-center text-[9px] text-gray-400 font-medium">{t}</div>
          ))}
        </div>

        {/* Day rows */}
        {days.map(day => (
          <div key={day} className="flex items-center mb-2">
            <div className="w-10 text-xs font-semibold text-gray-500">{day}</div>
            {timeSlots.map(time => {
              const key = `${day}-${time}`
              const isSelected = selected.has(key)
              return (
                <button
                  key={time}
                  onClick={() => toggle(key)}
                  className={`flex-1 h-8 mx-0.5 rounded-lg transition-all ${
                    isSelected
                      ? 'bg-violet-500 shadow-sm'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                />
              )
            })}
          </div>
        ))}

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-violet-500" />
            <span className="text-xs text-gray-500">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-100" />
            <span className="text-xs text-gray-500">Not available</span>
          </div>
        </div>
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
          onClick={() => navigate('onboarding-subjects')}
          className="flex-[2] bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
