import React, { useEffect, useState } from "react";
import axios from 'axios'

/**this url comes from the serveless function*/
const url = '/api/products'

/**serveless-with-react-practice app version 3 - Airtable
 * Component - Features ( this is the front-end ):
 * 
 *      --> Building the return in the front-end   
 * 
 * Note: By this version i already get the 'data' from
 * the back-end running in this app, i can chek it out
 * by JavaConsole > Components > Airtable -checking
 * the state-. 
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
        <section className="section section-center">
            <div className="title">
                <h2>Airtable</h2>
                <div className="title-underline"/>
            </div>
            <div className="products">
                {products.map((product) => {
                    const { id, name, url, price } = product;
                    
                    return(
                        <article className="product" key={id}>
                            <img src={url} alt={name}/>
                            <div className="info">
                                <h5>{name}</h5>
                                <h5 className="price">{price}</h5>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Airtable;