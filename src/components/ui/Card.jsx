import { motion } from 'framer-motion'

const Card = ({ children, className = '', whileHover = { y: -6 }, ...rest }) => (
  <motion.div
    whileHover={whileHover}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className={`glass-card bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-2xl p-6 shadow-xl ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
)

export default Card