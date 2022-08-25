import React, { useEffect, useState } from "react";
import axios from "axios";
const url = 'https://serveless-functions-practice.netlify.app/api/2-basic-api'

/**serveless-with-react-practice app version 2 - Basic js file 
 * - Features:
 * 
 *      --> Fetching the data from the API 'url'
 *          - this way i test that i can fetch an
 *            existing API jus having the url-
 * 
 *      --> Building the return for the front-end.   
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
            //console.log('the axios data ==>', AxiosData)
            const { data } = await axios.get(url)
            setProducts(data)
        } catch (error) {
            
        }
    }

    /**will trigger the fetch once the Component mounts */
    useEffect(() => {
        fetchData()
    }, [])

    //console.log('this is what i get from the API', products)

    /**here i set the styles and build the return 
     * for the data previusly fetched */
    return(
        <section className="section section-center">
            <div className="title">
                <h2>basic setup</h2>
                <div className="title-underline"/>
            </div>
            <div className="products">
                {products.map((product) => {
                    const {id, image:{url}, price, name} = product;
                    
                    return(
                        <article className="product" key={id}>
                            <img src={url} alt={name}/>
                            <div className="info">
                                <h5>{name}</h5>
                                <h5 className="price">${price}</h5>
                            </div>
                        </article>
                        )
                })}
            </div>
        </section>
    )
}

export default Basic;