import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <p className="pb-3 mt-12 font-medium text-zinc-600 border-b text-lg">Your Appointments</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {doctors.slice(0, 4).map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center md:items-start border border-gray-200">
            {/* Doctor Image */}
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />

            {/* Doctor Details */}
            <div className="mt-4 text-center md:text-left">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-600">{item.speciality}</p>
              <p className="text-gray-600 font-medium mt-2">Address:</p>
              <p className="text-sm text-gray-500">{item.address.line1}</p>
              <p className="text-sm text-gray-500">{item.address.line2}</p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold text-blue-500">Date & Time:</span> 25 June 2024 | 6:30 PM
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4 w-full justify-center md:justify-start">
              <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">
                Pay Online
              </button>
              <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
