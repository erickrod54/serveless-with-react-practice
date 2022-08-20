import React, { useEffect, useState } from "react";
import axios from "axios";
const url = 'https://serveless-functions-practice.netlify.app/api/2-basic-api'

/**serveless-with-react-practice app version 1 - Basic js file 
 * - Features:
 * 
 *      --> Fetching the data from the API 'url'
 * 
 * Note: this api 'url' was previusly built for the 
 * serveless-functions-practice, this practice is
 * in order to use it with a react front-end.
 */

const Basic = () => {

    const [ products, setProducts ] = useState([]);

    /**here i fetch the data */
    const fetchData = async () => {
        try {
            const AxiosData  = await axios.get(url)
            console.log('the axios data ==>', AxiosData)
            const { data } = await axios.get(url)
            setProducts(data)
        } catch (error) {
            
        }
    }

    /**will trigger the fetch once the Component mounts */
    useEffect(() => {
        fetchData()
    }, [])

    console.log('this is what i get from the API', products)

    return(
        <section>
            hello from basic example
        </section>
    )
}

export default Basic;