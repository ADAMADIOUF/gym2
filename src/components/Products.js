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
          'X-RapidAPI-Key':
            '5b8911bf9bmshea4c762bb80c15dp1f7ce4jsn4e9cfd0a7eca',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
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
      <h3 className='heading'>Showing Results</h3>

      <div className='products'>
        {responseData &&
          responseData.slice(0, 15).map((exercise) => (
            <div key={exercise.id} className='exercise-item'>
              <h3 className='exercise-name'>{exercise.name}</h3>
              <p className='target'>Target: {exercise.target}</p>
              <p className='equipment'>Equipment: {exercise.equipment}</p>
              <img src={exercise.gifUrl} alt={exercise.name} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default FetchDataExample
