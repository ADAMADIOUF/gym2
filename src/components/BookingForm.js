import React, { useState } from 'react'

const BookingForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState('')

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleDateChange = (event) => {
    setDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Perform form submission or booking logic here
    console.log('Booking form submitted')
    console.log('First Name:', firstName)
    console.log('Last Name:', lastName)
    console.log('Phone Number:', phoneNumber)
    console.log('Date:', date)

    // Reset form fields
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setDate('')
  }

  return (
    <div className='booking-form'>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type='text'
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Last Name:
          <input type='text' value={lastName} onChange={handleLastNameChange} />
        </label>
        <label>
          Phone Number:
          <input
            type='tel'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label>
          Date:
          <input type='date' value={date} onChange={handleDateChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BookingForm
