import type { Metadata } from 'next'
import { termsAndConditionsData, type TermsSection, type TermsSubsection } from '@/lib/terms-data'

export const metadata: Metadata = {
  title: 'Terms and Conditions - PrepViva',
  description: 'PrepViva Terms and Conditions - Legal agreement governing the use of our AI-powered mock interview platform.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              {termsAndConditionsData.title}
            </h1>
            <div className="text-neutral-600 space-y-1">
              <p><strong>Last updated:</strong> {termsAndConditionsData.lastUpdated}</p>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Important Legal Notice:</strong> Please read these terms carefully before using PrepViva&apos;s services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </div>
          </div>

          {/* Preamble */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>{termsAndConditionsData.preamble}</p>
                <p>{termsAndConditionsData.legalFramework}</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
            <h2 className="text-xl font-bold text-neutral-900 mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {termsAndConditionsData.sections.map((section: TermsSection) => (
                <div key={section.id}>
                  <a 
                    href={`#${section.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium block"
                  >
                    {section.title}
                  </a>
                  {section.subsections && (
                    <div className="ml-4 mt-1 space-y-1">
                      {section.subsections.map((subsection: TermsSubsection) => (
                        <a 
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          className="text-neutral-600 hover:text-primary-600 text-sm block"
                        >
                          {subsection.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {termsAndConditionsData.sections.map((section: TermsSection) => (
              <section key={section.id} id={section.id} className="mb-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  {section.title}
                </h2>
                
                {/* Section content */}
                {section.content.length > 0 && (
                  <div className="text-neutral-700 leading-relaxed space-y-4 mb-6">
                    {section.content.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {/* Subsections */}
                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map((subsection: TermsSubsection) => (
                      <div key={subsection.id} id={subsection.id} className="ml-0">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                          {subsection.title}
                        </h3>
                        <div className="text-neutral-700 leading-relaxed space-y-3">
                          {subsection.content.map((paragraph, index) => (
                            <div key={index}>
                              {paragraph.includes('•') ? (
                                <div className="space-y-1">
                                  {paragraph.split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex} className={line.trim().startsWith('•') ? 'ml-4' : ''}>
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              ) : (
                                <p>{paragraph}</p>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        {/* Nested subsections for minors section */}
                        {subsection.subsections && (
                          <div className="mt-6 ml-4 space-y-6">
                            {subsection.subsections?.map((nestedSubsection: TermsSubsection) => (
                              <div key={nestedSubsection.id} id={nestedSubsection.id}>
                                <h4 className="text-lg font-medium text-neutral-900 mb-3">
                                  {nestedSubsection.title}
                                </h4>
                                <div className="text-neutral-700 leading-relaxed space-y-2">
                                  {nestedSubsection.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Footer Notice */}
          <div className="mt-16 p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-900 mb-2">Contact Information</h3>
            <div className="text-sm text-amber-800 space-y-1">
              <p><strong>Company:</strong> PrepViva Limited</p>
              <p><strong>Jurisdiction:</strong> England and Wales</p>
              <p><strong>Note:</strong> For questions about these Terms and Conditions, please contact our legal team through the contact information provided on our website.</p>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-12 text-center">
            <a 
              href="#top"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors"
            >
              ↑ Back to Top
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
