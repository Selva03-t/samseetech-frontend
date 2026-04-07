import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Requirement Discussion',
    desc: 'We start by understanding your vision, goals, target audience, and project scope in depth.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    number: '02',
    title: 'Planning & UI Design',
    desc: 'We create detailed wireframes, design mockups and get your approval before development.',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10 border-teal-500/20',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Our engineers build your solution using modern, scalable technologies with best practices.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    number: '04',
    title: 'Testing',
    desc: 'Rigorous quality assurance across all devices and browsers to ensure flawless functionality.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
  {
    number: '05',
    title: 'Launch & Support',
    desc: 'Smooth deployment with ongoing post-launch support to keep your platform running perfectly.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="process" ref={ref} className="relative py-24 bg-gradient-to-b from-[#0B1225] to-bg-dark overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">How We Work</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A proven, structured approach to delivering exceptional digital products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-blue/30 via-teal-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 80 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step number circle — hidden on mobile, centered on desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full bg-bg-dark border-2 border-primary-blue/30 items-center justify-center shadow-lg shadow-primary-blue/10">
                  <span className={`font-display font-black text-sm ${step.color}`}>{step.number}</span>
                </div>

                {/* Mobile number */}
                <div className={`sm:hidden flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border ${step.bg}`}>
                  <span className={`font-display font-black text-sm ${step.color}`}>{step.number}</span>
                </div>

                {/* Card (alternating sides on desktop) */}
                <div className={`w-full md:w-[45%] ${i % 2 === 0 ? 'md:mr-auto md:pl-0 md:pr-12' : 'md:ml-auto md:pl-12 md:pr-0'}`}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`bg-white/[0.04] backdrop-blur-sm border ${step.bg} rounded-2xl p-6 shadow-xl`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${step.color}`} />
                      <h3 className="font-bold text-white text-lg">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process