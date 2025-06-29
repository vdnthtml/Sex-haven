'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'acceptance-of-terms', title: 'Acceptance of Terms' },
    { id: 'your-account', title: 'Your Account' },
    { id: 'use-of-service', title: 'Use of Our Service' },
    { id: 'user-content-conduct', title: 'User Content and Conduct' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'third-party-services', title: 'Third-Party Services & Content' },
    { id: 'disclaimers', title: 'Disclaimers' },
    { id: 'limitation-of-liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law & Dispute Resolution' },
    { id: 'termination', title: 'Termination' },
    { id: 'changes-to-terms', title: 'Changes to Terms' },
    { id: 'miscellaneous', title: 'Miscellaneous' },
    { id: 'contact-us', title: 'Contact Us' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero (Terms Introduction) */}
      <section className="py-32 bg-deep-charcoal">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              These Terms of Service outline the rules and guidelines for using Helixar. By accessing or using our service, you agree to be bound by these terms.
            </p>
            <p className="text-medium-grey text-lg">
              Last Updated: June 28, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Terms Content */}
      <section className="py-16 bg-deep-charcoal">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16 p-6 bg-gray-900/50 rounded-xl border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-pure-white mb-4">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left p-3 rounded-lg transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-warm-gold text-deep-charcoal'
                        : 'text-pure-white hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-sm font-medium">{index + 1}.</span> {section.title}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Terms Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              {/* Introduction */}
              <div id="introduction" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">1. Introduction</h3>
                <p className="text-pure-white mb-4">
                  Welcome to Helixar. These Terms of Service ("Terms") govern your use of our AI-powered video intelligence platform and services (collectively, the "Service") operated by Helixar Inc. ("Helixar," "we," "us," or "our").
                </p>
                <p className="text-pure-white mb-4">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div id="acceptance-of-terms" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">2. Acceptance of Terms</h3>
                <p className="text-pure-white mb-4">
                  By accessing or using the Service, you confirm that you accept these Terms and agree to comply with them. If you are using the Service on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.
                </p>
                <p className="text-pure-white mb-4">
                  These Terms apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                </p>
              </div>

              {/* Your Account */}
              <div id="your-account" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">3. Your Account</h3>
                <p className="text-pure-white mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-pure-white mb-4">
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.
                </p>
              </div>

              {/* Use of Our Service */}
              <div id="use-of-service" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">4. Use of Our Service</h3>
                <p className="text-pure-white mb-4">
                  You agree to use Helixar's services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the service. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Service.
                </p>
                <p className="text-pure-white mb-4">You specifically agree not to:</p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li>Attempt to gain unauthorized access to any part of Helixar's Service or its related systems or networks</li>
                  <li>Use Helixar to generate or distribute any content that is illegal, harmful, threatening, abusive, defamatory, obscene, or racially or ethnically objectionable</li>
                  <li>Engage in any activity that interferes with or disrupts the Service or the servers and networks connected to the Service</li>
                  <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by Helixar</li>
                  <li>Use the Service for any commercial purpose without our express written consent</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble any portion of the Service</li>
                </ul>
              </div>

              {/* User Content and Conduct */}
              <div id="user-content-conduct" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">5. User Content and Conduct</h3>
                <p className="text-pure-white mb-4">
                  You retain ownership of any content you submit to the Service ("User Content"). By submitting User Content, you grant Helixar a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content solely for the purpose of providing the Service to you.
                </p>
                <p className="text-pure-white mb-4">You represent and warrant that:</p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li>You own or have the necessary rights to all User Content you submit</li>
                  <li>Your User Content does not violate any third-party rights or applicable laws</li>
                  <li>Your User Content does not contain any material that is defamatory, obscene, or otherwise objectionable</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div id="intellectual-property" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">6. Intellectual Property</h3>
                <p className="text-pure-white mb-4">
                  All intellectual property rights in and to the Helixar Service, including all algorithms, software, and underlying technology, are owned by or licensed to Helixar.
                </p>
                <p className="text-pure-white mb-4">
                  <strong>Your Content:</strong> You retain all intellectual property rights in the video content you upload to Helixar.
                </p>
                <p className="text-pure-white mb-4">
                  <strong>Generated Content (Blueprints/Videos):</strong> Helixar grants you a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content (e.g., Human Blueprints, Machine Blueprints, or generated videos through third-party integrations) that is created or generated <em>for you</em> by the Helixar Service for your personal or commercial use, subject to these Terms. You are responsible for ensuring that your use of generated content complies with all applicable laws and third-party terms (e.g., HeyGen, Runway).
                </p>
              </div>

              {/* Third-Party Services & Content */}
              <div id="third-party-services" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">7. Third-Party Services & Content</h3>
                <p className="text-pure-white mb-4">
                  Our Service may contain links to third-party websites or services that are not owned or controlled by Helixar. Helixar has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p className="text-pure-white mb-4">
                  You acknowledge and agree that Helixar shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                </p>
              </div>

              {/* Disclaimers */}
              <div id="disclaimers" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">8. Disclaimers</h3>
                <p className="text-pure-white mb-4">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. HELIXAR MAKES NO WARRANTIES, EXPRESS OR IMPLIED, AND HEREBY DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-pure-white mb-4">
                  Helixar does not warrant that the Service will be uninterrupted, secure, or error-free, or that defects will be corrected.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div id="limitation-of-liability" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">9. Limitation of Liability</h3>
                <p className="text-pure-white mb-4">
                  IN NO EVENT SHALL HELIXAR, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
                <p className="text-pure-white mb-4">
                  IN NO EVENT SHALL HELIXAR'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE SERVICE DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </div>

              {/* Indemnification */}
              <div id="indemnification" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">10. Indemnification</h3>
                <p className="text-pure-white mb-4">
                  You agree to defend, indemnify, and hold harmless Helixar and its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from:
                </p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li>Your use of and access to the Service</li>
                  <li>Your violation of any term of these Terms</li>
                  <li>Your violation of any third-party right, including without limitation any copyright, property, or privacy right</li>
                  <li>Any claim that your User Content caused damage to a third party</li>
                </ul>
              </div>

              {/* Governing Law & Dispute Resolution */}
              <div id="governing-law" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">11. Governing Law & Dispute Resolution</h3>
                <p className="text-pure-white mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
                <p className="text-pure-white mb-4">
                  Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in San Francisco, California.
                </p>
              </div>

              {/* Termination */}
              <div id="termination" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">12. Termination</h3>
                <p className="text-pure-white mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="text-pure-white mb-4">
                  If you wish to terminate your account, you may simply discontinue using the Service. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>

              {/* Changes to Terms */}
              <div id="changes-to-terms" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">13. Changes to Terms</h3>
                <p className="text-pure-white mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-pure-white mb-4">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>

              {/* Miscellaneous */}
              <div id="miscellaneous" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">14. Miscellaneous</h3>
                <p className="text-pure-white mb-4">
                  These Terms constitute the entire agreement between you and Helixar regarding the use of the Service. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
                </p>
                <p className="text-pure-white mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>

              {/* Contact Us */}
              <div id="contact-us" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">15. Contact Us</h3>
                <p className="text-pure-white mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <p className="text-pure-white mb-2">
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:legal@helixar.com" className="text-warm-gold hover:text-yellow-400 transition-colors">
                      legal@helixar.com
                    </Link>
                  </p>
                  <p className="text-pure-white mb-2">
                    <strong>Address:</strong> Helixar Inc., 123 AI Street, Tech City, TC 12345
                  </p>
                  <p className="text-pure-white">
                    <strong>Privacy Policy:</strong> Please also review our{' '}
                    <Link href="/privacy-policy" className="text-warm-gold hover:text-yellow-400 transition-colors">
                      Privacy Policy
                    </Link>{' '}
                    which also governs your use of the Service.
                  </p>
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