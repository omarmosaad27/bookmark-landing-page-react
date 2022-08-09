import React, { useContext, useState } from "react";
import featuresdata from './data/features'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [value, setValue] = useState(0);
    const [features, setFeatures] = useState(featuresdata)

    const { title, feature, info } = features[value];
    return (
        <AppContext.Provider value={{
            showMenu,
            setShowMenu,
            value,
            setValue,
            features,
            title,
            feature,
            info
        }}> 
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}