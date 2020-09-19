import React from 'react';
import { Row, Col, Card, CardTitle,Input,Button } from 'reactstrap';
import logo from '../images/Group 2455.svg'
// import { Input } from '@material-ui/core';

const Login = ()=>{
    return(
        <React.Fragment>
            <Row className="login text-center" >
                <Col md={4}></Col>
                <Col md={4} className="login-col" >
                    <Card className="login-card">
                        {/* <h3>Basic Home Loan</h3> */}
                        <img src={logo}></img>
                        <br></br>
                        {/* <Input type="number" className="login-input"></Input> */}
                        <Input type="number" placeholder="Enter Mobile No." className="login-input"></Input>
                        <Input type="number" placeholder="Enter OTP" className="login-otp"></Input>
                        <Button className="login-otp">Get OTP</Button>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login