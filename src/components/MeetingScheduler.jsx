import { useState, useMemo } from 'react'
import { Calendar, Clock, X, CheckCircle, RefreshCw } from 'lucide-react'
import { useNav } from '../context/NavigationContext'

// Day abbreviation → JS getDay() value
const DAY_MAP = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const DAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// Parse "14:00" → total minutes
function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// Parse buddy.availability into a map: { 1: [{start: 840, end: 1080}], ... }
function parseAvailability(availability = []) {
  const map = {}
  for (const entry of availability) {
    // Format: "Mon 14:00-18:00"
    const match = entry.match(/^(\w+)\s+(\d{2}:\d{2})-(\d{2}:\d{2})$/)
    if (!match) continue
    const [, day, start, end] = match
    const dayNum = DAY_MAP[day]
    if (dayNum === undefined) continue
    if (!map[dayNum]) map[dayNum] = []
    map[dayNum].push({ start: toMinutes(start), end: toMinutes(end) })
  }
  return map
}

// Generate all 30-min slots from 08:00 to 21:30
const ALL_SLOTS = []
for (let m = 8 * 60; m < 22 * 60; m += 30) {
  const h = String(Math.floor(m / 60)).padStart(2, '0')
  const min = String(m % 60).padStart(2, '0')
  ALL_SLOTS.push(`${h}:${min}`)
}

const RECURRENCE_OPTIONS = [
  { id: 'once', label: 'One-time', icon: '1×' },
  { id: 'weekly', label: 'Weekly', icon: '7d' },
  { id: 'biweekly', label: 'Bi-weekly', icon: '14d' },
  { id: 'monthly', label: 'Monthly', icon: '30d' },
]

export default function MeetingScheduler({ buddy, onClose, onSchedule }) {
  const { addToSchedule } = useNav()
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [subject, setSubject] = useState('')
  const [recurrence, setRecurrence] = useState('once')
  const [isScheduled, setIsScheduled] = useState(false)

  const availabilityMap = useMemo(
    () => parseAvailability(buddy?.availability),
    [buddy]
  )

  // Which day of week is the selected date?
  const selectedDayNum = useMemo(() => {
    if (!selectedDate) return null
    // new Date(dateStr) parses as UTC midnight; adjust to local
    const [y, mo, d] = selectedDate.split('-').map(Number)
    return new Date(y, mo - 1, d).getDay()
  }, [selectedDate])

  const buddyHasAvailability = buddy?.availability && buddy.availability.length > 0

  // Is a given slot available for the selected day?
  const isSlotAvailable = (slot) => {
    if (!buddyHasAvailability) return true // no data → treat all as available
    if (selectedDayNum === null) return false // no date picked yet
    const ranges = availabilityMap[selectedDayNum] || []
    if (ranges.length === 0) return false
    const slotMin = toMinutes(slot)
    return ranges.some(r => slotMin >= r.start && slotMin + 30 <= r.end)
  }

  // Friendly label for selected day's availability
  const dayAvailabilityLabel = useMemo(() => {
    if (!buddyHasAvailability || selectedDayNum === null) return null
    const ranges = availabilityMap[selectedDayNum] || []
    if (ranges.length === 0) return `${buddy.name.split(' ')[0]} is not available on ${DAY_ABBR[selectedDayNum]}s`
    return `${buddy.name.split(' ')[0]} is free: ${ranges.map(r => {
      const fmt = (min) => `${String(Math.floor(min / 60)).padStart(2,'0')}:${String(min % 60).padStart(2,'0')}`
      return `${fmt(r.start)}–${fmt(r.end)}`
    }).join(', ')}`
  }, [selectedDayNum, availabilityMap, buddy, buddyHasAvailability])

  const canSchedule = selectedDate && selectedTime && subject && isSlotAvailable(selectedTime)

  const handleSchedule = () => {
    if (!canSchedule) return
    const meetingData = {
      date: selectedDate,
      time: selectedTime,
      subject,
      buddy: buddy.name,
      recurrence,
    }
    addToSchedule(meetingData)
    onSchedule(meetingData)
    setIsScheduled(true)
    setTimeout(() => { onClose(); setIsScheduled(false) }, 1600)
  }

  const recurrenceLabel = (r) => {
    if (r === 'once') return `on ${selectedDate || '…'}`
    if (r === 'weekly') return `every ${selectedDayNum !== null ? DAY_ABBR[selectedDayNum] : '…'} at ${selectedTime || '…'}`
    if (r === 'biweekly') return `every other ${selectedDayNum !== null ? DAY_ABBR[selectedDayNum] : '…'} at ${selectedTime || '…'}`
    if (r === 'monthly') return `monthly on this date at ${selectedTime || '…'}`
    return ''
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Schedule Meeting</h2>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={18} className="text-gray-600" />
          </button>
        </div>

        {isScheduled ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900 text-center">Meeting Scheduled!</p>
            <p className="text-sm text-gray-500 text-center mt-1">
              {recurrence !== 'once' ? `Repeats ${recurrenceLabel(recurrence)}` : `${selectedDate} at ${selectedTime}`}
            </p>
          </div>
        ) : (
          <>
            {/* Buddy info */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-4 mb-5 border border-violet-100">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Meeting with</p>
              <p className="text-lg font-bold text-gray-900">{buddy.name}</p>
              {buddyHasAvailability && (
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {buddy.availability.map(a => (
                    <span key={a} className="text-[10px] font-semibold bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full">{a}</span>
                  ))}
                </div>
              )}
              {!buddyHasAvailability && (
                <p className="text-xs text-gray-400 mt-1">No availability data — all slots shown as available</p>
              )}
            </div>

            {/* Subject */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Study Subject</label>
              <select
                value={subject}
                onChange={e => setSubject(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                <option value="">Select a subject…</option>
                {buddy.subjects?.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="mb-5">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <Calendar size={15} className="text-violet-600" /> Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={e => { setSelectedDate(e.target.value); setSelectedTime('') }}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
            </div>

            {/* Time slots */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Clock size={15} className="text-violet-600" /> Select Time
                </label>
                {selectedDate && dayAvailabilityLabel && (
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    (availabilityMap[selectedDayNum] || []).length > 0
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {dayAvailabilityLabel}
                  </span>
                )}
              </div>

              {!selectedDate ? (
                <p className="text-xs text-gray-400 text-center py-4">Pick a date first to see available slots</p>
              ) : (
                <>
                  {/* Legend */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-violet-600" />
                      <span className="text-[10px] text-gray-500 font-medium">Available</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-gray-100 border border-gray-200" />
                      <span className="text-[10px] text-gray-500 font-medium">Not available</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300" />
                      <span className="text-[10px] text-gray-500 font-medium">Selected</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5 max-h-52 overflow-y-auto pr-0.5">
                    {ALL_SLOTS.map(slot => {
                      const available = isSlotAvailable(slot)
                      const selected = selectedTime === slot
                      return (
                        <button
                          key={slot}
                          onClick={() => available && setSelectedTime(slot)}
                          disabled={!available}
                          className={`px-2 py-2 rounded-xl text-xs font-semibold transition-all ${
                            selected
                              ? 'bg-emerald-500 text-white ring-2 ring-emerald-300'
                              : available
                              ? 'bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-600 hover:text-white'
                              : 'bg-gray-100 text-gray-300 cursor-not-allowed line-through'
                          }`}
                        >
                          {slot}
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            {/* Recurrence */}
            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                <RefreshCw size={15} className="text-violet-600" /> Repeat
              </label>
              <div className="grid grid-cols-4 gap-2">
                {RECURRENCE_OPTIONS.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setRecurrence(opt.id)}
                    className={`flex flex-col items-center gap-0.5 py-2.5 px-1 rounded-xl border text-xs font-semibold transition-all ${
                      recurrence === opt.id
                        ? 'bg-violet-600 text-white border-violet-600'
                        : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'
                    }`}
                  >
                    <span className={`text-[11px] font-bold ${recurrence === opt.id ? 'text-violet-200' : 'text-gray-400'}`}>{opt.icon}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
              {selectedDate && selectedTime && (
                <p className="text-xs text-gray-400 mt-2 italic">
                  Session {recurrenceLabel(recurrence)}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSchedule}
                disabled={!canSchedule}
                className="flex-1 px-4 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:bg-violet-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {recurrence !== 'once' ? 'Schedule & Repeat' : 'Schedule'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
