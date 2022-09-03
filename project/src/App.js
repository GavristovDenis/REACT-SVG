import Header from './Components/Header';
import './App.css';
import MainBody from './Components/main-body';
import React, { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";




function App() {
  const [Loading, setLoading] = useState(true)
useEffect(() =>{
setTimeout(() => {
setLoading(false)
},2000)
}, [])
  return (
    <div>
      {
        Loading ?

        <span className='App'><ClipLoader color={"#DF126F"} loading={Loading} size={150} /></span>

        :
        <><Header /><MainBody /></>
      }
      
  
    </div>
  );
  }

export default App;
