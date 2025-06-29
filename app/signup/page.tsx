'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, User, Check } from 'lucide-react'

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})
    
    // Basic validation
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (!agreedToTerms) {
      newErrors.terms = 'You must agree to the terms and privacy policy'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Handle signup logic here
    console.log('Signup attempt:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const handleSocialSignup = (provider: string) => {
    console.log(`Signing up with ${provider}`)
    // Handle social signup logic here
  }

  return (
    <main className="min-h-screen bg-deep-charcoal flex items-center justify-center">
      <Header />
      
      {/* Signup Form */}
      <div className="w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/50 rounded-2xl border border-gray-700 shadow-2xl p-8"
        >
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-gold rounded-full mb-4">
              <span className="text-deep-charcoal text-2xl font-bold">H</span>
            </div>
            <h1 className="text-2xl font-bold text-pure-white">
              Get Started Free with Helixar
            </h1>
            <p className="text-medium-grey mt-2">
              Unlock your viral blueprint in minutes
            </p>
          </div>

          {/* Social Signup Options */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => handleSocialSignup('Google')}
              className="w-full flex items-center justify-center space-x-3 bg-gray-900/50 border border-gray-700 text-pure-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
            
            <button
              type="button"
              onClick={() => handleSocialSignup('LinkedIn')}
              className="w-full flex items-center justify-center space-x-3 bg-gray-900/50 border border-gray-700 text-pure-white py-3 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="#0077B5" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Sign up with LinkedIn</span>
            </button>
          </div>

          {/* Or Separator */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900/50 text-medium-grey">or</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-pure-white mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className={`w-full pl-10 pr-4 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                    errors.fullName ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pure-white mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  required
                  className={`w-full pl-10 pr-4 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                    errors.email ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-pure-white mb-2">
                Create Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  required
                  className={`w-full pl-10 pr-12 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                    errors.password ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-medium-grey hover:text-pure-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <button
                type="button"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  agreedToTerms 
                    ? 'bg-warm-gold border-warm-gold' 
                    : 'border-medium-grey hover:border-warm-gold'
                }`}
              >
                {agreedToTerms && <Check className="w-3 h-3 text-deep-charcoal" />}
              </button>
              <div className="flex-1">
                <p className="text-sm text-pure-white">
                  I agree to the{' '}
                  <Link href="/terms-of-service" className="text-warm-gold hover:text-yellow-400 underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" className="text-warm-gold hover:text-yellow-400 underline">
                    Privacy Policy
                  </Link>
                </p>
                {errors.terms && (
                  <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-warm-gold text-deep-charcoal py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center pt-6">
            <p className="text-pure-white">
              Already have an account?{' '}
              <Link 
                href="/login"
                className="text-warm-gold hover:text-yellow-400 font-medium transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
} 