import React from 'react'
import BannerOne from './BannerOne'
import SecondBanner from './SecondBanner'
import Workout from './Workout'
import Products from "./Products"
import Method from './Method'


const Home = () => {
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