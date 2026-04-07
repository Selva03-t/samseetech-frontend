import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import iot from '../assets/Iot.png'
import OIP from '../assets/OIP.jpg'

// ─────────────────────────────────────────────────────────────────────────────
// ADD NEW PROJECTS HERE — just push a new object to the array.
// Required fields: title, desc, tags (array), image, demoUrl, category
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    title: 'IoT Devices Ordering Website',
    desc: 'Modern e-commerce platform for IoT devices with seamless ordering experience.',
    tags: ['React', 'E-commerce', 'UI/UX'],
    image: iot,
    demoUrl: 'https://aruniotdevices.netlify.app/',
    category: 'Web Development',
    result: 'Live & Selling',
  },
  {
    title: 'Timesheet & AC Ordering App Design',
    desc: 'Comprehensive time management system with intuitive UI design.',
    tags: ['UI/UX', 'Figma', 'Design'],
    image: 'https://other-levels.com/cdn/shop/products/School-Management-Dashboard-Excel-Solution-for-Education-Analytics-Other-Levels-17235124.png?v=1759938477&width=1440',
    demoUrl: 'https://www.behance.net/gallery/228488773/Timesheet-Application-Design',
    category: 'App Design',
    result: 'Client Approved',
  },
  {
    title: 'Developer Portfolio Website',
    desc: 'Stunning personal portfolio showcasing developer skills and projects.',
    tags: ['React', 'Portfolio', 'Animation'],
    image: 'https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg',
    demoUrl: 'https://arunarumugam.site/',
    category: 'Web Development',
    result: '100% Responsive',
  },
  {
    title: 'Game Accessories Ordering Website',
    desc: 'Modern e-commerce platform for game accessories with seamless ordering experience.',
    tags: ['React', 'E-commerce', 'UI/UX'],
    image: OIP,
    demoUrl: 'https://e-commerce-gamming-accessories.vercel.app/',
    category: 'Web Development',
    result: 'Deployed Live',
  },
]

// ─── Derived category list (auto-updates when you add new projects) ───────────
const ALL = 'All'
const getCategories = (list) => [ALL, ...new Set(list.map((p) => p.category))]

// Category accent colors
const catColors = {
  'Web Development': '#1F6FEB',
  'App Design': '#7C3AED',
  'SEO': '#0FB9B1',
  'All': '#1F6FEB',
}

// ─── Single project card ──────────────────────────────────────────────────────
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    className="group flex-shrink-0 w-[300px] sm:w-[340px] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
    style={{ background: 'rgba(255,255,255,0.04)' }}
  >
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* category pill */}
      <div className="absolute top-4 left-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm"
          style={{ background: `${catColors[project.category] || '#1F6FEB'}cc` }}
        >
          {project.category}
        </span>
      </div>

      {/* Result badge */}
      <div className="absolute top-4 right-4">
        <span className="px-2.5 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
          ✓ {project.result}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-bold text-white text-[15px] mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{project.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.08] rounded-lg text-xs text-gray-400 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Project CTA */}
      <motion.a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
        style={{ background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)' }}
      >
        <ExternalLink size={14} />
        View Project
        <ArrowRight size={14} />
      </motion.a>
    </div>
  </motion.div>
)

// ─── Main Component ───────────────────────────────────────────────────────────
const Portfolio = () => {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  const [activeCategory, setActiveCategory] = useState(ALL)
  const categories = getCategories(projects)

  const filtered =
    activeCategory === ALL
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  // ── Arrow scroll ──────────────────────────────────────────────────────────
  const scroll = useCallback((dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }, [])

  // ── Drag-to-scroll ────────────────────────────────────────────────────────
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX
    scrollStart.current = scrollRef.current.scrollLeft
    scrollRef.current.style.cursor = 'grabbing'
    scrollRef.current.style.userSelect = 'none'
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    const dx = e.pageX - startX.current
    scrollRef.current.scrollLeft = scrollStart.current - dx
  }
  const onMouseUp = () => {
    isDragging.current = false
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
      scrollRef.current.style.userSelect = ''
    }
  }

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0B1225 0%, #0F172A 100%)' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="section-tag">Our Work</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #1F6FEB, #0FB9B1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Portfolio
            </span>
          </h2>
        
        </motion.div>

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                activeCategory === cat
                  ? {
                      background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)',
                      color: '#fff',
                      boxShadow: '0 4px 18px rgba(31,111,235,0.35)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      color: '#9ca3af',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Scroll Row + Arrows ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-200 hover:scale-110 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{
              cursor: 'grab',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-200 hover:scale-110 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* ── Scroll hint (mobile) ── */}
      

        {/* ── See All Work CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-10"
        >
         
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfd4SLortk8j7J3P2zh67vVXzIHqaV1ZbWoSRoRReqqNB83lQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-primary-blue/40 hover:bg-primary-blue/5 text-sm font-medium transition-all duration-300"
          >
            Start a Project Like These
            <ArrowRight size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio