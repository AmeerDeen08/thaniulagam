import React, { useEffect } from "react";
import Postcard from "./Postcard";
import { useState } from "react";
import axios from 'axios';
import { Tab,Tabs } from "react-bootstrap";
import NavBar from "./NavBar";
import BackgroundImg from './sources/homeBg.jpg'
// import BackgroundImg from './sources/homeBg.jpg'



// const Contents = [
//   {
//     Title: "Thalapathy vijay wins Oscars",
//     Content:
//       "In a historic moment for Indian cinema, Thalapathy Vijay has won the Best Actor award at the 96th Academy Awards for his remarkable performance in the internationally acclaimed film 'Bigil'. This achievement marks the first time a South Indian actor has been honored with this prestigious award, bringing immense pride to the Indian film industry and his millions of fans worldwide",
//   },
//   {
//     Title: "Ajith Kumar to join in sets of Vadachennai 2",
//     Content:
//       "In a surprising and exciting turn of events for Tamil cinema, Ajith Kumar, one of the biggest stars in the industry, is set to join the cast of 'Vada Chennai 2.' Directed by acclaimed filmmaker Vetrimaaran, the sequel to the critically acclaimed 'Vada Chennai' has already generated much buzz among fans and film enthusiasts. Ajith Kumar's involvement in the project adds a new layer of anticipation, given his immense popularity and his choice of impactful and diverse roles.",
//   },
// ];

export default function Home(props) {
  const [AllPosts,setAllPosts]=useState([]);
  const [SPosts,setSPosts]=useState([]);
  const currName=window.localStorage.getItem("currName");

useEffect(()=>{

axios.get("http://localhost:3000/getPosts").then(posts=>setAllPosts(posts.data)).catch(err=> console.log(err))
},[])
axios.post("http://localhost:3000/getPostsByUser",{uploadedBy:currName}).then(posts=>{setSPosts(posts.data)}).catch(err=> console.log(err))
  // const [Post, setpost] = useState({
  //   Post: Contents,
  // });
  return (
    
    <div
    style={{
      backgroundImage: `url(${BackgroundImg})`,
      backgroundSize: "cover",
      backgroundPosition:"center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh"
    }}>
      <NavBar/>
    <div className="container my-3" >
      <Tabs
      defaultActiveKey="All Posts"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="All Posts" title="All Posts">
      <div className="row">
        {AllPosts.map((element) => {
          return (<div className="col-3">
              <Postcard Title={element.Title} Content={element.Content} Image={element.Image} uploadedBy={element.uploadedBy}modeStatus={props.mode}/>
            </div>
          );
        })}
      </div>
      </Tab>
      <Tab eventKey="Cinema" title="Cinema">
      <div className="row">
      {SPosts.map((element) => {
          return (<div className="col-3">
              <Postcard Title={element.Title} Content={element.Content} uploadedBy={element.uploadedBy} Image={element.Image} modeStatus={props.mode}/>
            </div>
          );
        })}
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
      
      
    </div>
    </div>
  );
}
