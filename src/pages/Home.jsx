import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  BarChart3, 
  Zap, 
  Target, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Code,
  Users,
  Globe
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'AI-Powered Ideas',
      description: 'Generate creative content ideas using advanced AI algorithms tailored to your niche.',
      color: 'bg-accent-500',
      link: '/ai-ideas'
    },
    {
      icon: BarChart3,
      title: 'Instagram Analytics',
      description: 'Comprehensive analytics simulation with detailed insights and beautiful visualizations.',
      color: 'bg-secondary-500',
      link: '/instagram-analytics'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Built with React, Node.js, and modern tools for optimal performance and scalability.',
      color: 'bg-primary-500',
      link: '/tech-stack'
    },
    {
      icon: Target,
      title: 'Responsive Design',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices.',
      color: 'bg-success-500',
      link: '/deliverables'
    }
  ]

  const stats = [
    { label: 'AI Models', value: '3+', icon: Sparkles },
    { label: 'Analytics Views', value: '8+', icon: TrendingUp },
    { label: 'Tech Features', value: '20+', icon: Zap },
    { label: 'Responsive Breakpoints', value: '5+', icon: Globe }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text">IdeaFlow</span>
                <br />
                <span className="text-gray-800">Developer Assignment</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A comprehensive MERN stack application featuring AI-powered content generation 
                and Instagram analytics simulation with beautiful, responsive design.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link to="/ai-ideas" className="btn-primary flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>Try AI Generator</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/instagram-analytics" className="btn-secondary flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>View Analytics</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary-100 rounded-full">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-32 h-32 gradient-bg rounded-full animate-float"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <div className="w-24 h-24 bg-secondary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Features & Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the comprehensive features built to demonstrate modern web development expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Link to={feature.link} className="block">
                    <div className="card group-hover:shadow-2xl transition-all duration-300">
                      <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-4 flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card gradient-bg text-white"
          >
            <div className="flex items-center justify-center mb-6">
              <Users className="h-8 w-8 mr-3" />
              <span className="text-2xl font-semibold">Ready to Explore?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Full Application
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Dive into the AI-powered idea generator, explore comprehensive analytics, 
              and see modern web development in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ai-ideas" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Lightbulb className="h-5 w-5" />
                <span>Start Generating Ideas</span>
              </Link>
              <Link 
                to="/instagram-analytics" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <BarChart3 className="h-5 w-5" />
                <span>View Analytics</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home