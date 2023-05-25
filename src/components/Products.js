
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchDataExample() {
  const [responseData, setResponseData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
      }

      try {
        const response = await axios.request(options)
        setResponseData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='products-work section-center'>
      <h3>Showing Results</h3>

      <div className='products'>
        {responseData &&
          responseData.slice(0, 15).map((exercise) => (
            <div key={exercise.id}>
              <h3>{exercise.name}</h3>
              <p>Target: {exercise.target}</p>
              <p>Equipment: {exercise.equipment}</p>
              <img src={exercise.gifUrl} alt={exercise.name} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default FetchDataExample
