import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Code, DollarSign, Clock, Headphones } from 'lucide-react'

const whyUs = [
  { icon: Lightbulb, title: 'Creative & Innovative', desc: 'Unique designs that stand out from the crowd and capture your brand identity.', color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20', glow: 'hover:shadow-yellow-400/10' },
  { icon: Code, title: 'Modern Technologies', desc: 'Built with React, Node.js, Python, and cutting-edge tools for peak performance.', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20', glow: 'hover:shadow-blue-400/10' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Premium quality at startup-friendly prices. No hidden costs.', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20', glow: 'hover:shadow-green-400/10' },
  { icon: Clock, title: 'Fast Delivery', desc: 'We respect your time. Quick turnaround without compromising quality.', color: 'text-orange-400', bg: 'bg-orange-400/10 border-orange-400/20', glow: 'hover:shadow-orange-400/10' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Always here to help. Post-launch support included in every package.', color: 'text-teal-400', bg: 'bg-teal-400/10 border-teal-400/20', glow: 'hover:shadow-teal-400/10' },
]

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-bg-dark via-[#0B1225] to-bg-dark overflow-hidden">

      {/* Grid decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.025]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#1F6FEB" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Our Advantages</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Why Choose <span className="gradient-text">Us?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine expertise, passion, and cutting-edge technology to deliver results that exceed expectations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {whyUs.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative bg-white/[0.04] backdrop-blur-sm border ${item.bg} rounded-2xl p-6 text-center transition-all duration-300 shadow-xl hover:shadow-2xl ${item.glow} cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl border ${item.bg} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${item.color}`} />
                </div>

                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs