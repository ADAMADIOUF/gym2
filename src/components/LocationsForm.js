import React, { useState, useEffect } from 'react'

const LocationsForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')
  const [mapSrc, setMapSrc] = useState('')
  const [locations, setLocations] = useState([
    { id: 1, name: 'Location 1', address: '123 Main St, City 1, State 1' },
    { id: 2, name: 'Location 2', address: '456 Elm St, City 2, State 2' },
    { id: 3, name: 'Location 3', address: '789 Oak St, City 3, State 3' },
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Handle form submission logic here
    console.log('Form submitted')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Phone:', phone)
    console.log('Message:', message)
    console.log('Address:', address)

    // Reset form fields
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setAddress('')
    setMapSrc('')
  }

  useEffect(() => {
    if (address) {
      const encodedAddress = encodeURIComponent(address)
      const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed`
      setMapSrc(mapUrl)
    }
  }, [address])

  const handleLocationChange = (e) => {
    const selectedLocation = locations.find(
      (location) => location.id === parseInt(e.target.value)
    )
    if (selectedLocation) {
      setAddress(selectedLocation.address)
    }
  }

  return (
    <div className='locations-form'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='tel'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor='location'>Location</label>
          <select
            id='location'
            value={address}
            onChange={handleLocationChange}
            required
          >
            <option value=''>Select a location</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        {mapSrc && (
          <div className='map-container'>
            <iframe
              title='Location Map'
              width='100%'
              height='300'
              frameBorder='0'
              src={mapSrc}
              allowFullScreen
            ></iframe>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default LocationsForm
