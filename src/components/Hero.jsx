import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './ui/Button'
import logo from '../assets/Samsee (1).png'
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Clock3 } from 'lucide-react'

// ── Cycling words for headline ──────────────────────────────────────────────
const cycleWords = ['High-Converting', 'Stunning', 'SEO-Ready', 'Fast-Loading', 'Revenue-Driving']

const CyclingWord = () => {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % cycleWords.length), 2500)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="inline-block overflow-hidden" style={{ minWidth: '11ch' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={cycleWords[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="inline-block gradient-text"
        >
          {cycleWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// Floating animated orbs
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(31,111,235,0.18) 0%, transparent 70%)',
        top: '-10%',
        right: '-5%',
      }}
      animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute w-[400px] h-[400px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(15,185,177,0.14) 0%, transparent 70%)',
        bottom: '5%',
        left: '-5%',
      }}
      animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
    />
    <motion.div
      className="absolute w-[250px] h-[250px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        top: '40%',
        right: '25%',
      }}
      animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
  </div>
)

// Animated grid lines background
const GridLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1F6FEB" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

// Abstract tech illustration for right side
const TechIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-primary-blue/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-teal-accent/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Orbiting dots on rings */}
      {[0, 90, 180, 270].map((deg, i) => (
        <motion.div
          key={i}
          className="absolute w-80 h-80 md:w-[420px] md:h-[420px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div
            className="absolute w-3 h-3 rounded-full bg-primary-blue shadow-lg shadow-primary-blue/50"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(160px) translateY(-50%) translateX(-50%)`,
            }}
          />
        </motion.div>
      ))}

      {/* Inner pulsing core */}
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Core glow rings */}
        {[1, 0.6, 0.3].map((opacity, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-primary-blue"
            style={{ inset: `${i * 20}px`, opacity }}
            animate={{ scale: [1, 1.04, 1], opacity: [opacity, opacity * 0.7, opacity] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Logo centered */}
        <motion.img
          src={logo}
          alt="Samsee Tech"
          className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Floating Service Badges */}
      {[
        { label: 'Website Dev', angle: 0,   radius: 220, color: '#1F6FEB', delay: 0 },
        { label: 'UI/UX',       angle: 72,  radius: 210, color: '#0FB9B1', delay: 0.3 },
        { label: 'SEO',         angle: 144, radius: 225, color: '#7C3AED', delay: 0.6 },
        { label: 'Content',     angle: 216, radius: 215, color: '#F59E0B', delay: 0.9 },
        { label: 'Video Edit',  angle: 288, radius: 218, color: '#EC4899', delay: 1.2 },
      ].map(({ label, angle, radius, color, delay }) => {
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius
        return (
          <motion.div
            key={label}
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + delay, duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.15 }}
            className="absolute cursor-default select-none"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
              style={{
                background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                border: `1px solid ${color}66`,
                backdropFilter: 'blur(8px)',
              }}
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-lg whitespace-nowrap"
            >
              <span style={{ color }} className="mr-1.5">●</span>{label}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ── Trust Strip ──────────────────────────────────────────────────────────────
const trustItems = [
  { icon: Clock3,       label: '5-Day Delivery' },
  { icon: ShieldCheck,  label: 'MSME Certified' },
  { icon: CheckCircle2, label: 'Free Consultation' },
]

const TrustStrip = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.5 }}
    className="flex flex-wrap gap-4 mt-6"
  >
    {trustItems.map(({ icon: Icon, label }) => (
      <div key={label} className="flex items-center gap-2">
        <Icon size={14} className="text-teal-accent flex-shrink-0" />
        <span className="text-gray-400 text-sm font-medium">{label}</span>
      </div>
    ))}
  </motion.div>
)

const Hero = ({
  title = "Samsee Tech Solution",
  tagline = "Innovate. Create. Elevate.",
  description,
  buttons = true
}) => {
  const ref = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  }
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-20"
    >
      {/* Background layers */}
      <GridLines />
      <FloatingOrbs />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              background: i % 3 === 0 ? '#0FB9B1' : '#1F6FEB',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{ y: [0, -40, 0], x: [0, Math.random() * 20 - 10, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">

          <div className={`grid ${isHome ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-12 lg:gap-20 items-center`}>

            {/* LEFT: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={isHome ? '' : 'text-center max-w-4xl mx-auto'}
            >
              {/* Tag pill */}
              <motion.div variants={itemVariants}>
                <span className="section-tag">✦ Creative Digital Agency</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                variants={itemVariants}
                className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.1] mb-6 mt-4 text-white"
              >
                {isHome ? (
                  <>
                    We Build{' '}
                    <CyclingWord />
                    <br />
                    <span className="text-white">Websites That</span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                      Grow Your Business 🚀
                    </span>
                  </>
                ) : (
                  title
                )}
              </motion.h1>

              {/* Subheading / Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-8"
              >
                {isHome
                  ? 'From UI/UX design to full-stack development and SEO, we turn your ideas into powerful digital experiences.'
                  : tagline}
              </motion.p>

              {/* Description (non-home pages) */}
              {!isHome && description && (
                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mb-10"
                >
                  {description}
                </motion.p>
              )}

              {/* CTA Buttons */}
              {buttons && (
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 flex-wrap"
                >
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="text-base !px-8 !py-4 !rounded-xl shadow-2xl shadow-primary-blue/30"
                  >
                    Get Free Consultation
                    <ArrowRight size={16} />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('portfolio')}
                    className="text-base !px-8 !py-4 !rounded-xl"
                  >
                    <Play size={16} className="fill-current" />
                    View Our Work
                  </Button>
                </motion.div>
              )}

              {/* Trust strip (home only) */}
              {isHome && buttons && <TrustStrip />}

            </motion.div>

            {/* RIGHT: Illustration (home only) */}
            {isHome && (
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="hidden lg:flex items-center justify-center h-[480px]"
              >
                <TechIllustration />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero