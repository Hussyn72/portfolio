import React from 'react'
import { motion } from 'framer-motion'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import CursorParticles from './components/CursorParticles'
import BuyMeCoffee from './components/BuyMeCoffee'

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-dark-900 dark:bg-dark-900 light:bg-white overflow-x-hidden transition-colors duration-300">
        <ParticleBackground />
        <CursorParticles />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Skills />
          <Projects />
          <Testimonials />
          <Education />
          <Contact />
        </main>
        <Footer />
        <BuyMeCoffee />
      </div>
    </ThemeProvider>
  )
}

export default App