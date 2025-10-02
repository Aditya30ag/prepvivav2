// ==========================================
import Container from '@/components/ui/Container'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
      <Container size="sm">
        <div className="text-center">
          {/* Spinner */}
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
          </div>

          {/* Text */}
          <h2 className="text-xl font-semibold text-slate-900 mb-2">
            Loading PrepViva...
          </h2>
          <p className="text-slate-600">
            Preparing your interview practice experience
          </p>
        </div>
      </Container>
    </div>
  )
}

