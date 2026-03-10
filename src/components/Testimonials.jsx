import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Card from "./ui/Card";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  { text: "They understood our vision and turned it into a beautiful website. Looking forward to working with them again", author: "Barkavi, Enterpreneur", rating: 4 },
  { text: "The website design was professional and user-friendly. Even though they are a growing company, their dedication and communication were excellent", author: "Mohan, Small Business Owner", rating: 4.5 },
  { text: "Our Online presence improved significantly after working with Samsee Tech Solution. The team provided great support", author: "Rahul, Enterpreneur", rating: 5 },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  // AUTO SCROLL
  useEffect(() => {
    if (!pause && isInView) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [pause, isInView]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="relative py-20 bg-bg-dark">
      <div className="container mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >

          {/* SLIDER */}
          <motion.div
            className="flex"
            animate={{ x: `-${current * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">

                <Card className="text-center backdrop-blur-sm bg-deep-tech/30 shadow-xl border border-teal-accent/20">

                  {/* STARS */}
                  <div className="flex justify-center mb-4">
  {[...Array(5)].map((_, i) => (
    <Star
      key={i}
      className={`w-5 h-5 ${
        i < testimonial.rating
          ? "text-yellow-400 fill-yellow-400"
          : "text-gray-500"
      }`}
    />
  ))}
</div>

                  {/* REVIEW */}
                  <p className="text-gray-text mb-4 italic">
                    "{testimonial.text}"
                  </p>

                  {/* AUTHOR */}
                  <p className="font-semibold text-primary-blue">
                    {testimonial.author}
                  </p>

                </Card>

              </div>
            ))}
          </motion.div>

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-blue/80 hover:bg-primary-blue text-white p-3 rounded-full shadow-lg"
          >
            <ArrowLeft size={20} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-blue/80 hover:bg-primary-blue text-white p-3 rounded-full shadow-lg"
          >
            <ArrowRight size={20} />
          </button>

        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;