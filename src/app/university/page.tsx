// ==========================================
import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { UNIVERSITIES } from '@/lib/constants'
import { GraduationCap, BookOpen, Brain, Target, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'University Interview Preparation | Oxbridge & Russell Group | PrepViva',
  description: 'Excel in Oxbridge and Russell Group university interviews with AI-powered practice. Covering Oxford, Cambridge, and all 24 Russell Group universities with subject-specific scenarios.',
  keywords: [
    'Oxbridge interview preparation',
    'Russell Group interview practice',
    'Cambridge interview coaching',
    'Oxford tutorial preparation',
    'university admissions UK',
    'PPE interview practice'
  ],
}

export default function UniversityPage() {
  const subjects = {
    stem: ['Mathematics & Computer Science', 'Engineering', 'Natural Sciences', 'Physics', 'Chemistry'],
    humanities: ['English Literature', 'History', 'Philosophy', 'Modern Languages', 'Classics'],
    social: ['PPE', 'Law', 'Psychology', 'Geography', 'Economics']
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="primary" size="md">
                Oxbridge & Russell Group Specialist
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-slate-900">
              Excel in Oxbridge & Russell Group Interviews
            </h1>

            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
              AI-powered preparation for Oxford tutorials, Cambridge supervisions, and competitive programmes
            </p>

            <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Practice subject-specific scenarios with AI trained on thousands of successful UK 
              admissions interviews. Master critical thinking, argumentation, and academic discussion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="primary" className="text-lg px-8" data-event="uni_start_practice">
                Start University Practice
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Subject Areas
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { stat: '87%', label: 'Oxbridge Success Rate', icon: TrendingUp },
                { stat: '24/24', label: 'Russell Group Coverage', icon: GraduationCap },
                { stat: '500+', label: 'Subject Scenarios', icon: BookOpen },
                { stat: '34%', label: 'Offer Rate Increase', icon: Target }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <Card key={idx} padding="sm" className="text-center bg-white border border-slate-200">
                    <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{item.stat}</div>
                    <div className="text-xs text-slate-600">{item.label}</div>
                  </Card>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Russell Group Coverage */}
      <section className="py-16 bg-white">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Complete Russell Group Coverage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practice with scenarios tailored to every Russell Group university&apos;s interview style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...UNIVERSITIES.oxbridge, ...UNIVERSITIES.russellGroup].map((uni, idx) => (
              <Card key={idx} padding="sm" hover className="text-center bg-white border border-slate-200">
                <p className="font-semibold text-sm text-slate-700">{uni}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Subject Coverage */}
      <section className="py-16 bg-slate-50">
        <Container size="xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Subject-Specific Interview Preparation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(subjects).map(([category, subjectList], idx) => {
              const icons = { stem: Brain, humanities: BookOpen, social: Target }
              const Icon = icons[category as keyof typeof icons]
              const titles = { stem: 'STEM Subjects', humanities: 'Humanities', social: 'Social Sciences' }
              
              return (
                <Card key={idx} className="bg-white border border-slate-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{titles[category as keyof typeof titles]}</h3>
                  <ul className="space-y-2">
                    {subjectList.map((subject, subIdx) => (
                      <li key={subIdx} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container size="lg">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your University Offer?
            </h2>
            <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
              Join the next generation of Oxbridge and Russell Group students
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8">
              Start Practice - £29 per mock
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}


