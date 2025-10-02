import { Metadata } from 'next'
import { dpaData } from '@/lib/dpa-data'

export const metadata: Metadata = {
  title: 'Data Processing Agreement | PrepViva',
  description: 'Data Processing Agreement between PrepViva and institutional customers for GDPR compliance and data protection.',
  keywords: 'data processing agreement, DPA, GDPR, data protection, privacy, controller, processor',
}

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white px-8 py-6">
            <h1 className="text-3xl font-bold">{dpaData.title}</h1>
            <p className="text-blue-100 mt-2">{dpaData.subtitle}</p>
            <p className="text-sm text-blue-200 mt-4">
              Effective Date: {dpaData.effectiveDate}
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-6">
            {/* Parties */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Between</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{dpaData.parties.controller}</p>
                </div>
                <div className="text-center text-gray-500 font-medium">and</div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">{dpaData.parties.processor}</p>
                </div>
              </div>
            </div>

            {/* Recitals */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">RECITALS / BACKGROUND</h2>
              <div className="space-y-3">
                {dpaData.recitals.map((recital, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {recital}
                  </p>
                ))}
              </div>
            </div>

            {/* Main Sections */}
            <div className="space-y-8">
              {dpaData.sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200 pb-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  
                  {/* Subsections */}
                  {section.subsections && (
                    <div className="mt-4 ml-4 space-y-4">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id}>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {subsection.title}
                          </h3>
                          <div className="space-y-2">
                            {subsection.content.map((paragraph, index) => (
                              <p key={index} className="text-gray-700 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Schedules */}
            <div className="mt-12 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">
                SCHEDULES
              </h2>
              {dpaData.schedules.map((schedule) => (
                <div key={schedule.id} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {schedule.title}
                  </h3>
                  <div className="space-y-3">
                    {schedule.content.map((item, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-600 pb-2">
                ADDITIONAL TERMS
              </h2>
              {Object.entries(dpaData.additionalSections).map(([key, section]) => (
                <div key={key} className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Notice */}
            <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> This Data Processing Agreement is designed for institutional 
                customers and complies with UK GDPR, EU GDPR, and NHS data security requirements. 
                For questions about this agreement, please contact our Data Protection Officer at 
                privacy@prepviva.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
