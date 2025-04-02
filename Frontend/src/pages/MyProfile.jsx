import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Jon',
    image: assets.profile_pic,
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA',
    gender: 'Male',
    dob: '2000-01-01',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md border border-gray-200 text-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
        />
        <div className="mt-4">
          {isEdit ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-xl font-semibold text-gray-800">{userData.name}</p>
          )}
        </div>
        <hr className="my-4" />
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-700">Contact Information</p>
          <div className="mt-2">
            <p className="text-gray-600">
              <span className="font-medium">Email:</span>
              {isEdit ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="ml-2">{userData.email}</span>
              )}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Phone:</span>
              {isEdit ? (
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="ml-2">{userData.phone}</span>
              )}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Address:</span>
              {isEdit ? (
                <input
                  type="text"
                  name="address"
                  value={userData.address}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="ml-2">{userData.address}</span>
              )}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Gender:</span>
              {isEdit ? (
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <span className="ml-2">{userData.gender}</span>
              )}
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-medium">Date of Birth:</span>
              {isEdit ? (
                <input
                  type="date"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  className="w-full p-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="ml-2">{userData.dob}</span>
              )}
            </p>
          </div>
        </div>
        <button
          className="w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;