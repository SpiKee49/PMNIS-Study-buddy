export const defaultMatchPreferences = {
  learningStyle: 'medium',
  studyVibe: 'medium',
  subjects: 'high',
  availability: 'high',
  yearProximity: 'low',
  rating: 'medium',
}

const WEIGHT = { high: 3, medium: 2, low: 1 }

const parseYear = (y) => {
  const m = (y || '').match(/(\d+)/)
  return m ? parseInt(m[1]) : 3
}

const getDays = (slots) => (slots || []).map(s => s.split(' ')[0])

export function computeMatchScore(currentUser, student, preferences = {}) {
  const prefs = { ...defaultMatchPreferences, ...preferences }
  const myVibe = currentUser.studyVibe || 'Structured'
  const mySubjects = currentUser.subjects || []
  const theirSubjects = student.subjects || []
  const sharedSubjects = mySubjects.filter(s => theirSubjects.includes(s))
  const myDays = getDays(currentUser.availability)
  const theirDays = getDays(student.availability || [])
  const sharedDays = myDays.filter(d => theirDays.includes(d))
  const myYear = parseYear(currentUser.year)
  const theirYear = parseYear(student.year)
  const yearDiff = Math.abs(myYear - theirYear)

  const factors = [
    { key: 'learningStyle', value: currentUser.learningStyle === student.learningStyle ? 1 : 0.2 },
    { key: 'studyVibe', value: myVibe === student.studyVibe ? 1 : 0.2 },
    { key: 'subjects', value: sharedSubjects.length / Math.max(mySubjects.length, theirSubjects.length, 1) },
    { key: 'availability', value: sharedDays.length / Math.max(myDays.length, theirDays.length, 1) },
    { key: 'yearProximity', value: Math.max(0, 1 - yearDiff / 4) },
    { key: 'rating', value: (student.rating - 1) / 4 },
  ]

  let totalWeight = 0
  let weightedSum = 0
  for (const f of factors) {
    const w = WEIGHT[prefs[f.key]] || 2
    totalWeight += w
    weightedSum += f.value * w
  }
  const score = Math.round((weightedSum / totalWeight) * 100)

  const positives = []
  const negatives = []

  if (currentUser.learningStyle === student.learningStyle)
    positives.push(`Same ${student.learningStyle} learning style`)
  else if (prefs.learningStyle !== 'low')
    negatives.push(`Different learning styles (${currentUser.learningStyle} vs ${student.learningStyle})`)

  if (myVibe === student.studyVibe)
    positives.push(`Matching study vibe — ${student.studyVibe}`)
  else if (prefs.studyVibe !== 'low' && student.studyVibe)
    negatives.push(`Different study vibes (${myVibe} vs ${student.studyVibe})`)

  if (sharedSubjects.length > 0)
    positives.push(`${sharedSubjects.length} shared subject${sharedSubjects.length > 1 ? 's' : ''}: ${sharedSubjects.slice(0, 2).join(', ')}${sharedSubjects.length > 2 ? '…' : ''}`)
  else if (prefs.subjects !== 'low')
    negatives.push('No overlapping subjects')

  if (sharedDays.length > 0)
    positives.push(`Schedule overlaps on ${sharedDays.join(', ')}`)
  else if (prefs.availability !== 'low')
    negatives.push('No overlapping availability')

  if (yearDiff === 0)
    positives.push(`Same academic year (${student.year})`)
  else if (yearDiff <= 1)
    positives.push(`Close academic year (${student.year})`)
  else if (prefs.yearProximity !== 'low')
    negatives.push(`${yearDiff}-year gap in academic level`)

  if (student.rating >= 4.5)
    positives.push(`Highly rated by peers (${student.rating}★)`)
  else if (student.rating < 3.5 && prefs.rating !== 'low')
    negatives.push(`Lower peer rating (${student.rating}★)`)

  return { score, positives, negatives }
}

export function getMatchLabel(score) {
  if (score >= 85) return { label: 'Excellent Match', bg: 'bg-violet-600', text: 'text-white' }
  if (score >= 70) return { label: 'Great Match', bg: 'bg-violet-100', text: 'text-violet-700' }
  if (score >= 55) return { label: 'Good Match', bg: 'bg-blue-100', text: 'text-blue-700' }
  if (score >= 40) return { label: 'Fair Match', bg: 'bg-amber-100', text: 'text-amber-700' }
  return { label: 'Low Match', bg: 'bg-gray-100', text: 'text-gray-500' }
}
