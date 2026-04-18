import { createContext, useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { schedule as initialSchedule, conversations as initialConversations, currentUser, students, mySubjects as initialSubjects, subjectMaterials as initialSubjectMaterials, flashcardDecks as initialFlashcardDecks, practiceTests as initialPracticeTests, groups as initialGroups, groupMessages as initialGroupMessages, workspaceFiles as initialWorkspaceFiles } from '../data/dummy'
import { defaultMatchPreferences } from '../utils/matchScore'

const NavigationContext = createContext(null)

export function NavigationProvider({ children }) {
  const routerNavigate = useNavigate()
  const location = useLocation()
  const screen = location.pathname.replace(/^\//, '') || 'splash'
  const params = location.state || {}
  const [schedule, setSchedule] = useState(initialSchedule)
  const [buddies, setBuddies] = useState(initialConversations.map(c => c.userId))
  const [conversations, setConversations] = useState(initialConversations)
  const [mySubjects, setMySubjects] = useState(initialSubjects)
  const [subjectMaterials, setSubjectMaterials] = useState(initialSubjectMaterials)
  const [subjectFlashcardDecks, setSubjectFlashcardDecks] = useState(initialFlashcardDecks)
  const [subjectPracticeTests, setSubjectPracticeTests] = useState(initialPracticeTests)
  const [studyCoins, setStudyCoins] = useState(currentUser.studyCoins)
  const [coinsPurchased, setCoinsPurchased] = useState(currentUser.coinsPurchased)
  const [summaryOnboarding, setSummaryOnboarding] = useState(true)
  const [allGroups, setAllGroups] = useState(initialGroups)
  const [groupMessages, setGroupMessages] = useState(initialGroupMessages)
  const [groupWorkspaceFiles, setGroupWorkspaceFiles] = useState({ global: initialWorkspaceFiles })
  const [reminders, setReminders] = useState([])
  const [matchPreferences, setMatchPreferences] = useState(defaultMatchPreferences)
  const resetMatchPreferences = () => setMatchPreferences(defaultMatchPreferences)
  const [darkMode, setDarkMode] = useState(false)

  // User profile — populated during registration and editable afterwards
  const [userProfile, setUserProfile] = useState({
    name: currentUser.name,
    email: '',
    username: currentUser.username,
    avatar: currentUser.avatar,
    avatarColor: currentUser.avatarColor,
    university: currentUser.university,
    faculty: currentUser.faculty,
    year: currentUser.year,
    bio: currentUser.bio,
    subjects: [...currentUser.subjects],
    learningStyle: currentUser.learningStyle,
    availability: [...currentUser.availability],
    studyVibe: 'Structured',
    rating: currentUser.rating,
    sessionsCount: currentUser.sessionsCount,
    buddiesCount: currentUser.buddiesCount,
  })

  const updateUserProfile = (updates) => {
    setUserProfile(prev => {
      const next = { ...prev, ...updates }
      if (updates.name) {
        const parts = updates.name.trim().split(/\s+/)
        next.avatar = parts.map(p => p[0]).join('').slice(0, 2).toUpperCase()
        // Auto-generate username from name only if not manually set
        if (!updates.username) {
          const first = parts[0].toLowerCase().replace(/[^a-z0-9]/g, '')
          const lastInitial = parts.length > 1 ? parts[parts.length - 1][0].toLowerCase().replace(/[^a-z0-9]/g, '') : ''
          next.username = '@' + first + lastInitial
        }
      }
      return next
    })
  }
  const [pushNotifications, setPushNotifications] = useState(true)
  const [profileVisibility, setProfileVisibility] = useState('Public')
  const [language, setLanguage] = useState('English')

  const navigate = (to, newParams = {}) => {
    routerNavigate('/' + to, { state: newParams })
  }

  const goBack = () => {
    routerNavigate(-1)
  }

  const reset = (to, newParams = {}) => {
    routerNavigate('/' + to, { state: newParams, replace: true })
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

  const addSubject = (name) => {
    if (!name || !name.trim()) return
    const trimmedName = name.trim()
    const newSubject = {
      id: `s${Date.now()}`,
      name: trimmedName,
      abbrev: trimmedName.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 3),
      color: 'bg-violet-500',
      materialsCount: 0,
      flashcardsCount: 0,
      testsCount: 0,
      mastery: 0,
    }
    setMySubjects(prev => [newSubject, ...prev])
    setSubjectMaterials(prev => ({ ...prev, [newSubject.id]: [] }))
    setSubjectFlashcardDecks(prev => ({ ...prev, [newSubject.id]: [] }))
    setSubjectPracticeTests(prev => ({ ...prev, [newSubject.id]: [] }))
    return newSubject.id
  }

  const removeSubject = (subjectId) => {
    setMySubjects(prev => prev.filter(s => s.id !== subjectId))
    setSubjectMaterials(prev => { const n = { ...prev }; delete n[subjectId]; return n })
    setSubjectFlashcardDecks(prev => { const n = { ...prev }; delete n[subjectId]; return n })
    setSubjectPracticeTests(prev => { const n = { ...prev }; delete n[subjectId]; return n })
  }

  const addFlashcardDeck = (subjectId, name, cards = []) => {
    if (!name || !name.trim()) return

    const normalizedCards = Array.isArray(cards)
      ? cards.map((card, index) => ({
          id: card.id || `c${Date.now()}_${index}`,
          question: card.question || `Question ${index + 1}`,
          answer: card.answer || `Answer ${index + 1}`,
        }))
      : []

    const cardCount = normalizedCards.length || 0
    const newDeck = {
      id: `fd${Date.now()}`,
      name: name.trim(),
      cardCount,
      cards: normalizedCards,
    }

    setSubjectFlashcardDecks(prev => ({
      ...prev,
      [subjectId]: [...(prev[subjectId] || []), newDeck],
    }))

    setMySubjects(prev => prev.map(sub =>
      sub.id === subjectId
        ? { ...sub, flashcardsCount: sub.flashcardsCount + cardCount }
        : sub
    ))

    return newDeck.id
  }

  const removeFlashcardDeck = (subjectId, deckId) => {
    setSubjectFlashcardDecks(prev => {
      const deckList = prev[subjectId] || []
      const deckToRemove = deckList.find(d => d.id === deckId)
      const newList = deckList.filter(d => d.id !== deckId)

      if (deckToRemove) {
        const cardCount = deckToRemove.cardCount || deckToRemove.cards?.length || 0
        setMySubjects(subjectsPrev => subjectsPrev.map(sub =>
          sub.id === subjectId
            ? { ...sub, flashcardsCount: Math.max(0, sub.flashcardsCount - cardCount) }
            : sub
        ))
      }

      return {
        ...prev,
        [subjectId]: newList,
      }
    })
  }

  const updateFlashcardDeck = (subjectId, deckId, updates) => {
    setSubjectFlashcardDecks(prev => ({
      ...prev,
      [subjectId]: (prev[subjectId] || []).map(deck =>
        deck.id === deckId ? { ...deck, ...updates } : deck
      ),
    }))

    // Update subject count if cards were modified
    if (updates.cards) {
      const newCardCount = updates.cards.length
      const oldDeck = (prev[subjectId] || []).find(d => d.id === deckId)
      const oldCardCount = oldDeck?.cardCount || oldDeck?.cards?.length || 0
      const countDiff = newCardCount - oldCardCount

      if (countDiff !== 0) {
        setMySubjects(prev => prev.map(sub =>
          sub.id === subjectId
            ? { ...sub, flashcardsCount: sub.flashcardsCount + countDiff }
            : sub
        ))
      }
    }
  }

  const addPracticeTest = (subjectId, name, questions = null) => {
    if (!name || !name.trim()) return null
    const newTest = {
      id: `pt${Date.now()}`,
      name: name.trim(),
      questionCount: questions ? questions.length : 10,
      ...(questions && { questions }),
    }
    setSubjectPracticeTests(prev => ({
      ...prev,
      [subjectId]: [...(prev[subjectId] || []), newTest],
    }))
    setMySubjects(prev => prev.map(sub => sub.id === subjectId ? { ...sub, testsCount: sub.testsCount + 1 } : sub))
    return newTest.id
  }

  const removePracticeTest = (subjectId, testId) => {
    setSubjectPracticeTests(prev => {
      const testList = prev[subjectId] || []
      const testToRemove = testList.find(t => t.id === testId)
      const newList = testList.filter(t => t.id !== testId)

      if (testToRemove) {
        setMySubjects(subjectsPrev => subjectsPrev.map(sub =>
          sub.id === subjectId
            ? { ...sub, testsCount: Math.max(0, sub.testsCount - 1) }
            : sub
        ))
      }

      return {
        ...prev,
        [subjectId]: newList,
      }
    })
  }

  const addMaterial = (subjectId, material) => {
    setSubjectMaterials(prev => {
      const currentMaterials = prev[subjectId] || []
      if (currentMaterials.some(m => m.name === material.name)) {
        return prev // Do not add duplicate names
      }

      const newMaterial = { ...material, id: `m${Date.now()}`, date: 'Just now' }
      const updated = {
        ...prev,
        [subjectId]: [...currentMaterials, newMaterial],
      }

      // update materials count in subjects state
      setMySubjects(prevSubs => prevSubs.map(sub =>
        sub.id === subjectId ? { ...sub, materialsCount: sub.materialsCount + 1 } : sub
      ))

      return updated
    })
  }

  const removeMaterial = (subjectId, materialId) => {
    setSubjectMaterials(prev => {
      const materialList = prev[subjectId] || []
      const newList = materialList.filter(m => m.id !== materialId)

      setMySubjects(subjectsPrev => subjectsPrev.map(sub =>
        sub.id === subjectId
          ? { ...sub, materialsCount: Math.max(0, sub.materialsCount - 1) }
          : sub
      ))

      return {
        ...prev,
        [subjectId]: newList,
      }
    })
  }

  const createGroup = (name, subject, description, invitedUserIds = []) => {
    const colors = [
      { color: 'bg-violet-100', accent: 'bg-violet-500', textAccent: 'text-violet-600' },
      { color: 'bg-emerald-100', accent: 'bg-emerald-500', textAccent: 'text-emerald-600' },
      { color: 'bg-amber-100', accent: 'bg-amber-500', textAccent: 'text-amber-600' },
      { color: 'bg-blue-100', accent: 'bg-blue-500', textAccent: 'text-blue-600' },
      { color: 'bg-rose-100', accent: 'bg-rose-500', textAccent: 'text-rose-600' },
    ]
    const c = colors[Math.floor(Math.random() * colors.length)]
    const memberIds = ['u0', ...invitedUserIds]
    const membersData = memberIds.map(uid => {
      const s = students.find(st => st.id === uid)
      return s ? { id: uid, avatar: s.avatar, avatarColor: s.avatarColor } : { id: uid, avatar: '??', avatarColor: 'bg-gray-400' }
    })
    const newGroup = {
      id: `g${Date.now()}`,
      name: name.trim(),
      subject: subject.trim() || 'General',
      description: description.trim() || '',
      members: memberIds,
      membersData,
      memberCount: memberIds.length,
      maxMembers: 8,
      nextSession: 'Not scheduled',
      lastActivity: 'Just now',
      unreadCount: 0,
      ...c,
      tags: [],
      isJoined: true,
    }
    setAllGroups(prev => [newGroup, ...prev])
    return newGroup.id
  }

  const joinGroup = (groupId) => {
    setAllGroups(prev => prev.map(g =>
      g.id === groupId
        ? { ...g, isJoined: true, memberCount: g.memberCount + 1, members: [...g.members, 'u0'], membersData: [...g.membersData, { id: 'u0', avatar: userProfile.avatar, avatarColor: userProfile.avatarColor }] }
        : g
    ))
  }

  const inviteToGroup = (groupId, userIds) => {
    setAllGroups(prev => prev.map(g => {
      if (g.id !== groupId) return g
      const newIds = userIds.filter(id => !g.members.includes(id))
      if (newIds.length === 0) return g
      const newMembersData = newIds.map(uid => {
        const s = students.find(st => st.id === uid)
        return s ? { id: uid, avatar: s.avatar, avatarColor: s.avatarColor } : { id: uid, avatar: '?', avatarColor: 'bg-gray-400' }
      })
      return {
        ...g,
        members: [...g.members, ...newIds],
        membersData: [...g.membersData, ...newMembersData],
        memberCount: g.memberCount + newIds.length,
      }
    }))
  }

  const updateGroupSession = (groupId, sessionText) => {
    setAllGroups(prev => prev.map(g =>
      g.id === groupId ? { ...g, nextSession: sessionText } : g
    ))
  }

  const leaveGroup = (groupId) => {
    setAllGroups(prev => prev.map(g =>
      g.id === groupId
        ? { ...g, isJoined: false, memberCount: Math.max(0, g.memberCount - 1), members: g.members.filter(id => id !== 'u0'), membersData: g.membersData.filter(m => m.id !== 'u0') }
        : g
    ))
  }

  const sendGroupMessage = (groupId, text) => {
    const newMsg = {
      id: `m${Date.now()}`,
      userId: 'u0',
      userName: userProfile.name,
      avatar: userProfile.avatar,
      avatarColor: userProfile.avatarColor,
      text,
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
      type: 'text',
    }
    setGroupMessages(prev => ({
      ...prev,
      [groupId]: [...(prev[groupId] || []), newMsg],
    }))
    setAllGroups(prev => prev.map(g => g.id === groupId ? { ...g, lastActivity: 'Just now' } : g))
  }

  const uploadGroupFile = (groupId, file) => {
    const newFile = {
      id: `f${Date.now()}`,
      name: file.name,
      size: file.size || '—',
      type: file.type || 'doc',
      uploadedBy: 'You',
      time: 'Just now',
    }
    setGroupWorkspaceFiles(prev => ({
      ...prev,
      [groupId]: [newFile, ...(prev[groupId] || prev.global || [])],
    }))
  }

  const addReminder = (groupId, groupName, sessionText) => {
    const reminder = {
      id: `r${Date.now()}`,
      groupId,
      groupName,
      sessionText,
      createdAt: new Date().toISOString(),
    }
    setReminders(prev => [...prev, reminder])
  }

  const removeReminder = (reminderId) => {
    setReminders(prev => prev.filter(r => r.id !== reminderId))
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
    <NavigationContext.Provider value={{ screen, params, navigate, goBack, reset, schedule, addToSchedule, buddies, addBuddy, removeBuddy, conversations, mySubjects, setMySubjects, addSubject, removeSubject, subjectMaterials, subjectFlashcardDecks, subjectPracticeTests, addMaterial, removeMaterial, addFlashcardDeck, removeFlashcardDeck, updateFlashcardDeck, addPracticeTest, removePracticeTest, studyCoins, addCoins, spendCoins, hasUnlocked, coinsPurchased, summaryOnboarding, setSummaryOnboarding, darkMode, setDarkMode, pushNotifications, setPushNotifications, profileVisibility, setProfileVisibility, language, setLanguage, allGroups, createGroup, joinGroup, leaveGroup, inviteToGroup, updateGroupSession, groupMessages, sendGroupMessage, groupWorkspaceFiles, uploadGroupFile, reminders, addReminder, removeReminder, matchPreferences, setMatchPreferences, resetMatchPreferences, userProfile, updateUserProfile }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNav() {
  return useContext(NavigationContext)
}
