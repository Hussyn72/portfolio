import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Mohd Husain delivered exceptional work on our e-commerce platform. His expertise in React and Node.js helped us achieve a 40% increase in performance. Highly recommended!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "David Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Working with Mohd was a game-changer for our startup. His full-stack skills and AWS expertise helped us scale from 1K to 100K users seamlessly. Outstanding developer!",
      rating: 5,
      project: "Scalable Web Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Developer",
      company: "InnovateLabs",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Mohd's attention to detail and problem-solving skills are remarkable. He integrated complex APIs and delivered clean, maintainable code. A true professional!",
      rating: 5,
      project: "API Integration System"
    },
    {
      id: 4,
      name: "Michael Thompson",
      role: "Business Owner",
      company: "Digital Solutions Inc",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Mohd transformed our legacy system into a modern, responsive application. His expertise in PHP and PostgreSQL saved us months of development time.",
      rating: 5,
      project: "Legacy System Modernization"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Project Manager",
      company: "CloudTech Innovations",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Exceptional work on our mobile app development. Mohd's Flutter skills and cross-platform expertise delivered exactly what we needed, on time and within budget.",
      rating: 5,
      project: "Mobile Application"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            What clients say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-effect p-8 md:p-12 rounded-2xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Client Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500/30">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <Quote size={32} className="text-primary-400 mb-4 mx-auto md:mx-0" />
                      <p className="text-lg text-dark-200 leading-relaxed mb-6">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-center md:justify-start mb-2">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-400 font-medium mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-dark-400 text-sm mb-2">
                        {testimonials[currentIndex].company}
                      </p>
                      <div className="inline-block bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm">
                        Project: {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-primary-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <ChevronRight size={24} className="text-primary-400" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 scale-125'
                    : 'bg-dark-600 hover:bg-dark-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials