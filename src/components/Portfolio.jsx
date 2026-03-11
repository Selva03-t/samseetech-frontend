import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from './ui/Card'
import iot from '../assets/Iot.png'

const projects = [
  { 
    title: 'IoT Devices Ordering Website', 
    desc: 'Delicious digital presence for local bakery.', 
    image: iot,
    demoUrl: 'https://aruniotdevices.netlify.app/'  // Update with real demo
  },
  { 
    title: 'Timesheet Application & Ac Ordering App Design', 
    desc: 'Time management system.', 
    image: 'https://other-levels.com/cdn/shop/products/School-Management-Dashboard-Excel-Solution-for-Education-Analytics-Other-Levels-17235124.png?v=1759938477&width=1440',
    demoUrl: 'https://www.behance.net/gallery/228488773/Timesheet-Application-Design'
  },
  { 
    title: 'Developer Portfolio Website', 
    desc: 'Showcasing developer skills.', 
    image: 'https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg',
    demoUrl: 'https://arunarumugam.site/'
  },
]

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  }

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16 drop-shadow-lg"
        >
          Our Portfolio
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => window.open(project.demoUrl, '_blank')}  // Click to external site
            >
              <Card className="relative h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary-blue/30">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-all group-hover:scale-110 duration-500"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  whileHover="visible"
                  className="absolute inset-0 bg-primary-blue/70 flex items-end p-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-text">{project.desc}</p>
                  </div>
                </motion.div>
                <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-tech to-transparent">
                  <h3 className="font-semibold">{project.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio