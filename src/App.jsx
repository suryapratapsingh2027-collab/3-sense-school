import { Routes, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  return <div className="min-h-screen overflow-hidden bg-slate-50 text-ink">
    <Topbar /><Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
  </div>
}