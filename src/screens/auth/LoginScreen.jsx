import { useState } from 'react'
import { useNav } from '../../context/NavigationContext'
import { BookOpen, Eye, EyeOff, Mail, Lock } from 'lucide-react'

export default function LoginScreen() {
  const { navigate } = useNav()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('alex@stuba.sk')
  const [password, setPassword] = useState('••••••••')

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 pt-10 pb-8 px-8 flex flex-col items-center">
        <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-4">
          <BookOpen size={28} className="text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-2xl font-bold text-white">Welcome back!</h1>
        <p className="text-white/70 text-sm mt-1">Sign in to continue learning</p>
      </div>

      {/* Form */}
      <div className="px-8 pt-8 pb-8">
        <div className="space-y-4">
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
                placeholder="your@email.com"
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
                placeholder="Your password"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Forgot */}
          <div className="text-right">
            <button className="text-sm text-violet-600 font-medium">Forgot password?</button>
          </div>
        </div>

        {/* Login button */}
        <button
          onClick={() => navigate('home')}
          className="w-full mt-6 bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-violet-200 active:scale-95 transition-transform"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3">
          {['Google', 'Microsoft'].map(provider => (
            <button
              key={provider}
              className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {provider === 'Google' && (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              {provider === 'Microsoft' && (
                <svg width="18" height="18" viewBox="0 0 21 21">
                  <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
                  <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
                  <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
                  <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
                </svg>
              )}
              {provider}
            </button>
          ))}
        </div>

        {/* Sign up */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{' '}
          <button onClick={() => navigate('signup')} className="text-violet-600 font-bold">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  )
}

