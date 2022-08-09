import React from 'react'
import { HashRouter  , Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage'
import Featurespage from './pages/Featurespage'
import Pricingpage from './pages/Pricingpage'
import Contactpage from './pages/Contactpage'

function App() {
  
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Homepage/>}/>
        <Route path='features' element={ <Featurespage/>}/>
        <Route path='pricing' element={ <Pricingpage/>}/>
        <Route path='contact' element={ <Contactpage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
