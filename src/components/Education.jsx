import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="education" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My academic foundation in computer engineering that shaped my technical expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect p-8 rounded-xl hover-lift"
          >
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-primary-600/20 p-4 rounded-xl">
                <GraduationCap size={32} className="text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Engineering - Computer Engineering
                </h3>
                <p className="text-xl text-primary-400 font-semibold mb-4">
                  Anjuman-I-Islam Kalsekar Technical Campus - Mumbai University
                </p>
                
                {/* Details */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-dark-300">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary-400" />
                    <span>Aug 2018 - May 2022</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary-400" />
                    <span>Navi Mumbai, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary-400" />
                    <span>CGPA: 7.53/10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="border-t border-white/10 pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">
                Key Academic Areas
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Data Structures & Algorithms",
                  "Object-Oriented Programming",
                  "Database Management Systems",
                  "Software Engineering",
                  "Computer Networks",
                  "Operating Systems",
                  "Web Technologies",
                  "Mobile Application Development"
                ].map((subject, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-dark-300">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold gradient-text mb-2">4 Years</div>
                  <div className="text-dark-400 text-sm">Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text mb-2">7.53</div>
                  <div className="text-dark-400 text-sm">CGPA out of 10</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text mb-2">2022</div>
                  <div className="text-dark-400 text-sm">Graduation Year</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Gained */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Foundation Skills Acquired
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving",
                "Analytical Thinking",
                "Software Design",
                "System Architecture",
                "Code Optimization",
                "Testing & Debugging",
                "Project Management",
                "Team Collaboration",
                "Technical Documentation",
                "Research & Development"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="glass-effect px-4 py-2 rounded-full text-sm text-dark-300 hover:text-primary-400 hover:bg-white/10 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education