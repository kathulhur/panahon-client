import { Dispatch, SetStateAction, createContext, useState } from "react"
import { UnitOfMeasure } from "../../src/types"

export const UnitOfMeasureContext = createContext<{
    unitOfMeasure: UnitOfMeasure
    setUnitOfMeasure: Dispatch<SetStateAction<UnitOfMeasure>>
}>(null)




const UnitOfMeasureContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [unitOfMeasure, setUnitOfMeasure] = useState<UnitOfMeasure>(UnitOfMeasure.Celsius)

    return (
        <UnitOfMeasureContext.Provider value={{unitOfMeasure, setUnitOfMeasure}}>
            { children }
        </UnitOfMeasureContext.Provider>
    )
}

export { UnitOfMeasureContextProvider }
