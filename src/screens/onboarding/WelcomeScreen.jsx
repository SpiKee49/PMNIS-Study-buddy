import { useNav } from '../../context/NavigationContext'
import { BookOpen, Users, MessageCircle, Sparkles } from 'lucide-react'

export default function WelcomeScreen() {
  const { reset } = useNav()

  const features = [
    { icon: Users, text: 'Find matching study buddies', color: 'bg-violet-100 text-violet-600' },
    { icon: MessageCircle, text: 'Chat and collaborate in groups', color: 'bg-blue-100 text-blue-600' },
    { icon: Sparkles, text: 'AI-powered session recommendations', color: 'bg-amber-100 text-amber-600' },
  ]

  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 px-8 py-12 text-center">
      {/* Icon */}
      <div className="w-28 h-28 bg-white/20 backdrop-blur rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
        <BookOpen size={56} className="text-white" strokeWidth={1.5} />
      </div>

      {/* Welcome text */}
      <h1 className="text-3xl font-extrabold text-white leading-tight">
        You're all set, <br />Alex! 🎉
      </h1>
      <p className="text-white/70 mt-3 text-sm leading-relaxed max-w-xs">
        Your Study Buddy profile is ready. Let's find you some great study partners!
      </p>

      {/* Feature list */}
      <div className="mt-8 space-y-3 w-full max-w-xs">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div key={i} className="flex items-center gap-3 bg-white/15 backdrop-blur rounded-2xl px-4 py-3">
              <div className={`w-8 h-8 ${f.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} />
              </div>
              <p className="text-sm text-white/90 font-medium text-left">{f.text}</p>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <button
        onClick={() => reset('feature-tour-1')}
        className="mt-10 w-full bg-white text-violet-700 py-4 rounded-2xl font-bold text-base shadow-xl active:scale-95 transition-transform"
      >
        Start Exploring
      </button>

      <p className="text-white/50 text-xs mt-4">You can update your profile anytime</p>
    </div>
  )
}
