import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

export const AppContextProvider = createContext()

const AppContext = ({ children }) => {
    const currencysymble = '$';
    const [doctors, setDoctor] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false);
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const getdoctordata = async () => {
        try {
            const { data } = await axios.get(backendurl + '/api/doctor/doctors/list')
            if (data.success) {
                setDoctor(data.doctors)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
            console.log(error.message)
        }
    }

    const value = { doctors, currencysymble, backendurl, getdoctordata, token, setToken };
    return (
        <>
            <AppContextProvider.Provider value={value}>
                {children}
            </AppContextProvider.Provider>
        </>
    )
}

export default AppContext
