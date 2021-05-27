import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Plus from './Plus';


const App = () => {
  
  return ( 
      <BrowserRouter>
      <ToastContainer/>
          <Plus/>
      </BrowserRouter>
   );
}
 
export default App;

