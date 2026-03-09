import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, ChevronRight, Bell, Eye, Lock, Palette, HelpCircle, LogOut, Moon, Globe, Trash2 } from 'lucide-react'

function Toggle({ defaultOn = true }) {
  const [on, setOn] = useState(defaultOn)
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-11 h-6 rounded-full transition-all ${on ? 'bg-violet-600' : 'bg-gray-300'}`}
    >
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${on ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

import { useState } from 'react'

const sections = [
  {
    title: 'Preferences',
    items: [
      { icon: Bell, label: 'Push Notifications', type: 'toggle', defaultOn: true },
      { icon: Moon, label: 'Dark Mode', type: 'toggle', defaultOn: false },
      { icon: Globe, label: 'Language', type: 'value', value: 'English' },
    ],
  },
  {
    title: 'Privacy & Security',
    items: [
      { icon: Eye, label: 'Profile Visibility', type: 'value', value: 'Public' },
      { icon: Lock, label: 'Change Password', type: 'arrow' },
      { icon: Eye, label: 'Blocked Users', type: 'arrow' },
    ],
  },
  {
    title: 'Appearance',
    items: [
      { icon: Palette, label: 'App Theme', type: 'value', value: 'Purple' },
    ],
  },
  {
    title: 'Support',
    items: [
      { icon: HelpCircle, label: 'Help Center', type: 'arrow' },
      { icon: HelpCircle, label: 'Send Feedback', type: 'arrow' },
    ],
  },
]

export default function SettingsScreen() {
  const { goBack, reset } = useNav()

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
        <span className="text-sm font-semibold text-gray-700">Settings</span>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-6 space-y-5">
        {sections.map(section => (
          <div key={section.title}>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 mb-2">{section.title}</p>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {section.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-4 py-3.5 ${i < section.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-gray-600" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-gray-800">{item.label}</span>
                    {item.type === 'toggle' && <Toggle defaultOn={item.defaultOn} />}
                    {item.type === 'value' && (
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-400">{item.value}</span>
                        <ChevronRight size={14} className="text-gray-300" />
                      </div>
                    )}
                    {item.type === 'arrow' && <ChevronRight size={16} className="text-gray-300" />}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Danger zone */}
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1 mb-2">Account</p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => reset('login')}
              className="w-full flex items-center gap-3 px-4 py-3.5 border-b border-gray-50"
            >
              <div className="w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center">
                <LogOut size={15} className="text-rose-500" />
              </div>
              <span className="flex-1 text-sm font-medium text-rose-600 text-left">Log Out</span>
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3.5">
              <div className="w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center">
                <Trash2 size={15} className="text-rose-500" />
              </div>
              <span className="flex-1 text-sm font-medium text-rose-600 text-left">Delete Account</span>
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 pb-4">Study Buddy v0.1.0 · Made with ❤️ for students</p>
      </div>
    </div>
  )
}
