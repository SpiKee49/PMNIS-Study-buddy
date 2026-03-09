export default function Avatar({ initials, colorClass, size = 'md', online = false }) {
  const sizes = {
    xs: 'w-7 h-7 text-xs',
    sm: 'w-9 h-9 text-sm',
    md: 'w-11 h-11 text-base',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl',
  }
  const dotSizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
    xl: 'w-4 h-4',
  }
  return (
    <div className="relative inline-flex flex-shrink-0">
      <div className={`${sizes[size]} ${colorClass} rounded-full flex items-center justify-center font-bold text-white`}>
        {initials}
      </div>
      {online && (
        <span className={`absolute bottom-0 right-0 ${dotSizes[size]} bg-emerald-400 border-2 border-white rounded-full`} />
      )}
    </div>
  )
}
