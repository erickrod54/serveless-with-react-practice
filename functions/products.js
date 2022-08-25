/** Serveless-with-react-practice version 2 - products
 * - Features ( this is the back-end ): 
 * 
 *        --> Taking the code from 'Unifying 'airtable 
 *              'js logic' - reference to serveless 
 *               function project -
 * 
 * Note: Now i'm using the code from that project from
 * the file '3-z-all-in-one' and running it in this 
 * project with 'react' and the 'netlify cli', as 
 * i called 'products' the serveless function i can 
 * change the original name to request the products
 * as is in the url. 
 * 
 * i can test it for all products to verify that i 
 * have access:
 *      
 *          http://localhost:8888/api/products
 * 
 * i can build also as that project a query for the
 * single product:
 * 
 *  http://localhost:8888/api/products?id=rec5yZ55DbuLPyKKz
 * 
 */

 require('dotenv').config()

 const Airtable = require('airtable-node');
 
 const airtable = new Airtable({ apiKey: process.env.AIRTABEL_API_KEY })
   .base(process.env.AIRTABLE_BASE_ID)
   .table(process.env.TABLE_NAME)


exports.handler = async(event, context, cb) => {
    console.log('event object for product js ==>', event)

   
    const { id } = event.queryStringParameters

    if (id) {
        try {
            
            const product = await airtable.retrieve(id)
         
            console.log('the single product id ==>',product)
            
           
            if (product.error) {
                return{
                    statusCode:404,
                    body:`No product with id: ${id}`
                }          
            }
            return{
                statusCode:200,
                body:JSON.stringify(product)
            }
        } catch (error) {
            return{
                statusCode:500,
                body:`Server Error`
            }
        }
    }
    try {
        const data = await airtable.list()
        const { records } = await airtable.list()
        console.log('this is the airtable-node object==>', data)
        console.log('here im accesing to the api records ==>', records )

        /**in this variable 'products' i map the 'records' */
        const products = records.map((product) => {
          const { id } = product;

          /**the fields object has this props from every
           * record */
          const { name, image, price } = product.fields

          /**as the image is an array, i just access '0' 
           * that will be the image data -i have only 1-*/
          const url = image[0].url

          /**and i return all the props */
          return { id, name, url, price }
        })
      return{
         headers: {
            'Access-Control-Allow-Origin':'*',
         },
         statusCode: 200,
         /**here i stringify the api */
         body: JSON.stringify(products),
     }
    } catch (error) {
      /**just in case it fail, i return the error */
      return{
        headers: {
           'Access-Control-Allow-Origin':'*',
        },
        statusCode: 500,
        body: 'Server Error',
    }  
    }
}