import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "They understood our vision and turned it into a beautiful website. Looking forward to working with them again",
    author: "Barkavi",
    role: "Entrepreneur",
    rating: 4,
    initial: "B",
    color: "from-blue-500 to-cyan-500",
  },
  {
    text: "The website design was professional and user-friendly. Even though they are a growing company, their dedication and communication were excellent",
    author: "Mohan",
    role: "Small Business Owner",
    rating: 4.5,
    initial: "M",
    color: "from-teal-500 to-green-500",
  },
  {
    text: "Our online presence improved significantly after working with Samsee Tech Solution. The team provided great support throughout the entire process",
    author: "Rahul",
    role: "Entrepreneur",
    rating: 5,
    initial: "R",
    color: "from-purple-500 to-pink-500",
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
    <span className="text-gray-400 text-xs ml-2">{rating}.0</span>
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused && isInView) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from the businesses we have helped grow digitally.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Active Card */}
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-2xl p-8 md:p-10 shadow-2xl"
          >
            {/* Quote icon */}
            <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-6">
              <Quote className="w-5 h-5 text-primary-blue" />
            </div>

            {/* Text */}
            <p className="text-gray-200 text-lg leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center shadow-lg`}>
                  <span className="font-display font-black text-white text-lg">{testimonials[current].initial}</span>
                </div>
                <div>
                  <p className="font-bold text-white">{testimonials[current].author}</p>
                  <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
              <StarRating rating={testimonials[current].rating} />
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary-blue" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-xl bg-primary-blue/80 flex items-center justify-center text-white hover:bg-primary-blue transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;