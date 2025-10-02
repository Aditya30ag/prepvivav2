import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - PrepViva',
  description: 'PrepViva Cookie Policy - Learn how we use cookies and similar technologies on our platform.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              PrepViva — Cookie Policy
            </h1>
            <div className="text-neutral-600 space-y-1">
              <p><strong>Effective date:</strong> 2 October 2025</p>
              <p><strong>Version:</strong> 1.0</p>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Note to operators / auditors:</strong> replace placeholder contact/address fields below with PrepViva&apos;s actual registered company details and DPO contact before publication.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                1. Introduction and scope
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  This Cookie Policy explains how PrepViva (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, &quot;PrepViva&quot;) uses cookies and similar technologies (for example, pixels, tags, local storage and device identifiers) on our websites, mobile applications, and related digital services (together, the &quot;Services&quot;). It explains what these technologies are, how and why we use them, what lawful basis applies to each processing activity under the UK GDPR and the Data Protection Act 2018, and how you can control or withdraw consent. This Policy should be read together with our Privacy Policy.
                </p>
                <p>
                  This Policy applies to all users of PrepViva Services worldwide. Where we describe legal obligations under UK law (for example PECR, UK GDPR and the Data Protection Act 2018), we do so because PrepViva is established in the United Kingdom; we also explain how we support rights of international visitors (for example, EU data subjects and California residents). The applicable law for individuals located outside the UK may vary; we endeavour to comply with relevant local legal requirements where they apply.
                </p>
                <p>
                  Key legal references used in preparing this policy include the ICO guidance on cookies and PECR, the PECR Regulations 2003, the UK GDPR and the Data Protection Act 2018. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                2. Definitions
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p className="mb-4">For clarity, the definitions used in this Cookie Policy are:</p>
                <div className="space-y-4">
                  <div>
                    <p><strong>Cookie</strong> — a small text file placed on your device (computer, mobile phone, tablet) by a website, app or server. Cookies store identifiers and small pieces of information that allow the website or third parties to recognise your device or remember settings.</p>
                  </div>
                  <div>
                    <p><strong>First-party cookie</strong> — a cookie set by the domain of the website you are visiting.</p>
                  </div>
                  <div>
                    <p><strong>Third-party cookie</strong> — a cookie set on your device by a domain different from the domain of the website you are visiting (for example ad networks, analytics providers).</p>
                  </div>
                  <div>
                    <p><strong>Pixel / web beacon / tag</strong> — a tiny, often invisible image or script embedded into webpages or emails that notifies a third party when content is loaded and can be used together with cookies to track activity.</p>
                  </div>
                  <div>
                    <p><strong>Local storage / session storage</strong> — browser-based storage alternatives that can hold data similarly to cookies.</p>
                  </div>
                  <div>
                    <p><strong>Personal data</strong> — any information relating to an identifiable natural person (as defined in the UK GDPR).</p>
                  </div>
                  <div>
                    <p><strong>Strictly necessary cookies</strong> — cookies essential to provide the service you request (e.g., session/authentication cookies).</p>
                  </div>
                  <div>
                    <p><strong>Consent</strong> — a freely given, specific, informed and unambiguous indication of the user&apos;s wishes by which they signify agreement to the processing of personal data relating to them (Article 4(11), UK GDPR).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                3. Legal and regulatory framework (summary)
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>PrepViva&apos;s cookies practices are designed to follow the UK regulatory and legal framework:</p>
                <div className="space-y-4">
                  <div>
                    <p><strong>Privacy and Electronic Communications Regulations (PECR)</strong> — PECR requires that organisations obtain consent for any cookies or similar technologies that are not strictly necessary for the provision of an information society service. <a href="#" className="text-primary-600 hover:text-primary-700">Legislation.gov.uk</a></p>
                  </div>
                  <div>
                    <p><strong>UK GDPR and Data Protection Act 2018</strong> — where cookies process personal data, the processing must meet the UK GDPR requirements (lawful basis, purpose limitation, data minimisation, transparency, security and rights for data subjects). Consent under UK GDPR must be freely given, specific, informed, unambiguous and recorded. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></p>
                  </div>
                  <div>
                    <p><strong>ICO guidance</strong> — the Information Commissioner&apos;s Office (ICO) is the UK supervisory authority and provides detailed guidance on cookies, consent design, and record keeping; PrepViva follows ICO recommendations in this policy. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></p>
                  </div>
                  <div>
                    <p><strong>International/regional rules</strong> — for visitors located in the EU or the U.S. we recognise EU GDPR principles and, for California residents, CCPA/CPRA-style rights (for example &quot;Do Not Sell or Share My Personal Information&quot;) where applicable; we provide an opt-out route where PrepViva&apos;s activities constitute a &apos;sale&apos;/&apos;sharing&apos; under California law. <a href="#" className="text-primary-600 hover:text-primary-700">oag.ca.gov</a></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                4. Categories of cookies we use — purpose, lawful basis and retention
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  PrepViva divides cookies into the following categories. All non-strictly-necessary cookies are set only after the user gives explicit consent via the consent banner or preference panel. This implementation follows ICO / PECR guidance that non-essential cookies require active opt-in consent. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Important:</strong> strictly necessary cookies are exempt from the consent requirement under PECR only where they are strictly necessary to deliver the service requested by the user (for example, session cookies used to keep you logged in during an active session or payment security cookies). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                  </p>
                </div>

                {/* 4.1 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.1 Strictly necessary cookies (no opt-in required)
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Purpose:</strong> enable basic site functions such as authentication, session management, security (fraud prevention), and payment checkout flow.</p>
                    <p><strong>Lawful basis:</strong> processing is necessary for the performance of a contract or to provide a requested service (Article 6(1)(b) UK GDPR) and/or permitted under PECR&apos;s &apos;strictly necessary&apos; exemption. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></p>
                    <p><strong>Typical examples & retention:</strong> session identifiers (session cookies) are deleted when the browser is closed; certain payment or anti-fraud cookies may persist (e.g., Stripe&apos;s security cookies) for short, defined lifetimes. See the cookie table below for examples and typical retention periods. <a href="#" className="text-primary-600 hover:text-primary-700">Stripe</a></p>
                  </div>
                </div>

                {/* 4.2 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.2 Performance & analytics cookies (consent required)
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Purpose:</strong> measure how users interact with our Services, track site performance, improve user experience and diagnose errors (for example page load times, basic navigation flow).</p>
                    <p><strong>Lawful basis:</strong> consent under Article 6(1)(a) UK GDPR / PECR is required where the cookie is not strictly necessary. Consent is obtained prior to activation. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></p>
                    <p><strong>Typical examples & retention:</strong> Google Analytics / GA4 cookies used to count visits and sessions — cookie lifetimes vary (commonly up to 24 months for _ga-like cookies; GA4 data retention settings may also determine how long Google stores identifiers; Google&apos;s console mentions retention defaults and signed-in data lifetimes). We do not enable analytics cookies until you consent. <a href="#" className="text-primary-600 hover:text-primary-700">Google Support</a></p>
                  </div>
                </div>

                {/* 4.3 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.3 Functional / preference cookies (consent required, unless essential)
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Purpose:</strong> remember UI preferences (language, accessibility settings, UI themes) and other user preferences to improve the user&apos;s experience.</p>
                    <p><strong>Lawful basis:</strong> consent under Article 6(1)(a) where not strictly necessary.</p>
                    <p><strong>Typical examples & retention:</strong> persistent preference cookies (e.g., remember language choice) — retention typically 1–24 months depending on purpose.</p>
                  </div>
                </div>

                {/* 4.4 */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    4.4 Marketing and advertising cookies (consent required)
                  </h3>
                  <div className="space-y-2">
                    <p><strong>Purpose:</strong> deliver relevant ads to users, measure ad campaign effectiveness, and enable retargeting (including cross-site and cross-device behavioural advertising).</p>
                    <p><strong>Lawful basis:</strong> consent under Article 6(1)(a). For visitors from California and other US jurisdictions, PrepViva treats cross-context behavioural advertising and third-party data sales/sharing as potential &quot;sale/sharing&quot; and provides a clear opt-out route. <a href="#" className="text-primary-600 hover:text-primary-700">oag.ca.gov</a></p>
                    <p><strong>Typical examples & retention:</strong> Facebook Pixel, Google Ads cookies, LinkedIn Insight Tag — retention depends on the provider and may range from 30 days to 2 years.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 - Cookie Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                5. Detailed example cookie table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-neutral-300 text-sm">
                  <thead>
                    <tr className="bg-neutral-50">
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Category</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Cookie name (example)</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Provider</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Typical retention</th>
                      <th className="border border-neutral-300 px-4 py-3 text-left font-semibold">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3">Strictly necessary</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">session / __Host-sessionid</td>
                      <td className="border border-neutral-300 px-4 py-3">PrepViva (first-party)</td>
                      <td className="border border-neutral-300 px-4 py-3">Keeps you logged in during an active session; necessary for secure use of the Service</td>
                      <td className="border border-neutral-300 px-4 py-3">Session (deleted on browser close)</td>
                      <td className="border border-neutral-300 px-4 py-3">Performance of a contract / strictly necessary</td>
                    </tr>
                    <tr className="bg-neutral-25">
                      <td className="border border-neutral-300 px-4 py-3">Strictly necessary</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">__stripe_mid</td>
                      <td className="border border-neutral-300 px-4 py-3">Stripe (third-party)</td>
                      <td className="border border-neutral-300 px-4 py-3">Stripe fraud prevention / checkout flow (security)</td>
                      <td className="border border-neutral-300 px-4 py-3">~31536000s (≈1 year) — see Stripe docs for current values.</td>
                      <td className="border border-neutral-300 px-4 py-3">Strictly necessary for payment processing (contract) / security. (Stripe)</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3">Strictly necessary</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">__stripe_sid</td>
                      <td className="border border-neutral-300 px-4 py-3">Stripe (third-party)</td>
                      <td className="border border-neutral-300 px-4 py-3">Short lived anti-fraud / session cookie during payment</td>
                      <td className="border border-neutral-300 px-4 py-3">~1800s (≈30 minutes) (provider dependent). (Stripe)</td>
                      <td className="border border-neutral-300 px-4 py-3">Strictly necessary</td>
                    </tr>
                    <tr className="bg-neutral-25">
                      <td className="border border-neutral-300 px-4 py-3">Analytics</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">_ga, _gid, _gat (GA4 variants _ga_&lt;id&gt; etc.)</td>
                      <td className="border border-neutral-300 px-4 py-3">Google / GA4 (third-party)</td>
                      <td className="border border-neutral-300 px-4 py-3">Analytics: count users/sessions; measurement</td>
                      <td className="border border-neutral-300 px-4 py-3">Typically up to 24 months (cookie lifetimes vary and may be subject to browser limits). GA4 data retention settings and signed-in data retention (up to ~26 months) also apply. (Google Support)</td>
                      <td className="border border-neutral-300 px-4 py-3">Consent (Article 6(1)(a))</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3">Functional / Preference</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">lang_pref</td>
                      <td className="border border-neutral-300 px-4 py-3">PrepViva (first-party)</td>
                      <td className="border border-neutral-300 px-4 py-3">Remembers language / accessibility settings</td>
                      <td className="border border-neutral-300 px-4 py-3">12 months (example)</td>
                      <td className="border border-neutral-300 px-4 py-3">Consent (if not strictly necessary)</td>
                    </tr>
                    <tr className="bg-neutral-25">
                      <td className="border border-neutral-300 px-4 py-3">Marketing</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">_fbp</td>
                      <td className="border border-neutral-300 px-4 py-3">Meta / Facebook Pixel</td>
                      <td className="border border-neutral-300 px-4 py-3">Used by Facebook to deliver ads and measure campaigns</td>
                      <td className="border border-neutral-300 px-4 py-3">Provider dependent; commonly 3 months–2 years</td>
                      <td className="border border-neutral-300 px-4 py-3">Consent (Article 6(1)(a))</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-300 px-4 py-3">Marketing</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">IDE, ANID</td>
                      <td className="border border-neutral-300 px-4 py-3">Google Ads</td>
                      <td className="border border-neutral-300 px-4 py-3">Ad targeting, re-targeting</td>
                      <td className="border border-neutral-300 px-4 py-3">Provider dependent; often up to 2 years</td>
                      <td className="border border-neutral-300 px-4 py-3">Consent (Article 6(1)(a))</td>
                    </tr>
                    <tr className="bg-neutral-25">
                      <td className="border border-neutral-300 px-4 py-3">Third-party tag</td>
                      <td className="border border-neutral-300 px-4 py-3 font-mono">lt_*</td>
                      <td className="border border-neutral-300 px-4 py-3">LinkedIn Insight Tag</td>
                      <td className="border border-neutral-300 px-4 py-3">Conversion tracking / ad measurement</td>
                      <td className="border border-neutral-300 px-4 py-3">Provider dependent</td>
                      <td className="border border-neutral-300 px-4 py-3">Consent (Article 6(1)(a))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                <p className="text-sm text-neutral-700">
                  <strong>Caveats:</strong> cookie names and retention durations are set by providers and may change periodically. The operator should maintain a live cookie inventory and update this policy accordingly. For Stripe-specific cookie names and their current retention, see Stripe&apos;s cookie policy/support pages. <a href="#" className="text-primary-600 hover:text-primary-700">Stripe</a> For Google Analytics / GA4 retention guidance see Google&apos;s Analytics help pages.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                6. Third parties and cross-site tracking
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <p>
                  Some cookies are set by third parties (for example Google, Stripe, Meta/Facebook, LinkedIn, advertising networks, and analytics providers). We do not control the policies of those third parties. Before using third-party services we review their privacy and transfer practices and require contractual commitments to protect personal data (e.g., data processing agreements and appropriate transfer safeguards where data leaves the UK). Where third parties transfer personal data outside the UK, we rely on the UK GDPR permitted transfer mechanisms (adequacy, International Data Transfer Agreements (IDTA), UK Addendum to SCCs or other appropriate safeguards) as required by ICO guidance. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                7. How we obtain consent and how consent is recorded
              </h2>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  7.1 Consent collection
                </h3>
                <div className="text-neutral-700 leading-relaxed space-y-4">
                  <p>
                    On your first visit to PrepViva, a prominent cookie banner will be displayed that explains our cookie categories and asks you to Accept, Reject non-essential cookies, or Manage Preferences (granular choice). We do not set non-essential cookies until you accept them. This approach is consistent with ICO/PECR guidance requiring prior active opt-in for non-essential cookies. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                  </p>
                  <p>
                    Consent requests are clear, easily accessible, kept separate from other terms, and use plain language in line with ICO guidance. Where consent is used as the lawful basis for cookie processing, the request is explicit and granular (for example analytics vs marketing vs functional). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  7.2 Record keeping of consent
                </h3>
                <div className="text-neutral-700 leading-relaxed space-y-4">
                  <p>We keep an auditable consent log for each user who gives or withdraws consent. The log typically records:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>the cookie categories the user consented to (granular choices),</li>
                    <li>timestamp (UTC) of consent,</li>
                    <li>the version of the Cookie Policy and CMP presented,</li>
                    <li>the consent string/state stored as a machine-readable record, and</li>
                    <li>limited contextual information (e.g., user agent) where necessary to demonstrate compliance.</li>
                  </ul>
                  <p>
                    Keeping evidence of consent and being able to demonstrate how and when consent was given are specifically recommended by the ICO; PrepViva maintains consent records to meet those accountability obligations. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                  </p>
                  <p>
                    <strong>Retention of consent records:</strong> We retain consent logs for a period necessary to demonstrate regulatory compliance and defend legal claims — typically 7 years unless a different legal requirement or request by the data subject applies. (Operators may choose a different retention period based on legal advice and litigation risk; document your rationale in your records of processing activities.)
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                8. How you can control, accept or withdraw cookies
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>You have several ways to control cookies on PrepViva:</p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    8.1 Consent banner and Cookie Settings panel
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Use the cookie banner on first visit to Accept all, Reject non-essential cookies, or Manage Preferences (granular toggles).
                    </p>
                    <p>
                      You can change or withdraw consent at any time by clicking the persistent Cookie Settings link in the website footer or from within your account settings (if you have an account). After you change preferences, we will respect those new settings promptly. We also maintain a CMP audit log of changes.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    8.2 Browser controls
                  </h3>
                  <div className="space-y-4">
                    <p>
                      Most browsers allow you to refuse or delete cookies via browser settings. Deleting cookies may remove preferences and require you to log in again. For guidance on managing cookies with the most common browsers, consult your browser&apos;s help pages.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    8.3 Provider opt-outs
                  </h3>
                  <div className="space-y-4">
                    <p>
                      For specific third-party services you can use provider opt-outs (for example the Google Analytics Opt-out Browser Add-on). Note that such tools stop a particular provider from collecting analytics but may not stop all tracking. <a href="#" className="text-primary-600 hover:text-primary-700">Google Support</a>
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    8.4 California residents (Do Not Sell or Share)
                  </h3>
                  <div className="space-y-4">
                    <p>
                      If you are a California resident and believe that PrepViva is &apos;selling&apos; or &apos;sharing&apos; your personal information as defined by California law, you may exercise your right to opt out via the &quot;Do Not Sell or Share My Personal Information&quot; mechanism accessible from our website footer (we will provide a dedicated opt-out page and process). We will respect submitted opt-out requests in accordance with California law. <a href="#" className="text-primary-600 hover:text-primary-700">oag.ca.gov</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                9. Withdrawing consent — steps and consequences
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  To withdraw consent, open the Cookie Settings panel (footer link), switch off categories you previously permitted, and click Save Preferences. We will apply your withdrawal immediately to new cookie placements and where feasible we will stop further collection of data associated with your cookies.
                </p>
                <p>
                  Withdrawing consent does not necessarily delete cookies already set on your device; you may need to delete cookies manually (browser settings) or use our cookie settings panel to remove client-side cookies where available.
                </p>
                <p>
                  Withdrawing consent for strictly necessary cookies is not possible if those cookies are required to deliver the service you requested (for example to complete a payment or remain logged in). The banner and cookie settings clearly state which cookies are strictly necessary and cannot be disabled.
                </p>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                10. Children and age-sensitive considerations
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  PrepViva provides interview practice content that may be used by people of multiple ages. Where we rely on consent to process personal data of children for an information society service, in the UK children aged under 13 cannot give valid consent on their own and parental consent must be obtained. We apply age-appropriate measures to identify likely children and to obtain parental authorisation where required. This follows ICO guidance on children and the UK GDPR. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                11. International data transfers
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  Cookies and third-party providers (for example Google, Stripe, Meta) may result in personal data being transferred to countries outside the UK (for example the United States). Where transfers amount to restricted transfers under the UK GDPR, we ensure appropriate legal safeguards are in place (adequacy decision, IDTA, UK SCC addendum or other Article 46 tools as recommended by ICO guidance). We document transfers and carry out transfer risk assessments when required. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
              </div>
            </section>

            {/* Section 12 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                12. Security
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  We implement reasonable technical and organisational measures to protect data collected via cookies against unauthorised or unlawful processing and against accidental loss, destruction, or damage. Access to consent audit logs is limited to authorised personnel only.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                13. Data subject rights
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  Where cookies involve processing of personal data, you have the data subject rights under the UK GDPR (access, rectification, erasure, restriction, portability, objection). To exercise these, contact our Data Protection Officer (DPO) using the contact details below. We will respond in accordance with applicable timelines under UK GDPR.
                </p>
              </div>
            </section>

            {/* Section 14 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                14. Changes to this Cookie Policy
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  We may update this Policy to reflect changes in law, guidance from regulators, or our practices. We will publish the updated policy on our website with a revised effective date and, where material, we will seek fresh consent where required by law.
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                15. Complaints and supervisory authority
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <p>
                  If you are unhappy with our handling of cookies or personal data, you may contact our DPO (details below) or lodge a complaint with the UK ICO: Information Commissioner&apos;s Office, Wycliffe House, Water Lane, Wilmslow SK9 5AF (or online via the ICO website). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a>
                </p>
              </div>
            </section>

            {/* Section 16 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                16. Contact details (replace placeholders before publication)
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-4">
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-amber-800">
                    <strong>Data Protection Officer (DPO)</strong><br />
                    PrepViva Ltd.<br />
                    Email: dpo@prepviva.co.uk (please use this email for privacy/cookie queries)<br />
                    Postal: PrepViva Ltd., [Registered Office] — [INSERT REGISTERED ADDRESS, COMPANY NUMBER].<br />
                    Telephone: [INSERT PHONE].
                  </p>
                </div>
              </div>
            </section>

            {/* Section 17 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                17. Annex — Practical implementation checklist (for the technical team)
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Present cookie banner on first visit and block all non-essential cookies until consent obtained. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>Provide prominent, accessible Manage Preferences link (footer + account settings). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>Ensure granularity: at least Analytics, Marketing, Functional toggles (plus Strictly Necessary always-on). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>Record consent state (timestamp, CMP version, choices) in an auditable log; retain logs for the chosen retention period (we recommend documenting your retention rationale). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>Maintain a live tag map / cookie inventory; update policy and table on any change.</li>
                  <li>For third parties, ensure DPA-compliant contracts (DPA), and appropriate transfer mechanisms if personal data is exported. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                </ul>
              </div>
            </section>

            {/* Section 18 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                18. Sources and further reading (selected)
              </h2>
              <div className="text-neutral-700 leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ICO — Cookies and similar technologies; guidance on PECR. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>UK legislation — Privacy and Electronic Communications Regulations 2003 (PECR). <a href="#" className="text-primary-600 hover:text-primary-700">Legislation.gov.uk</a></li>
                  <li>ICO — How should we obtain, record and manage consent? (consent record guidance). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                  <li>Google Analytics help — Data retention and cookie guidance. <a href="#" className="text-primary-600 hover:text-primary-700">Google Support</a></li>
                  <li>Stripe — Cookie policy and list of current cookies. <a href="#" className="text-primary-600 hover:text-primary-700">Stripe</a></li>
                  <li>California Attorney General — CCPA / opt-out guidance. <a href="#" className="text-primary-600 hover:text-primary-700">oag.ca.gov</a></li>
                  <li>ICO — International transfers guidance. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                </ul>
              </div>
            </section>

            {/* Consent Banner Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Consent Banner and Preference Panel — User-facing wording (short plain English)
              </h2>
              <div className="text-neutral-700 leading-relaxed space-y-6">
                <p>
                  Below are several short, ready-to-use banner texts, the suggested button labels and a fully written &quot;Manage Preferences&quot; panel that is legally compliant (no pre-ticked boxes, clear accept/reject options, granular toggles, and a persistent link to change choices later).
                </p>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Operator instruction:</strong> implement one of the short banners below. The banner must appear on first visit and block non-essential cookies until a positive action is taken. The banner must link to the full Cookie Policy and Privacy Policy.
                  </p>
                </div>

                {/* Option A */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    A. Short banner — Option 1 (concise / plain English)
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Visible banner text (one line / headline)</strong></p>
                      <p className="italic">We use cookies to make this site work, improve performance and show relevant adverts.</p>
                    </div>
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Subtext (one short sentence)</strong></p>
                      <p className="italic">You can Accept all, Reject non-essential cookies, or Manage your cookie preferences.</p>
                    </div>
                    <div>
                      <p><strong>Buttons (left to right)</strong></p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Reject non-essential</strong> — immediately disable analytics/marketing/functional cookies and only keep strictly necessary cookies.</li>
                        <li><strong>Manage preferences</strong> — opens granular preference panel.</li>
                        <li><strong>Accept all</strong> — set all cookie categories (analytics, functional, marketing) and close banner.</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Accessibility</strong></p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>All actions must be keyboard accessible and have ARIA labels such as: aria-label=&quot;Accept all cookies&quot;, aria-label=&quot;Reject non-essential cookies&quot;, aria-label=&quot;Manage cookie preferences&quot;.</li>
                        <li>No buttons are pre-selected or pre-ticked. Do not auto-accept.</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Microcopy tooltip / link</strong></p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Cookie Policy (link)</strong> — opens the full Cookie Policy.</li>
                        <li><strong>Privacy Policy (link)</strong> — opens the Privacy Policy.</li>
                        <li><strong>For California residents:</strong> California residents: Do Not Sell or Share My Personal Information (link to opt-out page).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Option B */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    B. Short banner — Option 2 (emphasis on control & trust)
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Headline</strong></p>
                      <p className="italic">We value your privacy — choose which cookies you allow.</p>
                    </div>
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Body</strong></p>
                      <p className="italic">Strictly necessary cookies are required for the site to run. You decide about analytics, preferences and marketing cookies.</p>
                    </div>
                    <div>
                      <p><strong>Buttons</strong></p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Accept selected (default disabled until selection made)</li>
                        <li>Reject non-essential</li>
                        <li>Cookie settings (opens preferences panel)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Option C */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    C. Preference panel — full wording (granular controls)
                  </h3>
                  <div className="space-y-4">
                    <p>When the user clicks Manage preferences / Cookie settings, show a modal or accessible panel with the following copy and toggles:</p>
                    
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Panel header</strong></p>
                      <p className="italic">Cookie Preferences — control what we store on this device</p>
                    </div>
                    
                    <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <p><strong>Intro paragraph</strong></p>
                      <p className="italic">Choose which cookies you allow PrepViva to place on your device. We&apos;ll never set marketing or analytics cookies until you give explicit permission. You can change these settings at any time by visiting the Cookie Settings link in the footer. Strictly necessary cookies cannot be turned off as they are required to provide the service you requested.</p>
                    </div>

                    <div>
                      <p><strong>List of toggleable categories (each with a short plain-English explanation).</strong></p>
                      <p className="text-sm text-neutral-600 mb-4">Note: toggles must default to OFF for all non-essential categories; Strictly necessary is fixed ON and visually indicated as such (with a short explanation why it cannot be disabled).</p>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 border border-green-200 rounded">
                          <p><strong>Strictly necessary — Always active (cannot be turned off)</strong></p>
                          <p className="text-sm">Why: Needed for secure login, session management, and to complete payments.</p>
                          <p className="text-sm">Examples: session cookies, checkout security cookies.</p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                          <p><strong>Analytics & performance — toggle [OFF] / [ON]</strong></p>
                          <p className="text-sm">Why: Helps us understand how you use the site to improve features and fix problems.</p>
                          <p className="text-sm">Examples: Google Analytics / GA4 cookies (_ga, _gid, etc.).</p>
                          <p className="text-sm">Effect when OFF: We will not set analytics cookies and will not collect page-level analytics for your browser. (You can also use the Google Analytics opt-out extension if you prefer.) <a href="#" className="text-primary-600 hover:text-primary-700">Google Support</a></p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                          <p><strong>Functional & preferences — toggle [OFF] / [ON]</strong></p>
                          <p className="text-sm">Why: Remembers language, accessibility choices and UI preferences to provide a better experience.</p>
                          <p className="text-sm">Examples: language selection cookies, accessibility preference cookies.</p>
                        </div>
                        
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded">
                          <p><strong>Marketing & advertising — toggle [OFF] / [ON]</strong></p>
                          <p className="text-sm">Why: Enables personalised ads and retargeting across devices and partners.</p>
                          <p className="text-sm">Examples: Facebook Pixel, Google Ads cookies, LinkedIn Insight Tag.</p>
                          <p className="text-sm">Effect when OFF: We will not place marketing cookies for advertising or retargeting.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p><strong>Buttons at the bottom of the panel</strong></p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Save preferences (applies chosen toggles for this browser/device — will store consent log)</li>
                        <li>Accept all (sets all toggles ON and closes panel)</li>
                        <li>Reject non-essential (switches all toggles OFF except Strictly necessary and closes panel)</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <p><strong>Information / legal text</strong></p>
                      <p className="italic">&quot;By saving your preferences you consent to the categories you have enabled. You can withdraw consent at any time via Cookie Settings (footer) or by contacting our DPO at dpo@prepviva.co.uk.&quot; <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></p>
                    </div>

                    <div>
                      <p><strong>Footer link for California residents</strong></p>
                      <p>California residents: Do Not Sell or Share My Personal Information — opens opt-out mechanism. <a href="#" className="text-primary-600 hover:text-primary-700">oag.ca.gov</a></p>
                    </div>
                  </div>
                </div>

                {/* Implementation Notes */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    D. Implementation & compliance notes for engineers and legal
                  </h3>
                  <div className="space-y-4">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Do not set or fire third-party analytics or marketing tags until the user has actively consented to that category. This includes tags loaded via Tag Manager; load guarded tag containers or activate tags only after consent callback. This follows ICO/PECR active opt-in guidance. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                      <li>No pre-ticked boxes — Make sure that all optional categories are unchecked by default. The user must perform a positive action to turn them on. <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                      <li>Store a machine-readable consent string (for example IAB-TCF or custom JSON) and a human-readable log entry with timestamp and CMP version. Maintain this for the defined retention period (we recommend documenting 7 years). <a href="#" className="text-primary-600 hover:text-primary-700">Information Commissioner&apos;s Office</a></li>
                      <li>Accessibility — ensure the banner/panel is keyboard and screen-reader friendly; ensure color/contrast meets WCAG requirements.</li>
                      <li>Audit & tag map — maintain a live register of tags, cookies and third-party scripts (ROPA-level). Update the Cookie Policy when tags change.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
