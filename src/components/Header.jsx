import { ChevronLeft } from 'lucide-react'
import { useNav } from '../context/NavigationContext'

export default function Header({ title, subtitle, right, onBack, transparent = false }) {
  const { goBack } = useNav()

  return (
    <div className={`absolute top-0 left-0 right-0 z-20 pt-12 px-4 pb-3 flex items-center gap-3 ${
      transparent ? '' : 'bg-white border-b border-gray-100'
    }`}>
      <button
        onClick={onBack || goBack}
        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex-shrink-0"
      >
        <ChevronLeft size={20} className="text-gray-700" />
      </button>
      <div className="flex-1 min-w-0">
        <h1 className="font-semibold text-gray-900 text-base truncate">{title}</h1>
        {subtitle && <p className="text-xs text-gray-500 truncate">{subtitle}</p>}
      </div>
      {right && <div className="flex-shrink-0">{right}</div>}
    </div>
  )
}
