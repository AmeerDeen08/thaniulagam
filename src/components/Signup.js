import React, { useState } from "react";
import "./sources/stylings/signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import atIcon from "./sources/at.svg";
import lockIcon from "./sources/lock-fill.svg";
import axios from "axios";
import personIcon from "./sources/person-circle.svg";
import Alert from "./Alert";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const Navigate=useNavigate();
  const [Details, setDetails] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [alert, setAlert] = useState(null);
  

  // const showAlert = (mesg, type) => {
  //   setAlert({
  //     msg: mesg,
  //     type: type,
  //   });
  // };

  const onSignup = (e) => {
    e.preventDefault();
    try {
      const response =axios.post(
        "http://localhost:3000/uploadAccounts",
        Details
      );
      console.log("successfull", response.data);
      setDetails({
        Name: "",
        Email: "",
        Password: "",
      });
      Navigate("/login");
    } catch (err) {
      console.log("Error found", err.message);
    }
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
            <Form onSubmit={onSignup}>
              {/* Name Input */}
              <InputGroup className="mb-3">
                <InputGroup.Text className="hi">
                  <img src={personIcon} alt="person-icon" width="16" height="16" />
                </InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Name"
                  className="hi"
                  value={Details.Name}
                  onChange={(e) =>
                    setDetails({ ...Details, Name: e.target.value })
                  }
                  required
                />
              </InputGroup>

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
                  value={Details.Email}
                  onChange={(e) =>
                    setDetails({ ...Details, Email: e.target.value })
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
                  value={Details.Password}
                  onChange={(e) =>
                    setDetails({ ...Details, Password: e.target.value })
                  }
                  required
                />
              </InputGroup>

              <div
                className="text-center"
                style={{ textShadow: "1px 1px 2px black", fontSize: "13px" }}
              >
                <Button className="hi mb-3" variant="secondary" type="submit">
                  SignUp
                </Button>
                <div>
                  <Link to={"/login"} className="text-white text-center">
                    Already have an account? Sign in
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
