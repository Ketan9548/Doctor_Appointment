import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='mx-3 sm:mx-[6%]'>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App