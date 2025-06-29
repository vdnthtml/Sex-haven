'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight, BookOpen, FileText, Users, Play, MessageSquare, Search, ArrowRight, Calendar, User } from 'lucide-react'

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const resources = [
    {
      id: 1,
      title: 'The Science of the First 3 Seconds: A Deep Dive into Viral Hooks',
      description: 'Learn how Helixar\'s AI identifies and optimizes the critical opening moments that make content go viral.',
      type: 'blog-post',
      category: 'content-strategy',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Team',
      date: '2024-01-15',
      readTime: '8 min read',
      link: '/blog/viral-hooks-science'
    },
    {
      id: 2,
      title: 'Your AI Content Strategy Guide',
      description: 'A comprehensive guide to leveraging Helixar\'s insights for sustained viral growth. Download our free e-book.',
      type: 'guide',
      category: 'guides',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Team',
      date: '2024-01-10',
      readTime: '45 min read',
      link: '/guides/ai-content-strategy'
    },
    {
      id: 3,
      title: 'Agency X: 250% Engagement Boost',
      description: 'See how a leading marketing agency used Helixar\'s insights to revolutionize their clients\' short-form video performance.',
      type: 'case-study',
      category: 'case-studies',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Team',
      date: '2024-01-08',
      readTime: '12 min read',
      link: '/case-studies/agency-x-engagement'
    },
    {
      id: 4,
      title: 'Deconstructing TikTok Virality',
      description: 'Watch our masterclass where we break down viral TikToks using Helixar\'s AI, revealing actionable strategies.',
      type: 'webinar',
      category: 'videos',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Team',
      date: '2024-01-05',
      readTime: '45 min watch',
      link: '/webinars/tiktok-virality'
    },
    {
      id: 5,
      title: 'Understanding Creator Style DNA',
      description: 'Explore how Helixar\'s unique Style DNA extraction helps you replicate and innovate successful content voices.',
      type: 'blog-post',
      category: 'content-strategy',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Team',
      date: '2024-01-03',
      readTime: '10 min read',
      link: '/blog/creator-style-dna'
    },
    {
      id: 6,
      title: 'Join the Helixar Community',
      description: 'Connect with other creators and agencies, share insights, and get tips from the Helixar team.',
      type: 'community',
      category: 'community',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Community',
      date: 'Ongoing',
      readTime: 'Active',
      link: '/community'
    },
    {
      id: 7,
      title: 'The Psychology of Viral Content: What Makes People Share',
      description: 'Dive deep into the psychological triggers that drive content virality and how to leverage them in your strategy.',
      type: 'blog-post',
      category: 'content-strategy',
      thumbnail: '/api/placeholder/400/250',
      author: 'Dr. Sarah Chen',
      date: '2024-01-12',
      readTime: '15 min read',
      link: '/blog/psychology-viral-content'
    },
    {
      id: 8,
      title: 'Helixar API Documentation',
      description: 'Complete technical documentation for integrating Helixar\'s AI insights into your existing workflows and tools.',
      type: 'guide',
      category: 'guides',
      thumbnail: '/api/placeholder/400/250',
      author: 'Helixar Dev Team',
      date: '2024-01-07',
      readTime: '30 min read',
      link: '/docs/api'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog-post', label: 'Blog Posts' },
    { id: 'guide', label: 'Guides & E-books' },
    { id: 'case-study', label: 'Case Studies' },
    { id: 'webinar', label: 'Webinars/Videos' },
    { id: 'community', label: 'Community' }
  ]

  const getTypeLabel = (type: string) => {
    const filter = filters.find(f => f.id === type)
    return filter ? filter.label : type
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog-post':
        return FileText
      case 'guide':
        return BookOpen
      case 'case-study':
        return Users
      case 'webinar':
        return Play
      case 'community':
        return MessageSquare
      default:
        return FileText
    }
  }

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero (Resources Overview) */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden bg-deep-charcoal">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle interconnected knowledge nodes background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-medium-grey rounded-full"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-medium-grey rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-medium-grey rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-medium-grey rounded-full"></div>
            {/* Connecting lines */}
            <div className="absolute top-1/4 left-1/4 w-32 h-px bg-medium-grey transform rotate-45 origin-left"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-px bg-medium-grey transform -rotate-45 origin-right"></div>
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
              Master Viral Content. Powered by Intelligence.
            </h1>
            <p className="text-xl md:text-2xl text-pure-white mb-8">
              Dive into our curated library of articles, guides, and insights on viral content strategy, AI, and maximizing your reach with Helixar.
            </p>
            <Link href="#resources" className="btn-primary">
              Explore All Resources
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Resource Categories / Content Gallery */}
      <section id="resources" className="py-28 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white mb-4">
              Your Hub for AI-Driven Content Insights
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto">
              From deep dives into virality science to practical tips for using Helixar, find everything you need to supercharge your content.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-pure-white placeholder-medium-grey focus:border-warm-gold focus:outline-none transition-colors"
              />
            </div>
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

          {/* Resource Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredResources.map((resource, index) => {
              const TypeIcon = getTypeIcon(resource.type)
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:border-warm-gold/30 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                      <TypeIcon className="text-warm-gold" size={48} />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-xs text-pure-white bg-warm-gold/20 backdrop-blur-sm px-2 py-1 rounded">
                        {getTypeLabel(resource.type)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-pure-white mb-3 group-hover:text-warm-gold transition-colors line-clamp-2">
                      {resource.title}
                    </h3>
                    <p className="text-pure-white text-sm leading-relaxed mb-4 line-clamp-3">
                      {resource.description}
                    </p>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-medium-grey mb-4">
                      <div className="flex items-center space-x-2">
                        <User size={12} />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={12} />
                        <span>{resource.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={resource.link}
                      className="inline-flex items-center text-warm-gold hover:text-yellow-400 transition-colors text-sm font-medium"
                    >
                      {resource.type === 'webinar' ? 'Watch Now' : 
                       resource.type === 'guide' ? 'Download Guide' :
                       resource.type === 'case-study' ? 'View Case Study' :
                       resource.type === 'community' ? 'Visit Forum' : 'Read Article'}
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* No results message */}
          {filteredResources.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-medium-grey text-lg">
                No resources found. Try adjusting your search or filter criteria.
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredResources.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button className="btn-secondary">
                Load More Resources
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 3: Call to Action */}
      <section className="py-28 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle interconnected nodes background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-warm-gold rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            {/* Connecting lines */}
            <div className="absolute top-1/4 left-1/4 w-16 h-px bg-warm-gold/30 transform rotate-45 origin-left"></div>
            <div className="absolute top-3/4 right-1/4 w-12 h-px bg-warm-gold/30 transform -rotate-45 origin-right"></div>
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
              From Insight to Impact: See Helixar in Action
            </h2>
            <p className="text-xl text-pure-white mb-8">
              You've gained the knowledge. Now, experience the intelligence that builds viral content, effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary">
                Get Started Free
              </Link>
              <Link href="/contact" className="btn-secondary">
                Have Specific Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 