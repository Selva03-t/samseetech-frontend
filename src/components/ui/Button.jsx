import { motion } from 'framer-motion'

const Button = ({ children, className = '', ...props }) => (
  

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-6 py-3 rounded-full bg-gradient-to-r from-primary-blue to-teal-accent text-white font-semibold hover:animate-glow transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue/50 ${className}`}
    {...props}
  >
    {children}
  </motion.button>
)

 

export default Button