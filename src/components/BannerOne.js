import b from "../assets/banner1.png"
const BannerOne = () => {
  return (
    <div className='banner-one'>
      <div className='banner-one-img'>
        <img src={b} alt='' />
        <div className='banner-one-details'>
          <h3>Train Hard.Sweat Hard.</h3>
          <div className='banner-btn-container'>
            <button className='btn-banner'>Become a Member</button>
            <button className='btn-banner-one-white'>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerOne