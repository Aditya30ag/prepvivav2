import { Brain, Zap, Target, PoundSterling, Shield, TrendingUp, CheckCircle2 } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI Trained on 50,000+ UK Interviews',
      description: 'Our AI understands exactly what Oxbridge tutors, medical school panels, and NHS recruiters look for. Trained on successful interviews from Russell Group universities and NHS trusts.',
      highlight: 'GMC standards + NHS values aligned',
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'Instant Comprehensive Feedback',
      description: 'Receive detailed analysis within seconds of completing your mock. Get actionable insights on structure, empathy, clinical reasoning, and communication quality.',
      highlight: '15-page PDF report per session',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Role-Specific Scenarios',
      description: 'From Band 5 nursing to Consultant posts, from PPE tutorials to medical MMIs. Practice with scenarios precisely matched to your target interview format.',
      highlight: '500+ tailored scenarios',
      color: 'green'
    },
    {
      icon: PoundSterling,
      title: '85% Cheaper Than Human Coaching',
      description: 'Traditional interview coaching costs £150+ per hour. PrepViva delivers the same structured practice and detailed feedback at £22-29 per mock interview.',
      highlight: 'Save £500+ on interview prep',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'UK Data Residency & GDPR Compliance',
      description: 'All data stored on UK servers with enterprise-grade security. NHS information governance ready. ISO 27001 compliant infrastructure built for institutions.',
      highlight: 'Trusted by 24 universities',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress Over Time',
      description: 'Analytics dashboard shows improvement across all competencies. Identify weak areas, monitor confidence growth, and watch your scores climb session after session.',
      highlight: '92% average confidence increase',
      color: 'purple'
    }
  ]

  return (
    <section className="py-24 bg-slate-50">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built by UK interview experts, powered by advanced AI, validated by thousands of successful candidates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            const iconColorMap = {
              blue: 'text-blue-600 bg-blue-100',
              purple: 'text-purple-600 bg-purple-100',
              green: 'text-green-600 bg-green-100'
            }
            const highlightColorMap = {
              blue: 'text-blue-600',
              purple: 'text-purple-600',
              green: 'text-green-600'
            }
            
            return (
              <Card 
                key={idx} 
                hover 
                className="bg-white border border-slate-200 transition-all duration-300 hover:border-slate-300"
              >
                <div className={`w-12 h-12 rounded-xl ${iconColorMap[feature.color as keyof typeof iconColorMap]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${highlightColorMap[feature.color as keyof typeof highlightColorMap]}`}>
                  <CheckCircle2 className="w-4 h-4" />
                  {feature.highlight}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Trust Signals */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { stat: '10,847', label: 'Interviews Completed' },
            { stat: '3,500+', label: 'Students Helped' },
            { stat: '24', label: 'University Partners' },
            { stat: '15', label: 'NHS Trusts' }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</div>
              <div className="text-sm text-slate-600">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}


