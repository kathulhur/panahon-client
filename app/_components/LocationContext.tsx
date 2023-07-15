import { Dispatch, SetStateAction, createContext, useState } from "react"

export const LocationContext = createContext<{
    location: string
    setLocation: Dispatch<SetStateAction<string>>
}>(null)




const LocationContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [location, setLocation] = useState('manila')

    return (
        <LocationContext.Provider value={{location, setLocation}}>
            { children }
        </LocationContext.Provider>
    )
}

export { LocationContextProvider }
