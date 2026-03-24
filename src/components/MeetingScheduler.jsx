import { useState } from 'react'
import { Calendar, Clock, X, CheckCircle } from 'lucide-react'
import { useNav } from '../context/NavigationContext'

export default function MeetingScheduler({ buddy, onClose, onSchedule }) {
  const { addToSchedule } = useNav()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [subject, setSubject] = useState('')
  const [isScheduled, setIsScheduled] = useState(false)

  const handleSchedule = () => {
    if (selectedDate && selectedTime && subject) {
      const meetingData = {
        date: selectedDate,
        time: selectedTime,
        subject,
        buddy: buddy.name,
      }

      // Add to schedule
      addToSchedule(meetingData)

      // Call the onSchedule callback
      onSchedule(meetingData)

      setIsScheduled(true)
      setTimeout(() => {
        onClose()
        setIsScheduled(false)
      }, 1500)
    }
  }

  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ]

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Schedule Meeting</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {/* Success state */}
        {isScheduled ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900 text-center">Meeting Scheduled!</p>
            <p className="text-sm text-gray-600 text-center mt-2">You can start the call when ready</p>
          </div>
        ) : (
          <>
            {/* Buddy Info */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-4 mb-6 border border-violet-100">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Meeting with</p>
              <p className="text-lg font-bold text-gray-900">{buddy.name}</p>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{buddy.subjects?.join(', ')}</p>
            </div>

            {/* Subject Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Study Subject</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              >
                <option value="">Select a subject...</option>
                {buddy.subjects?.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Calendar size={16} className="text-violet-600" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>

            {/* Time Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Clock size={16} className="text-violet-600" />
                Select Time
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      selectedTime === time
                        ? 'bg-violet-600 text-white ring-2 ring-violet-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSchedule}
                disabled={!selectedDate || !selectedTime || !subject}
                className="flex-1 px-4 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Schedule
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
