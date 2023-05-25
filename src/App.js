import React from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ClassShedule from "./components/ClassSchedule"
import ClassSchedule from './components/ClassSchedule'
import BookingForm from './components/BookingForm'
import MemberShip from './components/MemperShip'
import LocationsForm from './components/LocationsForm'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/schedule' element={<ClassSchedule />} />
        <Route path='/booking-form' element={<BookingForm />} />
        <Route path='/membership' element={<MemberShip />} />
        <Route path='/locations' element={<LocationsForm />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App