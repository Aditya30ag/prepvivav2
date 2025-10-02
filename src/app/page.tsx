'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import TrustStrip from '@/components/sections/TrustStrip'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import DemoModal from '@/components/modals/DemoModal'
import ScrollProgress from '@/components/effects/ScrollProgress'
import CountUpNumber from '@/components/effects/CountUpNumber'
import MagneticButton from '@/components/effects/MagneticButton'
import dynamic from 'next/dynamic'

const ParallaxBackground = dynamic(
  () => import('@/components/effects/ParallaxBackground'),
  { ssr: false }
)
import { 
  GraduationCap, 
  Building2, 
  Heart, 
  ArrowRight,
  CheckCircle2,
  Play,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react'

type AudienceType = 'student' | 'university' | 'nhs'

export default function HomePage() {
  const [audience, setAudience] = useState<AudienceType>('student')
  const [showDemoModal, setShowDemoModal] = useState(false)

  const content = {
    student: {
      badge: 'For Students & Applicants',
      headline: 'Master Your Interview. Secure Your Future.',
      subheadline: 'AI-powered preparation for UK medical schools, universities, and competitive programmes',
      description: 'Practice with realistic interview scenarios tailored to Oxbridge, Russell Group, and medical school formats. Get instant AI feedback on structure, reasoning, and communication.',
      primaryCTA: 'Try Free Demo',
      secondaryCTA: 'View Pricing',
      primaryAction: () => setShowDemoModal(true),
      secondaryAction: '/pricing',
      icon: GraduationCap,
      stats: [
        { value: '10,847', label: 'Interviews Completed', icon: TrendingUp },
        { value: '92%', label: 'Confidence Boost', icon: CheckCircle2 },
        { value: '34%', label: 'Offer Rate Increase', icon: ArrowRight }
      ]
    },
    university: {
      badge: 'For Universities & Institutions',
      headline: 'Scale Interview Excellence Across Your Cohorts',
      subheadline: 'Enterprise-grade AI interview preparation for admissions offices and academic institutions',
      description: 'Deploy structured interview practice across entire student cohorts with institutional analytics, GDPR compliance, and UK data residency. Built for Russell Group and medical schools.',
      primaryCTA: 'Request Pilot Programme',
      secondaryCTA: 'View Case Studies',
      primaryAction: '/contact',
      secondaryAction: '/about',
      icon: Building2,
      stats: [
        { value: '24', label: 'University Partners', icon: Building2 },
        { value: '3,500+', label: 'Students Supported', icon: GraduationCap },
        { value: '100%', label: 'UK Data Compliant', icon: Shield }
      ]
    },
    nhs: {
      badge: 'For NHS Professionals',
      headline: 'Master NHS Values-Based Interviews',
      subheadline: 'Band 5 to Consultant preparation aligned to NHS values and KSF dimensions',
      description: 'Practice with scenarios built by NHS professionals. Cover compassion, clinical reasoning, and leadership competencies with instant structured feedback.',
      primaryCTA: 'Try Free Demo',
      secondaryCTA: 'Explore NHS Scenarios',
      primaryAction: () => setShowDemoModal(true),
      secondaryAction: '/nhs',
      icon: Heart,
      stats: [
        { value: '15', label: 'NHS Trusts', icon: Heart },
        { value: '400+', label: 'NHS Scenarios', icon: CheckCircle2 },
        { value: 'GMC', label: 'Standards Aligned', icon: Shield }
      ]
    }
  }

  const current = content[audience]
  const IconComponent = current.icon

  return (
    <>
      {/* Add scroll progress bar */}
      <ScrollProgress />
      
      {/* Add floating background orbs */}
      <ParallaxBackground />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-20 pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <Container size="xl" className="relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Audience Selector */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 p-1.5 bg-white rounded-full shadow-sm border border-slate-200">
                {(['student', 'university', 'nhs'] as const).map((aud) => {
                  const icons = {
                    student: GraduationCap,
                    university: Building2,
                    nhs: Heart
                  }
                  const Icon = icons[aud]
                  
                  return (
                    <button
                      key={aud}
                      onClick={() => setAudience(aud)}
                      aria-label={`Switch to ${aud} view`}
                      className={`
                        px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                        ${audience === aud
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {aud === 'student' ? 'Students' : aud === 'university' ? 'Universities' : 'NHS'}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center animate-fade-up">
              <div className="mb-6">
                <Badge variant="primary" size="md">
                  {current.badge}
                </Badge>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-slate-900">
                {current.headline}
              </h1>

              <p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-4 max-w-4xl mx-auto">
                {current.subheadline}
              </p>

              <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                {current.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <MagneticButton 
                  className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200"
                  strength={0.3}
                  onClick={typeof current.primaryAction === 'function' ? current.primaryAction : undefined}
                >
                  {current.primaryCTA}
                  <Play className="w-5 h-5 ml-2" />
                </MagneticButton>
                
                <Link href={typeof current.secondaryAction === 'string' ? current.secondaryAction : '#'}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-4"
                    data-event="hero_secondary_cta"
                  >
                    {current.secondaryCTA}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Microcopy */}
              <p className="text-sm text-slate-500 mb-12 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                No subscription required • From £22 per mock • Instant AI feedback
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                {current.stats.map((stat, idx) => {
                  const StatIcon = stat.icon
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-center mb-2">
                        <StatIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-3xl font-bold text-slate-900 mb-1">
                        {stat.value.includes('%') ? (
                          <CountUpNumber 
                            end={parseInt(stat.value)} 
                            suffix="%"
                            duration={2000}
                            className="text-3xl font-bold text-slate-900"
                          />
                        ) : stat.value.includes('+') ? (
                          <CountUpNumber 
                            end={parseInt(stat.value.replace(/[^0-9]/g, ''))} 
                            prefix="+"
                            duration={2000}
                            className="text-3xl font-bold text-slate-900"
                          />
                        ) : stat.value.includes(',') ? (
                          <CountUpNumber 
                            end={parseInt(stat.value.replace(/,/g, ''))} 
                            duration={2000}
                            className="text-3xl font-bold text-slate-900"
                          />
                        ) : (
                          stat.value
                        )}
                      </div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Visual Demo Preview */}
            <div className="mt-20 relative">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-white font-medium text-sm">
                      Live Interview Session
                    </span>
                  </div>
                  <Badge variant="success" size="sm">
                    In Progress
                  </Badge>
                </div>

                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-lg mb-1">
                        {audience === 'student' ? 'Oxford Medicine MMI' : 
                         audience === 'university' ? 'Admissions Assessment' : 
                         'NHS Band 7 Interview'}
                      </h3>
                      <p className="text-sm text-slate-600">
                        45-minute structured interview • Real-time AI analysis
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-6 mb-6 border border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                      Current Question
                    </p>
                    <p className="text-base text-slate-800 leading-relaxed">
                      {audience === 'student' 
                        ? '"Explain how you would approach a patient presenting with acute chest pain in A&E, considering both clinical and ethical dimensions."'
                        : audience === 'university'
                        ? '"How would your institution adapt interview processes to ensure equitable access for students from diverse socioeconomic backgrounds?"'
                        : '"Describe a situation where you had to demonstrate NHS values while managing conflicting priorities in a resource-constrained environment."'
                      }
                    </p>
                  </div>

                  {/* Real-time Scores */}
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: 'Structure', value: 89, color: 'blue' },
                      { label: 'Reasoning', value: 92, color: 'purple' },
                      { label: 'Communication', value: 87, color: 'green' },
                      { label: 'Confidence', value: 94, color: 'blue' }
                    ].map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-3xl font-bold text-${metric.color}-600 mb-1`}>
                          {metric.value}%
                        </div>
                        <div className="text-xs text-slate-600">{metric.label}</div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                          <div
                            className={`bg-${metric.color}-600 h-1.5 rounded-full transition-all duration-1000`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-6 top-1/4 hidden lg:block">
                <div className="bg-white rounded-lg shadow-lg p-4 border border-slate-200 animate-float">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900">GDPR Compliant</div>
                      <div className="text-xs text-slate-500">UK Data Residency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-2/3 hidden lg:block">
                <div className="bg-white rounded-lg shadow-lg p-4 border border-slate-200 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Instant Feedback</div>
                      <div className="text-xs text-slate-500">15-page report</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Features Section */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />
      {/* FAQ */}
      <FAQ />

      {/* Demo Modal */}
      {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
    </>
  )
}


