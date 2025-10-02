'use client'

import { useState, useEffect } from 'react'
import { X, Mic, MicOff, Video, VideoOff, CheckCircle2, AlertCircle } from 'lucide-react'
import Button from '@/components/ui/Button'

interface DemoModalProps {
  onClose: () => void
}

type DemoStep = 'intro' | 'question' | 'responding' | 'feedback'

export default function DemoModal({ onClose }: DemoModalProps) {
  const [step, setStep] = useState<DemoStep>('intro')
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(90)
  const [userResponse, setUserResponse] = useState('')

  // Demo question
  const demoQuestion = "Tell me about a time when you had to explain a complex concept to someone unfamiliar with the topic. How did you ensure they understood?"

  // Simulated feedback
  const feedback = {
    structure: 85,
    clarity: 92,
    examples: 78,
    overall: "Strong use of the STAR method. Your example was relatable and well-explained. Consider adding more specific details about the outcome to strengthen your response."
  }

  useEffect(() => {
    if (step === 'responding' && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeRemaining])

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleStartDemo = () => {
    setStep('question')
    setTimeout(() => setStep('responding'), 3000)
    setTimeout(() => setStep('feedback'), 13000)
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Interactive Demo</h2>
            <p className="text-sm text-slate-600">Experience PrepViva in 90 seconds</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close demo"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Intro Step */}
          {step === 'intro' && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Welcome to Your Demo Interview</h3>
              
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                This is a brief demonstration of how PrepViva works. You&apos;ll receive one practice question 
                and instant AI feedback. No personal information is collected during this demo.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-xl mx-auto">
                <h4 className="font-semibold text-slate-900 mb-4">What to expect:</h4>
                <ul className="text-left space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>1 practice question (90 seconds to respond)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Instant AI analysis of your response</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>See how our feedback system works</span>
                  </li>
                </ul>
              </div>

              {/* Audio/Video Toggle */}
              <div className="flex gap-4 justify-center mb-8">
                <button
                  onClick={() => setAudioEnabled(!audioEnabled)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                    audioEnabled
                      ? 'bg-blue-50 border-blue-600 text-blue-700'
                      : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {audioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  <span className="font-medium">
                    {audioEnabled ? 'Microphone On' : 'Microphone Off'}
                  </span>
                </button>

                <button
                  onClick={() => setVideoEnabled(!videoEnabled)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                    videoEnabled
                      ? 'bg-blue-50 border-blue-600 text-blue-700'
                      : 'bg-white border-slate-300 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {videoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                  <span className="font-medium">
                    {videoEnabled ? 'Camera On' : 'Camera Off'}
                  </span>
                </button>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 max-w-xl mx-auto flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800 text-left">
                  This demo runs entirely in your browser. No audio, video, or text is recorded or transmitted. 
                  Your privacy is fully protected.
                </p>
              </div>

              <Button
                size="lg"
                variant="primary"
                onClick={handleStartDemo}
                className="text-lg px-12"
              >
                Start Demo Interview
              </Button>
            </div>
          )}

          {/* Question Step */}
          {step === 'question' && (
            <div className="py-8 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  Listening to Question...
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 max-w-2xl mx-auto">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                  Demo Question
                </p>
                <p className="text-xl text-slate-800 leading-relaxed">
                  {demoQuestion}
                </p>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-slate-600">
                  Take a moment to think about your response...
                </p>
              </div>
            </div>
          )}

          {/* Responding Step */}
          {step === 'responding' && (
            <div className="py-8 animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium mb-6">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  Recording Response
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 max-w-2xl mx-auto mb-8">
                <p className="text-sm text-slate-600 mb-4">
                  {demoQuestion}
                </p>
                <div className="bg-white rounded-lg p-4 border border-slate-200 min-h-[100px]">
                  <textarea
                    value={userResponse}
                    onChange={(e) => setUserResponse(e.target.value)}
                    placeholder="Type your response here, or speak if you enabled your microphone..."
                    className="w-full h-24 border-none outline-none resize-none text-slate-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-1">
                    {timeRemaining}s
                  </div>
                  <div className="text-sm text-slate-600">Time Remaining</div>
                </div>

                <div className="w-32 h-32 relative">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 56}
                      strokeDashoffset={2 * Math.PI * 56 * (1 - timeRemaining / 90)}
                      className="text-blue-600 transition-all duration-1000"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                  Analyzing your response in real-time...
                </p>
              </div>
            </div>
          )}

          {/* Feedback Step */}
          {step === 'feedback' && (
            <div className="py-8 animate-fade-in">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Instant Feedback Generated</h3>
                <p className="text-slate-600">
                  Here&apos;s how PrepViva evaluates your interview responses
                </p>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
                <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {feedback.structure}%
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">Structure</div>
                  <div className="text-xs text-slate-500">STAR method usage</div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {feedback.clarity}%
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">Clarity</div>
                  <div className="text-xs text-slate-500">Communication quality</div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-slate-200 text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {feedback.examples}%
                  </div>
                  <div className="text-sm font-medium text-slate-700 mb-1">Examples</div>
                  <div className="text-xs text-slate-500">Specific details</div>
                </div>
              </div>

              {/* Overall Feedback */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
                <h4 className="font-semibold text-slate-900 mb-2">Overall Assessment</h4>
                <p className="text-slate-700 leading-relaxed">
                  {feedback.overall}
                </p>
              </div>

              {/* Full Report Preview */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 max-w-2xl mx-auto mb-8">
                <h4 className="font-semibold text-slate-900 mb-4">In a full mock interview, you&apos;ll receive:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">15-page detailed PDF report</span>
                      <p className="text-sm text-slate-600">Comprehensive breakdown of every response</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">6-8 interview questions</span>
                      <p className="text-sm text-slate-600">Tailored to your target role/university</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Model answers & frameworks</span>
                      <p className="text-sm text-slate-600">Learn exactly what excellent responses look like</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Progress tracking</span>
                      <p className="text-sm text-slate-600">Watch your improvement over multiple sessions</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => window.location.href = '/pricing'}
                  className="text-lg"
                >
                  Start Full Practice - £29
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={onClose}
                >
                  Close Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

