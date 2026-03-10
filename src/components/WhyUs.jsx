import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Code, DollarSign, Clock, Headphones } from 'lucide-react'
import Card from './ui/Card'

const whyUs = [
  { icon: Lightbulb, title: 'Creative & Innovative', desc: 'Unique designs that stand out.' },
  { icon: Code, title: 'Modern Technologies', desc: 'MERN, React, Python, Java.' },
  { icon: DollarSign, title: 'Affordable Pricing', desc: 'Tailored for startups.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround times.' },
  { icon: Headphones, title: 'Dedicated Support', desc: 'Always here to help.' },
]

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, rotate: -10, y: 20 },
    visible: (i) => ({
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: i * 0.05,
      },
    }),
  }

  return (
    <section ref={ref} className="relative py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Us?
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
         className="grid md:grid-cols-5 gap-8 items-stretch"
        >
          {whyUs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={childVariants}
              >
               <Card
  layout
  className="h-full flex flex-col items-center text-center p-6"
  whileHover={{ rotateY: 5 }}
>

  <motion.div
    whileHover={{ scale: 1.2 }}
    className="mb-4 flex justify-center"
  >
    <Icon className="w-8 h-8 text-light-cyan" />
  </motion.div>

  <h3 className="font-semibold mb-2">{item.title}</h3>

  <p className="text-gray-text text-sm flex-grow">
    {item.desc}
  </p>

</Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs