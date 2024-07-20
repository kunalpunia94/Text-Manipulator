import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';  //we wrote navbar down it automatically being imported bcoz of that extesnion
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode,Setmode]=useState('light') //whether dark mode is enable or not 

  const [alert,Setalert]=useState(null);

  const showalert=(message,type)=>{
    Setalert({
      message: message,
      type:type 
    })
    setTimeout(() => {
      Setalert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      Setmode('dark')
      document.body.style.backgroundColor='grey'
      showalert("Dark mode has been enabled","success")
      document.title="TextUtils - Drak mode"
    }else{
      Setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Light mode has been enabled","success")
      document.title="TextUtils - Light mode"
    }
  }


  return (
    <>
    {/* in below line i have passed that property  */}
    {/* now router concepts fully has been chaged wht codewith harry has tuaght */}
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
      {/* <Navbar />    this will take values which we have declared for the default one */}
      <Alert alert={alert}/>


    {/* below this is one of the class of bootstrap which auto... gives some property to this container 
    inside conatiner my-3 class give margin in y property of bootstrap*/}
    <div className="container my-3">  

    {/* <Routes> */}
      {/* users --> component 1
          users/home --> component 2 */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze below"/>} /> */}
          <TextForm showalert={showalert} heading="Enter the text to analyze below"/>
    {/* </Routes> */}

      
    </div>
    {/* </Router>  */}
    
    </>
  );
}

export default App;
