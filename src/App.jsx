import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import GemGuidePage from './components/GemGuidePage'
import StoryboardPage from './components/StoryboardPage'
import FAQPage from './components/FAQPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gem-guide" element={<GemGuidePage />} />
          <Route path="/storyboard" element={<StoryboardPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

