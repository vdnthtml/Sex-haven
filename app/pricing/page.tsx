'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, Check, X, Plus, Minus, Star } from 'lucide-react'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const pricingData = {
    monthly: {
      pro: 29,
      business: 99,
      annualSavings: 20
    },
    annual: {
      pro: 23,
      business: 79,
      annualSavings: 20
    }
  }

  const plans = [
    {
      name: 'Free',
      price: 0,
      tagline: 'Start Your Viral Journey',
      features: [
        '5 Video Analysis per month',
        'Basic Human Blueprint Access',
        'Standard AI Pipeline',
        'Community Support'
      ],
      cta: 'Get Started Free',
      ctaLink: '/signup',
      popular: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? pricingData.monthly.pro : pricingData.annual.pro,
      tagline: 'Accelerate Your Viral Growth',
      features: [
        '50 Video Analysis per month',
        'Full Human Blueprint Access (exportable)',
        'Machine Blueprint Generation',
        'Style DNA Extraction',
        'Priority Email Support',
        'Advanced Analytics Dashboard'
      ],
      cta: 'Choose Pro',
      ctaLink: '/signup',
      popular: true
    },
    {
      name: 'Business',
      price: billingCycle === 'monthly' ? pricingData.monthly.business : pricingData.annual.business,
      tagline: 'Scale Your Insights. Empower Your Team.',
      features: [
        '200 Video Analysis per month',
        'All Pro Features',
        'Multi-User Access (5 seats)',
        'Dedicated Account Manager',
        'Advanced Reporting & Analytics',
        'API Access (Coming Soon)',
        'Custom Onboarding'
      ],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      popular: false
    }
  ]

  const faqs = [
    {
      question: 'What is the "Video Analysis Limit" in each plan?',
      answer: 'The Video Analysis Limit refers to the number of unique video links you can submit for deep AI analysis per billing cycle (monthly or annually). Each submission counts as one analysis, regardless of video length. Once analyzed, you can access its blueprints indefinitely.'
    },
    {
      question: 'What is "Human Blueprint Access" and what does "editable" mean?',
      answer: 'The Human Blueprint is Helixar\'s strategic report detailing insights like hooks, pacing, and emotional arcs. "Editable" means you can customize, refine, and export these insights within our app for your specific strategic needs, rather than just viewing a static report.'
    },
    {
      question: 'How does "Machine Blueprint Generation" work with third-party tools?',
      answer: 'The Machine Blueprint provides precise, automated instructions (e.g., cuts, text overlays, timing) that are optimized for import or direct use with leading video generation platforms like HeyGen, Runway, and Remotion, streamlining your content production workflow.'
    },
    {
      question: 'What is "Style DNA Extraction" and why is it important?',
      answer: 'Style DNA Extraction is Helixar\'s ability to identify the unique elements (e.g., humor, visual aesthetic, narrative voice, pacing signature) that define a creator\'s viral success. This is crucial because it allows you to generate new content "in the voice of" any creator or replicate successful styles.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes to your plan will be prorated and take effect immediately.'
    },
    {
      question: 'Is a credit card required for the Free plan?',
      answer: 'No, a credit card is not required to sign up for or use our Free plan. You can explore Helixar\'s core analysis capabilities completely risk-free.'
    },
    {
      question: 'What kind of support is included with each plan?',
      answer: 'Free plan users receive community forum support. Pro plan users get priority email support. Business and Enterprise plans include dedicated account managers and premium support channels.'
    },
    {
      question: 'Do you offer custom or enterprise solutions?',
      answer: 'Yes, for large teams or specific needs, we offer custom Enterprise solutions. Please contact our sales team to discuss your requirements.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day money-back guarantee for new Pro and Business subscriptions. Please refer to our Terms of Service for full details.'
    }
  ]

  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero (Pricing Overview) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle geometric background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-medium-grey rounded-full"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-medium-grey rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-medium-grey rounded-full"></div>
          </div>
        </div>
        <div className="relative z-10 container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Simple Pricing. Powerful Intelligence.
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              Flexible plans designed to scale with your content ambitions. Start free, then grow with the insights you need.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-pure-white' : 'text-medium-grey'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-warm-gold' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-pure-white' : 'text-medium-grey'}`}>
                Annually (Save {pricingData.annual.annualSavings}%)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Pricing Tiers / Comparison Grid */}
      <section className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Find the perfect Helixar plan to scale your content strategy
            </h2>
            <p className="text-lg text-medium-grey max-w-2xl mx-auto">
              From individual breakthroughs to enterprise insights, choose the plan that fits your viral content ambitions.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative card ${plan.popular ? 'border-warm-gold/50 bg-gradient-to-br from-warm-gold/5 to-transparent' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-warm-gold text-deep-charcoal px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-pure-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-pure-white">${plan.price}</span>
                    <span className="text-medium-grey ml-1">
                      {plan.price === 0 ? '' : billingCycle === 'monthly' ? '/month' : '/month'}
                    </span>
                  </div>
                  {plan.price > 0 && billingCycle === 'annual' && (
                    <p className="text-sm text-medium-grey">billed annually</p>
                  )}
                  <p className="text-medium-grey text-sm">{plan.tagline}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="text-warm-gold flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-pure-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-warm-gold text-deep-charcoal hover:bg-yellow-400'
                      : plan.name === 'Business'
                      ? 'border border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-charcoal'
                      : 'bg-warm-gold text-deep-charcoal hover:bg-yellow-400'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Detailed Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="min-w-full text-left border border-gray-700 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-4 text-pure-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-pure-white font-semibold text-center">Free</th>
                  <th className="px-6 py-4 text-warm-gold font-semibold text-center">Pro</th>
                  <th className="px-6 py-4 text-pure-white font-semibold text-center">Business</th>
                </tr>
              </thead>
              <tbody className="text-pure-white">
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Video Analysis Limit (per month)</td>
                  <td className="px-6 py-4 text-center">5</td>
                  <td className="px-6 py-4 text-center">50</td>
                  <td className="px-6 py-4 text-center">200</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Human Blueprint Access</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Full (Exportable)</td>
                  <td className="px-6 py-4 text-center">Full (Exportable)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Machine Blueprint Output</td>
                  <td className="px-6 py-4 text-center"><X className="text-medium-grey mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Style DNA Extraction</td>
                  <td className="px-6 py-4 text-center"><X className="text-medium-grey mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Third-Party Integration</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Full</td>
                  <td className="px-6 py-4 text-center">Full + API</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Team Seats Included</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center">1</td>
                  <td className="px-6 py-4 text-center">5</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Advanced Reporting</td>
                  <td className="px-6 py-4 text-center"><X className="text-medium-grey mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><Check className="text-warm-gold mx-auto" size={16} /></td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">API Access</td>
                  <td className="px-6 py-4 text-center"><X className="text-medium-grey mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center"><X className="text-medium-grey mx-auto" size={16} /></td>
                  <td className="px-6 py-4 text-center">Coming Soon</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-6 py-4">Support</td>
                  <td className="px-6 py-4 text-center">Community</td>
                  <td className="px-6 py-4 text-center">Priority Email</td>
                  <td className="px-6 py-4 text-center">Dedicated Manager</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Section 3: FAQ / Common Questions */}
      <section className="py-28 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Your Questions, Answered
            </h2>
            <p className="text-lg text-medium-grey max-w-2xl mx-auto">
              Have more questions about Helixar, our features, or our plans? We're here to help.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-pure-white pr-4">
                    {faq.question}
                  </h3>
                  {expandedFAQ === index ? (
                    <Minus className="text-warm-gold flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-warm-gold flex-shrink-0" size={20} />
                  )}
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <p className="text-pure-white leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-pure-white mb-4">Still have questions? Our team is ready to help.</p>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 