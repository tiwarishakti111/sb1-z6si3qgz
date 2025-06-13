import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Heart, 
  MessageCircle, 
  Share,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react'
import toast from 'react-hot-toast'

const AIIdeaGenerator = () => {
  const [selectedNiche, setSelectedNiche] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [generatedIdeas, setGeneratedIdeas] = useState([])
  const [isGenerating, setIsGenerating] = useState(false)

  const niches = [
    'Fashion & Style',
    'Food & Cooking',
    'Travel & Adventure',
    'Fitness & Health',
    'Technology',
    'Art & Design',
    'Music & Entertainment',
    'Business & Entrepreneurship',
    'Lifestyle & Wellness',
    'Photography'
  ]

  const categories = [
    'Reels Ideas',
    'Story Content',
    'Feed Posts',
    'IGTV Content',
    'Live Sessions',
    'Carousel Posts'
  ]

  const ideaTemplates = {
    'Fashion & Style': {
      'Reels Ideas': [
        'Get Ready With Me for a Date Night',
        'Styling One Piece Three Ways',
        'Thrift Flip Transformation',
        'Outfit Transition Challenge',
        '5-Minute Morning Outfit Ideas'
      ],
      'Story Content': [
        'This or That Style Poll',
        'Behind the Scenes Photoshoot',
        'Shopping Haul Preview',
        'Style Tip of the Day',
        'Wardrobe Organization Tips'
      ],
      'Feed Posts': [
        'Seasonal Color Palette Guide',
        'Capsule Wardrobe Essentials',
        'Sustainable Fashion Tips',
        'Trend Forecast 2024',
        'Body Positivity Style Guide'
      ]
    },
    'Food & Cooking': {
      'Reels Ideas': [
        'Quick 5-Ingredient Recipes',
        'Cooking Hacks That Save Time',
        'Recipe Fails to Success',
        'Guess the Secret Ingredient',
        'One Pan Meal Magic'
      ],
      'Story Content': [
        'Recipe of the Day Poll',
        'Kitchen Tool Reviews',
        'Ingredient Spotlight',
        'Cooking Q&A Session',
        'Meal Prep Sunday Tips'
      ],
      'Feed Posts': [
        'Weekly Meal Prep Guide',
        'Seasonal Produce Guide',
        'Kitchen Equipment Essentials',
        'Food Photography Tips',
        'Cultural Recipe Series'
      ]
    },
    'Travel & Adventure': {
      'Reels Ideas': [
        'Hidden Gems You Must Visit',
        'Travel Packing Hacks',
        'Budget Travel Tips',
        'Time-lapse Journey Videos',
        'Local Food Adventures'
      ],
      'Story Content': [
        'Travel Photo Dump',
        'Destination Polls',
        'Travel Tips Q&A',
        'Packing List Checklist',
        'Real-time Travel Updates'
      ],
      'Feed Posts': [
        'Ultimate Travel Guide Series',
        'Photography Location Guide',
        'Budget Breakdown Posts',
        'Cultural Experience Stories',
        'Travel Safety Tips'
      ]
    }
  }

  const generateIdeas = async () => {
    if (!selectedNiche || !selectedCategory) {
      toast.error('Please select both niche and category')
      return
    }

    setIsGenerating(true)
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const ideas = ideaTemplates[selectedNiche]?.[selectedCategory] || [
      'Creative Content Idea #1',
      'Engaging Post Concept #2',
      'Viral Content Strategy #3',
      'Community Building Post #4',
      'Educational Content Series #5'
    ]
    
    const enhancedIdeas = ideas.map((idea, index) => ({
      id: index + 1,
      title: idea,
      description: `${idea} - A comprehensive content strategy designed to engage your audience and boost your ${selectedNiche.toLowerCase()} presence.`,
      engagement: Math.floor(Math.random() * 5000) + 1000,
      difficulty: ['Easy', 'Medium', 'Advanced'][Math.floor(Math.random() * 3)],
      estimatedTime: `${Math.floor(Math.random() * 3) + 1}-${Math.floor(Math.random() * 3) + 4} hours`,
      tags: generateTags(selectedNiche, selectedCategory)
    }))
    
    setGeneratedIdeas(enhancedIdeas)
    setIsGenerating(false)
    toast.success('Ideas generated successfully!')
  }

  const generateTags = (niche, category) => {
    const nicheTag = niche.toLowerCase().replace(' & ', '').replace(' ', '')
    const categoryTag = category.toLowerCase().replace(' ', '')
    return [`#${nicheTag}`, `#${categoryTag}`, '#content', '#viral', '#engagement']
  }

  const copyIdea = (idea) => {
    navigator.clipboard.writeText(`${idea.title}\n\n${idea.description}\n\nTags: ${idea.tags.join(' ')}`)
    toast.success('Idea copied to clipboard!')
  }

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
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            AI Content Idea Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate creative, engaging content ideas powered by AI for your social media presence
          </p>
        </motion.div>

        {/* Generator Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Niche
              </label>
              <select
                value={selectedNiche}
                onChange={(e) => setSelectedNiche(e.target.value)}
                className="input-field"
              >
                <option value="">Choose a niche...</option>
                {niches.map((niche) => (
                  <option key={niche} value={niche}>
                    {niche}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                <option value="">Choose a category...</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={generateIdeas}
            disabled={isGenerating}
            className="btn-primary w-full flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                <span>Generating Ideas...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>Generate Ideas</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Generated Ideas */}
        {generatedIdeas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Generated Ideas</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Zap className="h-4 w-4" />
                <span>{generatedIdeas.length} ideas generated</span>
              </div>
            </div>
            
            <div className="grid gap-6">
              {generatedIdeas.map((idea, index) => (
                <motion.div
                  key={idea.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                          {idea.title}
                        </h3>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyIdea(idea)}
                          className="p-2 text-gray-500 hover:text-primary-600 transition-colors"
                          title="Copy idea"
                        >
                          <Copy className="h-5 w-5" />
                        </motion.button>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {idea.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {idea.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:ml-6 space-y-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Target className="h-4 w-4" />
                          <span>{idea.difficulty}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{idea.estimatedTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>~{idea.engagement.toLocaleString()} potential reach</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex items-center space-x-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm hover:bg-red-100 transition-colors">
                          <Heart className="h-3 w-3" />
                          <span>Save</span>
                        </button>
                        <button className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors">
                          <Share className="h-3 w-3" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {generatedIdeas.length === 0 && !isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="mb-6">
              <Lightbulb className="h-24 w-24 text-gray-300 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Ready to Generate Ideas?
            </h3>
            <p className="text-gray-500">
              Select your niche and content category to get started with AI-powered content ideas
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AIIdeaGenerator