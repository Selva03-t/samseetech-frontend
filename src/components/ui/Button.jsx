import { motion } from 'framer-motion'

const Button = ({ children, className = '', variant = 'primary', ...props }) => {
  const base = 'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-blue/50 overflow-hidden group'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-blue to-teal-accent text-white shadow-lg hover:shadow-primary-blue/40 hover:shadow-xl',
    outline: 'bg-transparent border-2 border-primary-blue/60 text-white hover:border-primary-blue hover:bg-primary-blue/10',
    ghost: 'bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Shimmer overlay */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </motion.button>
  )
}

export default Button