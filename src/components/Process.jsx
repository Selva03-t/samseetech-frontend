import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from './ui/Card'
import { CheckCircle } from 'lucide-react'

const steps = [
  { title: 'Requirement Discussion', desc: 'Understand your vision and goals.', side: 'left' },
  { title: 'Planning & UI Design', desc: 'Create wireframes and designs.', side: 'right' },
  { title: 'Development', desc: 'Build the solution with modern tech.', side: 'left' },
  { title: 'Testing', desc: 'Ensure quality and functionality.', side: 'right' },
  { title: 'Launch & Support', desc: 'Go live with ongoing assistance.', side: 'left' },
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="process" ref={ref} className="py-20 bg-bg-dark relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16 drop-shadow-lg"
        >
          Our Process
        </motion.h2>
        <div className="relative">
          {/* Zigzag line */}
          <motion.svg
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-1/2 transform -translate-x-1/2 w-full h-full"
            viewBox="0 0 100 500"
          >
            <path
              d="M 50 0 L 50 100 L 25 150 L 25 250 L 75 300 L 75 400 L 50 450 L 50 500"
              stroke="#1F6FEB"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </motion.svg>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex ${step.side === 'left' ? 'flex-row-reverse justify-end' : 'justify-start'} items-center gap-8`}
              >
                <motion.div
                  className="w-16 h-16 bg-teal-accent rounded-full flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <Card className={`w-full max-w-md ${step.side === 'left' ? 'ml-auto' : 'mr-auto'} backdrop-blur-sm bg-deep-tech/30 shadow-xl border-primary-blue/20`}>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-text">{step.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process