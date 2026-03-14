import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from './ui/Card'
import { User, Code, Layout, Server, Search, FileText } from 'lucide-react'

const team = [
  { name: 'Selva, Arun', role: 'UI/UX Designer', icon: Layout },
  { name: 'Selva', role: 'Full Stack Developer & Tester', icon: Code },
  { name: 'Padmanapan, Prem', role: 'Frontend Developer', icon: Code },
  { name: 'Padmanapan, Arun', role: 'Backend Developer', icon: Server },
  { name: 'Arif, Prem', role: 'SEO Analyst', icon: Search },
  { name: 'Arun, Arif', role: 'Content Writer & Video Editing', icon: FileText },
]

const Team = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member) => {
            const Icon = member.icon

            return (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="h-full p-6 text-center backdrop-blur-sm bg-deep-tech/40 border border-primary-blue/20 hover:border-teal-accent/60 transition-all duration-300 shadow-lg hover:shadow-primary-blue/40">

                  <div className="flex flex-col items-center">

                    <div className="w-14 h-14 bg-primary-blue rounded-full flex items-center justify-center mb-4">
                      <User size={22} className="text-white" />
                    </div>

                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-text text-sm mb-4">{member.role}</p>

                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8 text-teal-accent" />
                    </motion.div>

                  </div>

                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Team