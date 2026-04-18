import { useState, useEffect } from 'react'
import { ChevronLeft, FileText, BookOpen, Download, Lock, Pencil, Check, RefreshCw } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import { materialSummaries } from '../../data/dummy'

// ── Inline renderer ───────────────────────────────────────────────────────────

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={idx} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
      : part
  )
}

function MarkdownDocument({ content }) {
  const lines = content.split('\n')
  const elements = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('# ')) {
      elements.push(<h1 key={i} className="text-2xl font-bold text-gray-900 mt-2 mb-4 pb-3 border-b-2 border-gray-200">{renderInline(line.slice(2))}</h1>)
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={i} className="text-lg font-bold text-gray-800 mt-7 mb-2 pb-1 border-b border-gray-100">{renderInline(line.slice(3))}</h2>)
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} className="text-sm font-bold text-gray-700 mt-4 mb-1 uppercase tracking-wide">{renderInline(line.slice(4))}</h3>)
    } else if (line === '---') {
      elements.push(<hr key={i} className="my-6 border-gray-200" />)
    } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
      elements.push(<p key={i} className="text-xs text-gray-400 italic mt-4">{line.slice(1, -1)}</p>)
    } else if (line.trim() !== '') {
      const isUnordered = line.startsWith('- ')
      const isOrdered = /^\d+\. /.test(line)
      if (isUnordered || isOrdered) {
        const items = []
        let j = i
        while (j < lines.length && (isUnordered ? lines[j].startsWith('- ') : /^\d+\. /.test(lines[j]))) {
          items.push(lines[j]); j++
        }
        const Tag = isOrdered ? 'ol' : 'ul'
        elements.push(
          <Tag key={i} className={isOrdered ? 'list-decimal list-inside space-y-1 my-2 ml-2' : 'list-disc list-inside space-y-1 my-2 ml-2'}>
            {items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700 leading-relaxed">
                {renderInline(isOrdered ? item.replace(/^\d+\. /, '') : item.slice(2))}
              </li>
            ))}
          </Tag>
        )
        i = j; continue
      }
      elements.push(<p key={i} className="text-sm text-gray-700 leading-relaxed my-1">{renderInline(line)}</p>)
    }
    i++
  }
  return <div className="space-y-0.5">{elements}</div>
}

// ── PDF export ────────────────────────────────────────────────────────────────

function applyBold(text) { return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') }

function convertToHTML(markdown) {
  const lines = markdown.split('\n')
  const result = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.startsWith('# ')) { result.push(`<h1>${applyBold(line.slice(2))}</h1>`) }
    else if (line.startsWith('## ')) { result.push(`<h2>${applyBold(line.slice(3))}</h2>`) }
    else if (line.startsWith('### ')) { result.push(`<h3>${applyBold(line.slice(4))}</h3>`) }
    else if (line === '---') { result.push('<hr>') }
    else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) { result.push(`<p class="footer">${line.slice(1, -1)}</p>`) }
    else if (line.trim() === '') { /* skip */ }
    else if (line.startsWith('- ')) {
      const items = []
      while (i < lines.length && lines[i].startsWith('- ')) { items.push(`<li>${applyBold(lines[i].slice(2))}</li>`); i++ }
      result.push(`<ul>${items.join('')}</ul>`); continue
    } else if (/^\d+\. /.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\. /.test(lines[i])) { items.push(`<li>${applyBold(lines[i].replace(/^\d+\. /, ''))}</li>`); i++ }
      result.push(`<ol>${items.join('')}</ol>`); continue
    } else { result.push(`<p>${applyBold(line)}</p>`) }
    i++
  }
  return result.join('\n')
}

// ── Subject-specific prepared notes ──────────────────────────────────────────

const subjectNotes = {
  python: [
    `# Python — Core Syntax & Data Types

## Variables & Types
Python is a dynamically typed language — you don't declare types explicitly. The interpreter infers them at runtime.

- **int** — whole numbers: \`x = 42\`
- **float** — decimals: \`pi = 3.14\`
- **str** — text: \`name = "Alice"\`
- **bool** — \`True\` or \`False\`
- **NoneType** — absence of value: \`result = None\`

## Strings
- Concatenation: \`"Hello " + "World"\`
- f-strings: \`f"My name is {name}, age {age}"\`
- Methods: \`.upper()\`, \`.lower()\`, \`.strip()\`, \`.split()\`, \`.replace()\`
- Slicing: \`s[0:5]\`, \`s[-1]\`, \`s[::2]\`

## Collections

### List — ordered, mutable
\`\`\`
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits[0]        # "apple"
fruits[-1]       # "cherry"
\`\`\`

### Tuple — ordered, immutable
\`\`\`
point = (10, 20)
x, y = point     # unpacking
\`\`\`

### Dictionary — key-value pairs
\`\`\`
student = {"name": "Alice", "grade": 90}
student["name"]          # "Alice"
student.get("age", 0)    # 0 (default)
student.keys(), student.values(), student.items()
\`\`\`

### Set — unique values, unordered
\`\`\`
unique = {1, 2, 3, 2, 1}   # {1, 2, 3}
unique.add(4)
\`\`\`

## Type Conversion
- \`int("42")\` → 42
- \`str(3.14)\` → "3.14"
- \`list((1, 2, 3))\` → [1, 2, 3]
- \`bool(0)\` → False, \`bool(1)\` → True

*Note 1 of 4 — Study these before moving to control flow*`,

    `# Python — Control Flow & Functions

## Conditionals
\`\`\`
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
else:
    grade = "C"
\`\`\`
- Use \`and\`, \`or\`, \`not\` for compound conditions
- Ternary: \`value = "pass" if score >= 50 else "fail"\`

## Loops

### for loop — iterate over sequences
\`\`\`
for item in ["a", "b", "c"]:
    print(item)

for i in range(5):        # 0, 1, 2, 3, 4
    print(i)

for i, val in enumerate(items):
    print(i, val)
\`\`\`

### while loop
\`\`\`
count = 0
while count < 10:
    count += 1
\`\`\`
- \`break\` — exit loop immediately
- \`continue\` — skip to next iteration
- \`pass\` — placeholder (does nothing)

## Functions
\`\`\`
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Alice")              # "Hello, Alice!"
greet("Bob", "Hi")          # "Hi, Bob!"
\`\`\`

### *args and **kwargs
\`\`\`
def total(*numbers):
    return sum(numbers)

def describe(**info):
    for key, val in info.items():
        print(f"{key}: {val}")
\`\`\`

### Lambda functions
\`\`\`
square = lambda x: x ** 2
square(5)    # 25

sorted_names = sorted(names, key=lambda n: n.lower())
\`\`\`

## List Comprehensions
\`\`\`
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]
matrix  = [[r*c for c in range(3)] for r in range(3)]
\`\`\`

*Note 2 of 4 — Master loops and functions before tackling OOP*`,

    `# Python — Object-Oriented Programming

## Why OOP?
OOP organises code around **objects** (data + behaviour) rather than procedures. Promotes reuse, modularity, and clarity.

## Classes & Objects
\`\`\`
class Student:
    school = "FIT"          # class attribute (shared)

    def __init__(self, name, grade):
        self.name = name    # instance attribute
        self.grade = grade

    def describe(self):
        return f"{self.name} — grade {self.grade}"

    def __repr__(self):
        return f"Student({self.name!r}, {self.grade})"

alice = Student("Alice", 90)
alice.describe()            # "Alice — grade 90"
\`\`\`

## Inheritance
\`\`\`
class GradStudent(Student):
    def __init__(self, name, grade, thesis):
        super().__init__(name, grade)
        self.thesis = thesis

    def describe(self):
        base = super().describe()
        return f"{base} | Thesis: {self.thesis}"
\`\`\`

## Key Dunder Methods
| Method | Purpose |
| \`__init__\` | Constructor |
| \`__str__\` | Human-readable string |
| \`__repr__\` | Developer string |
| \`__len__\` | len(obj) |
| \`__eq__\` | obj == other |

## Properties & Encapsulation
\`\`\`
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius must be non-negative")
        self._radius = value

    @property
    def area(self):
        import math
        return math.pi * self._radius ** 2
\`\`\`

## Common Patterns
- **Composition** — objects contain other objects (prefer over deep inheritance)
- **Dataclass** — \`@dataclass\` decorator auto-generates \`__init__\`, \`__repr__\`
- **ABC** — abstract base classes enforce interface contracts

*Note 3 of 4 — OOP is essential for writing scalable Python programs*`,

    `# Python — Error Handling, Modules & Best Practices

## Exception Handling
\`\`\`
try:
    result = 10 / divisor
except ZeroDivisionError:
    print("Cannot divide by zero")
except (TypeError, ValueError) as e:
    print(f"Invalid input: {e}")
else:
    print(f"Result: {result}")   # runs if no exception
finally:
    print("Always runs")          # cleanup
\`\`\`

### Raising exceptions
\`\`\`
def set_age(age):
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    self.age = age
\`\`\`

### Custom exceptions
\`\`\`
class AppError(Exception):
    pass

class NotFoundError(AppError):
    def __init__(self, resource):
        super().__init__(f"{resource} not found")
\`\`\`

## Essential Standard Library Modules
| Module | Use |
| \`os\` | File system, paths, env variables |
| \`sys\` | Interpreter info, argv, exit |
| \`json\` | Encode/decode JSON |
| \`datetime\` | Dates and times |
| \`math\` | sqrt, floor, ceil, pi, e |
| \`random\` | Random numbers, choices |
| \`re\` | Regular expressions |
| \`collections\` | Counter, defaultdict, deque |
| \`itertools\` | Product, combinations, groupby |

## File I/O
\`\`\`
with open("data.txt", "r") as f:
    content = f.read()          # or f.readlines()

with open("output.txt", "w") as f:
    f.write("Hello, file!")
\`\`\`

## PEP 8 — Python Style Guide
- **Indentation**: 4 spaces (never tabs)
- **Line length**: max 79 characters
- **Naming**: \`snake_case\` for variables/functions, \`PascalCase\` for classes, \`UPPER_CASE\` for constants
- **Imports**: one per line, stdlib first, then third-party, then local
- **Blank lines**: 2 between top-level definitions, 1 inside classes
- **Docstrings**: use triple quotes for all public functions and classes

## Virtual Environments & Packages
\`\`\`
python -m venv venv
source venv/bin/activate      # Mac/Linux
venv\\Scripts\\activate         # Windows
pip install requests
pip freeze > requirements.txt
\`\`\`

*Note 4 of 4 — Combine all four notes for complete Python mastery*`,
  ],
}

function getSubjectNotes(subjectName) {
  const key = subjectName.toLowerCase().replace(/[^a-z]/g, '')
  // Try exact match first, then prefix match
  for (const k of Object.keys(subjectNotes)) {
    if (key.includes(k) || k.includes(key)) return subjectNotes[k]
  }
  return null
}

function getNote(materials, subjectName, index) {
  // Use prepared subject notes if available
  const notes = getSubjectNotes(subjectName)
  if (notes) return notes[index % notes.length]

  // Fall back to materialSummaries for known materials, cycling through them
  const all = materials.map(m => materialSummaries[m.id]).filter(Boolean)
  if (all.length > 0) return all[index % all.length]

  // Generic fallback
  const mat = materials[0]
  return `# ${mat?.name || 'Material'} — Study Notes (${index + 1}/4)\n\nNo specific notes available for this material. Upload course materials to generate subject-specific notes.`
}

// ── Screen ────────────────────────────────────────────────────────────────────

export default function SummaryScreen() {
  const { navigate, params, hasUnlocked, mySubjects } = useNav()
  const { subjectId, selectedMaterials = [] } = params

  const subject = mySubjects?.find(s => s.id === subjectId)
  const subjectName = subject?.name || ''

  const [summaryDocument, setSummaryDocument] = useState('')
  const [isGenerating, setIsGenerating] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editDraft, setEditDraft] = useState('')
  const [noteIndex, setNoteIndex] = useState(0)

  const canExport = hasUnlocked('export-notes')
  const totalNotes = getSubjectNotes(subjectName)?.length ?? 4

  const handleDownloadPDF = () => {
    const win = window.open('', '_blank')
    win.document.write(`<!DOCTYPE html>
<html>
<head>
  <title>Study Notes</title>
  <style>
    body { font-family: Georgia, serif; max-width: 780px; margin: 48px auto; padding: 0 24px; color: #111; font-size: 13px; line-height: 1.7; }
    h1 { font-size: 22px; font-weight: bold; border-bottom: 2px solid #ccc; padding-bottom: 8px; margin: 0 0 20px; }
    h2 { font-size: 16px; font-weight: bold; border-bottom: 1px solid #e5e5e5; padding-bottom: 4px; margin: 28px 0 10px; }
    h3 { font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.06em; color: #555; margin: 18px 0 6px; }
    p { margin: 4px 0 8px; }
    ul, ol { margin: 6px 0 10px; padding-left: 22px; }
    li { margin: 2px 0; }
    hr { border: none; border-top: 1px solid #ddd; margin: 24px 0; }
    strong { font-weight: 600; }
    .footer { font-size: 11px; color: #999; font-style: italic; margin-top: 16px; }
  </style>
</head>
<body>${convertToHTML(summaryDocument)}</body>
</html>`)
    win.document.close(); win.focus(); win.print()
  }

  const generate = (idx) => {
    setIsGenerating(true)
    setIsEditing(false)
    setTimeout(() => {
      setSummaryDocument(getNote(selectedMaterials, subjectName, idx))
      setIsGenerating(false)
    }, 1800)
  }

  useEffect(() => {
    if (selectedMaterials.length > 0) generate(0)
  }, [])

  const handleNext = () => {
    const next = (noteIndex + 1) % totalNotes
    setNoteIndex(next)
    generate(next)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <button onClick={() => navigate('subject-detail', { subjectId })} className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
            <ChevronLeft size={18} />
          </button>
          <span className="text-gray-300 text-sm">/</span>
          <span className="text-sm font-semibold text-gray-900">Summary Notes</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6 space-y-5">
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-violet-100 rounded-2xl flex items-center justify-center">
                <BookOpen size={24} className="text-violet-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Summary Notes</h1>
                <p className="text-sm text-gray-500">
                  {isGenerating
                    ? 'Generating notes…'
                    : `Note ${noteIndex + 1} of ${totalNotes} · ${subjectName}`}
                </p>
              </div>
            </div>

            {!isGenerating && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-3 py-2 bg-violet-100 hover:bg-violet-200 text-violet-700 text-sm font-semibold rounded-xl transition-colors"
                >
                  <RefreshCw size={13} />
                  Regenerate notes
                </button>

                {isEditing ? (
                  <button onClick={() => { setSummaryDocument(editDraft); setIsEditing(false) }} className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl">
                    <Check size={15} /> Save
                  </button>
                ) : (
                  <button onClick={() => { setEditDraft(summaryDocument); setIsEditing(true) }} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl">
                    <Pencil size={15} /> Edit
                  </button>
                )}

                {canExport ? (
                  <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl">
                    <Download size={15} /> Download PDF
                  </button>
                ) : (
                  <div className="flex flex-col items-end gap-1">
                    <button onClick={() => navigate('coins-store')} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-xl">
                      <Lock size={15} /> Download PDF
                    </button>
                    <span className="text-xs text-gray-400">Unlock with <span className="text-amber-500 font-semibold">15 coins</span></span>
                  </div>
                )}
              </div>
            )}
          </div>

          {isGenerating ? (
            <div className="space-y-6">
              <div className="animate-pulse space-y-3">
                <div className="h-6 bg-gray-200 rounded w-1/2" />
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-5/6" />
                    <div className="h-3 bg-gray-200 rounded w-4/5" />
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-400">Preparing study notes…</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                {isEditing ? (
                  <textarea
                    value={editDraft}
                    onChange={e => setEditDraft(e.target.value)}
                    className="w-full h-[60vh] px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-mono text-gray-800 leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-violet-400"
                    spellCheck={false}
                  />
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <MarkdownDocument content={summaryDocument} />
                  </div>
                )}
              </div>

              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-violet-700">
                    <FileText size={16} />
                    <span className="font-semibold text-sm">Sources</span>
                  </div>
                  <span className="text-xs text-violet-500 font-medium">
                    {totalNotes} notes available for {subjectName}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedMaterials.map(material => (
                    <span key={material.id} className="inline-flex items-center gap-1 px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">
                      <FileText size={11} />
                      {material.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
