import { useState } from 'react'
import { Search, SlidersHorizontal, Star, Zap } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import Avatar from '../../components/Avatar'
import { students } from '../../data/dummy'

const filters = ['All', 'Algorithms', 'ML', 'Web Dev', 'Math', 'Databases']

export default function DiscoverScreen() {
  const { navigate } = useNav()
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = students.filter(s =>
    (query === '' || s.name.toLowerCase().includes(query.toLowerCase()) ||
     s.subjects.some(sub => sub.toLowerCase().includes(query.toLowerCase()))) &&
    (activeFilter === 'All' || s.subjects.some(sub => sub.toLowerCase().includes(activeFilter.toLowerCase())))
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-5 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Discover</h1>
              <p className="text-sm text-gray-500 mt-0.5">Find study buddies that match your style</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${showFilters ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
          </div>

          <div className="flex gap-3 items-center">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by name or subject..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFilter === f ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 flex gap-3 flex-wrap">
              {['Same university', 'Available today', 'Online now', 'Verified'].map(f => (
                <button key={f} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                  <div className="w-3.5 h-3.5 rounded bg-violet-100 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-sm bg-violet-500" />
                  </div>
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">
          {filtered.length} study buddies found
        </p>
        <div className="grid grid-cols-2 gap-4">
          {filtered.map(student => (
            <button
              key={student.id}
              onClick={() => navigate('user-profile-preview', { userId: student.id })}
              className="bg-white rounded-3xl p-5 shadow-sm text-left hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <Avatar initials={student.avatar} colorClass={student.avatarColor} size="lg" online={student.online} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">{student.name}</h3>
                    <div className="flex items-center gap-1 bg-violet-50 px-2 py-0.5 rounded-full">
                      <Zap size={10} className="text-violet-600" />
                      <span className="text-[11px] font-bold text-violet-600">{student.matchScore}%</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{student.faculty} · {student.year}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">{student.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {student.subjects.slice(0, 3).map(sub => (
                      <span key={sub} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {sub}
                      </span>
                    ))}
                    {student.subjects.length > 3 && (
                      <span className="text-xs text-gray-400 self-center">+{student.subjects.length - 3}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      <span className="text-xs font-semibold text-gray-700">{student.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">{student.sessionsCount} sessions</span>
                    <span className="text-xs text-gray-400">{student.buddiesCount} buddies</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
