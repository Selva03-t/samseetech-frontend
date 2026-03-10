import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Button from './ui/Button'
import Particles from './Particles'
import logo from '../assets/Samsee (1).png'

const Hero = ({
  title = "Samsee Tech Solution",
  tagline = "Innovate. Create. Elevate.",
  description,
  buttons = true
}) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (

<section
id="home"
ref={ref}
className="relative min-h-screen flex items-center justify-center overflow-hidden"
>

{/* Gradient Background */}
<motion.div
style={{ y }}
className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 to-transparent"
/>

{/* Particle Background */}
<Particles />

{/* Floating Logo Watermark */}
{/* Floating Logo Watermark */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<motion.img
src={logo}
alt="Samsee Tech Logo"
className="w-[700px] md:w-[900px] lg:w-[1100px] opacity-10 object-contain"
animate={{
y: [0, -40, 0],
scale: [1, 1.08, 1]
}}
transition={{
duration: 10,
repeat: Infinity,
ease: "easeInOut"
}}
/>

</div>

{/* Hero Content */}
<div className="container mx-auto px-4 text-center relative z-10">

<motion.div
variants={containerVariants}
initial="hidden"
animate="visible"
className="space-y-6"
>

<motion.h1
variants={itemVariants}
className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white"
>
{title}
</motion.h1>

<motion.p
variants={itemVariants}
className="text-xl sm:text-2xl md:text-3xl font-light mb-6 text-primary-blue"
>
{tagline}
</motion.p>

{description && (

<motion.p
variants={itemVariants}
className="text-lg sm:text-xl md:text-2xl text-gray-text max-w-3xl mx-auto mb-8 px-4"
>
{description}
</motion.p>

)}

{/* Home Page Buttons */}
{buttons && location.pathname === '/' && (

<motion.div
variants={itemVariants}
className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4"
>

<Button
onClick={() => scrollToSection('services')}
className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
>
Get Started
</Button>

<Button
onClick={() => scrollToSection('portfolio')}
className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base bg-transparent border-2 border-primary-blue hover:bg-primary-blue"
>
View Portfolio
</Button>

</motion.div>

)}

{/* Other Page Buttons */}
{buttons && location.pathname !== '/' && (

<motion.div
variants={itemVariants}
className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4"
>

<Button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base">
Get Started
</Button>

<Button className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base bg-transparent border-2 border-primary-blue hover:bg-primary-blue">
View Portfolio
</Button>

</motion.div>

)}

</motion.div>
</div>

</section>
  )
}

export default Hero