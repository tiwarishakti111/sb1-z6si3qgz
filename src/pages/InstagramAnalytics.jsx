import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Share,
  Eye,
  Calendar,
  Filter,
  Download
} from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'

const InstagramAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d')
  const [activeTab, setActiveTab] = useState('overview')

  // Simulated data
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      followers: 15420,
      following: 892,
      posts: 234,
      engagement: 4.8,
      reach: 45600,
      impressions: 78900
    },
    growth: [],
    engagement: [],
    demographics: [],
    topPosts: []
  })

  useEffect(() => {
    // Simulate data loading
    const generateData = () => {
      const growth = Array.from({ length: 30 }, (_, i) => ({
        date: `Day ${i + 1}`,
        followers: 15000 + Math.floor(Math.random() * 1000),
        reach: 40000 + Math.floor(Math.random() * 20000),
        impressions: 70000 + Math.floor(Math.random() * 30000)
      }))

      const engagement = Array.from({ length: 7 }, (_, i) => ({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
        likes: Math.floor(Math.random() * 500) + 200,
        comments: Math.floor(Math.random() * 100) + 50,
        shares: Math.floor(Math.random() * 50) + 20,
        saves: Math.floor(Math.random() * 80) + 30
      }))

      const demographics = [
        { name: '18-24', value: 35, color: '#3b82f6' },
        { name: '25-34', value: 28, color: '#14b8a6' },
        { name: '35-44', value: 20, color: '#f97316' },
        { name: '45-54', value: 12, color: '#22c55e' },
        { name: '55+', value: 5, color: '#ef4444' }
      ]

      const topPosts = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        image: `https://images.pexels.com/photos/${1000000 + i * 100000}/pexels-photo-${1000000 + i * 100000}.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop`,
        likes: Math.floor(Math.random() * 2000) + 500,
        comments: Math.floor(Math.random() * 200) + 50,
        engagement: (Math.random() * 5 + 3).toFixed(1)
      }))

      setAnalyticsData({
        overview: analyticsData.overview,
        growth,
        engagement,
        demographics,
        topPosts
      })
    }

    generateData()
  }, [timeRange])

  const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 ${color} rounded-xl`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 text-sm ${
            change > 0 ? 'text-green-600' : 'text-red-600'
          }`}>
            <TrendingUp className="h-4 w-4" />
            <span>{change > 0 ? '+' : ''}{change}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-1">
        {typeof value === 'number' ? value.toLocaleString() : value}
      </h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </motion.div>
  )

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'growth', label: 'Growth', icon: TrendingUp },
    { id: 'engagement', label: 'Engagement', icon: Heart },
    { id: 'demographics', label: 'Demographics', icon: Users }
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center mb-4">
                <div className="p-3 gradient-bg rounded-2xl mr-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold gradient-text">Instagram Analytics</h1>
                  <p className="text-gray-600">Comprehensive insights and performance metrics</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="input-field"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>
              
              <button className="btn-secondary flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <StatCard
                icon={Users}
                title="Followers"
                value={analyticsData.overview.followers}
                change={5.2}
                color="bg-primary-500"
              />
              <StatCard
                icon={Users}
                title="Following"
                value={analyticsData.overview.following}
                change={-1.3}
                color="bg-secondary-500"
              />
              <StatCard
                icon={BarChart3}
                title="Posts"
                value={analyticsData.overview.posts}
                change={12.5}
                color="bg-accent-500"
              />
              <StatCard
                icon={Heart}
                title="Engagement"
                value={`${analyticsData.overview.engagement}%`}
                change={2.1}
                color="bg-success-500"
              />
              <StatCard
                icon={Eye}
                title="Reach"
                value={analyticsData.overview.reach}
                change={8.7}
                color="bg-warning-500"
              />
              <StatCard
                icon={TrendingUp}
                title="Impressions"
                value={analyticsData.overview.impressions}
                change={15.3}
                color="bg-error-500"
              />
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Growth Chart */}
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Follower Growth</h3>
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.growth}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="#3b82f6" 
                        fill="url(#colorFollowers)" 
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Engagement Breakdown */}
              <div className="card">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-800">Weekly Engagement</h3>
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData.engagement}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Legend />
                      <Bar dataKey="likes" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="comments" fill="#14b8a6" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="shares" fill="#f97316" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Growth Tab */}
        {activeTab === 'growth' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Account Growth Metrics</h3>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData.growth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#666" fontSize={12} />
                    <YAxis stroke="#666" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="followers" 
                      stroke="#3b82f6" 
                      strokeWidth={3}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="reach" 
                      stroke="#14b8a6" 
                      strokeWidth={3}
                      dot={{ fill: '#14b8a6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#14b8a6', strokeWidth: 2 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="impressions" 
                      stroke="#f97316" 
                      strokeWidth={3}
                      dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#f97316', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        )}

        {/* Engagement Tab */}
        {activeTab === 'engagement' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Posts */}
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Performing Posts</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {analyticsData.topPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Post {post.id}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-red-500">
                          <Heart className="h-4 w-4" />
                          <span>{post.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-blue-500">
                          <MessageCircle className="h-4 w-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        Engagement: {post.engagement}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Engagement Breakdown */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Engagement Types</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Likes', value: 65, color: '#3b82f6' },
                          { name: 'Comments', value: 20, color: '#14b8a6' },
                          { name: 'Shares', value: 10, color: '#f97316' },
                          { name: 'Saves', value: 5, color: '#22c55e' }
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {[
                          { name: 'Likes', value: 65, color: '#3b82f6' },
                          { name: 'Comments', value: 20, color: '#14b8a6' },
                          { name: 'Shares', value: 10, color: '#f97316' },
                          { name: 'Saves', value: 5, color: '#22c55e' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Engagement Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={analyticsData.engagement}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip />
                      <Area type="monotone" dataKey="likes" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="comments" stackId="1" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="shares" stackId="1" stroke="#f97316" fill="#f97316" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Demographics Tab */}
        {activeTab === 'demographics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Age Distribution */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Age Distribution</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={analyticsData.demographics}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {analyticsData.demographics.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Geographic Distribution */}
              <div className="card">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Top Locations</h3>
                <div className="space-y-4">
                  {[
                    { country: 'United States', percentage: 35, flag: '🇺🇸' },
                    { country: 'United Kingdom', percentage: 18, flag: '🇬🇧' },
                    { country: 'Canada', percentage: 15, flag: '🇨🇦' },
                    { country: 'Australia', percentage: 12, flag: '🇦🇺' },
                    { country: 'Germany', percentage: 10, flag: '🇩🇪' },
                    { country: 'Others', percentage: 10, flag: '🌍' }
                  ].map((location, index) => (
                    <motion.div
                      key={location.country}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{location.flag}</span>
                        <span className="font-medium text-gray-800">{location.country}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${location.percentage}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold text-gray-700 min-w-[3rem]">
                          {location.percentage}%
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default InstagramAnalytics