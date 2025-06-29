'use client';

import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface EnhancedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  title?: string;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  fullWidth = false,
  title,
}) => {
  const baseClasses = 'relative overflow-hidden font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-deep-charcoal';
  
  const variantClasses = {
    primary: 'bg-warm-gold text-deep-charcoal hover:bg-warm-gold/90 active:bg-warm-gold/80',
    secondary: 'bg-obsidian-black text-pure-white border border-medium-grey hover:bg-obsidian-black/80 hover:border-warm-gold active:bg-obsidian-black/90',
    ghost: 'bg-transparent text-pure-white hover:bg-white/10 active:bg-white/20',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2.5 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const [isShining, setIsShining] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled && variant === 'primary') {
      setIsShining(true);
      setTimeout(() => setIsShining(false), 600);
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.98, y: 1 }}
      onMouseEnter={handleMouseEnter}
      title={title}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${widthClass}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {/* Shine effect overlay */}
      {isShining && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 0.3, 0] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
        />
      )}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default EnhancedButton; 