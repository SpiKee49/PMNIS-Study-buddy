import { createContext, useContext, useState } from 'react'
import { schedule as initialSchedule, conversations as initialConversations, currentUser, students } from '../data/dummy'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const [screen, setScreen] = useState('splash')
  const [history, setHistory] = useState([])
  const [params, setParams] = useState({})
  const [schedule, setSchedule] = useState(initialSchedule)
  const [buddies, setBuddies] = useState(initialConversations.map(c => c.userId))
  const [conversations, setConversations] = useState(initialConversations)
  const [studyCoins, setStudyCoins] = useState(currentUser.studyCoins)
  const [coinsPurchased, setCoinsPurchased] = useState(currentUser.coinsPurchased)

  const navigate = (to, newParams = {}) => {
    setHistory(h => [...h, { screen, params }])
    setScreen(to)
    setParams(newParams)
  }

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1]
      setHistory(h => h.slice(0, -1))
      setScreen(prev.screen)
      setParams(prev.params || {})
    }
  }

  const reset = (to, newParams = {}) => {
    setHistory([])
    setScreen(to)
    setParams(newParams)
  }

  const addToSchedule = (meeting) => {
    const newMeeting = {
      id: `s${Date.now()}`,
      title: meeting.buddy,
      subtitle: meeting.subject,
      time: meeting.time,
      duration: '1h', // Default duration
      color: 'bg-emerald-500', // Color for scheduled meetings
      day: 'Today', // Could be calculated based on date
    }
    setSchedule(prev => [newMeeting, ...prev])
  }

  const addBuddy = (userId) => {
    // Check if buddy already exists
    if (buddies.includes(userId)) return

    // Add to buddies list
    setBuddies(prev => [...prev, userId])

    // Check if conversation already exists
    const existingConversation = conversations.find(c => c.userId === userId)
    if (existingConversation) return

    // Create new conversation
    const student = students.find(s => s.id === userId)
    if (student) {
      const newConversation = {
        id: `c${userId.slice(1)}`, // Use consistent ID generation: c + userId number
        userId: student.id,
        name: student.name,
        avatar: student.avatar,
        avatarColor: student.avatarColor,
        lastMessage: 'Say hi to start a conversation!',
        lastMessageTime: 'Just now',
        unread: 0,
        online: student.online || false,
      }
      setConversations(prev => [newConversation, ...prev])
    }
  }

  const removeBuddy = (userId) => {
    setBuddies(prev => prev.filter(id => id !== userId))
  }

  const addCoins = (amount) => {
    setStudyCoins(prev => prev + amount)
  }

  const spendCoins = (amount, itemId) => {
    if (studyCoins >= amount) {
      setStudyCoins(prev => prev - amount)
      setCoinsPurchased(prev => [...prev, itemId])
      return true
    }
    return false
  }

  const hasUnlocked = (itemId) => {
    return coinsPurchased.includes(itemId)
  }

  return (
    <NavigationContext.Provider value={{ screen, params, navigate, goBack, reset, schedule, addToSchedule, buddies, addBuddy, removeBuddy, conversations, studyCoins, addCoins, spendCoins, hasUnlocked, coinsPurchased }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNav() {
  return useContext(NavigationContext)
}
