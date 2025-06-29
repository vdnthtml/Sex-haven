'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, MessageCircle, BookOpen, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-deep-charcoal flex items-center justify-center">
      <div className="text-center px-6">
        {/* Subtle Helixar Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="text-pure-white text-2xl font-bold tracking-wider opacity-30">
            HELIXAR
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold text-pure-white mb-6"
        >
          404
        </motion.h1>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold text-pure-white mb-6"
        >
          Uh oh. This page doesn't exist.
        </motion.h2>

        {/* Supporting Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-pure-white mb-12 max-w-2xl mx-auto"
        >
          The page you're looking for might have been moved or doesn't exist. Let's get you back on track.
        </motion.p>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          {/* Primary CTA */}
          <Link
            href="/"
            className="inline-flex items-center bg-warm-gold text-deep-charcoal font-bold py-4 px-8 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Homepage
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Secondary Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/features"
              className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
            >
              <Search className="w-4 h-4 mr-2" />
              Explore Features
            </Link>
            <span className="text-medium-grey">•</span>
            <Link
              href="/use-cases"
              className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              See Use Cases
            </Link>
            <span className="text-medium-grey">•</span>
            <Link
              href="/contact"
              className="flex items-center text-warm-gold hover:text-yellow-400 transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Support
            </Link>
          </div>
        </motion.div>

        {/* Subtle Background Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-warm-gold/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-warm-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-warm-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>
    </main>
  )
} 