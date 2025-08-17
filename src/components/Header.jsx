import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Shield, Layers } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Contato', id: 'contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${
              isScrolled 
                ? 'bg-gradient-to-br from-accent-500 to-accent-600' 
                : 'bg-white/20 backdrop-blur-sm'
            } shadow-lg`}>
              <Layers className={`w-7 h-7 ${
                isScrolled ? 'text-white' : 'text-accent-600'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${
                isScrolled ? 'text-primary-900' : 'text-white'
              } gradient-text`}>
                Geobabaaa
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-primary-600' : 'text-white/80'
              }`}>
                Geossintéticos
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-primary-700 hover:text-accent-600' 
                    : 'text-white hover:text-accent-300'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contato')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-accent-500 to-accent-600 text-white shadow-lg hover:shadow-xl'
                  : 'bg-white text-accent-600 shadow-lg hover:shadow-xl hover:bg-accent-50'
              }`}
            >
              Orçamento
            </motion.button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-primary-700 hover:bg-primary-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white rounded-2xl mx-4 mb-4 shadow-xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-primary-700 hover:bg-accent-50 hover:text-accent-600 rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg"
              >
                Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}