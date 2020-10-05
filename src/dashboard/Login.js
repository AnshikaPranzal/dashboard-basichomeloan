import React, { useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { Row, Col, Card, CardTitle, Input, Button } from "reactstrap";
import logo from "../images/Group 2455.svg";
// import { Input } from '@material-ui/core';
import { Auth } from "aws-amplify";

const initialForm = {
  phone_number: "",
  authCode: "",
  otp: 0,
};

const Login = (props) => {
  const [form, updateForm] = useState(initialForm);
  const [user, setUser] = useState();

  const onChange = (e) => {
    console.log("hi");
    e.persist();
    updateForm(() => ({ ...form, [e.target.name]: e.target.value }));
  };

  async function getOTP() {
    try {
      Auth.signIn(`+910${form.phone_number}`)
        .then((data) => {
          console.log(data);
          setUser(data);
          if (!data.error) updateForm(() => ({ ...form, otp: 1 }));
        })
        .catch((err) => console.log(err));
      console.log(form.phone_number);
    } catch (err) {
      console.log("error getting OTP: ", err);
    }
  }

  async function signIn() {
    try {
      Auth.sendCustomChallengeAnswer(user, form.authCode)
        .then((data) => {
          console.log(data);
          localStorage.setItem(
            "userToken",
            data.signInUserSession.idToken.jwtToken
          );
          props.history.push("/dashboard");
        })
        .catch((err) => console.log(err));
      console.log(form);
    } catch (err) {
      console.log("error signin in: ", err);
    }
  }

  async function resendOTP() {
    try {
      await Auth.resendSignUp(`+910${form.phone_number}`).then((data) => {
        console.log(data);
        setUser(data);
        if (!data.error) updateForm(() => ({ ...form, otp: 1 }));
      });
      console.log("OTP resent successfully");
    } catch (err) {
      console.log("error resending OTP: ", err);
    }
  }

  return (
    <React.Fragment>
      <Row className="login text-center">
        <Col md={4}></Col>
        <Col md={4} className="login-col">
          <Card className="login-card">
            {/* <h3>Basic Home Loan</h3> */}
            <img src={logo}></img>
            <br></br>
            {/* <Input type="number" className="login-input"></Input> */}
            <Input
              name="phone_number"
              type="number"
              onChange={onChange}
              placeholder="Enter Mobile No."
              className="login-input"
            ></Input>
            <Input
              name="authCode"
              type="number"
              onChange={onChange}
              placeholder="Enter OTP"
              className="login-otp"
            ></Input>
            {form.otp === 0 && (
              <Button className="login-otp" onClick={getOTP}>
                Get OTP
              </Button>
            )}
            {form.otp === 1 && (
              <>
                <Button className="login-otp" onClick={signIn}>
                  Sign In
                </Button>
                <Button className="login-otp" onClick={resendOTP}>
                  Resend OTP
                </Button>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default withRouter(Login);
