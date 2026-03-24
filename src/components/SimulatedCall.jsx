import { useEffect, useState } from 'react'
import { Phone, Mic, MicOff, Video, VideoOff } from 'lucide-react'
import Avatar from './Avatar'

export default function SimulatedCall({ buddy, onCallEnd }) {
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const [videoOn, setVideoOn] = useState(true)
  const CALL_DURATION = 5000 // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(prev => {
        const next = prev + 1
        if (next >= 5) {
          clearInterval(interval)
          setTimeout(() => onCallEnd(), 500)
          return next
        }
        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [onCallEnd])

  const formatTime = (seconds) => {
    return `0${seconds < 10 ? '0' : ''}${Math.min(seconds, 9)}`
  }

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 p-4">
      {/* Background video effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-gray-900 to-indigo-600/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Buddy Avatar - Incoming */}
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full border-4 border-violet-400 overflow-hidden mb-4 shadow-lg shadow-violet-500/50 animate-pulse">
            <Avatar
              initials={buddy.avatar}
              colorClass={buddy.avatarColor}
              size="lg"
              online={true}
            />
          </div>
          <p className="text-2xl font-bold text-white">{buddy.name}</p>
          <p className="text-sm text-gray-300 mt-1">{buddy.subjects?.[0] || 'Study Session'}</p>
        </div>

        {/* Call Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
          <p className="text-gray-200 font-mono text-lg">
            0:{formatTime(timeElapsed)} seconds
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              isMuted
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isMuted ? (
              <MicOff size={24} className="text-white" />
            ) : (
              <Mic size={24} className="text-white" />
            )}
          </button>

          <button
            onClick={() => setVideoOn(!videoOn)}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
              videoOn
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-red-500 hover:bg-red-600'
            }`}
          >
            {videoOn ? (
              <Video size={24} className="text-white" />
            ) : (
              <VideoOff size={24} className="text-white" />
            )}
          </button>

          <button
            onClick={() => onCallEnd()}
            className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-all"
          >
            <Phone size={24} className="text-white rotate-135" />
          </button>
        </div>

        {/* Status */}
        <p className="text-sm text-gray-400 text-center max-w-xs">
          {isMuted ? 'Microphone off' : 'Microphone on'} • {videoOn ? 'Video on' : 'Video off'}
        </p>

        {/* Auto disconnect message */}
        {timeElapsed >= 4 && (
          <p className="text-sm text-yellow-300 animate-pulse">
            Disconnecting in {5 - timeElapsed}...
          </p>
        )}
      </div>
    </div>
  )
}
