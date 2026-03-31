import { useRef } from 'react'
import { useNav } from '../../context/NavigationContext'
import { ChevronLeft, Upload, FileText, Code, Presentation, File, Plus, MoreHorizontal, Trash2 } from 'lucide-react'

const fileIcons = {
  pdf: { icon: FileText, color: 'bg-rose-100 text-rose-600' },
  code: { icon: Code, color: 'bg-emerald-100 text-emerald-600' },
  slides: { icon: Presentation, color: 'bg-amber-100 text-amber-600' },
  doc: { icon: FileText, color: 'bg-blue-100 text-blue-600' },
}

// Guess file type from extension
function guessType(name) {
  const ext = name.split('.').pop().toLowerCase()
  if (ext === 'pdf') return 'pdf'
  if (['js', 'ts', 'py', 'java', 'c', 'cpp', 'cs'].includes(ext)) return 'code'
  if (['ppt', 'pptx', 'key'].includes(ext)) return 'slides'
  return 'doc'
}

function formatBytes(bytes) {
  if (!bytes) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function WorkspaceScreen() {
  const { params, goBack, allGroups, groupWorkspaceFiles, uploadGroupFile } = useNav()
  const group = allGroups.find(g => g.id === params.groupId) || allGroups[0]
  const fileInputRef = useRef(null)

  const files = groupWorkspaceFiles[group?.id] ?? groupWorkspaceFiles.global ?? []

  const totalBytes = files.reduce((sum, f) => {
    const raw = typeof f.sizeBytes === 'number' ? f.sizeBytes : 0
    return sum + raw
  }, 0)
  const usedMB = (15.8 + totalBytes / (1024 * 1024)).toFixed(1)
  const usedPct = Math.min(100, Math.round((parseFloat(usedMB) / 100) * 100))

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    uploadGroupFile(group.id, {
      name: file.name,
      size: formatBytes(file.size),
      sizeBytes: file.size,
      type: guessType(file.name),
    })
    e.target.value = ''
  }

  if (!group) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-8 py-4 flex items-center gap-3 shadow-sm">
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm font-medium transition-colors">
          <ChevronLeft size={18} /> Back
        </button>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Groups</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm text-gray-500">{group.name}</span>
        <span className="text-gray-300">/</span>
        <span className="text-sm font-semibold text-gray-700">Workspace</span>
        <div className="flex-1" />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 bg-violet-600 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-violet-700 transition-colors"
        >
          <Upload size={14} /> Upload File
        </button>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="max-w-4xl mx-auto px-8 py-6">
        {/* Storage usage */}
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-700">Storage Used</p>
            <p className="text-xs text-gray-500">{usedMB} MB / 100 MB</p>
          </div>
          <div className="h-2 bg-gray-100 rounded-full">
            <div className="h-2 bg-violet-500 rounded-full transition-all" style={{ width: `${usedPct}%` }} />
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { label: 'Note', icon: FileText, color: 'bg-violet-100 text-violet-600' },
            { label: 'Code', icon: Code, color: 'bg-emerald-100 text-emerald-600' },
            { label: 'Whiteboard', icon: Plus, color: 'bg-amber-100 text-amber-600' },
            { label: 'More', icon: MoreHorizontal, color: 'bg-gray-100 text-gray-600' },
          ].map(a => {
            const Icon = a.icon
            return (
              <button key={a.label} className="flex flex-col items-center gap-1.5 py-3 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-9 h-9 ${a.color} rounded-xl flex items-center justify-center`}>
                  <Icon size={16} />
                </div>
                <span className="text-[10px] font-semibold text-gray-600">{a.label}</span>
              </button>
            )
          })}
        </div>

        {/* Files */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-sm text-gray-800">Shared Files</h2>
            <span className="text-xs text-gray-400">{files.length} file{files.length !== 1 ? 's' : ''}</span>
          </div>

          {files.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-sm text-gray-400">No files yet.</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-3 text-xs text-violet-600 font-semibold hover:underline"
              >
                Upload the first file
              </button>
            </div>
          )}

          {files.map((file, i) => {
            const fileType = fileIcons[file.type] || { icon: File, color: 'bg-gray-100 text-gray-500' }
            const Icon = fileType.icon
            return (
              <div
                key={file.id}
                className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i < files.length - 1 ? 'border-b border-gray-50' : ''}`}
              >
                <div className={`w-10 h-10 ${fileType.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{file.size} · by {file.uploadedBy} · {file.time}</p>
                </div>
                <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100">
                  <MoreHorizontal size={14} className="text-gray-400" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Drop zone hint */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full mt-4 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-sm text-gray-400 hover:border-violet-300 hover:text-violet-500 transition-colors flex items-center justify-center gap-2"
        >
          <Upload size={15} />
          Drop files here or click to upload
        </button>
      </div>
    </div>
  )
}
