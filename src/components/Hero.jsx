import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import AnimatedText from './AnimatedText'
import DownloadResume from './DownloadResume'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-500 to-primary-600 animate-spin" style={{ animationDuration: '3s' }}></div>
              <div className="absolute inset-1 rounded-full bg-dark-900"></div>
              {/* Artistic effects */}
              <div className="absolute inset-2 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20"></div>
                <img 
                  src="/me.png" 
                  alt="Mohd Husain Darji - Software Engineer"
                  className="w-full h-full rounded-full object-cover relative z-10 hover:scale-110 transition-transform duration-300"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/30 to-purple-500/30 blur-sm"></div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Mohd Husain</span>
            <br />
            <span className="text-dark-200">Darji</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-8"
          >
            <AnimatedText />
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate software engineer with 3+ years of experience building scalable web applications 
            using modern technologies. Specialized in React, Node.js, PHP, Python, and AWS cloud services.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12 text-dark-300"
          >
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary-400" />
              <span>+91-7208309120</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary-400" />
              <span>mohammadhussain5601@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary-400" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200"
            >
              View My Work
            </motion.a>
            <DownloadResume />
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Linkedin size={24} className="text-primary-400" />
            </motion.a>
            <motion.a
              href="https://github.com/Hussyn72"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Github size={24} className="text-primary-400" />
            </motion.a>
            <motion.a
              href="mailto:mohammadhussain5601@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Mail size={24} className="text-primary-400" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <span className="text-dark-400 text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-primary-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero