import { DarkModeProvider } from './context/DarkMode'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactMe from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'
import About from './components/About'
import Mission from './components/Mission'

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <div className='z-10 relative'>
          <About />
          <Mission />
          <Services />
          <ContactMe />
        </div>
        <div className='z-10 relative'>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  )
}
export default App
