import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClassSchedule = () => {
  const navigate = useNavigate()
  const handleBookClass = (exercise) => {
   
    
navigate('/booking-form')
  }

  return (
    <div className='class-schedule'>
      <h2>Fitness Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Class</th>
            <th>Instructor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Class
            time='09:00 AM'
            exercise='Yoga'
            instructor='John Doe'
            onBookClass={handleBookClass}
          />
          <Class
            time='11:00 AM'
            exercise='Zumba'
            instructor='Jane Smith'
            onBookClass={handleBookClass}
          />
          <Class
            time='02:00 PM'
            exercise='HIIT'
            instructor='Mike Johnson'
            onBookClass={handleBookClass}
          />
          <Class
            time='04:00 PM'
            exercise='Pilates'
            instructor='Sarah Brown'
            onBookClass={handleBookClass}
          />
          <Class
            time='06:00 AM'
            exercise='Spinning'
            instructor='Alex Wilson'
            onBookClass={handleBookClass}
          />
          <Class
            time='12:00 PM'
            exercise='Kickboxing'
            instructor='Tom Davis'
            onBookClass={handleBookClass}
          />
          <Class
            time='03:00 PM'
            exercise='Barre'
            instructor='Emily Thompson'
            onBookClass={handleBookClass}
          />
          <Class
            time='05:00 PM'
            exercise='CrossFit'
            instructor='Jason Anderson'
            onBookClass={handleBookClass}
          />
          <Class
            time='07:00 PM'
            exercise='Pilates'
            instructor='Sophia Rodriguez'
            onBookClass={handleBookClass}
          />
          <Class
            time='09:00 AM'
            exercise='Bootcamp'
            instructor='David Lee'
            onBookClass={handleBookClass}
          />
        </tbody>
      </table>
    </div>
  )
}

const Class = ({ time, exercise, instructor, onBookClass }) => {
  const handleBookClass = () => {
    onBookClass(exercise)
  }

  return (
    <tr>
      <td>{time}</td>
      <td>{exercise}</td>
      <td>{instructor}</td>
      <td>
        <button className='book-btn' onClick={handleBookClass}>Book</button>
      </td>
    </tr>
  )
}

export default ClassSchedule
