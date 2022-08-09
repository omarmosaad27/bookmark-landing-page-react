import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage'
import Featurespage from './pages/Featurespage'
import Pricingpage from './pages/Pricingpage'
import Contactpage from './pages/Contactpage'

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='features' element={ <Featurespage/>}/>
        <Route path='pricing' element={ <Pricingpage/>}/>
        <Route path='contact' element={ <Contactpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
