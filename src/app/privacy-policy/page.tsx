import { Metadata } from 'next';
import { privacyPolicyData } from '@/lib/privacy-data';

export const metadata: Metadata = {
  title: 'Privacy Policy | PrepViva',
  description: 'PrepViva Privacy Policy - How we collect, use, and protect your personal data in compliance with UK GDPR, EU GDPR, and international privacy laws.',
  keywords: 'privacy policy, data protection, GDPR, PrepViva, personal data, privacy rights',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {privacyPolicyData.title}
          </h1>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Effective date:</strong> {privacyPolicyData.effectiveDate}</p>
            <p><strong>Last updated:</strong> {privacyPolicyData.lastUpdated}</p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-sm text-blue-800 italic">
            {privacyPolicyData.subtitle}
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {privacyPolicyData.sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm py-1 hover:underline"
              >
                {index + 1}. {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {privacyPolicyData.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
                {index + 1}. {section.title}
              </h2>
              
              {/* Section content */}
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Subsections */}
              {section.subsections && (
                <div className="ml-4 space-y-6">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.id} className="border-l-2 border-gray-200 pl-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-3">
                        {subsection.title}
                      </h3>
                      {subsection.content.map((paragraph, pIndex) => (
                        <div key={pIndex} className="text-gray-700 mb-3 leading-relaxed">
                          {paragraph.includes('•') ? (
                            <ul className="list-disc list-inside space-y-1">
                              {paragraph.split('•').filter(item => item.trim()).map((item, itemIndex) => (
                                <li key={itemIndex} className="ml-4">
                                  {item.trim()}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>{paragraph}</p>
                          )}
                        </div>
                      ))}
                      
                      {/* Nested subsections */}
                      {subsection.subsections && (
                        <div className="ml-4 space-y-4">
                          {subsection.subsections.map((nestedSubsection) => (
                            <div key={nestedSubsection.id} className="border-l-2 border-gray-100 pl-4">
                              <h4 className="text-md font-medium text-gray-700 mb-2">
                                {nestedSubsection.title}
                              </h4>
                              {nestedSubsection.content.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-600 mb-2 text-sm leading-relaxed">
                                  {paragraph}
                                </p>
                              ))}
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

        {/* Annexes */}
        {privacyPolicyData.annexes && privacyPolicyData.annexes.length > 0 && (
          <div className="mt-12 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-gray-200 pb-2">
              Annexes
            </h2>
            {privacyPolicyData.annexes.map((annex) => (
              <section key={annex.id} id={annex.id} className="scroll-mt-4">
                <h3 className="text-xl font-medium text-gray-800 mb-4">
                  {annex.title}
                </h3>
                {annex.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> This Privacy Policy is designed to comply with UK GDPR, EU GDPR, 
              PECR, CCPA, and other applicable privacy laws. If you have questions about your privacy rights 
              or how we process your personal data, please contact our Data Protection Officer at{' '}
              <a href="mailto:privacy@prepviva.com" className="text-blue-600 hover:underline">
                privacy@prepviva.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
