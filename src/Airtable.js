import React, { useEffect, useState } from "react";
import axios from 'axios'

/**this url comes from the serveless function*/
const url = '/api/products'

/**serveless-with-react-practice app version 2 - Airtable
 * Component - Features ( this is the front-end ):
 * 
 *      --> Making a const 'url' where i keep the
 *          API url value - the products API-
 * 
 *      --> Building state to keep the data once
 *         get fetched.
 * 
 *      --> Building fetchData to fetch the data 
 *          from the serveless function.  
 * 
 *      --> Invoking using useEffect the serveless
 *          function the 'fetchData' to check that
 *          i'm getting the products data in the 
 *          front-end   
 * 
 * Note: By this version i already get the 'data' from
 * the back-end running in this app, i can chek it out
 * by JavaConsole > Components > Airtable -checking
 * the state-.
 * 
 *The next version will focus in building the return 
 *in the front-end 
 */

const Airtable = () => {
    const [products, setProducts ] = useState([])

    const fetchData = async () => {

        try {
            const axiosObject = await axios.get(url)
            const { data } = await axios.get(url)
            console.log('this is the axios object ==>', axiosObject)
            console.log('here i pull the data ==>', data)
            setProducts(data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <div>hello from airtable</div>
    )
}

export default Airtable;