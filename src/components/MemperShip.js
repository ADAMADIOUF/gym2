import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Membership = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <div className='membership'>
      <h2>Membership Options</h2>
      <div className='membership-plans section-center'>
        <div className='membership-plan plan-basic'>
          <h3>Basic Membership</h3>
          <p>Access to the gym during regular hours</p>
          <p>Use of cardio and weightlifting equipment</p>
          <p>Locker room facilities</p>
          <p>Price: $29.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-premium'>
          <h3>Premium Membership</h3>
          <p>Access to the gym 24/7</p>
          <p>Use of all facilities and equipment</p>
          <p>Unlimited fitness classes</p>
          <p>Personal training sessions</p>
          <p>Price: $49.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-corporate'>
          <h3>Corporate Membership</h3>
          <p>Discounted rates for employees of partner companies</p>
          <p>Access to all facilities and equipment</p>
          <p>Access to group fitness classes</p>
          <p>Special corporate events and promotions</p>
          <p>Price: Contact us for details</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-student'>
          <h3>Student Membership</h3>
          <p>Valid student ID required</p>
          <p>Access to the gym during regular hours</p>
          <p>Use of cardio and weightlifting equipment</p>
          <p>Price: $19.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-senior'>
          <h3>Senior Membership</h3>
          <p>For individuals aged 60 and above</p>
          <p>Access to the gym during regular hours</p>
          <p>Use of cardio and weightlifting equipment</p>
          <p>Price: $24.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-couples'>
          <h3>Couples Membership</h3>
          <p>Access for two individuals</p>
          <p>Use of all facilities and equipment</p>
          <p>Price: $59.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-family'>
          <h3>Family Membership</h3>
          <p>Access for the whole family</p>
          <p>Use of all facilities and equipment</p>
          <p>Price: $79.99/month</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-short-term'>
          <h3>Short-Term Membership</h3>
          <p>Access for 3 months</p>
          <p>Use of all facilities and equipment</p>
          <p>Price: $99.99</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
        <div className='membership-plan plan-one-day'>
          <h3>One-Day Pass</h3>
          <p>Access to the gym for a day</p>
          <p>Use of all facilities and equipment</p>
          <p>Price: $14.99</p>
          <Link to={`/signup-form`}>
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Membership
