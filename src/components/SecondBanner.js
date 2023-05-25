import React from 'react'
import b from "../assets/b2.avif"
const SecondBanner = () => {
  return (
    <div className='second-banner section-center'>
      <p>
        With Start Sweating, you'll not only work up a sweat but also enjoy the
        benefits of regular exercise, such as increased energy levels, improved
        mood, and enhanced overall health. So, whether you're aiming to lose
        weight, increase strength, or simply improve your fitness, Start
        Sweating provides the platform to kickstart your fitness journey and
        unlock your full potential. Get ready to break a sweat and achieve your
        fitness goals with Start Sweating!
      </p>
      <button className='btn-second-banner'>Start Sweating</button>
      <div className='second-banner-img'>
        <img src={b} alt='' />
        <div className="bg1"></div>
        <div className='second-banner-details'>
          <h3>100% Results Guaranteed</h3>
          <p>
            The program offers a wide range of exercises and training techniques
            carefully curated to optimize your progress and ensure maximum
            efficiency. From resistance training and cardiovascular workouts to
            functional movements and flexibility exercises, every aspect of your
            fitness journey is considered. Expert trainers and fitness
            professionals are readily available to provide guidance, support,
            and motivation throughout your training. They will work closely with
            you to develop a customized workout plan, track your progress, and
            make necessary adjustments to keep you on the path to success.
          </p>
          <button>
           learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export default SecondBanner