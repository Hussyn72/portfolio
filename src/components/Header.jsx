import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Code2 className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold gradient-text">
              Mohd Husain
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-dark-300 hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-300 hover:text-primary-400 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="block text-dark-300 hover:text-primary-400 transition-colors duration-200 py-2 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(false)}
              className="block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors duration-200 font-medium text-center mt-4"
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header