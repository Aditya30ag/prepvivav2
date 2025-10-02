export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6">
      <div className="flex items-start gap-4 mb-4">
        <SkeletonLoader className="w-12 h-12 rounded-full" />
        <div className="flex-grow">
          <SkeletonLoader className="h-6 w-3/4 mb-2" />
          <SkeletonLoader className="h-4 w-1/2" />
        </div>
      </div>
      <SkeletonLoader className="h-4 w-full mb-2" />
      <SkeletonLoader className="h-4 w-5/6 mb-2" />
      <SkeletonLoader className="h-4 w-4/6" />
    </div>
  )
}

export function SkeletonTestimonial() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8">
      <SkeletonLoader className="h-4 w-24 mb-4" />
      <SkeletonLoader className="h-4 w-full mb-2" />
      <SkeletonLoader className="h-4 w-full mb-2" />
      <SkeletonLoader className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-3">
        <SkeletonLoader className="w-12 h-12 rounded-full" />
        <div>
          <SkeletonLoader className="h-4 w-32 mb-2" />
          <SkeletonLoader className="h-3 w-24" />
        </div>
      </div>
    </div>
  )
}
