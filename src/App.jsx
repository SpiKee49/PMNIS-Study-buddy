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

// Home
import HomeScreen from './screens/home/HomeScreen'

// Discover
import DiscoverScreen from './screens/discover/DiscoverScreen'
import UserProfilePreviewScreen from './screens/discover/UserProfilePreviewScreen'

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

const screenMap = {
  splash: SplashScreen,
  login: LoginScreen,
  signup: SignUpScreen,
  'onboarding-learning-style': LearningStyleScreen,
  'onboarding-availability': AvailabilityScreen,
  'onboarding-subjects': SubjectsScreen,
  'onboarding-privacy': PrivacySetupScreen,
  'onboarding-welcome': WelcomeScreen,
  home: HomeScreen,
  discover: DiscoverScreen,
  'user-profile-preview': UserProfilePreviewScreen,
  groups: GroupsScreen,
  'group-detail': GroupDetailScreen,
  'group-chat': GroupChatScreen,
  workspace: WorkspaceScreen,
  messages: MessagesScreen,
  'direct-message': DirectMessageScreen,
  profile: ProfileScreen,
  'edit-profile': EditProfileScreen,
  settings: SettingsScreen,
}

const authScreens = new Set([
  'login', 'signup',
  'onboarding-learning-style', 'onboarding-availability',
  'onboarding-subjects', 'onboarding-privacy', 'onboarding-welcome',
])

function Router() {
  const { screen } = useNav()
  const Screen = screenMap[screen] || HomeScreen

  if (screen === 'splash') {
    return (
      <div key={screen} className="screen-enter">
        <Screen />
      </div>
    )
  }

  if (authScreens.has(screen)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-center justify-center p-6">
        <div key={screen} className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden screen-enter">
          <Screen />
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active={screen} />
      <main className="flex-1 overflow-y-auto min-h-screen">
        <div key={screen} className="screen-enter h-full">
          <Screen />
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  )
}
