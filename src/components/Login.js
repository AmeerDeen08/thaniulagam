import React, { useState } from "react";
import "./sources/stylings/signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import atIcon from "./sources/at.svg";
import lockIcon from "./sources/lock-fill.svg";
import axios from "axios";

import Alert from "./Alert";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const Navigate = useNavigate();
  const [LogDetails, setLogDetails] = useState({
    // Name:"",
    Email: "",
    Password: "",
  });
  const [alert, setAlert] = useState(null);

  const showAlert = (mesg, type) => {
    setAlert({
      msg: mesg,
      type: type,
    });
  };

  const onSignin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/checkAccount", LogDetails)
      .then((result) => {
        console.log(result)
        if (result.data.data === "success") {
          window.localStorage.setItem("currName",result.data.Name);
          window.localStorage.setItem("currAcc",JSON.stringify({...LogDetails}));
          window.localStorage.setItem("isLogin",true);
          console.log(window.localStorage.getItem("currAcc"));
          Navigate("/home");
        } else if (result.data === "invalid_password") {
          showAlert("Incorrect Password. Try Again");
          setTimeout(() => {
            setAlert(null);
          }, 2000);
          console.log("inv passwd");
        } else {
          console.log("Id_not found");
          showAlert("Unable to find your account");
          setTimeout(() => {
            setAlert(null);
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("Error found", err.message);
      });
  };

  const onCloseHandler = () => {
    setAlert(null);
  };

  return (
    <>
      <div className="alert">
        <Alert msg={alert} onClose={onCloseHandler} />
      </div>
      <div className="Imgbody">
        <div className="leftimg"></div>
        <div className="rightimg">
          <h1 className="e1text container shadow-dr">Welcome to</h1>
          <h1 className="e2text container shadow-dr">ThaniUlagam.com</h1>
          <div className="form-container">
            <Form onSubmit={onSignin}>
              {/* Email Input */}
              <InputGroup className="mb-3">
                <InputGroup.Text className="hi">
                  <img src={atIcon} alt="at-icon" width="16" height="16" />
                </InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Email"
                  className="hi"
                  type="email"
                  value={LogDetails.Email}
                  onChange={(e) =>
                    setLogDetails({ ...LogDetails, Email: e.target.value })
                  }
                  required
                />
              </InputGroup>

              {/* Password Input */}
              <InputGroup className="mb-4">
                <InputGroup.Text className="hi">
                  <img src={lockIcon} alt="lock-icon" width="16" height="16" />
                </InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Password"
                  className="hi"
                  type="password"
                  value={LogDetails.Password}
                  onChange={(e) =>
                    setLogDetails({ ...LogDetails, Password: e.target.value })
                  }
                  required
                />
              </InputGroup>

              <div
                className="text-center"
                style={{ textShadow: "1px 1px 2px black", fontSize: "13px" }}
              >
                <Button className="hi mb-3" variant="secondary" type="submit">
                  Login
                </Button>
                <div>
                  <Link to={"/"} className="text-white text-center">
                    New to ThaniUlagam? Register here
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
