import React from 'react';
import { Row, Col, Card, CardTitle } from 'reactstrap';


const Login = ()=>{
    return(
        <React.Fragment>
            <Row className="login text-center" >
                <Col md={4}></Col>
                <Col md={4} className="login-col" >
                    <Card className="login-card">
                        <h3>Basic Home Loan</h3>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Login