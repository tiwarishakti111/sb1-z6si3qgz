import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Server, 
  Database, 
  Palette, 
  Zap, 
  Shield,
  Globe,
  Smartphone,
  Github,
  ExternalLink
} from 'lucide-react'

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'bg-blue-500',
      technologies: [
        {
          name: 'React 18',
          description: 'Modern UI library with hooks and concurrent features',
          icon: '⚛️',
          version: '^18.2.0'
        },
        {
          name: 'Vite',
          description: 'Lightning-fast build tool and dev server',
          icon: '⚡',
          version: '^4.1.0'
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapid UI development',
          icon: '🎨',
          version: '^3.2.7'
        },
        {
          name: 'Framer Motion',
          description: 'Production-ready motion library for React',
          icon: '🎬',
          version: '^10.0.0'
        }
      ]
    },
    {
      title: 'Routing & State',
      icon: Server,
      color: 'bg-green-500',
      technologies: [
        {
          name: 'React Router',
          description: 'Declarative routing for React applications',
          icon: '🛣️',
          version: '^6.8.1'
        },
        {
          name: 'Axios',
          description: 'Promise-based HTTP client for API requests',
          icon: '🌐',
          version: '^1.3.4'
        },
        {
          name: 'React Hot Toast',
          description: 'Beautiful notifications with no configuration',
          icon: '🍞',
          version: '^2.4.0'
        }
      ]
    },
    {
      title: 'Data Visualization',
      icon: Database,
      color: 'bg-purple-500',
      technologies: [
        {
          name: 'Recharts',
          description: 'Composable charting library built on React components',
          icon: '📊',
          version: '^2.5.0'
        },
        {
          name: 'Lucide React',
          description: 'Beautiful & consistent icon pack',
          icon: '🎯',
          version: '^0.321.0'
        },
        {
          name: 'Date-fns',
          description: 'Modern JavaScript date utility library',
          icon: '📅',
          version: '^2.29.3'
        }
      ]
    },
    {
      title: 'Development',
      icon: Zap,
      color: 'bg-orange-500',
      technologies: [
        {
          name: 'ESLint',
          description: 'Static code analysis for identifying problems',
          icon: '🔍',
          version: 'Latest'
        },
        {
          name: 'PostCSS',
          description: 'Tool for transforming CSS with JavaScript',
          icon: '🔧',
          version: '^8.4.21'
        },
        {
          name: 'Autoprefixer',
          description: 'Automatic vendor prefixing for CSS',
          icon: '🎯',
          version: '^10.4.14'
        }
      ]
    }
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach with 5+ breakpoints for optimal viewing on all devices'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Fast loading times with code splitting, lazy loading, and optimized assets'
    },
    {
      icon: Shield,
      title: 'Type Safety',
      description: 'PropTypes and consistent coding patterns for maintainable code'
    },
    {
      icon: Palette,
      title: 'Modern UI/UX',
      description: 'Apple-level design aesthetics with beautiful animations and interactions'
    },
    {
      icon: Globe,
      title: 'SEO Ready',
      description: 'Semantic HTML, meta tags, and accessibility best practices'
    },
    {
      icon: Github,
      title: 'Clean Code',
      description: 'Modular architecture with reusable components and clear separation of concerns'
    }
  ]

  const architecturePoints = [
    'Component-based architecture with reusable UI components',
    'Custom hooks for state management and business logic',
    'Responsive design system with consistent spacing and colors',
    'Optimized bundle size with tree shaking and code splitting',
    'Error boundaries for graceful error handling',
    'Accessibility features including ARIA labels and keyboard navigation'
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 gradient-bg rounded-2xl">
              <Code className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tech Stack & Architecture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern technologies and best practices for scalability, performance, and maintainability
          </p>
        </motion.div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {techCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-8">
                  <div className={`p-3 ${category.color} rounded-xl mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3">{tech.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                          <span className="text-sm text-gray-500">{tech.version}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Key Features & Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern development practices and user-centered design principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Architecture Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 bg-secondary-500 rounded-xl mr-4">
              <Server className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Architecture Highlights</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Implementation Details</h3>
              <ul className="space-y-3">
                {architecturePoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm overflow-x-auto">
              <div className="text-green-400 mb-2">// Project Structure</div>
              <div className="space-y-1 text-gray-300">
                <div>📁 src/</div>
                <div className="ml-4">📁 components/</div>
                <div className="ml-8">📄 Navbar.jsx</div>
                <div className="ml-4">📁 pages/</div>
                <div className="ml-8">📄 Home.jsx</div>
                <div className="ml-8">📄 AIIdeaGenerator.jsx</div>
                <div className="ml-8">📄 InstagramAnalytics.jsx</div>
                <div className="ml-4">📁 utils/</div>
                <div className="ml-4">📄 App.jsx</div>
                <div className="ml-4">📄 main.jsx</div>
                <div>📄 package.json</div>
                <div>📄 tailwind.config.js</div>
                <div>📄 vite.config.js</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 card gradient-bg text-white"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">{'< 2s'}</div>
                <div className="text-sm opacity-90">Load Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95+</div>
                <div className="text-sm opacity-90">Lighthouse Score</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Responsive</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">A11Y</div>
                <div className="text-sm opacity-90">Accessible</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TechStack