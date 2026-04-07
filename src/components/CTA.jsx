import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Rocket, MessageCircle } from 'lucide-react'
import Button from './ui/Button'

const CTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openSAM = () => {
    // Trigger SAM chatbot by dispatching a custom event
    window.dispatchEvent(new CustomEvent('openSAM'))
  }

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-bg-dark to-teal-accent/10" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1F6FEB 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0FB9B1 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#1F6FEB" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-blue to-teal-accent mb-6 shadow-2xl shadow-primary-blue/30"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Let&apos;s Build Your Project{' '}
            <span className="gradient-text">Together 🚀</span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your business online? Let&apos;s start with a free consultation and build something amazing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              className="!text-base !px-8 !py-4 !rounded-xl shadow-2xl shadow-primary-blue/30"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              onClick={openSAM}
              className="!text-base !px-8 !py-4 !rounded-xl"
            >
              <MessageCircle size={18} />
              Talk to SAM
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
