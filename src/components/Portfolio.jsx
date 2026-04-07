import { motion, useInView } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
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
  },
  {
    title: 'Timesheet & AC Ordering App Design',
    desc: 'Comprehensive time management system with intuitive UI design.',
    tags: ['UI/UX', 'Figma', 'Design'],
    image: 'https://other-levels.com/cdn/shop/products/School-Management-Dashboard-Excel-Solution-for-Education-Analytics-Other-Levels-17235124.png?v=1759938477&width=1440',
    demoUrl: 'https://www.behance.net/gallery/228488773/Timesheet-Application-Design',
    category: 'App Design',
  },
  {
    title: 'Developer Portfolio Website',
    desc: 'Stunning personal portfolio showcasing developer skills and projects.',
    tags: ['React', 'Portfolio', 'Animation'],
    image: 'https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg',
    demoUrl: 'https://arunarumugam.site/',
    category: 'Web Development',
  },
  {
    title: 'Game Accessories ordering website',
    desc: 'Modern e-commerce platform for game accessories with seamless ordering experience.',
    tags: ['React', 'E-commerce', 'UI/UX'],
    image: OIP,
    demoUrl: 'https://e-commerce-gamming-accessories.vercel.app/',
    category: 'Web Development',
  },
]

// ─── Derived category list (auto-updates when you add new projects) ───────────
const ALL = 'All'
const getCategories = (list) => [ALL, ...new Set(list.map((p) => p.category))]

// ─── Single project card ──────────────────────────────────────────────────────
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    onClick={() => window.open(project.demoUrl, '_blank')}
    className="group cursor-pointer flex-shrink-0 w-[300px] sm:w-[340px] rounded-2xl overflow-hidden border border-white/[0.08] hover:border-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
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
        <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
          {project.category}
        </span>
      </div>
      {/* hover icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-5 h-5 text-white" />
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-bold text-white text-[15px] mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-white/[0.06] border border-white/[0.08] rounded-lg text-xs text-gray-400 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of our finest work — each project crafted with precision and purpose.
          </p>
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
            {/* Hide native scrollbar in webkit */}
            <style>{`.portfolio-scroll::-webkit-scrollbar{display:none}`}</style>

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
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-gray-600 text-xs mt-4 sm:hidden"
        >
          ← Swipe to explore →
        </motion.p>

        {/* ── Project count ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-gray-600 text-xs mt-6"
        >
          Showing {filtered.length} of {projects.length} project{projects.length !== 1 ? 's' : ''}
        </motion.p>

      </div>
    </section>
  )
}

export default Portfolio