import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { TrendingUp, Award, Target, CheckCircle2, ArrowRight, Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Success Stories | PrepViva Student Outcomes',
  description: 'Read how PrepViva helped UK students secure offers from Oxford, Cambridge, and top medical schools, plus NHS professionals land their dream roles.',
  keywords: ['PrepViva success stories', 'Oxbridge offers', 'medical school acceptance', 'NHS interview success'],
}

export default function SuccessStoriesPage() {
    const stories = [
        {
          name: 'Sarah Chen',
          age: 18,
          location: 'Manchester',
          outcome: 'Oxford Medicine Offer',
          university: 'Oxford',
          image: '👩‍⚕️',
          background: 'State comprehensive school, first-generation university applicant',
          challenge: 'No access to private coaching, struggled with MMI ethical scenarios and lacked confidence in panel interviews.',
          solution: 'Completed 8 PrepViva mock interviews over 3 weeks, focusing on ethical reasoning and empathy scores.',
          results: [
            { metric: 'Confidence Score', before: 54, after: 94 },
            { metric: 'Ethical Reasoning', before: 62, after: 91 },
            { metric: 'Communication', before: 71, after: 96 }
          ],
          quote: "PrepViva gave me access to the same quality preparation as privately-educated students with £150/hour coaches. The ethical scenario feedback was more detailed than anything my teachers could provide. I felt completely prepared walking into my Oxford interview.",
          sessions: 8,
          cost: 220,
          savings: 980
        },
        {
          name: 'Dr James Thompson',
          age: 34,
          location: 'London',
          outcome: 'NHS Band 7 Specialist',
          university: "Guy's and St Thomas' NHS Trust",
          image: '👨‍⚕️',
          background: 'Experienced Band 6 nurse, failed 3 previous Band 7 interviews',
          challenge: 'Strong clinical skills but struggled to articulate NHS values and provide structured STAR responses under pressure.',
          solution: 'Used PrepViva for 6 intensive sessions focused on values-based questions and leadership scenarios.',
          results: [
            { metric: 'Values Demonstration', before: 58, after: 92 },
            { metric: 'STAR Structure', before: 51, after: 89 },
            { metric: 'Leadership Examples', before: 64, after: 94 }
          ],
          quote: "After failing three interviews, I was losing confidence. PrepViva's AI identified exactly where I was going wrong - I wasn't explicitly linking my answers to NHS values. The instant feedback helped me refine my responses until they were perfect. Secured my role within 6 weeks.",
          sessions: 6,
          cost: 125,
          savings: 775
        },
        {
          name: 'Priya Patel',
          age: 17,
          location: 'Birmingham',
          outcome: 'Cambridge Natural Sciences',
          university: 'Cambridge',
          image: '👩‍🔬',
          background: 'Grammar school student, nervous about supervision-style interviews',
          challenge: 'Excellent academic record but froze when asked to think aloud and explain reasoning under scrutiny.',
          solution: 'Practiced 5 tutorial-style sessions with increasing difficulty, building resilience to probing questions.',
          results: [
            { metric: 'Critical Thinking', before: 68, after: 91 },
            { metric: 'Thinking Aloud', before: 45, after: 87 },
            { metric: 'Resilience Score', before: 52, after: 93 }
          ],
          quote: "The Cambridge supervision format terrified me. PrepViva's AI asked follow-up questions exactly like real interviewers - it didn't accept vague answers. This forced me to develop the skill of explaining my reasoning clearly, even when uncertain. By session 5, I was comfortable with ambiguity.",
          sessions: 5,
          cost: 125,
          savings: 625
        },
        {
          name: "Michael O'Brien",
          age: 19,
          location: 'Leeds',
          outcome: 'Oxford PPE Offer',
          university: 'Oxford',
          image: '👨‍💼',
          background: 'Comprehensive school, received widening participation support',
          challenge: 'Strong written work but lacked experience with rapid-fire argumentative questioning typical of PPE tutorials.',
          solution: 'Completed 7 PPE-specific sessions practicing political and economic argumentation under time pressure.',
          results: [
            { metric: 'Argumentation', before: 61, after: 92 },
            { metric: 'Quick Thinking', before: 58, after: 88 },
            { metric: 'Counter-Arguments', before: 54, after: 91 }
          ],
          quote: "My school couldn't provide subject-specific interview prep for PPE. PrepViva's scenarios covered political theory, economics, and philosophy - exactly what appeared in my real interview. The AI pushed back on weak arguments, teaching me to defend positions rigorously. Worth every penny.",
          sessions: 7,
          cost: 220,
          savings: 830
        },
        {
          name: 'Aisha Rahman',
          age: 29,
          location: 'Leicester',
          outcome: 'NHS Band 8a Manager',
          university: 'Leicester Hospitals NHS Trust',
          image: '👩‍⚕️',
          background: 'Band 7 team leader, aspiring to service management',
          challenge: 'Needed to demonstrate strategic thinking and service improvement beyond day-to-day clinical management.',
          solution: '4 focused sessions on leadership competencies, change management, and organizational awareness.',
          results: [
            { metric: 'Strategic Thinking', before: 66, after: 93 },
            { metric: 'Change Management', before: 59, after: 89 },
            { metric: 'Business Awareness', before: 52, after: 87 }
          ],
          quote: "Band 8a interviews require evidence of system-level thinking, not just clinical expertise. PrepViva's scenarios covered budget management, stakeholder engagement, and service transformation - topics I'd never discussed in an interview before. The preparation was exceptional.",
          sessions: 4,
          cost: 58,
          savings: 542
        },
        {
          name: 'Thomas Wright',
          age: 18,
          location: 'Bristol',
          outcome: 'Cambridge Law Offer',
          university: 'Cambridge',
          image: '⚖️',
          background: 'Independent school, had prior coaching but still anxious',
          challenge: 'Despite £600 spent on human coaching, still felt unprepared for hypothetical legal scenarios.',
          solution: 'Used PrepViva alongside existing coaching for unlimited practice of legal reasoning problems.',
          results: [
            { metric: 'Legal Reasoning', before: 74, after: 94 },
            { metric: 'Case Analysis', before: 69, after: 92 },
            { metric: 'Clarity', before: 78, after: 96 }
          ],
          quote: "I'd paid for expensive human coaching but could only do 4 sessions. PrepViva gave me unlimited practice for under £100. The AI feedback was actually more detailed than my human coach's notes. I used both together and got the best of both worlds.",
          sessions: 10,
          cost: 220,
          savings: 0
        }
      ];
      

  const stats = [
    { value: '87%', label: 'Offer Success Rate', sublabel: 'For students completing 3+ sessions' },
    { value: '34%', label: 'Above Average', sublabel: 'Compared to unprepared candidates' },
    { value: '92%', label: 'Confidence Increase', sublabel: 'Average improvement across all users' },
    { value: '£520', label: 'Average Savings', sublabel: 'vs traditional human coaching' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <Container size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="success" size="md">
                Real Students • Real Results • Real Stories
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              From Interview Anxiety to Offer Letters
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Read how students from state schools, first-generation applicants, and career NHS 
              professionals used PrepViva to secure offers from Oxford, Cambridge, and top institutions.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <Card key={idx} padding="md" className="text-center border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-900 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <Container size="xl">
          <div className="space-y-16">
            {stories.map((story, idx) => (
              <Card
                key={idx}
                padding="lg"
                className="border border-slate-200 hover:border-blue-300 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-5xl">
                      {story.image}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{story.name}</h2>
                        <p className="text-slate-600 mb-2">{story.age} • {story.location}</p>
                        <Badge variant="success" size="md">
                          <Award className="w-4 h-4 mr-1" />
                          {story.outcome}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-slate-600 mb-1">Preparation Cost</div>
                        <div className="text-2xl font-bold text-green-600">£{story.cost}</div>
                        {story.savings > 0 && (
                          <div className="text-xs text-slate-500">Saved £{story.savings} vs coaching</div>
                        )}
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <p className="text-sm text-slate-700">{story.background}</p>
                    </div>
                  </div>
                </div>

                {/* Journey */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-600" />
                      The Challenge
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{story.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      The Solution
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{story.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      Progress ({story.sessions} sessions)
                    </h3>
                    <div className="space-y-3">
                      {story.results.map((result, resultIdx) => (
                        <div key={resultIdx}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-600">{result.metric}</span>
                            <span className="font-semibold text-green-600">+{result.after - result.before}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <div className="flex-grow bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-red-400 to-green-500 h-full rounded-full transition-all duration-1000"
                                style={{ width: `${result.after}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-bold text-slate-700 w-8">{result.after}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <Quote className="w-8 h-8 text-blue-300 mb-3" />
                  <p className="text-slate-800 italic leading-relaxed mb-4">
                    &quot;{story.quote}&quot;
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    — {story.name}, {story.university}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <Container size="lg">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Success Story Starts Here
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join 3,500+ students who&apos;ve transformed interview anxiety into offer letters. 
              Start practicing today from just £11 per session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" data-event="success_stories_cta">
                Start Your Journey - £29
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white border-2 border-white hover:bg-white/10">
                View Pricing Options
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

