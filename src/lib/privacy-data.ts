export interface PrivacySection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
  readonly subsections?: readonly PrivacySubsection[];
}

export interface PrivacySubsection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
  readonly subsections?: readonly PrivacySubsection[];
}

export interface PrivacyAnnex {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
}

export const privacyPolicyData = {
  title: "PrepViva — PRIVACY POLICY",
  subtitle: "(Long-form, regulator-ready Privacy Policy prepared for review by the UK Information Commissioner's Office and other international supervisory authorities)",
  effectiveDate: "2nd October 2025",
  lastUpdated: "2nd October 2025",
  sections: [
    {
      id: "introduction-scope",
      title: "Introduction & scope",
      content: [
        "1.1. This Privacy Policy sets out how PrepViva (the \"Company\", \"PrepViva\", \"we\", \"us\", \"our\") collects, uses, discloses, retains and protects personal data in connection with the PrepViva interview-practice platform, website(s) and associated services (the \"Services\"). PrepViva is a United Kingdom-based provider of AI-powered mock interview practice and feedback reports for medical school applicants (including Oxbridge and Russell Group universities), NHS job applicants (Band 5, Band 6, Consultant, Specialty Training, Allied Health), and general university applicants in the UK and internationally.",
        "1.2. This Policy applies to: (a) individual users (students, applicants and candidates) who create accounts and use the Services; (b) institutional customers (universities, NHS trusts and other organisational purchasers); and (c) prospective users and visitors to our websites and marketing channels.",
        "1.3. This Policy is intended to satisfy the transparency and disclosure requirements of the UK GDPR and Data Protection Act 2018, the EU GDPR (where applicable), the Privacy and Electronic Communications Regulations (PECR), the California Consumer Privacy Act (CCPA/CPRA) for California residents, and other applicable privacy laws. For key regulatory references and guidance we rely on the UK Information Commissioner's Office (ICO) and relevant NHS guidance."
      ]
    },
    {
      id: "definitions",
      title: "Definitions",
      content: [
        "For the purposes of this Privacy Policy, the following capitalised terms have the meanings set out below:",
        "2.1. \"Personal data\" means any information relating to an identified or identifiable natural person.",
        "2.2. \"Special category data\" (also called \"sensitive personal data\") means data such as health records, biometric data for identification, racial/ethnic origin, political opinions, religion, sexual life or orientation, trade union membership, genetic data. Processing of special category data requires additional safeguards.",
        "2.3. \"Processing\" means any operation performed on personal data — collection, storage, use, disclosure, erasure or other handling.",
        "2.4. \"Controller\" means the entity that determines the purposes and means of processing personal data.",
        "2.5. \"Processor\" means an entity that processes personal data on behalf of the controller.",
        "2.6. \"DPIA\" means Data Protection Impact Assessment, as required where processing is likely to result in a high risk to individuals.",
        "2.7. \"PECR\" refers to the Privacy and Electronic Communications Regulations (UK) which govern cookies and direct electronic marketing.",
        "2.8. \"ICO\" means the UK Information Commissioner's Office.",
        "2.9. \"DSPT\" means the NHS Data Security and Protection Toolkit.",
        "2.10. Other defined terms are used in ordinary legal senses consistent with UK GDPR and the Data Protection Act 2018."
      ]
    },
    {
      id: "controller-dpo-contact",
      title: "Identity of the Controller, Data Protection Officer and contact details",
      content: [
        "3.1. Controller: PrepViva (legal entity name: PrepViva [Ltd / Limited / other — insert legal entity variant]) — registration details: [Company registration number: __________] — registered office / service address: [Registered address: __________]. (These fields must be completed on the published Policy.)",
        "3.2. Data Protection Officer (DPO): Data Protection Officer, PrepViva Email: privacy@prepviva.com (or privacy@yourdomain.example) Postal: DPO, PrepViva, [Registered Address — insert] Phone: +44 [insert number] NOTE: The above DPO contact information is the principal route for privacy queries, requests to exercise rights, DPIA queries and contractual questions. The DPO is responsible for oversight of compliance and engagement with supervisory authorities.",
        "3.3. For prompt servicing of data subject requests we also operate a dedicated privacy requests mailbox: dpr@prepviva.com.",
        "3.4. If you are an institutional customer (university, NHS trust) please contact your institutional account manager (contact details appear in your contract) for service-level and data export requests."
      ]
    },
    {
      id: "legal-regulatory-framework",
      title: "Legal and regulatory framework (applicable law)",
      content: [
        "4.1. PrepViva processes personal data in compliance with the UK GDPR, the Data Protection Act 2018, and PECR. Where we provide Services to users or institutions in the EU we process in accordance with the EU GDPR. We also take steps to comply with other international privacy regimes applicable to our users such as the CCPA for California residents. The ICO and UK government provide primary guidance on the requirements we follow.",
        "4.2. Where PrepViva acts as a processor for institutional customers, the parties will document roles and responsibilities in a Data Processing Agreement (DPA) and/or Data Sharing Agreement (DSA) that sets out lawful bases, security obligations, breach notification and other required terms."
      ]
    },
    {
      id: "categories-personal-data",
      title: "Categories of personal data we collect",
      content: [
        "We collect, store and process the following categories of personal data when you use our Services. The list is deliberately exhaustive for regulatory clarity — not every user or event will involve all categories.",
        "5.1. Identity and account information — full name, title, username, password hash (never plain text), date of birth (if provided), account identifiers.",
        "5.2. Contact information — email address, postal address (where expressly provided), telephone/mobile number, emergency contact (if provided for institutional use).",
        "5.3. Authentication & verification data — hashed passwords, OAuth or identity provider identifiers, two-factor authentication tokens, account verification records.",
        "5.4. Payment & billing data (limited) — invoices, billing name and address, tokenised payment identifiers, last four digits of payment cards, transaction records and receipts. PrepViva does not store raw card PANs (full card numbers) or CVV data — payments are processed by third-party payment processors (for example Stripe) and tokens or last-four metadata returned by the provider are stored for record-keeping.",
        "5.5. Interview content and assessment data — audio recordings, video recordings, transcripts (automatically generated or human-transcribed), performance scores, feedback reports, time-stamped interaction logs, candidate responses, uploaded documents (e.g., CV, statement), self-assessment inputs, examiner/interviewer notes.",
        "5.6. Usage, device and technical data — IP address, device type, browser user agent, device identifiers, network and connection data, operating system, timestamps, service logs, crash logs, telemetry.",
        "5.7. Location data — derived approximate location from IP (where permitted) or GPS if explicitly provided by the user (rare and only with consent).",
        "5.8. Communications — support tickets, chat transcripts, email exchanges, and other communications between the user and us or between the user and third-party support providers.",
        "5.9. Institutional metadata — cohort identifiers, programme/course identifiers, anonymised or pseudonymised usage statistics for dashboarding for institutional customers.",
        "5.10. Inferences and profiling data — scores, tags, algorithmic inferences about performance, strengths/weaknesses derived from analysis, anonymised aggregate models.",
        "5.11. Administrative and compliance data — IP blocking, fraud prevention logs, records required for legal compliance such as tax information and contractual records."
      ]
    },
    {
      id: "special-categories-data",
      title: "Special categories of personal data and user instructions (sensitive data)",
      content: [
        "6.1. General prohibition and user instruction. PrepViva instructs users explicitly and unambiguously not to disclose special category data (health data, biometric identifiers used for identification, political opinions, racial/ethnic origin, religious beliefs, trade-union membership, sexual life or orientation, genetic data) during mock interviews or within uploaded content unless an authorised institutional arrangement and lawful basis is documented. This instruction appears in the user onboarding flow, interview consent screens and support documentation.",
        "6.2. Why this matters. Special category data is afforded higher legal protection under the UK GDPR and DPA 2018 — if we (or an institutional customer) need to process it for legitimate and documented reasons, we will require an explicit Article 9 condition (e.g., explicit consent) and an appropriate policy document under the DPA 2018. Processing of any NHS patient data must be subject to the NHS DSPT and appropriate contractual arrangements.",
        "6.3. What we will do if sensitive data is provided inadvertently. If a user supplies special category data in free-text or recordings, PrepViva will: (a) treat that data as sensitive; (b) quarantine the material; (c) notify the user and offer immediate redaction support or secure deletion upon request; and (d) if necessary, conduct a DPIA and consult with the DPO and the relevant supervisory authority before any further processing.",
        "6.4. Biometric information and voice data. Audio/voice recordings may contain biometric features. PrepViva will not use biometric data for identification or indexing unless the user provides explicit, documented consent and the processing is subject to a clear lawful basis and an additional appropriate policy document. Where biometric processing occurs it will be listed clearly in the interface and in a separate, enhanced consent screen."
      ]
    },
    {
      id: "purposes-processing",
      title: "Purposes of processing, lawful bases, and retention mapping",
      content: [
        "This section explains why we process personal data and the lawful basis relied upon for each purpose under Article 6(1) of the UK GDPR (and equivalent EU provisions), together with relevant Article 9 conditions where special category data would be involved."
      ],
      subsections: [
        {
          id: "performance-contract",
          title: "7.1. Performance of contract — account management and delivery of Services",
          content: [
            "Purposes: create and administer user accounts; provide access to Services (interview practice, report generation, scheduling); deliver purchased Services and licences to institutional customers.",
            "Lawful basis: performance of a contract to which the data subject is a party (Article 6(1)(b)).",
            "Retention: account and transactional records retained while account active and for [7] years after termination for tax, financial and dispute-resolution obligations.",
            "Notes: Payments are handled by third-party processors; PrepViva retains tokens and invoice records only."
          ]
        },
        {
          id: "payment-processing",
          title: "7.2. Payment processing and fraud prevention",
          content: [
            "Purposes: process payments, fraud detection, AML compliance, maintain invoices and tax records.",
            "Lawful basis: performance of contract and legal obligation (Article 6(1)(b) and (c)).",
            "Processors: Stripe (or other designated payment providers). PrepViva does not store raw card numbers or CVV."
          ]
        },
        {
          id: "ai-feedback",
          title: "7.3. Provision of personalised feedback and AI analysis",
          content: [
            "Purposes: process interview recordings, generate transcripts, run automated scoring models, provide model-assisted feedback, personalised learning plans.",
            "Lawful basis: performance of contract for paying customers; where models produce purely personalised scoring we rely primarily on contract; for additional profiling or research we rely on either legitimate interests (balanced against individual rights) or explicit consent depending on the case.",
            "Automated decisions: see Section 8 for safeguards and rights."
          ]
        },
        {
          id: "research-improvement",
          title: "7.4. Research and product improvement, including model training (AI)",
          content: [
            "Purposes: improve quality of assessments and AI models; anonymised analytics to enhance product; robustness testing and bias detection.",
            "Lawful basis: where data used is truly anonymised aggregate data — legitimate interest; where personal data is used to train models we will obtain explicit, informed consent from the user and/or rely on contract when the processing is necessary to deliver the Services. Any use of personal data for AI training will be clearly disclosed and opt-in only. ICO guidance on AI and data protection informs our approach."
          ]
        },
        {
          id: "customer-support",
          title: "7.5. Customer support, service messages and legal notifications",
          content: [
            "Purposes: respond to support queries, operational notifications, safety messages and contractual notices.",
            "Lawful basis: performance of contract and legitimate interests. Marketing messages require consent (Section 9)."
          ]
        },
        {
          id: "marketing-communications",
          title: "7.6. Marketing and promotional communications",
          content: [
            "Purposes: promotional emails, newsletters, targeted offers.",
            "Lawful basis: explicit consent for direct marketing by electronic means (email/SMS) when required by PECR; otherwise legitimate interests (subject to opt-out). See Section 9 for electronic marketing."
          ]
        },
        {
          id: "legal-compliance",
          title: "7.7. Legal & regulatory compliance, safety and fraud prevention",
          content: [
            "Purposes: comply with legal obligations; detect and prevent fraud; respond to lawful requests by authorities.",
            "Lawful basis: legal obligation (Article 6(1)(c)) or vital interests where necessary."
          ]
        },
        {
          id: "institutional-analytics",
          title: "7.8. Institutional analytics & reporting",
          content: [
            "Purposes: provide cohort dashboards, anonymised performance metrics and aggregated insights to institutional customers. Personal data will only be shared with institutional customers where contractually authorised and lawful. We default to pseudonymisation and aggregation for dashboards. See Section 16."
          ]
        },
        {
          id: "lawful-basis-records",
          title: "7.9. Lawful basis record-keeping",
          content: [
            "For all processing we record the lawful basis, retention period and the risks in our Records of Processing Activities, and we carry out DPIAs when required."
          ]
        }
      ]
    },
    {
      id: "automated-decision-making",
      title: "Automated decision-making, profiling and AI use — transparency & safeguards",
      content: [
        "8.1. Nature of automated processing. PrepViva uses automated technologies (including machine learning and rule-based engines) to: transcribe audio, generate feedback, assign performance scores and provide suggested next steps. These tools assist human coaches and are part of delivering the Services.",
        "8.2. Legal constraints — Article 22 and ICO guidance. Individuals have rights in relation to automated individual decision-making including profiling where such processing produces legal or similarly significant effects. PrepViva does not use wholly automated decision-making that produces legal or similarly significant effects without human review and explicit consent where required. All automated outputs used to make significant decisions will include human oversight, explanation and a right to challenge.",
        "8.3. Transparency and explainability. Where algorithmic profiling is performed we will: provide a clear, intelligible explanation of the logic involved; disclose the main categories of data used; provide meaningful information about the likely consequences for the data subject; and offer a right to obtain human review and to contest the outcome.",
        "8.4. AI training and model updates. Any use of personal data (including recordings) to train or improve models will only occur (a) with explicit, informed opt-in from the user, or (b) when personal data has been irreversibly anonymised. Where personal data is used to train models under consent we will document the scope of consent (what data, for which purpose, retention, withdrawal mechanism).",
        "8.5. High-risk processing and DPIAs. Where model deployment or profiling is likely to result in a high risk to the rights and freedoms of individuals (for example, large-scale sensitive profiling or biometric recognition) we will conduct a DPIA prior to the processing and consult the DPO and, where appropriate, the ICO."
      ]
    },
    {
      id: "cookies-tracking",
      title: "Cookies, tracking technologies and electronic communications (PECR)",
      content: [
        "9.1. Overview. We use cookies and similar technologies (tracking pixels, local storage, SDKs) to operate the Services, provide functionality, measure usage, and deliver personalised experiences. We comply with PECR and ICO guidance on cookies and consent.",
        "9.2. Categories of cookies we use: Strictly necessary cookies — required to authenticate users and to provide core functionality (no opt-in required). Functional cookies — remember language, user preferences (consent required under PECR if not strictly necessary). Performance/analytics cookies — aggregated analytics to improve Services (consent required). Targeting/advertising cookies — third-party advertising networks (consent always required).",
        "9.3. Consent and CMP. Non-essential cookies will be deployed only after prior, informed consent obtained via our cookie consent management platform (CMP). Users can change cookie preferences at any time via the cookie control panel or their browser settings. We retain cookie consent logs as part of our compliance records.",
        "9.4. Electronic marketing (email/SMS). For direct marketing by electronic means we obtain consent where PECR requires it (e.g., promotional emails or SMS) or rely on legitimate interests for certain relationship messages where lawful. Every marketing email includes an easy unsubscribe/opt-out link.",
        "9.5. Further information. A full cookie table (names, purposes, retention periods and opt-out links) is published at [INSERT COOKIE PAGE URL]."
      ]
    },
    {
      id: "third-party-processors",
      title: "Third-party processors, sub-processors and categories of recipients",
      content: [
        "10.1. General approach. PrepViva uses third-party processors to deliver the Services (cloud hosting, payment processing, analytics, communication platforms, transcription and AI model hosting). We select reputable providers, require contractual Data Processing Agreements (DPAs), and ensure appropriate safeguards (encryption, access controls). Our contracts with processors require them to act only on documented instructions and to implement appropriate technical and organisational measures.",
        "10.2. Examples of categories of processors (non-exhaustive): Payment processors and gateways (e.g., Stripe) — payment authorisation, tokenisation and settlement. We do not store raw card PAN/CVV data. Cloud hosting, storage and compute providers (e.g., AWS, Google Cloud, Microsoft Azure) — encrypted storage and compute for recordings and models. Transcription and speech-to-text providers — automated transcripts (we require contractual safeguards). Video conferencing and recording platforms — for live interview sessions. Analytics providers — aggregate product usage and performance metrics. CRM and customer support platforms — support tickets and communications. Security & logging providers — security monitoring, SIEM, vulnerability scanning.",
        "10.3. Sub-processors. Where a processor will engage sub-processors we require written authorisation (contractual) and maintain a register of authorised sub-processors. Institutional customers may request an up-to-date list of sub-processors.",
        "10.4. Disclosure to public authorities. We may disclose personal data to law enforcement, regulators, healthcare authorities (where necessary and lawful) upon valid legal process or to prevent fraud/serious harm.",
        "10.5. Third-party websites and interoperability. Our Services may include links to third-party sites; this Policy does not apply to third parties and you should check their privacy policies."
      ]
    },
    {
      id: "international-transfers",
      title: "International transfers and safeguards",
      content: [
        "11.1. Data residency. PrepViva's primary data processing and storage infrastructure is located in the United Kingdom and European Union (UK/EU). Where necessary for service delivery we may transfer personal data to processors or sub-processors in other jurisdictions.",
        "11.2. Lawful transfer mechanisms. Where transfers are made outside the UK/EEA to jurisdictions that do not have an adequacy decision we rely upon appropriate safeguards, such as: (a) the International Data Transfer Agreement (IDTA) and Addendum; (b) Standard Contractual Clauses (SCCs) with required addenda; or (c) other measures approved by the ICO and relevant supervisory authorities. We perform transfer risk assessments and apply technical and organisational safeguards as required.",
        "11.3. Adequacy decisions and updates. The status of adequacy decisions is subject to change. Where data flows originate in the EU we will rely upon existing EU adequacy decisions (where available) or appropriate contractual safeguards. We monitor regulatory developments regarding adequacy continuously.",
        "11.4. How to obtain details. Data subjects and institutional customers may request information about the specific transfer mechanisms that apply to their personal data by contacting privacy@prepviva.com."
      ]
    },
    {
      id: "data-retention",
      title: "Data retention and deletion policy (including institutional cohorts)",
      content: [
        "12.1. Principle. We retain personal data only as long as necessary for the purposes set out in this Policy, to satisfy contractual obligations, legitimate interests and legal obligations (e.g., tax and accounting), and to resolve disputes. We apply data minimisation and anonymisation where feasible.",
        "12.2. Typical retention periods (illustrative — see Annex A): Account data (identity, contact) — retained while account is active; after account closure we retain for up to 7 years for legal/tax/compliance and dispute resolution. Transactional/payment records & invoices — retained for 7 years for tax and accounting obligations. Interview recordings and transcripts — by default retained for 12 months from creation for service continuity and review; users may request earlier deletion. Institutional contracts may specify different retention periods; where an institutional customer mandates longer retention we will comply provided lawful basis is documented. Aggregated anonymised data — retained indefinitely for product analytics and institutional reporting (where truly anonymised and not reversible). Support logs & operational logs — retained for up to 2 years (or longer where required for security investigations).",
        "12.3. Right to erasure. Where a data subject requests erasure we will comply unless retention is required for performance of contract, legal obligations, public interest tasks, or to defend legal claims. See Section 14 on exercising rights.",
        "12.4. Institutional data. Institutional customers control the retention policy for the data they supply under their contract (subject to our security and legal obligations). Aggregated cohort analytics supplied to institutions will be pseudonymised and/or anonymised by default."
      ]
    },
    {
      id: "security-measures",
      title: "Technical and organisational security measures; data breach response",
      content: [
        "13.1. Security principles. PrepViva implements technical and organisational measures appropriate to the nature, scope, context and purposes of processing to ensure a level of security appropriate to the risk. Measures include encryption (in transit and at rest), pseudonymisation where feasible, role-based access control, least privilege, logging and monitoring, vulnerability management, regular security testing (including pen testing), employee training and background checks, and secure software development lifecycle (SSDLC) practices. We follow ICO and NCSC guidance on data security.",
        "13.2. Encryption. We use industry standard cryptographic protections (e.g., TLS for data in transit and AES-256 or equivalent for data at rest) for storing and transmitting personal data.",
        "13.3. Access and segregation. Access to personal data is limited to authorised personnel with documented business need; administrative and privileged access is audited. Where processors hold data we require contractual commitments to equivalent security standards.",
        "13.4. Breach detection and response. We maintain an incident response plan and monitor systems for anomalous activity. If a personal data breach occurs which is likely to result in a risk to the rights and freedoms of natural persons, we will notify the ICO without undue delay and, where feasible, within 72 hours of becoming aware of the breach, and will notify affected individuals where required by law. Our procedures follow ICO guidance on breach notification and escalation.",
        "13.5. Breach reporting to customers. For institutional customers we will follow contractually agreed notification procedures and support forensic investigation. Breach notifications will include details of affected data categories, likely consequences, and mitigations.",
        "13.6. Security audits and certification. Where appropriate we maintain third-party security audits, SOC reports, and will cooperate with institutional audits subject to confidentiality."
      ]
    },
    {
      id: "data-subject-rights",
      title: "Data subject rights and how to exercise them",
      content: [
        "14.1. Overview. Under the UK GDPR, EU GDPR and applicable international regimes (including CCPA/CPRA for California residents) data subjects have the rights described below. PrepViva facilitates the exercise of those rights in a timely manner and within the statutory timeframes (normally within one month of receipt; we may extend by up to two further months for complex requests with notice).",
        "14.2. List of rights (summary): Right of access — obtain confirmation whether we process personal data and a copy of that data. Right to rectification — correct inaccurate or incomplete personal data. Right to erasure (\"right to be forgotten\") — ask for deletion subject to legal exemptions. Right to restriction of processing — request restriction where accuracy disputed or legal claim pending. Right to data portability — receive data in a structured, commonly used and machine-readable format where processing is based on consent or contract. Right to object — object to processing based on legitimate interests or direct marketing. Right to withdraw consent — where processing relies on consent. Rights relating to automated decision-making and profiling — including the right to human review for decisions with legal or similarly significant effects.",
        "14.3. CCPA/CPRA rights (California residents). California residents may have rights to request categories of personal information collected, request deletion, opt out of \"sale\" (we do not sell personal information), and nondiscrimination for exercising privacy rights. We maintain processes to comply with verifiable consumer requests as required by the CPPA.",
        "14.4. How to exercise rights. Contact the DPO at privacy@prepviva.com or use the web form at [insert data subject rights form URL]. For California residents please use the web form \"Do Not Sell or Share My Personal Information\" where applicable.",
        "14.5. Verification. We will verify the identity of the requester to a reasonable standard before fulfilling requests. For requests made on behalf of another person we require authorised written consent.",
        "14.6. Fees. We will not charge a fee in most circumstances to comply with access, rectification or deletion requests. Where requests are manifestly unfounded or excessive we may charge a reasonable fee or refuse in accordance with applicable law.",
        "14.7. Escalation. If you are unsatisfied with our response you may lodge a complaint with the ICO (UK) or the California Privacy Protection Agency for CPRA matters. See Section 18."
      ]
    },
    {
      id: "minors-protections",
      title: "Minors and age-appropriate protections",
      content: [
        "15.1. Scope and purpose. 15.1.1. This Section sets out the specific protections, controls and processes PrepViva applies where the data subject is a child or minor (a \"Child\"). It supplements and does not limit other data protection rights set out elsewhere in this Policy. PrepViva is committed to applying enhanced safeguards because children require special protection under data protection law and international standards. 15.1.2. For the purposes of this Section: (a) in the United Kingdom the term \"Child\" means any natural person under the age of 13 for information-society services requiring consent (see Article 8 of the UK GDPR and the ICO's Age-Appropriate Design Code); (b) where other jurisdictional standards apply (for example, under some EU member states Article 8 age may be between 13 and 16) PrepViva will apply the higher protection/age threshold that is applicable to the individual user. PrepViva will also adopt additional local protections (e.g., COPPA in the United States) when operating in those jurisdictions.",
        "15.2. Legal bases and consent for minors. 15.2.1. Where PrepViva relies on consent as the lawful basis for processing Children's personal data in the context of information society services, PrepViva will obtain, prior to processing, verifiable parental or guardian consent for Children below the legally prescribed age for the relevant jurisdiction (UK default: under 13). For Children at or above the jurisdictional age of consent but below 16, PrepViva will apply the age threshold required by the relevant legislation (and where applicable obtain parental consent where local law requires). 15.2.2. PrepViva will document the lawful basis used for any processing of a Child's personal data and will retain evidence of any parental consents in its Records of Processing Activities (ROPA).",
        "15.3. Age gating and verification. 15.3.1. Age declaration at sign up. All users must provide their date of birth during account creation where the user indicates they are below 18 or when the Service is likely to be used by minors. Accounts created without a valid date of birth will be subject to age gating and may be suspended pending verification. 15.3.2. Verification methods. Where parental consent is required, PrepViva will implement reasonable, proportionate and privacy-preserving verification methods to verify the identity of the parent/guardian. Acceptable verification methods may include any combination of: (a) sending a consent link to a parent/guardian email address supplied by the prospective parent/guardian and requiring action; (b) secure third-party parental verification (e.g., identity verification service) where contractually used; (c) provision of a signed consent form (electronically signed) and confirmation via institutional account managers where the child is enrolled by an educational institution. PrepViva will not request unnecessary documentary evidence that increases the privacy risk for families. 15.3.3. Institutional onboarding override. Where an institutional customer (university or school) onboards Children under a lawful institutional arrangement (for example, an institutionally-managed account), the institution must demonstrate lawful basis and consent arrangements and appoint an institutional contact and, where applicable, a Caldicott Guardian. PrepViva will rely on the institution's documented lawful basis and institutional authorisation only upon execution of a Data Processing Agreement and the institution's certification of lawful consents."
      ],
      subsections: [
        {
          id: "age-appropriate-design",
          title: "15.4. Age-appropriate design and privacy protective defaults",
          content: [
            "15.4.1. Default settings. Where a Child account is identified, PrepViva will apply privacy-protective defaults: non-essential features disabled by default (e.g., public profile publishing, sharing to marketing channels), minimal data collection, no behavioural advertising, and no use of personal data for model training without explicit parental consent.",
            "15.4.2. Minimisation. PrepViva minimises collection of personal data from Children to what is strictly necessary to provide the Services. Fields that are not essential for provision of the Service will be optional and displayed with clear explanations.",
            "15.4.3. Interface design and language. User interfaces and consent notices displayed to Children will be age-appropriate, accessible and easy to understand; complex legal or technical language will be avoided. Where feasible, PrepViva will provide a concise child-friendly privacy summary at account creation."
          ]
        },
        {
          id: "parental-consent",
          title: "15.5. Parental/Guardian consent: content and withdrawal",
          content: [
            "15.5.1. Required content. Any parental or guardian consent obtained by PrepViva will be informed, freely given, specific, unambiguous and documented. At a minimum the consent request will clearly state: (a) the identity of the controller (PrepViva contact details and DPO); (b) the types/categories of personal data to be processed; (c) purposes of processing (e.g., hosting interview sessions, storing recordings for feedback); (d) retention periods or criteria for retention; (e) whether recordings may be used for AI training or product improvement (default: OPT-IN only and clearly separate); (f) rights available to the parent and child (access, rectification, erasure, restriction, portability, withdrawal); and (g) how to withdraw consent and what withdrawal means operationally (e.g., deletion and account suspension).",
            "15.5.2. Withdrawal. Parents/guardians may withdraw consent at any time via the DPO (privacy@prepviva.com) or their institutional contact. Following verified withdrawal, PrepViva will respect the withdrawal and, unless another lawful basis applies, delete or restrict processing of the Child's personal data in accordance with the retention/deletion rules set out in this Policy. PrepViva will communicate any consequences of withdrawal (e.g., loss of access to certain features) prior to completion of the withdrawal."
          ]
        }
      ]
    },
    {
      id: "institutional-customers",
      title: "Institutional customers (universities, NHS trusts) — data sharing and responsibilities",
      content: [
        "16.1. Controller roles. For institutional deployments the institutional customer typically acts as the Controller for data they upload (e.g., lists of students) and for downstream processing set out in the contract; PrepViva is a Processor in that context unless otherwise agreed. The contractual DPA will set out roles and instructions. Institutions must ensure their lawful basis and consent mechanisms for student data are in place.",
        "16.2. Dashboards and cohort analytics. Institutional dashboards present aggregated and pseudonymised cohort analytics by default. Identifying data is only shared with institutions where contractually authorised and where a lawful basis exists. For stored recordings and transcripts, institutions and PrepViva will agree retention and deletion policies.",
        "16.3. Data sharing agreements. Prior to onboarding institutional customers we will execute a Data Sharing Agreement or DPA specifying security requirements, processing boundaries, audit rights, retention, data export formats and breach notification procedures.",
        "16.4. Institutional obligations. Institutions that supply us with student or patient data must: (a) ensure necessary consents or lawful bases; (b) appoint their own DPO/Caldicott guardian where NHS data is involved; and (c) inform data subjects how institutional data will be processed in accordance with their own privacy notices.",
        "16.5. Bulk uploads and verification. Institutions uploading data to PrepViva must ensure accuracy and compliance with data minimisation principles. PrepViva will perform data validation and will notify the institution of any manifestly erroneous uploads."
      ]
    },
    {
      id: "nhs-obligations",
      title: "NHS-specific obligations — DSPT, Caldicott and appropriate policy documents",
      content: [
        "17.1. NHS standards. Where PrepViva processes NHS patient data, or provides Services under contract with NHS trusts, we will comply with NHS information governance obligations including the NHS Data Security and Protection Toolkit (DSPT) and Caldicott Principles. Providers accessing patient data must obtain necessary approvals and meet the DSPT self-assessment requirements.",
        "17.2. Caldicott principles. We commit to the Caldicott principles — justify the purpose, use the minimum necessary, access on strict need-to-know basis, and inform service users about use of data. Where required, we will work with designated Caldicott Guardians at institutional partners.",
        "17.3. Appropriate policy documents and Schedule 1 DPA 2018 conditions. For any processing that amounts to \"special category\" patient data, PrepViva and the institutional controller will document the appropriate Article 9 and DPA 2018 Schedule 1 conditions, and (where required) an appropriate policy document.",
        "17.4. DSPT registration and assurance. PrepViva will make DSPT self-assessment information available to NHS contracting parties and will cooperate with necessary audits subject to confidentiality constraints."
      ]
    },
    {
      id: "complaints-authorities",
      title: "Complaints, supervisory authorities and remedies",
      content: [
        "18.1. Raise a complaint with PrepViva first. If you have any concern about how we process your data please contact our DPO (privacy@prepviva.com) and we will investigate and respond in line with our internal complaints procedure.",
        "18.2. Independent supervisory authority (UK). If you remain dissatisfied you have the right to lodge a complaint with the Information Commissioner's Office (ICO): Make a complaint — ICO. Phone: 0303 123 1113; online guidance is available.",
        "18.3. CCPA/CPRA (California). California residents may direct privacy complaints to the California Privacy Protection Agency (CPPA) or the California Attorney General. The CPPA provides an online complaint submission portal for CCPA/CPRA matters.",
        "18.4. Judicial remedies and damages. Data subjects may be entitled to judicial remedies, including compensation for material or non-material damage caused by unlawful processing under applicable law."
      ]
    },
    {
      id: "policy-changes",
      title: "Changes to this Privacy Policy",
      content: [
        "19.1. PrepViva may amend this Policy to reflect legal, regulatory or operational changes. Where changes are material we will provide prominent notice on the Services and, where appropriate, obtain fresh consent. The \"Last updated\" date at the top of this Policy indicates when it was last revised."
      ]
    },
    {
      id: "retention-schedule-detailed",
      title: "Annex A — Typical retention schedule (illustrative)",
      content: [
        "(Institutions and users should refer to their contract for binding retention terms. The schedule below is PrepViva's default retention practice subject to lawful reasons to retain for longer.)",
        "20.1. Account and identity data — active account period + 7 years.",
        "20.2. Transactional/payment records & invoices — 7 years.",
        "20.3. Interview recordings & transcripts — default 12 months (user may request deletion sooner); can be longer where institution contractually requires.",
        "20.4. Aggregated anonymised analytics — indefinite (if truly anonymised).",
        "20.5. Support tickets and communications — 2 years.",
        "20.6. Security logs — 1–3 years depending on log type and legal/forensic need."
      ]
    },
    {
      id: "processors-detailed",
      title: "Annex B — Example list of third-party processors (illustrative)",
      content: [
        "(The definitive processor list is maintained on our legal page and updated as providers change. Institutions may request the current sub-processor list.)",
        "21.1. Payment processor: Stripe, Inc. (payment processing and tokenisation).",
        "21.2. Cloud hosting & storage: Amazon Web Services, Google Cloud Platform, Microsoft Azure (as applicable — UK/EU regions used by default).",
        "21.3. Transcription / STT providers: [provider names] (contracted under DPA).",
        "21.4. Video/communications platform: [provider names] (used for live interview delivery).",
        "21.5. Analytics: Google Analytics / Mixpanel / [others] — only used with appropriate consent.",
        "21.6. Support & CRM: [Zendesk/Intercom/others] — limited to support communications."
      ]
    },
    {
      id: "accountability-detailed",
      title: "Annex C — How we document lawfulness and accountability (DPIA, records)",
      content: [
        "22.1. Records of Processing Activities (ROPA). PrepViva maintains records required by Article 30, documenting categories of processing, retention, recipients and safeguards.",
        "22.2. DPIAs. We conduct DPIAs for new or materially changed processing that is likely to result in high risk (including major AI deployments, biometric processing or large-scale linking of special category data). ICO guidance on DPIAs is used to scope and document impact assessments.",
        "22.3. Policy documents and contracts. We maintain DPAs, sub-processor contracts and technical security annexes for supervisory evidence and audits."
      ]
    },
    {
      id: "specific-statements",
      title: "Specific statements and assurances",
      content: [
        "23.1. We will not use interview recordings for marketing without your explicit consent. Any marketing use of content will only occur after a separate opt-in is obtained.",
        "23.2. We do not store raw card data. Payment card details are processed by our payment providers — PrepViva retains tokens and last-four digits only to identify transactions and for customer service and accounting.",
        "23.3. Anonymisation and aggregation. Where we share analytics with institutional customers we will apply pseudonymisation and aggregation to prevent identification of individuals unless the institution's lawful basis and contract specify otherwise.",
        "23.4. AI model training & opt-in. PrepViva will only use personal data (including recordings and transcripts) to train AI models where we have an explicit, informed opt-in consent. Otherwise we will use anonymised data.",
        "23.5. Security and NHS compliance. For NHS engagements we will comply with DSPT and Caldicott principles and provide evidence of our DSPT posture to contracting NHS entities."
      ]
    },
    {
      id: "contact-details",
      title: "How to contact us (privacy queries and data subject requests)",
      content: [
        "Data Protection Officer — PrepViva",
        "Email: privacy@prepviva.com",
        "Postal: DPO, PrepViva, [Registered Address: insert]",
        "Phone: +44 [insert number]",
        "For data subject rights requests use: dpr@prepviva.com or the web form at [insert data request URL]. For institutional contract queries contact your account manager or institutionalcontracts@prepviva.com."
      ]
    },
    {
      id: "supervisory-contacts",
      title: "Supervisory authority contact details (examples)",
      content: [
        "United Kingdom — ICO: https://ico.org.uk/make-a-complaint/ — Phone: 0303 123 1113.",
        "California — CPPA: California Privacy Protection Agency complaint portal."
      ]
    },
    {
      id: "final-statements",
      title: "Final statements",
      content: [
        "26.1. PrepViva is committed to operating transparently and will cooperate with supervisory authorities to remedy compliance issues. This Privacy Policy represents our current, documented approach to personal data and may be referenced in contractual documentation with institutional partners.",
        "26.2. Acknowledgement — By using PrepViva Services you acknowledge that you have read and understood this Privacy Policy and consent to processing described herein where consent is the lawful basis, and accept the notices and mechanisms provided for exercising your rights."
      ]
    }
  ] as PrivacySection[],
  annexes: [
    
  ] as PrivacyAnnex[]
};
