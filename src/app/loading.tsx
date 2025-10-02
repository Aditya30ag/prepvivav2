// ==========================================
import Container from '@/components/ui/Container'
import { SkeletonCard, SkeletonTestimonial } from '@/components/effects/SkeletonLoader'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Container size="xl" className="py-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-8 bg-slate-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-16 bg-slate-200 rounded w-96 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-slate-200 rounded w-80 mx-auto animate-pulse"></div>
        </div>

        {/* Feature Cards Skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>

        {/* Testimonials Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SkeletonTestimonial />
          <SkeletonTestimonial />
          <SkeletonTestimonial />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="h-12 bg-slate-200 rounded w-16 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-slate-200 rounded w-20 mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

