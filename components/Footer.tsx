'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, Mail, Send } from 'lucide-react'
import { useState } from 'react'
import { subscribeToNewsletter } from '@/lib/api'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const footerLinks = {
    product: [
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/use-cases', label: 'Use Cases' },
      { href: '/resources', label: 'Resources' },
    ],
    company: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/careers', label: 'Careers' },
    ],
    legal: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
    support: [
      { href: '/help', label: 'Help Center' },
      { href: '/docs', label: 'Documentation' },
      { href: '/status', label: 'Status' },
    ],
  }

  const socialLinks = [
    { href: 'https://twitter.com/helixar', icon: Twitter, label: 'Twitter' },
    { href: 'https://linkedin.com/company/helixar', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/helixar', icon: Github, label: 'GitHub' },
    { href: 'mailto:hello@helixar.ai', icon: Mail, label: 'Email' },
  ]

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      await subscribeToNewsletter(email)
      setSubmitStatus('success')
      setEmail('')
      
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
    <footer className="bg-deep-charcoal border-t border-medium-grey">
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-pure-white">
                Helixar
              </span>
            </Link>
            <p className="text-medium-grey mb-6 max-w-md">
              Transform your content strategy with AI-powered analysis. 
              Get actionable insights and optimize for maximum impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-medium-grey hover:text-warm-gold transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-pure-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-medium-grey hover:text-pure-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-pure-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-medium-grey hover:text-pure-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-pure-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-medium-grey text-sm mb-4">
              Get the latest insights on content strategy and AI analysis.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-deep-charcoal border border-medium-grey rounded-lg focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-warm-gold text-deep-charcoal font-bold py-3 px-4 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-deep-charcoal mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 text-sm">
                  Successfully subscribed!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-alert-red text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-medium-grey mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-medium-grey text-sm">
              © {currentYear} Helixar. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-medium-grey hover:text-pure-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 