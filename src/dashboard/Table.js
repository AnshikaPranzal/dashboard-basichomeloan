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
// import React from 'react';

import FilterListIcon from "@material-ui/icons/FilterList";
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
import lead from "../images/Group 2408.svg";
import osvi from "../images/Group 2412.svg";
import disb from "../images/Group 2424.svg";
import closed from "../images/Group 2423.svg";
import sanction from "../images/Group 2418.svg";

function TableCard() {
  const [jobs, setjobs] = useState([]);
  const [vjobs, setvjobs] = useState([]);
  const [tjobs, settjobs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorF, seterrorF] = useState(false);
  const [update, setupdate] = useState(false);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
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
    console.log(localStorage.getItem("userToken"));
    GETALLLEADS().then((data) => {
      console.log(data.result);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs(data);
          setvjobs(data.result);
          settjobs(data.result);
          // console.log(vjobs);
        }
    });
  };

  const filter = (status) => {
    if (status === "") {
      setvjobs(tjobs);
    } else {
      // console.log(tjobs.filter((e) => e.applicationStatus == status));
      setvjobs(tjobs.filter((e) => e.applicationStatus == status));
    }
  };

  const [refresh, setrefresh] = useState(true);
  const filteredStatus = [];
  const status = [
    "OSVRejected",
    "SanctionRejected",
    "Lead",
    "Cancelled",
    "Disbursed",
    "OSVApproved",
    "RejectedForBasicFulfillment",
    "FileLoginComplete",
    "CustomerVerificationSkipped",
    "CustomerConsentPending",
    "CustomerRejected",
    "AcceptedForBasicFulfillment",
    "SentForBasicFulfillment",
    "SanctionExpired",
    "PendingOSV",
    "CustomerApproved",
    "Sanctioned",
    "Withdrawn",
    "OSVStampped",
    "OSVStampPending",
  ];
  useEffect(() => {
    loadAlljobs();
  }, [refresh]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    // <Card elevation={3} className='pt-5 mb-6'>
    //   <div className='card-title px-6 mb-3'>top selling products</div>
    <>
      <Card className='card-dashboard'>
        <CardBody>
          <div className='align-items-center'>
            {/* <div> */}
            <Row>
              <Col md={10}>
                <CardTitle>
                  <h4>My Leads</h4>
                </CardTitle>
              </Col>
              <Col md={2}>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup='true'
                  onClick={handleToggle}
                >
                  <FilterListIcon></FilterListIcon> Status
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
                            {status.map((obj, k) => (
                              <MenuItem
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
                      <tr style={{ paddingTop: "2rem" }}>
                        <td>
                          <Row>
                            <Col md={2}>
                                <Link to={`/${product.id}`}>
                                  <img
                                    // className='circular-image-small'
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
                          {" "}
                          {product.basicAppID}/<br></br>
                          {product.bankAppID}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",
                            opacity: 1.5,
                            fontFamily: "Roboto",
                          }}
                        >
                          {product.bankName}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",

                            fontFamily: "Roboto",
                          }}
                        >
                          {product.loanType}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",

                            fontFamily: "Roboto",
                          }}
                        >
                          {product.amount}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",

                            fontFamily: "Roboto",
                          }}
                        >
                          {product.eventDate}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",
                            // opacity: 1.5,
                            fontFamily: "Roboto",
                          }}
                        >
                          {product.applicationStatus}
                        </td>
                        <td
                          style={{
                            // color: "#ACACAC",
                            opacity: 1.5,
                            fontFamily: "Roboto",
                          }}
                        >
                          {product.applicationStage === "Lead" && (
                            <img src={lead}></img>
                          )}
                          {product.applicationStage === "OSV" && (
                            <img src={osvi}></img>
                          )}
                          {product.applicationStage === "Disbursed" && (
                            <img src={disb}></img>
                          )}
                          {product.applicationStage === "Closed" && (
                            <img src={closed}></img>
                          )}
                          {product.applicationStage === "Sanction" && (
                            <img src={sanction}></img>
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
