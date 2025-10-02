'use client'

import { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      category: 'General',
      question: "How does PrepViva compare to human interview coaching?",
      answer: "PrepViva delivers structured practice and detailed feedback at a fraction of the cost of traditional coaching. Our AI is trained on 50,000+ real UK interviews, providing instant comprehensive reports. While human coaches cost £150+/hour with limited availability, PrepViva offers unlimited practice at £22-29 per session, available 24/7."
    },
    {
      category: 'Coverage',
      question: "Which UK universities and NHS bands does PrepViva cover?",
      answer: "We cover all Russell Group universities including Oxford and Cambridge, all UK medical schools, and NHS positions from Band 5 to Consultant level. Each mock interview is precisely tailored to your target institution or NHS band with role-specific scenarios."
    },
    {
      category: 'Process',
      question: "What happens in a 45-minute mock interview?",
      answer: "You'll experience a realistic interview with 6-8 structured questions. The AI adapts to your responses, asks follow-ups, and evaluates you on clarity, empathy, reasoning, and professionalism. A detailed 15-page feedback report is generated instantly after completion."
    },
    {
      category: 'International',
      question: "Is PrepViva suitable for international students?",
      answer: "Yes. PrepViva helps international candidates understand UK-specific expectations, including NHS values, MMI structure, and Oxbridge academic culture. Our scenarios explain UK interview norms and assessment criteria clearly."
    },
    {
      category: 'Feedback',
      question: "How quickly can I access my feedback report?",
      answer: "Your feedback report is available immediately after your session completes. It includes scoring across key competencies, detailed improvement notes, model responses, and an actionable development plan."
    },
    {
      category: 'Institutional',
      question: "Can universities or NHS trusts use PrepViva for groups?",
      answer: "Yes. PrepViva offers institutional packages with cohort dashboards, analytics, and UK data residency. We support universities, NHS trusts, and training organizations with volume licensing and LMS integration."
    },
    {
      category: 'Recognition',
      question: "Is PrepViva recognized by UK institutions?",
      answer: "PrepViva is designed in alignment with NHS values and UK university admissions frameworks. While not officially accredited by institutions, our structure mirrors real interviews, making preparation highly relevant and effective."
    },
    {
      category: 'NHS',
      question: "What are NHS Band 5 interview questions like?",
      answer: "Band 5 interviews focus on clinical scenarios, teamwork, and NHS values demonstration. PrepViva includes 400+ real-world Band 5 style questions covering compassion, clinical competence, communication, and commitment to quality."
    },
    {
      category: 'Oxbridge',
      question: "How does PrepViva prepare me for Oxbridge interviews?",
      answer: "Oxbridge interviews test critical thinking rather than memorized knowledge. PrepViva simulates tutorial-style questioning where you must think aloud and justify reasoning, exactly as in real Oxbridge interviews."
    },
    {
      category: 'Ethics',
      question: "Does PrepViva support ethical scenario practice?",
      answer: "Yes. Ethical dilemmas are central to medical and NHS interviews. Our question bank includes structured ethical cases with model reasoning aligned to GMC/NMC guidelines and the four principles of medical ethics."
    },
    {
      category: 'Technical',
      question: "Do I need a webcam and microphone?",
      answer: "We recommend using both for the best experience, but audio-only and text-only modes are available for accessibility and low-bandwidth situations. Video analysis provides additional feedback on body language and engagement."
    },
    {
      category: 'Security',
      question: "How secure is my data?",
      answer: "All sessions comply with GDPR and UK data protection standards. Data is stored on UK servers with ISO 27001 certified infrastructure. Reports are stored securely and can be deleted by users at any time."
    },
    {
      category: 'Methods',
      question: "What is the STAR method and does PrepViva support it?",
      answer: "The STAR method (Situation, Task, Action, Result) is widely used in NHS interviews. PrepViva prompts and evaluates answers according to STAR structure for clarity and completeness."
    },
    {
      category: 'Retakes',
      question: "Can I retake interviews?",
      answer: "Yes. You can retake as many times as you like. Each attempt generates a fresh report with progress tracking showing improvement over time."
    },
    {
      category: 'Communication',
      question: "How does PrepViva assess communication skills?",
      answer: "We evaluate tone, pace, vocabulary, structure, and empathy. Reports include specific notes on how you come across to interviewers, with actionable suggestions for improvement."
    },
    {
      category: 'Subjects',
      question: "What subjects are supported for university interviews?",
      answer: "PrepViva supports Medicine, STEM subjects, Humanities, Business, Law, Social Sciences and more. You can select your subject or enter it manually for custom practice scenarios."
    },
    {
      category: 'MMI',
      question: "What is an MMI and how does PrepViva simulate it?",
      answer: "Multiple Mini Interviews (MMIs) use stations with different scenarios. PrepViva replicates this by presenting diverse question types in sequence with adaptive follow-ups, mirroring the MMI circuit structure."
    },
    {
      category: 'NHS Values',
      question: "Does PrepViva include NHS values-based interviews?",
      answer: "Yes. All NHS-focused sessions align with the six NHS values: Care, Compassion, Competence, Communication, Courage, and Commitment, which are core to NHS recruitment frameworks."
    },
    {
      category: 'Documents',
      question: "Can I upload my personal statement or CV?",
      answer: "Yes. Uploading documents allows PrepViva to tailor follow-up questions to your background, creating a more realistic interview simulation based on your actual experiences."
    },
    {
      category: 'Timeline',
      question: "How long should I prepare before an interview?",
      answer: "We recommend 2-4 weeks of practice with PrepViva, completing 3-5 mock interviews. However, even a single session provides valuable insights and confidence boost for upcoming interviews."
    },
    {
      category: 'Feedback Detail',
      question: "What kinds of feedback will I receive?",
      answer: "Feedback covers academic/technical knowledge, ethical reasoning, communication clarity, body language (if video enabled), and overall impression, with constructive advice for each competency area."
    },
    {
      category: 'Limits',
      question: "Is there a limit to how many interviews I can practice?",
      answer: "No. PrepViva is designed for unlimited practice. You can retake until confident. We recommend at least 3 sessions to see meaningful improvement in scores and confidence."
    },
    {
      category: 'Stress',
      question: "Does PrepViva simulate stress conditions?",
      answer: "Yes. Some scenarios deliberately apply time pressure or probing follow-ups to prepare you for real interview intensity. This builds resilience and composure under pressure."
    },
    {
      category: 'STEM',
      question: "Can I practice Oxbridge science and math questions?",
      answer: "Yes. PrepViva includes subject-specific critical thinking problems designed to simulate Oxbridge interview challenges in Mathematics, Physics, Chemistry, Biology, and Engineering."
    },
    {
      category: 'Weak Answers',
      question: "How does PrepViva handle vague or weak answers?",
      answer: "The system automatically rephrases or probes deeper, just like a real interviewer, to test whether you can clarify and expand under pressure. This helps develop resilience."
    },
    {
      category: 'Mobile',
      question: "Can I access PrepViva on mobile?",
      answer: "Yes. The platform is fully mobile-optimized and works on smartphones, tablets, and laptops. However, we recommend desktop for the best video interview experience."
    },
    {
      category: 'Common Mistakes',
      question: "What are the most common mistakes in NHS interviews?",
      answer: "Typical mistakes include not linking answers to NHS values, lack of STAR structure, failure to reflect on learning, and not providing specific examples. PrepViva highlights these issues in reports."
    },
    {
      category: 'Non-Verbal',
      question: "Does PrepViva include non-verbal communication feedback?",
      answer: "Yes. If video is enabled, feedback includes posture, eye contact, facial expressions, and engagement alongside spoken content analysis."
    },
    {
      category: 'SJT',
      question: "What are situational judgement questions?",
      answer: "These are scenarios testing decision-making under pressure. PrepViva includes realistic NHS-style situational questions with scoring criteria based on professional standards and values frameworks."
    },
    {
      category: 'Duration',
      question: "Can I choose interview length?",
      answer: "Sessions are fixed at 45 minutes to replicate real NHS and university interview durations. This ensures authentic practice and proper pacing for comprehensive assessment."
    },
    {
      category: 'Cost',
      question: "Is PrepViva cheaper than private coaching?",
      answer: "Yes. Human coaching costs £100-£200/hour with limited availability. PrepViva delivers unlimited sessions at £22-29 per mock, saving candidates £500+ on average while providing more detailed written feedback."
    },
    {
      category: 'International NHS',
      question: "Does PrepViva support overseas NHS applicants?",
      answer: "Yes. Many overseas nurses, doctors, and AHPs preparing for NHS roles use PrepViva to adapt to UK values-based frameworks and understand NHS-specific interview expectations."
    },
    {
      category: 'Report Contents',
      question: "What is included in the feedback report?",
      answer: "A 15-page PDF with competency scores, behavioural analysis, sample model answers, specific improvement suggestions, and a personalized development roadmap for your next session."
    },
    {
      category: 'NHS Values Alignment',
      question: "How do I know if my answers align with NHS values?",
      answer: "PrepViva highlights where answers demonstrate Compassion, Respect, Integrity, and Teamwork. Reports show specific examples of where values were demonstrated or missed, with guidance for improvement."
    },
    {
      category: 'Experience Level',
      question: "Do I need prior interview experience?",
      answer: "No. PrepViva supports complete beginners with guided practice and structured frameworks, as well as experienced candidates looking for fine-tuning and confidence building."
    },
    {
      category: 'Curveball Questions',
      question: "What are curveball questions in interviews?",
      answer: "These are unexpected, open-ended questions designed to test adaptability and thinking under pressure. PrepViva includes these to build resilience and quick thinking skills."
    },
    {
      category: 'Sharing',
      question: "Can I share my report with mentors?",
      answer: "Yes. Reports can be downloaded as PDFs and shared with teachers, mentors, or peers. This facilitates discussion and additional support from your existing network."
    },
    {
      category: 'Business Law',
      question: "Does PrepViva support law or business school interviews?",
      answer: "Yes. In addition to medicine and NHS, we support Business, Law, and other competitive UK university programmes with subject-specific scenarios and assessment criteria."
    },
    {
      category: 'Realism',
      question: "How realistic are the mock interviews?",
      answer: "The experience mirrors real interview conditions with adaptive follow-ups, timed responses, and authentic scoring rubrics. Students consistently report high similarity to actual interviews."
    },
    {
      category: 'Group Practice',
      question: "Does PrepViva offer group practice?",
      answer: "Currently, PrepViva focuses on one-to-one simulation for personalized feedback. Institutions can request group packages or cohort dashboards for coordinated preparation."
    },
    {
      category: 'Scope',
      question: "Is PrepViva only for medicine and NHS?",
      answer: "No. While optimized for medical and NHS roles, PrepViva also supports other UK university admissions interviews including Oxbridge, Russell Group, and competitive programmes."
    },
    {
      category: 'Free Trial',
      question: "Can I try PrepViva for free?",
      answer: "Yes. You can experience a brief interactive demo (1-2 questions) to understand how the platform works before purchasing a full 45-minute mock interview session."
    },
    {
      category: 'Value',
      question: "What is the biggest benefit of PrepViva?",
      answer: "Consistency and scale. You can practice unlimited times with realistic conditions at a fraction of traditional coaching costs, something not possible with human coaching alone."
    },
    {
      category: 'Model Answers',
      question: "Do you provide sample answers?",
      answer: "Yes. Each report includes model responses demonstrating structured, high-quality answers for your specific role or subject, showing exactly what excellent responses look like."
    },
    {
      category: 'Anxiety',
      question: "Can PrepViva help reduce interview anxiety?",
      answer: "Yes. Repeated practice in realistic conditions improves confidence and reduces performance anxiety. Our data shows 92% average confidence increase after 3+ sessions."
    },
    {
      category: 'Follow-ups',
      question: "How do follow-up questions work?",
      answer: "If your answer is vague or incomplete, PrepViva automatically asks follow-ups exactly like a real panel interviewer would, testing depth of understanding and ability to expand."
    },
    {
      category: 'Coaching Replacement',
      question: "Does PrepViva replace human coaching?",
      answer: "It complements it. Many candidates use PrepViva alongside tutors for unlimited practice between coaching sessions, maximizing value from both approaches."
    },
    {
      category: 'Privacy',
      question: "Do universities know if I use PrepViva?",
      answer: "No. PrepViva is a private preparation tool. Your reports and sessions are confidential to you. We do not share user data with any institutions."
    },
    {
      category: 'Frequency',
      question: "How often should I practice?",
      answer: "We recommend 2-3 sessions per week for optimal results. This spacing allows time to implement feedback while maintaining momentum. Most successful candidates complete 3-5 total sessions."
    }
  ]

  const filteredFaqs = searchTerm
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqs

  const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 7)

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <Container size="lg">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to know about PrepViva
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="space-y-3 max-w-3xl mx-auto">
          {visibleFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <div className="flex-grow pr-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1 block">
                    {faq.category}
                  </span>
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 animate-fade-in">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && filteredFaqs.length > 7 && (
          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setShowAll(true)}
            >
              Load All {filteredFaqs.length} Questions
            </Button>
          </div>
        )}

        {searchTerm && filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600">No questions found matching &quot;{searchTerm}&quot;</p>
            <Button
              variant="ghost"
              onClick={() => setSearchTerm('')}
              className="mt-4"
            >
              Clear Search
            </Button>
          </div>
        )}

        {/* Still have questions CTA */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold mb-2 text-slate-900">Still have questions?</h3>
          <p className="text-slate-600 mb-6">
            Our support team typically responds within 24 hours
          </p>
          <Button variant="primary" onClick={() => window.location.href = '/contact'}>
            Contact Support
          </Button>
        </div>
      </Container>
    </section>
  )
}


