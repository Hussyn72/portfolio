import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

const DownloadResume = () => {
  const handleDownload = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add your resume PDF to the public folder
    link.download = 'Mohd_Husain_Darji_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl group"
    >
      <FileText size={20} className="group-hover:animate-pulse" />
      <span>Download Resume</span>
      <Download size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
    </motion.button>
  )
}

export default DownloadResume