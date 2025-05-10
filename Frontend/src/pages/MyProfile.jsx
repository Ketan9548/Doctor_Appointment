import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const MyProfile = () => {
  const { userData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-100 p-6">
      {/* Profile Section */}
      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <img
            src={userData.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
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
              <p className="text-xl font-semibold text-gray-800">
                {userData.name}
              </p>
            )}
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-left">
          <p className="text-lg font-semibold text-gray-700">
            Contact Information
          </p>
          <div className="mt-2 space-y-2">
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
            <p className="text-gray-600">
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
            <p className="text-gray-600">
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
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <p className="text-xl font-semibold text-gray-700">Basic Information</p>
          <div className="mt-2 space-y-2">
            <p className="text-gray-600">
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
            <p className="text-gray-600">
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
          className="w-full mt-4 py-2 bg-white border text-black hover:text-white cursor-pointer font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save" : "Edit Profile"}
        </button>
      </div>

      {/* Additional Content Section */}
      <div className="w-full lg:w-2/3 bg-white p-6 mt-6 lg:mt-0 lg:ml-6 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-blue-600">Hello!</h2>
        <p className="text-lg leading-relaxed mt-2 text-gray-700">
          I'm <span className="text-blue-600 font-bold">{userData.name}</span>, a passionate and dedicated individual who thrives on continuous learning and innovation.
          With a strong interest in technology and problem-solving, I am always looking for ways to improve and create meaningful solutions.
          I believe in the power of persistence, creativity, and collaboration to drive success. My goal is to leverage my skills to make a positive impact,
          whether through coding, design, or leadership. I am excited about new challenges, eager to learn, and always striving for excellence in everything I do.
        </p>
      </div>
    </div>
  );
};

export default MyProfile;
