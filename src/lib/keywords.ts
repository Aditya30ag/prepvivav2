export const SEO_KEYWORDS = {
    primary: [
      'UK interview preparation',
      'NHS interview questions',
      'Medical school interview prep UK',
      'Oxbridge interview coaching',
      'University interview practice online',
      'AI interview coaching UK',
    ],
    secondary: [
      'NHS values-based interview practice',
      'NHS competency-based interview prep',
      'Band 5 NHS interview questions',
      'Band 6 NHS interview preparation',
      'Cambridge interview preparation',
      'Oxford interview coaching',
      'Russell Group university interview prep',
      'AI mock interview tool',
      'University admissions interview practice',
      'GMC standards interview preparation',
    ],
    longTail: [
      'Clinical reasoning interview practice',
      'AI medical interview preparation',
      'University placement interview prep UK',
      'UK graduate job interview training',
      'Mock interview feedback report',
      'Practice structured NHS interviews',
      'Communication skills interview training UK',
      'UK healthcare interview practice tool',
      'Empathy and ethics interview scenarios',
      'University application interview prep',
    ],
    lsi: [
      'Confidence boost for university interviews',
      'Clinical scenarios for medical school interviews',
      'UK AI interview prep platform for students',
      'Step-by-step NHS interview practice online',
      'NHS consultant interview preparation UK',
      'Role-play interview practice for NHS',
      'AI-driven Oxbridge admissions coaching',
      'UK interview simulator with real scenarios',
    ],
  }
  
  export function getKeywordsForPage(page: string): string[] {
    const pageKeywords: Record<string, string[]> = {
      home: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary.slice(0, 3)],
      medical: [
        'Medical school interview prep UK',
        'Clinical reasoning interview practice',
        'AI medical interview preparation',
        'Clinical scenarios for medical school interviews',
      ],
      nhs: [
        'NHS interview questions',
        'NHS values-based interview practice',
        'Band 5 NHS interview questions',
        'NHS consultant interview preparation UK',
      ],
      university: [
        'Oxbridge interview coaching',
        'Russell Group university interview prep',
        'University admissions interview practice',
        'AI-driven Oxbridge admissions coaching',
      ],
      pricing: [
        'Affordable interview prep UK',
        'Mock interview feedback report',
        'UK interview preparation',
      ],
    }
    return pageKeywords[page] || SEO_KEYWORDS.primary
  }
  
  