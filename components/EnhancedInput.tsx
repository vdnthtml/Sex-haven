'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef, InputHTMLAttributes } from 'react';

interface EnhancedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

const EnhancedInput = forwardRef<HTMLInputElement, EnhancedInputProps>(
  ({ label, error, helperText, fullWidth = false, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      setHasValue(e.target.value.length > 0);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''} ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-pure-white mb-2">
            {label}
          </label>
        )}
        
        <div className="relative">
          <input
            ref={ref}
            {...props}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`
              w-full px-4 py-3 bg-deep-charcoal border border-medium-grey rounded-lg
              text-pure-white placeholder-medium-grey
              focus:outline-none focus:border-warm-gold focus:ring-1 focus:ring-warm-gold
              transition-all duration-200
              ${error ? 'border-alert-red focus:border-alert-red focus:ring-alert-red' : ''}
            `}
          />
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: isFocused ? 1 : 0,
              opacity: isFocused ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-warm-gold origin-left"
          />
        </div>

        {/* Error or helper text */}
        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-2 text-sm ${
              error ? 'text-alert-red' : 'text-medium-grey'
            }`}
          >
            {error || helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

EnhancedInput.displayName = 'EnhancedInput';

export default EnhancedInput; 