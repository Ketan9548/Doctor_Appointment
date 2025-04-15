import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

import React from 'react'

const AdminContextProvider = (props) => {
    const [aToken, setAtoken] = useState(localStorage.getItem('admintoken') ? localStorage.getItem('admintoken') : '')
    const backendurl = import.meta.env.VITE_BAKCEND_URL
    const value = {
        aToken, setAtoken,
        backendurl
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
