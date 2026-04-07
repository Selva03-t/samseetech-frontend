import { Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import SamAssistant from './components/SamAssistant'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import PricingPage from './pages/PricingPage'
import ProcessPage from './pages/ProcessPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      {/* Global floating AI assistant — visible on all pages */}
      <SamAssistant />
    </div>
  )
}

export default App