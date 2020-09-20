import React from "react";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";

const Verify = (props) => {
    const [id, setid] = React.useState(props.match.params.url)
    const [obj, setobj] = React.useState({"id":id,"value":""})
    const [docs, setdocs] = React.useState([])

  const addItem= async (idd)=>{
    const a = await Promise.resolve(setobj({...obj, "value":idd}))
    const b = await Promise.resolve(setdocs(localStorage.getItem("verification")))
    const c = await Promise.resolve(docs.push(obj))
    localStorage.setItem("verification",JSON.stringify(docs))
  }
  console.log(props.match.params.url, "kkkkkkkkkk");
  return (
    <React.Fragment>
      <iframe src={localStorage.getItem("recent")} width='100%'></iframe>
      <Row>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#0088FC", width: "100%" }}
            onClick={()=>addItem(true)}
          >
            Approve
          </Button>
        </Col>
        <Col md={6}>
          <Button
            className='login-otp'
            style={{ background: "#ACACAC", width: "100%" }}
            // onClick={addItem}
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
