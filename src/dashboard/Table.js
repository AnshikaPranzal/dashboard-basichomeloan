import React, { useState, useEffect } from "react";
import "../style.css";
import { GETALLLEADS } from "../helper/index";
import { Link,withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";


import FilterListIcon from "@material-ui/icons/FilterList";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import lead from "../images/Group 2408.svg";
import osvi from "../images/Group 2412.svg";
import disb from "../images/Group 2424.svg";
import closed from "../images/Group 2423.svg";
import sanction from "../images/Group 2418.svg";
import { Typography } from "@material-ui/core";

function TableCard(props) {
  const [jobs, setjobs] = useState([]);
  const [vjobs, setvjobs] = useState([]);
  const [, settjobs] = useState([]);
  const [, seterrorF] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [pageNo, setpageNo] = useState(1)
  const [stage, setstage] = useState("")
  const anchorRef = React.useRef(null);
  useEffect(()=>{
      if(vjobs === undefined){
        props.history.push("/")
      }
    
  },[])
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  
  const loadAlljobs = () => {
    GETALLLEADS(pageNo,stage).then((data) => {
      // console.log(data.result);
     
      if (data)
        if (data.error) {
         
          seterrorF(data.error);
        } else {
          setjobs(data);
          setvjobs(data.result);
          settjobs(data.result);
          
        }
        else{
          props.history.push("/")
        }
    });
  };

  const filter = (stages) => {
      setstage(stages)
    }
  

  const [refresh] = useState(true);
  const stages = [
    "Closed",
    "Disbursed",
    "Login",
    "Lead",
    "OSV",
    "Sanction",
  ];

  useEffect(() => {
    loadAlljobs();
    
  }, [refresh, stage, pageNo]);
 


  return (
    <>
      <Card className='card-dashboard'>
        <CardBody>
          <div className='align-items-center'>
            {/* <div> */}
            <Row>
              <Col md={1} xs={6}>
                <CardTitle>
                  <h4>My Leads</h4>
                </CardTitle>
              </Col>
              <Col md={9} xs={6}>
                {pageNo>1 && <Button onClick={()=>{if(pageNo !== 0){setpageNo(pageNo-1);loadAlljobs();}}} style={{width:"7rem",height:"4rem",backgroundColor:"skyblue"}}>
                  <Typography variant="h6">Prev</Typography></Button>}
                {vjobs && vjobs.length === 20 && <Button onClick={()=>{setpageNo(pageNo+1);loadAlljobs();}} style={{width:"7rem",height:"4rem",backgroundColor:"skyblue",marginLeft:"2rem"}}>
                <Typography variant="h6">Next</Typography></Button>}
              </Col>
              <Col md={2} xs={6}>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  <FilterListIcon></FilterListIcon> Stages
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  style={{ zIndex: 10000 }}
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id='menu-list-grow'
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem
                              onClick={(e) => {
                                filter("");
                                handleClose(e);
                              }}
                            >
                              All
                            </MenuItem>
                            {stages.map((obj, k) => (
                              <MenuItem
                                key={k}
                                onClick={(e) => {
                                  filter(obj);
                                  handleClose(e);
                                }}
                              >
                                {obj}
                              </MenuItem>
                            ))}
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Col>
            </Row>

            {/* <CardSubtitle>Click on them to join</CardSubtitle> */}
            {/* </div> */}
          </div>
          <Table className='no-wrap v-middle card-dashboard' responsive>
            <thead>
              <tr className='border-0'>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Name
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Basic App ID/<br></br>Bank App ID
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Bank Name
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Loan Type
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Amount
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Status Date
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Status
                </th>
                <th className='border-0' style={{ fontFamily: "Roboto" }}>
                  Stage
                </th>
              </tr>
            </thead>
            <tbody>
              {vjobs &&
                vjobs
                  .map((product, i) => {
                    return (
                      <tr key={i} style={{ paddingTop: "2rem" }}>
                        <td>
                          <Row>
                            <Col md={2}>
                                <Link to={`/${product.id}`}>
                                  <img
                                    
                                    src={product.profilePicUrl}
                                    style={{
                                      width: "4rem",
                                      height: "4rem",
                                      borderRadius: "2rem",
                                    }}
                                    alt='user'
                                  />
                                </Link>
                            </Col>
                            <Col md={8}>
                              <span
                                className='name'
                                style={{ fontFamily: "Roboto" }}
                              >
                                <div
                                  style={{
                                    fontSize: 14,
                                    color: "black",
                                    opacity: 0.75,
                                    fontWeight: 500,
                                    marginTop:"-2rem",
                                  }}
                                >
                                  {product.customerName}
                                </div>
                                {/* <br></br> */}
                                {product.mobile}
                              </span>
                            </Col>
                          </Row>
                        </td>
                        <td
                          style={{
                            fontFamily: "Roboto",
                          }}
                        >
                         <div style={{ marginLeft:"1rem"}}> {" "}
                          {product.basicAppID}/<br></br>
                          {product.bankAppID}</div>
                        </td>
                        <td
                          style={{
                            
                            opacity: 1.5,
                            fontFamily: "Roboto",
                            alignItems:"center"

                          }}
                        >
                         <div style={{ marginLeft:"2rem"}}> {product.bankName}</div>
                        </td>
                        <td
                          style={{
                            

                            fontFamily: "Roboto",
                           
                          }}
                        >
                         <div style={{ marginLeft:"2.5rem"}}> {product.loanType} </div>
                        </td>
                        <td
                          style={{
                            

                            fontFamily: "Roboto",
                          }}
                        >
                          {product.amount}
                        </td>
                        <td
                          style={{
                            

                            fontFamily: "Roboto",
                          }}
                        >
                          {product.eventDate}
                        </td>
                        <td
                          style={{
                            
                            
                            fontFamily: "Roboto",
                          }}
                        >
                          {product.applicationStatus}
                        </td>
                        <td
                          style={{
                            
                            opacity: 1.5,
                            fontFamily: "Roboto",
                          }}
                        >
                          {product.applicationStage === "Lead" && (
                            <img alt="Lead" src={lead}></img>
                          )}
                          {product.applicationStage === "OSV" && (
                            <img alt="OSV" src={osvi}></img>
                          )}
                          {product.applicationStage === "Disbursed" && (
                            <img alt="Disbursed" src={disb}></img>
                          )}
                          {product.applicationStage === "Closed" && (
                            <img alt="Closed" src={closed}></img>
                          )}
                          {product.applicationStage === "Sanction" && (
                            <img alt="Sanction" src={sanction}></img>
                          )}
                        </td>
                        <td>
                          <i
                            className='fa fa-check text-success'
                            aria-hidden='true'
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </Table>
        </CardBody>
        
      </Card>
    </>
  );
}

export default withRouter(TableCard);
