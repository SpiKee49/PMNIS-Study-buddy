// Wizard of Oz matching engine
// Computes match score and reason text based on user preferences vs a student profile.

// Maps onboarding learning style IDs to the values used in student profiles
export const STYLE_ID_TO_LABEL = {
  visual: 'Visual',
  auditory: 'Auditory',
  reading: 'Reading/Writing',
  kinesthetic: 'Kinesthetic',
}

// Available study vibes (used in Settings match preferences)
export const STUDY_VIBES = ['Casual', 'Discussion', 'Structured']

// Returns true if two subject names overlap (handles partial matches like
// "Algorithms & Data Structures" vs "Algorithms" or "Data Structures")
function subjectsOverlap(userSubject, studentSubject) {
  const a = userSubject.toLowerCase()
  const b = studentSubject.toLowerCase()
  if (a === b) return true
  if (a.includes(b) || b.includes(a)) return true
  // First-word match: "Algorithms & Data Structures" ↔ "Algorithms"
  const aFirst = a.split(/[\s&,]/)[0]
  const bFirst = b.split(/[\s&,]/)[0]
  if (aFirst.length > 3 && aFirst === bFirst) return true
  return false
}

/**
 * Compute match between the current user and a student profile.
 *
 * @param {{ learningStyle: string, studyVibe: string, subjectNames: string[], university: string }} userPrefs
 * @param {object} student  — one entry from students array in dummy.js
 * @returns {{ score: number, reason: string }}
 */
export function computeMatch(userPrefs, student) {
  let score = 0
  const highlights = []

  // ── Subjects overlap (up to 45 pts, 7 per shared subject) ──────────────────
  const shared = student.subjects.filter(studentSubj =>
    userPrefs.subjectNames.some(us => subjectsOverlap(us, studentSubj))
  )
  const subjectPts = Math.min(shared.length * 7, 45)
  score += subjectPts
  if (shared.length >= 3) {
    highlights.push(`shares ${shared.length} subjects (${shared[0]}, ${shared[1]}…)`)
  } else if (shared.length === 2) {
    highlights.push(`studies ${shared[0]} & ${shared[1]}`)
  } else if (shared.length === 1) {
    highlights.push(`studies ${shared[0]}`)
  }

  // ── Learning style (25 pts) ─────────────────────────────────────────────────
  if (student.learningStyle === userPrefs.learningStyle) {
    score += 25
    highlights.push(`${userPrefs.learningStyle} learner`)
  }

  // ── Study vibe (15 pts) ─────────────────────────────────────────────────────
  if (student.studyVibe === userPrefs.studyVibe) {
    score += 15
    highlights.push(`${userPrefs.studyVibe} study vibe`)
  }

  // ── Same university (15 pts) ────────────────────────────────────────────────
  if (student.university === userPrefs.university) {
    score += 15
    highlights.push('same university')
  }

  const finalScore = Math.min(score, 99)

  // ── Build human-readable reason ─────────────────────────────────────────────
  let reason = ''
  const firstName = student.name.split(' ')[0]
  if (highlights.length === 0) {
    reason = `${firstName} has a different background but could offer a fresh perspective.`
  } else {
    const joined = highlights.join(', ')
    if (finalScore >= 88) {
      reason = `Excellent match! ${firstName} is a ${joined}.`
    } else if (finalScore >= 70) {
      reason = `Strong match: ${firstName} is a ${joined}.`
    } else {
      reason = `${firstName} is a ${joined}.`
    }
  }

  return { score: finalScore, reason }
}

/**
 * Returns sorted recommendation objects for the Home screen.
 *
 * @param {{ learningStyle: string, studyVibe: string, subjectNames: string[], university: string }} userPrefs
 * @param {object[]} students
 * @param {number} limit
 * @returns {{ id: string, type: 'buddy', text: string, action: string, targetId: string }[]}
 */
export function computeRecommendations(userPrefs, students, limit = 4) {
  return students
    .map(student => {
      const { score, reason } = computeMatch(userPrefs, student)
      return { student, score, reason }
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ student, reason }) => ({
      id: `rec-${student.id}`,
      type: 'buddy',
      text: reason,
      action: 'View Profile',
      targetId: student.id,
    }))
}
