'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'

const pricingTiers = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: 'Perfect for individual students',
    features: [
      '50 practice interviews',
      'Basic feedback reports',
      'Email support',
      'Mobile app access'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: 'Most popular for serious preparation',
    features: [
      'Unlimited practice interviews',
      'Detailed AI feedback',
      'Priority support',
      'Advanced analytics',
      'Custom scenarios'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'Complete preparation package',
    features: [
      'Everything in Pro',
      '1-on-1 coaching sessions',
      'Interview scheduling',
      'Career guidance',
      'Lifetime access to resources'
    ]
  }
]

export default function InteractivePricingSlider() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedTier, setSelectedTier] = useState('pro')

  return (
    <div className="max-w-6xl mx-auto">
      {/* Billing Toggle */}
      <div className="flex items-center justify-center mb-12">
        <span className={`mr-3 ${!isYearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            isYearly ? 'bg-blue-600' : 'bg-slate-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isYearly ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`ml-3 ${isYearly ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>
          Yearly
        </span>
        {isYearly && (
          <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Save 17%
          </span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.id}
            className={`relative border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              selectedTier === tier.id
                ? 'border-blue-500 shadow-xl'
                : 'border-slate-200 hover:border-slate-300'
            } ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setSelectedTier(tier.id)}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-slate-600 mb-6">{tier.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">
                    £{isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-slate-500 ml-2">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-green-600 mt-1">
                    Save £{(tier.monthlyPrice * 12) - tier.yearlyPrice} per year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={selectedTier === tier.id ? 'primary' : 'secondary'}
                className="w-full"
                size="lg"
              >
                {selectedTier === tier.id ? 'Selected Plan' : 'Choose Plan'}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Selected Plan Summary */}
      <div className="mt-12 text-center">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
          <h4 className="font-semibold text-blue-900 mb-2">Selected Plan</h4>
          <p className="text-blue-700">
            {pricingTiers.find(tier => tier.id === selectedTier)?.name} - 
            £{isYearly 
              ? pricingTiers.find(tier => tier.id === selectedTier)?.yearlyPrice 
              : pricingTiers.find(tier => tier.id === selectedTier)?.monthlyPrice
            } {isYearly ? 'per year' : 'per month'}
          </p>
          <Button variant="primary" className="mt-4" size="lg">
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  )
}
