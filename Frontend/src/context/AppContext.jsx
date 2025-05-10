import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContext = createContext(); // ✅ Use AppContext

const AppContextProvider = ({ children }) => { // ✅ Rename component to AppContextProvider
    const currencysymble = '$';
    const [doctors, setDoctor] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') || false);
    const backendurl = import.meta.env.VITE_BACKEND_URL;
    const [userData, setuserdata] = useState(false);

    const getdoctordata = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/doctor/doctors/list`);
            if (data.success) {
                setDoctor(data.Doctors);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.log(error.message);
        }
    }

    const loaduserprofiledata = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/user/get-profile`, { headers: { token } });
            setuserdata(data.user); // assuming data.user contains user profile
            console.log("the value is: ", data);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getdoctordata();
    }, []);

    useEffect(() => {
        if (token) {
            loaduserprofiledata();
        } else {
            setuserdata(false);
        }
    }, [token]);

    const value = {
        doctors,
        currencysymble,
        backendurl,
        getdoctordata,
        token,
        setToken,
        userData,
        setuserdata,
        loaduserprofiledata,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider; // ✅ export the provider
