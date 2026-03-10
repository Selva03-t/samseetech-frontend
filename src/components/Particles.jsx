import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const Particles = () => {
  const { scrollYProgress } = useScroll()
  const particles = Array.from({ length: 30 }, (_, i) => i)

  useEffect(() => {
    // Optional: Log scroll for debugging, remove in prod
  }, [scrollYProgress])

  return (
    <div className="absolute inset-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary-blue rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [-10, 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
          styles={{
            scale: useTransform(scrollYProgress, [0, 1], [1, 0.5]),
          }}
        />
      ))}
    </div>
  )
}

export default Particles