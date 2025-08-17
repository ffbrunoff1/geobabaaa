import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { name: 'Sobre', id: 'sobre' },
    { name: 'Serviços', id: 'servicos' },
    { name: 'Contato', id: 'contato' }
  ]

  const services = [
    'Sistemas de Drenagem',
    'Reforço de Pavimentos',
    'Estabilização de Taludes',
    'Consultoria Técnica'
  ]

  const contact = [
    { icon: Mail, text: 'contato@geobabaaa.com.br' },
    { icon: Phone, text: '(11) 9999-9999' },
    { icon: MapPin, text: 'São Paulo, SP' }
  ]

  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      
      <div className="container-max relative z-10">
        <div className="section-padding">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                  <Layers className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Geobabaaa</h3>
                  <p className="text-primary-300 text-sm">Geossintéticos</p>
                </div>
              </div>
              
              <p className="text-primary-300 leading-relaxed mb-6">
                Especialistas em geossintéticos para drenagem rodoviária, 
                oferecendo soluções inovadoras e duráveis para seus projetos de infraestrutura.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-primary-400">
                <span>Criado com</span>
                <a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-400 hover:text-accent-300 transition-colors italic"
                >
                  Papum
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Navegação</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-300 hover:text-accent-400 transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-primary-300">
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                {contact.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-300">{item.text}</span>
                    </div>
                  )
                })}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contato')}
                className="mt-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Orçamento
              </motion.button>
            </motion.div>
          </div>

          <div className="border-t border-primary-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-primary-400 text-sm text-center md:text-left">
                © 2024 Geobabaaa. Todos os direitos reservados.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}