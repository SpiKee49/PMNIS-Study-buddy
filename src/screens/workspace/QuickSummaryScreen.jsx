import { useState } from 'react'
import { ChevronLeft, Upload, FileText, Folder, X, BookOpen, Download, Lock } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'

// ── Markdown renderer ────────────────────────────────────────────────────────

function renderInline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, idx) =>
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

// ── PDF export ───────────────────────────────────────────────────────────────

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

// ── Sample data ──────────────────────────────────────────────────────────────

const folderFiles = {
  lecture: [
    { id: 'lec1', name: 'Lecture Notes - Topic 1.pdf', type: 'pdf', size: '2.1 MB' },
    { id: 'lec2', name: 'Lecture Slides - Topic 2.pptx', type: 'pptx', size: '3.4 MB' },
  ],
  exercise: [
    { id: 'ex1', name: 'Exercise Sheet - Week 1.docx', type: 'docx', size: '1.6 MB' },
    { id: 'ex2', name: 'Practice Problems - Week 2.pdf', type: 'pdf', size: '2.9 MB' },
  ],
}

function generateSummary(files) {
  const names = files.map(f => f.name).join(', ')
  return `# Study Notes Summary

## Overview
This summary was generated from ${files.length} selected file${files.length > 1 ? 's' : ''}: ${names}.

## Key Concepts

### Core Ideas
- **Definition**: A clear understanding of foundational terms and principles
- **Scope**: The range of topics covered across the selected materials
- **Relevance**: How the material connects to broader subject knowledge

### Important Principles
- **Principle 1**: Always start from first principles and build upward
- **Principle 2**: Connect new knowledge to existing mental models
- **Principle 3**: Identify patterns that repeat across different contexts

## Main Topics Covered

### Topic A — Fundamentals
The fundamentals section introduces essential vocabulary and baseline concepts. Understanding these building blocks is critical before advancing to more complex material.

**Key points:**
- Terminology and definitions form the foundation
- Core rules and exceptions must be memorised
- Examples illustrate abstract ideas concretely

### Topic B — Applied Methods
Applied methods translate theoretical knowledge into practical techniques. This section focuses on step-by-step procedures and decision-making frameworks.

**Key points:**
- Follow structured problem-solving approaches
- Identify which method applies to each problem type
- Practice with varied examples to build fluency

### Topic C — Advanced Topics
Advanced topics build on the fundamentals and applied methods to tackle more complex scenarios, edge cases, and interdisciplinary connections.

## Formulas & References

- **Formula 1**: Result = Input × Factor + Constant
- **Formula 2**: Efficiency = Output / Input × 100%
- **Rule of thumb**: When in doubt, return to the definition

## Summary of Key Takeaways

1. Master the fundamentals before moving to advanced topics
2. Practice applying concepts to varied problem types
3. Review formulas and definitions regularly
4. Connect material across topics to build a complete picture
5. Use active recall rather than passive re-reading

---

*Generated from ${files.length} file${files.length > 1 ? 's' : ''}. Review and supplement with your own notes for best results.*`
}

// ── Screen ───────────────────────────────────────────────────────────────────

export default function QuickSummaryScreen() {
  const { navigate, hasUnlocked } = useNav()

  const [showFilePicker, setShowFilePicker] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [summary, setSummary] = useState(null)

  const canExport = hasUnlocked('export-notes')

  const handleFileToggle = (file) => {
    setSelectedFiles(prev =>
      prev.some(f => f.id === file.id) ? prev.filter(f => f.id !== file.id) : [...prev, file]
    )
  }

  const handleGenerate = () => {
    if (selectedFiles.length === 0) return
    setIsGenerating(true)
    setSummary(null)
    setTimeout(() => {
      setSummary(generateSummary(selectedFiles))
      setIsGenerating(false)
    }, 2500)
  }

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
<body>${convertToHTML(summary)}</body>
</html>`)
    win.document.close()
    win.focus()
    win.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => navigate('my-workspace')} className="flex items-center gap-1 hover:text-gray-800">
            <ChevronLeft size={16} />
          </button>
          <span>/</span>
          <button onClick={() => navigate('my-workspace')} className="hover:text-gray-800">My Workspace</button>
          <span>/</span>
          <span className="font-semibold text-gray-900">Summarize Notes</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-6 space-y-6">

        {/* Upload section */}
        <div className="bg-white rounded-3xl shadow-sm p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-violet-100 rounded-2xl flex items-center justify-center">
              <Upload size={20} className="text-violet-600" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">Select Source Files</h2>
              <p className="text-xs text-gray-500">Choose files to generate a summary from</p>
            </div>
          </div>

          <div
            onClick={() => setShowFilePicker(true)}
            className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center bg-gray-50 cursor-pointer hover:border-violet-300 hover:bg-violet-50 transition-all mb-5"
          >
            <Upload size={22} className="text-gray-400 mx-auto mb-2" />
            <p className="text-sm font-semibold text-gray-600">Drop files here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">PDF, DOCX, images, text notes</p>
          </div>

          {selectedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {selectedFiles.map(f => (
                <span key={f.id} className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-medium px-3 py-1.5 rounded-full">
                  <FileText size={11} />
                  {f.name}
                  <button onClick={() => handleFileToggle(f)} className="ml-0.5 hover:text-violet-900">
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          )}

          <button
            onClick={handleGenerate}
            disabled={selectedFiles.length === 0 || isGenerating}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl disabled:opacity-40 transition-opacity"
          >
            {isGenerating ? 'Generating summary…' : 'Generate Summary'}
          </button>
        </div>

        {/* Generating skeleton */}
        {isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border-4 border-violet-200 border-t-violet-600 animate-spin" />
            <p className="text-sm text-gray-500 font-medium">Analysing your files and writing summary…</p>
          </div>
        )}

        {/* Summary document */}
        {summary && !isGenerating && (
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-violet-100 rounded-2xl flex items-center justify-center">
                  <BookOpen size={20} className="text-violet-600" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900">Generated Summary</h2>
                  <p className="text-xs text-gray-500">From {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              {canExport ? (
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-xl transition-colors"
                >
                  <Download size={15} />
                  Download PDF
                </button>
              ) : (
                <div className="flex flex-col items-end gap-1">
                  <button
                    onClick={() => navigate('coins-store')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-400 text-sm font-medium rounded-xl transition-colors"
                  >
                    <Lock size={15} />
                    Download PDF
                  </button>
                  <span className="text-xs text-gray-400">Unlock with <span className="text-amber-500 font-semibold">15 coins</span> in the Store</span>
                </div>
              )}
            </div>

            <div className="border border-gray-100 rounded-2xl p-6">
              <MarkdownDocument content={summary} />
            </div>
          </div>
        )}
      </div>

      {/* File picker modal */}
      {showFilePicker && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Select Files</h3>
              <button onClick={() => setShowFilePicker(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">Choose files from the folders below.</p>

            <div className="space-y-3 mb-5">
              {Object.entries(folderFiles).map(([folder, files]) => (
                <div key={folder} className="border border-gray-200 rounded-2xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Folder size={15} className="text-violet-500" />
                    <span className="text-sm font-semibold text-gray-700 capitalize">{folder}</span>
                  </div>
                  <div className="space-y-1.5">
                    {files.map(file => {
                      const isSelected = selectedFiles.some(f => f.id === file.id)
                      return (
                        <button
                          key={file.id}
                          onClick={() => handleFileToggle(file)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-colors ${isSelected ? 'bg-violet-50 border border-violet-200' : 'bg-gray-50 hover:bg-gray-100'}`}
                        >
                          <FileText size={14} className={isSelected ? 'text-violet-500' : 'text-gray-400'} />
                          <span className="flex-1 text-left text-sm font-medium text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-400">{file.size}</span>
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleFileToggle(file)}
                            onClick={e => e.stopPropagation()}
                            className="accent-violet-600"
                          />
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowFilePicker(false)}
              disabled={selectedFiles.length === 0}
              className="w-full py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl disabled:opacity-40 transition-colors"
            >
              {selectedFiles.length === 0 ? 'Select files above' : `Confirm ${selectedFiles.length} file${selectedFiles.length > 1 ? 's' : ''}`}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
