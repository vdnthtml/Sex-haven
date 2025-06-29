'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Headphones, Briefcase, Megaphone, Send, ExternalLink } from 'lucide-react'
import { submitContactForm } from '@/lib/api'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await submitContactForm(formData)
      setSubmitStatus('success')
      setFormData({ fullName: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero (Contact Overview) */}
      <section className="py-32 bg-deep-charcoal relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/10 via-transparent to-warm-gold/10"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-warm-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              Have a question about Helixar, need support, or interested in a custom solution? Find the best way to reach our team below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Contact Options / Form */}
      <section className="py-16 bg-deep-charcoal">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-pure-white mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-pure-white font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey disabled:opacity-50"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-pure-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-pure-white font-medium mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white disabled:opacity-50"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Billing Question">Billing Question</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Feature Request">Feature Request</option>
                    <option value="Press/Media">Press/Media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-pure-white font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors resize-none text-pure-white placeholder-medium-grey disabled:opacity-50"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-warm-gold text-deep-charcoal font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-charcoal mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-alert-red/10 border border-alert-red rounded-lg text-alert-red">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </motion.div>

            {/* Right Column: Other Contact Options */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-pure-white mb-8">Other Ways to Connect</h3>

              {/* Support & Technical Questions */}
              <div className="bg-obsidian-black border border-medium-grey rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pure-white mb-2">Technical Support</h4>
                    <p className="text-medium-grey mb-3">Get help with Helixar features and troubleshooting</p>
                    <a
                      href="/resources"
                      className="inline-flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                    >
                      Visit Help Center
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Business & Partnerships */}
              <div className="bg-obsidian-black border border-medium-grey rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pure-white mb-2">Business Inquiries</h4>
                    <p className="text-medium-grey mb-3">Partnerships, enterprise solutions, and custom integrations</p>
                    <a
                      href="mailto:partnerships@helixar.ai"
                      className="inline-flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                    >
                      partnerships@helixar.ai
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Press & Media */}
              <div className="bg-obsidian-black border border-medium-grey rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-warm-gold/10 rounded-lg flex items-center justify-center">
                    <Megaphone className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-pure-white mb-2">Press & Media</h4>
                    <p className="text-medium-grey mb-3">Media inquiries, press releases, and brand assets</p>
                    <a
                      href="mailto:press@helixar.ai"
                      className="inline-flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                    >
                      press@helixar.ai
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-obsidian-black border border-medium-grey rounded-xl p-6">
                <h4 className="text-lg font-semibold text-pure-white mb-4">Contact Information</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-warm-gold" />
                    <span className="text-medium-grey">hello@helixar.ai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-warm-gold" />
                    <span className="text-medium-grey">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-warm-gold" />
                    <span className="text-medium-grey">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 