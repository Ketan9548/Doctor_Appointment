import React from 'react'
import { createContext } from 'react'
import { doctors } from '../assets/assets'

export const AppContextProvider = createContext()

const AppContext = ({ children }) => {
    const value = { doctors };
    return (
        <>
            <AppContextProvider.Provider value={value}>
                {children}
            </AppContextProvider.Provider>
        </>
    )
}

export default AppContext
