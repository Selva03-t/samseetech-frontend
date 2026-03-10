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
  { name: 'Arun, Arif', role: 'Content Writer & Video Vditing', icon: FileText },
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
          {team.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                whileHover={{ rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
                dragElastic={0.2}
              >
                <Card className="h-full flex flex-col justify-between p-6 cursor-grab active:cursor-grabbing">

  <motion.div
    initial={{ rotateX: -90 }}
    animate={{ rotateX: 0 }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    className="flex items-center space-x-4 mb-4 flex-grow"
  >
    <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
      <User size={20} className="text-white" />
    </div>

    <div>
      <h3 className="font-semibold">{member.name}</h3>
      <p className="text-gray-text text-sm">{member.role}</p>
    </div>
  </motion.div>

  <motion.div
    whileHover={{ scale: 1.3, rotate: 180 }}
    className="text-center mt-4"
  >
    <Icon className="w-8 h-8 text-teal-accent mx-auto" />
  </motion.div>

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