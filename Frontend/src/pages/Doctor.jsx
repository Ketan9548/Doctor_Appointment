import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContextProvider } from '../context/AppContext';

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filter, setfilter] = useState([]);

  const { doctors } = useContext(AppContextProvider);

  const filterapply = () => {
    if (speciality) {
      setfilter(doctors.filter((doctor) => doctor.speciality === speciality));
    }
    else if (!speciality) {
      setfilter(doctors);
    }
  }

  useEffect(() => {
    filterapply();
  }, [doctors, speciality])

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Sidebar - Specialities */}
          <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Specialties</h2>
            <div className="space-y-3">
              {["General Physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec, index) => (
                <p key={index} className="bg-blue-100 px-4 py-2 rounded-md text-center text-gray-600 hover:bg-blue-200 cursor-pointer transition">
                  {spec}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side - Doctor Listings */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filter.map((item) => (
              <div key={item._id} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full mb-4" src={item.image} alt={item.name} />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    <p className="text-sm font-medium text-green-600">Available</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-700">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.speciality}</p>
                </div>
                <button onClick={() => navigate(`/appointment/${item._id}`)} className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 hover:bg-blue-600">
                  More
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Doctor
