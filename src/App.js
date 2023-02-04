
import './AppkaCss.css';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react';
import Alert from './Alert';
// import {
//  BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);

  // const changeMode=(nMode)=>{

  // }

  const showAlert=(message,type)=>{
      setAlert({ 
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
  }

  const toggelMode = () => {
    setMode({
      mode:mode
    })
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has beed diabled","primery");
      document.title='TextUtils -DarkMode';
    }
    
    
    else  {
      setMode('dark');
      document.body.style.backgroundColor = '#1b1347';
     
      showAlert("Dark mode has beed diabled","success");

    }
  }

  return (
    <>
    {/* <Router> */}

    <Navbar title="TextUtils" mode={mode} toggelMode={toggelMode} setMode={setMode}/>
        <Alert alert={alert} />
    
      
      {/* {/* <div className='container my-3'>
      <Switch>
      <Route exact path="/about"> 
        <About/>   
      </Route>
      <Route exact path="/"> */}
        <Textform heading="Enter text for Analysis" mode={mode} showAlert={showAlert} />

      {/* </Route> */}
      
      {/* </Switch> */} */}
      {/* </div> */}
    {/* // </Router> */}
    </>
  );
}

export default App;
