import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { approveOSV } from "../helper/index";

const Verify = (props) => {
  let counter = 0;
  let id = props.match.params;
  console.log(id, "ycfhg");

  console.log(id, "idddd");
  console.log(localStorage.getItem("recent2"), "wgyugyv");
  const approve = (event, id, ID, name) => {
    console.log("sscccs", id);
    event.preventDefault();
    approveOSV(id, {
      documents: [
        {
          documentId: ID,
          verification: `${name}`,
        },
      ],
    }).then((data) => {
      console.log(data, "here");
      if (data.error) {
        console.log(data.error);
      } else {
        {
          data.result.pendingDocuments.map((o, i) => {
            {
              o.id === ID && counter++;
              // props.history.push(`/${id}`);
            }
          });
        }
        if (counter === 0) {
          alert("Document " + name);
          props.history.push(`/${id}`);
        } else {
          alert("Process Failed");
          props.history.push(`/${id}`);
        }
      }
    });
  };

  const [disabled, setDisabled] = useState(false);

  const handleChange = () => {
    setDisabled(true);
  };

  return (
    <React.Fragment>
      <Row className='text-center py-4'>
        <Col md={4}></Col>
        <Col md={4}>
          <h1>{props.match.params.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <iframe
            title={props.match.params.name}
            src={localStorage.getItem("recent")}
            width='100%'
          ></iframe>
        </Col>

        {localStorage.getItem("recent2") !== "undefined" && (
          <Col md={6}>
            <iframe
              title={props.match.params.name}
              src={localStorage.getItem("recent2")}
              width='100%'
            ></iframe>
          </Col>
        )}
      </Row>
      {props.match.params.app === "false" && (
        <Row>
          <Col md={6}>
            <Button
              disabled={disabled}
              className='login-otp'
              style={{ background: "#0088FC", width: "100%" }}
              onClick={(e) => {
                console.log("hioo");
                approve(e, id.id, id.url, "Approved");
                handleChange();
              }}
            >
              Approve
            </Button>
          </Col>
          <Col md={6}>
            <Button
              disabled={disabled}
              className='login-otp'
              style={{ background: "#ACACAC", width: "100%" }}
              onClick={(e) => {
                console.log("hioo");
                approve(e, id.id, id.url, "Rejected");
                handleChange();
              }}
            >
              Reject
            </Button>
          </Col>
        </Row>
      )}

      {/* <Button className="login-otp">Reject</Button> */}
    </React.Fragment>
  );
};

export default Verify;
