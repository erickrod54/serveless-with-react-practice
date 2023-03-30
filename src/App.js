import Basic from "./Basic";
import Airtable from "./Airtable";
import { ServelessReactProvider } from "./context";

/**serveless-with-react-practice app version 6.01 - Basic js file 
 * - Features:
 * 
 *      --> Wrapping with 'ServelessReactProvider' the App.
 * 
 *      --> Changing versioning to two digits.   
 * 
 * Note: this api 'url' was previusly built for the 
 * serveless-functions-practice, this practice is
 * in order to use it with a react front-end.
 */


function App() {
  return <>
    <ServelessReactProvider>
      <Basic />
      <Airtable />
    </ServelessReactProvider>
  </>
}

export default App
