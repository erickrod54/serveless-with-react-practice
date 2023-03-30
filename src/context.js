import React, { useContext } from "react";
import { url } from "./data";

/**serveless-with-react-practice app version 6.02 - context js 
 * - Features:
 * 
 *      --> Importing and providing 'url'.   
 * 
 * Note: this api 'url' was previusly built for the 
 * serveless-functions-practice, this practice is
 * in order to use it with a react front-end.
 */



const ServeLessReactContext = React.createContext();

export const ServelessReactProvider = ({ children }) => {

    return(
        <ServeLessReactContext.Provider
        value={{url}}
        >
            {children}
        </ServeLessReactContext.Provider>
    )
}


export const useServelessContext = () => {
    return useContext(ServeLessReactContext)
}