import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Shield, Settings, CheckCircle, ArrowRight, Droplets, Road, Mountain } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Droplets,
      title: 'Sistemas de Drenagem',
      description: 'Soluções completas em geossintéticos para drenagem rodoviária, garantindo eficiência no escoamento de águas.',
      features: [
        'Geodrenos para drenagem subsuperficial',
        'Mantas drenantes de alta performance',
        'Sistemas de captação e condução',
        'Filtros geotêxteis especializados'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Road,
      title: 'Reforço de Pavimentos',
      description: 'Tecnologias avançadas em geossintéticos para reforço e estabilização de pavimentos rodoviários.',
      features: [
        'Geogrelhas para reforço estrutural',
        'Geotêxteis de separação',
        'Sistemas de estabilização',
        'Materiais de alta durabilidade'
      ],
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Mountain,
      title: 'Estabilização de Taludes',
      description: 'Soluções especializadas para estabilização e proteção de taludes em projetos rodoviários.',
      features: [
        'Geomantas para proteção superficial',
        'Sistemas de contenção',
        'Reforço de solos',
        'Controle de erosão'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Consultoria Técnica',
      description: 'Assessoria especializada para escolha e aplicação adequada de geossintéticos em seus projetos.',
      features: [
        'Análise técnica de projetos',
        'Especificação de materiais',
        'Acompanhamento de obras',
        'Controle de qualidade'
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Settings,
      title: 'Instalação e Manutenção',
      description: 'Serviços completos de instalação e manutenção de sistemas geossintéticos para máxima eficiência.',
      features: [
        'Instalação especializada',
        'Supervisão técnica',
        'Manutenção preventiva',
        'Suporte pós-instalação'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Layers,
      title: 'Projetos Personalizados',
      description: 'Desenvolvimento de soluções customizadas em geossintéticos para demandas específicas.',
      features: [
        'Análise de necessidades',
        'Desenvolvimento customizado',
        'Testes e validação',
        'Implementação completa'
      ],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="servicos" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-pattern opacity-5"></div>
      
      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Nossos{' '}
            <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em geossintéticos para drenagem rodoviária, 
            desde a consultoria até a implementação, garantindo máxima eficiência e durabilidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-primary-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 group hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Precisa de uma solução personalizada?
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Nossa equipe de especialistas está pronta para desenvolver a solução 
                ideal em geossintéticos para seu projeto de drenagem rodoviária.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Solicitar Orçamento
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-accent-600 transition-all duration-300"
                >
                  Falar com Especialista
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary-900 mb-8">
            Processo de Trabalho
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análise', description: 'Avaliação detalhada do projeto e necessidades' },
              { step: '02', title: 'Planejamento', description: 'Desenvolvimento da solução ideal' },
              { step: '03', title: 'Execução', description: 'Implementação com supervisão técnica' },
              { step: '04', title: 'Suporte', description: 'Acompanhamento e manutenção contínua' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-primary-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-600 text-sm">
                  {item.description}
                </p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent-500 to-accent-300 transform -translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}