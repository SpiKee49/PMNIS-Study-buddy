import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, User, Mail, Lock, GraduationCap, Eye, EyeOff } from 'lucide-react'

export default function SignUpScreen() {
  const { navigate, goBack, updateUserProfile } = useNav()
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [university, setUniversity] = useState('')
  const [password, setPassword] = useState('')

  const passwordStrength = password.length === 0 ? 0
    : password.length < 6 ? 1
    : password.length < 10 ? 2
    : password.match(/[A-Z]/) && password.match(/[0-9]/) ? 4
    : 3

  const strengthColors = ['bg-gray-200', 'bg-rose-400', 'bg-amber-400', 'bg-emerald-400', 'bg-emerald-500']
  const strengthLabels = ['', 'Too short', 'Weak', 'Good', 'Strong']
  const strengthTextColors = ['text-gray-400', 'text-rose-500', 'text-amber-600', 'text-emerald-600', 'text-emerald-600']

  const handleCreate = () => {
    updateUserProfile({ name, email, university })
    navigate('onboarding-learning-style')
  }

  const canSubmit = agreed && name.trim() && email.trim() && university.trim() && password.length >= 6

  return (
    <div className="bg-white">
      {/* Top */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 pt-8 pb-8 px-8">
        <button
          onClick={goBack}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20 mb-4"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
        <h1 className="text-2xl font-bold text-white">Create account</h1>
        <p className="text-white/70 text-sm mt-1">Join thousands of students studying together</p>
      </div>

      {/* Form */}
      <div className="px-8 pt-6 pb-8">
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                placeholder="your@university.edu"
              />
            </div>
          </div>

          {/* University */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">University</label>
            <div className="relative">
              <GraduationCap size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={university}
                onChange={e => setUniversity(e.target.value)}
                className="w-full pl-10 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                placeholder="e.g. Slovak University of Technology"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition-all"
                placeholder="Create a strong password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Password strength */}
          {password.length > 0 && (
            <>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= passwordStrength ? strengthColors[passwordStrength] : 'bg-gray-200'}`} />
                ))}
              </div>
              <p className={`text-xs font-medium -mt-2 ${strengthTextColors[passwordStrength]}`}>{strengthLabels[passwordStrength]}</p>
            </>
          )}
        </div>

        {/* Data use summary */}
        <div className="bg-gray-50 rounded-2xl p-4 mt-4 border border-gray-100">
          <p className="text-xs font-semibold text-gray-700 mb-1.5">What we collect & why</p>
          <ul className="text-xs text-gray-500 space-y-1 leading-relaxed">
            <li>• <span className="font-medium text-gray-600">Name, email, university</span> — to create your account</li>
            <li>• <span className="font-medium text-gray-600">Subjects & availability</span> — to match you with study partners</li>
            <li>• <span className="font-medium text-gray-600">Learning style & preferences</span> — to improve match quality</li>
          </ul>
          <p className="text-xs text-gray-400 mt-2">We do not sell your data. You control your visibility in Settings.</p>
        </div>

        {/* Terms */}
        <div
          className="flex items-start gap-3 mt-4 cursor-pointer select-none"
          onClick={() => setAgreed(v => !v)}
        >
          <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border-2 transition-colors ${agreed ? 'bg-violet-600 border-violet-600' : 'border-gray-300 bg-white'}`}>
            {agreed && (
              <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            I agree to the{' '}
            <span className="text-violet-600 font-medium">Terms of Service</span>
            {' '}and{' '}
            <span className="text-violet-600 font-medium">Privacy Policy</span>
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={handleCreate}
          disabled={!canSubmit}
          className="w-full mt-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200 active:scale-95 transition-transform disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          Create Account
        </button>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{' '}
          <button onClick={() => navigate('login')} className="text-violet-600 font-bold">
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}
