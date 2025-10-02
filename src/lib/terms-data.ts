export interface TermsSection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
  readonly subsections?: readonly TermsSubsection[];
}

export interface TermsSubsection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
  readonly subsections?: readonly TermsSubsection[];
}

export interface TermsSchedule {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
}

export const termsAndConditionsData = {
  title: "PREPVIVA TERMS AND CONDITIONS",
  lastUpdated: "2 October 2025",
  preamble: "Important: These Terms and Conditions (the \"Agreement\", \"Terms\") form a legally binding contract between you (the natural person or legal entity using the Services; \"you\", \"your\", \"User\") and PrepViva Limited (trading as \"PrepViva\", \"we\", \"us\", \"our\"), a company incorporated in England and Wales (company number: [insert company number]) whose registered office is at [insert registered office address]. These Terms govern your access to and use of PrepViva's online platform, software, content, AI-driven mock interview services and feedback reports (the \"Platform\" and collectively the \"Services\"), whether you use the Platform as an individual applicant, student, NHS employee/applicant, a university, or other institutional customer (each an \"Institutional Customer\").",
  legalFramework: "These Terms are drafted and intended to be enforceable under the laws of England and Wales and to comply with applicable UK statutes and regulations, including but not limited to the UK GDPR and Data Protection Act 2018, consumer protection legislation and NHS data security standards. PrepViva also aims to operate consistently with relevant international privacy laws (including the California Consumer Privacy Act/CPRA for applicable Users), and with regulatory guidance applicable to AI-driven services.",
  sections: [
    {
      id: "definitions",
      title: "1. DEFINITIONS AND INTERPRETATION",
      content: [],
      subsections: [
        {
          id: "definitions-1-1",
          title: "1.1 Definitions",
          content: [
            "In this Agreement, unless the context otherwise requires:",
            "\"Account\" means the user account you open with PrepViva to access the Services.",
            "\"AI Models\" means machine learning models, algorithms and associated software used by the Platform to generate interview prompts, scoring, feedback and reports.",
            "\"Anonymised Data\" means data derived from User Content from which personal identifiers have been removed or irreversibly transformed such that the data cannot reasonably be re-identified and which is no longer personal data under applicable data protection law.",
            "\"Confidential Information\" means any non-public information disclosed by one party to the other, whether oral, written, electronic or in any other form, including business, technical and product information, but excluding information that (i) is or becomes public through no fault of the receiving party; (ii) is already in the lawful possession of the receiving party; (iii) is independently developed by the receiving party without access to the disclosing party's Confidential Information; or (iv) is required to be disclosed by law or regulatory order.",
            "\"Controller\", \"Processor\", \"Personal Data\", \"Special Category Data\", \"Processing\" shall have the meanings given to them under the UK GDPR / Data Protection Act 2018.",
            "\"DPA\" means the Data Processing Addendum executed between PrepViva and any Institutional Customer (or, where none is executed, the standard DPA set out in Schedule 1).",
            "\"Institutional Customer\" means any employer, university, NHS trust, college, or other organisation purchasing or using the Services on behalf of end users.",
            "\"Intellectual Property Rights\" means patents, copyrights, design rights, trade marks, service marks, trade names, domain names, moral rights, database rights, know-how, goodwill, trade secrets and rights in confidential information and other similar rights anywhere in the world, whether registered or unregistered.",
            "\"User Content\" means any content, data, text, images, recordings or other material you submit, upload, create or otherwise provide to the Platform in the course of using the Services (including answers in mock interviews, CVs, transcripts and profile information).",
            "\"Services\" and \"Platform\" have the meanings given in the preamble.",
            "\"Session\" means a single paid mock interview session (standard price: £29 per session unless otherwise agreed in writing for bulk or bespoke institutional packages).",
            "\"Writing\" and similar expressions include email, unless otherwise stated."
          ]
        },
        {
          id: "definitions-1-2",
          title: "1.2 Interpretation",
          content: [
            "Headings are for convenience only. References to a Clause or Schedule are to clauses or schedules of this Agreement. Singular includes the plural and vice versa. The word \"including\" and similar expressions shall be read as \"including, without limitation\"."
          ]
        }
      ]
    },
    {
      id: "acceptance",
      title: "2. ACCEPTANCE; SCOPE; CHANGES",
      content: [],
      subsections: [
        {
          id: "acceptance-2-1",
          title: "2.1 Agreement to be bound",
          content: [
            "By (a) registering for an Account, (b) using or accessing the Services, (c) purchasing a Session, or (d) clicking \"Accept\" or equivalent, you accept and agree to be bound by these Terms. If you are entering into this Agreement on behalf of an Institution, you confirm you have authority to bind that Institution and \"you\" in these Terms refers to that Institution."
          ]
        },
        {
          id: "acceptance-2-2",
          title: "2.2 If you do not accept",
          content: [
            "If you do not agree to these Terms, you must not access or use the Services."
          ]
        },
        {
          id: "acceptance-2-3",
          title: "2.3 Modifications to Terms",
          content: [
            "We may modify or replace these Terms from time to time by publishing revised terms on the Platform or notifying you by email. Modifications are effective at publication or as otherwise stated. If you continue to use the Services after modifications become effective you will be bound by the revised Terms. Material changes will be notified at least 30 days in advance for Institutional Customers and 14 days for individual Users where reasonably practicable."
          ]
        },
        {
          id: "acceptance-2-4",
          title: "2.4 Priority",
          content: [
            "Any additional or different terms proposed by you (including in purchase orders or other documents) are expressly rejected and shall have no effect unless expressly agreed in writing by an authorised PrepViva representative."
          ]
        }
      ]
    },
    {
      id: "eligibility",
      title: "3. ELIGIBILITY; REGISTRATION; ACCOUNTS",
      content: [],
      subsections: [
        {
          id: "eligibility-3-1",
          title: "3.1 Eligibility",
          content: [
            "You must be at least 18 years old (or the minimum age permitted by applicable local law) and capable of forming legally binding contracts in your jurisdiction to register for an Account. If you are under 18 but of minimum age to use the Services under local law, you may only use the Services with the consent and supervision of a parent or legal guardian who agrees to be bound by these Terms, unless otherwise permitted by the Platform."
          ]
        },
        {
          id: "eligibility-3-2",
          title: "3.2 Registration",
          content: [
            "To register you must provide accurate, current and complete information and keep it up-to-date. You agree to maintain the confidentiality of your Account credentials and are responsible for all activity under your Account."
          ]
        },
        {
          id: "eligibility-3-3",
          title: "3.3 Verification",
          content: [
            "We may verify your identity and may refuse registration, suspend or terminate an Account in the event of suspected fraud, misuse or violation of these Terms or applicable laws."
          ]
        },
        {
          id: "eligibility-3-4",
          title: "3.4 Institutional Accounts",
          content: [
            "Institutions must register using institutional credentials and provide legally required contract information and purchase orders. Institutional Customers are solely responsible for administering access to the Platform for their Users and for ensuring compliance with NHS data standards (where applicable), including execution of a DPA."
          ]
        },
        {
          id: "eligibility-3-5",
          title: "3.5 Minors and Parental / Guardian Consent",
          content: [],
          subsections: [
            {
              id: "minors-3-5-1",
              title: "3.5.1 Scope and purpose",
              content: [
                "This Clause 3.5 sets out the parties' respective rights and obligations where the User of the Services is a minor (a \"Minor\") and where any User Content or Personal Data of a Minor is processed in connection with the Services. For the purposes of this Agreement, \"Minor\" means a natural person under the age of eighteen (18) except where a lower age of legal capacity is permitted by applicable local law, in which case the definition of Minor for that User shall be determined by the relevant local law."
              ]
            },
            {
              id: "minors-3-5-2",
              title: "3.5.2 Age thresholds and jurisdictional variance",
              content: [
                "(a) Where local law sets a higher or lower minimum age for the formation of contracts or for consent to data processing, those local legal requirements shall apply in place of the age thresholds set out in this Clause.",
                "(b) Where Users are resident in the United States and are under the age of thirteen (13), additional legal obligations such as the Children's Online Privacy Protection Act (COPPA) apply; the Platform will not knowingly collect Personal Data from Users under thirteen (13) without prior verified parental consent in accordance with COPPA and applicable implementing guidance."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "services",
      title: "4. DESCRIPTION OF SERVICES",
      content: [],
      subsections: [
        {
          id: "services-4-1",
          title: "4.1 Core Services",
          content: [
            "PrepViva provides AI-powered mock interview simulations, interactive interview practice, real-time scoring, written and/or audio-visual feedback, structured feedback reports, analytics and optional human coaching as specified at the time of purchase. The Platform also permits Institutions to purchase bulk packages and to manage cohorts through administration tools."
          ]
        },
        {
          id: "services-4-2",
          title: "4.2 No subscription model",
          content: [
            "PrepViva charges on a per Session basis. There is no recurring subscription fee unless expressly agreed in a separate written contract."
          ]
        },
        {
          id: "services-4-3",
          title: "4.3 Service availability",
          content: [
            "PrepViva will use commercially reasonable endeavours to make the Platform available 24/7, subject to maintenance windows, force majeure, outages of third party services and periodic updates. We do not warrant uninterrupted or error-free operation."
          ]
        },
        {
          id: "services-4-4",
          title: "4.4 Educational simulation only",
          content: [
            "All Services, feedback, scores and reports are provided for practice, educational and preparatory purposes only. They do not constitute guaranteed outcomes, offers of employment, admission decisions, medical advice, clinical assessment, or clinical decision-making, and must not be relied upon as such. Users must not present or represent PrepViva output as an official decision of any employer, university, awarding body or regulator."
          ]
        },
        {
          id: "services-4-5",
          title: "4.5 Human oversight",
          content: [
            "Where automated scoring or recommendations are provided, human oversight may be applied depending on the package or institutional arrangements. For clarity, PrepViva may use combined human-and-AI review in accordance with its quality assurance processes."
          ]
        }
      ]
    },
    {
      id: "service-specific",
      title: "5. SERVICE-SPECIFIC TERMS — SESSIONS, BOOKINGS, INSTITUTIONAL PACKAGES",
      content: [],
      subsections: [
        {
          id: "service-specific-5-1",
          title: "5.1 Pricing",
          content: [
            "The standard per-session fee for a Session is £29 (inclusive or exclusive of VAT as displayed at checkout; any applicable taxes will be shown at the point of purchase). Institutional bulk pricing is available by separate agreement."
          ]
        },
        {
          id: "service-specific-5-2",
          title: "5.2 Payment method",
          content: [
            "Payments are processed by third-party payment processors engaged by PrepViva (the \"Payment Processors\"). You agree to comply with Payment Processor terms and to provide accurate billing details. PrepViva is not the merchant of record for all payment methods — institutional agreements will specify the applicable billing method."
          ]
        },
        {
          id: "service-specific-5-3",
          title: "5.3 Pre-payment; authorisation",
          content: [
            "Sessions must be paid at the time of booking unless otherwise agreed in writing with an authorised PrepViva representative."
          ]
        },
        {
          id: "service-specific-5-4",
          title: "5.4 Booking and scheduling",
          content: [
            "Session bookings are made via the Platform. PrepViva will confirm bookings by email. Users must arrive at sessions at the scheduled time; no-shows may be treated as a completed Session without refunds except as otherwise provided in Clause 7 (Refunds & Cancellations)."
          ]
        },
        {
          id: "service-specific-5-5",
          title: "5.5 Bulk packages for Institutions",
          content: [
            "Institutional purchases are governed by separate written purchase orders and the DPA. Bulk credits are subject to expiration and use rules set out in the relevant purchase order. Institutional Customers must ensure their Users accept these Terms and any supplementary institutional access terms."
          ]
        }
      ]
    },
    {
      id: "user-obligations",
      title: "6. USER OBLIGATIONS; PROHIBITED USE",
      content: [],
      subsections: [
        {
          id: "user-obligations-6-1",
          title: "6.1 General obligations",
          content: [
            "You agree to:",
            "• comply with these Terms, all applicable laws and regulations and any reasonable usage rules published on the Platform;",
            "• provide accurate, complete and lawful information in your Account and during Sessions;",
            "• use the Services only for permitted educational and preparatory uses; and",
            "• promptly notify PrepViva of any unauthorised use of your Account."
          ]
        },
        {
          id: "user-obligations-6-2",
          title: "6.2 No sensitive or special category disclosures",
          content: [
            "You must not disclose sensitive personal data, special category data (e.g., health details, ethnic origin, sexual orientation, political opinions), highly confidential NHS patient-identifiable information, or any other information you are not lawfully permitted to disclose during Sessions. PrepViva will remind Users not to disclose such information; however, if you disclose such information you do so voluntarily and you consent to our processing only to the extent necessary to provide the Services and to meet legal obligations. Institutional Customers using the Platform for NHS recruitment or training must ensure no patient-identifiable data is submitted without an executed DPA and explicit lawful basis. PrepViva will not process patient-identifiable data except under a written NHS-compliant DPA and where strictly necessary."
          ]
        },
        {
          id: "user-obligations-6-3",
          title: "6.3 Prohibited conduct",
          content: [
            "You must not, and must not assist or permit others to:",
            "• use the Services for unlawful, fraudulent, harassing, abusive, obscene or defamatory purposes;",
            "• upload or transmit material that infringes the Intellectual Property or privacy rights of others;",
            "• attempt to reverse-engineer, decompile, disassemble, modify or create derivative works of the Platform (except to the extent permitted by law);",
            "• circumvent Platform security, engage in data scraping or automated extraction of content without prior written consent;",
            "• attempt to access other Users' Accounts or restricted areas of the Platform;",
            "• interfere with the Platform operation or use the Platform to transmit malware or other harmful code;",
            "• use the Services for high-stakes automated decision-making that has legal or similarly significant effects on individuals (unless expressly agreed and accompanied by appropriate safeguards); or",
            "• attempt to represent PrepViva as endorsing or recommending a particular candidate for employment or admission."
          ]
        },
        {
          id: "user-obligations-6-4",
          title: "6.4 Remedies for misuse",
          content: [
            "PrepViva reserves the right to suspend or terminate Accounts, remove User Content, and to take technical, contractual or legal action in relation to breaches and misuse."
          ]
        }
      ]
    },
    {
      id: "refunds",
      title: "7. REFUNDS, CANCELLATION, CONSUMER CONTRACTS & NO-SUBSCRIPTION",
      content: [],
      subsections: [
        {
          id: "refunds-7-1",
          title: "7.1 Consumer Contracts Regulations (cancellation rights)",
          content: [
            "If you are a consumer (a natural person acting for purposes outside your trade, business or profession), you may have statutory cancellation rights under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. Those rights vary depending on whether the Services begin immediately. Pursuant to the Regulations, where performance of a services contract begins with your explicit consent and you acknowledge that you lose the right to cancel once performance has begun, you will not have the 14-day cancellation right. By purchasing a Session and expressly consenting to immediate performance at checkout, you acknowledge that performance will begin immediately and you therefore waive your 14-day cancellation right in respect of that Session."
          ]
        },
        {
          id: "refunds-7-2",
          title: "7.2 PrepViva cancellation and refund policy",
          content: [
            "Subject to applicable mandatory consumer law:",
            "",
            "Cancellations by Users. Individual Users who cancel a booked Session more than 48 hours before the scheduled Session will receive a full refund. Cancellations between 24 and 48 hours before the scheduled Session will receive a 50% refund. Cancellations within 24 hours or failure to attend are non-refundable unless agreed in writing by PrepViva. Where a Session is purchased for immediate performance and you have waived statutory cancellation rights as in Clause 7.1, refunds are determined by this Clause 7.2 rather than by cancellation rights.",
            "",
            "Cancellations by PrepViva. If PrepViva cancels a Session for any reason other than force majeure, you will be offered a choice of (i) a full refund for the affected Session, or (ii) a reasonable alternative time.",
            "",
            "Fault or Service Failure. If there is a material failure in delivering the Services caused by PrepViva, we will use reasonable endeavours to correct it. If we cannot remedy it within a reasonable time, you may be entitled to a pro rata refund or credit for the affected Services.",
            "",
            "Institutional purchases. Refunds and cancellation for Institutional Customers are governed by the applicable purchase order."
          ]
        },
        {
          id: "refunds-7-3",
          title: "7.3 Chargebacks & disputes",
          content: [
            "If you dispute a charge, you must notify us and our Payment Processor promptly. PrepViva reserves the right to supply evidence to Payment Processors to defend legitimate charges. Unjustified chargebacks may result in suspension of Services, recovery costs, and refusal of future service."
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "8. INTELLECTUAL PROPERTY",
      content: [],
      subsections: [
        {
          id: "intellectual-property-8-1",
          title: "8.1 Ownership",
          content: [
            "All Intellectual Property Rights in the Platform, the Services, the AI Models, software, content, reports, branding, graphics and documentation provided by PrepViva are owned by or licensed to PrepViva. Nothing in this Agreement transfers ownership of PrepViva's Intellectual Property to you."
          ]
        },
        {
          id: "intellectual-property-8-2",
          title: "8.2 Limited licence to Users",
          content: [
            "Subject to your compliance with these Terms and payment of applicable fees, PrepViva grants you a limited, revocable, non-transferrable, non-exclusive licence to access and use the Services for your internal, non-commercial educational and preparatory purposes only."
          ]
        },
        {
          id: "intellectual-property-8-3",
          title: "8.3 User Content; licence to operate the Services",
          content: [
            "By submitting User Content you grant PrepViva (and its affiliates, sub-contractors and service providers) a worldwide, perpetual (unless revoked in accordance with Clause 15), non-exclusive, royalty-free, transferable licence to store, copy, transmit, host, modify, analyse, reproduce, adapt, prepare derivative works of, publish, distribute and display such User Content to the extent necessary to provide and improve the Services, to provide feedback reports to you and to perform backups and security functions. This licence includes the limited right to use such User Content to create Anonymised Data for research, quality improvement, model development and benchmarking purposes. For clarity, the licence does not otherwise transfer ownership of your User Content."
          ]
        },
        {
          id: "intellectual-property-8-4",
          title: "8.4 Model training and anonymisation; opt-out",
          content: [
            "PrepViva may use User Content and derived metrics to train and improve AI Models, provided Personal Data is removed or converted into Anonymised Data. Where the use would involve Personal Data or Special Category Data not rendered anonymous, PrepViva will rely on an appropriate lawful basis (including explicit consent where required) and will obtain any required opt-in consent from Users. Institutional arrangements and the DPA will govern model training where Institutional Customers provide the data."
          ]
        },
        {
          id: "intellectual-property-8-5",
          title: "8.5 Feedback",
          content: [
            "Any suggestions, feedback or ideas you submit to PrepViva concerning the Services will be the exclusive property of PrepViva and you hereby assign all rights in such feedback to PrepViva."
          ]
        },
        {
          id: "intellectual-property-8-6",
          title: "8.6 Reservation of rights",
          content: [
            "All rights not expressly granted are reserved."
          ]
        }
      ]
    },
    {
      id: "user-content",
      title: "9. USER CONTENT; REPRESENTATIONS, WARRANTIES AND RIGHTS",
      content: [],
      subsections: [
        {
          id: "user-content-9-1",
          title: "9.1 Your representations",
          content: [
            "You represent and warrant that:",
            "you own or have the necessary licences, rights, consents and permissions to grant the licences to PrepViva described in Clause 8; and",
            "",
            "User Content does not infringe the rights of any third party, is not defamatory, obscene, fraudulent or unlawful, and does not contain Special Category Data unless you have complied with Clause 6.2 and the Platform's data submission requirements."
          ]
        },
        {
          id: "user-content-9-2",
          title: "9.2 Monitoring and removal",
          content: [
            "PrepViva may monitor User Content and may remove, disable access to, or refuse to host any User Content for any reason (including breach or suspected breach of these Terms), without liability."
          ]
        },
        {
          id: "user-content-9-3",
          title: "9.3 Backup and retention",
          content: [
            "While PrepViva takes reasonable measures to maintain backups of User Content, PrepViva is not responsible for any loss of User Content except where caused by PrepViva's gross negligence or wilful misconduct."
          ]
        }
      ]
    },
    {
      id: "privacy",
      title: "10. PRIVACY, DATA PROTECTION & SECURITY",
      content: [],
      subsections: [
        {
          id: "privacy-10-1",
          title: "10.1 Controller & Processor roles",
          content: [
            "PrepViva acts as Controller for the personal data it collects for its own administrative purposes and as Processor when processing Personal Data on behalf of an Institutional Customer under an executed DPA. The Data Protection Act 2018 and UK GDPR apply to our processing activities."
          ]
        },
        {
          id: "privacy-10-2",
          title: "10.2 Privacy information",
          content: [
            "Our Privacy Policy (available at [insert URL]) forms part of this Agreement and explains how we collect, use, disclose and protect Personal Data. By using the Services you consent to PrepViva's processing of your Personal Data in accordance with the Privacy Policy and this Agreement."
          ]
        },
        {
          id: "privacy-10-3",
          title: "10.3 Lawful basis",
          content: [
            "PrepViva will process Personal Data on the following lawful bases as applicable: (a) performance of this Agreement (to provide the Services); (b) legitimate interests (to improve and secure the Services, to detect and prevent fraud, subject to balancing tests); and (c) consent (where required for Special Category Data or model training). For Institutional Customers, the DPA specifies the lawful bases and processing instructions."
          ]
        },
        {
          id: "privacy-10-4",
          title: "10.4 Special category data and NHS data",
          content: [
            "The Platform is configured to discourage submission of Special Category Data and patient-identifiable NHS data. Institutional Customers requiring use of such data must contact PrepViva and execute a tailored DPA and security plan that meets NHS Data Security & Protection requirements (including DSP Toolkit obligations) prior to any processing. All organisations with access to NHS patient data must use the DSP Toolkit to provide assurance that they handle patient data correctly."
          ]
        },
        {
          id: "privacy-10-5",
          title: "10.5 Security measures",
          content: [
            "PrepViva implements and maintains appropriate technical and organisational measures to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access, and maintains an information security programme consistent with relevant industry standards and legal obligations."
          ]
        },
        {
          id: "privacy-10-6",
          title: "10.6 Breach notification",
          content: [
            "In the event of a Personal Data breach affecting your Personal Data, PrepViva will notify you without undue delay and will cooperate with you to meet applicable breach reporting obligations under the UK GDPR."
          ]
        },
        {
          id: "privacy-10-7",
          title: "10.7 Data subject rights",
          content: [
            "You may exercise rights available to you under applicable law (including rights of access, rectification, erasure, restriction, objection and data portability) as described in our Privacy Policy. Requests from data subjects will be processed in accordance with applicable law. Where you are an Institutional Customer, customer-facing rights handling will be governed by the DPA."
          ]
        },
        {
          id: "privacy-10-8",
          title: "10.8 International transfers",
          content: [
            "Personal Data may be transferred and stored outside the UK. Where such transfers occur, PrepViva will ensure appropriate safeguards (such as adequacy decisions, Standard Contractual Clauses or other lawful mechanisms) are in place in accordance with applicable data protection law. See our Privacy Policy for further details."
          ]
        },
        {
          id: "privacy-10-9",
          title: "10.9 Children",
          content: [
            "The Platform is not directed at children under 13. Where children aged 13–17 use the Services, parental or guardian consent may be required by local law and by certain institutional arrangements."
          ]
        },
        {
          id: "privacy-10-10",
          title: "10.10 ICO & AI guidance",
          content: [
            "PrepViva acknowledges and will take into account the Information Commissioner's Office guidance on AI and data protection, and guidance on explaining AI-assisted decisions to affected individuals. PrepViva will maintain technical and organisational measures to ensure transparency, fairness and accountability in automated processing."
          ]
        },
        {
          id: "privacy-10-11",
          title: "10.11 California & international privacy",
          content: [
            "For Users subject to the California Consumer Privacy Act (CCPA)/CPRA or other international privacy laws, PrepViva provides rights and mechanisms as required by applicable law (e.g., right to know, right to delete, right to opt out of sale where \"sale\" is applicable). Institutional and international Users may have additional contractual protections. Where CCPA/CPRA rights apply, we will process such requests in accordance with the applicable statutory framework."
          ]
        }
      ]
    },
    {
      id: "cookies-children",
      title: "10A. COOKIES AND CHILDREN/MINORS",
      content: [
        "1. Applicability: PrepViva may be used by applicants who are under 18, including university and medical school candidates. We recognise that some users may be legally considered children under applicable law (for example: under 13 in the UK for online consent purposes, under 16 in some EU Member States, and under 13 under the U.S. COPPA).",
        "2. Parental consent: Where we rely on consent as the lawful basis for setting cookies that process personal data, we will not seek consent directly from children under 13 in the UK. Instead, we will take reasonable steps to verify parental or guardian authorisation before activating such cookies.",
        "3. Design for children: In line with the ICO's Age Appropriate Design Code (Children's Code), our cookie banner, settings panel, and related notices are designed to be accessible, clear, and understandable by younger users. We avoid using misleading, manipulative, or \"nudge\" techniques to push acceptance.",
        "4. Minimisation: We do not use profiling or behavioural advertising cookies for accounts we reasonably believe are controlled by children under 18. Marketing cookies and similar tracking will not be deployed until we are satisfied that the user is old enough to provide valid consent (or that parental consent has been obtained).",
        "5. International alignment:",
        "EU/EEA: GDPR-K requires parental consent for processing children's data under the age of 16 (with Member States allowed to set lower limits, but no less than 13). We comply by requiring parental consent in relevant jurisdictions.",
        "U.S. (COPPA): For U.S. users under 13, we will not knowingly set non-essential cookies or allow behavioural advertising without verifiable parental consent.",
        "Global best practice: In jurisdictions without explicit child data rules, we apply the higher UK/EU standard by default.",
        "6. Review and monitoring: We regularly review our cookie categories to ensure that no high-risk tracking technologies (such as cross-site advertising trackers or location-based profiling) are deployed for known or likely child users.",
        "7. Parental control: Parents or guardians may contact us at dpo@prepviva.co.uk to:",
        "Withdraw previously given consent on behalf of a child.",
        "Request access to, or deletion of, any personal data linked to cookies used in their child's account."
      ]
    },
    {
      id: "ai-limitations",
      title: "11. AI LIMITATIONS, EXPLAINABILITY, BIAS & SAFETY",
      content: [],
      subsections: [
        {
          id: "ai-limitations-11-1",
          title: "11.1 Educational nature & limitations",
          content: [
            "The AI Models are trained on data sources and methodologies described in our documentation; however, outputs may be imperfect, incomplete, biased or contain errors. PrepViva does not guarantee the accuracy, completeness, currency or reliability of AI-generated feedback, and Users should treat outputs as indicative and educational."
          ]
        },
        {
          id: "ai-limitations-11-2",
          title: "11.2 No legal or clinical decisions",
          content: [
            "The Services are not to be used for legal, medical, clinical or any other decisions that would have legal or similarly significant effects on an individual. Where outputs may influence significant decisions (for example high-stakes assessment used by an Institution), additional human oversight and safeguards must be agreed in writing."
          ]
        },
        {
          id: "ai-limitations-11-3",
          title: "11.3 Explainability and transparency",
          content: [
            "PrepViva will provide reasonable, non-technical descriptions of the factors and criteria used by the AI Models to generate outputs and will maintain logs and disclosures to enable human review and explanation consistent with ICO and relevant governmental guidance. PrepViva's obligations to explain decisions are proportionate to the risk and the nature of the automated processing."
          ]
        },
        {
          id: "ai-limitations-11-4",
          title: "11.4 Bias mitigation",
          content: [
            "PrepViva maintains a programme of model evaluation, data quality assurance and bias mitigation. Despite these measures, no system can be guaranteed free of bias; Users and Institutional Customers must use outputs accordingly and not rely solely on automated scores in contexts where fairness and non-discrimination are critical."
          ]
        },
        {
          id: "ai-limitations-11-5",
          title: "11.5 User consent to automated processing",
          content: [
            "Where applicable law requires, by using the Services you consent to the automated processing described in these Terms for the purposes of providing the Services and generating AI-driven feedback and reports."
          ]
        }
      ]
    },
    {
      id: "warranties",
      title: "12. WARRANTIES; DISCLAIMERS",
      content: [],
      subsections: [
        {
          id: "warranties-12-1",
          title: "12.1 Mutual warranties",
          content: [
            "Each party represents and warrants that it has the power and authority to enter into this Agreement."
          ]
        },
        {
          id: "warranties-12-2",
          title: "12.2 PrepViva warranties",
          content: [
            "PrepViva warrants that it will provide the Services with reasonable skill and care, consistent with industry standards."
          ]
        },
        {
          id: "warranties-12-3",
          title: "12.3 Disclaimers",
          content: [
            "Except as expressly provided in Clause 12.2 and to the extent permitted by law, the Services and all content on the Platform are provided \"as is\" and PrepViva excludes all other warranties, conditions and representations, express or implied, statutory or otherwise, including (without limitation) any implied warranties of merchantability, fitness for a particular purpose, accuracy, non-infringement or compatibility."
          ]
        },
        {
          id: "warranties-12-4",
          title: "12.4 Consumer protections preserved",
          content: [
            "Nothing in these Terms is intended to exclude or limit any rights you may have as a consumer under applicable mandatory law (including rights under English and EU consumer protection legislation) that cannot lawfully be excluded or limited. For the avoidance of doubt, PrepViva does not exclude liability for death or personal injury resulting from its negligence, or for fraud."
          ]
        }
      ]
    },
    {
      id: "liability",
      title: "13. LIMITATION OF LIABILITY",
      content: [],
      subsections: [
        {
          id: "liability-13-1",
          title: "13.1 General limitation",
          content: [
            "Subject to Clause 13.4 and to the fullest extent permitted by applicable law, PrepViva's aggregate liability to you arising out of or in connection with this Agreement, whether in contract, tort (including negligence), breach of statutory duty or otherwise, shall not exceed the total Fees paid by you to PrepViva for the Services in the 12 months immediately preceding the event giving rise to the claim."
          ]
        },
        {
          id: "liability-13-2",
          title: "13.2 Exclusion of consequential loss",
          content: [
            "To the fullest extent permitted by applicable law, in no circumstances shall PrepViva be liable for any: (a) loss of profits, loss of revenue, loss of business, depletion of goodwill; (b) loss of anticipated savings; (c) loss of data; (d) loss of customers; (e) special, indirect or consequential loss; or (f) punitive or exemplary damages, arising out of or in connection with this Agreement."
          ]
        },
        {
          id: "liability-13-3",
          title: "13.3 Limitations applicable to Institutional Customers",
          content: [
            "Institutional arrangements may include higher liability caps by mutual agreement. Notwithstanding any contrary provision, nothing in this Clause 13 shall operate to limit PrepViva's liability for death or personal injury resulting from its negligence, or for fraud."
          ]
        },
        {
          id: "liability-13-4",
          title: "13.4 Consumer law carve-out",
          content: [
            "For Users who are consumers, nothing in this Clause shall limit those rights which cannot be limited under mandatory consumer protection legislation. Any attempt to exclude or limit such rights shall be read subject to the applicable mandatory law."
          ]
        }
      ]
    },
    {
      id: "indemnity",
      title: "14. INDEMNITY",
      content: [],
      subsections: [
        {
          id: "indemnity-14-1",
          title: "14.1 By Users",
          content: [
            "You shall indemnify, defend and hold harmless PrepViva, its officers, directors, employees, agents and affiliates from and against any and all claims, demands, losses, liabilities, damages, costs and expenses (including reasonable legal fees) arising out of or in connection with: (a) your breach of these Terms; (b) your User Content; (c) your use of the Services in violation of law or the rights of a third party; or (d) any fraudulent or unlawful conduct by you."
          ]
        },
        {
          id: "indemnity-14-2",
          title: "14.2 By PrepViva",
          content: [
            "PrepViva shall indemnify an Institutional Customer against claims arising from PrepViva's breach of its obligations under the DPA or from PrepViva's gross negligence or wilful misconduct, subject to the liability limitations in Clause 13, but excluding claims arising from Institutional Customer's data or Users' breach."
          ]
        }
      ]
    },
    {
      id: "confidentiality",
      title: "15. CONFIDENTIALITY",
      content: [],
      subsections: [
        {
          id: "confidentiality-15-1",
          title: "15.1 Obligations",
          content: [
            "Each party shall keep Confidential Information of the other party confidential and shall not disclose it to any third party except to those of its employees, officers, agents and professional advisers who need to know it and who are subject to confidentiality obligations at least as protective as those in this Agreement."
          ]
        },
        {
          id: "confidentiality-15-2",
          title: "15.2 Exceptions",
          content: [
            "Confidential Information does not include information that is or becomes publicly available other than by breach, is already known, independently developed, or required to be disclosed by law or competent authority (subject to prior notice to the disclosing party where permitted)."
          ]
        },
        {
          id: "confidentiality-15-3",
          title: "15.3 Duration",
          content: [
            "The confidentiality obligations survive termination of this Agreement for a period of five (5) years (except for trade secrets, which survive indefinitely)."
          ]
        }
      ]
    },
    {
      id: "dpa",
      title: "16. DATA PROCESSING AGREEMENT (DPA)",
      content: [],
      subsections: [
        {
          id: "dpa-16-1",
          title: "16.1 DPA requirement for Institutional Customers and NHS-related processing",
          content: [
            "Institutional Customers that process Personal Data on behalf of their Users or submit patient-identifiable NHS data shall enter into an executed DPA with PrepViva prior to any such processing. The DPA shall set out the respective obligations, security measures, sub-processors (if any), audit rights, international data transfer mechanisms and other required clauses to ensure compliance with UK GDPR, the Data Protection Act 2018 and NHS data governance requirements (including DSP Toolkit obligations where applicable)."
          ]
        },
        {
          id: "dpa-16-2",
          title: "16.2 Standard contractual terms",
          content: [
            "Where no bespoke DPA is executed, the standard DPA in Schedule 1 applies between PrepViva and the Customer and is incorporated by reference."
          ]
        }
      ]
    },
    {
      id: "third-party",
      title: "17. THIRD PARTY SERVICES; LINKS",
      content: [],
      subsections: [
        {
          id: "third-party-17-1",
          title: "17.1 Third Party Providers",
          content: [
            "The Platform may integrate with third party services (including Payment Processors, video conferencing and analytics providers). Use of such services may be subject to additional third-party terms. PrepViva is not responsible for third party services' performance or their privacy practices."
          ]
        },
        {
          id: "third-party-17-2",
          title: "17.2 Third Party Content",
          content: [
            "PrepViva disclaims all liability for third party content and does not endorse any third party websites or services linked on the Platform."
          ]
        }
      ]
    },
    {
      id: "accessibility",
      title: "18. ACCESSIBILITY, EQUALITY & REASONABLE ADJUSTMENTS",
      content: [],
      subsections: [
        {
          id: "accessibility-18-1",
          title: "18.1 Accessibility",
          content: [
            "PrepViva strives to make the Platform accessible and aims to comply with recognized accessibility standards such as WCAG 2.1 where reasonably practicable. PrepViva will make reasonable adjustments to accommodate Users with disabilities; requests for adjustments should be sent to [insert accessibility contact]."
          ]
        },
        {
          id: "accessibility-18-2",
          title: "18.2 Equality Act 2010",
          content: [
            "PrepViva acknowledges its obligations under the Equality Act 2010 and related anti-discrimination legislation and will not discriminate on protected characteristics. Institutional Customers must comply with applicable equality duties in their use of the Services."
          ]
        }
      ]
    },
    {
      id: "termination",
      title: "19. TERM; SUSPENSION; TERMINATION",
      content: [],
      subsections: [
        {
          id: "termination-19-1",
          title: "19.1 Term",
          content: [
            "This Agreement continues until terminated in accordance with this Clause 19."
          ]
        },
        {
          id: "termination-19-2",
          title: "19.2 Termination for convenience",
          content: [
            "Institutional Customers may terminate by written notice in accordance with the applicable purchase order. Individual Users may close their Account at any time by contacting support; termination will be effective upon confirmation."
          ]
        },
        {
          id: "termination-19-3",
          title: "19.3 Immediate termination for breach",
          content: [
            "Either party may terminate this Agreement immediately by notice if the other party commits a material breach that is incapable of remedy or if the other party fails to remedy a material breach within 30 days of written notice."
          ]
        },
        {
          id: "termination-19-4",
          title: "19.4 Suspension",
          content: [
            "PrepViva may suspend Accounts or access to the Services where: (a) required by law; (b) to protect Users or the Platform from harm; (c) for non-payment; (d) suspicion of fraud or criminal activity; or (e) to prevent security incidents. PrepViva will use reasonable efforts to notify Users prior to suspension where practicable."
          ]
        },
        {
          id: "termination-19-5",
          title: "19.5 Effect of termination",
          content: [
            "Upon termination, your licence to use the Services ceases immediately. PrepViva may delete or anonymise your User Content after any applicable retention period unless otherwise agreed. Termination does not relieve either party of obligations accrued prior to termination (including payment obligations) or surviving provisions of this Agreement (including Clauses 8, 9.1, 10, 12–16, 19.5, 20–27)."
          ]
        }
      ]
    },
    {
      id: "force-majeure",
      title: "20. FORCE MAJEURE",
      content: [],
      subsections: [
        {
          id: "force-majeure-20-1",
          title: "20.1 Non-liability for Force Majeure",
          content: [
            "Neither party shall be liable for any failure or delay in performing its obligations (other than payment obligations) under this Agreement to the extent such failure or delay is caused by events beyond the party's reasonable control (a \"Force Majeure Event\"), including natural disasters, acts of war, terrorism, strikes, pandemics, governmental acts, failure of third-party networks or Payment Processors, or major outages. The affected party shall notify the other party and use commercially reasonable efforts to mitigate the impact."
          ]
        }
      ]
    },
    {
      id: "notices",
      title: "21. NOTICES",
      content: [],
      subsections: [
        {
          id: "notices-21-1",
          title: "21.1 Form and service",
          content: [
            "All notices under this Agreement shall be in English and sent by email to the addresses stated in your Account or to legal@prepviva.example (replace with actual contact) for PrepViva, or by pre-paid registered post to the registered office. Notices are deemed received: (a) if delivered by email, on the next Business Day after sending; and (b) if delivered by registered post, two Business Days after posting."
          ]
        }
      ]
    },
    {
      id: "assignment",
      title: "22. ASSIGNMENT; SUB-CONTRACTING",
      content: [],
      subsections: [
        {
          id: "assignment-22-1",
          title: "22.1 Assignment",
          content: [
            "You may not assign or transfer your rights or obligations under this Agreement without PrepViva's prior written consent. PrepViva may assign or novate this Agreement (in whole or part) to an affiliate or successor in interest on notice to you."
          ]
        },
        {
          id: "assignment-22-2",
          title: "22.2 Sub-contracting",
          content: [
            "PrepViva may engage sub-processors and subcontractors (including Payment Processors and cloud service providers) to perform Services, subject to appropriate contractual protections, confidentiality obligations and DPA compliance. A list of sub-processors can be made available on request."
          ]
        }
      ]
    },
    {
      id: "severability",
      title: "23. SEVERABILITY; WAIVER; ENTIRE AGREEMENT; THIRD PARTY RIGHTS",
      content: [],
      subsections: [
        {
          id: "severability-23-1",
          title: "23.1 Severability",
          content: [
            "If any provision of this Agreement is held unenforceable, invalid or illegal under applicable law, that provision shall be severed and the remainder shall continue in full force and effect."
          ]
        },
        {
          id: "severability-23-2",
          title: "23.2 Waiver",
          content: [
            "No failure or delay by either party to exercise any right or remedy will operate as a waiver of that right or remedy."
          ]
        },
        {
          id: "severability-23-3",
          title: "23.3 Entire agreement",
          content: [
            "This Agreement, together with the Privacy Policy, the DPA (where executed) and any purchase order or schedule expressly incorporated by reference, constitutes the entire agreement between the parties and supersedes all prior agreements and understandings."
          ]
        },
        {
          id: "severability-23-4",
          title: "23.4 Third party rights",
          content: [
            "Except as expressly provided, a person who is not a party to this Agreement has no right to enforce any provision of this Agreement under the Contracts (Rights of Third Parties) Act 1999."
          ]
        }
      ]
    },
    {
      id: "governing-law",
      title: "24. GOVERNING LAW; JURISDICTION; ALTERNATIVE DISPUTE RESOLUTION",
      content: [],
      subsections: [
        {
          id: "governing-law-24-1",
          title: "24.1 Governing law",
          content: [
            "This Agreement is governed by and construed in accordance with the laws of England and Wales."
          ]
        },
        {
          id: "governing-law-24-2",
          title: "24.2 Jurisdiction",
          content: [
            "Subject to Clause 24.3, the parties submit to the exclusive jurisdiction of the courts of England and Wales to resolve disputes arising out of or in connection with this Agreement."
          ]
        },
        {
          id: "governing-law-24-3",
          title: "24.3 Consumer exceptions",
          content: [
            "Nothing in Clause 24.2 limits a User who is a consumer in the European Economic Area, or any other jurisdiction whose mandatory laws afford them the right to bring proceedings in their local courts, from bringing proceedings in their local courts. In such case, PrepViva may also bring proceedings against that User in the courts of the User's domicile."
          ]
        },
        {
          id: "governing-law-24-4",
          title: "24.4 Alternative dispute resolution",
          content: [
            "Before commencing legal proceedings, the parties shall attempt in good faith to resolve disputes by negotiation. For certain disputes, PrepViva may propose non-binding mediation or the use of official alternative dispute resolution services. For statutory consumer complaints in the UK, consumers may raise complaints with the Information Commissioner's Office or other competent authorities."
          ]
        }
      ]
    },
    {
      id: "complaints",
      title: "25. COMPLAINTS, REGULATORS & DATA PROTECTION AUTHORITIES",
      content: [],
      subsections: [
        {
          id: "complaints-25-1",
          title: "25.1 Complaints",
          content: [
            "If you have a complaint, you should contact support at support@prepviva.example (replace with actual contact). PrepViva will investigate and respond in accordance with its published complaint handling process."
          ]
        },
        {
          id: "complaints-25-2",
          title: "25.2 Regulatory cooperation",
          content: [
            "PrepViva will cooperate with data protection authorities and other regulators (including the Information Commissioner's Office) in relation to enquiries and investigations into compliance with data protection and other applicable laws."
          ]
        }
      ]
    },
    {
      id: "miscellaneous",
      title: "26. MISCELLANEOUS",
      content: [],
      subsections: [
        {
          id: "miscellaneous-26-1",
          title: "26.1 No partnership or agency",
          content: [
            "Nothing in this Agreement creates a partnership, joint venture or agency relationship between the parties."
          ]
        },
        {
          id: "miscellaneous-26-2",
          title: "26.2 Publicity",
          content: [
            "Neither party will use the other party's trade marks or trade names for publicity or marketing without prior written consent, except that PrepViva may identify an Institutional Customer as a client in non-confidential marketing materials unless the Institutional Customer opts out in writing."
          ]
        },
        {
          id: "miscellaneous-26-3",
          title: "26.3 English language",
          content: [
            "These Terms are written in English. Any translation is for convenience only. In case of conflict, the English version governs."
          ]
        }
      ]
    },
    {
      id: "use-cases",
      title: "27. EXAMPLES OF USE CASES; SPECIAL TERMS",
      content: [],
      subsections: [
        {
          id: "use-cases-27-1",
          title: "27.1 Medical school applicants (Oxbridge, Russell Group, etc.)",
          content: [
            "Users applying to medical schools acknowledge that the Services are preparatory only and do not influence official admissions decisions. PrepViva does not guarantee interview offers, placements, or outcomes."
          ]
        },
        {
          id: "use-cases-27-2",
          title: "27.2 NHS applicants and clinical roles",
          content: [
            "For users applying to NHS roles (Bands 5/6, Consultants, Specialty Training, Allied Health) or for Institutional NHS customers, additional controls and bespoke agreements may be required. Patient-identifiable data must never be uploaded without an executed NHS-compliant DPA and security plan."
          ]
        },
        {
          id: "use-cases-27-3",
          title: "27.3 International applicants",
          content: [
            "International Users must ensure they comply with visa, immigration and local professional regulation requirements when using PrepViva. PrepViva's Service does not guarantee or facilitate visas, admissions or licensing."
          ]
        }
      ]
    },
    {
      id: "acknowledgements",
      title: "28. ACKNOWLEDGEMENTS; REPRESENTATIONS ON CONSUMER RIGHTS",
      content: [],
      subsections: [
        {
          id: "acknowledgements-28-1",
          title: "28.1 Acknowledgement on cancellation rights",
          content: [
            "By proceeding with a purchase for immediate performance, you confirm that you have read and understand the information on cancellation pursuant to the Consumer Contracts Regulations 2013 and that you expressly consent to the immediate performance of the Services and acknowledge that you thereby lose the right to cancel the services contract under those regulations (where applicable)."
          ]
        },
        {
          id: "acknowledgements-28-2",
          title: "28.2 Accuracy of legal framework references",
          content: [
            "The parties acknowledge that the Services are provided in a regulatory environment subject to periodic change, including but not limited to data protection and AI regulatory developments. PrepViva will endeavour to maintain compliance with applicable statutory guidance and the advice of regulators such as the Information Commissioner's Office."
          ]
        }
      ]
    },
    {
      id: "contact",
      title: "29. CONTACT DETAILS",
      content: [
        "For notices, support and data protection enquiries:",
        "PrepViva Limited",
        "Registered office: [insert registered office address]",
        "Email (support): support@prepviva.example (replace with actual)",
        "Legal & DPA contact: legal@prepviva.example (replace with actual)",
        "",
        "Data Protection Officer (DPO)",
        "If applicable, contact DPO at dpo@prepviva.example (replace with actual)."
      ]
    },
    {
      id: "legal-references",
      title: "30. ADDITIONAL LEGAL REFERENCES (SELECTED)",
      content: [
        "Data Protection Act 2018; UK GDPR.",
        "ICO guidance — Artificial Intelligence and Data Protection; Explaining Decisions Made with Artificial Intelligence.",
        "Consumer Rights Act 2015 (digital content and services obligations).",
        "Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (distance and off-premises contracts).",
        "NHS Data Security and Protection Toolkit (DSPT) and related NHS Digital guidance.",
        "California Consumer Privacy Act (CCPA) / CPRA (for applicable Users)."
      ]
    },
    {
      id: "signatures",
      title: "31. SIGNATURES; BINDING EFFECT",
      content: [
        "These Terms are accepted electronically by your use of the Services, creation of an Account, purchase of a Session, or clicking \"I accept\". Where an Institution is the contracting party, an authorised signatory of that Institution shall execute any required purchase order or engagement letter.",
        "",
        "SCHEDULE OF GLOSSARY (Key Legal Terms — quick reference)",
        "\"Business Day\" — a day other than a Saturday, Sunday or public holiday in England when banks are open for business.",
        "\"Special Category Data\" — as defined in the UK GDPR (sensitive data such as health, race, religion etc.).",
        "\"Processor\", \"Controller\" — as defined under the UK GDPR.",
        "",
        "END OF PREPVIVA TERMS AND CONDITIONS"
      ]
    }
  ],
  schedules: [
    {
      id: "schedule-1",
      title: "SCHEDULE 1: STANDARD DATA PROCESSING ADDENDUM (DPA) (APPLICABLE WHERE NO EXECUTED DPA BETWEEN PARTIES)",
      content: [
        "NOTE: This Schedule sets out the standard DPA obligations and is incorporated into the Agreement where a bespoke DPA has not been negotiated. Institutional Customers processing Personal Data on behalf of Users, or any party uploading patient-identifiable data, must execute a bespoke DPA prior to processing.",
        "",
        "1. Roles and scope. PrepViva acts as Processor and the Customer (Institutional Customer) is the Controller for Personal Data processed on behalf of the Customer. The subject-matter, duration, nature and purpose of processing, types of Personal Data and categories of Data Subjects are as described in the Order Form and in the Platform documentation.",
        "",
        "2. Processor obligations. PrepViva shall:",
        "Process Personal Data only on documented instructions of the Controller (including in these Terms and the Order Form), unless required to do otherwise by law;",
        "Ensure personnel authorised to process Personal Data are subject to confidentiality obligations;",
        "Implement appropriate technical and organisational measures to protect Personal Data, including but not limited to access controls, encryption in transit and at rest where appropriate, regular vulnerability management and secure data deletion;",
        "Assist the Controller with data subject rights requests and data protection impact assessments as reasonably required;",
        "Make available documentation necessary to demonstrate compliance and permit audits by the Controller or an independent auditor where required, subject to reasonable notice and confidentiality obligations; and",
        "Engage subprocessors only after providing the Controller with prior written notice of intended changes and, where requested, listing sub-processors.",
        "",
        "3. Security incidents & breach notification. PrepViva will notify the Controller without undue delay upon becoming aware of a Personal Data breach affecting the Controller's Personal Data and will provide reasonable cooperation to mitigate the breach.",
        "",
        "4. International transfers. Where transfers of Personal Data outside the UK occur, PrepViva shall ensure appropriate safeguards are in place (e.g., adequacy, SCCs).",
        "",
        "5. Deletion and return. Upon expiry or termination of the Agreement, PrepViva shall, at the Controller's option, delete or return Personal Data in its possession unless required by law to retain it.",
        "",
        "6. Assistance. PrepViva shall assist the Controller in ensuring compliance with obligations related to security, notifications, DPIAs, and data subject rights."
      ]
    },
    {
      id: "schedule-2",
      title: "SCHEDULE 2: INSTITUTIONAL CUSTOMER & NHS-SPECIFIC REQUIREMENTS (SUMMARY)",
      content: [
        "Institutional Customers contracting for NHS-related recruitment, training or assessment must execute a bespoke DPA and a Security Schedule that meets NHS requirements, including but not limited to DSP Toolkit compliance, where access to patient-identifiable information is proposed.",
        "",
        "Institutional Customers are responsible for ensuring their use of Services complies with the NHS Confidentiality Code, Caldicott principles and any applicable contractual or statutory obligations.",
        "",
        "PrepViva will co-operate with Institutional Customers to support audits, inspections and security assessments subject to reasonable notice and confidentiality protections."
      ]
    }
  ]
} as const;
