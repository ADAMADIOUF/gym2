import React, { useEffect } from 'react'
import BannerOne from './BannerOne'
import SecondBanner from './SecondBanner'
import Workout from './Workout'
import Products from "./Products"
import Method from './Method'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div>
     <BannerOne/>
    <SecondBanner/>
    <Workout/>
    <Products/>
    <Method/>
    </div>
  )
}

export default Home