// ==========================================
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { Target, Shield, TrendingUp, Heart, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About PrepViva | Our Mission to Democratize Interview Preparation',
  description: 'Learn about PrepViva\'s mission to make elite interview preparation accessible to all UK students and NHS professionals through AI-powered practice.',
  keywords: ['About PrepViva', 'interview preparation mission', 'UK interview coaching', 'PrepViva team'],
}

export default function AboutPage() {
  const stats = [
    { value: '10,847', label: 'Interviews Completed', icon: TrendingUp },
    { value: '92%', label: 'Confidence Increase', icon: Heart },
    { value: '24', label: 'University Partners', icon: Award },
    { value: '15', label: 'NHS Trusts', icon: Shield },
  ]

  const team = [
    {
      name: 'Dr Sarah Mitchell',
      role: 'Co-Founder & Medical Director',
      bio: 'Former Oxford Medicine admissions tutor with 10+ years interviewing medical applicants. GMC registered, practicing NHS consultant.',
      credential: 'MBChB, MRCP, PhD'
    },
    {
      name: 'James Worthington',
      role: 'Co-Founder & CEO',
      bio: '15 years leading NHS recruitment. Specialist in values-based recruitment and Band 5-8 selection processes across multiple trusts.',
      credential: 'MBA, CIPD Fellow'
    },
    {
      name: 'Prof Emma Clarke',
      role: 'Head of Academic Standards',
      bio: 'Director of Studies at Cambridge for 12 years. Extensive experience in humanities and social sciences admissions interviews.',
      credential: 'MA (Cantab), DPhil (Oxon)'
    },
    {
      name: 'Dr Raj Patel',
      role: 'Chief Technology Officer',
      bio: 'AI researcher from Imperial College. Published 20+ papers on natural language processing and educational technology applications.',
      credential: 'PhD Computer Science'
    },
  ]

  const milestones = [
    { year: '2022', event: 'Founded by NHS and university admissions experts', stat: '100 beta users', color: 'blue' },
    { year: '2023', event: 'AI platform launched with medical school focus', stat: '2,000 students', color: 'purple' },
    { year: '2024', event: 'Expanded to all Russell Group universities', stat: '5,000+ students', color: 'green' },
    { year: '2025', event: 'NHS institutional partnerships launched', stat: '10,847 interviews', color: 'blue' },
  ]

  const values = [
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Elite preparation shouldn\'t be limited to those who can afford £150/hour coaching. We make world-class interview practice available to everyone at £11-29 per session.',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Evidence-Based',
      description: 'Every feature is validated by data from 10,000+ successful interviews. Our methods are proven through real outcomes, not theoretical frameworks.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'UK-Focused',
      description: 'Built specifically for UK institutions with GDPR compliance, UK data residency, GMC standards alignment, and NHS values integration.',
      color: 'green'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="primary" size="md">
              Our Mission
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              Making Elite Interview Prep Accessible to Everyone
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We believe every capable candidate deserves access to high-quality interview preparation, 
              regardless of their background or financial circumstances. PrepViva democratizes access 
              to expert coaching through AI, making excellence achievable for all.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <Container size="xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} padding="md" className="text-center border border-slate-200">
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16">
        <Container size="lg">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Story</h2>
            <Card padding="lg" className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
                <p>
                  PrepViva was born from frustration. As Oxford Medicine admissions tutors and NHS recruitment leads, 
                  we witnessed brilliant candidates fail interviews not because they lacked ability, but because they 
                  couldn&apos;t afford the £150/hour coaching their competitors accessed.
                </p>
                <p>
                  Traditional interview coaching creates an unfair advantage. Students from privileged backgrounds 
                  receive extensive professional preparation, while equally talented students from modest backgrounds 
                  struggle alone. This isn&apos;t just inefficient—it&apos;s unjust.
                </p>
                <p>
                  We built PrepViva to level the playing field. Using AI trained on 50,000+ successful UK interviews, 
                  we deliver the same structured practice and detailed feedback at 85% lower cost. We&apos;ve incorporated 
                  GMC standards, NHS values, and Oxbridge assessment frameworks, with every piece of feedback reviewed 
                  by our expert panel to ensure the highest standards.
                </p>
                <p className="text-lg font-semibold text-blue-700">
                  Excellence should be determined by ability and effort, not by ability to pay.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Built by UK Interview Experts
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              PrepViva combines cutting-edge AI with deep expertise from NHS professionals, 
              medical educators, and Oxbridge admissions specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, idx) => (
              <Card key={idx} hover className="bg-white border border-slate-200">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                    <div className="mb-2">
                      <Badge variant="primary" size="sm">{member.role}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3 leading-relaxed">{member.bio}</p>
                    <p className="text-xs text-blue-600 font-medium">{member.credential}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <Container size="lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, idx) => {
              const colorMap = {
                blue: 'bg-blue-600 border-blue-200',
                purple: 'bg-purple-600 border-purple-200',
                green: 'bg-green-600 border-green-200'
              }
              return (
                <div key={idx} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right pt-1">
                    <Badge variant="neutral" size="md">{milestone.year}</Badge>
                  </div>
                  <div className="flex-grow relative pb-8 border-l-2 border-slate-200 pl-8 last:border-l-0">
                    <div className={`absolute -left-3 top-0 w-6 h-6 ${colorMap[milestone.color as keyof typeof colorMap].split(' ')[0]} rounded-full border-4 border-white`}></div>
                    <h3 className="font-bold text-slate-900 mb-2">{milestone.event}</h3>
                    <p className="text-sm font-semibold text-green-600">{milestone.stat}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <Container size="xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              const colorMap = {
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
                green: 'bg-green-100 text-green-600'
              }
              return (
                <Card key={idx} hover className="bg-white border border-slate-200">
                  <div className={`w-12 h-12 rounded-xl ${colorMap[value.color as keyof typeof colorMap]} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container size="lg">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Help us level the playing field. Start your interview preparation today 
              and join thousands succeeding with PrepViva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" data-event="about_start_practice">
                Start Practice - £11/Session
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-2 border-white hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

// ==========================================
