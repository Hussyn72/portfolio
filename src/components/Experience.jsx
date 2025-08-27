import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building2, ChevronRight } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: "Software Developer - Full Stack Developer",
      company: "Tsim Communications Pvt Ltd",
      location: "Dadar-Mumbai, India",
      period: "Nov 2022 - Present",
      achievements: [
        "Developed and maintained the Simmis system to manage SIM card activations, deliveries, document verification, and stock management for multiple marketplaces",
        "Built new features and resolved system bugs based on user team requirements, while updating legacy code to enhance performance and maintainability",
        "Integrated Amazon SP-API for 19 marketplaces, automating order downloads, inventory updates, and feedback requests",
        "Migrated from MWS to SP-API for improved efficiency and automated settlement report downloads using AWS SQS",
        "Developed custom scripts for automated email notifications, SIM card activations, and top-up recharges using EliteMobile API",
        "Implemented Shiprocket and Bluedart APIs to automate logistics processes",
        "Managed data using PostgreSQL, optimizing system performance and ensuring accuracy in operations"
      ]
    },
    {
      title: "Software Engineer - Backend Developer",
      company: "Apexon-Adapty Solutions Pvt Ltd",
      location: "Thane-Mumbai, India",
      period: "June 2022 - Oct 2022",
      achievements: [
        "Developed and maintained backend systems, including creating and debugging APIs",
        "Implemented an API to delete selected items from the cart, enhancing user experience",
        "Analyzed and understood existing code architecture for better integration",
        "Collaborated with development and testing teams to create solutions meeting client needs"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            My professional journey in software development, building scalable solutions 
            and driving business growth through technology.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900"></div>
              
              {/* Content */}
              <div className="ml-16 glass-effect p-8 rounded-xl hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-dark-300">
                    <Building2 size={16} className="text-primary-400" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-300">
                    <MapPin size={16} className="text-primary-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <ChevronRight size={16} className="text-primary-400 mt-1 flex-shrink-0" />
                      <p className="text-dark-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience