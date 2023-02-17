import './App.css';
import Navbar from './component/Navbar';
import React, {useState} from 'react';
import Textforms from './component/Textforms';
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App(){
  const[mode, setMode]   = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode", "success");
      document.title = 'dark-mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode", "success");
      document.title = 'light-mode';
    }
  }
  return(
    <>
     {/* <Router> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
   <Alert alert = {alert} />

    <div className="container my-4">
    {/* <Routes>
            <Route path="/about" element = { <About />}/>
            <Route exact path="/" element = { <Textforms showAlert = {showAlert} heading = "enter text" mode={mode}/> } />
    </Routes> */}
     <Textforms showAlert = {showAlert} heading = "enter text" mode={mode}/>
     </div>
    {/* </Router> */}
    </>
  );
}
export default App;





