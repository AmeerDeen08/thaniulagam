import React from "react";
import { Card, Button } from "react-bootstrap";
import "./sources/stylings/Postcard.css"; // Import CSS file

export default function Postcard(props) {
  const titleString = props.Content;
  const paddedContent = titleString.padEnd(500, " ");
  const paddedTitle = props.Title.padEnd(63, " ");
  const textColorClass = props.modeStatus === "dark" ? "text-white" : "text-dark";
  // const currAccId=window.localStorage.getItem("currName");
  

  return (
    <div className="card-container">
      <Card className={`equal-card hi ${textColorClass} mb-5 `}>
        <Card.Body className="card-body">
        <Card.Img
          variant="top"
          src={props.Image}
          alt="Post image"
          style={{ objectFit: "cover", maxHeight: "150px", marginBottom:"20px" }} 
        />
          <Card.Title><strong>{paddedTitle}</strong></Card.Title>
          <Card.Text className="card-content">{paddedContent}</Card.Text>
          <Button className="read-more-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"variant="outline-light">
            Read more
          </Button>
        </Card.Body>
        <Card.Body>
          <Card.Link className="text-white">by {props.uploadedBy}</Card.Link>
        </Card.Body>
      </Card>
      {console.log(props.Image)}
    </div>
  );
}
