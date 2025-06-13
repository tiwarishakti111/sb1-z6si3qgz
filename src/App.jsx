import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AIIdeaGenerator from './pages/AIIdeaGenerator'
import InstagramAnalytics from './pages/InstagramAnalytics'
import TechStack from './pages/TechStack'
import Deliverables from './pages/Deliverables'
import BonusFeatures from './pages/BonusFeatures'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-ideas" element={<AIIdeaGenerator />} />
            <Route path="/instagram-analytics" element={<InstagramAnalytics />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/deliverables" element={<Deliverables />} />
            <Route path="/bonus" element={<BonusFeatures />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App