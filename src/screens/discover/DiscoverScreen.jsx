import { useState } from 'react'
import { Search, SlidersHorizontal, Star, CheckCircle, Users, X, ChevronLeft } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import Avatar from '../../components/Avatar'
import { students } from '../../data/dummy'
import { computeMatchScore, getMatchLabel } from '../../utils/matchScore'

const FIELDS = [
  { id: 'All', label: 'All Fields', emoji: '🌐' },
  { id: 'Tech & CS', label: 'Tech & CS', emoji: '💻' },
  { id: 'Science', label: 'Science', emoji: '🔬' },
  { id: 'Medicine & Health', label: 'Medicine', emoji: '🩺' },
  { id: 'Law & Politics', label: 'Law', emoji: '⚖️' },
  { id: 'Economics & Business', label: 'Economics', emoji: '📈' },
  { id: 'Arts & Design', label: 'Arts & Design', emoji: '🎨' },
  { id: 'Humanities', label: 'Humanities', emoji: '📖' },
]

const SCHOOL_TYPES = ['All', 'University', 'High School']
const YEARS = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year+']
const LEARNING_STYLES = ['All', 'Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic']
const VIBES = [
  { id: 'All', label: 'Any vibe' },
  { id: 'Casual', label: '☕ Casual' },
  { id: 'Discussion', label: '💬 Discussion' },
  { id: 'Structured', label: '📋 Structured' },
]

const FIELD_COLORS = {
  'Tech & CS': 'bg-violet-100 text-violet-700',
  'Science': 'bg-blue-100 text-blue-700',
  'Medicine & Health': 'bg-rose-100 text-rose-700',
  'Law & Politics': 'bg-slate-100 text-slate-700',
  'Economics & Business': 'bg-amber-100 text-amber-700',
  'Arts & Design': 'bg-orange-100 text-orange-700',
  'Humanities': 'bg-pink-100 text-pink-700',
}

const STYLE_ICON = { 'Visual': '👁', 'Auditory': '🎧', 'Reading/Writing': '✍️', 'Kinesthetic': '🤝' }
const VIBE_ICON = { 'Casual': '☕', 'Discussion': '💬', 'Structured': '📋' }

const ALL_SCHOOLS = [...new Set(students.map(s => s.university).filter(Boolean))].sort()

export default function DiscoverScreen() {
  const { navigate, goBack, params, addBuddy, buddies, inviteToGroup, allGroups, matchPreferences, userProfile } = useNav()

  // Pick mode: passed from GroupDetailScreen when inviting to an existing group
  const pickMode = !!params?.pickGroupId
  const pickGroupId = params?.pickGroupId
  const group = pickMode ? allGroups?.find(g => g.id === pickGroupId) : null
  const existingMemberIds = new Set(group?.members || [])

  const [tab, setTab] = useState('people') // 'people' | 'groups'
  const [query, setQuery] = useState('')
  const [groupQuery, setGroupQuery] = useState('')
  const [schoolQuery, setSchoolQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [activeField, setActiveField] = useState('All')
  const [activeSchoolType, setActiveSchoolType] = useState('All')
  const [activeYear, setActiveYear] = useState('All')
  const [activeStyle, setActiveStyle] = useState('All')
  const [activeVibe, setActiveVibe] = useState('All')
  const [onlineOnly, setOnlineOnly] = useState(false)
  const [addedBuddies, setAddedBuddies] = useState(new Set())
  const [selected, setSelected] = useState(new Set()) // pick mode selections
  const [confirmed, setConfirmed] = useState(false)

  const activeFilterCount = [
    activeField !== 'All',
    activeSchoolType !== 'All',
    activeYear !== 'All',
    activeStyle !== 'All',
    activeVibe !== 'All',
    onlineOnly,
    schoolQuery.trim() !== '',
  ].filter(Boolean).length

  const clearAll = () => {
    setActiveField('All')
    setActiveSchoolType('All')
    setActiveYear('All')
    setActiveStyle('All')
    setActiveVibe('All')
    setOnlineOnly(false)
    setSchoolQuery('')
  }

  const filtered = students.filter(s => {
    const q = query.toLowerCase()
    const matchQuery = q === '' ||
      s.name.toLowerCase().includes(q) ||
      s.subjects.some(sub => sub.toLowerCase().includes(q)) ||
      (s.faculty && s.faculty.toLowerCase().includes(q)) ||
      (s.university && s.university.toLowerCase().includes(q))
    const matchField = activeField === 'All' || s.field === activeField
    const matchSchoolType = activeSchoolType === 'All' || s.schoolType === activeSchoolType
    const matchYear = activeYear === 'All' ||
      (activeYear === '5th Year+' ? parseInt(s.year) >= 5 : s.year === activeYear)
    const matchStyle = activeStyle === 'All' || s.learningStyle === activeStyle
    const matchVibe = activeVibe === 'All' || s.studyVibe === activeVibe
    const matchOnline = !onlineOnly || s.online
    const sq = schoolQuery.toLowerCase().trim()
    const matchSchool = sq === '' || (s.university && s.university.toLowerCase().includes(sq))
    // In pick mode hide existing members
    const notAlreadyMember = !pickMode || !existingMemberIds.has(s.id)
    return matchQuery && matchField && matchSchoolType && matchYear && matchStyle && matchVibe && matchOnline && matchSchool && notAlreadyMember
  })

  const handleAddBuddy = (e, studentId) => {
    e.stopPropagation()
    addBuddy(studentId)
    setAddedBuddies(prev => new Set([...prev, studentId]))
    setTimeout(() => navigate('direct-message', { userId: studentId }), 600)
  }

  const isAdded = (id) => addedBuddies.has(id) || buddies.includes(id)

  const toggleSelect = (id) => {
    setSelected(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const filteredGroups = allGroups.filter(g => {
    const q = groupQuery.toLowerCase().trim()
    return q === '' ||
      g.name.toLowerCase().includes(q) ||
      g.subject.toLowerCase().includes(q) ||
      (g.description && g.description.toLowerCase().includes(q)) ||
      (g.tags && g.tags.some(t => t.toLowerCase().includes(q)))
  })

  const handleConfirmInvite = () => {
    inviteToGroup(pickGroupId, [...selected])
    setConfirmed(true)
    setTimeout(() => goBack(), 1400)
  }

  const schoolSuggestions = schoolQuery.trim()
    ? ALL_SCHOOLS.filter(s => s.toLowerCase().includes(schoolQuery.toLowerCase()) && s !== schoolQuery)
    : []

  return (
    <div className={`min-h-screen bg-gray-50 ${pickMode ? 'pb-28' : ''}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-5 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {pickMode && (
                <button onClick={goBack} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <ChevronLeft size={20} className="text-gray-700" />
                </button>
              )}
              <div>
                {pickMode ? (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900">Add Members</h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Select people to invite to <span className="font-semibold text-violet-700">{group?.name}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-gray-900">Discover</h1>
                    <p className="text-sm text-gray-500 mt-0.5">Find study buddies across all fields and schools</p>
                  </>
                )}
              </div>
            </div>
            {!pickMode && (
              <button
                onClick={() => navigate('buddies')}
                className="flex items-center gap-2 bg-emerald-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                <Users size={15} />
                View My Buddies
              </button>
            )}
          </div>

          {/* Tabs — hidden in pick mode */}
          {!pickMode && (
            <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit mb-5">
              <button
                onClick={() => setTab('people')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${tab === 'people' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                👤 People
              </button>
              <button
                onClick={() => setTab('groups')}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${tab === 'groups' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                👥 Groups
              </button>
            </div>
          )}

          {/* Groups search — only in groups tab */}
          {!pickMode && tab === 'groups' && (
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={groupQuery}
                onChange={e => setGroupQuery(e.target.value)}
                placeholder="Search by group name, subject, or tag…"
                className="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              />
              {groupQuery && (
                <button onClick={() => setGroupQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
              )}
            </div>
          )}

          {/* People search + filter toggle */}
          {(pickMode || tab === 'people') && (
            <div className="flex gap-3 items-center">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search by name, subject, faculty…"
                  className="w-full pl-10 pr-9 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
                {query && (
                  <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X size={14} />
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters(v => !v)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all whitespace-nowrap ${
                  showFilters || activeFilterCount > 0
                    ? 'bg-violet-600 text-white border-violet-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'
                }`}
              >
                <SlidersHorizontal size={15} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-white text-violet-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Active filter chips */}
          {(pickMode || tab === 'people') && activeFilterCount > 0 && !showFilters && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {activeField !== 'All' && <Chip label={`${FIELDS.find(f => f.id === activeField)?.emoji} ${activeField}`} onRemove={() => setActiveField('All')} />}
              {activeSchoolType !== 'All' && <Chip label={activeSchoolType} onRemove={() => setActiveSchoolType('All')} />}
              {activeYear !== 'All' && <Chip label={activeYear} onRemove={() => setActiveYear('All')} />}
              {activeStyle !== 'All' && <Chip label={`${STYLE_ICON[activeStyle]} ${activeStyle}`} onRemove={() => setActiveStyle('All')} />}
              {activeVibe !== 'All' && <Chip label={activeVibe} onRemove={() => setActiveVibe('All')} />}
              {onlineOnly && <Chip label="🟢 Online now" onRemove={() => setOnlineOnly(false)} />}
              {schoolQuery.trim() && <Chip label={`🏫 ${schoolQuery}`} onRemove={() => setSchoolQuery('')} />}
              <button onClick={clearAll} className="text-xs text-gray-400 hover:text-gray-600 font-semibold">Clear all</button>
            </div>
          )}

          {/* Filter panel */}
          {(pickMode || tab === 'people') && showFilters && (
            <div className="mt-4 bg-gray-50 rounded-2xl p-5 space-y-5 border border-gray-100">
              <FilterSection label="Field of Study">
                <div className="flex flex-wrap gap-2">
                  {FIELDS.map(f => (
                    <ToggleBtn key={f.id} active={activeField === f.id} onClick={() => setActiveField(f.id)}>{f.emoji} {f.label}</ToggleBtn>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Type of School">
                <div className="flex flex-wrap gap-2">
                  {SCHOOL_TYPES.map(t => (
                    <ToggleBtn key={t} active={activeSchoolType === t} onClick={() => setActiveSchoolType(t)}>
                      {t === 'University' ? '🎓' : t === 'High School' ? '🏫' : '📚'} {t}
                    </ToggleBtn>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Specific School">
                <div className="relative">
                  <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={schoolQuery}
                    onChange={e => setSchoolQuery(e.target.value)}
                    placeholder="Search by school name…"
                    className="w-full pl-8 pr-8 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                  {schoolQuery && (
                    <button onClick={() => setSchoolQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={13} /></button>
                  )}
                  {schoolSuggestions.length > 0 && (
                    <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                      {schoolSuggestions.map(s => (
                        <button key={s} onClick={() => setSchoolQuery(s)} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-violet-50 hover:text-violet-700 transition-colors">{s}</button>
                      ))}
                    </div>
                  )}
                </div>
              </FilterSection>

              <FilterSection label="Year of Study">
                <div className="flex flex-wrap gap-2">
                  {YEARS.map(y => <ToggleBtn key={y} active={activeYear === y} onClick={() => setActiveYear(y)}>{y}</ToggleBtn>)}
                </div>
              </FilterSection>

              <FilterSection label="Learning Style">
                <div className="flex flex-wrap gap-2">
                  {LEARNING_STYLES.map(s => (
                    <ToggleBtn key={s} active={activeStyle === s} onClick={() => setActiveStyle(s)}>
                      {STYLE_ICON[s] ? `${STYLE_ICON[s]} ` : ''}{s}
                    </ToggleBtn>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Study Vibe">
                <div className="flex flex-wrap gap-2">
                  {VIBES.map(v => (
                    <ToggleBtn key={v.id} active={activeVibe === v.id} onClick={() => setActiveVibe(v.id)} color="indigo">{v.label}</ToggleBtn>
                  ))}
                </div>
              </FilterSection>

              <FilterSection label="Availability">
                <button
                  onClick={() => setOnlineOnly(v => !v)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    onlineOnly ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  🟢 Online now only
                </button>
              </FilterSection>

              <div className="flex items-center justify-between pt-1 border-t border-gray-200">
                <button onClick={clearAll} className="text-xs text-gray-400 hover:text-gray-600 font-semibold">Clear all filters</button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="px-4 py-2 bg-violet-600 text-white text-xs font-bold rounded-xl hover:bg-violet-700 transition-colors"
                >
                  Show {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-8 py-6">

        {/* Groups tab */}
        {!pickMode && tab === 'groups' && (
          <>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">
              {filteredGroups.length} {filteredGroups.length === 1 ? 'group' : 'groups'} found
            </p>
            {filteredGroups.length === 0 && (
              <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
                <p className="text-gray-400 text-sm">No groups match your search.</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
              {filteredGroups.map(g => (
                <div key={g.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer">
                  <button
                    onClick={() => navigate('group-detail', { groupId: g.id })}
                    className="absolute inset-0"
                  />
                  <div className="flex items-start gap-4 relative z-10 pointer-events-none">
                    <div className={`w-12 h-12 ${g.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <div className={`w-6 h-6 ${g.accent} rounded-xl`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-bold text-gray-900 truncate">{g.name}</h3>
                        {g.isJoined && (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full flex-shrink-0">Joined</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{g.subject}</p>
                      {g.description && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">{g.description}</p>
                      )}
                      {g.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {g.tags.slice(0, 3).map(tag => (
                            <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${g.color} ${g.textAccent}`}>{tag}</span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100">
                        <span className="text-xs text-gray-400">{g.memberCount}/{g.maxMembers} members</span>
                        <span className="text-xs text-gray-400">{g.nextSession}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* People tab */}
        {(pickMode || tab === 'people') && (
        <>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-4">
          {filtered.length} study {filtered.length === 1 ? 'buddy' : 'buddies'} found
          {pickMode && selected.size > 0 && (
            <span className="ml-2 text-violet-600">· {selected.size} selected</span>
          )}
        </p>

        {filtered.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center shadow-sm">
            <p className="text-gray-400 text-sm mb-2">No students match your filters.</p>
            <button onClick={clearAll} className="text-violet-600 text-sm font-semibold hover:underline">Clear filters</button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {filtered.map(student => {
            const isSelected = selected.has(student.id)
            const { score } = computeMatchScore(userProfile, student, matchPreferences)
            const matchInfo = getMatchLabel(score)
            return (
              <div
                key={student.id}
                className={`bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all text-left relative overflow-hidden group cursor-pointer ${
                  pickMode && isSelected ? 'ring-2 ring-violet-500' : ''
                }`}
              >
                {/* In pick mode the whole card is a selector; in normal mode it navigates */}
                <button
                  onClick={() => pickMode ? toggleSelect(student.id) : navigate('user-profile-preview', { userId: student.id })}
                  className="absolute inset-0"
                />

                <div className="flex items-start gap-4 relative z-10 pointer-events-none">
                  <Avatar initials={student.avatar} colorClass={student.avatarColor} size="lg" online={student.online} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-bold text-gray-900 truncate">{student.name}</h3>
                      <div className={`px-2 py-0.5 rounded-full flex-shrink-0 ${matchInfo.bg}`}>
                        <span className={`text-[11px] font-bold ${matchInfo.text}`}>{matchInfo.label}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mt-0.5 truncate">{student.university} · {student.year}</p>

                    <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                      {student.schoolType && student.schoolType !== 'University' && (
                        <span className="text-[10px] font-semibold bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">🏫 {student.schoolType}</span>
                      )}
                      {student.field && (
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${FIELD_COLORS[student.field] || 'bg-gray-100 text-gray-600'}`}>
                          {FIELDS.find(f => f.id === student.field)?.emoji} {student.field}
                        </span>
                      )}
                      {student.studyVibe && (
                        <span className="text-[10px] font-semibold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                          {VIBE_ICON[student.studyVibe]} {student.studyVibe}
                        </span>
                      )}
                      {student.learningStyle && (
                        <span className="text-[10px] font-semibold bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {STYLE_ICON[student.learningStyle]} {student.learningStyle}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">{student.bio}</p>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {student.subjects.slice(0, 3).map(sub => (
                        <span key={sub} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">{sub}</span>
                      ))}
                      {student.subjects.length > 3 && (
                        <span className="text-xs text-gray-400 self-center">+{student.subjects.length - 3} more</span>
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

                {/* Action button — checkbox in pick mode, add-buddy in normal mode */}
                {pickMode ? (
                  <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center z-20 transition-all ${
                    isSelected ? 'bg-violet-600 border-violet-600' : 'border-gray-300 bg-white'
                  }`}>
                    {isSelected && <CheckCircle size={14} className="text-white" />}
                  </div>
                ) : (
                  isAdded(student.id) && (
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center z-20">
                      <CheckCircle size={20} className="text-emerald-600" />
                    </div>
                  )
                )}
              </div>
            )
          })}
        </div>
        </>
        )}
      </div>

      {/* Pick mode — floating confirm bar */}
      {pickMode && (
        <div className="fixed bottom-0 left-60 right-0 bg-white border-t border-gray-100 shadow-xl px-8 py-4 flex items-center justify-between z-40">
          {confirmed ? (
            <div className="flex items-center gap-2 mx-auto">
              <CheckCircle size={18} className="text-emerald-600" />
              <span className="font-semibold text-emerald-700">
                {selected.size} member{selected.size !== 1 ? 's' : ''} added to {group?.name}!
              </span>
            </div>
          ) : (
            <>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {selected.size > 0 ? `${selected.size} person${selected.size !== 1 ? 's' : ''} selected` : 'Tap a card to select'}
                </p>
                <p className="text-xs text-gray-400">Adding to <span className="font-semibold">{group?.name}</span></p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={goBack} className="px-4 py-2 border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  onClick={handleConfirmInvite}
                  disabled={selected.size === 0}
                  className="px-5 py-2 bg-violet-600 text-white text-sm font-bold rounded-xl hover:bg-violet-700 disabled:opacity-40 transition-colors"
                >
                  {selected.size > 0 ? `Add ${selected.size} to Group` : 'Add to Group'}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function FilterSection({ label, children }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-2">{label}</p>
      {children}
    </div>
  )
}

function ToggleBtn({ active, onClick, children, color = 'violet' }) {
  const activeClass = color === 'indigo'
    ? 'bg-indigo-600 text-white border-indigo-600'
    : 'bg-violet-600 text-white border-violet-600'
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
        active ? activeClass : 'bg-white text-gray-600 border-gray-200 hover:border-violet-300'
      }`}
    >
      {children}
    </button>
  )
}

function Chip({ label, onRemove }) {
  return (
    <span className="flex items-center gap-1 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">
      {label}
      <button onClick={onRemove} className="ml-0.5 hover:text-violet-900"><X size={11} /></button>
    </span>
  )
}
