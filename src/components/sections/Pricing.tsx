'use client'

export default function Pricing() {
  const plans = [
    {
      name: 'Single Mock',
      price: '£29',
      unit: 'per mock interview',
      description: 'Try our platform risk-free',
      features: [
        'Full 45-minute interview',
        'AI feedback report',
        'Unlimited retakes',
        'Email support'
      ],
      cta: 'Purchase Single Mock',
      popular: false
    },
    {
      name: '3-Mock Pack',
      price: '£75',
      unit: '£25 per mock',
      description: 'Comprehensive preparation',
      features: [
        '3 full mock interviews',
        'Detailed AI feedback',
        'Progress tracking',
        'Priority support',
        'Certificate of completion'
      ],
      cta: 'Purchase 3-Pack',
      popular: true,
      savings: 'Save £12'
    },
    {
      name: '10-Mock Pack',
      price: '£220',
      unit: '£22 per mock',
      description: 'Complete interview mastery',
      features: [
        '10 full mock interviews',
        'Comprehensive analytics',
        'Unlimited scenario access',
        'Personal success coach',
        'Money-back guarantee'
      ],
      cta: 'Purchase 10-Pack',
      popular: false,
      savings: 'Save £70'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-4">
            No subscriptions, no hidden fees. Pay per mock interview or save with bundles.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <span>Human coaching: £150/hour average</span>
            <span className="text-primary-600 font-bold">PrepViva AI: From £22 per complete mock</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-primary-600 text-white shadow-2xl scale-105' 
                  : 'bg-white border-2 border-neutral-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-green text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-neutral-800'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-800'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-neutral-500'}`}>
                    {plan.unit}
                  </span>
                </div>
                {plan.savings && (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    plan.popular ? 'bg-white/20 text-white' : 'bg-accent-green/10 text-accent-green'
                  }`}>
                    {plan.savings}
                  </span>
                )}
                <p className={`mt-3 ${plan.popular ? 'text-primary-100' : 'text-neutral-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-200' : 'text-accent-green'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className={plan.popular ? 'text-primary-50' : 'text-neutral-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                plan.popular 
                  ? 'bg-white text-primary-600 hover:bg-primary-50' 
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Need enterprise pricing for your institution?</p>
          <button className="btn-secondary">Request University/NHS Pilot</button>
        </div>
      </div>
    </section>
  )
}


