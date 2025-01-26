import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Industries from './pages/Industries'
import Careers from './pages/Careers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/careers' element={<Careers />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
