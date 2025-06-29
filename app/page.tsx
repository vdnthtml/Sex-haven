'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Zap, Target, TrendingUp, Users, Star, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import EnhancedButton from '@/components/EnhancedButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-charcoal">
      <Header />
      
      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder - Dynamic Visual Narrative */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-charcoal via-gray-900 to-deep-charcoal">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Noise texture background */}
          <div className="absolute inset-0 bg-noise-texture animate-noise-texture opacity-5"></div>
          {/* Abstract AI Analysis Visualization */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-warm-gold rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-warm-gold rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <div className="relative z-10 container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pure-white mb-6 leading-tight">
              Decode Viral Content.{' '}
              <span className="text-gradient">Master Your Strategy.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-medium-grey mb-8 max-w-3xl mx-auto leading-relaxed">
              Helixar reverse-engineers top-performing videos, revealing the precise structure, 
              psychology, and style DNA that drives engagement. Transform your content from guesswork to guaranteed impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/signup">
                <EnhancedButton
                  variant="primary"
                  size="lg"
                  className="text-lg px-8 py-4 group"
                >
                  Start Analyzing for Free
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </EnhancedButton>
              </Link>
              <Link href="/features">
                <EnhancedButton
                  variant="secondary"
                  size="lg"
                  className="text-lg px-8 py-4 group"
                >
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  See How It Works
                </EnhancedButton>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pure-white animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Section 2: Problem Definition */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              The Content Trap:{' '}
              <span className="text-gradient">Why Viral Feels Like Luck</span>
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Most creators and agencies rely on intuition rather than data. 
              This leads to inconsistent results and wasted resources.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Element - Abstract Problem Representation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800/50 to-transparent rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                {/* Noise texture background */}
                <div className="absolute inset-0 bg-noise-texture animate-noise-texture opacity-5 pointer-events-none"></div>
                <div className="space-y-6 relative z-10">
                  {/* Tangled Network - Data Overload */}
                  <div className="relative h-32 bg-deep-charcoal rounded-lg border border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-gray-600 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute w-12 h-12 border border-gray-500 rounded-full animate-pulse"></div>
                      <div className="absolute w-8 h-8 border border-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>
                  
                  {/* Erratic Graph - Inconsistent Performance */}
                  <div className="bg-deep-charcoal rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-pure-white font-medium">Content Performance</span>
                    </div>
                    <div className="h-8 bg-gray-800 rounded flex items-end space-x-1 p-1">
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '20%' }}></div>
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '80%' }}></div>
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '30%' }}></div>
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '60%' }}></div>
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '10%' }}></div>
                      <div className="w-2 bg-gray-600 rounded-t" style={{ height: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Problem Articulation */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-pure-white mb-6">
                The Problem Isn't Your Content. It's Your Insight.
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-3">For Creators:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Hours Lost to Hunting</p>
                        <p className="text-medium-grey text-sm">Manually scrolling feeds, dissecting viral videos, and trying to spot invisible patterns.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Inconsistent Breakthroughs</p>
                        <p className="text-medium-grey text-sm">Every upload feels like a gamble. You lack the precise understanding of what truly drives engagement.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Strategy by Intuition</p>
                        <p className="text-medium-grey text-sm">Relying on gut feelings for critical content decisions instead of data-backed blueprints.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-pure-white mb-3">For Agencies:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Unscalable Analysis</p>
                        <p className="text-medium-grey text-sm">Manually analyzing competitor content is a resource drain, blocking your ability to scale.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Vague Client Justifications</p>
                        <p className="text-medium-grey text-sm">Struggling to provide concrete, data-backed reasons for content strategy beyond vanity metrics.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-alert-red text-xl">❌</span>
                      <div>
                        <p className="text-pure-white font-medium">Missed Viral Opportunities</p>
                        <p className="text-medium-grey text-sm">Key trends and subtle style elements in viral content remain hidden, leading to suboptimal performance.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-pure-white font-medium italic">
                  Imagine unlocking the precise science behind every viral hit.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Solution / Differentiation */}
      <section className="py-20 bg-gray-900/50">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
                Meet Your Content{' '}
                <span className="text-gradient">Brain</span>
              </h2>
              <p className="text-xl text-medium-grey mb-8">
                Helixar doesn't just analyze your content—it understands it. 
                Our AI creates a comprehensive blueprint of what makes your content work, 
                giving you the insights you need to replicate success.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-warm-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-pure-white font-semibold mb-2">Advanced AI Analysis</h4>
                    <p className="text-medium-grey">Powered by Whisper, YOLOv7, and CLIP for comprehensive content understanding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-warm-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-pure-white font-semibold mb-2">Dual Blueprint Output</h4>
                    <p className="text-medium-grey">Get both human-readable insights and machine-optimized recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-warm-gold mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="text-pure-white font-semibold mb-2">Virality Focus</h4>
                    <p className="text-medium-grey">Specifically designed to help you create content that spreads and engages.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-warm-gold/20 to-transparent rounded-2xl p-8 border border-warm-gold/20">
                <div className="space-y-6">
                  <div className="bg-deep-charcoal rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-warm-gold rounded-full"></div>
                      <span className="text-pure-white font-medium">AI Analysis</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-warm-gold rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-deep-charcoal rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-pure-white font-medium">Content Blueprint</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-8 bg-gray-700 rounded"></div>
                      <div className="h-8 bg-gray-700 rounded"></div>
                      <div className="h-8 bg-gray-700 rounded"></div>
                      <div className="h-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-deep-charcoal rounded-lg p-4 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-pure-white font-medium">Optimization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                      <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: How Helixar Works */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              The Helixar Loop:{' '}
              <span className="text-gradient">From Video to Viral Blueprint</span>
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Three simple steps to transform your content strategy with AI-powered insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Drop Any Public Video Link",
                description: "Simply paste a public video URL from YouTube, TikTok, or Instagram. Our system instantly ingests the content, preparing it for deep, AI-powered analysis. No complex uploads, no downloads, just a link.",
                icon: "📤"
              },
              {
                number: "02",
                title: "AI Dissects Every Viral Element",
                description: "This is where Helixar's 'Content Brain' operates. Our advanced AI pipeline—powered by Whisper, YOLOv7, and CLIP—goes beyond surface metrics. It precisely identifies hooks, pacing shifts, emotional arcs, and calls-to-action that drive engagement in any video.",
                icon: "🧠"
              },
              {
                number: "03",
                title: "Get Your Actionable Viral Blueprint",
                description: "No more guesswork. Helixar delivers clear, data-backed explanations of why content performs. Understand the 'style DNA' of top creators, gain precise insights into what truly resonates, and apply proven strategies to engineer your next viral hit.",
                icon: "📊"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card text-center h-full">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <div className="text-warm-gold font-bold text-2xl mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-pure-white mb-4">{step.title}</h3>
                  <p className="text-medium-grey">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-warm-gold" size={32} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Benefits & Outcomes */}
      <section className="py-20 bg-gray-900/50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Unlock Your{' '}
              <span className="text-gradient">Viral Potential</span>
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Whether you're building a personal brand or scaling client campaigns, 
              Helixar delivers the precise intelligence you need to dominate short-form video.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                metric: "3.2x",
                label: "Average Engagement Increase",
                description: "Content optimized with Helixar sees significantly higher engagement rates."
              },
              {
                icon: Users,
                metric: "2.8x",
                label: "Audience Growth",
                description: "Faster audience growth through data-driven content optimization."
              },
              {
                icon: Zap,
                metric: "60%",
                label: "Time Saved",
                description: "Reduce content creation time with clear, actionable insights."
              },
              {
                icon: Target,
                metric: "85%",
                label: "Success Rate",
                description: "Content creators see consistent improvement in performance."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-warm-gold" size={32} />
                </div>
                <div className="text-3xl font-bold text-warm-gold mb-2">{benefit.metric}</div>
                <h3 className="text-lg font-semibold text-pure-white mb-3">{benefit.label}</h3>
                <p className="text-medium-grey text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Social Proof / Testimonials */}
      <section className="py-20 bg-deep-charcoal">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Don't Take Our{' '}
              <span className="text-gradient">Word For It</span>
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              See how Helixar is empowering creators and agencies to redefine their content strategy 
              and achieve unprecedented viral reach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Helixar completely changed how I approach my Reels. I'm hitting new viewership records, and I finally understand why my content resonates. It's like having a viral strategist in my pocket.",
                author: "Sarah Chen",
                role: "Viral Creator",
                rating: 5
              },
              {
                quote: "We've integrated Helixar into our client workflow, and the insights are unparalleled. Our pitch decks are stronger, and our clients are seeing consistent, data-backed growth. It's a game-changer for scaling content strategy.",
                author: "Marcus Rodriguez",
                role: "Founder, Viral Agency",
                rating: 5
              },
              {
                quote: "The blueprint approach is genius. I went from guessing what works to knowing exactly why content performs. My engagement rates have never been higher, and I'm creating content with confidence.",
                author: "Emily Watson",
                role: "Content Strategist",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-warm-gold fill-current" size={20} />
                  ))}
                </div>
                <blockquote className="text-medium-grey mb-6 italic text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-pure-white">{testimonial.author}</div>
                  <div className="text-sm text-medium-grey">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final Call to Action */}
      <section className="py-20 bg-gradient-to-br from-warm-gold/10 to-transparent">
        <div className="container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pure-white mb-6">
              Ready to Unlock Your{' '}
              <span className="text-gradient">Viral Blueprint</span>?
            </h2>
            <p className="text-xl text-medium-grey mb-8">
              Experience the power of AI-driven insights for free. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 group">
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link href="/pricing" className="btn-secondary text-lg px-8 py-4">
                Explore Pricing Plans
              </Link>
            </div>
            <p className="text-sm text-medium-grey mt-4">
              Access the only 'content brain' that truly dissects virality for actionable growth
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 