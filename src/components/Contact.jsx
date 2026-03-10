import { motion, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const plan = params.get("plan")

    if (plan) {
      setFormData((prev) => ({
        ...prev,
        message: plan,
      }))
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.name) newErrors.name = "Name required"
    if (!formData.email) newErrors.email = "Email required"
    if (!formData.phone) newErrors.phone = "Phone required"
    if (!formData.message) newErrors.message = "Message required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('https://samseetech-backend.onrender.com/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})

        if (response.ok) {
          toast.success("Message sent successfully 🚀")
          setFormData({ name: '', email: '', phone: '', message: '' })
        } else {
          toast.error("Failed to send message")
        }
      } catch (error) {
        console.error('Error:', error)
        toast.error("Network error. Try again.")
      }
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, borderColor: '#1F6FEB' },
    error: { scale: 1.01, borderColor: '#EF4444' },
  }

  return (
    <section id="contact" ref={ref} className="relative py-20">

      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.name ? "error" : {}}
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value })
                if (errors.name) setErrors({ ...errors, name: '' })
              }}
              className={`w-full p-3 bg-deep-tech/50 border-2 border-primary-blue/20 rounded-lg text-white focus:outline-none ${errors.name ? 'border-red-500' : ''}`}
            />

            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.email ? "error" : {}}
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
                if (errors.email) setErrors({ ...errors, email: '' })
              }}
              className={`w-full p-3 bg-deep-tech/50 border-2 border-primary-blue/20 rounded-lg text-white focus:outline-none ${errors.email ? 'border-red-500' : ''}`}
            />

            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.phone ? "error" : {}}
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value })
                if (errors.phone) setErrors({ ...errors, phone: '' })
              }}
              className={`w-full p-3 bg-deep-tech/50 border-2 border-primary-blue/20 rounded-lg text-white focus:outline-none ${errors.phone ? 'border-red-500' : ''}`}
            />

            <motion.textarea
              variants={inputVariants}
              whileFocus="focus"
              animate={errors.message ? "error" : {}}
              placeholder="Message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value })
                if (errors.message) setErrors({ ...errors, message: '' })
              }}
              className={`w-full p-3 bg-deep-tech/50 border-2 border-primary-blue/20 rounded-lg text-white focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full p-3 bg-primary-blue rounded-lg font-semibold"
            >
              Send Message
            </motion.button>

          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-4"
          >
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-gray-text"
            >
              Location: Chennai, Tamil Nadu, India
            </motion.p>

            <div className="h-64 bg-deep-tech/50 rounded-lg flex items-center justify-center">
              <p className="text-gray-text">Embedded Google Map Here</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact