import React from "react";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { addItem } from "../helper/index";
const Verify = (props) => {
  console.log(props, "kkkkkkkkkk");
  return (
    <React.Fragment>
      <iframe src={localStorage.getItem("recent")} width='100%'></iframe>
      <Row>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#0088FC", width: "100%" }}
            onClick={addItem}
          >
            Approve
          </Button>
        </Col>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#ACACAC", width: "100%" }}
            onClick={addItem}
          >
            Reject
          </Button>
        </Col>
      </Row>

      {/* <Button className="login-otp">Reject</Button> */}
    </React.Fragment>
  );
};

export default Verify;
