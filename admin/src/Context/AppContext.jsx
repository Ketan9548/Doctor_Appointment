import { createContext } from "react";

export const AppContext = createContext();

import React from 'react'

const AppContextProvider = ( props ) => {
    const value = {}
    return (
        <>
            <AppContext.Provider value={value}>
                {props.children}
            </AppContext.Provider>
        </>
    )
}

export default AppContextProvider
