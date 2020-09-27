import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import { approveOSV } from "../helper/index";

const Verify = (props) => {
  // const [id, setid] = React.useState(props.match.params.url);
  //   const appId = props.match.params.id;
  //   // const [obj, setobj] = React.useState({ documentId: id, verification: "" });
  //   const [docs, setdocs] = React.useState("");
  //   // const { documentId, verification } = obj;
  //   let a = [];
  //   const addItem = (idd) => {
  //     if (docs !== "") {
  //   if (idd) {
  //   setobj({
  //     ...obj,
  //     verification: "Approved",
  //   });
  // } else {
  //   setobj({
  //     ...obj,
  //     verification: "Rejected",
  //   });
  // }
  //   a.push(idd);
  //   const arr = JSON.parse(localStorage.getItem(`darray${appId}`));
  //   if (arr !== null && arr !== undefined) {
  //     arr.map((o, i) => {
  //       a.push(o);
  //     });
  //   }
  //   localStorage.setItem(`darray${appId}`, JSON.stringify(a));
  // }
  // const a = await Promise.resolve(setobj({...obj, "value":idd}))
  // const b = await Promise.resolve(setdocs(localStorage.getItem("verification")))
  // const c = await Promise.resolve(docs.push(obj))
  // localStorage.setItem("verification",JSON.stringify(docs))
  //   };

  console.log(props.match.params.url, "kkkkkkkkkk");

  let id = props.match.params;

  //   let ID = props.match.params;
  console.log(id, "idddd");
  console.log(localStorage.getItem("recent2"),"wgyugyv")
  const approve = (event, id, ID, name) => {
    console.log("sscccs", id);
    event.preventDefault();
    approveOSV(id, {
      documentId: ID,
      verification: `${name}`,
    }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      }
    });
  };

  //   console.log("ddd", vjob);
  return (
    <React.Fragment>

      <Row>
        
        <Col md={6}><iframe src={localStorage.getItem("recent")} width='100%'></iframe></Col>
        
        {localStorage.getItem("recent2") !== "undefined" && <Col md={6}><iframe src={localStorage.getItem("recent2")} width='100%'></iframe></Col>}
      </Row>
      <Row>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#0088FC", width: "100%" }}
            // onClick={() => {
            //   setdocs("hi");
            //   addItem({ documentId: id, verification: "Approved" });
            // }}
            onClick={(e) => {
              console.log("hioo");
              approve(e, id.id, id.url, "Approved");
            }}
          >
            Approve
          </Button>
        </Col>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#ACACAC", width: "100%" }}
            // onClick={() => {
            //   setdocs("hi");
            //   addItem({ documentId: id, verification: "Rejected" });
            // }}
            onClick={(e) => {
              console.log("hioo");
              approve(e, id.id, id.url, "Rejected");
            }}
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
