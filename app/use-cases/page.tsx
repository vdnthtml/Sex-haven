'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, TrendingUp, Anchor, Users, Clock, MessageSquare, Zap, ArrowRight } from 'lucide-react'

export default function UseCases() {
  const [activeFilter, setActiveFilter] = useState('all')

  const useCases = [
    {
      id: 1,
      title: 'Master Trending Content, Fast',
      description: 'Stop guessing which trends will work. Helixar analyzes viral videos in your niche, dissecting the exact elements that made them explode, providing a precise blueprint for your next hit.',
      category: ['content-strategy', 'creators', 'agencies'],
      icon: TrendingUp,
      link: '/use-cases/trending-content'
    },
    {
      id: 2,
      title: 'Engineer Hooks That Captivate',
      description: 'Discover the precise verbal and visual techniques top creators use to grab attention in the first 3 seconds. Helixar provides actionable data to optimize your video\'s crucial opening.',
      category: ['content-strategy', 'creators'],
      icon: Anchor,
      link: '/use-cases/captivating-hooks'
    },
    {
      id: 3,
      title: 'Scale Client Content with Intelligence',
      description: 'Agencies can rapidly analyze client-specific content and competitor videos to standardize high-performing strategies, proving ROI with data-backed insights across multiple campaigns.',
      category: ['agencies', 'production-automation'],
      icon: Users,
      link: '/use-cases/agency-scaling'
    },
    {
      id: 4,
      title: 'Optimize Pacing for Max Retention',
      description: 'Leverage AI to understand ideal scene lengths, cut points, and narrative flow. Helixar maps emotional arcs and pacing shifts to keep viewers glued to your content.',
      category: ['content-strategy', 'production'],
      icon: Clock,
      link: '/use-cases/pacing-optimization'
    },
    {
      id: 5,
      title: 'Generate Content in Any Style',
      description: 'Helixar extracts a creator\'s unique "style DNA," enabling you to generate new short-form content that perfectly matches their tone, humor, and psychological impact.',
      category: ['content-strategy', 'creators'],
      icon: MessageSquare,
      link: '/use-cases/style-generation'
    },
    {
      id: 6,
      title: 'Automate Production, Maintain Quality',
      description: 'Translate strategic insights into precise machine blueprints, ready for automated video generation tools like HeyGen and Runway, drastically reducing production time while ensuring high-impact results.',
      category: ['production-automation', 'agencies'],
      icon: Zap,
      link: '/use-cases/automated-production'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Use Cases' },
    { id: 'creators', label: 'For Creators' },
    { id: 'agencies', label: 'For Agencies' },
    { id: 'content-strategy', label: 'Content Strategy' },
    { id: 'production-automation', label: 'Production & Automation' }
  ]

  const filteredUseCases = activeFilter === 'all' 
    ? useCases 
    : useCases.filter(useCase => useCase.category.includes(activeFilter))

  const getCategoryLabel = (categoryId: string) => {
    const filter = filters.find(f => f.id === categoryId)
    return filter ? filter.label : categoryId
  }

  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero (Use Case Overview) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle abstract background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-medium-grey rounded-full"></div>
            <div className="absolute top-3/4 right-1/4 w-32 h-32 border border-medium-grey rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-medium-grey rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-medium-grey rounded-full"></div>
          </div>
        </div>
        <div className="relative z-10 container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-pure-white mb-6">
              Helixar: Designed for Every Content Breakthrough
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              Whether you're a burgeoning creator, a seasoned marketer, or scaling an agency, Helixar adapts to your unique workflow, delivering intelligence that drives results.
            </p>
            <Link href="#use-cases" className="btn-primary">
              Find Your Use Case
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Use Case Categories / Gallery */}
      <section id="use-cases" className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Explore How Helixar Transforms Your Workflow
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto">
              Discover specific scenarios where Helixar's AI intelligence delivers measurable results for content creators and agencies.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-warm-gold text-deep-charcoal'
                    : 'border border-pure-white text-pure-white hover:bg-pure-white hover:text-deep-charcoal'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Use Case Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:border-warm-gold/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-warm-gold/10 rounded-lg group-hover:bg-warm-gold/20 transition-colors">
                    <useCase.icon className="text-warm-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {useCase.category.slice(0, 2).map((cat) => (
                        <span key={cat} className="text-xs text-medium-grey bg-gray-800 px-2 py-1 rounded">
                          {getCategoryLabel(cat)}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-pure-white mb-3 group-hover:text-warm-gold transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-pure-white text-sm leading-relaxed mb-4">
                      {useCase.description}
                    </p>
                    <Link 
                      href={useCase.link}
                      className="inline-flex items-center text-warm-gold hover:text-yellow-400 transition-colors text-sm font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No results message */}
          {filteredUseCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-medium-grey text-lg">
                No use cases found for this category. Try selecting a different filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="py-28 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle ambient animation background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-warm-gold rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
        <div className="relative z-10 container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-6">
              Ready to Apply Helixar to Your Challenge?
            </h2>
            <p className="text-xl text-pure-white mb-8">
              Whether it's dissecting trends, scaling client content, or optimizing your personal brand, Helixar provides the intelligence you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary">
                Get Started Free
              </Link>
              <Link href="/pricing" className="btn-secondary">
                Explore Pricing Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 