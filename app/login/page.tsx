'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useToast } from '@/lib/toast'
import EnhancedInput from '@/components/EnhancedInput'
import EnhancedButton from '@/components/EnhancedButton'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const { signIn, signInWithGoogle, setMessage } = useAuth()
  const { showToast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      await signIn(formData.email, formData.password)
      showToast('Login successful!', 'success')
      // Redirect to dashboard for existing users
      router.push('/app/dashboard')
    } catch (error: any) {
      setError(error.message)
      showToast(error.message, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true)
    setError('')
    
    try {
      await signInWithGoogle()
      showToast('Login successful!', 'success')
      // Redirect to dashboard for existing users
      router.push('/app/dashboard')
    } catch (error: any) {
      setError(error.message)
      showToast(error.message, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (error) setError('')
  }

  return (
    <main className="min-h-screen bg-deep-charcoal flex items-center justify-center">
      <Header />
      
      {/* Login Form */}
      <div className="w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-obsidian-black/50 rounded-2xl border border-medium-grey shadow-2xl p-8 relative overflow-hidden"
        >
          {/* Noise texture background */}
          <div className="absolute inset-0 bg-noise-texture animate-noise-texture opacity-5 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Logo/Brand */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-warm-gold rounded-full mb-4">
                <span className="text-deep-charcoal text-2xl font-bold">H</span>
              </div>
              <h1 className="text-2xl font-bold text-pure-white">
                Welcome Back
              </h1>
              <p className="text-medium-grey mt-2">
                Log in to access your viral blueprints
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-3 bg-alert-red/10 border border-alert-red rounded-lg text-alert-red text-sm">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <EnhancedInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="name@example.com"
                required
                disabled={isSubmitting}
                error={error}
                fullWidth
              />

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-pure-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medium-grey z-10" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-12 py-3 bg-deep-charcoal border border-medium-grey rounded-lg focus:border-warm-gold focus:outline-none transition-colors text-pure-white placeholder-medium-grey disabled:opacity-50"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-medium-grey hover:text-pure-white transition-colors z-10"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link 
                  href="/reset-password"
                  className="text-sm text-medium-grey hover:text-warm-gold transition-colors underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}
              <EnhancedButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="lg"
                fullWidth
              >
                {isSubmitting ? 'Logging In...' : 'Log In'}
              </EnhancedButton>

              {/* Or Separator */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-medium-grey"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-obsidian-black/50 text-medium-grey">or</span>
                </div>
              </div>

              {/* Social Login Options */}
              <div className="space-y-3">
                <EnhancedButton
                  type="button"
                  onClick={handleGoogleSignIn}
                  disabled={isSubmitting}
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="flex items-center justify-center space-x-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Continue with Google</span>
                </EnhancedButton>
              </div>

              {/* Sign Up Link */}
              <div className="text-center pt-4">
                <p className="text-pure-white">
                  Don't have an account?{' '}
                  <Link 
                    href="/signup"
                    className="text-warm-gold hover:text-yellow-400 transition-colors underline"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </main>
  )
} 