import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, Video, Send, Paperclip, FileText, Code, Presentation, File, Upload, Users } from 'lucide-react'
import { useNav } from '../../context/NavigationContext'
import SimulatedCall from '../../components/SimulatedCall'
import FeedbackForm from '../../components/FeedbackForm'
import { workspaceFiles } from '../../data/dummy'

const fileIcons = {
  pdf: { icon: FileText, color: 'bg-rose-100 text-rose-600' },
  code: { icon: Code, color: 'bg-emerald-100 text-emerald-600' },
  slides: { icon: Presentation, color: 'bg-amber-100 text-amber-600' },
  doc: { icon: FileText, color: 'bg-blue-100 text-blue-600' },
}

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

export default function SessionRoomScreen() {
  const { params, goBack } = useNav()
  const session = params?.session || null
  const fileInputRef = useRef(null)
  const bottomRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      id: 'init1',
      fromMe: false,
      sender: 'Maria',
      text: `Hey everyone! Ready to start the ${session?.subtitle || 'session'}? I've uploaded the notes from last week.`,
      time: session?.time || '—',
    },
    {
      id: 'init2',
      fromMe: false,
      sender: 'Tomáš',
      text: 'Just joined! Give me a sec to get set up.',
      time: session?.time || '—',
    },
  ])
  const [input, setInput] = useState('')
  const [files, setFiles] = useState([...workspaceFiles])
  const [showCall, setShowCall] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sessionBuddy = {
    name: session?.title || 'Study Session',
    avatar: session?.title?.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() || 'SS',
    avatarColor: 'bg-violet-500',
    subjects: [session?.subtitle].filter(Boolean),
  }

  const handleSend = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, {
      id: `m${Date.now()}`,
      fromMe: true,
      sender: 'You',
      text,
      time: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    }])
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setFiles(prev => [{
      id: `f${Date.now()}`,
      name: file.name,
      size: formatBytes(file.size),
      type: guessType(file.name),
      uploadedBy: 'You',
      time: 'Just now',
    }, ...prev])
    e.target.value = ''
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-sm">Session not found.</p>
          <button onClick={goBack} className="mt-3 text-violet-600 text-sm font-semibold">Go back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-3 shadow-sm flex-shrink-0">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button
            onClick={goBack}
            className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-bold text-gray-900 truncate">{session.title}</p>
              <span className={`w-2 h-2 ${session.color} rounded-full flex-shrink-0`} />
            </div>
            <p className="text-xs text-gray-500 truncate">{session.subtitle} · {session.time} · {session.day} · {session.duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-xl">
              <Users size={13} className="text-gray-400" />
              <span className="text-xs text-gray-500">3 members</span>
            </div>
            <button
              onClick={() => setShowCall(true)}
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <Video size={15} />
              Join Call
            </button>
          </div>
        </div>
      </div>

      {/* Body: chat left, files right */}
      <div className="flex flex-1 overflow-hidden max-w-6xl mx-auto w-full px-6 py-4 gap-4">

        {/* Chat */}
        <div className="flex flex-col flex-1 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Session Chat</p>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.fromMe ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[75%]">
                  {!msg.fromMe && (
                    <p className="text-[10px] font-semibold text-gray-400 mb-1 ml-1">{msg.sender}</p>
                  )}
                  <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.fromMe
                      ? 'bg-violet-600 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}>
                    <p>{msg.text}</p>
                    <p className={`text-[10px] mt-1 ${msg.fromMe ? 'text-violet-300' : 'text-gray-400'}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div className="border-t border-gray-100 px-4 py-3 flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <Paperclip size={14} className="text-gray-500" />
            </button>
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Message the group..."
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                input.trim() ? 'bg-violet-600 hover:bg-violet-700' : 'bg-gray-100'
              }`}
            >
              <Send size={14} className={input.trim() ? 'text-white' : 'text-gray-400'} />
            </button>
          </div>
        </div>

        {/* Shared Materials */}
        <div className="w-72 flex-shrink-0 flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Shared Materials</p>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1 text-xs font-semibold text-violet-600 hover:text-violet-700"
            >
              <Upload size={11} /> Upload
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {files.length === 0 && (
              <div className="py-10 text-center">
                <p className="text-xs text-gray-400">No files yet.</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-2 text-xs text-violet-600 font-semibold hover:underline"
                >
                  Upload the first file
                </button>
              </div>
            )}
            {files.map((file, i) => {
              const ft = fileIcons[file.type] || { icon: File, color: 'bg-gray-100 text-gray-500' }
              const Icon = ft.icon
              return (
                <div
                  key={file.id}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${i < files.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div className={`w-8 h-8 ${ft.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">{file.name}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{file.size} · {file.uploadedBy}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="m-3 py-3 border-2 border-dashed border-gray-200 rounded-xl text-xs text-gray-400 hover:border-violet-300 hover:text-violet-500 transition-colors flex items-center justify-center gap-1.5"
          >
            <Upload size={12} /> Drop files or click to upload
          </button>
        </div>
      </div>

      <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />

      {showCall && (
        <SimulatedCall
          buddy={sessionBuddy}
          onCallEnd={() => {
            setShowCall(false)
            setShowFeedback(true)
          }}
        />
      )}

      {showFeedback && (
        <FeedbackForm
          buddy={sessionBuddy}
          onClose={() => setShowFeedback(false)}
          onSubmit={() => setShowFeedback(false)}
        />
      )}
    </div>
  )
}
