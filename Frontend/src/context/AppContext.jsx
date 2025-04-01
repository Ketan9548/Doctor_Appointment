import React from 'react'
import { createContext } from 'react'
import { doctors } from '../assets/assets'

export const AppContextProvider = createContext()

const AppContext = ({ children }) => {
    const currencysymble = '$';
    const value = { doctors,currencysymble};
    return (
        <>
            <AppContextProvider.Provider value={value}>
                {children}
            </AppContextProvider.Provider>
        </>
    )
}

export default AppContext
