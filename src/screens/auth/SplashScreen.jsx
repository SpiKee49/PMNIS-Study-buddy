import { useEffect } from 'react'
import { useNav } from '../../context/NavigationContext'
import { BookOpen } from 'lucide-react'

export default function SplashScreen() {
  const { navigate } = useNav()

  useEffect(() => {
    const timer = setTimeout(() => navigate('login'), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 px-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
          <BookOpen size={48} className="text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tight">Study Buddy</h1>
        <p className="text-white/70 mt-3 text-lg font-medium">Learn Better, Together</p>
      </div>
      <p className="text-white/50 text-sm leading-relaxed max-w-sm text-center mb-16">
        Connect with students who share your subjects, schedule and learning style
      </p>
      <div className="flex gap-2">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="w-2.5 h-2.5 bg-white rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}
