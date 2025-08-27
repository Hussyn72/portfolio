import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart, MapPin, User } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A clean and responsive personal website showcasing my skills, projects, and professional experience. Built with modern web technologies for optimal performance and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Clean and modern design",
        "Fully responsive layout",
        "Easy navigation",
        "Quick access to GitHub and LinkedIn profiles",
        "Optimized performance"
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/Hussyn72/portfolio",
      live: "#"
    },
    {
      title: "E-commerce Mobile Application",
      description: "A comprehensive mobile application for purchasing electric goods with an intuitive user interface. Features include cart management, location services, and user profile management.",
      technologies: ["Flutter", "Dart", "Android Studio", "Google Maps API"],
      features: [
        "User-friendly interface for electric goods shopping",
        "Shopping cart with add, update, and remove functionality",
        "Google Maps integration for store locations and delivery",
        "User profile management and order history",
        "Cross-platform compatibility"
      ],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Hussyn72/ecommerce-app",
      live: null
    },
    {
      title: "Simmis System (Professional)",
      description: "Enterprise-level system for managing SIM card operations across multiple marketplaces. Integrated with Amazon SP-API and various logistics providers for complete automation.",
      technologies: ["PHP", "PostgreSQL", "AWS", "Amazon SP-API", "Shiprocket API"],
      features: [
        "SIM card activation and delivery management",
        "Document verification system",
        "Stock management across 19 marketplaces",
        "Automated order processing and inventory updates",
        "Integration with logistics providers",
        "Real-time reporting and analytics"
      ],
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      github: null,
      live: null,
      isWork: true
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            A showcase of my technical projects and professional work, demonstrating 
            my ability to build scalable and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-xl overflow-hidden hover-lift group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <project.icon size={32} className="text-white" />
                  {project.isWork && (
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                      Professional Work
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-dark-700 text-dark-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary-400 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-dark-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 4 && (
                      <li className="text-primary-400 text-sm">
                        +{project.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.isWork && (
                    <div className="flex items-center gap-2 text-dark-400 text-sm">
                      <User size={16} />
                      Proprietary
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-dark-300 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Let's Work Together
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects