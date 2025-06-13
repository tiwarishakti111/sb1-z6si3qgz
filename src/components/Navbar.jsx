import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightbulb, BarChart3, Menu, X, Code, Package, Star } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: null },
    { name: 'AI Ideas', href: '/ai-ideas', icon: Lightbulb },
    { name: 'Analytics', href: '/instagram-analytics', icon: BarChart3 },
    { name: 'Tech Stack', href: '/tech-stack', icon: Code },
    { name: 'Deliverables', href: '/deliverables', icon: Package },
    { name: 'Bonus', href: '/bonus', icon: Star },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold gradient-text"
            >
              <div className="p-2 gradient-bg rounded-lg">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <span>IdeaFlow</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar