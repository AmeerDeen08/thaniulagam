import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import BackgroundImg from './sources/homeBg.jpg'
import Alert from "./Alert";
import './sources/stylings/Login.css'
import NavBar from "./NavBar";

export default function UploadPost(props) {
  const currUploadedBy=window.localStorage.getItem("currName");
  const [Upost, setUpost] = useState({
    Title: "",
    Content: "",
    Image:"",
    uploadedBy:currUploadedBy,
  });

  const [alert, setalert] = useState(null); 

  const showAlert = (mesg, type) => {
    setalert({
      msg: mesg,
      type: type,
    });}

const handleUploadImage=(e)=>{
  const i=new FileReader();
  i.readAsDataURL(e.target.files[0]);
  i.onload=()=>{
    setUpost({...Upost,Image: i.result })
  }
  i.onerror=(err)=>{
    console.log(err);
  }
}

  const uploadSubmitHandler = async (e) => {
    try{
        e.preventDefault();
        const response=await axios.post("http://localhost:3000/uploadPosts",Upost);
        console.log("Uploaded Succesfully",response.data);
        showAlert("Uploaded Succesfully","success");
        setTimeout(()=>{setalert(null)},1000)
       

        setUpost({Title:"",Content:"",Image:"", uploadedBy:currUploadedBy})
      }catch(err){
        console.log(err.message)
      }
      
    }
    

  return (
    <div
    
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      
    }}>
      <NavBar/>
    <div className="pt-5">
      <Alert msg={alert}/>
      
      <div className="container ">
        <h1 className={`text-white mb-3`}>Upload your Post</h1>

        <Form onSubmit={uploadSubmitHandler} className={`text-${
                  props.mode === "light" ? "dark" : "light" 
                }`}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
            className="hi"
              onChange={(e) => {
                setUpost({ ...Upost, Title: e.target.value });
              }}
              value={Upost.Title}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
            className="hi"
              onChange={(e) => {
                setUpost({ ...Upost, Content: e.target.value });
              }}
              value={Upost.Content}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Attach image ? : </Form.Label>
            <Form.Control className="hi" type="file" onChange={handleUploadImage}/>
          </Form.Group>
          <Button  className='mt-3'type="submit">Upload</Button>
          
        </Form>
      </div>
    </div>
    </div>
  );
}
