import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Code, Layout, Server, Search, FileText, Linkedin, Github } from 'lucide-react'

const team = [
  { name: 'Selva, Arun', role: 'UI/UX Designer', icon: Layout, initials: 'SA', color: 'from-blue-500 to-cyan-500' },
  { name: 'Selva', role: 'Full Stack Developer & Tester', icon: Code, initials: 'SV', color: 'from-purple-500 to-blue-500' },
  { name: 'Padmanapan, Prem', role: 'Frontend Developer', icon: Code, initials: 'PP', color: 'from-teal-500 to-green-500' },
  { name: 'Padmanapan, Arun', role: 'Backend Developer', icon: Server, initials: 'PA', color: 'from-orange-500 to-red-500' },
  { name: 'Arif, Prem', role: 'SEO Analyst', icon: Search, initials: 'AP', color: 'from-yellow-500 to-orange-500' },
  { name: 'Arun, Arif', role: 'Content Writer & Video Editing', icon: FileText, initials: 'AA', color: 'from-pink-500 to-purple-500' },
]

const Team = () => {
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
    <section ref={ref} className="relative py-24 bg-bg-dark overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-teal-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">The People Behind</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] hover:border-primary-blue/30 rounded-2xl p-6 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-blue/5"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-5">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <span className="font-display font-black text-2xl text-white">{member.initials}</span>
                    </div>
                    {/* Online dot */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-teal-accent rounded-full border-2 border-bg-dark flex items-center justify-center">
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </div>
                  </div>

                  <h3 className="font-bold text-white text-base mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Team