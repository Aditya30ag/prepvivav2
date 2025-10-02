import { Star, Quote } from 'lucide-react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import TiltCard from '@/components/effects/TiltCard'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Medicine Offer Holder',
      university: 'Oxford',
      quote: "The MMI scenarios were remarkably similar to my actual interview. PrepViva's feedback on empathy and clinical reasoning gave me the confidence I needed. After three practice sessions, I felt completely prepared.",
      rating: 5,
      scores: { before: 68, after: 94 }
    },
    {
      name: 'Dr James Thompson',
      role: 'Band 7 Clinical Specialist',
      university: "Guy's and St Thomas' NHS Trust",
      quote: "After three unsuccessful interview attempts, PrepViva helped me understand how to properly demonstrate NHS values. The structured feedback was transformative. Secured my dream role within two months.",
      rating: 5,
      scores: { before: 62, after: 91 }
    },
    {
      name: 'Priya Patel',
      role: 'Natural Sciences Offer Holder',
      university: 'Cambridge',
      quote: "The supervision-style questions were exactly what I faced in my interview. PrepViva meant I wasn't surprised by anything. The AI picked up on gaps in my reasoning that I hadn't noticed.",
      rating: 5,
      scores: { before: 71, after: 89 }
    },
    {
      name: "Michael O'Brien",
      role: 'PPE Offer Holder',
      university: 'Oxford',
      quote: "PrepViva transformed how I approach argumentative questions. The feedback on structure and critical thinking was more detailed than my school's interview prep. Absolutely worth every penny.",
      rating: 5,
      scores: { before: 65, after: 92 }
    },
    {
      name: 'Aisha Rahman',
      role: 'Band 6 Senior Nurse',
      university: 'Imperial College Healthcare NHS Trust',
      quote: "The values-based scenarios were identical to my panel interview. PrepViva helped me articulate my experience in a way that resonated with NHS recruiters. Promoted within four months of starting.",
      rating: 5,
      scores: { before: 59, after: 88 }
    },
    {
      name: 'Thomas Wright',
      role: 'Law Offer Holder',
      university: 'Cambridge',
      quote: "My interview coaching cost £600 for four sessions. PrepViva gave me better feedback for under £100. The AI doesn't hold back - it tells you exactly what needs improvement.",
      rating: 5,
      scores: { before: 73, after: 93 }
    }
  ];
  
  return (
    <section className="py-24 bg-white">
      <Container size="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Real Students. Real Success.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands who&apos;ve transformed their interview performance with PrepViva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <TiltCard key={idx} maxTilt={8}>
              <Card hover className="bg-white border border-slate-200 relative">
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-700 mb-6 leading-relaxed italic relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Progress Stats */}
              <div className="bg-slate-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-600">Confidence Score</span>
                  <span className="text-sm font-bold text-green-600">
                    +{testimonial.scores.after - testimonial.scores.before} points
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-400">{testimonial.scores.before}%</div>
                    <div className="text-xs text-slate-500">Before</div>
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-1000"
                        style={{ width: `${((testimonial.scores.after - testimonial.scores.before) / (100 - testimonial.scores.before)) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{testimonial.scores.after}%</div>
                    <div className="text-xs text-slate-500">After</div>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="border-t border-slate-100 pt-6">
                <div className="font-bold text-slate-900 mb-1">{testimonial.name}</div>
                <div className="text-sm text-slate-600 mb-1">{testimonial.role}</div>
                <div className="text-sm font-medium text-blue-600">{testimonial.university}</div>
              </div>
            </Card>
            </TiltCard>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5.0</div>
              <div className="text-sm text-slate-600">Average Rating</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
              <div className="text-sm text-slate-600">Secure Offers</div>
              <div className="text-xs text-slate-500 mt-2">Of students using 3+ sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">34%</div>
              <div className="text-sm text-slate-600">Offer Rate Increase</div>
              <div className="text-xs text-slate-500 mt-2">vs. unprepared candidates</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


