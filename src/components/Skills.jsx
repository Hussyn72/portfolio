import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 85 },
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "C#", level: 70 },
        { name: "Dart", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "jQuery", level: 80 },
        { name: "Laravel", level: 80 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Jira", level: 75 },
        { name: "Flutter", level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels 
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-effect p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2,
                          ease: "easeOut"
                        }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">
            Additional Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming",
              "RESTful APIs",
              "Microservices",
              "Agile Development",
              "Test-Driven Development",
              "CI/CD",
              "Docker",
              "Linux",
              "Windows",
              "API Integration",
              "Database Optimization",
              "Performance Tuning",
              "Code Review",
              "Technical Documentation"
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="glass-effect px-4 py-2 rounded-full text-sm text-dark-300 hover:text-primary-400 hover:bg-white/10 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills