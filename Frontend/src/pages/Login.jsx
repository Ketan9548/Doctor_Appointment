import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitButton = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
        <div className="text-center mb-6">
          <p className="text-2xl font-semibold text-gray-800">{state === 'Sign Up' ? 'Create Account' : "Login"}</p>
          <p className="text-gray-600">Please {state === 'Sign Up' ? 'Create Account' : "login"} to book Appointment</p>
        </div>
        <div className="space-y-4">
          {state === "Sign Up" && <div>
            <p className="text-gray-700 font-medium">Full Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>}
          <div>
            <p className="text-gray-700 font-medium">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button className="w-full mt-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          {state === 'Sign Up' ? 'Create Account' : "Login"}
        </button>
        <div className="text-center mt-4 text-gray-700">
          {state === "Sign Up" ? (
            <p>Already have an account? <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => setState('Login')}>Login here</span></p>
          ) : (
            <p>Create an account? <span className="text-blue-500 cursor-pointer hover:underline" onClick={() => setState('Sign Up')}>Click here</span></p>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login