import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    text: "They understood our vision and turned it into a beautiful website. The design was spot-on and delivered faster than expected. Looking forward to working with them again!",
    author: "Barkavi",
    role: "Entrepreneur",
    company: "Local Business Owner",
    rating: 4,
    initial: "B",
    color: "from-blue-500 to-cyan-500",
    accentColor: "#1F6FEB",
  },
  {
    text: "The website design was professional and user-friendly. Even though they are a growing company, their dedication and communication were excellent. Highly recommend Samsee Tech!",
    author: "Mohan",
    role: "Small Business Owner",
    company: "Retail Entrepreneur",
    rating: 4.5,
    initial: "M",
    color: "from-teal-500 to-green-500",
    accentColor: "#0FB9B1",
  },
  {
    text: "Our online presence improved significantly after working with Samsee Tech Solution. The team provided great support throughout the entire process and truly went the extra mile.",
    author: "Rahul",
    role: "Entrepreneur",
    company: "Digital Startup Founder",
    rating: 5,
    initial: "R",
    color: "from-purple-500 to-pink-500",
    accentColor: "#7C3AED",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`w-4 h-4 ${
          star <= rating
            ? "text-yellow-400 fill-yellow-400"
            : star - 0.5 <= rating
            ? "text-yellow-400 fill-yellow-400/50"
            : "text-gray-600"
        }`}
      />
    ))}
    <span className="text-gray-400 text-xs ml-2 font-medium">{rating}.0</span>
  </div>
);

const TestimonialCard = ({ testimonial, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="relative bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] hover:border-white/20 rounded-2xl p-7 shadow-xl transition-all duration-500 hover:shadow-2xl flex flex-col h-full"
    style={{ boxShadow: `0 0 0 0 ${testimonial.accentColor}` }}
  >
    {/* Verified badge */}
    <div className="absolute top-5 right-5">
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
        <BadgeCheck size={12} className="text-green-400" />
        <span className="text-green-400 text-[10px] font-semibold">Verified</span>
      </div>
    </div>

    {/* Quote icon */}
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
      style={{ background: `${testimonial.accentColor}18` }}
    >
      <Quote className="w-5 h-5" style={{ color: testimonial.accentColor }} />
    </div>

    {/* Text */}
    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-1">
      &ldquo;{testimonial.text}&rdquo;
    </p>

    {/* Author */}
    <div className="flex items-center justify-between flex-wrap gap-3 mt-auto">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
          <span className="font-display font-black text-white text-base">{testimonial.initial}</span>
        </div>
        <div>
          <p className="font-bold text-white text-sm">{testimonial.author}</p>
          <p className="text-gray-500 text-xs">{testimonial.role} · {testimonial.company}</p>
        </div>
      </div>
      <StarRating rating={testimonial.rating} />
    </div>
  </motion.div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mobileIndex, setMobileIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Mobile auto-cycle
  useEffect(() => {
    if (!paused && isInView) {
      const interval = setInterval(() => {
        setMobileIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused, isInView]);

  return (
    <section id="testimonials" ref={ref} className="relative py-24 bg-gradient-to-b from-bg-dark to-[#0B1225] overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Client Reviews</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4 text-white">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
         
        </motion.div>

        {/* ── Desktop: 3-column grid ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.author} testimonial={t} index={i} isInView={isInView} />
          ))}
        </div>

        {/* ── Mobile: single card carousel ── */}
        <div
          className="md:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            key={mobileIndex}
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <TestimonialCard testimonial={testimonials[mobileIndex]} index={0} isInView={isInView} />
          </motion.div>

          {/* Mobile dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? "w-8 bg-primary-blue" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-sm">4.8 / 5</span>
            <span className="text-gray-500 text-sm">from our clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;