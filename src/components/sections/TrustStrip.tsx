// ==========================================
import Container from '@/components/ui/Container'
import { CheckCircle2 } from 'lucide-react'

export default function TrustStrip() {
  const institutions = [
    'Oxford', 'Cambridge', 'Imperial', 'UCL', "King's", 'Edinburgh',
    'Manchester', 'Bristol', 'Leeds', 'Birmingham'
  ]

  return (
    <section className="bg-white border-y border-slate-200 py-12">
      <Container size="xl">
        <p className="text-center text-sm text-slate-600 font-medium mb-8 uppercase tracking-wide">
          Trusted by students accepted to
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-10">
          {institutions.map((institution, idx) => (
            <div
              key={idx}
              className="text-slate-400 font-bold text-lg tracking-wider hover:text-slate-600 transition-colors"
            >
              {institution.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 rounded-full border border-green-200">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-slate-800">
              &quot;PrepViva increased our offer rate by 34%&quot; — Cambridge Admissions Office
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ==========================================
