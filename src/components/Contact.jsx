import { motion, useInView } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Mail, Phone, MapPin, Send, MessageSquare, Copy, Check } from 'lucide-react'

// ── Floating WhatsApp Button ─────────────────────────────────────────────────
const WhatsAppFloat = () => {
  const waMessage = encodeURIComponent("Hi! I'm interested in your services. Can we connect?")
  const waUrl = `https://wa.me/919025370797?text=${waMessage}`

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 flex items-center justify-center p-3.5 rounded-full text-white shadow-2xl"
      style={{
        bottom: '1.5rem',
        left: '1.5rem',
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 8px 32px rgba(37,211,102,0.45)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{ background: 'rgba(37,211,102,0.35)' }}
      />
      {/* WhatsApp SVG icon */}
      <span className="relative flex-shrink-0">
        <svg viewBox="0 0 32 32" width="22" height="22" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.28.64 4.41 1.75 6.22L4 29l7.997-1.72A12.94 12.94 0 0 0 16.003 27c6.63 0 11.997-5.372 11.997-12.002C28 8.373 22.633 3 16.003 3Zm6.67 16.85c-.278.781-1.63 1.494-2.226 1.557-.567.06-1.1.282-3.71-.775-3.14-1.26-5.15-4.47-5.307-4.676-.154-.207-1.254-1.667-1.254-3.18 0-1.514.793-2.258 1.074-2.565.282-.307.614-.384.819-.384l.588.011c.189.009.44-.073.69.525.256.613.868 2.12.944 2.274.076.153.127.334.026.54-.1.208-.152.336-.3.52-.148.183-.312.41-.447.55-.148.153-.302.319-.13.628.172.31.766 1.263 1.644 2.047 1.13 1.006 2.083 1.317 2.393 1.467.31.152.491.127.672-.076.181-.203.775-.905 1.18-.307zM16.003 5.02c5.51 0 9.98 4.468 9.98 9.983 0 5.514-4.47 9.982-9.98 9.982a9.953 9.953 0 0 1-5.02-1.36l-.36-.21-3.74.805.822-3.65-.233-.375A9.946 9.946 0 0 1 6.02 15c0-5.515 4.47-9.98 9.983-9.98Z"/>
        </svg>
      </span>

    </motion.a>
  )
}

// ── Copy-to-clipboard helper ─────────────────────────────────────────────────
const CopyButton = ({ value }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={handleCopy}
      className="ml-auto p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all"
      aria-label="Copy"
    >
      {copied ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
    </button>
  )
}

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const plan = params.get("plan")
    if (plan) setFormData((prev) => ({ ...prev, message: plan }))
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
      setLoading(true)
      try {
        const response = await fetch("https://samseetech-backend.onrender.com/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        })
        const data = await response.json()
        if (response.ok) {
          toast.success("Message sent successfully 🚀")
          setFormData({ name: "", email: "", phone: "", message: "" })
        } else {
          toast.error(data.message || "Failed to send message")
        }
      } catch {
        toast.error("Network error. Try again.")
      } finally {
        setLoading(false)
      }
    }
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 90253 70797', href: 'tel:+919025370797', copyValue: '+919025370797' },
    { icon: Mail, label: 'Email', value: 'info.samseetech@gmail.com', href: 'mailto:info.samseetech@gmail.com', copyValue: 'info.samseetech@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', href: null, copyValue: null },
  ]

  const inputClass = (field) =>
    `w-full px-4 py-3.5 bg-white/[0.05] border rounded-xl text-white placeholder-gray-500 text-sm transition-all duration-300 focus:outline-none focus:bg-white/[0.08] focus:border-primary-blue/60 ${
      errors[field] ? 'border-red-500/50 bg-red-500/5' : 'border-white/[0.08]'
    }`

  return (
    <>
      {/* Floating WhatsApp */}
      <WhatsAppFloat />

      <section id="contact" ref={ref} className="relative py-24 bg-gradient-to-b from-[#0B1225] to-bg-dark overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-teal-accent/30 to-transparent" />

        <Toaster position="top-right" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="section-tag">Let&apos;s Connect</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 shadow-xl space-y-5">

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-primary-blue" />
                  </div>
                  <h3 className="font-bold text-white">Send us a message</h3>
                </div>

                {/* Name & Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({ ...errors, name: '' }) }}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({ ...errors, email: '' }) }}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); if (errors.phone) setErrors({ ...errors, phone: '' }) }}
                    className={inputClass('phone')}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    placeholder="Tell us about your project... *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (errors.message) setErrors({ ...errors, message: '' }) }}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-primary-blue to-teal-accent rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary-blue/30 transition-all duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* RIGHT: Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Contact info cards */}
              {contactInfo.map((info) => {
                const Icon = info.icon
                const Content = (
                  <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] hover:border-primary-blue/30 rounded-xl p-5 transition-all duration-300 group">
                    <div className="w-11 h-11 rounded-xl bg-primary-blue/10 border border-primary-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 text-xs font-medium mb-0.5">{info.label}</p>
                      <p className="text-white text-sm font-medium truncate">{info.value}</p>
                    </div>
                    {info.copyValue && <CopyButton value={info.copyValue} />}
                  </div>
                )
                return info.href ? (
                  <a key={info.label} href={info.href}>{Content}</a>
                ) : (
                  <div key={info.label}>{Content}</div>
                )
              })}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5451.365606926999!2d80.17363502326864!3d13.064808471924081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261006f6b1bb7%3A0x74c12b9b909dc24a!2sMathuravayal!5e0!3m2!1sen!2sin!4v1773231626872!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Samsee Tech Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact