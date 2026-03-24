import { Home, Compass, Users, MessageCircle, User, BookOpen, Settings, Heart, Coins } from 'lucide-react'
import { useNav } from '../context/NavigationContext'
import { currentUser } from '../data/dummy'

const navItems = [
  { id: 'home',     label: 'Home',      icon: Home,          screen: 'home' },
  { id: 'discover', label: 'Discover',  icon: Compass,       screen: 'discover' },
  { id: 'buddies',  label: 'Buddies',   icon: Heart,         screen: 'buddies' },
  { id: 'groups',   label: 'Groups',    icon: Users,         screen: 'groups' },
  { id: 'messages', label: 'Messages',  icon: MessageCircle, screen: 'messages' },
  { id: 'profile',  label: 'Profile',   icon: User,          screen: 'profile' },
]

const tabScreens = {
  home: 'home',
  discover: 'discover', 'user-profile-preview': 'discover',
  buddies: 'buddies',
  groups: 'groups', 'group-detail': 'groups', 'group-chat': 'groups', workspace: 'groups',
  messages: 'messages', 'direct-message': 'messages',
  profile: 'profile', 'edit-profile': 'profile', settings: 'profile',
}

export default function Sidebar({ active }) {
  const { navigate, studyCoins, conversations } = useNav()
  const activeTab = tabScreens[active] || 'home'
  const unreadMessages = conversations.reduce((sum, c) => sum + c.unread, 0)

  return (
    <aside className="w-60 shrink-0 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
            <BookOpen size={18} className="text-white" strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm leading-none">Study Buddy</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Learn together</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(item => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          const badge = item.id === 'messages' && unreadMessages > 0 ? unreadMessages : null

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.screen)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left ${
                isActive
                  ? 'bg-violet-50 text-violet-700'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.5 : 1.8}
                className={isActive ? 'text-violet-600' : ''}
              />
              <span className={`text-sm flex-1 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
              {badge && (
                <span className="bg-violet-600 text-white text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {badge}
                </span>
              )}
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />}
            </button>
          )
        })}
      </nav>

      {/* User card at bottom */}
      <div className="px-3 py-3 border-t border-gray-100 space-y-3">
        {/* Coins Display */}
        <button
          onClick={() => navigate('coins-store')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 transition-all border border-amber-200"
        >
          <Coins size={16} className="text-amber-600 flex-shrink-0" />
          <div className="flex-1 text-left">
            <p className="text-xs text-amber-700 font-semibold">Study Coins</p>
            <p className="text-sm font-bold text-amber-900">{studyCoins}</p>
          </div>
        </button>

        {/* User card */}
        <button
          onClick={() => navigate('settings')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <div className={`w-8 h-8 ${currentUser.avatarColor} rounded-full flex items-center justify-center flex-shrink-0`}>
            <span className="text-xs font-bold text-white">{currentUser.avatar}</span>
          </div>
          <div className="flex-1 min-w-0 text-left">
            <p className="text-sm font-semibold text-gray-800 truncate">{currentUser.name}</p>
            <p className="text-[11px] text-gray-400 truncate">{currentUser.username}</p>
          </div>
          <Settings size={14} className="text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
        </button>
      </div>
    </aside>
  )
}
