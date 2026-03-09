import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Camera } from 'lucide-react'
import { currentUser, subjects as allSubjects } from '../../data/dummy'

export default function EditProfileScreen() {
  const { goBack } = useNav()
  const [name, setName] = useState(currentUser.name)
  const [bio, setBio] = useState(currentUser.bio)
  const [selected, setSelected] = useState(new Set(currentUser.subjects))

  const toggle = (s) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(s) ? next.delete(s) : next.add(s)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors">
          <ChevronLeft size={18} /> Back
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Profile</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Edit Profile</span>
        <div className="flex-1" />
        <button onClick={goBack} className="bg-violet-600 text-white text-sm font-bold px-5 py-2 rounded-xl">
          Save Changes
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-8 space-y-6">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className={`w-20 h-20 ${currentUser.avatarColor} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{currentUser.avatar}</span>
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-violet-600 rounded-full flex items-center justify-center border-2 border-white">
              <Camera size={12} className="text-white" />
            </button>
          </div>
          <p className="text-xs text-violet-600 font-medium mt-2">Change photo</p>
        </div>

        {/* Name */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* University */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">University</label>
          <input
            type="text"
            defaultValue={currentUser.university}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Year */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Year of Study</label>
          <div className="flex gap-2">
            {['1st Year', '2nd Year', '3rd Year', '4th Year', 'PhD'].map(y => (
              <button
                key={y}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  currentUser.year === y
                    ? 'bg-violet-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {y.replace(' Year', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Bio</label>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none leading-relaxed"
          />
          <p className="text-xs text-gray-400 text-right mt-1">{bio.length}/200</p>
        </div>

        {/* Subjects */}
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">Subjects</label>
          <div className="flex flex-wrap gap-2">
            {allSubjects.slice(0, 14).map(s => {
              const isSelected = selected.has(s)
              return (
                <button
                  key={s}
                  onClick={() => toggle(s)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isSelected ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
