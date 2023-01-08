import React from "react";
import styles from "./style";
import {Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";



const App = () => {

  return(<div className="bg-primary w-full ">
    
    <Routes>

      <Route path="/" element={<Home />} />
      {/*<Route path="/dashboard" element={<Dashboard />} />
      <Route path="/createproject" element={<CreatePage />} />
      <Route path="/settings/:contractaddr" element={<Configs />} />
      <Route path="/domain/:contractaddr" element={<Domain />} />*/}
      
      <Route path="*" element={<Home />} />
    </Routes>
    
 
    <ToastContainer 
      autoClose={3000}
      limit={1}
          
    />
  </div>
  )
};

export default App;