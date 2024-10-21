
import './App.css'
import DiscountCalculator from './COMPONENTS/DiscountCalculator'
import Home from './COMPONENTS/Home'
import Footer from './COMPONENTS/Footer'
import Header from './COMPONENTS/Header'
import { Route, Routes } from 'react-router-dom'


function App() {


  return (
    <>
    <Header/>
 
    <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/calculator' element={<DiscountCalculator/>} />
  
        </Routes>
    <Footer/>
    </>
  )
}

export default App
