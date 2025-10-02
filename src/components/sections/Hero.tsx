'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [audience, setAudience] = useState<'student' | 'university' | 'nhs'>('student')

  const content = {
  student: {
    headline: "Transform Interview Anxiety Into Oxford Offers",
    subhead: "AI that knows every UK interview format — from Oxbridge tutorials to NHS panels.",
    cta1: "Start 45-min Mock — £29",
    cta2: "Watch Demo Interview",
  },
  university: {
    headline: "Scale Interview Training Across Your Institution",
    subhead: "Deploy AI-powered preparation for entire cohorts with analytics and UK data compliance.",
    cta1: "Request University Pilot",
    cta2: "View Case Studies",
  },
  nhs: {
    headline: "Master NHS Values-Based Interviews",
    subhead: "Band 5 to Consultant — practice with scenarios built by NHS professionals.",
    cta1: "Start NHS Practice",
    cta2: "Explore NHS Values",
  },
};

  const current = content[audience]

  return (
    <section className="relative bg-gradient-to-br from-neutral-50 via-primary-50/30 to-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Audience Selector */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-full bg-white p-1 shadow-sm border border-neutral-200">
              {(['student', 'university', 'nhs'] as const).map((aud) => (
                <button
                  key={aud}
                  onClick={() => setAudience(aud)}
                  aria-label={`Switch to ${aud} view`}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    audience === aud
                      ? 'bg-primary-600 text-white'
                      : 'text-neutral-600 hover:text-primary-600'
                  }`}
                >
                  {aud === 'student'
                    ? 'For Students'
                    : aud === 'university'
                    ? 'For Universities'
                    : 'For NHS'}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-[1.1]">
              {current.headline}
            </h1>
            {/* SEO Secondary Heading */}
            <h2 className="text-lg md:text-xl text-neutral-500 mb-6">
              AI-powered UK Interview Preparation for Medical Schools, NHS Roles, and Universities
            </h2>

            <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              {current.subhead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <button
                className="btn-primary text-lg px-8 py-4"
                data-track="cta_start_mock"
                aria-label="Start Mock Interview"
              >
                {current.cta1}
              </button>
              <button
                className="btn-secondary text-lg px-8 py-4"
                data-track="cta_watch_demo"
                aria-label="Watch Demo Interview"
              >
                {current.cta2}
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-sm text-neutral-500 mb-10">
              No subscription — £29 per mock with instant feedback.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="text-accent-green">✔</span>
                <span>10,847 interviews completed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green">✔</span>
                <span>92% confidence boost</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green">✔</span>
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-green">✔</span>
                <span>Trusted by Oxford, Cambridge, UCL & NHS applicants</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-neutral-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.944 12.083 12.083 0 0112 22a12.083 12.083 0 01-6-1.056A12.083 12.083 0 016 10.578L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Live Mock Interview</p>
                    <p className="text-sm text-neutral-500">
                      Oxford Medicine · 45 minutes
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium">
                  In Progress
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-neutral-600 mb-2 font-medium">Current Question</p>
                <p className="text-lg">
                  &quot;How would you approach a patient presenting with acute chest pain in A&E?&quot;
                </p>
              </div>

              {/* Animated Scores */}
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Structure Score', value: 87, color: 'text-primary-600' },
                  { label: 'Empathy', value: 94, color: 'text-accent-green' },
                  { label: 'Clinical Reasoning', value: 91, color: 'text-accent-purple' },
                  { label: 'Time Remaining', value: '12:34', color: 'text-primary-600' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    {typeof stat.value === 'number' ? (
                      <motion.p
                        className={`text-2xl font-bold ${stat.color}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        {stat.value}%
                      </motion.p>
                    ) : (
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    )}
                    <p className="text-xs text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}