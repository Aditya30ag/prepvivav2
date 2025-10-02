// ==========================================
'use client'

import { useState } from 'react'
import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FloatingLabelInput, FloatingLabelTextarea } from '@/components/ui/FloatingLabelInput'
import { Mail, Send, CheckCircle2, AlertCircle, Clock, Users, Award, Shield } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.purpose) newErrors.purpose = 'Please select a purpose'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('loading')

    // Simulate API call (replace with actual API route)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', purpose: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/10 to-white">
      <section className="py-20">
        <Container size="xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <Badge variant="primary" size="md">
                We&apos;re Here to Help
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
              Contact PrepViva
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether you&apos;re a student, university, or NHS trust, our team is ready to support you. 
              We respond within 24 hours and ensure full GDPR compliance.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <Card hover className="border border-slate-200">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">For Students & Applicants</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Need help with your account, feedback reports, or interview practice? 
                Our student support team is here for you.
              </p>
              <ul className="space-y-3 mb-6">
                {['Technical support & troubleshooting', 'Questions about reports & feedback', 'Payment & access queries', 'Interview preparation guidance'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" data-event="contact_student_support">
                Email Student Support
              </Button>
            </Card>

            <Card hover className="border border-slate-200">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-slate-900">For Universities & NHS Trusts</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Explore PrepViva&apos;s institutional solutions for entire cohorts. 
                Our partnerships team works with admissions offices and NHS recruiters.
              </p>
              <ul className="space-y-3 mb-6">
                {['Institutional licensing', 'Bulk interview practice access', 'Analytics & reporting dashboards', 'LMS integration support'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="secondary" data-event="contact_institution">
                Request Pilot Programme
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card padding="lg" className="max-w-3xl mx-auto mb-16 border border-slate-200">
            <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Send Us a Message</h2>
            
            {status === 'success' && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Message Sent Successfully!</h3>
                  <p className="text-sm text-green-700">We&apos;ll respond within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FloatingLabelInput
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <FloatingLabelInput
                  type="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Purpose *
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.purpose ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'} rounded-lg focus:ring-2 focus:outline-none transition-colors`}
                >
                  <option value="">Select an option</option>
                  <option value="student">Student Support</option>
                  <option value="institution">University / NHS Partnership</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
                {errors.purpose && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.purpose}
                  </p>
                )}
              </div>

              <FloatingLabelTextarea
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                error={errors.message}
              />

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={status === 'loading'}
                  data-event="contact_form_submit"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card padding="md" className="text-center border border-slate-200">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
              <a href="mailto:support@prepviva.com" className="text-blue-600 hover:underline">
                support@prepviva.com
              </a>
            </Card>

            <Card padding="md" className="text-center border border-slate-200">
              <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Support Hours</h3>
              <p className="text-slate-600">Mon–Fri, 9am–6pm GMT</p>
            </Card>

            <Card padding="md" className="text-center border border-slate-200">
              <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Data Protection</h3>
              <p className="text-slate-600">GDPR & UK Compliant</p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk</h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              Whether you need student support or want to scale PrepViva across your institution, we&apos;re ready to help.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Start the Conversation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

// ==========================================
