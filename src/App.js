import Basic from "./Basic";
import Airtable from "./Airtable";
/** Serveless-with-react-practice version 1 - App js
 * file - Features: 
 * 
 *        --> Importing and placing 'Basic' 
 *            Component.
 * 
 *        --> Importing and placing 'Airtable'
 *            Component.
 * 
 * Note: These Components handle fetching API's the
 * following ways:
 * 
 *      --> 'Basic' Component ----> fetching an
 *            existing API just having the url-
 * 
 *      --> 'Airtable' Component--> i create a 
 *           back-end with serveless functions
 *           and run the API in my own local 
 *           server
 */

function App() {
  return <>
    <Basic />
    <Airtable />
  </>
}

export default App
