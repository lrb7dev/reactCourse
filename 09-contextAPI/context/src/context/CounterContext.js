// 1 - criar context
import {createContext, useState} from "react"

const CounterContext = createContext()
export default CounterContext

// 2 - criar provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5)

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )

}