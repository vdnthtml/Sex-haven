'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock, Check, X } from 'lucide-react'

export default function ResetPassword() {
  const [step, setStep] = useState<'request' | 'reset'>('request')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState<{
    score: number
    label: string
    color: string
  }>({ score: 0, label: '', color: 'gray' })

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})
    
    // Basic validation
    if (!formData.email.trim()) {
      setErrors({ email: 'Email is required' })
      return
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' })
      return
    }
    
    // Handle reset request logic here
    setIsSubmitted(true)
    
    // Simulate email sent - in real app, this would be handled by backend
    setTimeout(() => {
      setStep('reset')
      setIsSubmitted(false)
    }, 2000)
  }

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setErrors({})
    
    // Basic validation
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])/.test(formData.password)) {
      newErrors.password = 'Password must include at least one lowercase letter'
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = 'Password must include at least one uppercase letter'
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must include at least one number'
    } else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
      newErrors.password = 'Password must include at least one symbol (!@#$%^&*)'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Handle password reset logic here
    setIsSubmitted(true)
    
    // Redirect to login after successful reset
    setTimeout(() => {
      window.location.href = '/login'
    }, 2000)
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
    
    // Update password strength for password field
    if (e.target.name === 'password') {
      updatePasswordStrength(e.target.value)
    }
  }

  const updatePasswordStrength = (password: string) => {
    let score = 0
    let label = ''
    let color = 'gray'
    
    if (password.length >= 8) score++
    if (/(?=.*[a-z])/.test(password)) score++
    if (/(?=.*[A-Z])/.test(password)) score++
    if (/(?=.*\d)/.test(password)) score++
    if (/(?=.*[!@#$%^&*])/.test(password)) score++
    
    if (score === 0) {
      label = ''
      color = 'gray'
    } else if (score <= 2) {
      label = 'Weak'
      color = 'red'
    } else if (score <= 3) {
      label = 'Fair'
      color = 'orange'
    } else if (score <= 4) {
      label = 'Good'
      color = 'yellow'
    } else {
      label = 'Strong'
      color = 'green'
    }
    
    setPasswordStrength({ score, label, color })
  }

  const getPasswordStrengthColor = (color: string) => {
    switch (color) {
      case 'red': return 'text-red-500'
      case 'orange': return 'text-orange-500'
      case 'yellow': return 'text-yellow-500'
      case 'green': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  const getPasswordStrengthBarColor = (color: string) => {
    switch (color) {
      case 'red': return 'bg-red-500'
      case 'orange': return 'bg-orange-500'
      case 'yellow': return 'bg-yellow-500'
      case 'green': return 'bg-green-500'
      default: return 'bg-gray-300'
    }
  }

  const passwordsMatch = formData.password && formData.confirmPassword && formData.password === formData.confirmPassword

  return (
    <main className="min-h-screen bg-deep-charcoal flex items-center justify-center">
      <Header />
      
      {/* Reset Password Form */}
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
              {step === 'request' ? 'Reset Your Password' : 'Set Your New Password'}
            </h1>
            <p className="text-medium-grey mt-2">
              {step === 'request' 
                ? 'Enter your account\'s email address below, and we\'ll send you a link to reset your password.'
                : 'Please create a new password for your account. Ensure it\'s strong and unique.'
              }
            </p>
          </div>

          {step === 'request' ? (
            /* Request Reset Form */
            <form onSubmit={handleRequestReset} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pure-white mb-2">
                  Email Address
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
                    disabled={isSubmitted}
                    className={`w-full pl-10 pr-4 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                      errors.email ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                    } ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal ${
                  isSubmitted
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-warm-gold text-deep-charcoal hover:bg-yellow-400'
                }`}
              >
                {isSubmitted ? 'Sending...' : 'Send Reset Link'}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-green-900/50 border border-green-700 rounded-lg"
                >
                  <Check className="text-green-400 mx-auto mb-2" size={24} />
                  <p className="text-green-300 text-sm">
                    Reset link sent! Check your email and click the link to continue.
                  </p>
                </motion.div>
              )}

              {/* Back to Login Link */}
              <div className="text-center pt-4">
                <p className="text-pure-white">
                  Remembered your password?{' '}
                  <Link 
                    href="/login"
                    className="text-warm-gold hover:text-yellow-400 font-medium transition-colors"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </form>
          ) : (
            /* Set New Password Form */
            <form onSubmit={handlePasswordReset} className="space-y-4">
              {/* New Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-pure-white mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your new password"
                    required
                    disabled={isSubmitted}
                    className={`w-full pl-10 pr-12 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                      errors.password ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                    } ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-medium-grey hover:text-pure-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-medium-grey">Password strength:</span>
                      <span className={getPasswordStrengthColor(passwordStrength.color)}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthBarColor(passwordStrength.color)}`}
                        style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                {/* Password Requirements */}
                <div className="mt-2 text-xs text-medium-grey">
                  <p className="mb-1">Requirements:</p>
                  <ul className="space-y-1">
                    <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-400' : 'text-medium-grey'}`}>
                      {formData.password.length >= 8 ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                      Minimum 8 characters
                    </li>
                    <li className={`flex items-center ${/(?=.*[a-z])/.test(formData.password) ? 'text-green-400' : 'text-medium-grey'}`}>
                      {/(?=.*[a-z])/.test(formData.password) ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                      At least one lowercase letter
                    </li>
                    <li className={`flex items-center ${/(?=.*[A-Z])/.test(formData.password) ? 'text-green-400' : 'text-medium-grey'}`}>
                      {/(?=.*[A-Z])/.test(formData.password) ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                      At least one uppercase letter
                    </li>
                    <li className={`flex items-center ${/(?=.*\d)/.test(formData.password) ? 'text-green-400' : 'text-medium-grey'}`}>
                      {/(?=.*\d)/.test(formData.password) ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                      At least one number
                    </li>
                    <li className={`flex items-center ${/(?=.*[!@#$%^&*])/.test(formData.password) ? 'text-green-400' : 'text-medium-grey'}`}>
                      {/(?=.*[!@#$%^&*])/.test(formData.password) ? <Check size={12} className="mr-1" /> : <X size={12} className="mr-1" />}
                      At least one symbol (!@#$%^&*)
                    </li>
                  </ul>
                </div>
                
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-pure-white mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your new password"
                    required
                    disabled={isSubmitted}
                    className={`w-full pl-10 pr-12 py-3 bg-deep-charcoal border rounded-lg focus:outline-none transition-colors text-pure-white placeholder-medium-grey ${
                      errors.confirmPassword ? 'border-red-500' : 'border-medium-grey focus:border-warm-gold'
                    } ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-medium-grey hover:text-pure-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Match Indicator */}
                {formData.confirmPassword && (
                  <div className="mt-1 flex items-center text-xs">
                    {passwordsMatch ? (
                      <span className="text-green-400 flex items-center">
                        <Check size={12} className="mr-1" />
                        Passwords match
                      </span>
                    ) : (
                      <span className="text-red-500 flex items-center">
                        <X size={12} className="mr-1" />
                        Passwords do not match
                      </span>
                    )}
                  </div>
                )}
                
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal ${
                  isSubmitted
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    : 'bg-warm-gold text-deep-charcoal hover:bg-yellow-400'
                }`}
              >
                {isSubmitted ? 'Updating...' : 'Set Password'}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center p-4 bg-green-900/50 border border-green-700 rounded-lg"
                >
                  <Check className="text-green-400 mx-auto mb-2" size={24} />
                  <p className="text-green-300 text-sm">
                    Password updated successfully! Redirecting to login...
                  </p>
                </motion.div>
              )}

              {/* Back to Login Link */}
              <div className="text-center pt-4">
                <Link 
                  href="/login"
                  className="text-medium-grey hover:text-warm-gold text-sm transition-colors underline"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </main>
  )
} 