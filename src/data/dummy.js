export const currentUser = {
  id: 'u0',
  name: 'Alex Johnson',
  username: '@alexj',
  avatar: 'AJ',
  avatarColor: 'bg-violet-500',
  university: 'Slovak University of Technology',
  faculty: 'Faculty of Informatics and IT',
  year: '3rd Year',
  bio: 'CS student passionate about algorithms, machine learning and collaborative learning. Love study jams and whiteboard sessions!',
  subjects: ['Algorithms', 'Machine Learning', 'Databases', 'Web Development'],
  learningStyle: 'Visual',
  availability: ['Mon 14:00-18:00', 'Wed 10:00-14:00', 'Fri 16:00-20:00'],
  rating: 4.8,
  sessionsCount: 24,
  buddiesCount: 12,
  studyCoins: 100,
  coinsPurchased: [],
}

export const students = [
  {
    id: 'u1',
    name: 'Maria Kovač',
    username: '@mariak',
    avatar: 'MK',
    avatarColor: 'bg-pink-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Informatics and IT',
    year: '3rd Year',
    bio: 'Passionate about data science and visualization. Always up for a study session!',
    subjects: ['Machine Learning', 'Statistics', 'Python', 'Data Visualization', 'Deep Learning', 'Data Engineering', 'Natural Language Processing'],
    field: 'Tech & CS',
    specializations: ['Activation Functions', 'Loss Functions', 'Overfitting & Regularization'],
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Discussion',
    availability: ['Mon 14:00-18:00', 'Thu 10:00-14:00'],
    rating: 4.9,
    sessionsCount: 31,
    buddiesCount: 18,
    matchScore: 95,
    matchReason: 'You both study Machine Learning at STU and share a Visual learning style. Her availability on Monday overlaps perfectly with yours, and she has expertise in topics you\'re currently learning.',
    online: true,
  },
  {
    id: 'u2',
    name: 'Tomáš Novák',
    username: '@tomasn',
    avatar: 'TN',
    avatarColor: 'bg-blue-500',
    university: 'Comenius University',
    faculty: 'Faculty of Mathematics, Physics and Informatics',
    year: '2nd Year',
    bio: 'Math nerd who loves to explain complex concepts simply. Tutoring experience in Calculus and Linear Algebra.',
    subjects: ['Calculus', 'Linear Algebra', 'Discrete Math', 'Algorithms', 'Numerical Analysis', 'Probability Theory'],
    field: 'Tech & CS',
    specializations: ['Gradient Descent & Optimization', 'Neural Network Fundamentals'],
    schoolType: 'University',
    learningStyle: 'Reading/Writing',
    studyVibe: 'Structured',
    availability: ['Tue 13:00-17:00', 'Wed 10:00-14:00', 'Sat 10:00-15:00'],
    rating: 4.7,
    sessionsCount: 19,
    buddiesCount: 9,
    matchScore: 88,
    matchReason: 'Tomáš covers Calculus and Algorithms you study too, and Wednesday afternoons work for both of you. His structured style complements your visual approach well.',
    online: true,
  },
  {
    id: 'u3',
    name: 'Sofia Horváth',
    username: '@sofiah',
    avatar: 'SH',
    avatarColor: 'bg-emerald-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Informatics and IT',
    year: '4th Year',
    bio: 'Web dev enthusiast and open-source contributor. Happy to help with frontend and backend projects.',
    subjects: ['Web Development', 'React', 'Node.js', 'Databases', 'REST APIs', 'DevOps', 'TypeScript'],
    field: 'Tech & CS',
    schoolType: 'University',
    learningStyle: 'Kinesthetic',
    studyVibe: 'Casual',
    availability: ['Mon 18:00-21:00', 'Wed 18:00-21:00', 'Fri 14:00-18:00'],
    rating: 4.6,
    sessionsCount: 42,
    buddiesCount: 26,
    matchScore: 82,
    matchReason: 'Sofia studies Web Development and Databases — two of your subjects. Same university (STU) and Monday evenings align. Her hands-on style will keep sessions practical.',
    online: false,
  },
  {
    id: 'u4',
    name: 'Lukáš Kováč',
    username: '@lukask',
    avatar: 'LK',
    avatarColor: 'bg-amber-500',
    university: 'Technical University of Košice',
    faculty: 'Faculty of Electrical Engineering and Informatics',
    year: '3rd Year',
    bio: 'Embedded systems and IoT enthusiast. Looking for study buddies for networking and operating systems.',
    subjects: ['Operating Systems', 'Networking', 'C/C++', 'Embedded Systems', 'Computer Architecture', 'Real-Time Systems', 'IoT'],
    field: 'Tech & CS',
    schoolType: 'University',
    learningStyle: 'Auditory',
    studyVibe: 'Discussion',
    availability: ['Tue 16:00-20:00', 'Thu 16:00-20:00'],
    rating: 4.5,
    sessionsCount: 15,
    buddiesCount: 7,
    matchScore: 74,
    matchReason: 'Lukáš shares your interest in OS and Networking, though you\'re at different universities. Afternoon availability on Tuesdays and Thursdays could work for joint sessions.',
    online: false,
  },
  {
    id: 'u5',
    name: 'Jana Procházka',
    username: '@janap',
    avatar: 'JP',
    avatarColor: 'bg-rose-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Informatics and IT',
    year: '1st Year',
    bio: 'Fresh student eager to learn. Looking for a study group for introductory CS courses.',
    subjects: ['Introduction to CS', 'Python', 'Mathematics', 'Logic', 'Introductory Programming', 'Data Structures Basics'],
    field: 'Tech & CS',
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Casual',
    availability: ['Mon 10:00-14:00', 'Wed 14:00-18:00', 'Fri 10:00-14:00'],
    rating: 4.3,
    sessionsCount: 6,
    buddiesCount: 4,
    matchScore: 70,
    matchReason: 'Jana is at the same faculty as you (STU Informatics) and shares your Visual learning style. She\'s earlier in the programme — great match if you enjoy mentoring.',
    online: true,
  },
  {
    id: 'u6',
    name: 'Anna Schmidt',
    username: '@annas',
    avatar: 'AS',
    avatarColor: 'bg-indigo-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Informatics and IT',
    year: '2nd Year',
    bio: 'Data science enthusiast with a passion for machine learning algorithms. Love explaining complex concepts with visual diagrams!',
    subjects: ['Machine Learning', 'Statistics', 'Python', 'Data Visualization', 'Deep Learning', 'Neural Networks', 'Feature Engineering'],
    field: 'Tech & CS',
    specializations: ['Convolutional Neural Networks', 'Activation Functions', 'Loss Functions'],
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Discussion',
    availability: ['Mon 13:00-17:00', 'Tue 14:00-18:00', 'Thu 10:00-14:00'],
    rating: 4.9,
    sessionsCount: 28,
    buddiesCount: 15,
    matchScore: 98,
    matchReason: 'Near-perfect match: same university, same faculty, same Visual learning style, and overlapping ML & Python subjects. Monday and Thursday availability lines up with yours exactly.',
    online: true,
  },
  {
    id: 'u7',
    name: 'Peter Wilson',
    username: '@peterw',
    avatar: 'PW',
    avatarColor: 'bg-cyan-500',
    university: 'Comenius University',
    faculty: 'Faculty of Mathematics, Physics and Informatics',
    year: '4th Year',
    bio: 'Senior CS student specializing in algorithms and data structures. Great at breaking down complex problems into visual steps.',
    subjects: ['Algorithms', 'Data Structures', 'Discrete Math', 'Python', 'Graph Theory', 'Dynamic Programming', 'Competitive Programming'],
    field: 'Tech & CS',
    specializations: ['Gradient Descent & Optimization', 'Overfitting & Regularization', 'Neural Network Fundamentals'],
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Discussion',
    availability: ['Wed 09:00-13:00', 'Fri 14:00-18:00', 'Sat 10:00-15:00'],
    rating: 4.7,
    sessionsCount: 45,
    buddiesCount: 22,
    matchScore: 95,
    matchReason: 'Peter studies Algorithms and Data Structures at the same level as you with a Visual, Discussion-based style. Friday afternoons overlap and he has deep competitive programming experience.',
    online: false,
  },
  {
    id: 'u8',
    name: 'Emma Rodriguez',
    username: '@emmar',
    avatar: 'ER',
    avatarColor: 'bg-rose-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Informatics and IT',
    year: '3rd Year',
    bio: 'Full-stack developer who loves teaching web development. Visual learner who creates amazing diagrams and flowcharts.',
    subjects: ['Web Development', 'JavaScript', 'React', 'Node.js', 'CSS/Tailwind', 'GraphQL', 'Testing & QA'],
    field: 'Tech & CS',
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Casual',
    availability: ['Tue 16:00-20:00', 'Wed 16:00-20:00', 'Thu 18:00-21:00'],
    rating: 4.8,
    sessionsCount: 32,
    buddiesCount: 18,
    matchScore: 92,
    matchReason: 'Emma shares your Visual style, same faculty and Web Development subject. Casual vibe and evening availability make her an ideal coding session partner.',
    online: true,
  },
  {
    id: 'u9',
    name: 'David Kim',
    username: '@davidk',
    avatar: 'DK',
    avatarColor: 'bg-emerald-500',
    university: 'Technical University of Košice',
    faculty: 'Faculty of Electrical Engineering and Informatics',
    year: '2nd Year',
    bio: 'Database expert who creates visual ER diagrams and schema designs. Perfect for collaborative database projects.',
    subjects: ['Databases', 'SQL', 'Data Modeling', 'Web Development', 'PostgreSQL', 'MongoDB', 'Query Optimization'],
    field: 'Tech & CS',
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Structured',
    availability: ['Mon 10:00-14:00', 'Wed 13:00-17:00', 'Fri 09:00-13:00'],
    rating: 4.6,
    sessionsCount: 25,
    buddiesCount: 12,
    matchScore: 88,
    matchReason: 'David specialises in Databases — a subject you study — with a Structured Visual style. Monday and Wednesday availability matches yours and he\'s great at ER diagram walkthroughs.',
    online: false,
  },
  {
    id: 'u10',
    name: 'Lucia Benešová',
    username: '@luciabn',
    avatar: 'LB',
    avatarColor: 'bg-rose-400',
    university: 'Comenius University',
    faculty: 'Faculty of Medicine',
    year: '3rd Year',
    bio: 'Med student obsessed with anatomy and pharmacology. Love study groups for breaking down complex concepts together.',
    subjects: ['Anatomy', 'Physiology', 'Pharmacology', 'Biochemistry', 'Pathology', 'Microbiology', 'Clinical Medicine'],
    field: 'Medicine & Health',
    schoolType: 'University',
    learningStyle: 'Visual',
    studyVibe: 'Structured',
    availability: ['Mon 08:00-12:00', 'Thu 14:00-18:00', 'Sat 09:00-13:00'],
    rating: 4.8,
    sessionsCount: 22,
    buddiesCount: 11,
    matchScore: 76,
    matchReason: 'Lucia\'s Visual style and structured approach match yours. While fields differ, she shares Statistics overlap and Monday availability aligns for cross-discipline study sessions.',
    online: true,
  },
  {
    id: 'u11',
    name: 'Marek Horák',
    username: '@marekh',
    avatar: 'MH',
    avatarColor: 'bg-slate-500',
    university: 'Comenius University',
    faculty: 'Faculty of Law',
    year: '2nd Year',
    bio: 'Law student focused on commercial and EU law. Great at discussing case studies and legal reasoning out loud.',
    subjects: ['Civil Law', 'EU Law', 'Constitutional Law', 'Legal Theory', 'Criminal Law', 'International Law', 'Administrative Law', 'Jurisprudence'],
    field: 'Law & Politics',
    schoolType: 'University',
    learningStyle: 'Auditory',
    studyVibe: 'Discussion',
    availability: ['Tue 15:00-19:00', 'Wed 10:00-14:00', 'Fri 12:00-16:00'],
    rating: 4.5,
    sessionsCount: 14,
    buddiesCount: 8,
    matchScore: 71,
    matchReason: 'Different field but Marek\'s discussion-heavy style could complement yours for structured debate practice. Wednesday availability overlaps and he\'s highly active.',
    online: false,
  },
  {
    id: 'u12',
    name: 'Zuzana Blaho',
    username: '@zuzanab',
    avatar: 'ZB',
    avatarColor: 'bg-amber-400',
    university: 'University of Economics Bratislava',
    faculty: 'Faculty of Commerce',
    year: '4th Year',
    bio: 'Econ student specialising in marketing and microeconomics. Love using real-world case studies to make concepts click.',
    subjects: ['Microeconomics', 'Marketing', 'Statistics', 'Finance', 'Macroeconomics', 'Accounting', 'Business Strategy', 'Investment Analysis'],
    field: 'Economics & Business',
    schoolType: 'University',
    learningStyle: 'Reading/Writing',
    studyVibe: 'Structured',
    availability: ['Mon 13:00-17:00', 'Thu 09:00-13:00', 'Sat 10:00-14:00'],
    rating: 4.7,
    sessionsCount: 18,
    buddiesCount: 13,
    matchScore: 79,
    matchReason: 'Zuzana shares Statistics as a subject and her structured reading style is productive for note-based review. Monday afternoons work for both of you.',
    online: true,
  },
  {
    id: 'u13',
    name: 'Ondrej Kráľ',
    username: '@ondrejk',
    avatar: 'OK',
    avatarColor: 'bg-orange-400',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Architecture',
    year: '3rd Year',
    bio: 'Architecture student passionate about sustainable design and urban planning. Prefer hands-on collaborative workshops.',
    subjects: ['Design Studio', 'Architectural History', 'Urban Planning', 'Structural Engineering', 'Building Physics', 'Interior Design', 'Sustainable Architecture', '3D Modeling'],
    field: 'Arts & Design',
    schoolType: 'University',
    learningStyle: 'Kinesthetic',
    studyVibe: 'Casual',
    availability: ['Tue 10:00-14:00', 'Thu 16:00-20:00', 'Sun 12:00-16:00'],
    rating: 4.4,
    sessionsCount: 10,
    buddiesCount: 6,
    matchScore: 68,
    matchReason: 'Ondrej\'s hands-on casual style and creative thinking can bring a fresh perspective to your problem-solving. Thursday evenings are a shared free window.',
    online: false,
  },
  {
    id: 'u14',
    name: 'Barbora Vašková',
    username: '@barborav',
    avatar: 'BV',
    avatarColor: 'bg-purple-400',
    university: 'Comenius University',
    faculty: 'Faculty of Social and Behavioral Sciences',
    year: '2nd Year',
    bio: 'Psychology student fascinated by cognitive neuroscience and research methods. Looking for peers to discuss theories and share study notes.',
    subjects: ['Cognitive Psychology', 'Research Methods', 'Neuroscience', 'Social Psychology', 'Developmental Psychology', 'Statistics for Psychology', 'Clinical Psychology'],
    field: 'Science',
    schoolType: 'University',
    learningStyle: 'Reading/Writing',
    studyVibe: 'Discussion',
    availability: ['Mon 14:00-18:00', 'Wed 16:00-20:00', 'Fri 10:00-14:00'],
    rating: 4.6,
    sessionsCount: 16,
    buddiesCount: 10,
    matchScore: 73,
    matchReason: 'Barbora shares Statistics and Monday availability with you. Her discussion vibe and research mindset pair well for analytical thinking practice.',
    online: true,
  },
  {
    id: 'u15',
    name: 'Tomáš Říha',
    username: '@tomasri',
    avatar: 'TR',
    avatarColor: 'bg-teal-500',
    university: 'Slovak University of Technology',
    faculty: 'Faculty of Electrical Engineering and Information Technology',
    year: '1st Year',
    bio: 'Physics student who loves experimental setups and math-heavy explanations. Happy to help make sense of quantum mechanics.',
    subjects: ['Classical Mechanics', 'Electromagnetism', 'Quantum Physics', 'Calculus', 'Thermodynamics', 'Optics', 'Mathematical Physics', 'Special Relativity'],
    field: 'Science',
    schoolType: 'University',
    learningStyle: 'Reading/Writing',
    studyVibe: 'Structured',
    availability: ['Tue 09:00-13:00', 'Thu 09:00-13:00', 'Sat 13:00-17:00'],
    rating: 4.5,
    sessionsCount: 8,
    buddiesCount: 5,
    matchScore: 65,
    matchReason: 'Tomáš covers Calculus and mathematical foundations relevant to your ML studies. Structured reading style is good for theory-heavy sessions.',
    online: false,
  },
  {
    id: 'u16',
    name: 'Kristína Molnár',
    username: '@kristinam',
    avatar: 'KM',
    avatarColor: 'bg-lime-500',
    university: 'Comenius University',
    faculty: 'Faculty of Natural Sciences',
    year: '3rd Year',
    bio: 'Chemistry student with a love for organic reactions and lab work. Always happy to co-review problem sets over coffee.',
    subjects: ['Organic Chemistry', 'Analytical Chemistry', 'Biochemistry', 'Laboratory Techniques', 'Physical Chemistry', 'Inorganic Chemistry', 'Spectroscopy'],
    field: 'Science',
    schoolType: 'University',
    learningStyle: 'Kinesthetic',
    studyVibe: 'Casual',
    availability: ['Mon 15:00-19:00', 'Wed 09:00-13:00', 'Fri 15:00-18:00'],
    rating: 4.7,
    sessionsCount: 20,
    buddiesCount: 9,
    matchScore: 72,
    matchReason: 'Kristína\'s hands-on kinesthetic style and chemistry background bring a different but complementary angle to scientific problem-solving. Shared Wednesday mornings.',
    online: true,
  },
  {
    id: 'u17',
    name: 'Nina Procházková',
    username: '@ninap',
    avatar: 'NP',
    avatarColor: 'bg-pink-400',
    university: 'Comenius University',
    faculty: 'Faculty of Arts',
    year: '4th Year',
    bio: 'Linguistics and Spanish major. Love language exchange sessions and discussing literature. Always up for a laid-back study chat.',
    subjects: ['Spanish', 'Linguistics', 'Translation Studies', 'English Literature', 'Phonetics', 'Morphology & Syntax', 'History of Literature', 'Academic Writing'],
    field: 'Humanities',
    schoolType: 'University',
    learningStyle: 'Auditory',
    studyVibe: 'Casual',
    availability: ['Tue 11:00-15:00', 'Thu 13:00-17:00', 'Sat 10:00-14:00'],
    rating: 4.9,
    sessionsCount: 35,
    buddiesCount: 24,
    matchScore: 81,
    matchReason: 'Nina\'s casual vibe and high session count make her a great social study partner. Overlapping Thursday afternoon availability and she can help with academic writing.',
    online: true,
  },
  {
    id: 'u18',
    name: 'Jakub Sedlák',
    username: '@jakubs',
    avatar: 'JS',
    avatarColor: 'bg-sky-500',
    university: 'Gymnázium Grösslingová',
    faculty: 'General Education',
    year: '3rd Year',
    bio: 'High school student prepping for university entrance exams. Strong in maths and physics, looking for people to grind through practice problems.',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English', 'Slovak Literature', 'Programming Basics'],
    field: 'Science',
    schoolType: 'High School',
    learningStyle: 'Reading/Writing',
    studyVibe: 'Structured',
    availability: ['Mon 16:00-19:00', 'Wed 15:00-18:00', 'Sat 10:00-14:00'],
    rating: 4.4,
    sessionsCount: 9,
    buddiesCount: 5,
    matchScore: 62,
    matchReason: 'Jakub is prepping for university entrance in Maths and Physics — overlapping foundation topics. Structured study style and Wednesday afternoons match your schedule.',
    online: true,
  },
  {
    id: 'u19',
    name: 'Simona Kováčová',
    username: '@simonak',
    avatar: 'SK',
    avatarColor: 'bg-fuchsia-400',
    university: 'Stredná odborná škola ekonomická',
    faculty: 'Business & Administration',
    year: '4th Year',
    bio: 'Final-year business school student with a focus on accounting and entrepreneurship. Happy to swap notes and quiz each other before exams.',
    subjects: ['Accounting', 'Business Administration', 'Economics Basics', 'Marketing Fundamentals', 'Law Basics', 'English for Business'],
    field: 'Economics & Business',
    schoolType: 'High School',
    learningStyle: 'Visual',
    studyVibe: 'Casual',
    availability: ['Tue 15:30-18:30', 'Thu 15:30-18:30', 'Sun 14:00-17:00'],
    rating: 4.3,
    sessionsCount: 7,
    buddiesCount: 4,
    matchScore: 58,
    matchReason: 'Simona\'s visual style and economics focus offer a cross-disciplinary perspective. Casual sessions for mutual quizzing before exams could be mutually beneficial.',
    online: false,
  },
  {
    id: 'u20',
    name: 'Radek Blažek',
    username: '@radekb',
    avatar: 'RB',
    avatarColor: 'bg-green-500',
    university: 'Stredná zdravotnícka škola Bratislava',
    faculty: 'Nursing',
    year: '2nd Year',
    bio: 'Nursing school student passionate about healthcare. Studying anatomy and patient care — looking for study partners for theory exams.',
    subjects: ['Anatomy & Physiology', 'Nursing Theory', 'First Aid', 'Microbiology Basics', 'Medical Ethics', 'Psychology of Care'],
    field: 'Medicine & Health',
    schoolType: 'High School',
    learningStyle: 'Kinesthetic',
    studyVibe: 'Discussion',
    availability: ['Mon 14:00-17:00', 'Fri 14:00-17:00', 'Sat 09:00-12:00'],
    rating: 4.2,
    sessionsCount: 5,
    buddiesCount: 3,
    matchScore: 55,
    matchReason: 'Radek\'s hands-on kinesthetic style and healthcare focus is different from yours, but Monday availability overlaps and discussion-based sessions could broaden your perspective.',
    online: true,
  },
]

export const groups = [
  {
    id: 'g1',
    name: 'ML Study Squad',
    subject: 'Machine Learning',
    description: 'Weekly sessions on ML theory and practical implementations. Currently going through Andrew Ng\'s course together.',
    members: ['u0', 'u1', 'u2'],
    membersData: [
      { id: 'u0', avatar: 'AJ', avatarColor: 'bg-violet-500' },
      { id: 'u1', avatar: 'MK', avatarColor: 'bg-pink-500' },
      { id: 'u2', avatar: 'TN', avatarColor: 'bg-blue-500' },
    ],
    memberCount: 3,
    maxMembers: 5,
    nextSession: 'Today, 16:00',
    lastActivity: '2 min ago',
    unreadCount: 3,
    color: 'bg-violet-100',
    accent: 'bg-violet-500',
    textAccent: 'text-violet-600',
    tags: ['Weekly', 'Active', 'Beginner-friendly'],
    isJoined: true,
  },
  {
    id: 'g2',
    name: 'Algorithms Grind',
    subject: 'Algorithms & Data Structures',
    description: 'LeetCode grind and exam prep. We solve 3 problems per session and explain solutions to each other.',
    members: ['u0', 'u3'],
    membersData: [
      { id: 'u0', avatar: 'AJ', avatarColor: 'bg-violet-500' },
      { id: 'u3', avatar: 'LK', avatarColor: 'bg-amber-500' },
    ],
    memberCount: 2,
    maxMembers: 4,
    nextSession: 'Tomorrow, 14:00',
    lastActivity: '1 hr ago',
    unreadCount: 0,
    color: 'bg-amber-100',
    accent: 'bg-amber-500',
    textAccent: 'text-amber-600',
    tags: ['Bi-weekly', 'Advanced'],
    isJoined: true,
  },
  {
    id: 'g3',
    name: 'Web Dev Workshop',
    subject: 'Web Development',
    description: 'Build real projects together! Currently building a full-stack app with React and Node.js.',
    members: ['u3'],
    membersData: [
      { id: 'u3', avatar: 'SH', avatarColor: 'bg-emerald-500' },
    ],
    memberCount: 4,
    maxMembers: 6,
    nextSession: 'Fri, 18:00',
    lastActivity: '3 hr ago',
    unreadCount: 0,
    color: 'bg-emerald-100',
    accent: 'bg-emerald-500',
    textAccent: 'text-emerald-600',
    tags: ['Weekly', 'Project-based'],
    isJoined: false,
  },
  {
    id: 'g4',
    name: 'Database Design Club',
    subject: 'Databases',
    description: 'From ER diagrams to query optimization. All levels welcome!',
    members: [],
    membersData: [],
    memberCount: 5,
    maxMembers: 8,
    nextSession: 'Wed, 12:00',
    lastActivity: '1 day ago',
    unreadCount: 0,
    color: 'bg-blue-100',
    accent: 'bg-blue-500',
    textAccent: 'text-blue-600',
    tags: ['Weekly', 'Mixed levels'],
    isJoined: false,
  },
]

export const groupMessages = {
  g1: [
    { id: 'm1', userId: 'u1', userName: 'Maria', avatar: 'MK', avatarColor: 'bg-pink-500', text: 'Hey everyone! Ready for today\'s session? I prepared some notes on gradient descent 📝', time: '15:30', type: 'text' },
    { id: 'm2', userId: 'u2', userName: 'Tomáš', avatar: 'TN', avatarColor: 'bg-blue-500', text: 'Yes! I had some questions about backpropagation actually. Can we cover that?', time: '15:32', type: 'text' },
    { id: 'm3', userId: 'u0', userName: 'Alex', avatar: 'AJ', avatarColor: 'bg-violet-500', text: 'Absolutely! I also found this great visualization tool for neural networks', time: '15:35', type: 'text' },
    { id: 'm4', userId: 'u1', userName: 'Maria', avatar: 'MK', avatarColor: 'bg-pink-500', text: 'Oh nice, share the link!', time: '15:36', type: 'text' },
    { id: 'm5', userId: 'u0', userName: 'Alex', avatar: 'AJ', avatarColor: 'bg-violet-500', text: 'nn-playground.tensorflow.org - it\'s interactive and super helpful for understanding how layers work', time: '15:37', type: 'text' },
    { id: 'm6', userId: 'u2', userName: 'Tomáš', avatar: 'TN', avatarColor: 'bg-blue-500', text: 'Amazing! Starting the session in 20 mins, see you all there 🚀', time: '15:40', type: 'text' },
  ],
  g2: [
    { id: 'm1', userId: 'u3', userName: 'Lukáš', avatar: 'LK', avatarColor: 'bg-amber-500', text: 'Solved the binary tree problem from yesterday. Took me 2 hours lol', time: '10:15', type: 'text' },
    { id: 'm2', userId: 'u0', userName: 'Alex', avatar: 'AJ', avatarColor: 'bg-violet-500', text: 'Same! The key insight is to use DFS with memoization', time: '10:18', type: 'text' },
    { id: 'm3', userId: 'u3', userName: 'Lukáš', avatar: 'LK', avatarColor: 'bg-amber-500', text: 'Next session tomorrow 14:00 - covering graph algorithms', time: '11:00', type: 'text' },
  ],
}

export const conversations = [
  {
    id: 'c1',
    userId: 'u1',
    name: 'Maria Kovač',
    avatar: 'MK',
    avatarColor: 'bg-pink-500',
    lastMessage: 'Are you joining the ML session today?',
    lastMessageTime: '2 min ago',
    unread: 2,
    online: true,
  },
  {
    id: 'c2',
    userId: 'u2',
    name: 'Tomáš Novák',
    avatar: 'TN',
    avatarColor: 'bg-blue-500',
    lastMessage: 'I shared the calculus notes in the workspace',
    lastMessageTime: '1 hr ago',
    unread: 0,
    online: true,
  },
  {
    id: 'c3',
    userId: 'u3',
    name: 'Sofia Horváth',
    avatar: 'SH',
    avatarColor: 'bg-emerald-500',
    lastMessage: 'Great session yesterday! Same time next week?',
    lastMessageTime: '3 hr ago',
    unread: 0,
    online: false,
  },
  {
    id: 'c4',
    userId: 'u4',
    name: 'Lukáš Kováč',
    avatar: 'LK',
    avatarColor: 'bg-amber-500',
    lastMessage: 'Found a bug in the sorting algorithm, check it out',
    lastMessageTime: 'Yesterday',
    unread: 1,
    online: false,
  },
]

export const directMessages = {
  c1: [
    { id: 'm1', fromMe: false, text: 'Hey Alex! Quick question about today\'s ML session', time: '14:20' },
    { id: 'm2', fromMe: true, text: 'Hey Maria! Of course, what\'s up?', time: '14:21' },
    { id: 'm3', fromMe: false, text: 'Are you joining the ML session today? We\'re covering neural network architectures', time: '14:22' },
    { id: 'm4', fromMe: true, text: 'Yes definitely! I was just reviewing my notes on CNNs', time: '14:23' },
    { id: 'm5', fromMe: false, text: 'Perfect! I\'ll prepare the slides on ResNet and VGG. Should be a great session 🎉', time: '14:24' },
    { id: 'm6', fromMe: true, text: 'Awesome! See you at 16:00 👍', time: '14:25' },
    { id: 'm7', fromMe: false, text: 'Are you joining the ML session today?', time: '15:58' },
  ],
  c2: [
    { id: 'm1', fromMe: false, text: 'Hi Alex! How did the algorithms exam go?', time: '09:00' },
    { id: 'm2', fromMe: true, text: 'It went well! The dynamic programming section was tricky though', time: '09:05' },
    { id: 'm3', fromMe: false, text: 'I shared the calculus notes in the workspace', time: '10:30' },
  ],
  c3: [
    { id: 'm1', fromMe: false, text: 'Hey Alex! Great session yesterday! Same time next week?', time: '18:00' },
    { id: 'm2', fromMe: true, text: 'Definitely! I really enjoyed the React hooks discussion', time: '18:05' },
    { id: 'm3', fromMe: false, text: 'Me too! I\'ll prepare some advanced patterns for next time', time: '18:10' },
  ],
  c4: [
    { id: 'm1', fromMe: false, text: 'Found a bug in the sorting algorithm, check it out', time: '16:00' },
    { id: 'm2', fromMe: true, text: 'Oh nice catch! That would cause an infinite loop', time: '16:15' },
    { id: 'm3', fromMe: false, text: 'Yeah, the edge case with empty arrays wasn\'t handled', time: '16:20' },
  ],
  c6: [
    { id: 'm1', fromMe: true, text: 'Hi Anna! 👋 Do you have time to study right now? I really need someone to work through Machine Learning concepts with me', time: '14:05' },
    { id: 'm2', fromMe: false, text: 'Yeah, sure! I\'d love to! What topics do you want to cover?', time: '14:06' },
    { id: 'm3', fromMe: true, text: 'Great! I\'m struggling with neural network fundamentals, especially backpropagation', time: '14:07' },
    { id: 'm4', fromMe: false, text: 'Perfect, that\'s actually my specialty! I have some amazing visual diagrams that really help. Let me share them!', time: '14:08' },
  ],
}

export const schedule = [
  { id: 's1', title: 'ML Study Squad', subtitle: 'Neural Networks session', time: '16:00', duration: '2h', color: 'bg-violet-500', day: 'Today' },
  { id: 's2', title: 'Algorithms Grind', subtitle: 'Graph algorithms', time: '14:00', duration: '1.5h', color: 'bg-amber-500', day: 'Tomorrow' },
  { id: 's3', title: 'Web Dev Workshop', subtitle: 'React hooks deep dive', time: '18:00', duration: '2h', color: 'bg-emerald-500', day: 'Friday' },
]

export const aiSuggestions = [
  { id: 'rec1', type: 'buddy', text: 'Anna Schmidt is a perfect Visual learning match for your Machine Learning studies', action: 'View Profile', targetId: 'u6' },
  { id: 'rec2', type: 'buddy', text: 'Peter Schmidt specializes in Algorithms with a Visual teaching approach', action: 'View Profile', targetId: 'u7' },
  { id: 'rec3', type: 'buddy', text: 'Emma Wagner creates amazing visual diagrams for Web Development concepts', action: 'View Profile', targetId: 'u8' },
  { id: 'rec4', type: 'buddy', text: 'David Becker excels at visual database design and ER diagrams', action: 'View Profile', targetId: 'u9' },
  { id: 'rec5', type: 'buddy', text: 'Lisa Müller has excellent Python programming skills and loves pair programming', action: 'View Profile', targetId: 'u10' },
  { id: 'rec6', type: 'buddy', text: 'Mark Weber specializes in Statistics and data analysis with practical examples', action: 'View Profile', targetId: 'u11' },
  { id: 'rec7', type: 'buddy', text: 'Sophie Fischer creates interactive JavaScript demos for complex concepts', action: 'View Profile', targetId: 'u12' },
  { id: 'rec8', type: 'buddy', text: 'Felix Bauer excels at Operating Systems and system-level programming', action: 'View Profile', targetId: 'u13' },
]

export const notifications = [
  { id: 'n1', type: 'session', text: 'ML Study Squad session starts in 30 minutes', time: '15:30', read: false, icon: '📚' },
  { id: 'n2', type: 'buddy', text: 'Maria Kovač sent you a buddy request', time: '14:00', read: false, icon: '👋' },
  { id: 'n3', type: 'message', text: 'New message in Algorithms Grind', time: '11:00', read: true, icon: '💬' },
  { id: 'n4', type: 'achievement', text: 'You completed 25 study sessions! 🎉', time: 'Yesterday', read: true, icon: '🏆' },
  { id: 'n5', type: 'session', text: 'Database Design workshop tomorrow at 10:00', time: '2 hours ago', read: false, icon: '🗄️' },
  { id: 'n6', type: 'buddy', text: 'Tomáš Novák accepted your buddy request', time: '4 hours ago', read: true, icon: '🤝' },
  { id: 'n7', type: 'message', text: '3 new messages in Web Development Study Group', time: '6 hours ago', read: false, icon: '💬' },
  { id: 'n8', type: 'achievement', text: 'Earned 50 Study Coins from feedback! ⭐', time: '1 day ago', read: true, icon: '🪙' },
]

export const workspaceFiles = [
  { id: 'f1', name: 'ML_Notes_Week5.pdf', type: 'pdf', size: '2.4 MB', uploadedBy: 'Maria', time: '2 days ago' },
  { id: 'f2', name: 'gradient_descent.py', type: 'code', size: '4.2 KB', uploadedBy: 'Alex', time: '3 days ago' },
  { id: 'f3', name: 'Neural_Networks_Slides.pptx', type: 'slides', size: '8.1 MB', uploadedBy: 'Tomáš', time: '5 days ago' },
  { id: 'f4', name: 'Study_Plan_March.docx', type: 'doc', size: '1.1 MB', uploadedBy: 'Alex', time: '1 week ago' },
]

export const subjects = [
  'Algorithms & Data Structures', 'Machine Learning', 'Databases',
  'Web Development', 'Operating Systems', 'Computer Networks',
  'Mathematics', 'Statistics', 'Linear Algebra', 'Calculus',
  'Python', 'Java', 'C/C++', 'JavaScript',
  'Computer Vision', 'Natural Language Processing',
  'Software Engineering', 'Cybersecurity',
  'Embedded Systems', 'Cloud Computing',
]

export const learningStyles = [
  { id: 'visual', title: 'Visual', emoji: '👁️', description: 'I learn best through diagrams, charts and visual aids' },
  { id: 'auditory', title: 'Auditory', emoji: '🎧', description: 'I learn best through listening and discussion' },
  { id: 'reading', title: 'Reading/Writing', emoji: '📖', description: 'I learn best through reading and taking notes' },
  { id: 'kinesthetic', title: 'Hands-on', emoji: '🛠️', description: 'I learn best by doing and practicing' },
]

export const mySubjects = [
  {
    id: 'sub1',
    name: 'Machine Learning',
    abbrev: 'ML',
    color: 'bg-violet-500',
    materialsCount: 4,
    flashcardsCount: 32,
    testsCount: 4,
    mastery: 72,
  },
  {
    id: 'sub2',
    name: 'Algorithms & Data Structures',
    abbrev: 'AL',
    color: 'bg-amber-500',
    materialsCount: 5,
    flashcardsCount: 0,
    testsCount: 0,
    mastery: 0,
  },
  {
    id: 'sub3',
    name: 'Databases',
    abbrev: 'DB',
    color: 'bg-blue-500',
    materialsCount: 0,
    flashcardsCount: 0,
    testsCount: 0,
    mastery: 0,
  },
]

export const subjectMaterials = {
  sub1: [
    { id: 'mat1', name: 'Week 5 Notes — Neural Networks', type: 'pdf', size: '2.4 MB', date: '2 days ago' },
    { id: 'mat2', name: 'Gradient Descent Explained', type: 'note', size: null, date: '3 days ago' },
    { id: 'mat3', name: 'CNN Architecture Summary', type: 'note', size: null, date: '5 days ago' },
    { id: 'mat4', name: 'Andrew Ng Lecture Notes Ch.4-6', type: 'pdf', size: '5.1 MB', date: '1 week ago' },
  ],
  sub2: [
    { id: 'mat5', name: 'Sorting Algorithms — Lecture Notes', type: 'pdf', size: '1.8 MB', date: '1 day ago' },
    { id: 'mat6', name: 'Graph Theory Cheatsheet', type: 'pdf', size: '0.9 MB', date: '3 days ago' },
    { id: 'mat7', name: 'Dynamic Programming Patterns', type: 'note', size: null, date: '5 days ago' },
    { id: 'mat8', name: 'Big-O Complexity Reference', type: 'note', size: null, date: '1 week ago' },
    { id: 'mat9', name: 'Tree & Heap Data Structures', type: 'pdf', size: '2.2 MB', date: '1 week ago' },
  ],
}

export const flashcardDecks = {
  sub1: [
    {
      id: 'fd1',
      name: 'Neural Networks',
      cardCount: 12,
      cards: [
        { id: 'fd1_c1', question: 'What is an artificial neural network?', answer: 'A computational model inspired by the brain, consisting of layers of interconnected nodes (neurons) that learn to map inputs to outputs through training.' },
        { id: 'fd1_c2', question: 'What is a weight in a neural network?', answer: 'A learnable parameter that scales the signal passing between two neurons. During training, weights are adjusted to minimise the loss function.' },
        { id: 'fd1_c3', question: 'What is a bias term and why is it needed?', answer: 'A learnable parameter added to the weighted sum before the activation function: output = f(w·x + b). It allows the neuron to activate even when all inputs are zero, shifting the decision boundary.' },
        { id: 'fd1_c4', question: 'What does "forward propagation" mean?', answer: 'The process of passing input data through each layer of the network, computing activations, until reaching the output. No weights are updated in this pass.' },
        { id: 'fd1_c5', question: 'What is an activation function and why is it necessary?', answer: 'A non-linear function applied to a neuron\'s output. Without it, stacking layers would be equivalent to a single linear transformation. Common examples: ReLU, Sigmoid, Tanh.' },
        { id: 'fd1_c6', question: 'What is a hidden layer?', answer: 'Any layer in a neural network that sits between the input layer and the output layer. Hidden layers learn intermediate representations of the data.' },
        { id: 'fd1_c7', question: 'What is an epoch in model training?', answer: 'One complete pass over the entire training dataset. Training typically runs for many epochs, with weights updated after each mini-batch.' },
        { id: 'fd1_c8', question: 'What is mini-batch gradient descent?', answer: 'An optimisation strategy where the dataset is split into small batches. Gradients are computed per batch and weights updated after each one — a compromise between full-batch and stochastic gradient descent.' },
        { id: 'fd1_c9', question: 'What is the vanishing gradient problem?', answer: 'When gradients become exponentially small as they are backpropagated through many layers, early layers learn very slowly. Common with Sigmoid and Tanh activations in deep networks.' },
        { id: 'fd1_c10', question: 'What is the exploding gradient problem?', answer: 'When gradients grow exponentially large during backpropagation, causing unstable weight updates. Common in deep RNNs. Mitigated by gradient clipping or careful weight initialisation.' },
        { id: 'fd1_c11', question: 'What is dropout regularisation?', answer: 'A technique where a random fraction of neurons are set to zero on each forward pass during training. This prevents co-adaptation and acts as an ensemble of many sub-networks.' },
        { id: 'fd1_c12', question: 'What is batch normalisation?', answer: 'A technique that normalises activations within a mini-batch to have zero mean and unit variance, then applies learnable scale and shift parameters. It stabilises training and allows higher learning rates.' },
      ],
    },
    {
      id: 'fd2',
      name: 'Backpropagation',
      cardCount: 8,
      cards: [
        { id: 'fd2_c1', question: 'What is backpropagation?', answer: 'An algorithm that computes the gradient of the loss with respect to every weight in the network by applying the chain rule layer by layer, from output back to input.' },
        { id: 'fd2_c2', question: 'What is the chain rule in the context of backpropagation?', answer: 'A calculus rule stating ∂L/∂w = (∂L/∂a) · (∂a/∂z) · (∂z/∂w). It allows the gradient to be decomposed and computed layer by layer through the network.' },
        { id: 'fd2_c3', question: 'What is the gradient of the loss function?', answer: 'A vector of partial derivatives ∂L/∂w for each weight, indicating the direction and magnitude by which each weight should change to reduce the loss.' },
        { id: 'fd2_c4', question: 'How is a weight updated during gradient descent?', answer: 'w ← w − α · (∂L/∂w), where α is the learning rate. The weight moves in the direction opposite to the gradient to decrease the loss.' },
        { id: 'fd2_c5', question: 'Why does backpropagation require a differentiable loss function?', answer: 'Backpropagation computes gradients via calculus. A non-differentiable loss has undefined or zero gradients at certain points, breaking the gradient signal needed to update weights.' },
        { id: 'fd2_c6', question: 'What is gradient clipping?', answer: 'A technique that caps the norm (or value) of gradients before the weight update step. It prevents the exploding gradient problem in deep or recurrent networks.' },
        { id: 'fd2_c7', question: 'What is the role of the learning rate in backpropagation?', answer: 'The learning rate α scales the gradient: a large α makes big updates (risk of overshooting), a small α makes tiny updates (slow convergence). Choosing the right α is crucial.' },
        { id: 'fd2_c8', question: 'How does vanishing gradient specifically affect backpropagation?', answer: 'In networks with Sigmoid/Tanh activations, derivatives are at most 0.25. Multiplied across many layers, the gradient shrinks exponentially, leaving early layers with near-zero updates and preventing them from learning.' },
      ],
    },
    {
      id: 'fd3',
      name: 'CNN Basics',
      cardCount: 12,
      cards: [
        { id: 'fd3_c1', question: 'What is a Convolutional Neural Network (CNN)?', answer: 'A deep learning architecture designed for grid-like data (images, audio). It uses convolutional layers to automatically learn spatial hierarchies of features without manual feature engineering.' },
        { id: 'fd3_c2', question: 'What is a convolutional layer?', answer: 'A layer that applies a set of learnable filters to the input. Each filter slides across the input (convolution), producing a feature map that highlights where that filter\'s pattern appears.' },
        { id: 'fd3_c3', question: 'What is a filter (kernel) in a CNN?', answer: 'A small matrix of learnable weights (e.g. 3×3 or 5×5) that is convolved with the input. Each filter detects a specific local pattern, such as an edge, colour gradient, or texture.' },
        { id: 'fd3_c4', question: 'What is a feature map?', answer: 'The output of convolving a filter across an input. It represents the spatial locations where the filter\'s pattern was found. Each convolutional layer produces one feature map per filter.' },
        { id: 'fd3_c5', question: 'What is stride in a convolutional layer?', answer: 'The number of pixels the filter moves at each step. A stride of 1 moves one pixel at a time; stride of 2 skips every other pixel, halving the output spatial dimensions.' },
        { id: 'fd3_c6', question: 'What is padding and why is it used?', answer: 'Adding zeros (or other values) around the border of the input before convolution. "Same" padding keeps output the same size as input; "valid" padding discards border information and shrinks the output.' },
        { id: 'fd3_c7', question: 'What is max pooling?', answer: 'A down-sampling operation that divides the feature map into regions and takes the maximum value from each. It reduces spatial dimensions and makes the representation more robust to small translations.' },
        { id: 'fd3_c8', question: 'What is average pooling?', answer: 'Like max pooling, but takes the average instead of the maximum from each region. It retains more distributed information than max pooling but is less effective at capturing dominant features.' },
        { id: 'fd3_c9', question: 'What is the flattening step in a CNN?', answer: 'Converting the final 2D (or 3D) feature maps into a 1D vector so they can be fed into a fully connected layer for final classification or regression.' },
        { id: 'fd3_c10', question: 'What is a fully connected layer in a CNN?', answer: 'A layer where every neuron connects to every activation from the previous layer. Placed after convolutional/pooling layers, it combines learned features to produce the final output.' },
        { id: 'fd3_c11', question: 'How does a CNN differ from a standard (fully connected) neural network for images?', answer: 'CNNs exploit spatial locality — filters share weights across the input, dramatically reducing parameters. Fully connected networks treat every pixel independently, ignoring spatial structure and scaling poorly.' },
        { id: 'fd3_c12', question: 'What is the receptive field of a neuron in a CNN?', answer: 'The region of the original input that influences a particular neuron\'s activation. Deeper layers have larger receptive fields, allowing them to detect higher-level, more global features.' },
      ],
    },
  ],
}

export const practiceTests = {
  sub1: [
    {
      id: 'pt1',
      name: 'Midterm Prep',
      questionCount: 10,
      questions: [
        {
          id: 'pt1_q1',
          question: 'What is the primary purpose of a convolutional layer in a CNN?',
          options: ['To reduce the spatial dimensions of the input', 'To detect local patterns and features in the input', 'To normalise the activations between layers', 'To connect every neuron to the output layer'],
          correctIndex: 1,
          topic: 'Convolutional Neural Networks',
          explanation: 'A convolutional layer applies learnable filters that slide across the input to detect local spatial patterns such as edges, textures, and shapes. Option A describes a pooling layer; C describes batch normalisation; D describes a fully connected layer.',
          example: 'A 3×3 filter learning to detect vertical edges, when convolved over an image, produces a map showing where vertical edges appear — helping the network later recognise object boundaries.',
        },
        {
          id: 'pt1_q2',
          question: 'Which activation function is most commonly used in hidden layers of modern deep networks?',
          options: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
          correctIndex: 2,
          topic: 'Activation Functions',
          explanation: 'ReLU (max(0, x)) avoids the vanishing gradient problem of Sigmoid and Tanh and is computationally cheap. Softmax is reserved for the output layer of multi-class classifiers.',
          example: 'A hidden layer with 256 neurons using ReLU: any neuron whose weighted sum is negative outputs 0. Positive values pass through unchanged, keeping gradients alive during backpropagation.',
        },
        {
          id: 'pt1_q3',
          question: 'What does the learning rate hyperparameter control?',
          options: ['The number of layers in the network', 'The size of steps taken during gradient descent', 'The number of training epochs', 'The ratio of training to validation data'],
          correctIndex: 1,
          topic: 'Gradient Descent & Optimisation',
          explanation: 'The learning rate α scales the gradient: w = w − α·∇L. Too high → overshooting; too low → slow convergence. It does not affect architecture, epochs, or data splits.',
          example: 'With α = 0.1 the loss may oscillate and not settle. With α = 0.001 it decreases steadily. A common strategy: start at 0.01 and halve it when validation loss plateaus.',
        },
        {
          id: 'pt1_q4',
          question: 'What is overfitting in a machine learning model?',
          options: ['When the model performs well on training data but poorly on unseen data', 'When the model is too simple to capture patterns in the data', 'When the training loss is higher than the validation loss', 'When the learning rate is set too low'],
          correctIndex: 0,
          topic: 'Overfitting & Regularisation',
          explanation: 'Overfitting means the model memorised training examples instead of learning general patterns. Training accuracy is high but test accuracy is low. Option B describes underfitting. In overfitting, validation loss is higher — not lower — than training loss.',
          example: 'An unconstrained decision tree reaching 99% training accuracy but only 65% on the test set. Adding max depth = 5 and pruning forces generalisation.',
        },
        {
          id: 'pt1_q5',
          question: 'Which technique randomly drops neurons during training to prevent overfitting?',
          options: ['Batch Normalisation', 'Dropout', 'L2 Regularisation', 'Data Augmentation'],
          correctIndex: 1,
          topic: 'Overfitting & Regularisation',
          explanation: 'Dropout randomly zeros a fraction of neuron outputs each forward pass, preventing co-adaptation. Batch Norm normalises activations; L2 penalises large weights; Data Augmentation expands the dataset artificially.',
          example: 'With dropout rate 0.5, each neuron has a 50% chance of being zeroed per batch. At inference, all neurons are active but outputs are scaled by 0.5 to preserve expected activation magnitude.',
        },
        {
          id: 'pt1_q6',
          question: 'In a neural network, what is a bias term used for?',
          options: ['To scale the input features', 'To allow the activation function to shift horizontally', 'To reduce the number of parameters', 'To increase the training speed'],
          correctIndex: 1,
          topic: 'Neural Network Fundamentals',
          explanation: 'Bias b is added before activation: output = f(w·x + b). Without bias, all decision boundaries must pass through the origin. The bias shifts the activation threshold independently of the input.',
          example: 'For a ReLU neuron, if w·x = −2 the output is 0. Adding bias b = 3 gives w·x + b = 1, so the neuron activates — the bias shifts it into an active region.',
        },
        {
          id: 'pt1_q7',
          question: 'What does the softmax function output in a classification network?',
          options: ['Binary values of 0 or 1', 'The index of the highest logit', 'A probability distribution over all classes', 'The raw logits normalised between −1 and 1'],
          correctIndex: 2,
          topic: 'Activation Functions',
          explanation: 'Softmax converts logits into probabilities: eˢⁱ/Σeˢʲ. All outputs are positive and sum to 1. It does not produce binary values, indices, or a [−1, 1] range.',
          example: 'Logits [2.0, 1.0, 0.1] → softmax → [0.71, 0.26, 0.03]. The model assigns 71% probability to class 0. Predicted class = argmax = 0.',
        },
        {
          id: 'pt1_q8',
          question: 'Which optimiser adaptively adjusts the learning rate for each parameter?',
          options: ['SGD', 'Momentum', 'Adam', 'RMSProp'],
          correctIndex: 2,
          topic: 'Gradient Descent & Optimisation',
          explanation: 'Adam maintains per-parameter first moments (mean gradients) and second moments (mean squared gradients), giving each weight its own effective learning rate. SGD uses a fixed global rate; Momentum only tracks first moments; RMSProp only tracks second moments.',
          example: 'For a sparse feature, Adam gives it a large step when it does appear. For a dense feature, steps are smaller. This balance makes Adam effective for NLP with large vocabularies.',
        },
        {
          id: 'pt1_q9',
          question: 'What is the vanishing gradient problem?',
          options: ['When gradients become too large and cause instability', 'When gradients become very small during backpropagation, slowing learning in early layers', 'When the model converges before reaching minimum loss', 'When weight initialisation causes symmetry in the network'],
          correctIndex: 1,
          topic: 'Neural Network Fundamentals',
          explanation: 'Gradients are multiplied through each layer. With Sigmoid/Tanh, derivatives are at most 0.25, so multiplying across many layers makes gradients exponentially small. Early layers barely learn. Option A describes the exploding gradient problem.',
          example: 'In a 10-layer sigmoid network, 0.25¹⁰ ≈ 0.000001 gradient at layer 1. Switching to ReLU (derivative = 1 for positive inputs) keeps gradients at full magnitude.',
        },
        {
          id: 'pt1_q10',
          question: 'Which loss function is typically used for binary classification?',
          options: ['Mean Squared Error', 'Categorical Cross-Entropy', 'Binary Cross-Entropy', 'Hinge Loss'],
          correctIndex: 2,
          topic: 'Loss Functions',
          explanation: 'Binary Cross-Entropy: L = −[y·log(p) + (1−y)·log(1−p)]. MSE is for regression; Categorical CE for multi-class; Hinge Loss for SVMs.',
          example: 'Spam (1) vs not-spam (0). Model outputs p = 0.9, true label = 1: BCE = −log(0.9) ≈ 0.10 (low loss). If p = 0.1: BCE = −log(0.1) ≈ 2.30 (high loss).',
        },
      ],
    },
    {
      id: 'pt2',
      name: 'Week 5 Quiz',
      questionCount: 10,
      questions: [
        {
          id: 'pt2_q1',
          question: 'What is the depth of a CNN?',
          options: ['The number of filters in a single layer', 'The number of convolutional and pooling layers stacked together', 'The spatial size of the input image', 'The number of neurons in the fully connected layer'],
          correctIndex: 1,
          topic: 'CNN Architecture',
          explanation: 'Depth refers to how many processing layers are stacked. Deeper CNNs learn more abstract, higher-level features. Each additional layer composes features from the layer below.',
          example: 'VGG-16 has 16 weight layers (13 convolutional + 3 fully connected). Early layers detect edges; middle layers detect shapes; deep layers detect object parts.',
        },
        {
          id: 'pt2_q2',
          question: 'What happens to the spatial dimensions of a feature map when stride = 2 is used?',
          options: ['They double', 'They stay the same', 'They roughly halve', 'They become 1×1'],
          correctIndex: 2,
          topic: 'CNN Architecture',
          explanation: 'Stride controls how far the filter jumps each step. With stride 2, the filter skips every other position, producing an output roughly half the size of the input in each spatial dimension.',
          example: 'A 32×32 input convolved with stride 2 and "valid" padding produces a ~16×16 output. This is used as a memory-efficient alternative to explicit pooling layers.',
        },
        {
          id: 'pt2_q3',
          question: 'What is transfer learning in the context of CNNs?',
          options: ['Copying weights between layers in the same network', 'Using a model pre-trained on one task as a starting point for a new task', 'Transferring data between training and validation sets', 'Moving a model from CPU to GPU training'],
          correctIndex: 1,
          topic: 'CNN Architecture',
          explanation: 'Transfer learning re-uses a CNN pre-trained on a large dataset (e.g., ImageNet). Early layers already detect useful low-level features, so only later layers need to be fine-tuned for the new task.',
          example: 'Training a medical X-ray classifier using ResNet50 pre-trained on ImageNet. Freeze the first 40 layers, fine-tune the last 10 on your X-ray data — converges in minutes with far less data.',
        },
        {
          id: 'pt2_q4',
          question: 'Which pooling operation is most commonly used in CNNs and why?',
          options: ['Average pooling — it preserves more information', 'Max pooling — it captures the most prominent feature in each region', 'Min pooling — it removes noise', 'Global pooling — it always gives the best accuracy'],
          correctIndex: 1,
          topic: 'CNN Architecture',
          explanation: 'Max pooling selects the strongest activation in each region, making the representation invariant to small translations and reducing dimensions. Average pooling is sometimes used in final layers (global average pooling) but max pooling dominates in feature extraction.',
          example: 'A 2×2 region with activations [3, 1, 2, 4] → max pool → 4. The dominant edge detection signal is preserved regardless of exact position.',
        },
        {
          id: 'pt2_q5',
          question: 'What is the role of the fully connected layer at the end of a CNN?',
          options: ['To detect low-level features like edges', 'To reduce spatial dimensions of the feature map', 'To combine all learned features and produce the final prediction', 'To normalise feature maps before pooling'],
          correctIndex: 2,
          topic: 'CNN Architecture',
          explanation: 'After convolutional and pooling layers extract spatial features, the flattened vector is passed to fully connected layers. These integrate all features globally and map them to output classes via learnable weights.',
          example: 'A CNN for 10-class digit recognition: the last FC layer has 10 output neurons, one per digit. Each neuron computes a weighted sum of all extracted features and outputs a logit for that class.',
        },
        {
          id: 'pt2_q6',
          question: 'What is data augmentation and why is it used in CNN training?',
          options: ['Adding more layers to the network', 'Creating synthetic training samples by transforming existing images', 'Increasing the learning rate over time', 'Removing noisy samples from the dataset'],
          correctIndex: 1,
          topic: 'CNN Training',
          explanation: 'Data augmentation generates new training examples by applying random transforms (flip, rotate, crop, colour jitter) to existing images. It increases effective dataset size and improves generalisation.',
          example: 'For a cat classifier trained on 1,000 images: augmentation creates 10,000 variations. The model sees cats at different angles and scales, learning rotation-invariant representations.',
        },
        {
          id: 'pt2_q7',
          question: 'What is the purpose of the ReLU activation after each convolutional layer?',
          options: ['To normalise the feature map values', 'To introduce non-linearity and discard negative activations', 'To reduce the number of parameters', 'To increase the spatial resolution'],
          correctIndex: 1,
          topic: 'Activation Functions',
          explanation: 'ReLU (max(0, x)) introduces non-linearity after the linear convolution operation, allowing the network to learn complex patterns. Setting negative values to 0 creates sparse activations and mitigates vanishing gradients.',
          example: 'After convolution, a feature map might have values [−2, 0, 3, −1, 5]. ReLU → [0, 0, 3, 0, 5]. Only 2 of 5 neurons activate — a sparse, efficient representation.',
        },
        {
          id: 'pt2_q8',
          question: 'What problem does batch normalisation solve in deep networks?',
          options: ['Reduces the number of required training samples', 'Prevents internal covariate shift by normalising layer inputs', 'Increases the learning rate automatically', 'Reduces the depth of the network needed'],
          correctIndex: 1,
          topic: 'CNN Training',
          explanation: 'Internal covariate shift occurs when the distribution of each layer\'s input changes during training as preceding layers update. Batch Norm normalises these distributions per mini-batch, stabilising training and allowing higher learning rates.',
          example: 'Without BN, a 50-layer network\'s layer-30 input may shift drastically between batches, requiring very low learning rates. With BN, distributions stay stable and training with α = 0.01 converges reliably.',
        },
        {
          id: 'pt2_q9',
          question: 'In a CNN, what does "receptive field" refer to?',
          options: ['The size of the filter used in convolution', 'The region of the original input that influences a neuron\'s activation', 'The number of feature maps in a layer', 'The spatial resolution of the output layer'],
          correctIndex: 1,
          topic: 'CNN Architecture',
          explanation: 'The receptive field is the patch of the original input image that a particular neuron "sees". Deeper neurons have larger receptive fields — they respond to patterns spanning larger image regions.',
          example: 'Layer 1 neurons have a 3×3 receptive field (their direct filter). Layer 2 neurons combine multiple layer-1 outputs, each seeing 3×3, so the layer-2 receptive field grows to 5×5.',
        },
        {
          id: 'pt2_q10',
          question: 'What is the key advantage of weight sharing in convolutional layers?',
          options: ['It allows each neuron to have a unique filter', 'It dramatically reduces the number of parameters compared to fully connected layers', 'It makes the network deeper', 'It eliminates the need for activation functions'],
          correctIndex: 1,
          topic: 'CNN Architecture',
          explanation: 'A single filter\'s weights are reused at every spatial location. A 3×3 filter has only 9 weights regardless of input size, vs. a fully connected layer on a 256×256 image needing 65,536 weights per neuron.',
          example: 'Applying one 3×3 edge-detection filter to a 224×224 image: 9 parameters. A fully connected equivalent: 224×224 = 50,176 parameters per output neuron. CNNs are ~5,000× more efficient here.',
        },
      ],
    },
    {
      id: 'pt3',
      name: 'Quick Review',
      questionCount: 10,
      questions: [
        {
          id: 'pt3_q1',
          question: 'What is L2 regularisation (weight decay)?',
          options: ['Adding a penalty proportional to the sum of absolute weight values', 'Adding a penalty proportional to the sum of squared weight values', 'Randomly setting weights to zero during training', 'Clipping gradients above a threshold'],
          correctIndex: 1,
          topic: 'Regularisation',
          explanation: 'L2 regularisation adds λΣw² to the loss, penalising large weights and encouraging small, distributed representations. This discourages over-reliance on any single feature. L1 uses absolute values (sum of |w|).',
          example: 'Without L2, a model may assign weight 100 to one feature and 0 to others. With L2 (λ=0.01), this is penalised; the model distributes attention across features, improving generalisation.',
        },
        {
          id: 'pt3_q2',
          question: 'What is the difference between L1 and L2 regularisation?',
          options: ['L1 produces sparse weights; L2 produces small but non-zero weights', 'L1 is faster to compute; L2 is more accurate', 'L2 drops neurons; L1 clips gradients', 'They are identical except for the regularisation strength'],
          correctIndex: 0,
          topic: 'Regularisation',
          explanation: 'L1 (|w| penalty) drives many weights exactly to zero, producing sparse models useful for feature selection. L2 (w² penalty) shrinks all weights toward zero but rarely to exactly zero, giving smooth distributed representations.',
          example: 'In a text classifier with 10,000 features: L1 might zero out 9,800 irrelevant words, leaving 200 informative ones. L2 keeps all 10,000 features but with small weights.',
        },
        {
          id: 'pt3_q3',
          question: 'What is early stopping in model training?',
          options: ['Stopping training after a fixed number of epochs', 'Stopping training when validation loss stops improving', 'Stopping training when training loss reaches zero', 'Stopping training if the learning rate becomes too small'],
          correctIndex: 1,
          topic: 'Regularisation',
          explanation: 'Early stopping monitors validation loss during training and halts when it stops decreasing (or starts increasing), indicating the model is beginning to overfit. It is a cheap, effective regularisation technique.',
          example: 'Training stops at epoch 47 when validation loss is 0.23, despite training loss still falling. Continuing to epoch 100 would give training loss 0.05 but validation loss 0.41 — clear overfitting.',
        },
        {
          id: 'pt3_q4',
          question: 'What does the confusion matrix show in classification evaluation?',
          options: ['The distribution of feature importances', 'The counts of true positives, false positives, true negatives, and false negatives', 'The relationship between learning rate and accuracy', 'The number of neurons that fired per class'],
          correctIndex: 1,
          topic: 'Model Evaluation',
          explanation: 'A confusion matrix is a table where rows represent actual classes and columns represent predicted classes. The diagonal shows correct predictions; off-diagonal cells show specific types of misclassification.',
          example: 'For spam detection: TP = 90 (spam correctly identified), FP = 10 (ham labelled spam), FN = 5 (spam missed), TN = 895 (ham correctly passed). Precision = 90/(90+10) = 90%.',
        },
        {
          id: 'pt3_q5',
          question: 'What is the difference between precision and recall?',
          options: ['Precision measures all correct predictions; recall measures only positive ones', 'Precision = TP/(TP+FP); Recall = TP/(TP+FN)', 'Recall is the same as accuracy; precision is class-specific', 'Precision penalises false negatives; recall penalises false positives'],
          correctIndex: 1,
          topic: 'Model Evaluation',
          explanation: 'Precision (TP/(TP+FP)) answers "of all predicted positives, how many were actually positive?" Recall (TP/(TP+FN)) answers "of all actual positives, how many did we catch?" High precision = few false alarms; high recall = few misses.',
          example: 'Cancer screening: recall is critical — missing a case (FN) is dangerous. Spam filter: precision matters more — falsely flagging important email (FP) frustrates users.',
        },
        {
          id: 'pt3_q6',
          question: 'What is the F1 score?',
          options: ['The average of precision and recall', 'The harmonic mean of precision and recall', 'The geometric mean of accuracy and loss', 'The ratio of true positives to total samples'],
          correctIndex: 1,
          topic: 'Model Evaluation',
          explanation: 'F1 = 2 · (Precision · Recall) / (Precision + Recall). The harmonic mean penalises extreme imbalances — a model with precision=1 and recall=0 gets F1=0, not 0.5. It is useful for imbalanced datasets.',
          example: 'Model A: Precision=0.9, Recall=0.9 → F1=0.9. Model B: Precision=1.0, Recall=0.5 → F1=0.67. F1 correctly prefers Model A for balanced performance.',
        },
        {
          id: 'pt3_q7',
          question: 'What is cross-validation and why is it used?',
          options: ['Training on multiple GPUs simultaneously', 'Splitting data into k folds and rotating the validation set to estimate generalisation', 'Validating that the loss function is correct', 'Checking that training and test distributions match'],
          correctIndex: 1,
          topic: 'Model Evaluation',
          explanation: 'K-fold cross-validation splits the dataset into k equal parts. The model trains on k−1 folds and validates on the remaining fold, rotating until every fold has been the validation set. The average score is a more reliable estimate than a single train/val split.',
          example: '5-fold CV on 1,000 samples: 5 rounds of train 800 / val 200. Each fold gives an accuracy; the final reported accuracy is their average, reducing variance from lucky/unlucky splits.',
        },
        {
          id: 'pt3_q8',
          question: 'What is the bias-variance tradeoff?',
          options: ['The tradeoff between model size and training speed', 'High bias → underfitting; high variance → overfitting; the goal is to balance both', 'The balance between L1 and L2 regularisation', 'The tradeoff between learning rate and batch size'],
          correctIndex: 1,
          topic: 'Regularisation',
          explanation: 'Bias is error from wrong assumptions (underfitting — model too simple). Variance is error from sensitivity to training data fluctuations (overfitting — model too complex). A good model has low bias and low variance, achieved through appropriate complexity and regularisation.',
          example: 'A linear model fitting a quadratic curve has high bias. A 10th-degree polynomial perfectly fits training points but wildly mispredicts elsewhere — high variance. A 2nd-degree polynomial balances both.',
        },
        {
          id: 'pt3_q9',
          question: 'What is mean squared error (MSE) used for?',
          options: ['Multi-class classification', 'Binary classification', 'Regression problems', 'Ranking tasks'],
          correctIndex: 2,
          topic: 'Loss Functions',
          explanation: 'MSE = (1/n)Σ(yᵢ − ŷᵢ)². It measures the average squared difference between predictions and actual values, penalising large errors heavily. It is differentiable and convex for linear models, making it well-suited to regression.',
          example: 'Predicting house prices: actual $300k, predicted $320k → error $20k, squared = 400M. Actual $300k, predicted $500k → error $200k, squared = 40B. MSE penalises the large error 100× more.',
        },
        {
          id: 'pt3_q10',
          question: 'What is hyperparameter tuning?',
          options: ['Updating model weights during backpropagation', 'Searching for the best settings for parameters not learned by the model (e.g., learning rate, depth)', 'Fine-tuning a pre-trained model on new data', 'Adjusting the dataset split ratio'],
          correctIndex: 1,
          topic: 'Model Training',
          explanation: 'Hyperparameters (learning rate, batch size, number of layers, dropout rate, etc.) are set before training and are not learned from data. Tuning finds the combination that minimises validation loss, using grid search, random search, or Bayesian optimisation.',
          example: 'Grid search over learning rate ∈ {0.1, 0.01, 0.001} × batch size ∈ {32, 64, 128} = 9 experiments. The pair that yields the lowest validation loss is selected.',
        },
      ],
    },
  ],
}

export const sampleQuestions = [
  {
    id: 'q1',
    question: 'What is the primary purpose of a convolutional layer in a CNN?',
    options: [
      'To reduce the spatial dimensions of the input',
      'To detect local patterns and features in the input',
      'To normalize the activations between layers',
      'To connect every neuron to the output layer',
    ],
    correctIndex: 1,
    topic: 'Convolutional Neural Networks',
    explanation: 'A convolutional layer applies learnable filters that slide across the input to detect local spatial patterns such as edges, textures, and shapes. Each filter produces a feature map highlighting where that pattern appears. Option A describes a pooling layer, C describes batch normalization, and D describes a fully connected layer.',
    example: 'In image recognition, a 3×3 filter might learn to detect vertical edges. When convolved with a photo of a cat, it produces a map showing where vertical edges appear — helping the network later recognise ears and whiskers.',
  },
  {
    id: 'q2',
    question: 'Which activation function is most commonly used in hidden layers of modern deep networks?',
    options: ['Sigmoid', 'Tanh', 'ReLU', 'Softmax'],
    correctIndex: 2,
    topic: 'Activation Functions',
    explanation: 'ReLU (Rectified Linear Unit) outputs max(0, x), which avoids the vanishing gradient problem that affects Sigmoid and Tanh for large inputs. It is also computationally cheap. Softmax is used in the output layer for multi-class classification, not in hidden layers.',
    example: 'A hidden layer with 256 neurons uses ReLU: any neuron whose weighted sum is negative outputs 0 (inactive), while positive values pass through unchanged. This sparsity makes learning efficient and gradients flow cleanly during backpropagation.',
  },
  {
    id: 'q3',
    question: 'What does the learning rate hyperparameter control?',
    options: [
      'The number of layers in the network',
      'The size of steps taken during gradient descent',
      'The number of training epochs',
      'The ratio of training to validation data',
    ],
    correctIndex: 1,
    topic: 'Gradient Descent & Optimization',
    explanation: 'The learning rate (α) scales the gradient before subtracting it from the weights: w = w − α·∇L. A high learning rate takes large steps and may overshoot the minimum; a low rate converges slowly. It does not affect architecture, epochs, or data splits.',
    example: 'With α = 0.1 the loss might oscillate and never settle. With α = 0.001 it decreases steadily each epoch. A common strategy is to start at 0.01 and halve it when validation loss plateaus.',
  },
  {
    id: 'q4',
    question: 'What is overfitting in a machine learning model?',
    options: [
      'When the model performs well on training data but poorly on unseen data',
      'When the model is too simple to capture patterns in the data',
      'When the training loss is higher than the validation loss',
      'When the learning rate is set too low',
    ],
    correctIndex: 0,
    topic: 'Overfitting & Regularization',
    explanation: 'Overfitting occurs when a model memorises training examples instead of learning general patterns. Training accuracy is high but test accuracy is low. Option B describes underfitting. Option C has the losses reversed — in overfitting validation loss is higher than training loss.',
    example: 'A decision tree with no depth limit might reach 99% training accuracy by memorising every sample, yet only 65% on the test set. Adding a max depth of 5 and pruning forces it to learn rules that generalise.',
  },
  {
    id: 'q5',
    question: 'Which technique is used to prevent overfitting by randomly dropping neurons during training?',
    options: ['Batch Normalization', 'Dropout', 'L2 Regularization', 'Data Augmentation'],
    correctIndex: 1,
    topic: 'Overfitting & Regularization',
    explanation: 'Dropout randomly sets a fraction of neuron outputs to zero on each forward pass during training, forcing the network to learn redundant representations and preventing co-adaptation. Batch Normalization normalises activations, L2 penalises large weights, and Data Augmentation artificially expands the dataset.',
    example: 'With dropout rate 0.5, each neuron has a 50% chance of being zeroed each batch. At inference, all neurons are active but their outputs are scaled by 0.5 to compensate, maintaining the same expected activation magnitude.',
  },
  {
    id: 'q6',
    question: 'In a neural network, what is a bias term used for?',
    options: [
      'To scale the input features',
      'To allow the activation function to shift horizontally',
      'To reduce the number of parameters',
      'To increase the training speed',
    ],
    correctIndex: 1,
    topic: 'Neural Network Fundamentals',
    explanation: 'A bias b is added before the activation: output = f(w·x + b). Without bias, all decision boundaries must pass through the origin, severely limiting what the network can represent. The bias lets the neuron fire even when all inputs are zero.',
    example: 'For a single neuron with ReLU, if w·x = −2 the output is 0. Adding bias b = 3 gives w·x + b = 1, so the neuron activates. This shift lets the layer model patterns that are offset from zero.',
  },
  {
    id: 'q7',
    question: 'What does the softmax function output in a classification network?',
    options: [
      'Binary values of 0 or 1',
      'The index of the highest logit',
      'A probability distribution over all classes',
      'The raw logits normalized between -1 and 1',
    ],
    correctIndex: 2,
    topic: 'Activation Functions',
    explanation: 'Softmax converts a vector of raw logits into probabilities: each value is exp(zᵢ)/Σexp(zⱼ). All outputs are positive and sum to 1, making them interpretable as class probabilities. It does not produce binary values, indices, or a [-1,1] range.',
    example: 'Logits [2.0, 1.0, 0.1] → softmax → [0.71, 0.26, 0.03]. The model assigns 71% probability to class 0, 26% to class 1, 3% to class 2. The predicted class is argmax = class 0.',
  },
  {
    id: 'q8',
    question: 'Which optimizer adaptively adjusts learning rates for each parameter?',
    options: ['SGD', 'Momentum', 'Adam', 'RMSProp'],
    correctIndex: 2,
    topic: 'Gradient Descent & Optimization',
    explanation: 'Adam (Adaptive Moment Estimation) maintains per-parameter first moments (mean of gradients) and second moments (mean of squared gradients), giving each weight its own effective learning rate. SGD uses a fixed rate for all. Momentum only tracks the first moment. RMSProp tracks squared gradients but not the first moment — Adam combines both.',
    example: 'For a sparse feature (rarely non-zero), Adam gives it a large effective step when it does appear, while a dense feature gets smaller steps. This is why Adam trains well on NLP tasks with large vocabularies.',
  },
  {
    id: 'q9',
    question: 'What is the vanishing gradient problem?',
    options: [
      'When gradients become too large and cause instability',
      'When gradients become very small during backpropagation, slowing learning in early layers',
      'When the model converges before reaching the minimum loss',
      'When weight initialization causes symmetry in the network',
    ],
    correctIndex: 1,
    topic: 'Neural Network Fundamentals',
    explanation: 'During backpropagation, gradients are multiplied through each layer. With Sigmoid or Tanh activations, derivatives are at most 0.25, so multiplying them across many layers makes gradients exponentially small. Early layers receive near-zero updates and barely learn. Option A describes the exploding gradient problem.',
    example: 'In a 10-layer sigmoid network, a gradient of 0.25 per layer compounds to 0.25¹⁰ ≈ 0.000001 by the first layer. Switching to ReLU (derivative = 1 for positive inputs) keeps gradients at full magnitude through all layers.',
  },
  {
    id: 'q10',
    question: 'Which loss function is typically used for binary classification?',
    options: [
      'Mean Squared Error',
      'Categorical Cross-Entropy',
      'Binary Cross-Entropy',
      'Hinge Loss',
    ],
    correctIndex: 2,
    topic: 'Loss Functions',
    explanation: 'Binary Cross-Entropy (BCE) measures the difference between the predicted probability and the true binary label: L = −[y·log(p) + (1−y)·log(1−p)]. MSE is for regression, Categorical Cross-Entropy is for multi-class problems, and Hinge Loss is used in SVMs.',
    example: 'Predicting spam (1) vs not-spam (0). If the model outputs p = 0.9 and the true label is 1: BCE = −log(0.9) ≈ 0.10 (low loss, good prediction). If p = 0.1: BCE = −log(0.1) ≈ 2.30 (high loss, bad prediction).',
  },
]

// ── Per-material flashcard content (Wizard of Oz) ────────────────────────────
export const materialFlashcards = {
  // sub1: Machine Learning
  mat1: [
    { id: 'm1_c1', question: 'What is a neuron in a neural network?', answer: 'The basic computational unit: it receives inputs, multiplies each by a weight, adds a bias, then passes the result through an activation function to produce an output.' },
    { id: 'm1_c2', question: 'What is forward propagation?', answer: 'Passing input data layer by layer from input to output, computing activations at each step. No weights are updated — it is a prediction-only pass.' },
    { id: 'm1_c3', question: 'What role do weights play in a neural network?', answer: 'Weights scale the signal between neurons. They are the learnable parameters adjusted during training to minimise the loss function.' },
    { id: 'm1_c4', question: 'Why are activation functions necessary?', answer: 'They introduce non-linearity. Without them, any number of stacked layers would collapse into a single linear function, unable to model complex patterns.' },
    { id: 'm1_c5', question: 'What is ReLU and why is it widely used?', answer: 'Rectified Linear Unit: f(x) = max(0, x). Popular because it is cheap to compute, does not saturate for positive values, and mitigates vanishing gradients.' },
    { id: 'm1_c6', question: 'What is the loss function?', answer: 'A function that measures how far the model\'s predictions are from the true labels. Training minimises this function by adjusting weights via gradient descent.' },
    { id: 'm1_c7', question: 'What is the difference between a training pass and inference?', answer: 'During training, both forward and backward passes run to update weights. During inference, only the forward pass runs — weights are frozen and the model just predicts.' },
    { id: 'm1_c8', question: 'What is an epoch?', answer: 'One complete pass through the entire training dataset. Models typically train for many epochs, updating weights after each mini-batch.' },
    { id: 'm1_c9', question: 'What is the purpose of the output layer?', answer: 'To produce the final prediction: a single value for regression, or class probabilities for classification (usually via sigmoid for binary, softmax for multi-class).' },
    { id: 'm1_c10', question: 'What is a hyperparameter?', answer: 'A setting not learned from data (e.g. learning rate, number of layers, batch size). Set before training and tuned via experimentation or search strategies.' },
  ],
  mat2: [
    { id: 'm2_c1', question: 'What is gradient descent?', answer: 'An iterative optimisation algorithm that updates model weights by moving in the direction of the negative gradient of the loss function: w ← w − α·∇L.' },
    { id: 'm2_c2', question: 'What is the learning rate?', answer: 'A scalar α that controls the step size of each weight update. Too large → overshooting the minimum; too small → very slow convergence.' },
    { id: 'm2_c3', question: 'What is stochastic gradient descent (SGD)?', answer: 'A variant of gradient descent where weights are updated after each individual training example rather than after the full dataset. Faster but noisier updates.' },
    { id: 'm2_c4', question: 'What is mini-batch gradient descent?', answer: 'A compromise between full-batch and SGD: the dataset is split into small batches (e.g. 32 or 64 samples). Gradients are averaged over each batch before updating weights.' },
    { id: 'm2_c5', question: 'What is momentum in optimisation?', answer: 'An extension of SGD that accumulates a velocity vector from past gradients, dampening oscillations and accelerating movement in consistent gradient directions.' },
    { id: 'm2_c6', question: 'What is the Adam optimiser?', answer: 'An adaptive optimiser combining momentum (first moment) and RMSProp (second moment). It gives each parameter its own effective learning rate that adapts over time.' },
    { id: 'm2_c7', question: 'What is a local minimum and why does it matter?', answer: 'A point where the loss is lower than nearby points but not the global lowest. SGD\'s noise often helps escape shallow local minima; deep networks rarely get stuck in poor ones in practice.' },
    { id: 'm2_c8', question: 'What is a learning rate schedule?', answer: 'A strategy that changes the learning rate during training, e.g. step decay, cosine annealing, or reducing on plateau. Helps escape oscillations and fine-tune convergence.' },
    { id: 'm2_c9', question: 'What is the gradient of the loss?', answer: 'A vector of partial derivatives ∂L/∂wᵢ for every weight. It points in the direction of steepest increase of the loss; gradient descent moves opposite to it.' },
    { id: 'm2_c10', question: 'What is convergence in model training?', answer: 'When the training loss stabilises and stops decreasing significantly. A model is considered converged when further training yields negligible improvement.' },
  ],
  mat3: [
    { id: 'm3_c1', question: 'What problem do CNNs solve compared to fully connected networks on images?', answer: 'CNNs exploit spatial structure: filters share weights across all positions, dramatically cutting parameters and capturing local patterns regardless of where they appear.' },
    { id: 'm3_c2', question: 'What is a convolutional layer?', answer: 'A layer that slides learnable filters across the input, computing a dot product at each position to produce a feature map showing where that filter\'s pattern appears.' },
    { id: 'm3_c3', question: 'What determines the number of feature maps in a conv layer?', answer: 'The number of filters. Each filter produces one feature map, so 64 filters → 64 feature maps of the same spatial dimensions.' },
    { id: 'm3_c4', question: 'What is "same" vs "valid" padding?', answer: '"Same" padding adds zeros around the input so the output has the same spatial size as the input. "Valid" padding does no padding — the output shrinks by (filter_size − 1).' },
    { id: 'm3_c5', question: 'What is the purpose of pooling layers?', answer: 'To progressively reduce spatial dimensions, decreasing computation and making representations more translation-invariant. Max pooling takes the maximum value in each window.' },
    { id: 'm3_c6', question: 'What is global average pooling (GAP)?', answer: 'Taking the average of each entire feature map, collapsing spatial dimensions to a single value per channel. Used instead of FC layers at the end of modern CNNs to reduce parameters.' },
    { id: 'm3_c7', question: 'What is a typical CNN architecture pattern?', answer: '[Conv → ReLU → Pool] × N → Flatten → FC → Softmax. Each Conv block learns increasingly abstract features; FC layers combine them for the final classification.' },
    { id: 'm3_c8', question: 'How does depth affect a CNN\'s learned representations?', answer: 'Shallow layers detect low-level features (edges, colours); mid-layers detect shapes and textures; deep layers detect high-level object parts. Greater depth enables more abstract reasoning.' },
    { id: 'm3_c9', question: 'What is channel depth (number of channels) in a conv layer?', answer: 'The number of feature maps output by a layer. Early layers often have fewer channels (e.g. 32–64); deeper layers have more (e.g. 256–512) to represent richer features.' },
    { id: 'm3_c10', question: 'What is a 1×1 convolution used for?', answer: 'To change the channel depth without altering spatial dimensions — effectively a per-pixel linear combination across channels. Used in Inception and ResNet to reduce or expand depth cheaply.' },
  ],
  mat4: [
    { id: 'm4_c1', question: 'What is regularisation and why is it needed?', answer: 'Techniques that penalise model complexity to prevent overfitting, improving generalisation to unseen data. Examples: L1/L2 weight penalties, dropout, early stopping.' },
    { id: 'm4_c2', question: 'What is the bias-variance tradeoff?', answer: 'Bias = error from oversimplified assumptions (underfitting). Variance = error from sensitivity to training noise (overfitting). The goal is to minimise both simultaneously.' },
    { id: 'm4_c3', question: 'What is train/validation/test split and why use three sets?', answer: 'Training set: fit the model. Validation set: tune hyperparameters without contaminating test metrics. Test set: final unbiased evaluation. Using the test set for tuning introduces bias.' },
    { id: 'm4_c4', question: 'What is batch normalisation and what problem does it solve?', answer: 'Normalises each layer\'s inputs to zero mean and unit variance per mini-batch. Solves internal covariate shift, enabling higher learning rates and faster convergence.' },
    { id: 'm4_c5', question: 'What is transfer learning and when is it useful?', answer: 'Reusing a model pre-trained on a large dataset for a new task. Useful when the target task has limited data — early layers capture reusable low-level features.' },
    { id: 'm4_c6', question: 'What is the difference between fine-tuning and feature extraction in transfer learning?', answer: 'Feature extraction: freeze all pre-trained weights, only train a new output head. Fine-tuning: unfreeze some upper layers and train them at a low learning rate along with the new head.' },
    { id: 'm4_c7', question: 'What is the orthogonalisation principle in ML system design?', answer: 'Separate the concerns of fitting the training set well, fitting the dev set well, and fitting the test set well. Use different "knobs" (regularisation, more data, etc.) for each.' },
    { id: 'm4_c8', question: 'What is weight initialisation and why does it matter?', answer: 'How weights are set before training begins. Poor initialisation (e.g., all zeros) causes symmetry — neurons learn the same thing. Xavier or He initialisation sets variance to prevent vanishing/exploding signals.' },
    { id: 'm4_c9', question: 'What is the difference between parameters and hyperparameters?', answer: 'Parameters (weights, biases) are learned from data during training. Hyperparameters (learning rate, layer count, dropout rate) are set before training and not updated by gradient descent.' },
    { id: 'm4_c10', question: 'What is multi-task learning?', answer: 'Training a single network on multiple related tasks simultaneously. Shared lower layers learn general representations, while task-specific heads specialise. Useful when tasks share underlying structure.' },
  ],
  // sub2: Algorithms & Data Structures
  mat5: [
    { id: 'm5_c1', question: 'What is the time complexity of bubble sort?', answer: 'O(n²) average and worst case. It repeatedly swaps adjacent elements that are in the wrong order. Best case O(n) if already sorted with an optimised version.' },
    { id: 'm5_c2', question: 'How does merge sort work?', answer: 'Divide the array in half recursively until single elements, then merge sorted halves. Time complexity O(n log n) in all cases. Space O(n) for the merge buffer.' },
    { id: 'm5_c3', question: 'What is the average case complexity of quicksort?', answer: 'O(n log n) average, O(n²) worst case (poor pivot choices). In practice it outperforms merge sort due to smaller constant factors and cache efficiency.' },
    { id: 'm5_c4', question: 'What makes a sorting algorithm "stable"?', answer: 'It preserves the relative order of equal elements. Merge sort and insertion sort are stable; quicksort and heap sort are not stable by default.' },
    { id: 'm5_c5', question: 'What is insertion sort best used for?', answer: 'Small arrays or nearly-sorted data. It is O(n²) in general but O(n) for nearly-sorted input, and has tiny overhead — often used as a base case in hybrid algorithms like Timsort.' },
    { id: 'm5_c6', question: 'What is heap sort?', answer: 'Builds a max-heap from the array, then repeatedly extracts the maximum to build the sorted output. Time O(n log n), space O(1) in-place. Not stable.' },
    { id: 'm5_c7', question: 'What is counting sort and when is it applicable?', answer: 'A non-comparison sort that counts occurrences of each value. Time O(n + k) where k is the value range. Only applicable when values are integers in a known, small range.' },
    { id: 'm5_c8', question: 'What is the lower bound for comparison-based sorting?', answer: 'Ω(n log n). Any algorithm that sorts by comparing elements must make at least n log n comparisons in the worst case — proven via decision tree argument.' },
    { id: 'm5_c9', question: 'What is selection sort?', answer: 'Repeatedly find the minimum element in the unsorted portion and swap it to the front. Always O(n²) — no best case improvement. Simple but inefficient for large inputs.' },
    { id: 'm5_c10', question: 'What is Timsort and why is it used in practice?', answer: 'A hybrid of merge sort and insertion sort used in Python and Java. It detects natural runs in the data and merges them efficiently. O(n log n) worst case, O(n) best case.' },
  ],
  mat6: [
    { id: 'm6_c1', question: 'What is a graph?', answer: 'A data structure consisting of vertices (nodes) and edges (connections between nodes). Graphs model pairwise relationships — networks, maps, dependencies, social connections.' },
    { id: 'm6_c2', question: 'What is the difference between a directed and undirected graph?', answer: 'In a directed graph (digraph), edges have direction (A→B ≠ B→A). In an undirected graph, edges are bidirectional (A-B = B-A).' },
    { id: 'm6_c3', question: 'What is an adjacency matrix?', answer: 'A V×V matrix where entry [i][j] = 1 (or weight) if edge (i, j) exists. Space O(V²). Fast edge lookup O(1), but wastes space for sparse graphs.' },
    { id: 'm6_c4', question: 'What is an adjacency list?', answer: 'A collection of V lists, each storing the neighbours of a vertex. Space O(V + E). Memory-efficient for sparse graphs; iterating over neighbours is O(degree).' },
    { id: 'm6_c5', question: 'How does Breadth-First Search (BFS) work?', answer: 'Explores all neighbours at distance 1 before distance 2, using a queue. Finds shortest paths in unweighted graphs. Time O(V + E), space O(V).' },
    { id: 'm6_c6', question: 'How does Depth-First Search (DFS) work?', answer: 'Explores as far as possible down each branch before backtracking, using a stack (or recursion). Used for cycle detection, topological sort, connected components. Time O(V + E).' },
    { id: 'm6_c7', question: 'What is topological sort?', answer: 'A linear ordering of vertices in a DAG such that for every edge u→v, u comes before v. Used for scheduling, build order, dependency resolution. DFS-based or Kahn\'s algorithm.' },
    { id: 'm6_c8', question: 'What is Dijkstra\'s algorithm used for?', answer: 'Finding the shortest path from a source vertex to all others in a weighted graph with non-negative weights. Time O((V + E) log V) with a priority queue.' },
    { id: 'm6_c9', question: 'What is a strongly connected component (SCC)?', answer: 'A maximal subset of vertices in a directed graph where every vertex is reachable from every other vertex. Found with Tarjan\'s or Kosaraju\'s algorithm in O(V + E).' },
    { id: 'm6_c10', question: 'What is a minimum spanning tree (MST)?', answer: 'A subset of edges connecting all vertices with minimum total weight and no cycles. Prim\'s (O(E log V)) and Kruskal\'s (O(E log E)) algorithms find MSTs efficiently.' },
  ],
  mat7: [
    { id: 'm7_c1', question: 'What is dynamic programming (DP)?', answer: 'An optimisation technique for problems with overlapping subproblems and optimal substructure. Solves each subproblem once, stores the result, and builds up to the full solution.' },
    { id: 'm7_c2', question: 'What are overlapping subproblems?', answer: 'When the same subproblem recurs multiple times in the recursion tree. DP avoids redundant recomputation by caching (memoisation) or building a table (tabulation).' },
    { id: 'm7_c3', question: 'What is optimal substructure?', answer: 'The optimal solution to a problem contains optimal solutions to its subproblems. This property is required for DP (and greedy) to work correctly.' },
    { id: 'm7_c4', question: 'What is the difference between memoisation and tabulation?', answer: 'Memoisation (top-down): use recursion and cache results as they are computed. Tabulation (bottom-up): fill a table iteratively from smallest subproblems to the full problem. Both give the same asymptotic complexity.' },
    { id: 'm7_c5', question: 'What is the DP solution to the 0/1 Knapsack problem?', answer: 'dp[i][w] = max value using first i items with weight capacity w. Recurrence: dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w-weight[i]]). Time O(nW), space O(nW).' },
    { id: 'm7_c6', question: 'What is the longest common subsequence (LCS) problem?', answer: 'Find the longest sequence present in both strings as subsequences (not necessarily contiguous). DP recurrence: if chars match, LCS[i][j] = LCS[i-1][j-1] + 1; else max(LCS[i-1][j], LCS[i][j-1]). O(mn).' },
    { id: 'm7_c7', question: 'What is the coin change problem and its DP solution?', answer: 'Given coin denominations and a target amount, find the minimum number of coins. dp[i] = min coins to make amount i. Recurrence: dp[i] = min(dp[i - coin] + 1) for each coin ≤ i. O(amount × |coins|).' },
    { id: 'm7_c8', question: 'What is the Fibonacci sequence computed with DP?', answer: 'Naïve recursion is O(2ⁿ). With memoisation or tabulation: store F[i] = F[i-1] + F[i-2], compute bottom-up. Time O(n), space O(1) with only two variables.' },
    { id: 'm7_c9', question: 'What is the "state" in a DP problem?', answer: 'The set of parameters that fully describe a subproblem. Defining the right state is the core DP design step — states form the dimensions of the DP table.' },
    { id: 'm7_c10', question: 'When should you use DP vs greedy algorithms?', answer: 'Greedy makes locally optimal choices without reconsidering; it works when the greedy property holds. DP is needed when local optimal choices depend on future decisions — greedy can fail here.' },
  ],
  mat8: [
    { id: 'm8_c1', question: 'What does Big-O notation describe?', answer: 'The asymptotic upper bound on an algorithm\'s growth rate as input size n → ∞. It characterises the worst-case (or average-case) behaviour, ignoring constant factors.' },
    { id: 'm8_c2', question: 'What is O(1) time complexity?', answer: 'Constant time — the operation takes the same time regardless of input size. Examples: array indexing, hash table lookup (average), stack push/pop.' },
    { id: 'm8_c3', question: 'What is O(log n) time complexity?', answer: 'Logarithmic time — the problem size roughly halves with each step. Examples: binary search, balanced BST operations, many divide-and-conquer algorithms.' },
    { id: 'm8_c4', question: 'What is O(n log n) time complexity?', answer: 'Linearithmic time — typical of efficient sorting algorithms (merge sort, heapsort, quicksort average). Generally considered the practical lower bound for comparison-based sorting.' },
    { id: 'm8_c5', question: 'What is O(n²) time complexity?', answer: 'Quadratic time — nested loops over the input. Examples: bubble sort, selection sort, insertion sort (worst case). Acceptable for small n, impractical for large datasets.' },
    { id: 'm8_c6', question: 'What is the difference between time complexity and space complexity?', answer: 'Time complexity measures operations (CPU); space complexity measures memory usage. Both are analysed asymptotically. An algorithm may trade one for the other (e.g. memoisation uses space to save time).' },
    { id: 'm8_c7', question: 'What does Ω (Omega) notation represent?', answer: 'The asymptotic lower bound — the algorithm takes at least this long in the best case. If an algorithm is Ω(n log n), no input can be processed faster than linear-rhythmic time.' },
    { id: 'm8_c8', question: 'What is amortised analysis?', answer: 'Analysing the average cost per operation over a sequence of operations, even if individual operations vary. Example: dynamic array doubling is O(n) when resizing but O(1) amortised per append.' },
    { id: 'm8_c9', question: 'What is the difference between best, average, and worst case complexity?', answer: 'Best case: the fastest possible input. Worst case: the slowest possible input. Average case: expected time over all inputs (often harder to compute). Worst case is the standard for guarantees.' },
    { id: 'm8_c10', question: 'What is O(2ⁿ) time complexity?', answer: 'Exponential time — doubles with each additional input element. Examples: naïve recursive Fibonacci, brute-force subset problems. Impractical beyond n ≈ 30.' },
  ],
  mat9: [
    { id: 'm9_c1', question: 'What is a binary tree?', answer: 'A tree where each node has at most two children, called left and right. Used as the base structure for BSTs, heaps, and expression trees.' },
    { id: 'm9_c2', question: 'What is a binary search tree (BST)?', answer: 'A binary tree where for every node, all left descendants are smaller and all right descendants are larger. Supports search, insert, delete in O(h) where h is the height.' },
    { id: 'm9_c3', question: 'What is the height of a BST and why does it matter?', answer: 'The length of the longest root-to-leaf path. Operations are O(h). A balanced BST has h = O(log n); a degenerate (sorted-insert) BST has h = O(n).' },
    { id: 'm9_c4', question: 'What is in-order traversal and what does it produce for a BST?', answer: 'Visit left subtree, then root, then right subtree. For a BST, in-order traversal yields elements in sorted ascending order.' },
    { id: 'm9_c5', question: 'What is the difference between pre-order and post-order traversal?', answer: 'Pre-order: root → left → right. Useful for copying a tree or generating prefix expressions. Post-order: left → right → root. Useful for deleting a tree or evaluating expressions.' },
    { id: 'm9_c6', question: 'What is an AVL tree?', answer: 'A self-balancing BST where the heights of the two subtrees of any node differ by at most 1. Rebalances via rotations on insert/delete. Guarantees O(log n) for all operations.' },
    { id: 'm9_c7', question: 'What is a heap?', answer: 'A complete binary tree satisfying the heap property: in a max-heap, each node is ≥ its children; in a min-heap, each node is ≤ its children. Implemented efficiently in an array.' },
    { id: 'm9_c8', question: 'What is the time complexity of heap operations?', answer: 'Insert: O(log n) — add at end, bubble up. Extract-min/max: O(log n) — replace root with last, bubble down. Peek min/max: O(1). Build heap: O(n) using Floyd\'s algorithm.' },
    { id: 'm9_c9', question: 'How is a binary heap stored in an array?', answer: 'Root at index 0. For node at index i: left child at 2i+1, right child at 2i+2, parent at ⌊(i−1)/2⌋. No pointers needed — the structure is implicit from indices.' },
    { id: 'm9_c10', question: 'What is a priority queue and how is it implemented?', answer: 'A queue where elements have priorities and the highest-priority element is always dequeued first. Typically implemented with a binary heap. Insert and extract both O(log n).' },
  ],
}

// ── Per-material practice test questions (Wizard of Oz) ──────────────────────
export const materialQuestions = {
  // sub1: Machine Learning
  mat1: [
    { id: 'm1_q1', question: 'Which component of a neural network introduces non-linearity?', options: ['The weight matrix', 'The bias term', 'The activation function', 'The loss function'], correctIndex: 2, topic: 'Neural Network Basics', explanation: 'Activation functions (e.g. ReLU, sigmoid) are the only non-linear component. Without them, any stack of layers is mathematically equivalent to a single linear transformation.', example: 'Without ReLU, a 10-layer network is just one matrix multiplication. With ReLU, each layer can carve out different non-linear regions of the input space.' },
    { id: 'm1_q2', question: 'What happens during the forward pass?', options: ['Weights are updated using the gradient', 'Input propagates through layers to produce a prediction', 'The loss is backpropagated through the network', 'The learning rate is adjusted'], correctIndex: 1, topic: 'Neural Network Basics', explanation: 'The forward pass computes activations layer by layer from input to output. No weights change — it is purely a prediction step.', example: 'Image → pixel values → conv layer activations → FC layer → softmax probabilities. All read-only: weights stay fixed.' },
    { id: 'm1_q3', question: 'In a multi-class classification network, which activation is used in the output layer?', options: ['ReLU', 'Sigmoid', 'Tanh', 'Softmax'], correctIndex: 3, topic: 'Activation Functions', explanation: 'Softmax converts raw logits into a probability distribution summing to 1 across all classes. Sigmoid is for binary classification; ReLU and Tanh are for hidden layers.', example: 'Logits [1.2, 0.3, 2.1] → softmax → [0.25, 0.10, 0.65]. Class 2 gets 65% probability and is the predicted class.' },
    { id: 'm1_q4', question: 'What does increasing the number of hidden layers generally do?', options: ['Always improves accuracy', 'Increases model capacity to learn complex patterns', 'Reduces training time', 'Eliminates the need for activation functions'], correctIndex: 1, topic: 'Neural Network Basics', explanation: 'More layers increase representational capacity — the network can model more complex functions. However, this also risks overfitting and makes training harder without proper initialisation and normalisation.', example: '2-layer network struggles to separate a non-linear dataset; a 5-layer network with ReLU separates it cleanly — but may overfit if data is scarce.' },
    { id: 'm1_q5', question: 'What does the loss function measure?', options: ['The number of correctly classified samples', 'The size of the weight matrices', 'The discrepancy between predictions and true labels', 'The depth of the network'], correctIndex: 2, topic: 'Neural Network Basics', explanation: 'The loss quantifies how wrong the model\'s predictions are. Gradient descent minimises this scalar value by adjusting weights. Common losses: MSE (regression), cross-entropy (classification).', example: 'A model predicts 0.2 for class 1 but the true label is 1. Cross-entropy loss = −log(0.2) ≈ 1.61. Perfect prediction (prob = 1.0) gives loss = 0.' },
    { id: 'm1_q6', question: 'What is the effect of a very high learning rate?', options: ['The model converges more smoothly', 'Weight updates overshoot the minimum, causing instability', 'Training takes more epochs', 'The model underfits the training data'], correctIndex: 1, topic: 'Optimisation', explanation: 'A high learning rate makes large weight updates that can jump past the loss minimum, causing the loss to oscillate or diverge rather than decrease.', example: 'Loss plot with lr=1.0: zigzags wildly, never settling. With lr=0.001: smooth descent, plateaus near minimum.' },
  ],
  mat2: [
    { id: 'm2_q1', question: 'What does gradient descent minimise?', options: ['The number of model parameters', 'The learning rate', 'The loss function', 'The batch size'], correctIndex: 2, topic: 'Gradient Descent', explanation: 'Gradient descent updates weights to reduce the loss function. The gradient tells us the direction of steepest increase; we move in the opposite direction.', example: 'Loss = 2.4 at epoch 1. After gradient update: 2.1. After 100 epochs: 0.3. Each step moves weights in the direction that reduces the loss.' },
    { id: 'm2_q2', question: 'How does mini-batch gradient descent differ from stochastic gradient descent?', options: ['Mini-batch uses all data; SGD uses one sample', 'Mini-batch uses a subset of data; SGD uses one sample per update', 'They are identical', 'Mini-batch updates weights more frequently than SGD'], correctIndex: 1, topic: 'Gradient Descent', explanation: 'SGD updates weights after one sample (very noisy). Mini-batch averages the gradient over a small batch (e.g. 32 samples) — reducing noise while still being faster than full-batch GD.', example: 'SGD on 1M samples: 1M weight updates per epoch. Mini-batch (size 256): ~3,900 updates per epoch. Full-batch: 1 update per epoch.' },
    { id: 'm2_q3', question: 'What is the main advantage of Adam over vanilla SGD?', options: ['Adam uses less memory', 'Adam adapts the learning rate per parameter using gradient history', 'Adam does not need a learning rate', 'Adam converges in fewer epochs always'], correctIndex: 1, topic: 'Optimisers', explanation: 'Adam maintains moving averages of past gradients (first moment) and squared gradients (second moment). This gives each parameter an adaptive effective step size, handling sparse gradients and varying curvature better than fixed-rate SGD.', example: 'With Adam, a rarely updated embedding gets a large step when it does update. A frequently updated weight gets smaller steps as its gradient history accumulates.' },
    { id: 'm2_q4', question: 'What is a learning rate scheduler used for?', options: ['To increase model depth during training', 'To automatically add more training data', 'To decrease or vary the learning rate during training', 'To change the batch size mid-training'], correctIndex: 2, topic: 'Optimisation', explanation: 'A scheduler reduces the learning rate over time (e.g. step decay, cosine annealing). This lets training take large steps initially and fine-tune with small steps as it converges near the minimum.', example: 'lr starts at 0.1, halves every 10 epochs: 0.1 → 0.05 → 0.025 → ... The large initial steps quickly find the basin; small final steps accurately minimise within it.' },
    { id: 'm2_q5', question: 'Why does training loss sometimes oscillate instead of consistently decreasing?', options: ['The model is too small', 'The learning rate is too high or the batch size is too small', 'The dataset has too many classes', 'The activation function is incorrect'], correctIndex: 1, topic: 'Gradient Descent', explanation: 'High learning rates cause large weight updates that overshoot the minimum, creating oscillations. Very small batches (including SGD) introduce gradient noise that causes similar oscillations.', example: 'Training with lr=0.5 on a simple dataset: loss bounces between 0.8 and 2.1. Reducing to lr=0.01: loss smoothly decreases from 2.1 to 0.15.' },
    { id: 'm2_q6', question: 'What is gradient clipping?', options: ['Removing neurons with small gradients', 'Capping the gradient norm before the weight update', 'Zeroing gradients of the last layer', 'Splitting gradients across multiple GPUs'], correctIndex: 1, topic: 'Optimisation', explanation: 'Gradient clipping limits the gradient\'s norm to a maximum value before the update. It prevents the exploding gradient problem, common in RNNs and very deep networks.', example: 'Gradient norm = 15.0 with clip = 1.0: all gradient components are scaled by 1/15. The direction is preserved, but the step is made safe.' },
  ],
  mat3: [
    { id: 'm3_q1', question: 'What is the main advantage of convolutional layers over fully connected layers for image data?', options: ['They are easier to train', 'They use weight sharing, drastically reducing parameters', 'They require no activation functions', 'They produce larger feature maps'], correctIndex: 1, topic: 'CNN Architecture', explanation: 'A single 3×3 filter uses only 9 weights regardless of image size. A fully connected layer on a 256×256 image requires 65,536 weights per output neuron. Weight sharing exploits spatial locality and translation invariance.', example: 'First conv layer of AlexNet: 96 filters of 11×11×3 = 34,848 parameters. Equivalent FC layer on 227×227 image: 227×227×3 × 96 = 14.8 million parameters.' },
    { id: 'm3_q2', question: 'What does "same" padding achieve in a convolutional layer?', options: ['Increases the depth of the output', 'Ensures the output has the same spatial dimensions as the input', 'Removes border pixels to speed up computation', 'Doubles the number of filters'], correctIndex: 1, topic: 'CNN Architecture', explanation: 'Same padding adds zeros around the input so that the filter, even at edge positions, produces output at every location. Without padding, convolution shrinks the spatial dimensions by (filter_size − 1).', example: '5×5 input, 3×3 filter, no padding: output is 3×3. With same padding: output is still 5×5. This is important for preserving resolution in deep networks.' },
    { id: 'm3_q3', question: 'What is the purpose of max pooling?', options: ['To increase the number of feature maps', 'To apply non-linearity to the feature map', 'To downsample and retain the most prominent activations', 'To normalise activations across channels'], correctIndex: 2, topic: 'CNN Architecture', explanation: 'Max pooling divides the feature map into windows and takes the maximum value. This reduces spatial dimensions, decreasing computation, and provides a degree of translation invariance.', example: '2×2 max pool on a 4×4 feature map → 2×2 output. If an edge detector fires strongly at position (1,1), max pool retains that signal even if the edge shifts to (1,2).' },
    { id: 'm3_q4', question: 'What happens as you go deeper into a CNN?', options: ['Feature maps become larger', 'Features become more abstract and high-level', 'The number of channels decreases', 'Filters become smaller but cover less of the image'], correctIndex: 1, topic: 'CNN Architecture', explanation: 'Early layers detect low-level patterns (edges, colours). Intermediate layers combine them into shapes. Deep layers represent high-level concepts (eyes, wheels). This hierarchy of abstraction is why CNNs work.', example: 'VGG-16: layer 1 detects oriented edges. Layer 7 detects texture patterns. Layer 13 detects dog faces. Final FC layer combines everything for class prediction.' },
    { id: 'm3_q5', question: 'What is the role of the flatten layer in a CNN?', options: ['To apply pooling across all channels', 'To convert 2D feature maps into a 1D vector for the FC layer', 'To normalise feature maps', 'To add more convolutional filters'], correctIndex: 1, topic: 'CNN Architecture', explanation: 'After the last pooling layer, the 3D tensor (H×W×C) must be reshaped into a 1D vector before it can be fed into fully connected layers, which expect flat input.', example: 'Final feature maps: 7×7×512 = 25,088 values. Flatten: [25088]. FC layer then applies a 25088×4096 weight matrix to map this to class logits.' },
    { id: 'm3_q6', question: 'What is transfer learning in CNNs?', options: ['Training a network from scratch with a very high learning rate', 'Reusing a pre-trained CNN\'s weights as a starting point for a new task', 'Transferring weights between all layers of two different networks', 'Moving training from CPU to GPU'], correctIndex: 1, topic: 'Transfer Learning', explanation: 'Pre-trained CNNs (e.g. ResNet on ImageNet) have learned rich, reusable features. Transfer learning adapts these to new tasks by fine-tuning upper layers while keeping lower layers fixed, requiring far less data and compute.', example: 'Classifying dog breeds: start from ResNet50 trained on ImageNet. Freeze layers 1–40, replace final FC layer, train on 5,000 dog images for 10 epochs. Achieves 92% accuracy vs 74% from scratch.' },
  ],
  mat4: [
    { id: 'm4_q1', question: 'What is the purpose of a validation set?', options: ['To provide additional training data', 'To tune hyperparameters without biasing the final test evaluation', 'To replace the test set', 'To measure the model\'s training loss'], correctIndex: 1, topic: 'ML Workflow', explanation: 'The validation set is used to select hyperparameters and monitor training. The test set is held out completely until the final evaluation — using it during tuning would give an optimistically biased result.', example: 'After 20 experiments tuning learning rate on the dev set, the best model is evaluated once on the test set. If the test set was used throughout, reported accuracy would be inflated.' },
    { id: 'm4_q2', question: 'What is weight initialisation and why does it matter?', options: ['Setting all weights to 1 to start training quickly', 'Choosing initial weight values to prevent vanishing/exploding signals', 'Copying weights from a previous run', 'Initialising all weights to the learning rate'], correctIndex: 1, topic: 'Neural Network Training', explanation: 'Poor initialisation (all zeros: all neurons learn identically; too large: exploding activations) prevents effective training. Xavier and He initialisation set variance based on layer size, keeping signals in a stable range across layers.', example: 'All-zero init: every neuron in a layer has identical gradients and learns the same feature — the network is equivalent to width 1. He init with variance 2/n: signals propagate stably through 100+ layers.' },
    { id: 'm4_q3', question: 'What is the orthogonalisation principle in ML?', options: ['Using orthogonal weight matrices', 'Separately addressing underfitting, overfitting, and distribution mismatch with distinct tools', 'Training on orthogonal datasets', 'Ensuring all hyperparameters are independent'], correctIndex: 1, topic: 'ML System Design', explanation: 'Andrew Ng\'s orthogonalisation principle: use separate "knobs" for each problem. High training error → bigger model or longer training. High dev error → regularisation, more dev data. Test error high → more test data.', example: 'Adding dropout when training error is high is wrong — dropout hurts fitting ability. First fix training error (less regularisation, bigger model), then fix generalisation separately.' },
    { id: 'm4_q4', question: 'What is the difference between fine-tuning and feature extraction in transfer learning?', options: ['Fine-tuning only trains the output layer; feature extraction trains all layers', 'Feature extraction freezes all pre-trained weights; fine-tuning unfreezes some upper layers', 'They are the same technique', 'Fine-tuning requires more data than feature extraction'], correctIndex: 1, topic: 'Transfer Learning', explanation: 'Feature extraction: the pre-trained network is a frozen feature extractor; only the new classification head is trained. Fine-tuning: after adding the new head, the upper pre-trained layers are also unfrozen and trained at a low learning rate.', example: 'Medical imaging with 200 images: feature extraction only (avoid overfitting pre-trained weights with so little data). With 10,000 images: fine-tune upper layers too for domain-specific adaptation.' },
    { id: 'm4_q5', question: 'What causes the vanishing gradient problem?', options: ['Using too many training samples', 'Activation function derivatives near 0 compound through many layers', 'A learning rate that is too high', 'Using batch normalisation'], correctIndex: 1, topic: 'Neural Network Training', explanation: 'Sigmoid and Tanh derivatives are at most ~0.25. Multiplied across L layers, the gradient at layer 1 ≈ 0.25^L ≈ 0 for large L. Early layers receive near-zero gradients and fail to learn.', example: '10-layer sigmoid network. Gradient at last layer: 0.5. After backpropagating 9 more layers: 0.5 × 0.25⁹ ≈ 0.0000002. Layer 1 barely updates.' },
    { id: 'm4_q6', question: 'What does batch normalisation do to training?', options: ['Reduces the number of layers needed', 'Normalises activations per mini-batch, stabilising training and enabling higher learning rates', 'Doubles the training speed by halving the batch size', 'Replaces dropout as a regulariser'], correctIndex: 1, topic: 'Neural Network Training', explanation: 'BN normalises each layer\'s input distribution (zero mean, unit variance), then applies learnable scale/shift. This prevents internal covariate shift, allows faster learning rates, and acts as mild regularisation.', example: 'ResNet without BN: must use lr ≤ 0.0001 to stay stable. With BN: can use lr = 0.01, converging 10× faster. The stable input distributions mean each layer can learn independently.' },
  ],
  // sub2: Algorithms & Data Structures
  mat5: [
    { id: 'm5_q1', question: 'What is the time complexity of merge sort?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], correctIndex: 1, topic: 'Sorting', explanation: 'Merge sort divides the array in half (log n levels) and merges at each level in O(n). The total is O(n log n) in all cases — best, average, and worst.', example: 'Sorting 1M elements: merge sort ≈ 20M operations. Bubble sort ≈ 500B operations. For n=10: merge sort and insertion sort are comparable; merge\'s advantage grows with n.' },
    { id: 'm5_q2', question: 'Which sorting algorithm is best for nearly-sorted data?', options: ['Merge sort', 'Quicksort', 'Insertion sort', 'Heap sort'], correctIndex: 2, topic: 'Sorting', explanation: 'Insertion sort is O(n) on nearly-sorted data — it only needs to shift each element a small number of positions. Merge and heap sort are always O(n log n) even on nearly-sorted input.', example: 'Array [1,2,3,5,4,6,7]: insertion sort makes just 1 swap and scans O(n). Merge sort still performs all its divide-and-merge steps: O(n log n).' },
    { id: 'm5_q3', question: 'What is the worst-case time complexity of quicksort?', options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], correctIndex: 2, topic: 'Sorting', explanation: 'Quicksort degrades to O(n²) when the pivot always splits the array into 1 and n−1 elements — e.g. choosing the first element as pivot on an already-sorted array. Randomised pivot selection makes this extremely unlikely.', example: 'Sorted array [1,2,3,...,100] with first-element pivot: 100 recursion levels each scanning O(n). Total: 100×100/2 = 5050 comparisons ≈ O(n²). With random pivot: O(n log n) expected.' },
    { id: 'm5_q4', question: 'What does "stable" mean for a sorting algorithm?', options: ['It always runs in the same time', 'Equal elements maintain their original relative order', 'It uses O(1) extra memory', 'It handles duplicate keys in O(1) time'], correctIndex: 1, topic: 'Sorting', explanation: 'A stable sort preserves the relative position of equal elements. This matters when sorting by multiple keys: sort by name, then by age — stability keeps the name-order within each age group.', example: 'Records: (Alice, 25), (Bob, 25), (Carol, 30). Sorted stably by age: (Alice, 25), (Bob, 25), (Carol, 30). Unstably: Bob might appear before Alice despite original order.' },
    { id: 'm5_q5', question: 'What is the space complexity of merge sort?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctIndex: 2, topic: 'Sorting', explanation: 'Merge sort requires an auxiliary array of size n for the merge step. This O(n) extra space is its main disadvantage vs. in-place algorithms like heapsort.', example: 'Merging [1,3,5] and [2,4,6]: needs a buffer to hold the merged result before copying back. For 1M elements, this buffer costs ~8 MB for 8-byte integers.' },
    { id: 'm5_q6', question: 'Which sorting algorithm has O(n) time complexity for integer keys in a small range?', options: ['Merge sort', 'Counting sort', 'Quicksort', 'Heap sort'], correctIndex: 1, topic: 'Sorting', explanation: 'Counting sort counts occurrences of each value, then reconstructs the sorted output. It breaks the O(n log n) lower bound for comparison sorts because it doesn\'t use comparisons.', example: 'Sorting 1M integers in range [0, 100]: counting sort uses a 101-element count array, fills it in O(n), then outputs sorted values in O(n + k) = O(n). Merge sort would take O(n log n).' },
  ],
  mat6: [
    { id: 'm6_q1', question: 'Which data structure is used to implement BFS?', options: ['Stack', 'Priority queue', 'Queue', 'Hash map'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'BFS explores nodes level by level. A queue (FIFO) ensures that all nodes at distance d are processed before any at distance d+1. A stack would give DFS behaviour instead.', example: 'Graph: A→B, A→C, B→D. BFS from A: enqueue A, dequeue A → enqueue B,C; dequeue B → enqueue D; dequeue C; dequeue D. Order: A,B,C,D.' },
    { id: 'm6_q2', question: 'What is the time complexity of BFS and DFS on a graph?', options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'Both BFS and DFS visit every vertex once (O(V)) and traverse every edge once (O(E)). The total is O(V + E) — linear in the size of the graph representation.', example: 'Graph with 1000 vertices and 5000 edges: BFS/DFS performs ~6000 operations. Naïve algorithms visiting all V×V pairs: 1,000,000 operations.' },
    { id: 'm6_q3', question: 'When is topological sort applicable?', options: ['Any graph', 'Undirected graphs only', 'Directed acyclic graphs (DAGs) only', 'Graphs with weighted edges only'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'Topological sort requires a DAG. A cycle means there is no valid ordering (A must come before B, B before C, C before A — impossible). Detecting cycles is part of the algorithm.', example: 'Build dependencies: A requires B and C; B requires D. Topological order: D, B, C, A — every dependency is built before what needs it. A cycle like A requires B, B requires A is impossible to order.' },
    { id: 'm6_q4', question: 'What is the main constraint for Dijkstra\'s algorithm?', options: ['The graph must be undirected', 'All edge weights must be non-negative', 'The graph must be a tree', 'The graph must have a single source'], correctIndex: 1, topic: 'Graph Algorithms', explanation: 'Dijkstra\'s greedy approach assumes that once a node is visited with the shortest path, it cannot be improved. Negative edges violate this — a later path via a negative edge might be shorter. Use Bellman-Ford for negative weights.', example: 'Graph: A→B (weight 5), A→C (weight 2), C→B (weight −4). Dijkstra: visits B with cost 5 too early; actual shortest path is A→C→B = −2. Dijkstra gives the wrong answer.' },
    { id: 'm6_q5', question: 'What is the difference between a tree and a graph?', options: ['Trees have cycles; graphs do not', 'A tree is a connected acyclic undirected graph with exactly V−1 edges', 'Graphs have exactly one path between any two nodes', 'Trees can have multiple edges between the same pair of nodes'], correctIndex: 1, topic: 'Graph Theory', explanation: 'A tree is a special graph: connected, undirected, no cycles, and V−1 edges. Every pair of vertices is connected by exactly one path. Removing any edge disconnects it; adding any edge creates a cycle.', example: 'Graph with V=5, E=4 that is connected and has no cycles = a tree. Add one edge: creates a cycle. Remove one edge: splits into two components.' },
    { id: 'm6_q6', question: 'What is an adjacency list most suitable for?', options: ['Dense graphs where most pairs of vertices are connected', 'Sparse graphs where E << V²', 'Graphs that change structure frequently', 'Graphs that need O(1) edge lookup'], correctIndex: 1, topic: 'Graph Representations', explanation: 'Adjacency lists use O(V + E) space, efficient when E << V². For dense graphs (E ≈ V²), an adjacency matrix uses similar space but offers O(1) edge lookup. Most real-world graphs (social networks, road maps) are sparse.', example: 'Social network with 1B users and 5B connections: E/V² ≈ 0.000000005 (extremely sparse). Adjacency matrix: 10¹⁸ entries — impossibly large. Adjacency list: 6B entries — manageable.' },
  ],
  mat7: [
    { id: 'm7_q1', question: 'What are the two key properties a problem must have for DP to apply?', options: ['Sorted input and distinct values', 'Overlapping subproblems and optimal substructure', 'Polynomial time and non-negative weights', 'Linear recurrence and bounded input'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'Overlapping subproblems: the same subproblems recur multiple times. Optimal substructure: the optimal solution is built from optimal sub-solutions. Both must hold for DP to give correct, efficient results.', example: 'Fibonacci: fib(5) calls fib(3) twice — overlapping. fib(5) = fib(4) + fib(3): decomposing is correct. Without DP, naïve recursion recomputes fib(3) exponentially many times.' },
    { id: 'm7_q2', question: 'What is the difference between top-down and bottom-up DP?', options: ['Top-down is iterative; bottom-up is recursive', 'Top-down uses recursion with memoisation; bottom-up fills a table iteratively', 'Top-down is faster; bottom-up uses more memory', 'They always produce different results'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'Top-down (memoisation): write the natural recursion, cache results. Easy to implement but has function call overhead. Bottom-up (tabulation): fill a DP table from base cases upward. No recursion overhead, better cache performance.', example: 'Fibonacci top-down: memo[n] = memo[n-1] + memo[n-2] (recursive, cached). Bottom-up: fill dp[0]=0, dp[1]=1, dp[i]=dp[i-1]+dp[i-2] iteratively. Same result, bottom-up is faster in practice.' },
    { id: 'm7_q3', question: 'What is the time complexity of the 0/1 Knapsack DP solution?', options: ['O(n)', 'O(n log n)', 'O(nW)', 'O(2ⁿ)'], correctIndex: 2, topic: 'Dynamic Programming', explanation: 'The DP table has n × W entries (n items, W capacity), and each entry takes O(1) to compute. Total: O(nW). Note: W can be large (pseudo-polynomial), so this is not truly polynomial in the input size.', example: 'n=100 items, W=1000 capacity: DP table has 100,000 cells. Each takes O(1) to fill. Total: 100,000 operations vs brute-force 2¹⁰⁰.' },
    { id: 'm7_q4', question: 'When should DP be preferred over a greedy algorithm?', options: ['When the problem has a small input size', 'When local optimal choices do not guarantee a globally optimal solution', 'When the problem has no optimal substructure', 'When the recursion tree has no overlapping subproblems'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'Greedy works when each local choice is safe — it never needs to be undone. When future choices affect the value of current choices, greedy fails and DP is needed to explore all sub-options.', example: 'Coin change with coins {1,3,4} and target 6: greedy picks 4+1+1=3 coins. DP finds 3+3=2 coins. Greedy failed because picking 4 locally looked best but globally was worse.' },
    { id: 'm7_q5', question: 'What is the LCS (Longest Common Subsequence) time complexity?', options: ['O(m + n)', 'O(m × n)', 'O(m log n)', 'O(2^(m+n))'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'The DP table has m × n entries for strings of length m and n. Each is filled in O(1). Total: O(mn). Naïve recursion without memoisation is O(2^(m+n)) due to exponential branching.', example: 'LCS of two 1000-character strings: DP fills a 1000×1000 = 1M cell table in milliseconds. Without DP: 2^2000 recursive calls — computationally impossible.' },
    { id: 'm7_q6', question: 'What defines the "state" in a DP formulation?', options: ['The number of recursive calls made so far', 'The parameters that uniquely identify a subproblem', 'The size of the DP table', 'The base case of the recursion'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'The state captures everything needed to solve a subproblem. Defining states correctly is the core DP design challenge. The table dimensions equal the number of state variables.', example: 'Knapsack: state = (item index i, remaining capacity w). Fully specifies one subproblem. LCS: state = (i, j) = positions in both strings. Edit distance: state = (i, j) = prefixes of both strings.' },
  ],
  mat8: [
    { id: 'm8_q1', question: 'What is the time complexity of binary search?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], correctIndex: 1, topic: 'Complexity Analysis', explanation: 'Binary search halves the search space with each comparison. Starting from n elements, after k comparisons the space is n/2^k. When n/2^k = 1, k = log₂(n). So it runs in O(log n).', example: 'Searching 1,000,000 elements: binary search needs at most log₂(1M) ≈ 20 comparisons. Linear search needs up to 1,000,000.' },
    { id: 'm8_q2', question: 'What is the purpose of Big-O notation?', options: ['To give the exact number of operations', 'To measure memory usage', 'To describe the growth rate of an algorithm\'s time as input grows', 'To compare algorithms for a fixed input size'], correctIndex: 2, topic: 'Complexity Analysis', explanation: 'Big-O describes asymptotic behaviour — how time or space scales as n → ∞. It ignores constants and lower-order terms, giving a machine-independent characterisation useful for comparing algorithms at scale.', example: 'Algorithm A: 100n operations. Algorithm B: n² operations. For n=10, A=1000, B=100 — B looks better! For n=10000: A=1M, B=100M. Big-O correctly predicts A (O(n)) beats B (O(n²)) at scale.' },
    { id: 'm8_q3', question: 'What is the amortised cost of inserting into a dynamic array?', options: ['O(n) per insertion', 'O(log n) per insertion', 'O(1) amortised per insertion', 'O(n²) total for n insertions'], correctIndex: 2, topic: 'Complexity Analysis', explanation: 'Most insertions are O(1). When the array doubles (copying n elements), that O(n) cost is spread over the n insertions that filled it: O(n)/n = O(1) amortised.', example: 'Insert 8 elements into a dynamic array. Sizes: 1,2,4,8. Copies: 0+0+1+2+4 = 7. Total work: 15 operations for 8 inserts = ~1.9 per insert. Amortised O(1).' },
    { id: 'm8_q4', question: 'Which complexity class is generally considered the practical limit for efficient algorithms?', options: ['O(n!)', 'O(2ⁿ)', 'O(n³)', 'O(n log n)'], correctIndex: 3, topic: 'Complexity Analysis', explanation: 'O(n log n) is achievable by efficient algorithms (sorting, FFT, many divide-and-conquer methods) and scales well to large inputs. O(n²) and above become impractical for n > ~10⁵ in time-critical applications.', example: 'n = 10⁶: O(n log n) ≈ 20M ops (fast). O(n²) = 10¹² ops (hours). O(n³) = 10¹⁸ ops (centuries). O(n log n) is the sweet spot for most practical sorting and searching.' },
    { id: 'm8_q5', question: 'What does Ω (Big-Omega) notation mean?', options: ['Upper bound on worst-case time', 'Lower bound on best-case time', 'Exact asymptotic time', 'Upper bound on average-case time'], correctIndex: 1, topic: 'Complexity Analysis', explanation: 'Ω gives an asymptotic lower bound. An algorithm that is Ω(n log n) requires at least c·n log n operations for large enough n on some inputs. For comparison-based sorting, the lower bound is Ω(n log n).', example: 'Any comparison-based sorting algorithm must make Ω(n log n) comparisons in the worst case (proven via decision trees). No algorithm can sort by comparisons faster than this.' },
    { id: 'm8_q6', question: 'What is the space complexity of a recursive DFS on a graph?', options: ['O(1)', 'O(V)', 'O(E)', 'O(V²)'], correctIndex: 1, topic: 'Complexity Analysis', explanation: 'Recursive DFS has a call stack up to V deep (following a path of length V). At each level, only a constant amount of data is stored. Total stack space: O(V).', example: 'Graph: linear chain A→B→C→...→Z (26 nodes). DFS recursion goes 26 levels deep. Stack holds 26 frames. O(V) space. For a star graph (V=26), DFS goes only 2 levels deep — but still O(V) in the worst case.' },
  ],
  mat9: [
    { id: 'm9_q1', question: 'What is the time complexity of searching in a balanced BST?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], correctIndex: 1, topic: 'Trees', explanation: 'In a balanced BST (height = O(log n)), each comparison eliminates half the remaining candidates. With n nodes and height log n, a search takes at most log n comparisons.', example: 'BST with 1M nodes, balanced (height ≈ 20): search finds any value in ≤ 20 comparisons. An unbalanced BST with the same data but inserted in sorted order has height 1M — search is O(n).' },
    { id: 'm9_q2', question: 'What property distinguishes a BST from a general binary tree?', options: ['BSTs must be complete', 'BSTs have at most 2 children per node', 'BSTs satisfy the ordering property: left < root < right for every subtree', 'BSTs must be balanced'], correctIndex: 2, topic: 'Trees', explanation: 'The BST property is the ordering invariant: for every node, all values in its left subtree are smaller, and all values in its right subtree are larger. This enables O(log n) search. Without it, we have just a binary tree with no search advantage.', example: 'Is this a BST? Root=8, left=3 (with subtree max 7), right=10 (with subtree min 9). Yes — 3 < 8 < 10 and all subtree values satisfy the constraint.' },
    { id: 'm9_q3', question: 'What does in-order traversal of a BST produce?', options: ['Nodes in insertion order', 'Nodes in descending order', 'Nodes in ascending sorted order', 'Nodes by level'], correctIndex: 2, topic: 'Tree Traversals', explanation: 'In-order traversal (left → root → right) on a BST visits nodes in non-decreasing key order. This is because the BST property ensures the left subtree contains smaller values and the right subtree larger values.', example: 'BST with values {5, 3, 7, 1, 4}: in-order visits 1 → 3 → 4 → 5 → 7. This is the sorted sequence. Pre-order (root first) would give 5 → 3 → 1 → 4 → 7.' },
    { id: 'm9_q4', question: 'What is the heap property for a max-heap?', options: ['Each node is smaller than its children', 'Each node is greater than or equal to its children', 'The tree is a BST', 'All leaf nodes have the same depth'], correctIndex: 1, topic: 'Heaps', explanation: 'In a max-heap, every node\'s value is ≥ both its children\'s values. This guarantees the root is always the maximum element. Min-heap is the reverse: each node is ≤ its children.', example: 'Max-heap: root = 90, children = 70, 80. Their children: 40, 60, 50, 75. Valid — every node ≥ children. Peek max: O(1). Extract max: O(log n) after restructuring.' },
    { id: 'm9_q5', question: 'What is the time complexity of building a binary heap from n elements?', options: ['O(n log n)', 'O(n)', 'O(log n)', 'O(n²)'], correctIndex: 1, topic: 'Heaps', explanation: 'Naïve approach (insert n times): O(n log n). Floyd\'s build-heap algorithm works bottom-up, applying sift-down from the last internal node upward. The total work is O(n) because most nodes are near the bottom and require few sift-down steps.', example: 'Build-heap on [3,1,4,1,5,9,2,6]: start from last internal node (index 3), sift down each. Total comparisons ≈ 2n (linear). Inserting 8 elements one at a time: ≈ n log n comparisons.' },
    { id: 'm9_q6', question: 'What is an AVL tree and how does it maintain balance?', options: ['A BST where all leaves are at the same depth', 'A self-balancing BST where each node\'s subtrees differ in height by at most 1, maintained via rotations', 'A heap that satisfies the BST property', 'A BST with at most 3 children per node'], correctIndex: 1, topic: 'Trees', explanation: 'AVL trees track the height difference (balance factor) at every node. If an insertion or deletion makes this difference > 1, single or double rotations rebalance the tree. This keeps height at O(log n), guaranteeing O(log n) for all operations.', example: 'Insert into AVL in sorted order (1,2,3,...): after inserting 3, the root\'s right subtree has height 2, left height 0 — unbalanced. Left rotation on root gives balanced tree of height 1.' },
  ],
}

// ── Generic rotating sets (4 per subject) for "New Flashcards" / "New Test" ──
// Selected by: sets[existingCount % 4]  so each new creation uses a different theme.

export const genericFlashcardSets = {
  sub1: [
    // Set 0 – Neural Network Fundamentals
    [
      { question: 'What is the universal approximation theorem?', answer: 'A network with at least one hidden layer and enough neurons can approximate any continuous function to arbitrary accuracy — given the right weights.' },
      { question: 'What is the difference between width and depth in a neural network?', answer: 'Width = neurons per layer (captures feature diversity). Depth = number of layers (builds hierarchical abstractions). Deep networks are more parameter-efficient for complex functions.' },
      { question: 'What is the perceptron?', answer: 'The simplest neural network unit: computes a weighted sum of inputs plus bias, applies a threshold. Can only classify linearly separable data.' },
      { question: 'What is the symmetry problem in initialisation?', answer: 'If all weights start equal, all neurons in a layer compute identical functions and receive identical gradients — they never diversify. Random initialisation breaks this symmetry.' },
      { question: 'What is the sigmoid activation function?', answer: 'f(x) = 1/(1+e⁻ˣ). Squashes output to (0,1). Suffers from vanishing gradients for large |x|; rarely used in hidden layers today, but common in binary output neurons.' },
      { question: 'What is a multi-layer perceptron (MLP)?', answer: 'A fully connected feedforward network with one or more hidden layers and non-linear activations. The foundational "deep" architecture, used as a baseline for many tasks.' },
      { question: 'What is the difference between classification and regression outputs?', answer: 'Classification: predicts discrete class labels — output uses softmax (multi-class) or sigmoid (binary). Regression: predicts continuous values — output is a linear neuron, loss is MSE.' },
      { question: 'What is Tanh and how does it compare to Sigmoid?', answer: 'f(x) = (eˣ − e⁻ˣ)/(eˣ + e⁻ˣ). Range (−1, 1), zero-centred unlike sigmoid. Still suffers vanishing gradients at saturation, but is preferable to sigmoid in hidden layers when activation needs to be centred.' },
      { question: 'What is the role of the bias in the output layer?', answer: 'The bias shifts the decision boundary independently of inputs. In the output layer, it lets the model adjust its baseline prediction — e.g. predicting the mean output even when all features are zero.' },
      { question: 'What is the difference between a shallow and a deep neural network?', answer: 'Shallow: one hidden layer (can approximate any function but may need exponentially many neurons). Deep: multiple hidden layers that build progressively abstract representations with fewer total parameters.' },
    ],
    // Set 1 – Gradient Descent & Optimisation
    [
      { question: 'What is a saddle point in the loss landscape?', answer: 'A point where the gradient is zero but is neither a minimum nor maximum — some directions curve up, others down. Common in deep networks; gradient descent with noise often escapes them.' },
      { question: 'What is learning rate warmup?', answer: 'Starting with a very small learning rate and gradually increasing it over the first few steps. Prevents large, destabilising updates when weights are randomly initialised.' },
      { question: 'What is weight decay and how does it relate to L2 regularisation?', answer: 'Weight decay adds λ·w to the gradient update, shrinking weights each step. Mathematically equivalent to L2 regularisation (λΣw² added to the loss). Prevents weights from growing unchecked.' },
      { question: 'What is gradient accumulation?', answer: 'Accumulating gradients over multiple mini-batches before performing one weight update. Simulates a larger effective batch size when GPU memory is the bottleneck.' },
      { question: 'What is cosine annealing?', answer: 'A learning rate schedule that follows a cosine curve from the initial value down to near zero. Provides smooth reduction; often used with warm restarts to escape local minima.' },
      { question: 'What is the loss landscape?', answer: 'The multi-dimensional surface mapping each possible weight configuration to its loss value. Training navigates this surface, ideally finding a flat, low-loss region that generalises well.' },
      { question: 'What is the difference between a convex and non-convex loss?', answer: 'Convex: any local minimum is global (e.g. linear regression MSE) — gradient descent is guaranteed to find it. Non-convex: multiple local minima exist (deep networks). No convergence guarantee to the global minimum.' },
      { question: 'What is the momentum hyperparameter?', answer: 'A scalar β (typically 0.9) in momentum-based optimisers. Controls how much of the previous velocity is retained. Higher β → more smoothing, slower direction changes.' },
      { question: 'What is the role of the second moment in Adam?', answer: 'Adam tracks the exponential moving average of squared gradients (second moment). This estimates the gradient\'s variance, giving parameters with noisy gradients smaller effective learning rates.' },
      { question: 'What is the difference between batch and online learning?', answer: 'Batch: model sees all data before updating (one pass = one update). Online: model updates after each sample. Mini-batch gradient descent is a practical middle ground used in almost all deep learning.' },
    ],
    // Set 2 – Regularisation & Evaluation
    [
      { question: 'What is data augmentation and what is its purpose?', answer: 'Generating new training samples by applying random transforms (flip, crop, rotate, colour jitter) to existing data. Effectively increases dataset size without collecting new samples, improving generalisation.' },
      { question: 'What is k-fold cross-validation?', answer: 'Splitting data into k equal folds, training on k−1 and validating on the remaining fold, rotating k times. The average performance gives a more reliable estimate than a single train/val split.' },
      { question: 'What is the ROC curve and AUC?', answer: 'ROC plots True Positive Rate vs False Positive Rate at all classification thresholds. AUC (area under the curve) summarises overall discrimination ability — 1.0 = perfect, 0.5 = random.' },
      { question: 'What is model capacity and how should it be chosen?', answer: 'The complexity of functions a model can represent (determined by depth, width, etc.). Should be matched to dataset size and task complexity — too high risks overfitting, too low risks underfitting.' },
      { question: 'What is the difference between accuracy and F1 score?', answer: 'Accuracy = correct predictions / total. F1 = harmonic mean of precision and recall. F1 is more informative for imbalanced datasets where a model can score high accuracy by predicting the majority class always.' },
      { question: 'What is a held-out test set and why must it not be used during development?', answer: 'A fixed set of examples used only for the final evaluation. Using it during training or hyperparameter tuning causes data leakage — reported performance would be optimistically biased.' },
      { question: 'What is the difference between L1 and L2 regularisation in terms of sparsity?', answer: 'L1 (|w| penalty) drives weights exactly to zero → sparse models, implicit feature selection. L2 (w² penalty) shrinks all weights toward zero but rarely to exactly zero → distributed representations.' },
      { question: 'What is a confusion matrix?', answer: 'A table with rows = actual classes, columns = predicted classes. Diagonal = correct predictions. Off-diagonal entries reveal specific types of misclassification (e.g. class A predicted as class B).' },
      { question: 'What is early stopping?', answer: 'Halting training when validation loss stops improving, then restoring the best checkpoint. A cheap, effective regularisation technique that prevents the model from memorising the training set.' },
      { question: 'What is precision and recall?', answer: 'Precision = TP/(TP+FP): of all predicted positives, how many are correct? Recall = TP/(TP+FN): of all actual positives, how many did we catch? The right metric depends on whether false positives or false negatives are costlier.' },
    ],
    // Set 3 – Deep Learning Architectures
    [
      { question: 'What is a residual (skip) connection?', answer: 'A shortcut that adds the layer\'s input directly to its output: y = F(x) + x. Allows gradients to flow directly through the network, enabling training of very deep architectures (ResNet-50, 152, etc.).' },
      { question: 'What is the transformer architecture?', answer: 'A sequence model based entirely on multi-head self-attention and feed-forward layers — no recurrence. Processes all positions in parallel. Foundation of modern NLP (BERT, GPT, T5).' },
      { question: 'What is self-attention?', answer: 'Each element in a sequence queries every other element. Attention weights indicate relevance. Output for each position is a weighted sum of all values. Captures long-range dependencies without recurrence.' },
      { question: 'What is an LSTM and what problem does it solve?', answer: 'Long Short-Term Memory: adds input, forget, and output gates to a recurrent cell. Gates learn what to remember and what to discard, solving the vanishing gradient problem of vanilla RNNs.' },
      { question: 'What is an autoencoder?', answer: 'Encoder compresses input to a low-dimensional latent space; decoder reconstructs the input. The bottleneck forces the model to learn the most important features. Used for compression, denoising, anomaly detection.' },
      { question: 'What is a GAN?', answer: 'A generator and discriminator trained adversarially: the generator tries to create realistic samples; the discriminator tries to distinguish real from fake. The generator improves until the discriminator cannot tell them apart.' },
      { question: 'What is the difference between discriminative and generative models?', answer: 'Discriminative: models P(y|x) — learns the boundary between classes (e.g. CNN, logistic regression). Generative: models P(x,y) — learns how data is distributed (e.g. GAN, VAE, language model).' },
      { question: 'What is batch size and how does it affect generalisation?', answer: 'Large batches: stable gradient estimates, fast hardware utilisation, but tend to converge to sharp (less-generalisable) minima. Small batches: noisier gradients act as implicit regularisation and may find flatter minima.' },
      { question: 'What is an embedding layer?', answer: 'Converts discrete tokens (words, categories) into dense real-valued vectors. Each token is mapped to a row in a learnable weight matrix. Embeddings capture semantic relationships in continuous space.' },
      { question: 'What is positional encoding in transformers?', answer: 'Transformers have no built-in notion of order. Positional encodings add position-dependent signals (sinusoidal or learned) to token embeddings so the model can distinguish the sequence order.' },
    ],
  ],
  sub2: [
    // Set 0 – Sorting Deep Dive
    [
      { question: 'What is the information-theoretic lower bound for comparison sorting?', answer: 'Ω(n log n). Sorting n elements has n! possible outcomes; a decision tree needs at least log₂(n!) ≈ n log n leaves. Any comparison-based sort must make at least this many comparisons.' },
      { question: 'What is radix sort and when is it faster than O(n log n)?', answer: 'Processes digits from least to most significant using counting sort at each pass. Time O(nk), where k = digit count. When k = O(log n), it matches comparison sorts; for fixed-width integers it is O(n).' },
      { question: 'What is three-way partitioning in quicksort?', answer: 'Divides the array into < pivot, = pivot, > pivot sections. Dramatically improves performance on data with many duplicates — worst case for standard quicksort but O(n) for all-equal arrays with three-way partition.' },
      { question: 'What is Timsort and why does it power Python and Java\'s sort?', answer: 'Hybrid of merge sort and insertion sort. Detects natural runs in the input and merges them efficiently. O(n log n) worst case, O(n) best case (nearly sorted). Stable. Excellent real-world performance.' },
      { question: 'What is the difference between in-place and out-of-place sorting?', answer: 'In-place: O(1) extra memory (quicksort, heapsort). Out-of-place: requires auxiliary storage (merge sort uses O(n)). In-place saves memory; out-of-place is often simpler and stable.' },
      { question: 'What is bucket sort and when is it optimal?', answer: 'Distributes n elements into k buckets by value range, sorts each bucket (insertion sort), then concatenates. O(n + k) average when input is uniformly distributed. Degrades with skewed distributions.' },
      { question: 'Why is quicksort usually faster than merge sort in practice?', answer: 'Quicksort operates in-place (better cache locality), has lower constant factors, and avoids the memory allocation merge sort requires. Its O(n²) worst case is avoided by randomised pivot selection.' },
      { question: 'What is shell sort?', answer: 'Generalises insertion sort by comparing elements at decreasing gaps. Allows large displacements early, fine-tuning at the end. O(n log² n) with good gap sequences. Simple implementation, useful for medium n.' },
      { question: 'What is external sorting?', answer: 'Sorting datasets too large for RAM using disk. Merge sort is preferred — sequential disk access is orders of magnitude faster than random access. Data is sorted in chunks (runs) then merged.' },
      { question: 'What is counting sort and what is its complexity?', answer: 'Counts occurrences of each distinct value, then reconstructs the sorted output. O(n + k) where k is the value range. Not comparison-based — breaks the Ω(n log n) lower bound for integers in a known range.' },
    ],
    // Set 1 – Advanced Graph Algorithms
    [
      { question: 'What is Bellman-Ford and when must it be used over Dijkstra?', answer: 'Finds shortest paths via dynamic programming over V−1 edge relaxations. O(VE). Required when edges have negative weights — it also detects negative cycles. Dijkstra gives wrong answers on negative-weight graphs.' },
      { question: 'What is A* search?', answer: 'An informed shortest-path search extending Dijkstra with a heuristic h(v) estimating remaining distance. Explores nodes by f(v) = g(v) + h(v). Optimal if h is admissible (never overestimates). Used in pathfinding, games.' },
      { question: 'What is the max-flow problem?', answer: 'Find the maximum amount of flow from source s to sink t in a capacity-constrained graph. Solved by Ford-Fulkerson (DFS augmentation) or Edmonds-Karp (BFS augmentation, O(VE²)). Applications: matching, scheduling, network routing.' },
      { question: 'What is a bipartite graph and how is bipartiteness tested?', answer: 'Vertices split into two sets; all edges go between sets (no edges within a set). No odd-length cycles. BFS/DFS 2-colouring tests bipartiteness in O(V + E): if any edge connects same-colour nodes, it\'s not bipartite.' },
      { question: 'What is an Eulerian circuit?', answer: 'A path that visits every edge exactly once and returns to the start. Exists iff the graph is connected and every vertex has even degree. Contrast with Hamiltonian circuit (every vertex once) — which is NP-complete to determine.' },
      { question: 'What is Floyd-Warshall?', answer: 'All-pairs shortest paths DP algorithm. dp[i][j][k] = shortest path from i to j using only vertices 1..k as intermediates. Time O(V³), space O(V²). Handles negative edges; detects negative cycles.' },
      { question: 'What is the difference between a spanning tree and a minimum spanning tree?', answer: 'Spanning tree: a subgraph connecting all V vertices with V−1 edges and no cycles. MST: the spanning tree with minimum total edge weight. Kruskal\'s and Prim\'s find MSTs in O(E log E).' },
      { question: 'What is graph coloring?', answer: 'Assign colours to vertices so no two adjacent vertices share a colour, using the minimum number (chromatic number). NP-hard in general. Planar graphs need at most 4 colours (four-color theorem). Used in scheduling, register allocation.' },
      { question: 'What is a strongly connected component?', answer: 'A maximal subgraph where every vertex can reach every other. Found with Kosaraju\'s (two DFS passes) or Tarjan\'s algorithm in O(V + E). Used to simplify directed graphs into DAGs of SCCs.' },
      { question: 'What is the difference between a DFS tree and a DFS forest?', answer: 'DFS tree: produced when DFS from a single source reaches all vertices (connected graph). DFS forest: produced when multiple DFS calls are needed (disconnected graph). Used to classify edges: tree, back, forward, cross.' },
    ],
    // Set 2 – Trees & Advanced Data Structures
    [
      { question: 'What is a red-black tree?', answer: 'A self-balancing BST where nodes are red or black, with rules ensuring no two consecutive red nodes and equal black heights on all root-to-leaf paths. Guarantees O(log n) for all operations. Used in C++ std::map.' },
      { question: 'What is a B-tree and why is it used in databases?', answer: 'A self-balancing tree where nodes hold many keys and have many children (order m). Minimises disk accesses by storing a full disk block per node. Used in file systems and database indexes.' },
      { question: 'What is a trie (prefix tree)?', answer: 'A tree where paths from root to nodes represent prefixes of strings. Search/insert in O(L) for strings of length L. Used for autocomplete, spell checking, IP routing. Space-efficient with compressed tries.' },
      { question: 'What is a segment tree?', answer: 'A binary tree over an array supporting range queries (sum, min, max) and point updates in O(log n). Built in O(n). Essential when many range queries over a mutable array are needed.' },
      { question: 'What is a Fenwick tree (binary indexed tree)?', answer: 'A compact structure for prefix sum queries and point updates in O(log n), using bitwise operations. More cache-friendly than a segment tree but supports fewer operation types.' },
      { question: 'What is a disjoint-set (union-find) data structure?', answer: 'Maintains a collection of disjoint sets. Union: merge two sets. Find: identify which set an element belongs to. With path compression + union by rank: near O(1) amortised per operation. Used in Kruskal\'s MST, cycle detection.' },
      { question: 'What is a splay tree?', answer: 'A self-adjusting BST that moves recently accessed nodes to the root via splay operations. Amortised O(log n) per operation. Excellent for workloads with temporal locality — frequently accessed items stay near the root.' },
      { question: 'What is a van Emde Boas tree?', answer: 'A data structure for integers in universe [0, U). Supports insert, delete, successor in O(log log U) — sublogarithmic. Useful for keys with bounded integer range where this beats O(log n) BSTs.' },
      { question: 'What is the difference between a complete and a perfect binary tree?', answer: 'Complete: all levels filled except the last, which is filled left to right (e.g. a heap). Perfect: every level completely filled, all leaves at the same depth. Perfect implies complete but not vice versa.' },
      { question: 'What is a heap vs a BST for priority queue operations?', answer: 'Heap: insert O(log n), extract-min O(log n), peek-min O(1). BST: same complexities but with larger constants and higher memory overhead. Heap is preferred for pure priority queue use; BST also supports ordered iteration.' },
    ],
    // Set 3 – Dynamic Programming & Complexity
    [
      { question: 'What is the edit distance (Levenshtein distance)?', answer: 'Minimum insertions, deletions, and substitutions to transform one string into another. DP recurrence: if chars match, dp[i][j] = dp[i-1][j-1]; else 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]). O(mn).' },
      { question: 'What is the difference between P and NP?', answer: 'P: problems solvable in polynomial time. NP: problems whose solutions are verifiable in polynomial time. P ⊆ NP. Whether P = NP is unsolved — the most famous open question in theoretical computer science.' },
      { question: 'What is an NP-complete problem?', answer: 'A problem that is in NP and is NP-hard (every NP problem reduces to it). A polynomial solution to any NP-complete problem would solve all NP problems. Examples: SAT, Knapsack (decision), graph coloring.' },
      { question: 'What is the matrix chain multiplication problem?', answer: 'Find the optimal parenthesisation to multiply a chain of matrices, minimising scalar multiplications. DP: dp[i][j] = min cost to multiply matrices i..j. O(n³). Demonstrates that operation order dramatically affects cost.' },
      { question: 'What is the rod-cutting problem?', answer: 'Given a rod of length n and prices for each cut length, find the maximum revenue. dp[i] = max(price[j] + dp[i−j]) for j = 1..i. O(n²). Classic unbounded knapsack variant.' },
      { question: 'What is memoisation vs dynamic programming tabulation?', answer: 'Memoisation (top-down): natural recursion + cache. Avoids computing unneeded subproblems. Tabulation (bottom-up): fill table iteratively from base cases. No recursion overhead, better cache performance.' },
      { question: 'What is the longest increasing subsequence (LIS)?', answer: 'Find the longest strictly increasing subsequence of an array. DP: O(n²). With patience sorting + binary search: O(n log n). Used in diff algorithms, scheduling, and sequence analysis.' },
      { question: 'What is amortised analysis and when is it needed?', answer: 'Amortised analysis computes the average cost per operation over a sequence, accounting for occasional expensive operations. Needed when individual operations have high variance (e.g. dynamic array resize, splay tree access).' },
      { question: 'What is a greedy algorithm and when does it produce optimal solutions?', answer: 'Makes the locally optimal choice at each step without backtracking. Correct when the greedy choice property holds — local optimality implies global optimality. Works for Huffman coding, MST algorithms, activity selection.' },
      { question: 'What is the difference between pseudo-polynomial and polynomial time?', answer: 'Pseudo-polynomial: O(nW) where W is a numeric value, not input size. Exponential in the number of bits of W. Example: Knapsack DP is pseudo-polynomial. Polynomial algorithms are efficient for all input encodings.' },
    ],
  ],
}

export const genericQuestionSets = {
  sub1: [
    // Set 0 – Neural Network Fundamentals
    [
      { id: 'gq1_0_1', question: 'Which property allows neural networks to represent complex non-linear functions?', options: ['Large weight matrices', 'Non-linear activation functions between layers', 'Many output neurons', 'High learning rate'], correctIndex: 1, topic: 'Neural Networks', explanation: 'Activation functions introduce non-linearity after each linear transformation. Without them, any depth of network collapses to a single linear mapping, unable to model non-linear patterns.', example: 'Two linear layers: W₂(W₁x) = (W₂W₁)x — still linear. Add ReLU between them: W₂·max(0, W₁x) — now non-linear and can fit curves.' },
      { id: 'gq1_0_2', question: 'What is the output of a softmax layer for logits [1.0, 2.0, 0.0]?', options: ['[0.33, 0.33, 0.33]', '[0.0, 1.0, 0.0]', 'approximately [0.21, 0.58, 0.21] but not exactly equal thirds', 'approximately [0.21, 0.58, 0.08]'], correctIndex: 3, topic: 'Activation Functions', explanation: 'Softmax: eˢⁱ/Σeˢʲ. e¹ ≈ 2.72, e² ≈ 7.39, e⁰ = 1. Sum ≈ 11.11. Probabilities: 2.72/11.11 ≈ 0.24, 7.39/11.11 ≈ 0.67, 1/11.11 ≈ 0.09. Closest match: roughly [0.21, 0.58, 0.08] in the answer choices.', example: 'The middle class (logit 2.0) has the highest probability. Softmax amplifies differences — a logit advantage of 1 roughly triples the probability due to the exponential.' },
      { id: 'gq1_0_3', question: 'What does increasing a network\'s depth (number of layers) primarily provide?', options: ['Faster training', 'More hierarchical feature abstraction', 'Better optimisation guarantees', 'Fewer required training samples'], correctIndex: 1, topic: 'Neural Networks', explanation: 'Each additional layer can compose features learned by the layer below, building progressively abstract representations. Shallow networks need exponentially more neurons to represent the same functions as deeper ones.', example: 'CNN layer 1: detects edges. Layer 5: combines edges into shapes. Layer 12: recognises object parts. Depth = abstraction hierarchy.' },
      { id: 'gq1_0_4', question: 'Why does initialising all weights to zero prevent a network from learning?', options: ['Zero weights cause NaN gradients', 'All neurons compute identical outputs and receive identical gradients — symmetry is never broken', 'Zero weights make the loss undefined', 'The learning rate has no effect on zero weights'], correctIndex: 1, topic: 'Neural Networks', explanation: 'With all-zero weights, every neuron in a layer computes the same output. Gradients are also identical, so all neurons update identically — the layer is effectively a single neuron, regardless of its stated width.', example: 'Layer with 100 neurons, all weights = 0. After one step: all 100 neurons have the same weight vector. After 1000 steps: still identical. The network has 1 effective neuron, not 100.' },
      { id: 'gq1_0_5', question: 'What is the main disadvantage of sigmoid in hidden layers?', options: ['It cannot handle negative inputs', 'Its derivative saturates to near zero at large |x|, causing vanishing gradients', 'It is too computationally expensive', 'It only works for binary classification'], correctIndex: 1, topic: 'Activation Functions', explanation: 'Sigmoid saturates: for |x| > 4, the derivative σ\'(x) ≈ 0. Backpropagating through many such layers multiplies near-zero derivatives — gradients vanish and early layers stop learning.', example: '5-layer network with sigmoid. Gradient at output: 0.2. After 4 layers: 0.2 × 0.05⁴ ≈ 0.00000125. Layer 1 barely updates.' },
      { id: 'gq1_0_6', question: 'In a feedforward network for 10-class classification, how many output neurons are typically used?', options: ['1', '2', '10', 'log₂(10) ≈ 3'], correctIndex: 2, topic: 'Neural Networks', explanation: 'One output neuron per class, each outputting a logit. Softmax converts these 10 logits into a probability distribution summing to 1. The predicted class is argmax of the probabilities.', example: 'MNIST digit classifier: 10 output neurons (0–9). Output [0.01, 0.02, ..., 0.95, ...]: model predicts class 9 with 95% confidence.' },
    ],
    // Set 1 – Gradient Descent & Optimisation
    [
      { id: 'gq1_1_1', question: 'What is the key mathematical operation in one gradient descent step?', options: ['w ← w + α·∇L', 'w ← w − α·∇L', 'w ← α·∇L', 'w ← w / ∇L'], correctIndex: 1, topic: 'Gradient Descent', explanation: 'We subtract a fraction of the gradient because the gradient points uphill. Moving opposite to the gradient decreases the loss. α scales the step size.', example: 'w = 3.0, ∇L = 0.5, α = 0.1 → w = 3.0 − 0.1×0.5 = 2.95. After many steps, w converges to the minimum.' },
      { id: 'gq1_1_2', question: 'What is the main advantage of Adam over SGD with momentum?', options: ['Adam is always faster to converge', 'Adam requires no learning rate', 'Adam maintains per-parameter adaptive learning rates using both first and second gradient moments', 'Adam avoids all local minima'], correctIndex: 2, topic: 'Optimisers', explanation: 'SGD with momentum tracks one gradient average. Adam tracks both the mean gradient (first moment) and mean squared gradient (second moment), giving each parameter its own adaptive step size.', example: 'Embedding weight updated once per 1000 steps: Adam gives it a large effective step when it does update. Frequent weight: Adam gives it a smaller step as its history accumulates.' },
      { id: 'gq1_1_3', question: 'What happens if the learning rate is set too low?', options: ['The model overfits faster', 'Gradients become NaN', 'Training converges very slowly and may get stuck in a suboptimal region', 'The model always underfits'], correctIndex: 2, topic: 'Gradient Descent', explanation: 'Very small steps mean training takes many more epochs to converge. The model may also stop improving prematurely if it gets stuck in a shallow local minimum that small steps cannot escape.', example: 'lr = 0.000001: after 1000 epochs, loss 1.8 (barely moved). lr = 0.001: after 1000 epochs, loss 0.12. The right learning rate is the most impactful hyperparameter choice.' },
      { id: 'gq1_1_4', question: 'What is the purpose of a learning rate schedule?', options: ['To increase model depth during training', 'To vary the learning rate over time for better convergence', 'To automatically adjust batch size', 'To select the best model checkpoint'], correctIndex: 1, topic: 'Optimisation', explanation: 'Large learning rates early on allow fast progress; smaller rates later allow fine-grained convergence. Schedules like step decay and cosine annealing automate this, improving final performance.', example: 'lr starts 0.1, decays to 0.01 at epoch 30, 0.001 at epoch 60. The model converges to a better minimum than with fixed lr = 0.01 or lr = 0.1.' },
      { id: 'gq1_1_5', question: 'What is gradient clipping used for?', options: ['To speed up backpropagation', 'To prevent exploding gradients by capping the gradient norm', 'To increase the effective batch size', 'To reduce the number of parameters updated'], correctIndex: 1, topic: 'Optimisation', explanation: 'When gradients grow very large (common in RNNs and deep networks), updates overshoot the minimum. Clipping caps the gradient norm at a threshold, preserving direction while making the step safe.', example: 'Gradient norm = 50, clip threshold = 1.0. All gradient values are scaled by 1/50. Step direction unchanged, but magnitude tamed.' },
      { id: 'gq1_1_6', question: 'In mini-batch gradient descent, what determines the noise level of the gradient estimate?', options: ['The learning rate', 'The batch size — smaller batches give noisier estimates', 'The number of layers', 'The choice of activation function'], correctIndex: 1, topic: 'Gradient Descent', explanation: 'A mini-batch is a sample of the full dataset. Smaller samples have higher variance. Very small batches (SGD) are very noisy; very large batches give near-deterministic gradients but lose the regularisation effect of noise.', example: 'Batch size 1: gradient highly variable, training loss zigzags. Batch size 1024: smooth training curve. Both converge, but small batches often generalise better despite the noise.' },
    ],
    // Set 2 – Regularisation & Evaluation
    [
      { id: 'gq1_2_1', question: 'A model achieves 95% training accuracy and 65% test accuracy. What is the most likely issue?', options: ['Underfitting — model is too simple', 'Overfitting — model memorised the training data', 'The test set is too small', 'The learning rate is too low'], correctIndex: 1, topic: 'Overfitting', explanation: 'High training accuracy with much lower test accuracy is the classic overfitting signature. The model memorised training patterns instead of generalising to unseen data.', example: 'Decision tree with no depth limit: 100% training accuracy (memorised every example), 62% test accuracy. Add max_depth = 5: 88% train, 85% test — better generalisation.' },
      { id: 'gq1_2_2', question: 'What is the effect of dropout during inference?', options: ['Dropout randomly zeros neurons, making predictions non-deterministic', 'Dropout is disabled; all neurons are active but outputs are scaled', 'Dropout increases the learning rate at test time', 'Dropout replaces the activation function at test time'], correctIndex: 1, topic: 'Regularisation', explanation: 'During training, dropout zeros a fraction p of neurons. At inference, all neurons are active, but their outputs are multiplied by (1−p) to match the expected activations during training.', example: 'Dropout p=0.5 in training: on average 50% of neurons active. At inference: all neurons active, outputs × 0.5. This preserves the expected activation magnitude.' },
      { id: 'gq1_2_3', question: 'Why is the validation set not used for final model evaluation?', options: ['It is too small to give reliable results', 'Hyperparameters are tuned on it, so performance is optimistically biased', 'It contains the same data as the training set', 'Validation loss is not a good metric'], correctIndex: 1, topic: 'Model Evaluation', explanation: 'Every hyperparameter decision (layer count, dropout rate, learning rate, etc.) is made by observing validation performance. The model is implicitly fitted to the validation set through these choices. Only the untouched test set gives an unbiased estimate.', example: 'After 50 experiments on the dev set, report test set accuracy. If test set had been used: each experiment peeks at test → optimistic bias in reported results.' },
      { id: 'gq1_2_4', question: 'Which regularisation technique is most analogous to training an ensemble of models?', options: ['L2 regularisation', 'Early stopping', 'Dropout', 'Data augmentation'], correctIndex: 2, topic: 'Regularisation', explanation: 'Dropout samples a different sub-network each batch. At inference, the full network approximates the geometric mean of all these sub-networks — similar to a model ensemble, which reduces variance.', example: 'Network with 100 neurons, dropout 0.5: each batch uses a random 50-neuron subnet. With 100 neurons and binary on/off, there are 2¹⁰⁰ possible subnets — a vast implicit ensemble.' },
      { id: 'gq1_2_5', question: 'What does a high AUC (close to 1.0) on an ROC curve indicate?', options: ['The model has a low training loss', 'The model discriminates well between positive and negative classes at all thresholds', 'The model achieves high accuracy', 'The model has no false positives'], correctIndex: 1, topic: 'Model Evaluation', explanation: 'AUC measures the probability that the model ranks a random positive example higher than a random negative one. AUC = 1.0 means perfect separation; AUC = 0.5 means no better than random.', example: 'Cancer screening model AUC = 0.97: 97% of the time, a randomly selected cancer patient is scored higher than a randomly selected healthy patient — strong discrimination.' },
      { id: 'gq1_2_6', question: 'What is the bias-variance tradeoff?', options: ['A model cannot be both fast and accurate', 'Reducing bias (by increasing complexity) tends to increase variance, and vice versa', 'L1 introduces bias while L2 introduces variance', 'The learning rate balances bias and variance'], correctIndex: 1, topic: 'Regularisation', explanation: 'Bias = systematic error from wrong assumptions (underfitting). Variance = sensitivity to training data fluctuations (overfitting). A very flexible model fits training noise (high variance, low bias). A too-simple model misses true patterns (high bias, low variance).', example: 'Linear model on quadratic data: high bias, low variance. 10th-degree polynomial: low bias, high variance. 2nd-degree: both low — the sweet spot.' },
    ],
    // Set 3 – Deep Learning Architectures
    [
      { id: 'gq1_3_1', question: 'What problem do residual (skip) connections primarily solve?', options: ['Overfitting in shallow networks', 'Vanishing gradients and degradation in very deep networks', 'Slow inference in production', 'Large memory consumption'], correctIndex: 1, topic: 'Deep Learning Architectures', explanation: 'In very deep networks, gradients vanish before reaching early layers. Skip connections provide a direct gradient path: ∂L/∂x gets gradient from both the main path and the shortcut, keeping early layers trainable.', example: 'ResNet-152: 152 layers, yet trains effectively because skip connections carry gradients directly. Plain 152-layer network without skips performs worse than a 20-layer network — the degradation problem.' },
      { id: 'gq1_3_2', question: 'What is the key innovation of the transformer over RNNs for sequence modelling?', options: ['Transformers use more parameters', 'Transformers process all sequence positions in parallel via attention, avoiding sequential computation', 'Transformers do not require training data', 'Transformers use convolutional filters on sequences'], correctIndex: 1, topic: 'Transformers', explanation: 'RNNs process sequences step by step — position n must wait for position n−1. Transformers compute attention between all pairs simultaneously. This enables far more parallelism and better captures long-range dependencies.', example: 'RNN on a 1000-token sequence: 1000 sequential steps. Transformer: one parallel forward pass computing all 1000×1000 attention pairs simultaneously. 100× faster on GPU.' },
      { id: 'gq1_3_3', question: 'What does an autoencoder\'s latent space represent?', options: ['The output class probabilities', 'A compressed representation capturing the most important features of the input', 'The gradient of the loss', 'The model\'s training history'], correctIndex: 1, topic: 'Generative Models', explanation: 'The encoder compresses input to a low-dimensional bottleneck. The decoder must reconstruct from this bottleneck, forcing the latent space to capture only the most essential structure. Nearby latent points should decode to similar outputs.', example: 'Autoencoder on faces. Latent space (2D): clusters by age, expression, gender emerge naturally. Interpolating between two latent points generates a smooth morphing between two faces.' },
      { id: 'gq1_3_4', question: 'What is the role of the forget gate in an LSTM?', options: ['It resets the hidden state to zero at each step', 'It decides what fraction of the previous cell state to discard', 'It controls the learning rate for the cell state', 'It prevents gradient flow to earlier time steps'], correctIndex: 1, topic: 'Recurrent Networks', explanation: 'The forget gate: f = σ(Wf·[h_{t−1}, x_t] + b_f). Values near 1 keep the previous cell state; near 0 erase it. The gate learns when to clear irrelevant history, enabling long-range dependencies.', example: 'Parsing "The cat, which was black, sat on the mat." After "black,", the forget gate retains "cat" as the subject and discards intermediate noun phrase info before "sat".' },
      { id: 'gq1_3_5', question: 'How does a GAN\'s training dynamic work?', options: ['Generator and discriminator are trained separately on different datasets', 'Generator and discriminator are trained adversarially: generator to fool, discriminator to detect', 'The discriminator teaches the generator by sharing weights', 'Both networks minimise the same loss function'], correctIndex: 1, topic: 'Generative Models', explanation: 'Generator minimises the probability of the discriminator correctly labelling its outputs as fake. Discriminator maximises its ability to distinguish real from fake. This minimax game drives the generator toward producing realistic samples.', example: 'GAN training on faces. Early epochs: generator outputs blobs; discriminator easily detects them. After 10k epochs: generator produces photorealistic faces; discriminator near 50% (chance level).' },
      { id: 'gq1_3_6', question: 'What is positional encoding and why do transformers need it?', options: ['A technique to normalise attention scores', 'Signals added to token embeddings to encode sequence position, since attention is order-agnostic', 'A way to reduce the number of attention heads', 'A form of dropout applied to positions'], correctIndex: 1, topic: 'Transformers', explanation: 'Self-attention computes relationships between all pairs — but is permutation-invariant. Without positional encoding, "cat sat on mat" and "mat on sat cat" would produce identical attention outputs. Positional encodings break this symmetry.', example: 'Token "bank" at position 3 vs position 10 gets the same embedding but different positional signal added. The model uses this to understand the word appears at different points in context.' },
    ],
  ],
  sub2: [
    // Set 0 – Sorting
    [
      { id: 'gq2_0_1', question: 'What is the worst-case time complexity of merge sort?', options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'], correctIndex: 1, topic: 'Sorting', explanation: 'Merge sort always divides in half (log n levels) and merges in O(n) per level. Unlike quicksort, it has no bad pivot scenario — O(n log n) is both worst and average case.', example: 'Sorting a reverse-sorted array of 1M elements: quicksort with first-element pivot → O(n²). Merge sort: same O(n log n) as any other input.' },
      { id: 'gq2_0_2', question: 'Which sorting algorithm is NOT stable?', options: ['Merge sort', 'Insertion sort', 'Heap sort', 'Counting sort'], correctIndex: 2, topic: 'Sorting', explanation: 'Heap sort extracts the maximum by swapping the root with the last element, disrupting the relative order of equal elements. Merge sort, insertion sort, and counting sort all maintain relative order of equal keys.', example: 'Records (Alice, 25), (Bob, 25) sorted by age. Stable sort: Alice always before Bob. Heap sort might output (Bob, 25), (Alice, 25) — the relative order was not preserved.' },
      { id: 'gq2_0_3', question: 'What is the best-case time complexity of insertion sort?', options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(1)'], correctIndex: 2, topic: 'Sorting', explanation: 'On an already-sorted array, each element is already in the right position — insertion sort makes one comparison per element and no swaps. Total: O(n). This is why it is used as the base case in Timsort.', example: '[1,2,3,4,5]: each element checked against its predecessor, found correct, no swap needed. 5 comparisons, 0 swaps. O(n) total.' },
      { id: 'gq2_0_4', question: 'Why does randomised quicksort avoid the O(n²) worst case in practice?', options: ['It always splits perfectly in half', 'Random pivot selection makes the probability of consistently bad splits astronomically small', 'It falls back to merge sort when partitions are uneven', 'It uses three-way partitioning by default'], correctIndex: 1, topic: 'Sorting', explanation: 'With random pivot, the probability of the same-worst-case split occurring n times consecutively is (2/n)ⁿ — negligibly small. Expected performance is O(n log n) regardless of input order.', example: 'Sorted array of 1000 elements: deterministic first-pivot quicksort → 500,000 comparisons. Randomised pivot (100 runs): average ~10,000 comparisons. Worst case never triggered in practice.' },
      { id: 'gq2_0_5', question: 'What is the time complexity of counting sort?', options: ['O(n log n)', 'O(n²)', 'O(n + k)', 'O(k)'], correctIndex: 2, topic: 'Sorting', explanation: 'Counting sort scans the input once to build a count array (O(n)), then reads the count array to build output (O(k)). Total O(n + k). Not comparison-based — evades the Ω(n log n) lower bound.', example: 'n = 10M integers in range [0, 100]: k = 101. Counting sort: 10M + 101 ≈ 10M operations. Merge sort: 10M × log(10M) ≈ 230M operations. Counting sort wins by 23×.' },
      { id: 'gq2_0_6', question: 'Which property makes merge sort preferred for external sorting?', options: ['It is in-place', 'It accesses data sequentially, which is efficient for disk reads/writes', 'It uses O(1) extra memory', 'It has O(n) best-case complexity'], correctIndex: 1, topic: 'Sorting', explanation: 'Disk access is fast for sequential reads but slow for random access. Merge sort merges sorted runs sequentially — each merge pass reads and writes data in order, minimising expensive disk seeks.', example: 'Sorting 1TB of log files on disk: merge sort reads 1TB sequentially per pass × log(n) passes. Quicksort would need random access to disk positions — thousands of slow seeks per partition.' },
    ],
    // Set 1 – Graph Algorithms
    [
      { id: 'gq2_1_1', question: 'What data structure does BFS use to process nodes?', options: ['Stack', 'Priority queue (min-heap)', 'Queue (FIFO)', 'Hash set'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'BFS must process nodes level by level. A queue ensures nodes discovered at distance d are all processed before nodes at distance d+1. Using a stack instead gives DFS.', example: 'BFS from A in graph A→B,A→C,B→D,C→D: queue: [A]. Dequeue A, enqueue B,C: [B,C]. Dequeue B, enqueue D: [C,D]. Dequeue C (D already visited): [D]. Order: A,B,C,D.' },
      { id: 'gq2_1_2', question: 'Why can\'t Dijkstra\'s algorithm handle negative edge weights?', options: ['It uses a queue instead of a priority queue', 'Its greedy assumption that visited nodes have final shortest paths breaks with negative edges', 'It only works on directed graphs', 'Negative edges cause integer overflow'], correctIndex: 1, topic: 'Graph Algorithms', explanation: 'Dijkstra marks a node as "visited" (finalized) when it is extracted from the priority queue. Negative edges mean a later path through an unvisited node could give a shorter total — but Dijkstra would miss this.', example: 'A→B (cost 5), A→C (cost 2), C→B (cost −4). Dijkstra finalises B at cost 5. But actual shortest path: A→C→B = 2+(−4) = −2. Dijkstra gives the wrong answer.' },
      { id: 'gq2_1_3', question: 'What is topological sort used for?', options: ['Finding shortest paths', 'Ordering tasks/dependencies so each comes before what depends on it', 'Detecting strongly connected components', 'Finding the minimum spanning tree'], correctIndex: 1, topic: 'Graph Algorithms', explanation: 'Topological sort produces an ordering of DAG vertices where every edge u→v has u before v. This represents a valid execution order for tasks with dependencies.', example: 'Build system: compile A before B (B depends on A). Topological sort finds a valid build order. If A depends on B and B depends on A: cycle detected — impossible to build.' },
      { id: 'gq2_1_4', question: 'Which algorithm finds shortest paths between ALL pairs of vertices?', options: ['Dijkstra', 'BFS', 'Floyd-Warshall', 'Bellman-Ford'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'Floyd-Warshall is an O(V³) DP algorithm computing shortest paths between every pair of vertices. Dijkstra/Bellman-Ford are single-source (from one vertex). Running Dijkstra from every vertex gives all-pairs but at higher complexity for sparse graphs.', example: 'Road network with 500 cities: Floyd-Warshall computes all 250,000 pairwise distances in one O(V³) pass. Pre-computing all pairs enables O(1) lookup of any city-to-city route.' },
      { id: 'gq2_1_5', question: 'What does DFS produce that BFS does not?', options: ['Shortest paths in unweighted graphs', 'Level-order traversal', 'Topological ordering (for DAGs) and detection of back edges (cycles)', 'Minimum spanning trees'], correctIndex: 2, topic: 'Graph Algorithms', explanation: 'DFS naturally produces topological orderings (reverse finishing times) and detects back edges (which indicate cycles). BFS excels at shortest paths in unweighted graphs and level-order traversal.', example: 'DFS on a dependency graph: finishing times give a valid reverse topological order. A back edge (to an ancestor in DFS tree) means a cycle — the dependency graph is not a valid DAG.' },
      { id: 'gq2_1_6', question: 'What is the time complexity of Kruskal\'s algorithm for finding the MST?', options: ['O(V²)', 'O(E log E)', 'O(VE)', 'O(V + E)'], correctIndex: 1, topic: 'Graph Algorithms', explanation: 'Kruskal\'s sorts all edges by weight (O(E log E)) then uses union-find to add edges greedily. With path compression and union by rank, union-find operations are near O(1) amortised. Total: O(E log E).', example: 'Sparse graph with V=100, E=200: Kruskal sorts 200 edges, then processes them with ~200 near-O(1) union-find calls. Total: dominated by the sort = O(E log E) ≈ 200×8 = 1600 operations.' },
    ],
    // Set 2 – Trees & Data Structures
    [
      { id: 'gq2_2_1', question: 'What is the time complexity of searching in an unbalanced BST (worst case)?', options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'], correctIndex: 1, topic: 'Trees', explanation: 'An unbalanced BST can degenerate to a linked list (e.g. inserting sorted elements). In that case, height = n and every operation degrades to O(n) — a linear scan.', example: 'Inserting 1,2,3,4,5 in order into a BST: root=1, right child=2, right child=3, ... — a right-leaning chain. Searching for 5 requires visiting all 5 nodes.' },
      { id: 'gq2_2_2', question: 'Which traversal of a BST gives elements in sorted order?', options: ['Pre-order', 'Post-order', 'In-order', 'Level-order'], correctIndex: 2, topic: 'Trees', explanation: 'In-order (left → root → right) visits nodes in non-decreasing key order for a BST, because the BST property ensures the left subtree is smaller and the right subtree is larger.', example: 'BST with values {4,2,6,1,3,5,7}: in-order visits 1,2,3,4,5,6,7 — the sorted sequence. Pre-order would give 4,2,1,3,6,5,7 (root first).' },
      { id: 'gq2_2_3', question: 'What is the heap property for a min-heap?', options: ['Each node is greater than all descendants', 'Each node is smaller than or equal to its children', 'The tree is a valid BST', 'All nodes at depth d are filled before depth d+1'], correctIndex: 1, topic: 'Heaps', explanation: 'Min-heap: every node ≤ its children. The root is always the minimum. This guarantees O(1) peek-min and O(log n) extract-min. Max-heap reverses the ordering.', example: 'Min-heap root = 3, children = 8, 5, grandchildren ≥ 8 and ≥ 5. Extracting min (3): move last leaf to root, bubble down: compare 8 and 5 → swap with 5 → compare new children, etc.' },
      { id: 'gq2_2_4', question: 'What is the advantage of a trie over a hash map for string keys?', options: ['Tries use less memory', 'Tries support prefix queries (autocomplete) efficiently; hash maps do not', 'Tries have O(1) lookup like hash maps', 'Tries are faster for exact lookups'], correctIndex: 1, topic: 'Data Structures', explanation: 'Hash maps give O(L) lookup for strings of length L, but cannot efficiently find all keys with a given prefix. Tries traverse the prefix path in O(L) and can enumerate all completions from that node.', example: 'Autocomplete "pre": walk trie path p→r→e, arrive at the "pre" node, enumerate all child paths: "prefix", "preview", "previous". With a hash map, you\'d scan all keys — O(n×L).' },
      { id: 'gq2_2_5', question: 'What is the amortised time complexity of union-find with path compression and union by rank?', options: ['O(log n)', 'O(n)', 'O(α(n)) — nearly O(1)', 'O(log log n)'], correctIndex: 2, topic: 'Data Structures', explanation: 'With both path compression (flattening the tree on Find) and union by rank (always merging shorter tree under taller), the amortised cost per operation is O(α(n)) where α is the inverse Ackermann function — effectively constant for all practical n.', example: 'For n = 10⁸⁰ (estimated atoms in the observable universe), α(n) = 4. So even at astronomical scale, each union-find operation takes at most 4 steps amortised.' },
      { id: 'gq2_2_6', question: 'What is a segment tree used for?', options: ['Storing a tree where each node has exactly two children', 'Answering range queries (sum, min, max) and point updates in O(log n)', 'Balanced BST operations', 'Sorting an array in O(n log n)'], correctIndex: 1, topic: 'Data Structures', explanation: 'A segment tree over an array of n elements answers range queries in O(log n) and updates in O(log n), after O(n) preprocessing. Essential for problems with many mixed range queries and point updates.', example: 'Array of 1M stock prices. Query: max price between indices 50,000 and 750,000 — answered in O(log n) ≈ 20 steps. Without a segment tree: O(n) scan per query.' },
    ],
    // Set 3 – DP & Complexity
    [
      { id: 'gq2_3_1', question: 'Which of the following problems can be solved efficiently with DP but NOT with a greedy algorithm?', options: ['Minimum spanning tree', 'Activity selection', '0/1 Knapsack', 'Shortest path in unweighted graph'], correctIndex: 2, topic: 'Dynamic Programming', explanation: '0/1 Knapsack requires considering all item combinations — a greedy "take most valuable per weight" fails. The other three have the greedy property (local optimal → global optimal).', example: 'Items: (weight 3, value 4), (weight 3, value 4), (weight 5, value 6). Capacity 6. Greedy picks (weight 5, value 6) then stops = 6. DP picks both weight-3 items = 8. DP wins.' },
      { id: 'gq2_3_2', question: 'What is the time complexity of the edit distance DP algorithm?', options: ['O(m + n)', 'O(m × n)', 'O(m log n)', 'O(2^(m+n))'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'The DP table has m × n entries (for strings of length m and n), each filled in O(1) by looking at at most 3 adjacent cells. Total: O(mn). Naïve recursion without memoisation: O(3^(m+n)).', example: 'Edit distance between two 500-character strings: DP fills 500×500 = 250,000 cells. Naïve recursion: up to 3¹⁰⁰⁰ calls — computationally impossible.' },
      { id: 'gq2_3_3', question: 'What makes the knapsack problem pseudo-polynomial?', options: ['It requires O(n²) comparisons', 'Its DP time O(nW) is polynomial in the numeric value W, but exponential in the input\'s bit size', 'It can only be solved approximately', 'It requires sorting the items first'], correctIndex: 1, topic: 'Complexity', explanation: 'O(nW) looks polynomial, but W can be exponentially large in the number of bits used to represent it. An input encoding W with b bits represents W up to 2^b — so O(nW) = O(n·2^b), which is exponential in the input size.', example: 'W = 1,000,000 (20 bits): DP table has 1M columns — feasible. W = 2^60 (60 bits): table has 10¹⁸ columns — impossible. Same bit-length input, vastly different actual difficulty.' },
      { id: 'gq2_3_4', question: 'What is the principle of optimal substructure?', options: ['Each subproblem has a unique solution', 'The optimal solution to a problem contains optimal solutions to its subproblems', 'Subproblems are independent and non-overlapping', 'Problems can be solved by dividing into equal halves'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'Optimal substructure means: if you have the optimal solution to the full problem, the sub-solutions it uses are also optimal. This allows "composing" global optimality from local optimality.', example: 'Shortest path A→C through B: if the optimal A→C path goes through B, then the A→B and B→C segments are themselves the shortest paths. So we can build the full solution from optimal sub-solutions.' },
      { id: 'gq2_3_5', question: 'What is an approximation algorithm?', options: ['An algorithm that sometimes gives wrong answers', 'An algorithm with a proven guarantee on how far its solution is from the optimum', 'A heuristic with no performance guarantee', 'An algorithm that is correct but slow'], correctIndex: 1, topic: 'Complexity', explanation: 'For NP-hard optimisation problems, approximation algorithms are efficient (polynomial) and provide a provable bound: e.g. a 2-approximation gives a solution at most twice the optimal. Unlike heuristics, the bound is mathematically proven.', example: 'Vertex cover 2-approximation: pick any edge (u,v), add both u and v to cover, remove all their edges, repeat. Result ≤ 2 × optimal. Proven by noting the optimal must include at least one endpoint of each matched edge.' },
      { id: 'gq2_3_6', question: 'What is memoisation and how does it improve time complexity?', options: ['It compresses the DP table to save memory', 'It caches the result of each subproblem so it is computed only once, reducing exponential to polynomial time', 'It avoids recursion by using iteration', 'It merges duplicate subproblems by sorting them'], correctIndex: 1, topic: 'Dynamic Programming', explanation: 'In recursive algorithms with overlapping subproblems, without memoisation the same subproblem is recomputed exponentially many times. Caching each result so it is computed only once reduces complexity from O(2ⁿ) to O(n) for Fibonacci, for example.', example: 'Fibonacci without memo: fib(5) calls fib(3) twice, fib(2) three times, fib(1) five times — exponential. With memo: each fib(k) computed exactly once → O(n) total.' },
    ],
  ],
}

// ── Material-specific summaries (Wizard of Oz) ───────────────────────────────
// Keys match subjectMaterials IDs (mat1–mat9) and QuickSummary file IDs (lec1, lec2, ex1, ex2)

export const materialSummaries = {

  mat1: `# Study Notes: Week 5 — Neural Networks

## What is a Neural Network?
An artificial neural network (ANN) is a computational model loosely inspired by the brain. It consists of layers of interconnected **neurons** (nodes) that transform an input into an output through a sequence of learned linear transformations and non-linear activations.

### Three Core Layer Types
- **Input layer** — receives raw features (pixel values, word embeddings, sensor readings)
- **Hidden layers** — learn intermediate representations; each layer composes features from the layer below
- **Output layer** — produces the final prediction (class probabilities, regression value, etc.)

## The Neuron
Each neuron computes: **output = f(w · x + b)**
- **w** = weight vector (learnable)
- **x** = input vector
- **b** = bias (learnable scalar)
- **f** = activation function (non-linear)

Without the activation function, any stack of layers reduces to a single linear transformation — no matter how deep.

## Activation Functions

| Function | Formula | Range | Notes |
|---|---|---|---|
| **ReLU** | max(0, x) | [0, ∞) | Default for hidden layers; avoids vanishing gradients |
| **Sigmoid** | 1/(1+e⁻ˣ) | (0, 1) | Binary output neurons; saturates at extremes |
| **Softmax** | eˢⁱ/Σeˢʲ | (0, 1), sums to 1 | Multi-class output layer |
| **Tanh** | (eˣ−e⁻ˣ)/(eˣ+e⁻ˣ) | (−1, 1) | Zero-centred; still saturates |

## Forward Propagation
Passing input data through all layers to generate a prediction:
1. Multiply inputs by weights, add bias → **z = w · x + b**
2. Apply activation → **a = f(z)**
3. Pass **a** as input to the next layer
4. Repeat until the output layer

No weight updates happen during the forward pass — it is purely a prediction step.

## Loss Functions
Measure how wrong the model's predictions are. Training minimises the loss.

- **Binary Cross-Entropy**: L = −[y·log(p) + (1−y)·log(1−p)] → binary classification
- **Categorical Cross-Entropy**: L = −Σ yᵢ·log(pᵢ) → multi-class classification
- **Mean Squared Error**: L = (1/n)Σ(y−ŷ)² → regression

## Training Loop
1. **Forward pass** — compute prediction from current weights
2. **Compute loss** — measure prediction error
3. **Backward pass** — compute gradients via backpropagation
4. **Weight update** — move weights in the direction that reduces loss

One complete pass over all training data = one **epoch**.

## Key Hyperparameters
- **Learning rate** — step size for weight updates (most impactful hyperparameter)
- **Batch size** — number of samples per weight update (affects noise and speed)
- **Number of layers / neurons** — model capacity
- **Activation function** — affects gradient flow and expressiveness

## Common Pitfalls
- **Vanishing gradients**: deep networks with Sigmoid/Tanh — gradients shrink to zero in early layers → use ReLU
- **Exploding gradients**: weights grow unboundedly → use gradient clipping or careful initialisation
- **Symmetry problem**: all-zero initialisation → all neurons identical → use random initialisation (He/Xavier)

---
*Source: Week 5 lecture notes. Key exam topics: forward pass, activation functions, loss functions, training loop.*`,

  mat2: `# Study Notes: Gradient Descent Explained

## Core Idea
Gradient descent is an iterative optimisation algorithm that minimises the loss function by repeatedly adjusting the model's weights in the direction of the **negative gradient**:

**w ← w − α · ∇L(w)**

- **α** = learning rate (step size)
- **∇L(w)** = gradient of the loss w.r.t. weights

The gradient points uphill (direction of steepest increase). Moving opposite to it moves downhill toward a minimum.

## Three Variants

### 1. Full-Batch Gradient Descent
- Computes gradient over the **entire dataset** before each update
- Accurate gradient estimate, but very slow for large datasets
- One update per epoch

### 2. Stochastic Gradient Descent (SGD)
- Computes gradient from a **single training example** per update
- Very fast updates, but very noisy — loss oscillates
- Can escape shallow local minima due to noise

### 3. Mini-Batch Gradient Descent ✓ (used in practice)
- Computes gradient over a **small batch** (typically 32–512 samples)
- Balances accuracy and speed; GPU-friendly
- Standard in all modern deep learning

## The Learning Rate α

| Setting | Effect |
|---|---|
| Too high | Overshoots minimum → loss oscillates or diverges |
| Too low | Converges very slowly; may stop at a shallow local minimum |
| Well-tuned | Smooth, efficient convergence |

**Rule of thumb**: start at 0.01, halve when validation loss plateaus.

## Learning Rate Schedules
The learning rate should decrease over time — large steps early (explore), small steps late (fine-tune).

- **Step decay**: halve every N epochs
- **Cosine annealing**: follows a smooth cosine curve from α₀ → 0
- **Reduce on plateau**: decrease by factor when validation loss stops improving
- **Warmup**: start very small, ramp up, then decay — used in transformer training

## Advanced Optimisers

### Momentum
Accumulates a velocity vector from past gradients:
**v ← β·v − α·∇L**
**w ← w + v**
β (typically 0.9) controls how much history is retained. Dampens oscillations; accelerates in consistent directions.

### RMSProp
Tracks the moving average of squared gradients to adapt the learning rate per parameter:
**w ← w − α/(√E[g²] + ε) · ∇L**
Larger historical gradients → smaller step. Prevents oscillation in steep directions.

### Adam (Adaptive Moment Estimation) ✓ (default choice)
Combines momentum (first moment) and RMSProp (second moment):
- **m ← β₁·m + (1−β₁)·g** (mean gradient)
- **v ← β₂·v + (1−β₂)·g²** (mean squared gradient)
- **ŵ ← w − α·m̂/√v̂** (bias-corrected update)

**Default settings**: α=0.001, β₁=0.9, β₂=0.999. Works well across almost all tasks.

## Challenges and Solutions

| Problem | Cause | Solution |
|---|---|---|
| Oscillating loss | Learning rate too high | Reduce α or use scheduler |
| Very slow convergence | Learning rate too low | Increase α or use Adam |
| Exploding gradients | Deep networks / RNNs | Gradient clipping |
| Vanishing gradients | Sigmoid/Tanh in deep nets | ReLU + residual connections |
| Getting stuck | Saddle points / local minima | Momentum, noise from mini-batches |

## Gradient Clipping
Caps the gradient norm before the weight update:
**if ‖g‖ > threshold: g ← g · threshold/‖g‖**

Preserves direction, makes step size safe. Critical for RNNs and very deep networks.

## Key Takeaways
1. Mini-batch GD is the standard; use batch size 32–256
2. Adam is the default optimiser — reliable across tasks
3. The learning rate is the single most important hyperparameter
4. Use a scheduler: large steps early, small steps late
5. Clip gradients when training RNNs or very deep networks

---
*Source: Gradient Descent lecture notes. Key exam topics: update rule, learning rate effects, SGD vs Adam, learning rate schedules.*`,

  mat3: `# Study Notes: CNN Architecture Summary

## Why CNNs?
Standard fully connected networks treat every input element independently — on a 256×256 image that's 65,536 inputs per neuron. CNNs exploit **spatial structure**:
- **Local connectivity**: each neuron only connects to a small spatial region
- **Weight sharing**: the same filter is reused across all positions
- **Result**: vastly fewer parameters, built-in translation invariance

## Core Building Blocks

### 1. Convolutional Layer
A set of **learnable filters** (kernels) slides over the input. Each filter:
- Has a small spatial size (e.g. 3×3, 5×5)
- Computes a dot product at each position
- Produces one **feature map** (activation map)

**Output size** (same padding): H_out = H_in, W_out = W_in, C_out = num_filters
**Output size** (valid padding): H_out = H_in − K + 1

A layer with 64 filters produces 64 feature maps. Each map highlights where that filter's pattern appears.

### 2. Activation (ReLU)
Applied after each conv layer. Introduces non-linearity and creates sparse activations (negative values → 0). Without this, conv layers are just linear operations.

### 3. Pooling Layer
**Downsamples** feature maps to reduce spatial dimensions and computation.
- **Max pooling** (most common): takes the maximum in each window → preserves strongest activations
- **Average pooling**: takes the average → smoother, used in global average pooling at the end
- Typical: 2×2 pool with stride 2 → halves H and W

### 4. Fully Connected (FC) Layer
After the final pooling layer, the 3D feature maps are **flattened** to a 1D vector and passed to FC layers for classification. The FC layer integrates all spatial features into class logits.

### 5. Output (Softmax)
Converts final logits to class probabilities.

## Typical CNN Architecture Pattern
\`\`\`
Input → [Conv → ReLU → Pool] × N → Flatten → FC → Softmax
\`\`\`
Each Conv block extracts increasingly abstract features. More blocks = richer representations.

## Key Concepts

### Stride
How far the filter moves between positions. Stride=1: output same size (with same padding). Stride=2: output halved. Used as a memory-efficient alternative to pooling.

### Padding
- **Same padding**: zero-pad input so output has the same spatial size → preserves resolution
- **Valid padding**: no padding, output shrinks by (K−1) per conv → loses border information

### Receptive Field
The region of the original input that influences a neuron's activation. Grows with depth:
- Layer 1 (3×3 filter): receptive field = 3×3
- Layer 2 (3×3 filter on layer 1): receptive field = 5×5
- Layer 5: receptive field ≈ 11×11

Deeper neurons "see" larger image regions and detect higher-level features.

### Depth (Channels)
- Input: 3 channels (RGB)
- After first conv block: 32–64 channels
- After deeper blocks: 128–512 channels
- Each channel = one learned feature detector

## Feature Hierarchy
- **Early layers**: edges, colours, simple textures
- **Middle layers**: shapes, patterns, object parts
- **Deep layers**: high-level concepts (faces, wheels, text)

## Common Architectures

| Architecture | Key Innovation |
|---|---|
| **LeNet-5** (1998) | First modern CNN; digit recognition |
| **AlexNet** (2012) | Deep CNN + ReLU + dropout; won ImageNet |
| **VGGNet** (2014) | Very deep (16–19 layers), small 3×3 filters |
| **ResNet** (2015) | Skip connections; enabled 50–152+ layers |
| **MobileNet** (2017) | Depthwise separable convolutions; mobile-optimised |

## Transfer Learning
Pre-train on large dataset (e.g. ImageNet, 1.2M images, 1000 classes) → adapt to new task:
- **Feature extraction**: freeze all pre-trained layers, train only new head
- **Fine-tuning**: unfreeze upper layers, train at low learning rate alongside new head

Use feature extraction when target data is scarce; fine-tune when you have more data.

## Key Formulas
- Parameters in a conv layer: K × K × C_in × C_out + C_out (bias)
- Parameters in a FC layer: D_in × D_out + D_out (bias)
- Output size (stride s, padding p): ⌊(H_in + 2p − K)/s⌋ + 1

---
*Source: CNN Architecture Summary lecture notes. Key exam topics: conv layer operation, pooling, feature hierarchy, transfer learning.*`,

  mat4: `# Study Notes: Andrew Ng Lecture Notes (Ch. 4–6)

## Chapter 4 — Regularisation

### The Overfitting Problem
A model overfits when it **memorises training data** instead of learning general patterns. Signs:
- Training accuracy >> validation accuracy
- Loss continues falling on train but rises on validation

### L2 Regularisation (Weight Decay)
Add λΣw² to the loss: **L_total = L_task + λΣw²**
- The gradient update becomes: **w ← w(1 − αλ) − α·∇L_task**
- Shrinks all weights toward zero (but rarely to exactly zero)
- Prevents any single feature from dominating

### L1 Regularisation
Add λΣ|w| to the loss. Drives many weights exactly to zero → **sparse models**. Useful for feature selection.

### Dropout
Randomly zero a fraction **p** of neurons on each forward pass during training.
- At inference: all neurons active, outputs scaled by (1−p)
- Acts as an implicit ensemble of 2^n sub-networks
- Typical rate: 0.5 for FC layers, 0.1–0.2 for conv layers

### Early Stopping
Monitor validation loss; stop training when it stops improving. Restore the best checkpoint. Free regularisation with no tuning.

### Data Augmentation
Create additional training samples by transforming existing ones (flip, crop, rotate, colour jitter). Especially effective for image data; can 10× effective dataset size.

### Batch Normalisation
Normalise each layer's input to zero mean and unit variance, then apply learnable scale (γ) and shift (β).
**Effect**: stabilises training, allows higher learning rates, reduces sensitivity to initialisation.

---

## Chapter 5 — Practical Machine Learning

### The Bias-Variance Tradeoff
- **High bias** (underfitting): model too simple → high train error and high validation error
- **High variance** (overfitting): model too complex → low train error, high validation error
- **Well-tuned**: low train error and low validation error

### Diagnosing and Fixing

| Problem | Symptom | Fix |
|---|---|---|
| High bias | High training error | Bigger model, more features, less regularisation |
| High variance | Train ≪ validation error | More data, regularisation, simpler model |
| Both | High train and validation error | Start over with better architecture |

### Orthogonalisation Principle
Use separate "knobs" for separate problems:
1. Fit training set well → increase model size, train longer
2. Fit dev set well → regularise, get more training data
3. Fit test set well → get more dev/test data
4. Real-world performance → check distribution mismatch

Do not apply regularisation to fix underfitting (high training error) — that makes it worse.

### Train / Dev / Test Split
- **Training set**: fits the model
- **Dev (validation) set**: tunes hyperparameters
- **Test set**: final, unbiased evaluation — touch it only once

Modern datasets (millions of examples): 98/1/1 split is reasonable. Smaller datasets: 60/20/20.

**Critical rule**: dev and test sets must come from the same distribution as production data.

---

## Chapter 6 — Hyperparameter Tuning

### Hyperparameter Priority (by impact)
1. Learning rate α — highest impact
2. Momentum β / Adam β₁, β₂
3. Mini-batch size
4. Number of layers and hidden units
5. Regularisation λ

### Search Strategies
- **Grid search**: exhaustive, good for ≤ 3 hyperparameters
- **Random search**: better for high-dimensional spaces — proven more efficient
- **Bayesian optimisation**: model the hyperparameter-to-performance mapping; sample intelligently

**Key insight**: use a logarithmic scale for learning rate (sample α ∈ [10⁻⁵, 1] uniformly in log-space, not linearly).

### Re-tune After Changes
Changing model architecture, dataset, or task requires fresh hyperparameter search. Intuitions from one model rarely transfer directly.

### Pandas vs Caviar Approach
- **Pandas**: one model, babysit training, tweak as you go (limited compute)
- **Caviar**: many models in parallel, pick the best (abundant compute)

### Batch Normalisation in Practice
- Applied before or after the activation function (usually before)
- Makes hyperparameter search easier (less sensitive to scale)
- Slight regularisation effect (noise from batch statistics)
- Use running mean/variance at inference, not per-batch statistics

## Key Formulas
- **L2 regularisation cost**: J = (1/m)Σ L(ŷ,y) + (λ/2m)Σ‖W‖²_F
- **Dropout scaling**: at inference, multiply each activation by (1−p)
- **BN forward**: μ_B = mean(z), σ²_B = var(z), z̃ = (z−μ_B)/√(σ²_B+ε), ẑ = γ·z̃ + β

---
*Source: Andrew Ng Deep Learning Specialisation, Chapters 4–6. Key exam topics: regularisation methods, bias-variance diagnosis, train/dev/test splits, hyperparameter tuning strategies.*`,

  // ── Algorithms & Data Structures ──────────────────────────────────────────

  mat5: `# Study Notes: Sorting Algorithms

## Why Sorting Matters
Sorting is foundational — many algorithms (binary search, merge, duplicate detection) require sorted input. The choice of sorting algorithm significantly affects performance.

## Comparison Sort Lower Bound
Any sorting algorithm based on pairwise comparisons must make at least **Ω(n log n)** comparisons. Proof: sorting n elements has n! possible outcomes; a decision tree needs at least log₂(n!) ≈ n log n nodes.

---

## Algorithm Reference

### Bubble Sort
- **Idea**: repeatedly swap adjacent elements that are out of order
- **Best**: O(n) (already sorted, with early-exit optimisation)
- **Average/Worst**: O(n²)
- **Space**: O(1) in-place, stable
- **Use**: teaching only; never in production

### Insertion Sort
- **Idea**: build a sorted prefix; insert each new element into its correct position
- **Best**: O(n) (nearly sorted)
- **Average/Worst**: O(n²)
- **Space**: O(1) in-place, stable
- **Use**: small arrays (n < 20), nearly-sorted data, base case in Timsort

### Selection Sort
- **Idea**: find the minimum, swap to front, repeat
- **All cases**: O(n²) — no best-case improvement
- **Space**: O(1) in-place, not stable
- **Use**: when writes are expensive (minimises swaps)

### Merge Sort ✓
- **Idea**: divide in half recursively; merge sorted halves
- **All cases**: O(n log n)
- **Space**: O(n) auxiliary
- **Stable**: yes
- **Use**: external sorting, linked lists, when stability is required

### Quicksort ✓
- **Idea**: pick a pivot, partition into < and >, recurse
- **Best/Average**: O(n log n)
- **Worst**: O(n²) (always picks min/max as pivot)
- **Space**: O(log n) stack (average), O(n) worst
- **Stable**: no
- **Use**: general-purpose in-memory sorting; use randomised pivot

### Heap Sort
- **Idea**: build a max-heap; repeatedly extract maximum
- **All cases**: O(n log n)
- **Space**: O(1) in-place
- **Stable**: no
- **Use**: when O(1) extra space is required with O(n log n) guarantee

### Counting Sort (non-comparison)
- **Idea**: count occurrences of each value; reconstruct from counts
- **Complexity**: O(n + k) where k = value range
- **Space**: O(k)
- **Stable**: yes (if implemented carefully)
- **Use**: integers in a known, small range

### Radix Sort (non-comparison)
- **Idea**: sort digit by digit from least to most significant using counting sort
- **Complexity**: O(nk) where k = number of digits
- **Space**: O(n + k)
- **Use**: fixed-width integers, strings

---

## Complexity Summary

| Algorithm | Best | Average | Worst | Space | Stable |
|---|---|---|---|---|---|
| Bubble | O(n) | O(n²) | O(n²) | O(1) | ✓ |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | ✓ |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | ✗ |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | ✓ |
| Quick | O(n log n) | O(n log n) | O(n²) | O(log n) | ✗ |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | ✗ |
| Counting | O(n+k) | O(n+k) | O(n+k) | O(k) | ✓ |

## Key Concepts

### Stability
A sort is **stable** if equal elements maintain their original relative order. Critical when sorting by multiple keys (e.g. sort by last name, then by first name — stability preserves last-name order within ties).

### In-place vs Out-of-place
- **In-place**: uses O(1) extra memory (quicksort, heap sort)
- **Out-of-place**: uses auxiliary storage (merge sort O(n))

### Timsort (Python, Java default)
Hybrid of insertion sort and merge sort. Detects natural runs, sorts small runs with insertion sort, merges with merge sort. O(n log n) worst, O(n) best. Stable.

## Practical Guidance
- **General use**: Timsort / library sort
- **Guaranteed O(n log n)**: merge sort or heap sort
- **Fastest in practice**: quicksort with randomised pivot
- **Nearly sorted**: insertion sort
- **Integer keys in small range**: counting or radix sort
- **External (disk) sorting**: merge sort

---
*Source: Sorting Algorithms lecture notes. Key exam topics: complexity table, stability, when to use each algorithm, non-comparison sort lower bound.*`,

  mat6: `# Study Notes: Graph Theory Cheatsheet

## Definitions

### Graph G = (V, E)
- **V** = set of vertices (nodes)
- **E** = set of edges (connections)
- **Directed**: edges have direction (A→B ≠ B→A)
- **Undirected**: edges are bidirectional (A-B = B-A)
- **Weighted**: edges have associated costs/distances
- **Simple**: no self-loops, no duplicate edges

### Degree
- **Undirected**: degree(v) = number of edges incident to v
- **Directed**: in-degree (edges into v), out-degree (edges out of v)

### Paths and Cycles
- **Path**: sequence of distinct vertices connected by edges
- **Cycle**: a path that starts and ends at the same vertex
- **DAG** (Directed Acyclic Graph): directed graph with no cycles

---

## Representations

### Adjacency Matrix
- V×V matrix; entry [i][j] = 1 (or weight) if edge exists
- **Space**: O(V²)
- **Edge lookup**: O(1)
- **Best for**: dense graphs (E ≈ V²)

### Adjacency List
- Array of V lists, each storing neighbours
- **Space**: O(V + E)
- **Iterate neighbours**: O(degree)
- **Best for**: sparse graphs (most real-world graphs)

---

## Core Traversals

### Breadth-First Search (BFS)
Uses a **queue**. Explores level by level.
\`\`\`
BFS(start):
  enqueue start; mark visited
  while queue not empty:
    v = dequeue
    for each neighbour u of v:
      if not visited: enqueue u; mark visited
\`\`\`
- **Time**: O(V + E)
- **Finds**: shortest paths in unweighted graphs, level-order traversal, bipartiteness check

### Depth-First Search (DFS)
Uses a **stack** (or recursion). Explores as deep as possible before backtracking.
\`\`\`
DFS(v):
  mark v visited
  for each neighbour u of v:
    if not visited: DFS(u)
\`\`\`
- **Time**: O(V + E)
- **Finds**: cycles, topological order (reverse finishing times), connected components, SCCs

---

## Key Algorithms

### Topological Sort (DAGs only)
Valid ordering of vertices so every edge u→v has u before v.
- **Kahn's algorithm**: track in-degrees; enqueue vertices with in-degree 0; decrement neighbours as they are removed
- **DFS-based**: record reverse finishing times
- **Time**: O(V + E)
- **Applications**: build systems, task scheduling, course prerequisite ordering

### Dijkstra's Algorithm (non-negative weights)
Shortest paths from source s to all vertices.
- Uses a **min-heap** (priority queue)
- Greedily finalises the nearest unvisited vertex
- **Time**: O((V + E) log V) with binary heap
- **Limitation**: fails on negative edge weights — use Bellman-Ford instead

### Bellman-Ford (negative weights allowed)
Shortest paths via V−1 edge relaxations.
- **Time**: O(VE)
- Detects negative cycles (if relaxation still possible after V−1 rounds)

### Floyd-Warshall (all-pairs shortest paths)
- **Time**: O(V³), Space O(V²)
- Handles negative edges; detects negative cycles

### Prim's / Kruskal's (Minimum Spanning Tree)
- **Prim's**: grow MST from a seed vertex using a priority queue — O(E log V)
- **Kruskal's**: sort all edges by weight; add edge if it doesn't create a cycle (union-find) — O(E log E)
- **MST**: connects all V vertices with minimum total weight, no cycles, V−1 edges

---

## Important Properties

### Euler Path/Circuit
- **Euler path**: visits every edge exactly once
- Exists in undirected graph iff exactly 0 or 2 vertices have odd degree
- **Euler circuit**: starts and ends at same vertex; requires all vertices to have even degree

### Bipartite Graph
- Vertices split into two sets; all edges go between sets
- Equivalent to: graph is 2-colourable, no odd-length cycles
- Test: BFS 2-colouring in O(V + E)

### Strongly Connected Components (SCCs) — directed graphs
- Maximal subgraphs where every vertex is reachable from every other
- Found with **Kosaraju's** or **Tarjan's** algorithm in O(V + E)

---

## Complexity Reference

| Algorithm | Time | Space | Notes |
|---|---|---|---|
| BFS / DFS | O(V+E) | O(V) | Fundamental traversals |
| Dijkstra | O((V+E)log V) | O(V) | Non-negative weights only |
| Bellman-Ford | O(VE) | O(V) | Handles negative weights |
| Floyd-Warshall | O(V³) | O(V²) | All-pairs |
| Prim's MST | O(E log V) | O(V) | Dense graphs |
| Kruskal's MST | O(E log E) | O(E) | Sparse graphs |
| Topological Sort | O(V+E) | O(V) | DAGs only |

---
*Source: Graph Theory Cheatsheet. Key exam topics: BFS vs DFS, Dijkstra, topological sort, MST algorithms, representations.*`,

  mat7: `# Study Notes: Dynamic Programming Patterns

## What is Dynamic Programming?
Dynamic programming (DP) solves complex problems by breaking them into overlapping subproblems, solving each **once**, and storing results to avoid redundant computation.

### Two Required Properties
1. **Overlapping subproblems**: the same subproblem recurs multiple times in the recursion tree
2. **Optimal substructure**: the optimal solution to a problem contains optimal solutions to its subproblems

If both hold, DP gives a correct, efficient solution.

---

## Two Approaches

### Top-Down (Memoisation)
Write the natural recursion; cache results as they are computed.
\`\`\`python
memo = {}
def fib(n):
    if n <= 1: return n
    if n in memo: return memo[n]
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
\`\`\`
**Pros**: only computes needed subproblems; natural recursion structure
**Cons**: function call overhead; stack depth limit

### Bottom-Up (Tabulation)
Fill a DP table iteratively from base cases to the full problem.
\`\`\`python
def fib(n):
    dp = [0, 1] + [0] * (n-1)
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
\`\`\`
**Pros**: no recursion overhead; better cache performance
**Cons**: may compute unneeded subproblems; less intuitive

Both approaches have the same asymptotic complexity.

---

## Classic DP Patterns

### Pattern 1: Fibonacci / 1D Recurrence
**State**: dp[i] = answer for first i elements
**Recurrence**: dp[i] = f(dp[i-1], dp[i-2], ...)
**Complexity**: O(n) time, O(1) space (keep only last 2 values)

### Pattern 2: 0/1 Knapsack
**Problem**: n items with weights wᵢ and values vᵢ; capacity W. Maximise value without exceeding W.
**State**: dp[i][w] = max value using first i items with capacity w
**Recurrence**:
- dp[i][w] = dp[i−1][w] (skip item i)
- dp[i][w] = vᵢ + dp[i−1][w−wᵢ] if w ≥ wᵢ (take item i)
- dp[i][w] = max of both options
**Complexity**: O(nW) time, O(nW) space (or O(W) with rolling array)

### Pattern 3: Longest Common Subsequence (LCS)
**Problem**: length of longest subsequence common to strings S₁ and S₂.
**State**: dp[i][j] = LCS length of S₁[0..i] and S₂[0..j]
**Recurrence**:
- if S₁[i] == S₂[j]: dp[i][j] = dp[i−1][j−1] + 1
- else: dp[i][j] = max(dp[i−1][j], dp[i][j−1])
**Complexity**: O(mn) time and space

### Pattern 4: Coin Change (Minimum Coins)
**Problem**: minimum number of coins to make amount A from denominations C.
**State**: dp[a] = minimum coins to make amount a
**Recurrence**: dp[a] = min(dp[a − c] + 1) for each coin c ≤ a
**Base case**: dp[0] = 0
**Complexity**: O(A · |C|) time, O(A) space

### Pattern 5: Edit Distance (Levenshtein)
**Problem**: minimum insertions, deletions, substitutions to transform string S₁ into S₂.
**State**: dp[i][j] = edit distance between S₁[0..i] and S₂[0..j]
**Recurrence**:
- if S₁[i] == S₂[j]: dp[i][j] = dp[i−1][j−1]
- else: dp[i][j] = 1 + min(dp[i−1][j], dp[i][j−1], dp[i−1][j−1])
**Complexity**: O(mn) time and space

### Pattern 6: Longest Increasing Subsequence (LIS)
**Problem**: length of longest strictly increasing subsequence.
**DP approach**: O(n²) — dp[i] = LIS ending at index i
**Optimised**: O(n log n) using patience sorting + binary search

---

## DP vs Greedy

| | DP | Greedy |
|---|---|---|
| Decision making | Considers all options | Makes locally best choice |
| Correctness | Always correct when DP properties hold | Only correct when greedy choice property holds |
| Complexity | Usually polynomial | Usually faster (O(n log n) or O(n)) |
| When to use | Choices depend on future | Local optimum = global optimum |

**Examples where greedy fails but DP works**: 0/1 Knapsack, Coin Change with arbitrary denominations

---

## Defining the State: The Key Design Step
The state must capture everything needed to solve a subproblem. Wrong state definition is the most common DP mistake.

- Knapsack: (item index, remaining capacity)
- LCS: (position in S₁, position in S₂)
- Edit distance: (prefix length of S₁, prefix length of S₂)
- Shortest path: (current vertex) — Dijkstra

Each state variable adds one dimension to the DP table.

---
*Source: Dynamic Programming Patterns notes. Key exam topics: DP properties, memoisation vs tabulation, Knapsack, LCS, Coin Change, Edit Distance.*`,

  mat8: `# Study Notes: Big-O Complexity Reference

## Asymptotic Notation

### Big-O (O) — Upper Bound
f(n) = O(g(n)) means f grows no faster than g.
Used to describe **worst-case** time (most common in CS).

### Big-Omega (Ω) — Lower Bound
f(n) = Ω(g(n)) means f grows at least as fast as g.
Used to describe **best-case** or **theoretical lower bounds**.

### Big-Theta (Θ) — Tight Bound
f(n) = Θ(g(n)) means f grows exactly as fast as g (within constant factors).

**Key rule**: constants and lower-order terms are ignored.
- 5n² + 3n + 7 = O(n²)
- 100n = O(n)

---

## Common Complexity Classes (fastest to slowest)

| Complexity | Name | Example Algorithms |
|---|---|---|
| **O(1)** | Constant | Array index, hash lookup (avg) |
| **O(log n)** | Logarithmic | Binary search, balanced BST ops |
| **O(n)** | Linear | Linear search, array scan |
| **O(n log n)** | Linearithmic | Merge sort, heapsort, FFT |
| **O(n²)** | Quadratic | Bubble/insertion/selection sort |
| **O(n³)** | Cubic | Floyd-Warshall, naive matrix multiply |
| **O(2ⁿ)** | Exponential | Naive recursion, power set |
| **O(n!)** | Factorial | Brute-force TSP, permutations |

## Growth Rate Intuition (n = 1,000)

| Complexity | Operations |
|---|---|
| O(1) | 1 |
| O(log n) | ~10 |
| O(n) | 1,000 |
| O(n log n) | ~10,000 |
| O(n²) | 1,000,000 |
| O(2ⁿ) | 10³⁰⁰ (impossible) |

---

## Analysis Techniques

### Counting Steps
Count dominant operations (comparisons, array accesses) as a function of n.

### Loop Analysis
- Single loop over n → O(n)
- Nested loop over n × m → O(nm)
- Loop that halves its variable → O(log n)
- Loop over n with inner binary search → O(n log n)

### Recurrence Relations
Express runtime as T(n) = aT(n/b) + f(n). Solve with Master Theorem:
- T(n) = 2T(n/2) + O(n) → O(n log n) (merge sort)
- T(n) = T(n/2) + O(1) → O(log n) (binary search)
- T(n) = T(n−1) + O(n) → O(n²) (insertion sort, worst)

### Best / Average / Worst Case
- **Best case**: fastest possible input → Ω notation
- **Worst case**: slowest possible input → O notation (standard)
- **Average case**: expected over random inputs → often hardest to compute

---

## Amortised Analysis
When individual operations vary in cost, analyse the **average cost per operation** over a sequence.

**Dynamic array**: most appends are O(1); occasional resize is O(n). Averaged: O(1) amortised.
**Proof**: after n appends, total copies ≤ 2n → O(1) per operation amortised.

---

## Space Complexity

| Algorithm | Extra Space |
|---|---|
| Iterative algorithms | O(1) |
| DFS on graph | O(V) (call stack) |
| BFS on graph | O(V) (queue) |
| Merge sort | O(n) |
| Hash table | O(n) |
| DP table (2D) | O(nm) |

Space and time often trade off:
- Memoisation: O(n) extra space → O(n) time instead of O(2ⁿ)
- Lookup table: precompute O(n) → O(1) queries

---

## Complexity of Common Operations

| Data Structure | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1) | O(1) |
| Binary Search Tree (balanced) | — | O(log n) | O(log n) | O(log n) |
| Hash Table | — | O(1) avg | O(1) avg | O(1) avg |
| Binary Heap | — | O(n) | O(log n) | O(log n) |
| Stack / Queue | O(1) top/front | O(n) | O(1) | O(1) |

---

## P, NP, and Hardness

- **P**: solvable in polynomial time (efficient)
- **NP**: verifiable in polynomial time; unknown if solvable in P
- **NP-hard**: at least as hard as every NP problem
- **NP-complete**: in NP and NP-hard (e.g. 3-SAT, Knapsack decision)

**Implications for practice**: NP-hard problems require approximation algorithms, heuristics, or exponential exact algorithms for small inputs.

---
*Source: Big-O Complexity Reference sheet. Key exam topics: complexity classes, recurrence relations, amortised analysis, NP definitions.*`,

  mat9: `# Study Notes: Tree & Heap Data Structures

## Tree Terminology
- **Root**: the top node (no parent)
- **Leaf**: node with no children
- **Height**: longest path from root to a leaf
- **Depth**: distance from root to a node
- **Subtree**: a node and all its descendants

## Binary Tree
Each node has at most **2 children** (left and right).
- **Complete binary tree**: all levels full except last, which is filled left-to-right
- **Perfect binary tree**: all levels completely full; all leaves at the same depth
- **Height** of a complete binary tree with n nodes: ⌊log₂(n)⌋

---

## Binary Search Tree (BST)

### BST Property
For every node v:
- All values in **left subtree** < v
- All values in **right subtree** > v

### Operations

| Operation | Best Case | Worst Case | Notes |
|---|---|---|---|
| Search | O(log n) | O(n) | Balanced vs degenerate |
| Insert | O(log n) | O(n) | |
| Delete | O(log n) | O(n) | Three cases: leaf, one child, two children |

**Degenerate BST**: inserting sorted data creates a chain of height n → all operations O(n). Solution: self-balancing BSTs.

### Traversals
- **In-order** (L → Root → R): produces values in **sorted ascending order**
- **Pre-order** (Root → L → R): copies tree structure; useful for serialisation
- **Post-order** (L → R → Root): evaluates expressions; used for tree deletion
- **Level-order** (BFS): processes nodes level by level

---

## Self-Balancing BSTs

### AVL Tree
- **Balance factor** = height(left) − height(right) ∈ {−1, 0, 1} for every node
- After insert/delete, rebalance via **rotations**:
  - **Single rotation** (LL or RR case): one rotation fixes the imbalance
  - **Double rotation** (LR or RL case): two rotations fix it
- Height: O(log n)
- All operations: O(log n) guaranteed

### Red-Black Tree
- Nodes coloured red or black; 5 invariants maintain balance
- Height: ≤ 2 log₂(n+1)
- Fewer rotations per insert/delete than AVL (better for write-heavy workloads)
- Used in: C++ std::map, Java TreeMap, Linux kernel scheduler

---

## Heap

### Heap Property
- **Max-heap**: every node ≥ its children → root is the maximum
- **Min-heap**: every node ≤ its children → root is the minimum

### Array Representation (no pointers needed!)
For node at index **i**:
- **Left child**: 2i + 1
- **Right child**: 2i + 2
- **Parent**: ⌊(i − 1) / 2⌋

This compact layout gives excellent cache performance.

### Heap Operations

| Operation | Complexity | Description |
|---|---|---|
| Peek min/max | **O(1)** | Root element |
| Insert | **O(log n)** | Add at end; bubble up (sift up) |
| Extract min/max | **O(log n)** | Remove root; move last to root; sift down |
| Build heap | **O(n)** | Floyd's algorithm (bottom-up sift down) |
| Heap sort | **O(n log n)** | Build max-heap; extract max n times |

### Why Build-Heap is O(n) (not O(n log n))
Most nodes are near the bottom and require few sift-down steps. The sum of all work across levels is bounded by a geometric series that converges to 2n.

---

## Priority Queue
An abstract data type: always dequeues the highest-priority element. Standard implementation: binary heap.

**Applications**: Dijkstra's algorithm, A* search, event simulation, task scheduling, Huffman encoding.

---

## Other Tree Structures

### Trie (Prefix Tree)
- Each path from root to node represents a string prefix
- Insert/search: O(L) where L = string length
- **Applications**: autocomplete, spell checking, IP routing (radix tree variant)

### Segment Tree
- Binary tree over array; each node stores aggregate (sum/min/max) of a range
- Range query: O(log n); point update: O(log n); build: O(n)
- **Applications**: range minimum query, interval scheduling

### AVL vs B-Tree vs Red-Black
- **AVL**: best search performance (strictly balanced); more rotations on insert
- **Red-Black**: fewer rotations; better for write-heavy; used in most libraries
- **B-Tree**: many keys per node; minimises disk accesses; used in databases and file systems

---

## Summary: Choosing a Data Structure

| Use case | Structure | Reason |
|---|---|---|
| Sorted data with fast search | Balanced BST (AVL/RB) | O(log n) all operations |
| Priority queue | Binary heap | O(1) peek, O(log n) insert/extract |
| String prefix search | Trie | O(L) operations |
| Range queries on array | Segment tree / Fenwick | O(log n) query and update |
| Database index | B-Tree | Disk-friendly node size |

---
*Source: Tree & Heap Data Structures notes. Key exam topics: BST operations, traversals, AVL balance, heap array layout, heap operation complexities.*`,

  // ── QuickSummary file IDs ─────────────────────────────────────────────────

  lec1: `# Lecture Notes — Topic 1: Introduction to Machine Learning

## What is Machine Learning?
Machine learning (ML) is a field of artificial intelligence that gives computers the ability to learn from data without being explicitly programmed. Instead of writing rules by hand, we feed examples to an algorithm that discovers patterns automatically.

### Three Paradigms

| Paradigm | Input | Goal | Examples |
|---|---|---|---|
| **Supervised** | Labelled (x, y) pairs | Learn mapping x → y | Classification, regression |
| **Unsupervised** | Unlabelled data x | Discover structure | Clustering, dimensionality reduction |
| **Reinforcement** | State, action, reward | Maximise cumulative reward | Game playing, robotics |

---

## Core Vocabulary

- **Model**: a mathematical function mapping inputs to outputs
- **Feature** (x): measurable property of an example (e.g. pixel value, word count)
- **Label** (y): the target output (e.g. "spam", house price)
- **Training**: fitting model parameters to minimise prediction error on the training set
- **Inference**: applying a trained model to new, unseen inputs

---

## The ML Workflow

1. **Collect and clean data**: quality data >> fancy algorithms
2. **Split**: training / validation / test sets
3. **Choose a model**: start simple (logistic regression, decision tree)
4. **Train**: minimise loss on training set
5. **Evaluate**: check performance on validation set
6. **Iterate**: tune hyperparameters, improve features, try better models
7. **Test**: final evaluation on held-out test set — once only

---

## Key Algorithms (Overview)

### Linear Regression
Predicts a continuous value. Fits a line (or hyperplane) to minimise squared errors.
**Model**: ŷ = w·x + b
**Loss**: MSE = (1/n)Σ(y − ŷ)²
**Use**: house prices, demand forecasting, risk scoring

### Logistic Regression
Classifies into two categories using a sigmoid output.
**Model**: P(y=1|x) = σ(w·x + b)
**Loss**: Binary Cross-Entropy
**Use**: spam detection, medical diagnosis, credit scoring

### Decision Trees
Recursively partition feature space based on information gain or Gini impurity.
**Pros**: interpretable, handles mixed data types
**Cons**: overfits without pruning or depth limits

### k-Nearest Neighbours (kNN)
Classify by majority vote of the k nearest training examples.
**Pros**: no training phase, intuitive
**Cons**: slow at inference, sensitive to irrelevant features

---

## Evaluation Metrics

### Classification
- **Accuracy**: (TP + TN) / total — misleading on imbalanced data
- **Precision**: TP / (TP + FP) — "of predicted positives, how many are correct?"
- **Recall**: TP / (TP + FN) — "of actual positives, how many did we catch?"
- **F1**: harmonic mean of precision and recall
- **AUC-ROC**: discrimination ability across all thresholds

### Regression
- **MAE**: mean absolute error — interpretable, robust to outliers
- **MSE**: mean squared error — penalises large errors heavily
- **RMSE**: √MSE — same units as target
- **R²**: proportion of variance explained (1.0 = perfect)

---

## Overfitting and Underfitting

- **Underfitting** (high bias): model too simple → high error on train and test
  - Fix: more features, more complex model, less regularisation
- **Overfitting** (high variance): model too complex → low train error, high test error
  - Fix: more data, regularisation, simpler model, dropout, early stopping
- **Well-tuned**: low train error and low test error

---

## Key Takeaways
1. ML is about finding patterns in data, not hand-coding rules
2. Start with a simple baseline before adding complexity
3. The train/test split is sacred — never evaluate on training data
4. More data usually beats a better algorithm
5. Feature engineering is often more impactful than model choice

---
*Source: Topic 1 lecture notes. Foundation material — review before advanced topics.*`,

  lec2: `# Lecture Slides — Topic 2: Optimisation in Machine Learning

## The Optimisation Problem
Training a machine learning model is fundamentally an optimisation problem:

**Find w* = argmin_w L(w)**

where L is the loss function over the training data. We cannot solve this analytically for most models → use iterative gradient-based methods.

---

## Gradient Descent (Review + Deep Dive)

### The Update Rule
**w ← w − α · ∇_w L(w)**

- α = learning rate (step size)
- ∇_w L = gradient of loss w.r.t. weights
- We move in the direction of steepest descent

### Visualising the Loss Landscape
Think of the loss as a hilly terrain. Gradient descent is like a ball rolling downhill:
- The gradient tells us which direction is uphill
- We step in the opposite direction
- The learning rate controls how far we step

**Challenges**: saddle points (flat regions), local minima, steep ravines (ill-conditioning)

---

## Variants

### Batch GD → SGD → Mini-batch GD

| Variant | Update frequency | Gradient noise | GPU efficiency |
|---|---|---|---|
| Batch | Once per epoch | Very low | Poor (can't parallelise) |
| SGD | Once per sample | Very high | Poor |
| Mini-batch ✓ | Once per batch | Moderate | Excellent |

Mini-batch (size 32–256) is the standard. Noise from mini-batch acts as a regulariser.

---

## Advanced Optimisers

### Momentum
Accumulates past gradients as a velocity vector. Prevents oscillation; speeds up convergence in flat regions.

**v ← β·v + (1−β)·∇L** &nbsp;&nbsp; **w ← w − α·v**

β = 0.9 means "90% of the previous velocity". Like a ball rolling with inertia.

### RMSProp
Adapts learning rate by dividing by the root-mean-square of recent gradients. Larger historical gradient → smaller step.

**E[g²] ← β·E[g²] + (1−β)·g²** &nbsp;&nbsp; **w ← w − α/√(E[g²]+ε) · g**

Good for non-stationary objectives; helps with ill-conditioning.

### Adam ✓ (Default Choice)
Combines Momentum + RMSProp with bias correction for the initial steps.

- **m ← β₁m + (1−β₁)g** (first moment: mean gradient)
- **v ← β₂v + (1−β₂)g²** (second moment: mean squared gradient)
- **ŵ ← w − α·m̂/√(v̂+ε)** (bias-corrected update)

**Defaults**: α=0.001, β₁=0.9, β₂=0.999. Works well across nearly all tasks.

---

## Learning Rate Schedules

A fixed learning rate is rarely optimal. Schedules adapt α over training:

| Schedule | Description | Best For |
|---|---|---|
| **Step decay** | Multiply by factor γ every k epochs | Simple, effective |
| **Cosine annealing** | Smooth decrease following cosine curve | Most modern models |
| **Warmup + decay** | Ramp up then decay | Transformers, large models |
| **Reduce on plateau** | Decrease when val loss stops improving | Easy to set up |

**Key insight**: use a high lr early (fast exploration), low lr late (fine convergence).

---

## Diagnosing Training Issues

### Loss Not Decreasing
- Learning rate too low → increase by 10×
- Vanishing gradients → check activation functions, use residual connections
- Data not normalised → normalise inputs to zero mean, unit variance

### Loss Oscillating / Diverging
- Learning rate too high → decrease by 10×
- Batch size too small → increase batch size
- Exploding gradients → add gradient clipping

### Validation Loss Increasing (Overfitting)
- Add regularisation (L2, dropout)
- Get more training data
- Reduce model complexity
- Use data augmentation

---

## Second-Order Methods (Overview)
Newton's method uses the **Hessian** (second derivatives) for more accurate steps. Much faster convergence but O(n²) or O(n³) cost per step — impractical for large networks. L-BFGS approximates the Hessian; used for small models and fine-tuning.

---

## Key Takeaways
1. Mini-batch gradient descent + Adam is the standard starting point
2. The learning rate is the most important hyperparameter
3. Use a schedule: start high, end low
4. Diagnose training issues by observing the training and validation loss curves
5. Gradient clipping prevents instability in deep/recurrent networks

---
*Source: Topic 2 lecture slides. Key exam topics: Adam optimiser, learning rate schedules, diagnosing training problems.*`,

  ex1: `# Exercise Sheet — Week 1: Machine Learning Fundamentals

## Learning Objectives
After completing these exercises, you should be able to:
- Identify ML paradigms and appropriate algorithms for each problem
- Compute basic evaluation metrics from a confusion matrix
- Explain overfitting and underfitting, and identify fixes
- Describe the training loop and the role of each component

---

## Conceptual Review

### ML Paradigms
**Supervised learning** requires labelled training data (input-output pairs). The model learns a mapping that generalises to unseen inputs.

**Unsupervised learning** finds structure in data without labels. K-means clustering groups similar points; PCA finds directions of maximum variance.

**Reinforcement learning** trains an agent by rewarding desired behaviours. The agent takes actions in an environment, receives rewards, and optimises a policy.

### The Bias-Variance Tradeoff
- **Bias** = systematic error. A high-bias model makes overly simplistic assumptions (underfits).
- **Variance** = sensitivity to training data. A high-variance model memorises noise (overfits).
- Goal: minimise both by choosing the right model complexity and regularisation.

---

## Exercise 1 — Confusion Matrix Analysis

Given results from a binary classifier on 200 test samples:

|  | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | 70 (TP) | 10 (FN) |
| **Actual Negative** | 20 (FP) | 100 (TN) |

**Compute:**
- **Accuracy** = (70 + 100) / 200 = **85%**
- **Precision** = 70 / (70 + 20) = **77.8%**
- **Recall** = 70 / (70 + 10) = **87.5%**
- **F1 Score** = 2 × (0.778 × 0.875) / (0.778 + 0.875) = **82.4%**

**Interpretation**: High recall means few actual positives are missed (good for medical screening). Lower precision means some false alarms. Whether to prioritise precision or recall depends on the application cost.

---

## Exercise 2 — Identify the Problem

For each scenario, identify whether it is overfitting, underfitting, or well-fitted:

1. Training accuracy: 97%, Test accuracy: 68% → **Overfitting**
   - Fix: regularisation, more training data, simpler model, dropout
2. Training accuracy: 65%, Test accuracy: 63% → **Underfitting**
   - Fix: more complex model, more features, longer training, less regularisation
3. Training accuracy: 91%, Test accuracy: 89% → **Well-fitted**
   - Action: deploy; monitor for distribution shift

---

## Exercise 3 — Training Loop Walk-through

Describe what happens in one training iteration for a simple neural network:

1. **Forward pass**: input x propagates through layers; each layer computes z = Wx + b, then a = f(z). Final layer produces prediction ŷ.
2. **Loss computation**: L = cross_entropy(ŷ, y) — scalar measuring how wrong ŷ is
3. **Backward pass**: compute ∂L/∂W for every layer via chain rule (backpropagation)
4. **Parameter update**: W ← W − α · ∂L/∂W for each weight matrix

After this iteration, weights have moved slightly in the direction that reduces the loss.

---

## Exercise 4 — Choosing an Algorithm

For each problem, suggest an appropriate ML approach and justify:

1. **Predict house prices from size, location, rooms** → Linear regression (continuous target, interpretable features)
2. **Detect fraudulent transactions (1% fraud rate)** → Gradient boosted trees or neural network with class weighting; use F1/AUC, not accuracy
3. **Cluster customer segments for marketing** → K-means or DBSCAN (unsupervised, no labels available)
4. **Play chess** → Reinforcement learning + neural network (AlphaZero style)

---

## Key Formulas Reference

| Metric | Formula |
|---|---|
| Accuracy | (TP + TN) / (TP + TN + FP + FN) |
| Precision | TP / (TP + FP) |
| Recall | TP / (TP + FN) |
| F1 Score | 2 · P · R / (P + R) |
| MSE | (1/n) Σ(y − ŷ)² |
| Cross-Entropy | −Σ y log(ŷ) |

---
*Source: Week 1 exercise sheet. Practice computing metrics and diagnosing model behaviour before the Week 2 quiz.*`,

  ex2: `# Practice Problems — Week 2: Convolutional Neural Networks

## Learning Objectives
- Calculate output dimensions of convolutional and pooling layers
- Explain the purpose of each component in a CNN
- Identify appropriate CNN design choices for given tasks
- Reason about transfer learning and when to apply it

---

## Conceptual Review

### Why CNNs for Images?
Images have spatial structure — nearby pixels are correlated. Fully connected networks ignore this and scale poorly (65,536 inputs for a 256×256 image). CNNs exploit:
- **Local connectivity**: filters see only a small region at once
- **Weight sharing**: the same filter detects the same pattern anywhere in the image
- **Hierarchical features**: shallow layers detect edges; deep layers detect objects

### The Role of Each Layer
- **Conv + ReLU**: detect features (edges, textures, shapes)
- **Pooling**: reduce spatial size, increase invariance to small translations
- **Flatten**: convert 3D feature maps to 1D vector
- **FC + Softmax**: combine all features; produce class probabilities

---

## Exercise 1 — Computing Output Dimensions

Use the formula: **H_out = ⌊(H_in + 2P − K) / S⌋ + 1**
where P = padding, K = kernel size, S = stride.

**Problem**: Input 32×32, 32 filters of 3×3, stride=1, same padding.
- Same padding: P = 1 → H_out = ⌊(32 + 2 − 3)/1⌋ + 1 = **32×32**
- Output: 32×32×32

**Problem**: Apply 2×2 max pool, stride=2.
- H_out = ⌊(32 − 2)/2⌋ + 1 = **16×16**
- Output: 16×16×32

**Problem**: Second conv layer, 64 filters of 3×3, same padding.
- Output: **16×16×64**

**Problem**: Another 2×2 max pool.
- Output: **8×8×64**

**Flatten → FC layer**: 8×8×64 = **4,096** input neurons.

---

## Exercise 2 — Parameter Counting

Count parameters in each layer (including biases):

| Layer | Calculation | Parameters |
|---|---|---|
| Conv 3×3, 3 in → 32 out | 3×3×3×32 + 32 | **896** |
| Conv 3×3, 32 in → 64 out | 3×3×32×64 + 64 | **18,496** |
| FC 4096 → 128 | 4096×128 + 128 | **524,416** |
| FC 128 → 10 | 128×10 + 10 | **1,290** |

Compare to a fully-connected network on 32×32×3 input → 128 hidden → 10 out:
- FC layer 1: 3072×128 + 128 = 393,344 parameters
- CNN equivalent (two conv layers + FC): only ~545,000 total but with much better feature extraction

---

## Exercise 3 — Transfer Learning Decision

For each scenario, decide: **feature extraction** or **fine-tuning**?

1. **Medical X-ray dataset: 500 images, pre-trained ResNet50 available**
   → **Feature extraction only**. With 500 images, fine-tuning pre-trained weights risks catastrophic overfitting. Freeze all conv layers; train only a new FC head.

2. **Dog breed classifier: 50,000 images, pre-trained on ImageNet**
   → **Fine-tune upper layers**. Enough data to safely update upper layers for dog-specific features. Freeze early layers (edge detectors still useful); unfreeze layers 30+ with a very small lr (1e-5).

3. **Satellite image classification: 10,000 images, very different from ImageNet**
   → **Fine-tune all or most layers**. Domain is very different (aerial vs natural images). More layers need adaptation; use very small learning rate and monitor validation loss carefully.

---

## Exercise 4 — Short Answer

**Q: Why do CNNs use small filters (3×3) rather than large ones (11×11)?**
A: Two stacked 3×3 conv layers have the same receptive field as one 5×5 layer but fewer parameters (2×9=18 vs 25) and one more non-linearity. Three 3×3 layers match one 7×7 with 27 vs 49 parameters. Smaller filters are parameter-efficient and introduce more non-linearity.

**Q: What is the purpose of global average pooling (GAP) at the end of modern CNNs?**
A: GAP replaces the large FC layer by averaging each feature map to a single value. For a 7×7×512 feature map: FC needs 7×7×512 = 25,088 weights per output neuron; GAP needs 0 additional parameters and provides built-in spatial averaging regularisation.

**Q: Explain why ReLU is applied after each conv layer.**
A: Convolution is a linear operation. Without a non-linear activation, stacking multiple conv layers is equivalent to one conv layer — no additional expressive power is gained. ReLU introduces non-linearity and creates sparse, efficient representations.

---
*Source: Week 2 practice problems. Review convolution math and transfer learning before the midterm.*`,
}

export const availabilitySlots = {
  Mon: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  Tue: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  Wed: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  Thu: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  Fri: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
  Sat: ['10:00', '12:00', '14:00', '16:00'],
  Sun: ['10:00', '12:00', '14:00', '16:00'],
}

export const studyCoinsStore = [
  {
    id: 'expanded-recommendations',
    name: 'Expanded Recommendations',
    description: 'Unlock 8 recommendations instead of 4 - discover more compatible study partners',
    cost: 30,
    category: 'matching',
    icon: '🌟',
  },
  {
    id: 'export-notes',
    name: 'Export to PDF',
    description: 'Save and export your meeting notes, agendas, and study plans as PDF documents',
    cost: 15,
    category: 'tools',
    icon: '📄',
  },
]

export const studySessionTemplates = [
  {
    id: 'template1',
    name: 'Collaborative Problem Solving',
    duration: '60 min',
    breakdown: [
      { phase: 'Intro & Topic Setup', time: '5 min' },
      { phase: 'Warm-up Problem', time: '10 min' },
      { phase: 'Main Problem Solving', time: '35 min' },
      { phase: 'Review & Q&A', time: '10 min' },
    ],
    description: 'Perfect for working through coding problems, math proofs, or algorithm design.',
  },
  {
    id: 'template2',
    name: 'Concept Explanation Exchange',
    duration: '45 min',
    breakdown: [
      { phase: 'Buddy 1 Explains Concept', time: '15 min' },
      { phase: 'Q&A & Clarification', time: '5 min' },
      { phase: 'Buddy 2 Explains Concept', time: '15 min' },
      { phase: 'Q&A & Clarification', time: '5 min' },
      { phase: 'Wrap-up', time: '5 min' },
    ],
    description: 'Great for deepening understanding through teaching each other key topics.',
  },
  {
    id: 'template3',
    name: 'Quiz & Review Session',
    duration: '50 min',
    breakdown: [
      { phase: 'Setup & Ground Rules', time: '5 min' },
      { phase: 'Quiz Round 1', time: '15 min' },
      { phase: 'Review Answers', time: '10 min' },
      { phase: 'Quiz Round 2', time: '15 min' },
      { phase: 'Final Discussion', time: '5 min' },
    ],
    description: 'Ideal for exam prep and testing your knowledge in a supportive environment.',
  },
]
