import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Bot, ChevronDown, Rocket } from 'lucide-react'

// ─── Predefined Q&A ────────────────────────────────────────────────────────────
const QA = [
  {
    id: 'services',
    question: 'What services do you offer?',
    answer:
      'We offer web design & development, UI/UX design, SEO, social media, content writing, and video editing. We build digital experiences that grow your business. 🚀',
  },
  {
    id: 'pricing',
    question: 'How much does a website cost?',
    answer:
      'Our packages start from ₹4,999 for a basic site, ₹10,000–₹19,999 for a business site, and ₹20,000+ for premium custom builds. Free consultation to find the right fit! 💰',
  },
  {
    id: 'timeline',
    question: 'How long will it take?',
    answer:
      'Most websites are delivered within 5–14 days depending on complexity. We respect your time and always aim to deliver ahead of schedule. ⏱️',
  },
  {
    id: 'seo',
    question: 'Do you provide SEO & digital marketing?',
    answer:
      'Absolutely! We provide full on-page SEO, technical SEO, and digital marketing services to help you rank on Google and attract quality leads. 📈',
  },
  {
    id: 'contact',
    question: 'How can I contact you?',
    answer:
      'You can reach us via WhatsApp at +91 90253 70797, by email at info.samseetech@gmail.com, or just fill the contact form on this page! We reply within hours. 📩',
  },
]

// ─── Generic fallback responses ────────────────────────────────────────────────
const FALLBACKS = [
  "Great question! Our team can give you a precise answer. Feel free to contact us via WhatsApp or email — we're typically lightning-fast with replies. 😊",
  "I'm SAM, Samsee Tech's smart assistant! For specific queries, reach out to us directly via WhatsApp at +91 90253 70797.",
  "Thanks for asking! Let me connect you with our team who can help you best. Hit the contact form or WhatsApp us. 🙌",
  "Hmm, I'd love to give you the full picture here. Our experts can walk you through it — drop us a message anytime!",
]

const getSmartReply = (text) => {
  const lower = text.toLowerCase()
  for (const qa of QA) {
    const keywords = qa.id === 'services'
      ? ['service', 'offer', 'provide', 'do you', 'build', 'make', 'create']
      : qa.id === 'pricing'
      ? ['cost', 'price', 'pricing', 'charge', 'fee', 'rupee', '₹', 'package', 'how much', 'rate']
      : qa.id === 'timeline'
      ? ['time', 'long', 'days', 'week', 'deliver', 'duration', 'fast', 'quick']
      : qa.id === 'seo'
      ? ['seo', 'marketing', 'digital', 'social', 'promote', 'rank', 'google']
      : ['contact', 'reach', 'email', 'whatsapp', 'call', 'phone', 'number']

    if (keywords.some((k) => lower.includes(k))) return qa.answer
  }

  // Greetings
  if (['hi', 'hey', 'hello', 'hii', 'namaste'].some(g => lower.includes(g))) {
    return "Hey there! 👋 I'm SAM, your smart assistant. Ask me anything about Samsee Tech's services, pricing, or how we can help grow your business!"
  }

  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)]
}

// ─── Message bubble ─────────────────────────────────────────────────────────────
const Bubble = ({ msg }) => {
  const isBot = msg.role === 'bot'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}
    >
      {isBot && (
        <div
          className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mr-2 self-end mb-0.5"
          style={{ background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)' }}
        >
          <Bot size={14} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-md ${
          isBot
            ? 'text-gray-100 rounded-bl-sm'
            : 'text-white rounded-br-sm'
        }`}
        style={
          isBot
            ? { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }
            : { background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)' }
        }
      >
        {msg.text}
      </div>
    </motion.div>
  )
}

// ─── Typing indicator ───────────────────────────────────────────────────────────
const TypingIndicator = () => (
  <div className="flex justify-start mb-3">
    <div
      className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mr-2 self-end"
      style={{ background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)' }}
    >
      <Bot size={14} className="text-white" />
    </div>
    <div
      className="px-4 py-3 rounded-2xl rounded-bl-sm"
      style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="flex gap-1.5 items-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ background: '#0FB9B1' }}
            animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  </div>
)

// ─── Main Component ─────────────────────────────────────────────────────────────
const SamAssistant = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 0, role: 'bot', text: "Hey there! 👋 I'm SAM — Samsee Tech's smart assistant. Ready to help you build something amazing! What can I do for you?" },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showQuestions, setShowQuestions] = useState(true)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  // Listen for CTA "Talk to SAM" event
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('openSAM', handler)
    return () => window.removeEventListener('openSAM', handler)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const addBotReply = (text) => {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [...prev, { id: Date.now(), role: 'bot', text }])
    }, 900 + Math.random() * 500)
  }

  const handleQuestion = (qa) => {
    setShowQuestions(false)
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: qa.question }])
    addBotReply(qa.answer)
  }

  const handleFreeConsultation = () => {
    setOpen(false)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setShowQuestions(false)
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: trimmed }])
    setInput('')
    addBotReply(getSmartReply(trimmed))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* ── Floating trigger button ── */}
      <motion.div
        className="fixed z-50"
        style={{ bottom: '1.5rem', right: '1.5rem' }}
        initial={false}
        animate={open ? { scale: 0.85, opacity: 0.8 } : { scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="relative flex items-center gap-3 pl-3 pr-5 py-3 rounded-full text-white font-semibold text-sm shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)',
            boxShadow: '0 8px 32px rgba(31,111,235,0.45)',
          }}
          aria-label="Open SAM chat assistant"
        >
          {/* Pulse ring */}
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ background: 'rgba(31,111,235,0.35)' }}
          />
          <span className="relative text-xl leading-none">🚀</span>
          <span className="relative">Ask SAM</span>
        </motion.button>
      </motion.div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.88, y: 24, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed z-50 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              bottom: '5.5rem',
              right: '1.5rem',
              width: 'min(380px, calc(100vw - 2rem))',
              height: 'min(580px, calc(100vh - 8rem))',
              background: 'rgba(15,23,42,0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #1F6FEBcc, #0FB9B1cc)',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                🚀
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm leading-none">SAM</p>
                <p className="text-blue-100 text-xs mt-0.5">Smart Assistant · Samsee Tech</p>
              </div>
              {/* Online indicator */}
              <div className="flex items-center gap-1.5 mr-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-300 text-xs font-medium">Online</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* ── Messages area ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
              {messages.map((msg) => (
                <Bubble key={msg.id} msg={msg} />
              ))}
              {typing && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* ── Free Consultation quick action ── */}
            <div className="px-4 py-2 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <motion.button
                onClick={handleFreeConsultation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all"
                style={{ background: 'linear-gradient(135deg, rgba(31,111,235,0.25), rgba(15,185,177,0.15))', border: '1px solid rgba(31,111,235,0.3)' }}
              >
                <Rocket size={14} />
                Book a Free Consultation ✨
              </motion.button>
            </div>

            {/* ── Quick questions ── */}
            <AnimatePresence>
              {showQuestions && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-2 flex-shrink-0"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="flex items-center justify-between py-2">
                    <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">
                      Quick Questions
                    </p>
                    <button
                      onClick={() => setShowQuestions(false)}
                      className="text-gray-600 hover:text-gray-400 transition-colors"
                      aria-label="Collapse quick questions"
                    >
                      <ChevronDown size={14} />
                    </button>
                  </div>
                  <div className="flex flex-col gap-1.5 pb-1">
                    {QA.map((qa) => (
                      <motion.button
                        key={qa.id}
                        onClick={() => handleQuestion(qa)}
                        whileHover={{ scale: 1.02, x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-left text-xs px-3 py-2 rounded-xl text-gray-300 hover:text-white transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        💬 {qa.question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Input bar ── */}
            <div
              className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-blue-500/50 transition-colors"
              />
              <motion.button
                onClick={handleSend}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #1F6FEB, #0FB9B1)' }}
                aria-label="Send message"
              >
                <Send size={15} className="text-white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SamAssistant
