import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

const AllApoitment = () => {
  const { aToken, getAppointments, appointments } = useContext(AdminContext)
  useEffect(() => {
    if (aToken) {
      getAppointments()
    }
  }, [aToken])
  return (
    <>
      <div>
        <p>all appointment</p>
        <div>
          <div>
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>fee</p>
            <p>Action</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllApoitment
