import { Navigate, useLocation } from 'react-router-dom'
import { NavigationProvider, useNav } from './context/NavigationContext'
import Sidebar from './components/Sidebar'

// Auth
import SplashScreen from './screens/auth/SplashScreen'
import LoginScreen from './screens/auth/LoginScreen'
import SignUpScreen from './screens/auth/SignUpScreen'

// Onboarding
import LearningStyleScreen from './screens/onboarding/LearningStyleScreen'
import AvailabilityScreen from './screens/onboarding/AvailabilityScreen'
import SubjectsScreen from './screens/onboarding/SubjectsScreen'
import PrivacySetupScreen from './screens/onboarding/PrivacySetupScreen'
import WelcomeScreen from './screens/onboarding/WelcomeScreen'
import FeatureTour1 from './screens/onboarding/FeatureTour1'
import FeatureTour2 from './screens/onboarding/FeatureTour2'
import FeatureTour3 from './screens/onboarding/FeatureTour3'
import FeatureTour4 from './screens/onboarding/FeatureTour4'
import FeatureTour5 from './screens/onboarding/FeatureTour5'
import MatchPreferencesOnboardingScreen from './screens/onboarding/MatchPreferencesOnboardingScreen'

// Home
import HomeScreen from './screens/home/HomeScreen'
import SessionRoomScreen from './screens/home/SessionRoomScreen'

// Discover
import DiscoverScreen from './screens/discover/DiscoverScreen'
import UserProfilePreviewScreen from './screens/discover/UserProfilePreviewScreen'

// Buddies
import BuddiesScreen from './screens/buddies/BuddiesScreen'

// Coins
import CoinsStoreScreen from './screens/coins/CoinsStoreScreen'

// Groups
import GroupsScreen from './screens/groups/GroupsScreen'
import GroupDetailScreen from './screens/groups/GroupDetailScreen'
import GroupChatScreen from './screens/groups/GroupChatScreen'
import WorkspaceScreen from './screens/groups/WorkspaceScreen'

// Messages
import MessagesScreen from './screens/messages/MessagesScreen'
import DirectMessageScreen from './screens/messages/DirectMessageScreen'

// Profile
import ProfileScreen from './screens/profile/ProfileScreen'
import EditProfileScreen from './screens/profile/EditProfileScreen'
import SettingsScreen from './screens/profile/SettingsScreen'

// Workspace
import MyWorkspaceScreen from './screens/workspace/MyWorkspaceScreen'
import SubjectDetailScreen from './screens/workspace/SubjectDetailScreen'
import FlashcardsScreen from './screens/workspace/FlashcardsScreen'
import PracticeSessionScreen from './screens/workspace/PracticeSessionScreen'
import SummaryScreen from './screens/workspace/SummaryScreen'
import QuickFlashcardsScreen from './screens/workspace/QuickFlashcardsScreen'
import QuickPracticeScreen from './screens/workspace/QuickPracticeScreen'
import QuickSummaryScreen from './screens/workspace/QuickSummaryScreen'
import WeakAreaMatchScreen from './screens/workspace/WeakAreaMatchScreen'

const screenMap = {
  splash: SplashScreen,
  login: LoginScreen,
  signup: SignUpScreen,
  'onboarding-learning-style': LearningStyleScreen,
  'onboarding-availability': AvailabilityScreen,
  'onboarding-subjects': SubjectsScreen,
  'onboarding-privacy': PrivacySetupScreen,
  'onboarding-welcome': WelcomeScreen,
  'feature-tour-1': FeatureTour1,
  'feature-tour-2': FeatureTour2,
  'feature-tour-3': FeatureTour3,
  'feature-tour-4': FeatureTour4,
  'feature-tour-5': FeatureTour5,
  'onboarding-match-prefs': MatchPreferencesOnboardingScreen,
  home: HomeScreen,
  'session-room': SessionRoomScreen,
  discover: DiscoverScreen,
  'user-profile-preview': UserProfilePreviewScreen,
  buddies: BuddiesScreen,
  'coins-store': CoinsStoreScreen,
  groups: GroupsScreen,
  'group-detail': GroupDetailScreen,
  'group-chat': GroupChatScreen,
  workspace: WorkspaceScreen,
  messages: MessagesScreen,
  'direct-message': DirectMessageScreen,
  profile: ProfileScreen,
  'edit-profile': EditProfileScreen,
  settings: SettingsScreen,
  'my-workspace': MyWorkspaceScreen,
  'subject-detail': SubjectDetailScreen,
  flashcards: FlashcardsScreen,
  'practice-session': PracticeSessionScreen,
  summary: SummaryScreen,
  'quick-flashcards': QuickFlashcardsScreen,
  'quick-practice': QuickPracticeScreen,
  'quick-summary': QuickSummaryScreen,
  'weak-area-match': WeakAreaMatchScreen,
}

const authScreens = new Set([
  'login', 'signup',
  'onboarding-learning-style', 'onboarding-availability',
  'onboarding-subjects', 'onboarding-privacy', 'onboarding-match-prefs', 'onboarding-welcome',
  'feature-tour-1', 'feature-tour-2', 'feature-tour-3', 'feature-tour-4', 'feature-tour-5',
])

function AppLayout() {
  const { screen, darkMode } = useNav()
  const location = useLocation()
  const Screen = screenMap[screen]

  if (!Screen) return <Navigate to="/home" replace />

  if (screen === 'splash') {
    return (
      <div key={location.key} className="screen-enter">
        <Screen />
      </div>
    )
  }

  if (authScreens.has(screen)) {
    return (
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-violet-50 via-white to-indigo-50'} flex items-center justify-center p-6`}>
        <div key={location.key} className={`w-full max-w-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-xl overflow-hidden screen-enter`}>
          <Screen />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Sidebar active={screen} />
      <main className={`flex-1 overflow-y-auto min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div key={location.key} className="screen-enter h-full">
          <Screen />
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <AppLayout />
    </NavigationProvider>
  )
}
