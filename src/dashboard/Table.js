
import React, { useState, useEffect } from "react";
import '../style.css'
import { GETALLLEADS } from "../helper/index";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Table,
  Row,
  Col,
} from "reactstrap";

function TableCard() {
  const [jobs, setjobs] = useState([]);
  const [vjobs, setvjobs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorF, seterrorF] = useState(false);
  const [update, setupdate] = useState(false);

  const loadAlljobs = () => {
    GETALLLEADS().then((data) => {
      console.log(data.result);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs(data);
          setvjobs(data.result);
          // console.log(vjobs);
        }
    });
  };

  const [refresh, setrefresh] = useState(true);

  useEffect(() => {
    loadAlljobs();
  }, [refresh]);

  return (
    // <Card elevation={3} className='pt-5 mb-6'>
    //   <div className='card-title px-6 mb-3'>top selling products</div>
    <>
    
      <Card className="card-dashboard">
        <CardBody>
          <div className="d-flex align-items-center">
            <div>
              <CardTitle>
                <h4>My Leads</h4>
              </CardTitle>
              {/* <CardSubtitle>Click on them to join</CardSubtitle> */}
            </div>
            </div>
        <Table className="no-wrap v-middle card-dashboard" responsive>
            <thead>
              <tr className="border-0">
                <th className="border-0">Name</th>
                <th className="border-0">Basic App ID</th>
                <th className="border-0">Bank Name</th>
                <th className="border-0">Loan Type</th>
                <th className="border-0">Amount</th>
                <th className="border-0">Status Date</th>
                <th className="border-0">Status</th>
                <th className="border-0">Stage</th>
                <th className="border-0">Verified</th>
              </tr>
            </thead>
            <tbody>
              
                
            {vjobs.map((product, i) => {
              return (
                <tr style={{paddingTop:"2rem"}}>
                <td>
                  <Row>
                    <Col md={2}>
                    <Link
                        to={`/http://dev-applicationservice.basichomeloan.com/api/v1/Applications/${product.id}`}
                      >
                        <img
                          // className='circular-image-small'
                          src={product.profilePicUrl}
                          style={{ width: "4rem", height: "4rem",borderRadius:"2rem" }}
                          alt='user'
                        />
                  </Link>
                    </Col>
                    <Col md={8}>
                    <span  className="name">
                      {product.customerName}<br></br>
                      {product.mobile}
                      </span>
                    </Col>

                  </Row>
                  
                  
                </td>
              <td> {product.basicAppID}</td>
                <td>{product.bankName}</td>
                <td>{product.loanType}</td>
                <td>{product.amount}</td>
                <td>{product.eventDate}</td>
                <td>{product.applicationStatus}</td>
                <td>{product.applicationStage}</td>
                <td>
                  <i className="fa fa-check text-success" aria-hidden="true"></i>
                </td>
                </tr>
              )})}
                  
              
            </tbody>
      </Table>
      </CardBody>
      </Card>
    </>
  );
 
  
}

export default TableCard;
