'use client'

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 animate-pulse">
      <div className="w-12 h-12 bg-slate-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-slate-200 rounded mb-3 w-3/4"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 rounded w-4/6"></div>
      </div>
      <div className="h-10 bg-slate-200 rounded w-32"></div>
    </div>
  )
}

export const SkeletonTestimonial = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 animate-pulse">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
        <div>
          <div className="h-4 bg-slate-200 rounded w-24 mb-2"></div>
          <div className="h-3 bg-slate-200 rounded w-32"></div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
        <div className="h-4 bg-slate-200 rounded w-4/6"></div>
      </div>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-4 h-4 bg-slate-200 rounded"></div>
        ))}
      </div>
    </div>
  )
}

export const SkeletonPricing = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 animate-pulse">
      <div className="text-center mb-6">
        <div className="h-6 bg-slate-200 rounded w-24 mx-auto mb-2"></div>
        <div className="h-8 bg-slate-200 rounded w-20 mx-auto mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-32 mx-auto"></div>
      </div>
      <div className="space-y-3 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="w-4 h-4 bg-slate-200 rounded mr-3"></div>
            <div className="h-4 bg-slate-200 rounded flex-1"></div>
          </div>
        ))}
      </div>
      <div className="h-12 bg-slate-200 rounded w-full"></div>
    </div>
  )
}
