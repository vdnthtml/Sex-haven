'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Headphones, Briefcase, Megaphone, Send, ExternalLink } from 'lucide-react'

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
    
    // Simulate form submission (replace with actual Tally.so integration)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ fullName: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 2000)
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
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey"
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
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey"
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
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors text-pure-white"
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
                    className="w-full px-4 py-3 bg-deep-charcoal rounded-lg border border-medium-grey focus:border-warm-gold focus:outline-none transition-colors resize-none text-pure-white placeholder-medium-grey"
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
                  <div className="p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-300">
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
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-gold/20 rounded-lg">
                    <Headphones className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-pure-white mb-2">Product Support</h4>
                    <p className="text-pure-white mb-4">
                      For questions about using Helixar, technical issues, or feature requests.
                    </p>
                    <div className="space-y-2">
                      <Link 
                        href="mailto:support@helixar.com"
                        className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        support@helixar.com
                      </Link>
                      <Link 
                        href="/resources"
                        className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit our Knowledge Base
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales & Partnership Inquiries */}
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-gold/20 rounded-lg">
                    <Briefcase className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-pure-white mb-2">Sales & Partnerships</h4>
                    <p className="text-pure-white mb-4">
                      Interested in enterprise solutions, custom plans, or partnership opportunities?
                    </p>
                    <div className="space-y-2">
                      <Link 
                        href="mailto:sales@helixar.com"
                        className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        sales@helixar.com
                      </Link>
                      <Link 
                        href="https://cal.com/helixar/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Book a Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press & Media */}
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-gold/20 rounded-lg">
                    <Megaphone className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-pure-white mb-2">Press & Media</h4>
                    <p className="text-pure-white mb-4">
                      For media inquiries, interviews, or press kit requests.
                    </p>
                    <Link 
                      href="mailto:press@helixar.com"
                      className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      press@helixar.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-warm-gold/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-warm-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-pure-white mb-2">Our Location</h4>
                    <p className="text-pure-white">
                      Helixar Inc.<br />
                      123 AI Street<br />
                      Tech City, TC 12345<br />
                      United States
                    </p>
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