import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify'

export const AdminContext = createContext();

import React from 'react'

const AdminContextProvider = (props) => {
    const [doctors, setDoctors] = useState([])
    const [aToken, setAtoken] = useState(localStorage.getItem('admintoken') ? localStorage.getItem('admintoken') : '')
    const backendurl = import.meta.env.VITE_BAKCEND_URL
    const getallDoctors = async () => {
        try {
            const { data } = await axios.post(backendurl + '/api/admin/all-doctors', {}, { headers: { aToken } })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docID) => {
        try {
            const { data } = await axios.post(backendurl + '/api/admin/change-availabilty', { docID }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getallDoctors()
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAtoken,
        backendurl, doctors, getallDoctors, changeAvailability
    }
    return (
        <>
            <AdminContext.Provider value={value}>
                {props.children}
            </AdminContext.Provider>
        </>
    )
}

export default AdminContextProvider
