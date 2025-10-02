import { Metadata } from 'next'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import InteractivePricingSlider from '@/components/pricing/InteractivePricingSlider'
import { CheckCircle2, Clock, Zap, Award, Shield, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Flexible Interview Practice Credits | PrepViva',
  description: 'Pay-as-you-go interview practice from £14.50 per 30-minute session. Buy credits with bonus free sessions. No subscriptions, no hidden fees.',
  keywords: ['interview prep pricing UK', 'affordable mock interviews', 'interview practice cost', 'PrepViva pricing'],
}

export default function PricingPage() {
  const plans = [
    {
      name: '1+1 Free',
      totalCredits: 2,
      paidCredits: 1,
      freeCredits: 1,
      price: 29,
      pricePerCredit: 14.50,
      description: 'Try our platform with 2 sessions',
      popular: false,
      features: [
        '2 × 30-minute interview sessions',
        'All interview formats (MMI, Panel, Tutorial)',
        'Instant AI feedback reports',
        'Progress tracking dashboard',
        'Email support'
      ],
      cta: 'Get Started',
      savings: null
    },
    {
      name: '5+5 Free',
      totalCredits: 10,
      paidCredits: 5,
      freeCredits: 5,
      price: 125,
      pricePerCredit: 12.50,
      description: 'Most popular for thorough preparation',
      popular: true,
      features: [
        '10 × 30-minute interview sessions',
        'All interview formats (MMI, Panel, Tutorial)',
        'Comprehensive AI feedback reports',
        'Advanced progress analytics',
        'Priority email support',
        'Certificate of completion'
      ],
      cta: 'Most Popular',
      savings: 165
    },
    {
      name: '10+10 Free',
      totalCredits: 20,
      paidCredits: 10,
      freeCredits: 10,
      price: 220,
      pricePerCredit: 11.00,
      description: 'Complete mastery package',
      popular: false,
      features: [
        '20 × 30-minute interview sessions',
        'All interview formats (MMI, Panel, Tutorial)',
        'Detailed AI feedback with model answers',
        'Full analytics suite with trend analysis',
        'Priority support with dedicated success coach',
        'Certificate of completion',
        'Money-back confidence guarantee'
      ],
      cta: 'Best Value',
      savings: 370
    }
  ]

  const comparisonData = [
    { feature: 'Cost per 30-min session', prepviva: 'From £11.00', human: '£75-100' },
    { feature: 'Availability', prepviva: '24/7 instant access', human: 'Limited appointment slots' },
    { feature: 'Feedback delivery', prepviva: 'Instant detailed report', human: '24-48 hours (if provided)' },
    { feature: 'Session formats', prepviva: 'All formats (MMI, Panel, Tutorial)', human: 'Varies by coach' },
    { feature: 'Question bank size', prepviva: '500+ UK-specific scenarios', human: 'Depends on coach experience' },
    { feature: 'Standards alignment', prepviva: 'GMC, NHS values, UCAS', human: 'Variable quality assurance' },
    { feature: 'Progress tracking', prepviva: 'Automated analytics dashboard', human: 'Manual notes only' },
  ]

  const faqs = [
    {
      q: 'How do credits work?',
      a: '1 credit = 1 × 30-minute interview session. You can use credits for any interview format: MMI stations, panel interviews, Oxbridge tutorials, or NHS scenarios. Credits never expire.'
    },
    {
      q: 'What happens in a 30-minute session?',
      a: 'You&apos;ll complete 3-4 structured interview questions with adaptive AI follow-ups, just like a real interview. After completion, you receive an instant comprehensive feedback report with scores, improvement suggestions, and model answers.'
    },
    {
      q: 'Can I use multiple credits in one sitting?',
      a: 'Yes. You can book consecutive 30-minute sessions (using multiple credits) for extended practice. Many students combine 2 credits (60 minutes) to simulate full MMI circuits or panel interviews.'
    },
    {
      q: 'Are the features the same across all plans?',
      a: 'Yes. Every plan includes the same AI feedback quality, all interview formats, progress tracking, and support. The only difference is the number of credits and the price per credit - bulk purchases save more.'
    },
    {
      q: 'Why is PrepViva so much cheaper than human coaching?',
      a: 'Traditional coaches charge £75-150 per hour due to scheduling, travel, and limited availability. Our AI delivers identical structured practice at scale, passing savings directly to you while maintaining quality feedback.'
    },
    {
      q: 'Do credits expire?',
      a: 'No. Credits never expire. Purchase when ready, use them at your own pace across weeks or months. Perfect for fitting practice around your study schedule.'
    },
    {
      q: 'Can I get a refund?',
      a: 'Yes. We offer a full refund on unused credits within 14 days of purchase. If you&apos;ve used 1 credit and aren&apos;t satisfied, we&apos;ll refund the remaining credits, no questions asked.'
    },
    {
      q: 'Do you offer discounts for students on benefits?',
      a: 'Yes. Students receiving means-tested benefits qualify for 30% off all plans. Email us at support@prepviva.com with proof of eligibility (e.g., student finance assessment, benefit letter).'
    },
    {
      q: 'Can I purchase additional credits later?',
      a: 'Absolutely. You can top up your account anytime with any credit package. Your existing credits and new credits combine in your account dashboard.'
    },
    {
      q: 'What if I need more than 20 credits?',
      a: 'Contact us for custom bulk pricing. We offer institutional packages for universities and NHS trusts, with volume discounts beyond 20 credits and additional features like cohort analytics.'
    },
    {
      q: 'Are there any hidden fees?',
      a: 'No. The price you see includes VAT and all features. No subscription fees, no renewal charges, no surprise costs. Pay once, use your credits whenever ready.'
    },
    {
      q: 'How does this compare to paying £150/hour for a human coach?',
      a: 'A single 1-hour human coaching session costs £150. With PrepViva, the 10+10 plan gives you 10 hours of practice (20 × 30-min sessions) for £220 total - that&apos;s 97% cheaper with instant feedback and unlimited review of your reports.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      {/* Hero */}
      <section className="pt-20 pb-16">
        <Container size="xl">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Badge variant="success" size="md">
                No Subscriptions • Credits Never Expire • Instant Access
              </Badge>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              Simple, Transparent Pricing
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Pay per interview session with bonus free credits. Use anytime for any UK interview format.
            </p>

            <div className="inline-flex items-center gap-4 text-sm bg-white border border-slate-200 rounded-lg px-6 py-3">
              <span className="text-slate-600">Traditional coaching:</span>
              <span className="text-slate-400 line-through">£75-150/hour</span>
              <span className="text-green-600 font-bold">PrepViva: From £11/session</span>
            </div>
          </div>

          {/* Interactive Pricing Slider */}
          <section className="py-16 bg-slate-50 rounded-2xl mb-16">
            <Container size="xl">
              <h2 className="text-3xl font-bold text-center mb-12">
                Find Your Perfect Package
              </h2>
              <InteractivePricingSlider />
            </Container>
          </section>

          {/* Alternative Static Pricing Cards */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Or Choose from Our Standard Packages
            </h3>
            <p className="text-slate-600">
              Traditional credit packages with bonus sessions
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, idx) => (
              <Card
                key={idx}
                className={`relative ${
                  plan.popular
                    ? 'border-2 border-blue-500 shadow-2xl scale-105'
                    : 'border border-slate-200'
                } bg-white`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="success" size="md">
                      Most Popular - Save 56%
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600 mb-4">{plan.description}</p>

                  <div className="mb-2">
                    <span className="text-5xl font-black text-slate-900">£{plan.price}</span>
                  </div>

                  <div className="text-sm text-slate-600 mb-3">
                    £{plan.pricePerCredit.toFixed(2)} per 30-min session
                  </div>

                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    <Zap className="w-4 h-4" />
                    {plan.totalCredits} sessions total ({plan.paidCredits} + {plan.freeCredits} free)
                  </div>

                  {plan.savings && (
                    <div className="mt-3">
                      <Badge variant="success" size="sm">
                        Save £{plan.savings} vs human coaching
                      </Badge>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  fullWidth
                  size="lg"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  data-event={`pricing_${plan.name.toLowerCase().replace(/\s+/g, '_')}`}
                >
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>

          {/* How Credits Work */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card padding="lg" className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <div className="text-center mb-8">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">How Credits Work</h2>
                <p className="text-slate-600">Simple, flexible, and designed for your schedule</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h3 className="font-bold mb-2 text-slate-900">Purchase Credits</h3>
                  <p className="text-sm text-slate-600">
                    Choose your package. Credits are added to your account instantly and never expire.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    2
                  </div>
                  <h3 className="font-bold mb-2 text-slate-900">Book Sessions</h3>
                  <p className="text-sm text-slate-600">
                    Use 1 credit for any 30-minute session: MMI, panel, tutorial, or NHS interview practice.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    3
                  </div>
                  <h3 className="font-bold mb-2 text-slate-900">Get Feedback</h3>
                  <p className="text-sm text-slate-600">
                    Receive instant comprehensive feedback report. Review anytime, track progress over multiple sessions.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Pro Tip</h4>
                    <p className="text-sm text-slate-700">
                      Combine 2 credits (60 minutes) to simulate full MMI circuits or extended panel interviews. 
                      This replicates real interview conditions perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              PrepViva vs Traditional Coaching
            </h2>

            <Card padding="lg" className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="font-bold text-blue-600 text-lg">PrepViva AI</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="font-bold text-slate-600 text-lg">Human Coaching</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-4 px-4 font-medium text-slate-900">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-green-600 font-semibold">{row.prepviva}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-slate-600">{row.human}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-center text-green-700 font-semibold">
                  Average saving per student: £500+ | Return on investment: 10x
                </p>
              </div>
            </Card>
          </div>

          {/* Money-Back Guarantee */}
          <div className="mb-16">
            <Card padding="lg" className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">14-Day Money-Back Guarantee</h2>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Try PrepViva risk-free. If you&apos;re not completely satisfied after your first session, 
                we&apos;ll refund 100% of your unused credits within 14 days. No questions asked.
              </p>
            </Card>
          </div>

          {/* Institutional Pricing */}
          <div className="mb-16">
            <Card padding="lg" className="bg-slate-50 border border-slate-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-slate-900">
                  Institution & Cohort Pricing
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Universities and NHS Trusts can deploy PrepViva across entire cohorts with 
                  volume discounts, analytics dashboards, and dedicated support.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">University Package</h3>
                  <p className="text-slate-600 mb-2">From £1,500/cohort</p>
                  <p className="text-sm text-slate-500">50+ student licenses</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">NHS Trust Package</h3>
                  <p className="text-slate-600 mb-2">From £2,500/department</p>
                  <p className="text-sm text-slate-500">100+ staff licenses</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-slate-900">Custom Enterprise</h3>
                  <p className="text-slate-600 mb-2">Tailored pricing</p>
                  <p className="text-sm text-slate-500">500+ licenses, LMS integration</p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" variant="primary" data-event="pricing_institution_quote">
                  Request Institution Quote
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Pricing FAQs
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} padding="md" className="border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card padding="lg" className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-xl italic mb-6 text-slate-800 max-w-2xl mx-auto">
                &quot;I spent £450 on three human coaching sessions and still felt unprepared. 
                Switched to PrepViva&apos;s 10+10 plan for £220 and completed 10 hours of practice 
                with instant feedback. Got offers from Oxford and Cambridge. Best investment I made.&quot;
              </p>
              <p className="font-bold text-slate-900">Emily Richardson</p>
              <p className="text-sm text-slate-600">Medicine Offer Holder, Oxford & Cambridge</p>
            </div>
          </Card>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">
              Start Your Interview Preparation Today
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 3,500+ students succeeding with PrepViva. Credits never expire. Start when ready.
            </p>
            <Button size="lg" variant="primary" data-event="pricing_bottom_cta">
              Get Started - From £14.50/Session
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

