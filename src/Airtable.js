import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

/**this url comes from the serveless function*/
const url = '/api/products'

/**serveless-with-react-practice app version 4 - Airtable
 * Component - Features ( this is the front-end ):
 * 
 *      --> Importing and with 'Link' Component
 *          the 'Product' image.
 * 
 * Note: the 'Link' Component has a 'to' attribute, i'll
 * route with '/${id}' that is in the routing the same as
 * '/productID' that has as child the 'Product' Component
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
                        <Link to={`/${id}`} className="product" key={id}>
                            <img src={url} alt={name}/>
                            <div className="info">
                                <h5>{name}</h5>
                                <h5 className="price">${price}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Airtable;