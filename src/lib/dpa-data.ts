export interface DPASection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
  readonly subsections?: readonly DPASubsection[];
}

export interface DPASubsection {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
}

export interface DPASchedule {
  readonly id: string;
  readonly title: string;
  readonly content: readonly string[];
}

export const dpaData = {
  title: "Data Processing Agreement (DPA)",
  subtitle: "(Controller — Processor)",
  parties: {
    controller: "[Name of Controller] a legal entity incorporated under the laws of __________, having its principal place of business at _______________ (hereinafter \"Controller\");",
    processor: "PrepViva Limited (registered company number ________), a company incorporated under the laws of England and Wales whose registered office is at _______________ (hereinafter \"Processor\" or \"PrepViva\")."
  },
  effectiveDate: "[__ / __ / ____] (the \"Effective Date\")",
  recitals: [
    "A. The Controller and the Processor have entered into, or will enter into, a Main Agreement under which the Controller engages the Processor to provide services that involve processing Personal Data (the \"Main Agreement\").",
    "B. This DPA records each party's responsibilities to comply with Data Protection Legislation (including UK GDPR, EU GDPR where applicable, Data Protection Act 2018) and NHS Data Security Requirements, and sets out mandatory processing terms required by Article 28 GDPR and related laws.",
    "C. For institutional engagements (universities, NHS trusts, other institutions), the Controller determines purposes and means of processing Candidate Personal Data and PrepViva will act as Processor. For retail users, PrepViva may act as Controller; this DPA principally governs institutional Controller–Processor relationships.",
    "D. Parties wish to ensure secure handling, no unauthorised secondary use of data, clear breach processes, sub-processor rules, international transfer safeguards, and audit rights.",
    "Operative Clause: In consideration of mutual covenants, the parties agree as follows."
  ],
  sections: [
    {
      id: "definitions",
      title: "1. DEFINITIONS",
      content: [
        "In this DPA:",
        "1.1 \"Affiliate\" means, with respect to a party, any entity which directly or indirectly controls, is controlled by, or is under common control with that party.",
        "1.2 \"Controller\" means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data.",
        "1.3 \"Processor\" means a natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller.",
        "1.4 \"Data Subject\" means an identified or identifiable natural person whose Personal Data are Processed under this DPA.",
        "1.5 \"Personal Data\" means any information relating to an identified or identifiable natural person as defined in the UK GDPR/EU GDPR and Data Protection Act 2018.",
        "1.6 \"Special Categories of Personal Data\" means data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data processed to uniquely identify a natural person, health data, data concerning a natural person's sex life or sexual orientation, and other classes defined in Article 9 GDPR.",
        "1.7 \"Processing\" means any operation or set of operations performed on Personal Data such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.",
        "1.8 \"Sub-processor\" means any third party engaged by the Processor to process Personal Data on behalf of the Controller.",
        "1.9 \"Data Protection Legislation\" means, as applicable to each party, the UK GDPR, the EU GDPR (to the extent applicable), the Data Protection Act 2018, and any other applicable national implementing legislation, guidance and codes of practice and the rules and guidance of the Information Commissioner's Office and other competent supervisory authorities.",
        "1.10 \"NHS Data Security Requirements\" means the NHS Data Security and Protection Toolkit (DSPT) standards, NHS Digital guidance, and other NHS-specific guidance and law applicable to the Controller's organisation or processing.",
        "1.11 \"Instruction(s)\" means the Controller's documented, lawful instructions (including as set out in Schedule 1) to the Processor concerning the Processing of Personal Data.",
        "1.12 \"Record of Processing Activities\" or \"RoPA\" means the written records required by Article 30 of the GDPR.",
        "1.13 \"Applicable Supervisory Authority\" means the competent data protection authority for the Controller (for UK Controllers, typically the ICO).",
        "1.14 \"Data Protection Impact Assessment\" or \"DPIA\" means an assessment under Article 35 GDPR where required.",
        "1.15 \"Secure Delete\" or \"Secure Deletion\" means deletion of data so that the data cannot be reconstructed or retrieved using commercially reasonable means.",
        "1.16 \"Child\" or \"Minor\" means a natural person below the age of 18 years and, where relevant to specific legal contexts, the age bands recognized under applicable law (including but not limited to distinctions for information-society services such as under 13, 13–15, 16–17), as determined by the Controller's jurisdiction and Instructions.",
        "1.17 \"Parental Consent\" means an explicit, recorded, verifiable consent provided by a person with parental responsibility or legal guardian for a Child's access to or use of the Services and Processing of the Child's Personal Data.",
        "1.18 \"Parental Authority Documentation\" means evidence (when Controller requires it) that the person providing Parental Consent has legal parental responsibility; acceptable methods and proof shall be agreed in writing.",
        "1.19 \"Gillick Competence\" means the legal test used in clinical and some healthcare contexts to assess whether a person under 16 is capable of giving informed consent to medical treatment or processing; any determination rests with the Controller and must be communicated in writing to the Processor if relied upon."
      ]
    },
    {
      id: "duration-nature-purpose",
      title: "2. DURATION, NATURE, PURPOSE & SCOPE OF PROCESSING",
      content: [
        "2.1 Duration. The Processor shall process Personal Data for the period necessary to perform the Services under the Main Agreement and in accordance with Controller Instructions and this DPA (the \"Processing Period\"), unless a longer period is required by Applicable Law.",
        "2.2 Nature of Processing. Processing activities include: account creation and management, scheduling, audio/video recording, storage, scoring, feedback generation, reporting, hosting, backups, support, payment processing (where instructed), anonymised analytics, transcription (where instructed), and related processing necessary to provide Services as described in Schedule 1.",
        "2.3 Purpose. Processor shall process Personal Data solely for the specific, documented purposes instructed in writing by Controller and as set out in Schedule 1. Processor shall not process Personal Data for any other purpose (including profiling, marketing, training AI models or other secondary uses) unless Controller provides prior written consent.",
        "2.4 Scope. Categories of Data Subjects, categories of Personal Data, processing operations, and technical environment are set out in Schedule 1.",
        "2.5 Lawful Basis. Controller warrants it has and will maintain a lawful basis for Processing and will provide evidence on request.",
        "2.6 Children's Processing Specifics. Where Processing concerns Children, Controller shall determine whether Parental Consent or other lawful basis is required and will provide Processor with written Instructions and any templates required for consent capture, as further specified in Clause 5 (Controller Obligations) and Clause M (Children-specific requirements integrated throughout this DPA)."
      ]
    },
    {
      id: "role-parties-instructions",
      title: "3. ROLE OF THE PARTIES AND INSTRUCTIONS",
      content: [
        "3.1 Controller Responsibilities. Controller shall: (a) determine purposes and means of Processing; (b) provide documented Instructions; (c) ensure Personal Data supplied is accurate and that Instructions comply with Data Protection Legislation; (d) for Children, determine and document whether Parental Consent or other lawful basis is required and provide related templates and verification standards.",
        "3.2 Processor Responsibilities. Processor shall process Personal Data only on documented Instructions of Controller, unless required otherwise by law (in which case Processor shall promptly notify Controller unless forbidden by law). Processor shall implement the technical and organisational measures set out in Schedule 2.",
        "3.3 Instruction Changes & Non-Compliance. Controller may amend Instructions in writing. If Processor believes an Instruction infringes Data Protection Legislation, Processor shall immediately inform Controller and may suspend processing of the relevant Personal Data until the parties agree amended Instructions or Controller confirms the Instruction with written legal justification."
      ]
    },
    {
      id: "processor-obligations",
      title: "4. PROCESSOR OBLIGATIONS — REQUIRED TERMS",
      content: [
        "4.1 Article 28 Requirements. Processor acknowledges obligations required under Article 28 GDPR and equivalent UK laws: process only on documented Instructions; ensure confidentiality; implement security measures; assist Controller with data subject rights and breach notifications; and maintain records.",
        "4.2 Processing Only on Instructions. Processor shall not process Personal Data for any purpose other than to perform the Services and as instructed by Controller. Any additional processing requires Controller's documented, prior written consent.",
        "4.3 Confidentiality. Processor shall ensure all persons authorised to process Personal Data are bound by written duty of confidentiality and have received appropriate data protection training and background checks proportionate to their role.",
        "4.4 Records & RoPA. Processor shall maintain written records of processing activities and make them available to Controller on request.",
        "4.5 Data Minimisation & Accuracy. Processor shall assist Controller to ensure Personal Data is adequate, relevant and limited, and take reasonable steps to ensure accuracy.",
        "4.6 Prohibition on Secondary Uses. Processor expressly covenants: (a) not to use, sell, license, share, disclose, trade, or otherwise make available Controller Personal Data for marketing, profiling, behavioural marketing, advertising or commercial purposes not instructed by Controller; (b) not to use Controller Personal Data to train, refine, validate or otherwise improve machine learning models, AI models, analytics models, or other algorithms, except where Controller has provided prior written consent for a narrowly defined purpose; and (c) not to aggregate or anonymise Controller Personal Data and use such aggregated data for Processor's commercial purposes without Controller's prior written permission. Any violation of this Clause shall be deemed a material breach.",
        "4.7 No Automated Decision-Making Without Instruction. Processor shall not carry out any automated decision-making or profiling with respect to Controller's Personal Data without Controller's prior written Instruction and appropriate compliance with Data Protection Legislation.",
        "4.8 Personnel & Vetting. Processor shall limit access to Personal Data to authorised personnel who need access to perform duties, who are subject to confidentiality obligations, have undergone appropriate background checks and have received relevant training. For personnel with access to Children's Personal Data or Special Category data, Processor shall ensure enhanced vetting (including DBS or equivalent where required by Controller or applicable law) and training.",
        "4.9 Encryption & Pseudonymisation. Processor shall implement encryption for Personal Data in transit and at rest and employ pseudonymisation where appropriate and feasible, as described in Schedule 2.",
        "4.10 Audit Co-operation. Processor shall cooperate with audits and inspections arranged by Controller per Clause 11.",
        "4.11 Children-Specific Processor Obligations. Processor shall: (a) implement age verification and consent capture mechanisms as instructed; (b) maintain auditable logs of Parental Consent and competence determinations (timestamp, identity, verification method, IP/device metadata, proof if required); (c) treat breaches affecting Children as high severity and follow enhanced notification timelines (see Clause 9.2 and Schedule 5); (d) prevent any marketing, profiling or targeting of Children or parents without Controller's explicit prior written consent; and (e) ensure any Sub-processor handling Children's data meets heightened vetting and contractual standards (see Clause 7)."
      ]
    },
    {
      id: "controller-obligations",
      title: "5. CONTROLLER OBLIGATIONS",
      content: [
        "5.1 Instructions & Lawful Basis. Controller shall provide documented Instructions and maintain the lawful basis for Processing, including for Special Categories and Children where applicable.",
        "5.2 Children — Consent & Competence. For Children, Controller shall: (a) determine whether Parental Consent or another lawful basis is required and document that determination in writing; (b) provide Processor with consent templates, verification standards and any Parental Authority Documentation requirements; (c) notify Processor where Gillick competence or other competence assessment is relied upon and provide Instructions on recording and handling such determinations; and (d) provide contact details for an institutional safeguarding lead and data protection contact.",
        "5.3 Data Subjects' Rights. Controller shall be responsible for responding to Data Subject requests unless otherwise agreed. Controller shall provide Processor with information and Instructions required for Processor to assist.",
        "5.4 DPIAs, Consultations & Notices. Where a DPIA is required, Controller shall lead prior consultations with supervisory authorities and shall provide Processor with reasonable assistance. Controller shall instruct Processor concerning any additional safeguards required by DPIA outcomes.",
        "5.5 NHS-specific obligations. Where Controller is an NHS organisation: (a) ensure appropriate NHS lawful bases have been established; (b) obtain any internal approvals; (c) instruct Processor on DSPT evidence required; and (d) provide any NHS information governance guidance applicable to the processing."
      ]
    },
    {
      id: "security-measures",
      title: "6. SECURITY MEASURES",
      content: [
        "6.1 General. Processor shall implement and maintain appropriate technical and organisational measures to ensure security appropriate to the risks, as set out in Schedule 2.",
        "6.2 Examples of Measures. Without limitation: encryption in transit (TLS 1.2+), encryption at rest (AES-256 or equivalent), role-based access controls, MFA for administrative access, logical tenant separation, key management, logging and SIEM, vulnerability scanning, patching, regular pen-testing, secure backups with tested restore, BCP/DR plans, endpoint protection, secure development lifecycle, and staff security training.",
        "6.3 NHS Controls. For NHS Controllers or where health data is processed, Processor shall comply with DSPT requirements and provide evidence on request.",
        "6.4 Change Management & Notification. Processor shall maintain change control and notify Controller of material security changes that may impact Personal Data, subject to limited redaction for security reasons.",
        "6.5 Children-Specific Security. For Children's Personal Data Processor shall apply heightened controls, including stricter access restrictions, additional encryption, and segregation of parental documentation where applicable."
      ]
    },
    {
      id: "sub-processors",
      title: "7. SUB-PROCESSORS",
      content: [
        "7.1 Appointment. Controller authorises Processor to engage Sub-processors provided Processor enters contracts with the Sub-processors imposing obligations equivalent to those in this DPA and remains fully liable for Sub-processor performance.",
        "7.2 Initial List. Processor's initial Sub-processors are listed in Schedule 3 (Approved Sub-processors). Controller acknowledges the initial list.",
        "7.3 Notification & Objection. Processor shall provide written notice at least 30 calendar days prior to adding/replacing Sub-processors, including identity, location and activities. Controller has 10 business days to object on reasonable data protection grounds. Absent agreement, the proposed Sub-processor shall not be engaged. Where the Sub-processor is critical for service delivery and Controller unreasonably withholds consent, parties will engage in good-faith discussions; Processor will propose alternative technical measures.",
        "7.4 Enhanced Controls for Children. Any Sub-processor that will process Children's Personal Data shall: (a) be subject to enhanced contractual obligations equivalent to the DPA's Children-specific clauses; (b) ensure relevant personnel have completed DBS or equivalent checks and safeguarding training where required by Controller; and (c) only be engaged after Controller's explicit written approval, except where Controller has granted prior express authorisation for specified providers in Schedule 3.",
        "7.5 Liability for Sub-processors. Processor remains fully liable to Controller for Sub-processor acts/omissions to the same extent Processor would be liable if performing the services itself.",
        "7.6 Sub-processor Contracts & Evidence. Processor shall, on request, provide a summary of key contractual clauses with Sub-processors or redacted copies sufficient to demonstrate compliance."
      ]
    },
    {
      id: "international-transfers",
      title: "8. INTERNATIONAL (CROSS-BORDER) TRANSFERS",
      content: [
        "8.1 General. Any transfers of Personal Data outside the UK/EU/EEA shall comply with Chapter V of the UK GDPR/EU GDPR. Transfers shall be effected only via an approved transfer mechanism such as SCCs, ICO IDTA, adequacy decision, or other lawful mechanism.",
        "8.2 Controller Authorisation. Processor will not transfer Personal Data outside the UK/EEA/EU unless necessary for performance and Controller has given prior written authorisation.",
        "8.3 Implementation of Safeguards. Parties shall execute SCCs / IDTA or other transfer instruments as required; Processor will sign where appropriate in the Processor role and shall assist Controller with transfer impact assessments.",
        "8.4 Supplementary Measures. Processor shall provide reasonable assistance to Controller's transfer impact assessment and implement additional technical/organizational measures where Controller reasonably requires."
      ]
    },
    {
      id: "breach-notification",
      title: "9. PERSONAL DATA BREACH, INCIDENT RESPONSE & NOTIFICATION",
      content: [
        "9.1 Definition. \"Personal Data Breach\" means accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Personal Data.",
        "9.2 Processor Notification to Controller (General). Processor shall notify Controller without undue delay and in any event no later than seventy-two (72) hours from becoming aware of a Personal Data Breach affecting Controller Personal Data. Where feasible, Processor shall provide an initial notification within 24 hours with available information and provide updates as more information becomes available.",
        "9.3 Enhanced Notification for Children. For Breaches affecting Children's Personal Data, Processor shall escalate and provide an initial notification to Controller within 12 hours of becoming aware (or, if not feasible, within 24 hours) and then a complete report within 72 hours with a full remediation plan. Processor shall include recommended plain-language templates for parental/guardian communications and additional forensic detail as requested.",
        "9.4 Content of Notification. Processor's notification shall include, where available: nature and scope of the breach; categories and approximate number of Data Subjects and records affected; likely consequences; measures taken and proposed; contact details for Processor's data protection/security lead; suggested remedial steps and recommended communications to Data Subjects (including parents/guardians where applicable).",
        "9.5 Controller Regulatory Notifications. Controller is responsible for determining whether notification to supervisory authorities or Data Subjects is required. Processor shall assist Controller to fulfil its obligations and provide evidence and technical details to support regulatory filings.",
        "9.6 Cooperation & Remediation Costs. Processor shall cooperate in investigations, provide personnel and technical assistance, and bear remediation costs attributable to Processor's breach, including reasonable notification costs and fines attributable to Processor's acts or omissions, subject to Clause 13.",
        "9.7 Incident Response Plan. Processor shall maintain an incident response plan (see Schedule 5) and regularly test it. Processor shall provide Controller with a summary of incident response procedures on request."
      ]
    },
    {
      id: "data-subject-rights",
      title: "10. DATA SUBJECT RIGHTS",
      content: [
        "10.1 Assistance. Processor shall promptly assist Controller (to the extent reasonably practicable) to enable Controller to respond to Data Subject rights requests (access, rectification, erasure, restriction, portability, objection) within statutory timelines.",
        "10.2 Forwarding Requests. Processor shall forward any direct Data Subject requests to Controller promptly and, in any event, within three (3) business days.",
        "10.3 No Direct Responses Without Instruction. Processor shall not respond to a Data Subject request without Controller's prior written Instruction unless legally required to do so; in that case Processor shall (to the extent permitted) inform Controller in advance.",
        "10.4 Parental / Guardian Requests. Where a person purports to be a parent/guardian making a request regarding a Child's Personal Data, Processor shall: (a) promptly forward the request to Controller; (b) follow Controller's verification Instructions; and (c) not respond directly to the purported parent without Controller's instruction, except where required by law.",
        "10.5 Erasure for Children. Processor shall prioritise requests to erase Children's Personal Data and shall ensure erasure from active systems and removal from future processing; archival/backups shall be expunged at the earliest backup cycle and Processor will confirm deletion in writing."
      ]
    },
    {
      id: "audit-monitoring",
      title: "11. AUDIT, MONITORING & INSPECTION",
      content: [
        "11.1 Audit Rights. Controller (or an agreed independent auditor) may audit Processor's compliance with this DPA on reasonable notice, subject to confidentiality and during normal business hours. Audits are ordinarily limited to once per calendar year unless material breach or regulatory requirement exists.",
        "11.2 Audit Scope. Audits may include inspection of security policies, system and application architecture, ROPA entries relevant to Controller, security testing summaries, penetration test reports, vulnerability management records, personnel access controls, and Sub-processor contracts. Controller shall not access other customers' Personal Data.",
        "11.3 Cost Allocation. Controller shall bear reasonable audit costs unless audit reveals material non-compliance by Processor, in which case Processor shall reimburse reasonable audit costs.",
        "11.4 Alternative Evidence. Processor may provide third-party audit reports (e.g., ISO 27001 certificate, SOC2 Type II, DSPT evidence) in lieu of on-site audits, provided they cover the relevant processing and Sub-processors. For Children's data, Processor shall provide evidence of enhanced vetting and safeguarding measures on request.",
        "11.5 Training & Evidence. Processor shall provide proof of staff training, background checks, and Sub-processor vetting for personnel accessing Children's Personal Data upon reasonable request."
      ]
    },
    {
      id: "retention-deletion",
      title: "12. RETENTION, RETURN, AND DELETION OF PERSONAL DATA",
      content: [
        "12.1 Retention Policy. Processor shall retain Personal Data only for the duration instructed by Controller (Schedule 4) or as necessary to perform Services. If no instruction is provided, default retention is as set in Schedule 4 (not exceeding twelve (12) months from service end unless Controller instructs otherwise).",
        "12.2 Children - Default Conservative Retention. Where Controller has not specified retention for Children's Personal Data, default retention shall be conservative: Interview recordings: maximum 6 months; Scores and feedback: 12 months; Account data: activity period + 12 months. Any retention beyond these defaults requires Controller's written instruction.",
        "12.3 Return or Deletion on Termination. On termination or expiry, at Controller's option Processor shall either (a) return all Personal Data and copies in a secure machine-readable format within thirty (30) days, or (b) securely delete or destroy all Personal Data within thirty (30) days except where law requires retention. Processor shall certify compliance within a further thirty (30) days.",
        "12.4 Secure Deletion Standards. Secure Deletion shall follow industry-standard sanitisation methods appropriate to media and as described in Schedule 2. Backups containing Personal Data shall be deleted at the next backup cycle unless Controller requires earlier action; Processor shall document the schedule and confirm deletion.",
        "12.5 Residual Copies. Processor may retain residual copies solely to comply with legal or regulatory obligations or for disaster recovery under strict controls and limited access; such retention shall be notified to Controller."
      ]
    }
  ] as DPASection[],
  schedules: [
    {
      id: "schedule-1",
      title: "SCHEDULE 1 DETAILS OF PROCESSING",
      content: [
        "1.1 Controller: [Insert Controller legal name and contact]",
        "1.2 Processor: PrepViva Limited, [registered number], address [insert]",
        "1.3 Purposes: To deliver Al-assisted mock interview services, scheduling, audio/video recording, scoring, feedback reports, hosting/support, payment facilitation (if instructed), analytics (limited/anonymised), transcription and related services as instructed.",
        "1.4 Categories of Data Subjects: Applicants/candidates (including minors where applicable), referees if provided, institutional administrators, clinical supervisors, and other individuals whose Personal Data is supplied by Controller.",
        "1.5 Categories of Personal Data: Names, contact details, applicant IDs, demographic data, interview recordings (audio/video), assessment scores, feedback, health/disability data if provided (Special Categories), device/IP metadata, payment tokenised data (card data processed by PCI-compliant providers only).",
        "1.6 Processing Activities: Collection, recording, storage, retrieval, use, transfer to authorised personnel, correction, erasure, export to Controller, and other activities necessary to provide the Services.",
        "1.7 Duration: As set by Controller in Schedule 4; default retention rules in Schedule 4 apply absent specific Controller instruction.",
        "1.8 Location: Processing within Processor infrastructure and Sub-processors as in Schedule 3. Cross-border transfers require Controller authorisation and appropriate safeguards."
      ]
    },
    {
      id: "schedule-2",
      title: "SCHEDULE 2 - TECHNICAL & ORGANISATIONAL SECURITY MEASURES",
      content: [
        "Organisational: ISMS-aligned policies, staff training, background checks, confidentiality agreements, secure SDLC, DPIA support.",
        "Technical: Encryption in transit (TLS 1.2+), encryption at rest (AES-256 or equivalent), RBAC, MFA, tenant isolation, key management, logging and SIEM, vulnerability scanning, regular penetration testing, secure backups, tested restore procedures (RTO/RPO), endpoint protection, change control, network segmentation, data pseudonymisation and anonymisation as appropriate.",
        "Operational: Secure deletion procedures, Sub-processor contractual controls, regular audits, BCP/DR planning.",
        "Children-Specific: Stricter access controls, additional encryption for parental documents, segregated storage for consent evidence, hardened logging of consent events, and enhanced vetting for personnel with access.",
        "Processor shall provide a reasonably detailed description of implemented measures on request, subject to confidentiality."
      ]
    },
    {
      id: "schedule-3",
      title: "SCHEDULE 3 - APPROVED SUB-PROCESSORS (INITIAL LIST)",
      content: [
        "Hosting & Infrastructure: Amazon Web Services (AWS); Google Cloud Platform (GCP); Microsoft Azure.",
        "CDN/DNS/Edge: Cloudflare.",
        "Payments: Stripe (PCI-compliant) or other authorised PCI providers.",
        "Monitoring & Error Reporting: Sentry (or equivalent).",
        "Analytics: Mixpanel / Google Analytics (only when expressly authorised and with controls).",
        "Transcription / ASR: [provider name] (only if Controller authorises and with appropriate safeguards).",
        "Backups / Storage: Third-party storage providers contracted and controlled by Processor.",
        "Customer Support / Communications: [provider names].",
        "Children-Specific Note: Any Sub-processor processing Children's Personal Data requires Controller's explicit written approval unless Controller has provided prior blanket authorisation for specific named providers."
      ]
    },
    {
      id: "schedule-4",
      title: "SCHEDULE 4 DATA RETENTION AND DELETION",
      content: [
        "Default Retention (unless Controller specifies otherwise):",
        "Interview recordings (audio/video): Controller-specified. If Controller does not specify, 6 months for Children, 12 months standard non-Children default.",
        "Interview scores & feedback: 12 months default; Controller may require shorter or longer for audit purposes.",
        "Account information: Active + 12 months inactive default.",
        "Payment transactional ledger: Retained per legal/accounting obligations and Controller Instructions; card data not stored by Processor (tokenised via PCI provider).",
        "Deletion: On Controller instruction or end of retention period, Processor will securely delete data per Schedule 2 and confirm deletion in writing. Backups containing Personal Data will be purged at next backup cycle or earlier if Controller requires and Processor can reasonably implement."
      ]
    },
    {
      id: "schedule-5",
      title: "SCHEDULE 5 - PERSONAL DATA BREACH NOTIFICATION PROCEDURE & INCIDENT RESPONSE",
      content: [
        "Detection & Triage: Processor shall maintain monitoring and detection tools and a security incident response team that triages incidents immediately.",
        "Notification Timelines: General Breach: initial notification within 24 hours where feasible and no later than 72 hours after awareness. Children's Data Breach: initial notification within 12 hours (or 24 hours if 12 not feasible) plus prioritized follow-up.",
        "Information to Provide: Nature and scope, categories and counts of Data Subjects and records, likely consequences, mitigation actions taken and planned, contact details of Processor's security lead, remediation timeline, and suggested communications to Data Subjects/parents.",
        "Remediation & Forensics: Processor shall provide forensic support, remedial actions, and cooperate with Controller's communications to supervisory authorities and Data Subjects. Processor shall bear remediation costs attributable to its acts or omissions.",
        "Testing: Processor shall test incident response annually (or more frequently) and provide test summaries on request."
      ]
    },
    {
      id: "schedule-6",
      title: "SCHEDULE 6 INTERNATIONAL TRANSFER MECHANICS",
      content: [
        "For transfers from EEA, parties shall adopt EU SCCS (2021) or other lawful mechanism.",
        "For transfers from UK, parties shall adopt ICO IDTA or UK-adopted SCCs as applicable.",
        "Processor shall sign necessary instruments in Processor role or otherwise cooperate to enable Controller compliance with Article 46 obligations.",
        "Processor shall assist with transfer impact assessments and implement supplementary measures where reasonably required."
      ]
    }
  ] as DPASchedule[],
  additionalSections: {
    liability: {
      title: "13. LIABILITY, INDEMNITIES AND INSURANCE",
      content: [
        "13.1 General Liability. Subject to any limitations in the Main Agreement, the liability provisions of this Clause apply.",
        "13.2 Processor Indemnity. Processor shall indemnify and hold harmless Controller against losses, liabilities, costs, damages and expenses (including reasonable legal fees) arising from Processor's: (a) breach of DPA; (b) unlawful processing; (c) negligence or wilful misconduct; or (d) acts/omissions of Sub-processors for which Processor is liable.",
        "13.3 Controller Indemnity. Controller shall indemnify Processor against losses resulting from Controller's breach of this DPA, Controller's Instructions contrary to law, or claims arising from accuracy/content of data supplied by Controller.",
        "13.4 Unlimited Liability (Non-excludable). Neither party excludes liability for death/personal injury from negligence, fraud, fraudulent misrepresentation, wilful misconduct, or liability that cannot be limited by applicable law, and liability arising from deliberate unauthorised use, sale or disclosure of Controller Personal Data by Processor (including secondary use for marketing or profiling).",
        "13.5 Enhanced Liability for Children's Data. Breach of the Children-specific clauses (Parental Consent obligations, prohibition on profiling/marketing of Children, vetting obligations) constitutes a material breach and may attract enhanced remedies, injunctive relief and indemnity obligations as set out herein.",
        "13.6 Cap on Liability. Except for Clauses 13.4 and 13.5, Processor's aggregate liability for other losses is limited to the greater of (a) £5,000,000 and (b) two times the fees paid by Controller under the Main Agreement in the prior 12 months, unless otherwise agreed in the Main Agreement.",
        "13.7 Insurance. Processor shall maintain adequate cyber and data protection insurance (including breach response) with limits of at least £5,000,000 and provide certificate of insurance on request."
      ]
    },
    contacts: {
      title: "14. DATA PROTECTION OFFICER AND CONTACTS",
      content: [
        "14.1 Processor Data Protection Contact: Name: Email: Phone:",
        "14.2 Controller Contact. As set out in the Main Agreement.",
        "14.3 DPO. If applicable, parties shall provide DPO contact details."
      ]
    },
    cooperation: {
      title: "15. COOPERATION WITH SUPERVISORY AUTHORITIES & JUDICIAL REQUESTS",
      content: [
        "15.1 Regulatory Requests. Parties shall cooperate in responding to supervisory authority enquiries or investigations.",
        "15.2 Lawful Compulsion. If Processor receives a legally binding request to disclose Controller Personal Data, Processor shall, to the extent permitted, promptly notify Controller, provide reasonable cooperation to allow Controller to contest the request, and disclose only the minimum required."
      ]
    },
    termination: {
      title: "16. TERM, TERMINATION & SURVIVAL",
      content: [
        "16.1 Term. This DPA commences on the Effective Date and continues until termination of the Main Agreement and completion of all Processing of Controller Personal Data.",
        "16.2 Termination for Breach. Either party may terminate if the other materially breaches this DPA and fails to remedy such breach within thirty (30) days after written notice.",
        "16.3 Survival. Clauses intended to survive termination include: 1 (Definitions), 4.6 (Prohibition on Secondary Use), 6 (Security), 9 (Breach), 11 (Audit), 12 (Retention/Deletion), 13 (Liability), 16 and 18 (Governing Law), and any other clause which by nature is intended to survive."
      ]
    },
    miscellaneous: {
      title: "17. MISCELLANEOUS",
      content: [
        "17.1 Amendments. Any amendment must be in writing and signed by authorised representatives.",
        "17.2 Severability. If any provision is invalid, it shall be severed and remaining provisions remain in force.",
        "17.3 Assignment. Neither party may assign without consent except to Affiliate or in bona fide sale where assignee assumes obligations.",
        "17.4 Entire Agreement. This DPA, together with the Main Agreement, constitutes entire agreement relating to Processing.",
        "17.5 Notices. Notices shall be provided in writing to the contacts in Clause 14."
      ]
    },
    governingLaw: {
      title: "18. GOVERNING LAW & JURISDICTION",
      content: [
        "18.1 Governing Law. This DPA is governed by the laws of England and Wales.",
        "18.2 Jurisdiction. Parties submit to the exclusive jurisdiction of the courts of England and Wales."
      ]
    },
    signatures: {
      title: "SIGNATURES",
      content: [
        "Executed as a deed (or signed contract) on the Effective Date.",
        "For and on behalf of the Controller",
        "Signature:________________",
        "Name:_______________",
        "Title:______________",
        "Date:______________"
      ]
    },
    checklist: {
      title: "APPENDIX CONTROLLER CHECKLIST (LEGAL TEAMS)",
      content: [
        "Confirm Controller name & contacts in Schedule 1.",
        "Confirm Processor company number & contacts.",
        "Confirm Sub-processor approvals in Schedule 3 and any specific prohibitions (countries, providers).",
        "Specify retention periods for each data category in Schedule 4 (especially Children's data).",
        "Confirm age threshold(s) and whether Controller will rely on Gillick competence; provide consent templates.",
        "Confirm enhanced DSPT / NHS evidence requirements and frequency of reporting/audits.",
        "Decide on liability caps and insurance levels in Clause 13 if negotiation needed.",
        "Instruct whether Controller requires on-site audits or will accept third-party reports (ISO, SOC2, DSPT).",
        "Prepare any institutional safeguarding policies to be referenced in Controller Instructions."
      ]
    }
  }
};
