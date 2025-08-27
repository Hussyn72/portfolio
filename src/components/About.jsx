import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Smartphone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Expert in both frontend and backend technologies with 3+ years of experience"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in PostgreSQL, MySQL, and MongoDB for optimal data solutions"
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      description: "Experienced with AWS services including SQS, SP-API, and cloud deployment"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Flutter and Dart expertise for cross-platform mobile applications"
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer based in Mumbai, India, with a strong foundation in 
            computer engineering and hands-on experience in building scalable web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary-400">My Journey</h3>
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                With a Bachelor's degree in Computer Engineering from Anjuman-I-Islam Kalsekar Technical Campus 
                and a CGPA of 7.53/10, I've built a solid foundation in software development principles.
              </p>
              <p>
                Currently working as a Full Stack Developer at Tsim Communications Pvt Ltd, I've been instrumental 
                in developing and maintaining the Simmis system, integrating Amazon SP-API for 19 marketplaces, 
                and automating critical business processes using AWS services.
              </p>
              <p>
                My experience spans from backend API development to frontend user interfaces, mobile app development, 
                and cloud infrastructure management. I'm passionate about writing clean, efficient code and 
                solving complex technical challenges.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-600/20 p-3 rounded-lg">
                    <highlight.icon size={24} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      {highlight.title}
                    </h4>
                    <p className="text-dark-300 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "3+", label: "Years Experience" },
            { number: "19", label: "Marketplaces Integrated" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Problem Solver" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-dark-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About