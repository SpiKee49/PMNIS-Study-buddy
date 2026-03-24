import { useState } from 'react'
import { Search, MessageCircle, Calendar, Star, Clock, Users, Plus, X, Trash2 } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import Avatar from '../../components/Avatar'
import { conversations, students } from '../../data/dummy'
import MeetingScheduler from '../../components/MeetingScheduler'

export default function BuddiesScreen() {
  const { navigate, buddies, removeBuddy } = useNav()
  const [query, setQuery] = useState('')
  const [showScheduler, setShowScheduler] = useState(false)
  const [selectedBuddy, setSelectedBuddy] = useState(null)

  // Get buddy data by combining buddies list with student data
  const buddiesData = buddies.map(userId => {
    const studentData = students.find(s => s.id === userId)
    const conversationData = conversations.find(c => c.userId === userId)
    return {
      ...studentData,
      ...conversationData,
      // Ensure we have all necessary properties
      subjects: studentData?.subjects || [],
      availability: studentData?.availability || [],
      rating: studentData?.rating || 0,
      sessionsCount: studentData?.sessionsCount || 0,
      buddiesCount: studentData?.buddiesCount || 0,
    }
  })

  const filteredBuddies = buddiesData.filter(buddy =>
    query === '' ||
    buddy.name?.toLowerCase().includes(query.toLowerCase()) ||
    (buddy.subjects && Array.isArray(buddy.subjects) && buddy.subjects.some(sub => sub?.toLowerCase().includes(query.toLowerCase())))
  )

  const handleScheduleMeeting = (buddy) => {
    setSelectedBuddy(buddy)
    setShowScheduler(true)
  }

  const handleRemoveBuddy = (buddyId) => {
    removeBuddy(buddyId)
  }

  const handleMeetingScheduled = (meetingData) => {
    console.log('Meeting scheduled:', meetingData)
    setShowScheduler(false)
    setSelectedBuddy(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 pt-8 pb-5 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Buddies</h1>
              <p className="text-sm text-gray-500 mt-0.5">Your study partners and connections</p>
            </div>
            <button
              onClick={() => navigate('discover')}
              className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-violet-700 transition-colors"
            >
              <Plus size={15} />
              Find More Buddies
            </button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search buddies by name or subject..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Buddies Grid */}
      <div className="max-w-5xl mx-auto px-8 py-6">
        <div className="mb-4">
          <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
            {filteredBuddies.length} of {buddiesData.length} study {buddiesData.length === 1 ? 'buddy' : 'buddies'}
          </p>
        </div>

        {filteredBuddies.length === 0 ? (
          <div className="text-center py-12">
            {buddiesData.length === 0 ? (
              <>
                <Users size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No buddies yet</h3>
                <p className="text-gray-500 mb-6">Start by discovering study partners that match your interests</p>
                <button
                  onClick={() => navigate('discover')}
                  className="bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors"
                >
                  Discover Buddies
                </button>
              </>
            ) : (
              <>
                <Users size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No buddies found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search terms</p>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBuddies.map(buddy => (
              <div
                key={buddy.id}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative group"
              >
                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveBuddy(buddy.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-red-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100"
                  title="Remove buddy"
                >
                  <X size={14} className="text-red-600" />
                </button>

                <div className="flex items-start gap-4">
                  <Avatar
                    initials={buddy.avatar}
                    colorClass={buddy.avatarColor}
                    size="lg"
                    online={buddy.online}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 truncate">{buddy.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-amber-400 fill-amber-400" />
                        <span className="text-xs font-semibold text-gray-700">{buddy.rating}</span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 mb-2">
                      {buddy.faculty} · {buddy.year}
                    </p>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                      {buddy.bio}
                    </p>

                    {/* Subjects */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(buddy.subjects && Array.isArray(buddy.subjects) ? buddy.subjects.slice(0, 3) : []).map(subject => (
                        <span
                          key={subject}
                          className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                      {buddy.subjects && Array.isArray(buddy.subjects) && buddy.subjects.length > 3 && (
                        <span className="text-xs text-gray-400 self-center">
                          +{buddy.subjects.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                      <span>{buddy.sessionsCount} sessions</span>
                      <span>{buddy.buddiesCount} buddies</span>
                      <span className={`flex items-center gap-1 ${buddy.online ? 'text-emerald-500' : 'text-gray-400'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${buddy.online ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                        {buddy.online ? 'Online' : 'Offline'}
                      </span>
                    </div>

                    {/* Last Message */}
                    {buddy.lastMessage && (
                      <div className="mb-3 p-2 bg-gray-50 rounded-lg relative">
                        {buddy.unread > 0 && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-violet-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {buddy.unread}
                          </div>
                        )}
                        <p className="text-xs text-gray-500 mb-1">Last message</p>
                        <p className={`text-sm line-clamp-1 ${buddy.unread > 0 ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                          {buddy.lastMessage}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{buddy.lastMessageTime}</p>
                      </div>
                    )}

                    {/* Availability */}
                    {buddy.availability && buddy.availability.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                          <Clock size={12} />
                          Available
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {buddy.availability.slice(0, 2).map(time => (
                            <span key={time} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                              {time}
                            </span>
                          ))}
                          {buddy.availability.length > 2 && (
                            <span className="text-xs text-gray-400 self-center">
                              +{buddy.availability.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate('direct-message', { userId: buddy.id })}
                        className="flex-1 flex items-center justify-center gap-2 bg-violet-50 text-violet-700 text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-violet-100 transition-colors"
                      >
                        <MessageCircle size={14} />
                        Message
                      </button>
                      <button
                        onClick={() => handleScheduleMeeting(buddy)}
                        className="flex-1 flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-emerald-100 transition-colors"
                      >
                        <Calendar size={14} />
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Meeting Scheduler Modal */}
      {showScheduler && selectedBuddy && (
        <MeetingScheduler
          buddy={selectedBuddy}
          onClose={() => {
            setShowScheduler(false)
            setSelectedBuddy(null)
          }}
          onSchedule={handleMeetingScheduled}
        />
      )}
    </div>
  )
}
