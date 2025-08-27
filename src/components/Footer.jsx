import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Hussyn72",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/your-profile",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      url: "mailto:mohammadhussain5601@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="bg-dark-800/50 border-t border-white/10">
      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <Code2 className="w-8 h-8 text-primary-500" />
              <span className="text-xl font-bold gradient-text">
                Mohd Husain Darji
              </span>
            </motion.div>
            <p className="text-dark-300 mb-4 leading-relaxed">
              Full Stack Software Engineer passionate about creating innovative 
              solutions and building scalable applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-effect p-2 rounded-lg text-dark-300 hover:text-primary-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-dark-300 hover:text-primary-400 transition-all duration-200 block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-dark-300">
              <p>Mumbai, Maharashtra, India</p>
              <p>+91-7208309120</p>
              <p>mohammadhussain5601@gmail.com</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm text-center md:text-left">
              © {currentYear} Mohd Husain Darji. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-dark-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer