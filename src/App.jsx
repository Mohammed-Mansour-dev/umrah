import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import BookingInquiry from './pages/BookingInquiry'
import Programs from './pages/Programs'
import PilgrimManagement from './pages/PilgrimManagement'
import TripTracking from './pages/TripTracking'
import Guide from './pages/Guide'
import AdminPanel from './pages/AdminPanel'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="">
          
            <main className="flex-1 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/booking" element={<BookingInquiry />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/pilgrims" element={<PilgrimManagement />} />
                <Route path="/tracking" element={<TripTracking />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/admin" element={<AdminPanel />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
