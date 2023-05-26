import React from 'react'
import { Link } from 'react-router-dom'
const Method = () => {
  return (
    <div className='method'>
      <div className='section-center'>
        <div className='method-container'>
          <article>
            <img
              src='https://res.cloudinary.com/dvjfemxbz/image/upload/Woman-exercising-pilates-machine-dumbells-e1663928692217.jpg'
              alt=''
            />
            <h3>Body Shap</h3>
            <p>
              Diamond Shape: Diamond-shaped bodies have a wider midsection,
              including the waist and hips, with narrower shoulders and bust.
              The legs and arms are usually slimmer in comparison.
            </p>
          </article>
          <article>
            <img
              src='https://i.insider.com/5afc7a4647ac592d008b4cde?width=1000&format=jpeg&auto=webp'
              alt=''
            />
            <h3>Extreme</h3>
            <p>
              Diamond Shape: Diamond-shaped bodies have a wider midsection,
              including the waist and hips, with narrower shoulders and bust.
              The legs and arms are usually slimmer in comparison.
            </p>
          </article>
          <article>
            <img
              src='https://www.wellnessliving.com/blog/wp-content/uploads/2019/04/Gym-Merchandise-Feature-Image.jpg'
              alt=''
            />
            <h3>Burn</h3>
            <p>
              Diamond Shape: Diamond-shaped bodies have a wider midsection,
              including the waist and hips, with narrower shoulders and bust.
              The legs and arms are usually slimmer in comparison.
            </p>
          </article>
          <article>
            <img
              src='https://www.bodybuilding.com/images/2020/january/what-the-best-personal-trainers-know-that-you-dont-header-960x540.jpg'
              alt=''
            />
            <h3>Hiit</h3>
            <p>
              Diamond Shape: Diamond-shaped bodies have a wider midsection,
              including the waist and hips, with narrower shoulders and bust.
              The legs and arms are usually slimmer in comparison.
            </p>
          </article>
        </div>
      </div>
      <div className='class'>
        <Link to={`/schedule`}>
          <button className='btn btn-class'>our class</button>
        </Link>
      </div>
    </div>
  )
}

export default Method