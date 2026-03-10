import { motion } from 'framer-motion'

const Card = ({ children, className = '', whileHover = { y: -5 } }) => (
  <motion.div
    whileHover={whileHover}
    className={`bg-deep-tech/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-blue/20 ${className}`}
  >
    {children}
  </motion.div>
)

export default Card