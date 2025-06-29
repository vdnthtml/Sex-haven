'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronRight, ExternalLink } from 'lucide-react'

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction')

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use-information', title: 'How We Use Your Information' },
    { id: 'how-we-share-information', title: 'How We Share Your Information' },
    { id: 'data-protection-rights', title: 'Your Data Protection Rights' },
    { id: 'data-security', title: 'Data Security' },
    { id: 'international-transfers', title: 'International Data Transfers' },
    { id: 'third-party-links', title: 'Third-Party Links' },
    { id: 'childrens-privacy', title: 'Children\'s Privacy' },
    { id: 'changes-to-policy', title: 'Changes to This Policy' },
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
      
      {/* Section 1: Hero (Policy Introduction) */}
      <section className="py-32 bg-deep-charcoal">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Your Privacy. Our Commitment.
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              At Helixar, we understand the importance of your data and your trust. This policy outlines how we collect, use, and protect your information when you use our platform.
            </p>
            <p className="text-medium-grey text-lg">
              Last Updated: June 28, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Policy Content */}
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

            {/* Policy Content */}
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
                  Welcome to Helixar. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p className="text-pure-white mb-4">
                  This policy applies to the personal data we collect when you use our AI-powered video intelligence platform, including when you access our website, use our services, or otherwise interact with us.
                </p>
              </div>

              {/* Information We Collect */}
              <div id="information-we-collect" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">2. Information We Collect</h3>
                <p className="text-pure-white mb-4">
                  We collect various types of information to provide and improve our services to you:
                </p>
                
                <h4 className="text-xl font-semibold text-pure-white mb-3">Information You Provide to Us:</h4>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li><strong>Account Information:</strong> When you register for a Helixar account, we collect your name, email address, and password.</li>
                  <li><strong>Profile Information:</strong> You may choose to provide additional information such as your company name, industry, and role.</li>
                  <li><strong>Content Data:</strong> Videos and links you submit for analysis, generated blueprints, and feedback you provide.</li>
                  <li><strong>Communication Data:</strong> Information you provide when contacting our support team or participating in surveys.</li>
                </ul>

                <h4 className="text-xl font-semibold text-pure-white mb-3">Information We Collect Automatically:</h4>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li><strong>Usage Data:</strong> Information about how you access and use the Service, such as your IP address, browser type, pages visited, and the duration of your visits.</li>
                  <li><strong>Device Information:</strong> Data about the device you use to access Helixar, including device type, operating system, and unique device identifiers.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our Service and hold certain information.</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div id="how-we-use-information" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">3. How We Use Your Information</h3>
                <p className="text-pure-white mb-4">
                  We use the collected information for various purposes:
                </p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li>To provide, operate, and maintain our Service</li>
                  <li>To improve, personalize, and expand our Service</li>
                  <li>To understand and analyze how you use our Service</li>
                  <li>To develop new products, services, features, and functionality</li>
                  <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes</li>
                  <li>To process your transactions and manage your subscriptions</li>
                  <li>To find and prevent fraud</li>
                  <li>For compliance with legal obligations</li>
                </ul>
              </div>

              {/* How We Share Your Information */}
              <div id="how-we-share-information" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">4. How We Share Your Information</h3>
                <p className="text-pure-white mb-4">
                  We may share your personal information in the following situations:
                </p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and customer support.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so.</li>
                </ul>
              </div>

              {/* Your Data Protection Rights */}
              <div id="data-protection-rights" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">5. Your Data Protection Rights</h3>
                <p className="text-pure-white mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li><strong>Access:</strong> You have the right to request access to your personal data</li>
                  <li><strong>Correction:</strong> You have the right to request correction of inaccurate personal data</li>
                  <li><strong>Erasure:</strong> You have the right to request deletion of your personal data</li>
                  <li><strong>Portability:</strong> You have the right to request transfer of your personal data to another service</li>
                  <li><strong>Objection:</strong> You have the right to object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> You have the right to request restriction of processing of your personal data</li>
                </ul>
                <p className="text-pure-white mb-4">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>

              {/* Data Security */}
              <div id="data-security" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">6. Data Security</h3>
                <p className="text-pure-white mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="text-pure-white mb-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              {/* International Data Transfers */}
              <div id="international-transfers" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">7. International Data Transfers</h3>
                <p className="text-pure-white mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your personal data receives an adequate level of protection.
                </p>
                <p className="text-pure-white mb-4">
                  For transfers from the European Economic Area (EEA) to countries that do not provide an adequate level of data protection, we implement appropriate safeguards such as standard contractual clauses approved by the European Commission.
                </p>
              </div>

              {/* Third-Party Links */}
              <div id="third-party-links" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">8. Third-Party Links</h3>
                <p className="text-pure-white mb-4">
                  Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
                </p>
              </div>

              {/* Children's Privacy */}
              <div id="childrens-privacy" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">9. Children's Privacy</h3>
                <p className="text-pure-white mb-4">
                  Our Service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div id="changes-to-policy" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">10. Changes to This Policy</h3>
                <p className="text-pure-white mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p className="text-pure-white mb-4">
                  We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>

              {/* Contact Us */}
              <div id="contact-us" className="mb-12">
                <h3 className="text-2xl font-bold text-pure-white mb-4">11. Contact Us</h3>
                <p className="text-pure-white mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                  <p className="text-pure-white mb-2">
                    <strong>Email:</strong>{' '}
                    <Link href="mailto:privacy@helixar.com" className="text-warm-gold hover:text-yellow-400 transition-colors">
                      privacy@helixar.com
                    </Link>
                  </p>
                  <p className="text-pure-white mb-2">
                    <strong>Address:</strong> Helixar Inc., 123 AI Street, Tech City, TC 12345
                  </p>
                  <p className="text-pure-white">
                    <strong>Data Protection Officer:</strong> For EU residents, you may also contact our Data Protection Officer at{' '}
                    <Link href="mailto:dpo@helixar.com" className="text-warm-gold hover:text-yellow-400 transition-colors">
                      dpo@helixar.com
                    </Link>
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