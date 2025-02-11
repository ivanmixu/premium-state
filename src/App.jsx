import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Home />} /> {/* Placeholder */}
          <Route path="/investment-options" element={<Home />} /> {/* Placeholder */}
          <Route path="/portfolio" element={<Home />} /> {/* Placeholder */}
          <Route path="/market-insights" element={<Home />} /> {/* Placeholder */}
          <Route path="/contact" element={<Home />} /> {/* Placeholder */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App