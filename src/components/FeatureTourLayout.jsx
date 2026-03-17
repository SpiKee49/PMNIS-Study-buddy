import { useNav } from '../context/NavigationContext'

export default function FeatureTourLayout({ step, icon, iconBg, title, description, detailTitle, detailContent, buttons, footerText }) {
  const { reset } = useNav()

  return (
    <div className="p-8">
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-8">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= step ? 'bg-violet-600' : 'bg-gray-200'}`} />
        ))}
      </div>

      {/* Icon */}
      <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5`}>
        {icon}
      </div>

      {/* Title */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-3">{title}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-5">{description}</p>

      {/* Detail box */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-6">
        {detailTitle && (
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">{detailTitle}</p>
        )}
        {detailContent}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {buttons}
      </div>

      {/* Footer text */}
      {footerText && (
        <p className="text-xs text-gray-400 text-center mt-3">{footerText}</p>
      )}
    </div>
  )
}
