import React from 'react'
import { motion } from 'framer-motion'
import { Coffee, Heart } from 'lucide-react'

const BuyMeCoffee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://www.buymeacoffee.com/mohdhusain"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <Coffee size={20} className="group-hover:animate-bounce" />
        <span className="font-medium hidden sm:inline">Buy me a coffee</span>
        <Heart size={16} className="text-red-200 group-hover:text-red-100" />
      </motion.a>
    </motion.div>
  )
}

export default BuyMeCoffee