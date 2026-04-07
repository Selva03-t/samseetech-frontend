import { motion } from 'framer-motion'
import { ShieldCheck, BadgeCheck, Star, Award } from 'lucide-react'

const MSMEBadge = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
    }),
  }

  const trustItems = [
    { icon: ShieldCheck, label: 'Government Verified', color: '#1F6FEB' },
    { icon: BadgeCheck,  label: 'MSME Certified',      color: '#0FB9B1' },
    { icon: Award,       label: 'Quality Assured',      color: '#7C3AED' },
    { icon: Star,        label: 'Client Trusted',       color: '#F59E0B' },
  ]

  return (
    <section className="relative overflow-hidden" style={{ background: '#0F172A' }}>
      {/* Subtle decorative top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #1F6FEB44, #0FB9B144, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {/* Inner glow accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(31,111,235,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 lg:p-12">

            {/* LEFT: Badge graphic */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex-shrink-0 flex flex-col items-center gap-4"
            >
              {/* Animated badge icon */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Glow ring */}
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(31,111,235,0.3) 0%, transparent 70%)',
                    transform: 'scale(1.5)',
                  }}
                />
                {/* Badge circle */}
                <div
                  className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)',
                    boxShadow: '0 0 40px rgba(31,111,235,0.35)',
                  }}
                >
                  <ShieldCheck size={42} className="text-white" strokeWidth={1.5} />
                </div>
              </motion.div>

              {/* Govt. badge pill */}
              <motion.div
                custom={0.5}
                variants={fadeUp}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)',
                  boxShadow: '0 4px 20px rgba(31,111,235,0.4)',
                }}
              >
                <span className="text-base">✔</span>
                Govt. of India Registered
              </motion.div>
            </motion.div>

            {/* DIVIDER (desktop) */}
            <div
              className="hidden lg:block w-px self-stretch"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            />

            {/* CENTER: Main text */}
            <div className="flex-1 text-center lg:text-left">
              <motion.p
                custom={1}
                variants={fadeUp}
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ color: '#0FB9B1' }}
              >
                Officially Recognized
              </motion.p>

              <motion.h2
                custom={1.5}
                variants={fadeUp}
                className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight"
              >
                MSME{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #1F6FEB, #0FB9B1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Registered Business
                </span>
              </motion.h2>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-gray-400 text-base leading-relaxed max-w-xl"
              >
                Samsee Tech Solution is officially registered under{' '}
                <span className="text-white font-semibold">MSME (Government of India)</span>, ensuring
                trusted and reliable digital services.
              </motion.p>

              {/* Trust items row */}
              <motion.div
                custom={2.5}
                variants={fadeUp}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6"
              >
                {trustItems.map(({ icon: Icon, label, color }, idx) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.07, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-default"
                    style={{
                      background: `${color}14`,
                      border: `1px solid ${color}33`,
                    }}
                  >
                    <Icon size={15} style={{ color }} />
                    <span className="text-xs font-semibold text-gray-300">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>


          </div>
        </motion.div>
      </div>

      {/* Subtle bottom border gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #0FB9B144, #1F6FEB44, transparent)' }}
      />
    </section>
  )
}

export default MSMEBadge
