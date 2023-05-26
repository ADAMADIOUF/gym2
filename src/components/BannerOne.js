import { Link } from "react-router-dom"
import b from "../assets/banner1.png"
const BannerOne = () => {
  return (
    <div className='banner-one'>
      <div className='banner-one-img'>
        <img src={b} alt='' />
        <div className='banner-one-details'>
          <h3>Train Hard.Sweat Hard.</h3>
          <div className='banner-btn-container'>
            <Link to={`/membership`}>
              <button className='btn-banner'>Become a Member</button>
            </Link>
            <Link to={`/booking-form`}>
              <button className='btn-banner-one-white'>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerOne