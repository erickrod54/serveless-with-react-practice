import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom'


/**serveless-with-react-practice app version 6 - Product
 * Component - Features:
 * 
 *      --> Building the return for the single 'Product'
 *          page
 * 
 * Note: By this version the single product should be
 * render 
 */

const Product = () => {
    
    /**just in case of error, i handle it by loading */
    const [ loading, setLoading ] = useState(true);

    /**here i build the state to set the product data,
     * once i get the data from the API*/
    const [product, setProduct ] = useState(null);

    /**here i get the whole 'useParams' object*/
    const data = useParams()

    /**so i pulled and named, because i need the 'id' value*/
    const { productID } = useParams()

    /**the name defined in the routing 'productID' 
     * will contain the 'id', this object is 'useParams' 
     * hook*/
    console.log('this is useParams ==> ', data)
    
    console.log('this is id value ==> ', productID)
    
    /**here i build the url */
    const url = `/api/products?id=${productID}`
    
    /**here i fetch the product 'data' */
    const fetchData = async () => {

        try {
            /**here i pulled the 'product' data*/
            const { data } = await axios.get(url)
            /**here i set the 'product' data from the 
             * API as the 'product' state*/
            setProduct(data)
        } catch (error) {
            
        }
        /**i set the loading 'false', just in case 
         * to get the data right */
        setLoading(false)
    }

    /**i implement useEffect to invoke 'fetchData', once
     * the Component mounts*/
    useEffect(() => {
        fetchData()
    }, [])

    /**here i implement conditional rendering to render a 
     * 'loading' message */
    if (loading) {
        return <section className="section section-center">
            <h2>Loading ... </h2>
        </section>
    }

    /**if get the products right i should be able to
     * destructure and console.log or render some
     * props from the state previously set*/
    const { fields } = product;
    const { name, desc, price, image } = fields;

    console.log('the product id is ==> ', productID,' and the name associated ==>', name)

    return(
         <section className="section section-center">
            <Link to='/' className="link">
                back home
            </Link>
            <div>
                <div className="title">
                    <h2>{name}</h2>
                    <div className="title-underline"/>
                </div>
                <article className='single-product'>
                    <img className='single-product-img' 
                    src={image[0].url} 
                    alt={name}/>
                <div>
                    <h5>{name}</h5>
                    <h5 className="price">${price}</h5>
                    <p>{desc}</p>
                </div>
                </article>
            </div>
         </section>
        )
    }
    
    export default Product;