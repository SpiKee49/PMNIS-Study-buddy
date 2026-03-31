import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, ChevronRight, Bell, Eye, Lock, Palette, HelpCircle, LogOut, Moon, Globe, Trash2, Check } from 'lucide-react'

function Toggle({ on, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`relative w-11 h-6 rounded-full transition-all ${on ? 'bg-violet-600' : 'bg-gray-300'}`}
    >
      <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${on ? 'left-5' : 'left-0.5'}`} />
    </button>
  )
}

export default function SettingsScreen() {
  const { goBack, reset, darkMode, setDarkMode, pushNotifications, setPushNotifications, profileVisibility, setProfileVisibility, language, setLanguage } = useNav()
  
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [showVisibilityModal, setShowVisibilityModal] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordSuccess, setPasswordSuccess] = useState(false)

  const languages = ['English', 'Spanish', 'French', 'German', 'Slovak', 'Czech']
  const visibilityOptions = ['Public', 'Private']

  const handlePasswordChange = () => {
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      setPasswordSuccess(true)
      setNewPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        setPasswordSuccess(false)
        setShowPasswordModal(false)
      }, 1500)
    }
  }

  const settings = [
    {
      title: 'Preferences',
      items: [
        { 
          icon: Bell, 
          label: 'Push Notifications', 
          type: 'toggle', 
          defaultOn: pushNotifications,
          onToggle: () => setPushNotifications(!pushNotifications)
        },
        { 
          icon: Moon, 
          label: 'Dark Mode', 
          type: 'toggle', 
          defaultOn: darkMode,
          onToggle: () => setDarkMode(!darkMode)
        },
        { 
          icon: Globe, 
          label: 'Language', 
          type: 'value', 
          value: language,
          onClick: () => setShowLanguageModal(true)
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        { 
          icon: Eye, 
          label: 'Profile Visibility', 
          type: 'value', 
          value: profileVisibility,
          onClick: () => setShowVisibilityModal(true)
        },
        { 
          icon: Lock, 
          label: 'Change Password', 
          type: 'arrow',
          onClick: () => setShowPasswordModal(true)
        },
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-100'} border-b px-8 py-4 flex items-center gap-3 shadow-sm`}>
        <button onClick={goBack} className={`flex items-center gap-1.5 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800'} text-sm font-medium transition-colors`}>
          <ChevronLeft size={18} /> Back
        </button>
        <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>/</span>
        <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Profile</span>
        <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>/</span>
        <span className={`text-sm font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Settings</span>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-6 space-y-5">
        {settings.map(section => (
          <div key={section.title}>
            <p className={`text-xs font-bold ${darkMode ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest px-1 mb-2`}>{section.title}</p>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl shadow-sm overflow-hidden`}>
              {section.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.label}
                    onClick={item.onClick}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 ${i < section.items.length - 1 ? darkMode ? 'border-b border-gray-600' : 'border-b border-gray-50' : ''} transition-colors ${item.onClick ? darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50' : ''}`}
                  >
                    <div className={`w-8 h-8 ${darkMode ? 'bg-gray-600' : 'bg-gray-100'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon size={15} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                    </div>
                    <span className={`flex-1 text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{item.label}</span>
                    {item.type === 'toggle' && <Toggle on={item.defaultOn} onToggle={item.onToggle} />}
                    {item.type === 'value' && (
                      <div className="flex items-center gap-1">
                        <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{item.value}</span>
                        <ChevronRight size={14} className={darkMode ? 'text-gray-600' : 'text-gray-300'} />
                      </div>
                    )}
                    {item.type === 'arrow' && <ChevronRight size={16} className={darkMode ? 'text-gray-600' : 'text-gray-300'} />}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {/* Danger zone */}
        <div>
          <p className={`text-xs font-bold ${darkMode ? 'text-gray-500' : 'text-gray-400'} uppercase tracking-widest px-1 mb-2`}>Account</p>
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-2xl shadow-sm overflow-hidden`}>
            <button
              onClick={() => reset('login')}
              className={`w-full flex items-center gap-3 px-4 py-3.5 ${darkMode ? 'border-b border-gray-600 hover:bg-gray-600' : 'border-b border-gray-50 hover:bg-gray-50'} transition-colors`}
            >
              <div className={`w-8 h-8 ${darkMode ? 'bg-rose-950' : 'bg-rose-50'} rounded-xl flex items-center justify-center`}>
                <LogOut size={15} className={darkMode ? 'text-rose-400' : 'text-rose-500'} />
              </div>
              <span className={`flex-1 text-sm font-medium ${darkMode ? 'text-rose-400' : 'text-rose-600'} text-left`}>Log Out</span>
            </button>
            <button className={`w-full flex items-center gap-3 px-4 py-3.5 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
              <div className={`w-8 h-8 ${darkMode ? 'bg-rose-950' : 'bg-rose-50'} rounded-xl flex items-center justify-center`}>
                <Trash2 size={15} className={darkMode ? 'text-rose-400' : 'text-rose-500'} />
              </div>
              <span className={`flex-1 text-sm font-medium ${darkMode ? 'text-rose-400' : 'text-rose-600'} text-left`}>Delete Account</span>
            </button>
          </div>
        </div>

        <p className={`text-center text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'} pb-4`}>Study Buddy v0.1.0 · Made with ❤️ for students</p>
      </div>

      {/* Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl p-6 w-full max-w-sm shadow-xl`}>
            <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Select Language</h3>
            <div className="space-y-2 mb-6">
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang)
                    setShowLanguageModal(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    language === lang
                      ? 'bg-violet-600 text-white'
                      : darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {lang}
                  {language === lang && <Check size={16} />}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowLanguageModal(false)}
              className={`w-full px-4 py-3 rounded-xl font-semibold transition-colors ${
                darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Profile Visibility Modal */}
      {showVisibilityModal && (
        <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl p-6 w-full max-w-sm shadow-xl`}>
            <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Profile Visibility</h3>
            <div className="space-y-2 mb-6">
              {visibilityOptions.map(option => (
                <button
                  key={option}
                  onClick={() => {
                    setProfileVisibility(option)
                    setShowVisibilityModal(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-between ${
                    profileVisibility === option
                      ? 'bg-violet-600 text-white'
                      : darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {option}
                  {profileVisibility === option && <Check size={16} />}
                </button>
              ))}
            </div>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              {profileVisibility === 'Public' ? 'Your profile is visible to all users' : 'Your profile is only visible to your buddies'}
            </p>
            <button
              onClick={() => setShowVisibilityModal(false)}
              className={`w-full px-4 py-3 rounded-xl font-semibold transition-colors ${
                darkMode ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' : 'border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4">
          <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-3xl p-6 w-full max-w-sm shadow-xl`}>
            <h3 className={`text-lg font-bold ${darkMode ? 'text-gray-100' : 'text-gray-900'} mb-4`}>Change Password</h3>
            
            {passwordSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <p className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>Password Updated!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        darkMode
                          ? 'bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:border-violet-600`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        darkMode
                          ? 'bg-gray-600 border-gray-500 text-gray-100 placeholder-gray-400'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      } focus:outline-none focus:border-violet-600`}
                    />
                  </div>
                </div>
                <button
                  onClick={handlePasswordChange}
                  disabled={!newPassword || !confirmPassword}
                  className={`w-full px-4 py-3 rounded-xl font-semibold transition-colors mb-2 ${
                    newPassword && confirmPassword
                      ? 'bg-violet-600 text-white hover:bg-violet-700'
                      : darkMode ? 'bg-gray-600 text-gray-500' : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  Update Password
                </button>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className={`w-full px-4 py-3 rounded-xl font-semibold transition-colors ${
                    darkMode ? 'border border-gray-600 text-gray-200 hover:bg-gray-600' : 'border border-gray-200 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
