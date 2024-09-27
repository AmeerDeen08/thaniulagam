import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import UploadPost from "./components/UploadPost";

import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  // const [mode, setmode] = useState("dark");
  const mode="dark";
  const [alert, setalert] = useState(null); 

  // const showAlert = (mesg, type) => {
  //   setalert({
  //     msg: mesg,
  //     type: type,
  //   });
    

  //   setTimeout(() => setalert(null), 8000);
  // };
  const onCloseHandler=()=>{
    setalert(null);
  }

  // const toggleButton = () => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     showAlert("Dark mode is applied", "success");
  //     document.body.style.backgroundImage=`url(${BackgroundImg})`
  //   } else {
  //     setmode("light");
  //     showAlert("Light mode is applied", "success");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };
const isLogin=window.localStorage.getItem("isLogin");
  return (
    <div className="mb-3">
      
    <Router>
      <div>
        
        <Alert msg={alert} onClose={onCloseHandler}/>
        <Routes> 
        {/* <Route path="/" element={<Home mode={mode} />}/> */}
        <Route path="/" element={isLogin? <Home mode={mode} /> :<Signup/>}/>
          <Route path="/about" element={<About />} /> 
          <Route path="/home" element={<Home mode={mode} />} />
          <Route path="/uploadPost" element={<UploadPost mode={mode}/>} />
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
