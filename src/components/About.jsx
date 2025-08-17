import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Shield, Zap, Globe } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Produtos certificados e materiais de primeira linha para máxima durabilidade e eficiência.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados com anos de experiência em geossintéticos.'
    },
    {
      icon: Target,
      title: 'Soluções Personalizadas',
      description: 'Cada projeto é único e desenvolvemos soluções específicas para suas necessidades.'
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais modernas tecnologias em geossintéticos e drenagem rodoviária.'
    },
    {
      icon: Globe,
      title: 'Impacto Sustentável',
      description: 'Contribuímos para projetos mais sustentáveis e eficientes do ponto de vista ambiental.'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Empresa reconhecida no mercado pela excelência em soluções geotécnicas.'
    }
  ]

  const values = [
    { title: 'Inovação', description: 'Sempre buscando as melhores e mais modernas soluções' },
    { title: 'Qualidade', description: 'Compromisso com a excelência em todos os nossos produtos' },
    { title: 'Confiabilidade', description: 'Parceiro confiável para seus projetos mais importantes' },
    { title: 'Sustentabilidade', description: 'Soluções que respeitam o meio ambiente' }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
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
            Sobre a{' '}
            <span className="gradient-text">Geobabaaa</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em geossintéticos com foco em drenagem rodoviária, 
            oferecendo soluções inovadoras que garantem a durabilidade e eficiência 
            dos seus projetos de infraestrutura.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-primary-900 mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-primary-700 mb-6 leading-relaxed">
              Fornecer soluções especializadas em geossintéticos para drenagem rodoviária, 
              contribuindo para a construção de infraestruturas mais duráveis, eficientes 
              e sustentáveis.
            </p>
            <p className="text-lg text-primary-700 mb-8 leading-relaxed">
              Nossa expertise técnica e comprometimento com a inovação nos permite 
              atender às demandas mais complexas do setor, sempre priorizando a 
              qualidade e a satisfação dos nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-lg"
                >
                  <h4 className="font-semibold text-primary-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Por que nos escolher?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-accent-200" />
                    <span>Materiais certificados e de alta qualidade</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-accent-200" />
                    <span>Equipe técnica especializada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-accent-200" />
                    <span>Soluções personalizadas para cada projeto</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-accent-200" />
                    <span>Reconhecimento no mercado</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-primary-900 mb-12">
            Nossos Diferenciais
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-primary-900 mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-primary-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-900 to-accent-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para seu próximo projeto?
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar 
                a tornar seu projeto de drenagem rodoviária um sucesso.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contato')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-white text-accent-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Falar com Especialista
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}