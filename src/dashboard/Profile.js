import { Card, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { GETAPPLICATION, approveOSV } from "../helper/index";
import { GETALLLEADS, getDocConfig } from "../helper/index";
import Divider from "@material-ui/core/Divider";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import Modal from "@material-ui/core/Modal";
import verified from "../images/Group 2125.svg";

import VisibilityIcon from "@material-ui/icons/Visibility";
import { CheckCircleOutline, Visibility } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand3: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand1: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand2: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expand4: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "5rem",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
  },
  text1: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "5rem",
      marginRight: "2rem",
      fontSize: 15,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
      marginTop: "1rem",
      fontSize: 13,
    },
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Profile(props) {
  const [jobs, setjobs] = useState([]);
  const [jobs1, setjobs1] = useState([]);
  const [vjobs1, setvjobs1] = useState([]);
  const [show, setshow] = useState(false);
  const [refresh3, setrefresh3] = useState(true);
  const handleClose = () => {
    setshow(false);
  };
  const setUrl = (url1, url2) => {
    var obj = [];
    localStorage.setItem("recent", url1);
    localStorage.setItem("recent2", url2);
    localStorage.setItem("verification", JSON.stringify(obj));
    return true;
  };
  const [vjobs, setvjobs] = useState([
    {
      documents: [],
    },
  ]);
  let c = 0;
  const [refresh1, setrefresh1] = useState(true);
  const [property, setproperty] = useState([]);
  const [borrower, setborrower] = useState([]);
  const [osv, setosv] = useState([]);
  const [bank, setbank] = useState([]);

  const loadDoc = () => {
    getDocConfig().then(async (data) => {
      if (data)
        if (data.error) {
          props.history.push("/");
        } else {
          setjobs1(data);
          const h = await Promise.resolve(setvjobs1(data.result));
        }
    });
  };

  useEffect(() => {
    loadDoc();
  }, []);
  useEffect(() => {
    const func = async () => {
      if (!vjobs1) {
        const k = await Promise.resolve(loadDoc());
      }
      setproperty(
        vjobs1.filter((e) => e.belongsToEntity == "ApplicationProperty")
      );
      setborrower(
        vjobs1.filter((e) => e.belongsToEntity == "ApplicationCustomer")
      );
      setbank(vjobs1.filter((e) => e.belongsToEntity == "ApplicationBank"));
      setosv(
        vjobs1.filter((e) => e.belongsToEntity == "ApplicationTeleVerification")
      );
    };

    func();
  }, [vjobs1]);
  const [vjob, setvjob] = useState({
    documents: [],
    coBorrowers: [
      {
        documents: [
          {
            id: "",
          },
        ],
      },
    ],
    primaryBorrower: {
      documents: [
        {
          id: "",
        },
      ],
    },
  });

  const [vjobproperty, setvjobproperty] = useState([]);

  const [vjobq, setvjobq] = useState({
    documents: [],
  });
  const [vjobp, setvjobp] = useState(
    [
      {
        documents: [],
      },
    ]
    //
  );

  const getajob = (id) => {
    GETAPPLICATION(id).then((data) => {
      if (data)
        if (data.error) {
        } else {
          setvjob(data.result);
          setvjobp(data.result.coBorrowers);
          setvjobq(data.result.primaryBorrower);
          setvjobproperty(data.result.documents);
        }
    });
  };

  const [refresh, setrefresh] = useState(true);

  useEffect(() => {
    getajob(props.match.params.id);
  }, [refresh]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  const [expanded4, setExpanded4] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleOpen1 = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen1(true);
  };

  const handleClose2 = () => {
    setOpen1(false);
  };
  const [Name, setName] = useState("");
  const [Idd, setIdd] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [disabled1, setDisabled1] = useState(false);

  const handleChange1 = () => {
    setDisabled(true);
  };
  const handleChange2 = () => {
    setDisabled1(true);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Please enter rejection reason:</h3>
      <p
        id='simple-modal-description'
        style={{ textAlign: "center", marginTop: "2em" }}
      >
        <input
          type='text'
          name='title'
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <br></br>

        <Button
          disabled={disabled1}
          variant='contained'
          type='submit'
          onClick={(e) => {
            approve1(e, id, "OSVRejected", Name);

            handleChange2();
            handleChange1();
            handleClose1();
          }}
        >
          Submit
        </Button>
      </p>
    </div>
  );

  const body1 = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Confirm Approval</h3>
      <p
        id='simple-modal-description'
        style={{ textAlign: "center", marginTop: "2em" }}
      >
        <br></br>
        <Button
          variant='contained'
          color='primary'
          style={{ marginRight: "2rem" }}
          onClick={handleClose2}
        >
          Close
        </Button>
        <Button
          disabled={disabled1}
          variant='contained'
          type='submit'
          color='primary'
          onClick={(e) => {
            approve(e, id, "OSVVerified");
            handleClose2();
            handleChange1();
          }}
        >
          Submit
        </Button>
      </p>
    </div>
  );

  const id = props.match.params.id;
  const check = () => {
    for (var i = 0; i < vjobq.documents.length; i++) {
      if (
        vjobq.documents[i].verified !== "Approved" &&
        vjobq.documents[i].isVerificationReq === true
      ) {
        console.log(vjobq.documents[i], "k");
        return false;
      }
    }
  };
  console.log(vjobp, "okokok");
  const check1 = () => {
    var i, j;
    console.log(vjobp, "okokok");
    for (i = 0; i < vjobp.length; i++) {
      for (j = 0; j < vjobp[i].documents.length; j++) {
        if (
          vjobp[i].documents[j].verified !== "Approved" &&
          vjobp[i].documents[j].isVerificationReq === true
        ) {
          console.log(vjobq.documents[i], "k");
          return false;
        }
      }
    }
  };

  const approve1 = (event, id, name, text) => {
    event.preventDefault();
    approveOSV(id, {
      status: `${name}`,
      reason: `${text}`,
    }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.result, "hbjh");
        {
          data.result.status === "OSVRejected" && alert("Lead Rejected");
          props.history.push("/dashboard");
        }
      }
    });
  };

  const approve = async (event, id, name) => {
    event.preventDefault();
    const c = await Promise.resolve(check1());
    const c1 = await Promise.resolve(check());

    if (c === false || c1 === false) {
      alert("All the documents are not verified");
    } else {
      const c = await Promise.resolve(
        approveOSV(id, {
          status: name,
        }).then((data) => {
          console.log(data);
          if (data.error) {
            console.log(data.error);
          } else {
            {
              data.result.status === "OSVVerified" && alert("Lead Verified");
              props.history.push("/dashboard");
            }
          }
        })
      );
    }
  };

  const reject = (event, id, name) => {
    event.preventDefault();
    approveOSV(id, {
      status: `${name}`,
    }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      }
    });
  };
  const back = () => {
    props.history.push(`/dashboard`);
  };

  const [Id, setId] = useState("");
  return (
    <div>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant='h6' style={{ color: "black" }}>
            Basic HomeLoan
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container style={{ marginTop: "10rem" }}>
        <Grid className={classes.text} item xs={12} md={4} style={{}}>
          <div>
            <Button onClick={back}>
              <Typography variant='h5'>{"< "} Go to Dashboard</Typography>{" "}
            </Button>

            <div style={{ marginTop: "2em" }}>
              <div
                style={{
                  backgroundColor: "#f1f3f8",
                  borderRadius: "3px",
                }}
              >
                <div
                  style={{
                    paddingLeft: "15%",
                    paddingTop: "6rem",
                  }}
                >
                  <div style={{ fontWeight: 600, fontFamily: "Open Sans" }}>
                    {" "}
                    <div>
                      {vjobs &&
                        vjobs.map((obj2, i) => {
                          return (
                            <div key={i}>
                              {obj2.id === vjob.id && (
                                <img
                                  src={
                                    obj2.id === vjob.id && obj2.profilePicUrl
                                  }
                                  style={{
                                    width: "4rem",
                                    height: "4rem",
                                    borderRadius: "2rem",
                                  }}
                                  alt='user'
                                />
                              )}
                            </div>
                          );
                        })}
                    </div>
                    <div
                      style={{
                        font: "normal normal medium",
                        fontSize: "14px/20px",
                        fontFamily: "Roboto",
                        letterSpacing: 0,
                        color: "#212121",
                        opacity: 1,
                      }}
                    >
                      {vjobs &&
                        vjobs.map((obj2, i) => {
                          return (
                            <div>
                              {obj2.id === vjob.id && obj2.customerName}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      marginTop: "1rem",
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        font: "normal normal normal",
                        fontSize: "9px/20px",
                        fontFamily: "Roboto",
                        letterSpacing: "0px",
                        color: "#ACACAC",
                        opacity: 1,
                      }}
                    >
                      {vjobs &&
                        vjobs.map((obj2, i) => {
                          return (
                            <div>{obj2.id === vjob.id && obj2.mobile}</div>
                          );
                        })}
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      marginTop: "1rem",
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Basic Ref No: {vjob.basicAppId}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      marginTop: "1rem",
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Bank Application No: {vjob.bankAppId}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      marginTop: "1rem",
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Disbursement{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      marginTop: "1rem",
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Confirm Disbursement{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      textAlign: "right",
                      paddingRight: "4rem",
                    }}
                  >
                    {" "}
                    {vjobs &&
                      vjobs.map((obj2, i) => {
                        return (
                          <div>
                            {obj2.id === vjob.id && obj2.applicationStage}
                          </div>
                        );
                      })}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      textAlign: "right",
                      paddingRight: "4rem",
                      color: "green",
                      paddingBottom: "2rem",
                    }}
                  >
                    {" "}
                    <div>{vjob.applicationStatus}</div>
                  </div>
                </div>
                <Divider />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.text1}>
          <Card>
            <CardActions disableSpacing>
              <div
                style={{
                  marginLeft: "2.8rem",
                  fontWeight: 500,

                  letterSpacing: 0.48,
                  fontSize: 16,
                  fontFamily: "Roboto",
                }}
              >
                Application Details
              </div>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Customer Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjobq.firstName} {vjobq.lastName}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Phone Number
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjobq.mobile}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Loan Type
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.loanType}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Loan Amount
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    ₹{vjob.loanAmountReq}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Basic App Id
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.basicAppId == null ? "" : vjob.basicAppId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Bank App Id
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.bankAppId == null ? "" : vjob.bankAppId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Basic Fullfillment
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.isBasicFullfilment === false && "No"}
                    {vjob.isBasicFullfilment === true && "Yes"}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Application Date
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    <Moment format='DD-MM-YY'>{vjob.osvDate}</Moment>
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Total Disbursement Amount
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.totalDisbursementAmount === null
                      ? ""
                      : vjob.totalDisbursementAmount}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Confirm Disbursement Amount
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.totalConfirmedDisbursementAmount === null
                      ? ""
                      : vjob.totalConfirmedDisbursementAmount}
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div
                style={{
                  marginLeft: "2.8rem",
                  fontWeight: 500,
                  fontSize: 16,
                  fontFamily: "Roboto",
                  letterSpacing: 0.48,
                }}
              >
                Property Details
              </div>
              <IconButton
                className={clsx(classes.expand3, {
                  [classes.expandOpen]: expanded3,
                })}
                onClick={handleExpandClick3}
                aria-expanded={expanded3}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded3} timeout='auto' unmountOnExit>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Property Amount
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    ₹{vjob.propertyValue}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Property Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.propertyProjectName}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Property Address
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.propertyAddress}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Pin Code
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.propertyPincode}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Property City
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.propertyCity}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    State
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.propertyState}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "2rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      fontWeight: 400,
                      fontFamily: "Roboto",
                    }}
                  >
                    Documents:
                  </Grid>
                  <Grid item xs={4}>
                    {/* keyCaptionOne */}
                    {/* {vjob.documments.id == null ? "" : vjob.bankId} */}
                  </Grid>
                </Grid>

                <Grid item xs={12} style={{ marginLeft: "2rem" }}>
                  {vjobproperty.map((j, k) => {
                    return (
                      <>
                        {property.map((n, m) => {
                          return (
                            <>
                              {n.id === j.docConfigId && (
                                <>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8rem",
                                      marginLeft: "1rem",
                                    }}
                                  >
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionOneRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionOne}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyOneValue}
                                      </Grid>
                                    </Grid>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionTwoRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionTwo}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyTwoValue}
                                      </Grid>
                                    </Grid>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionThreeRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionThree}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyThreeValue}
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      xs={4}
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyCaption}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/true`}
                                      >
                                        {vjob.applicationStatus !==
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/false`}
                                      >
                                        {vjob.applicationStatus ===
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                    </Grid>

                                    <Grid item xs={2} style={{}}>
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            marginRight: "1rem",
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#0088FC",
                                          }}
                                        >
                                          Stamping Required
                                        </div>
                                      )}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#66BB6A",
                                          }}
                                        >
                                          Verfication Required
                                        </div>
                                      )}
                                    </Grid>
                                    {j.verified === "Approved" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{ paddingLeft: "1rem" }}
                                      >
                                        <img src={verified}></img>
                                      </Grid>
                                    )}
                                    {j.verified === "Rejected" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{
                                          color: "red",
                                          paddingLeft: "1rem",
                                        }}
                                      >
                                        X
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              )}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div
                style={{
                  marginLeft: "2.8rem",
                  fontWeight: 500,

                  fontFamily: "Roboto",
                  letterSpacing: 0.48,
                  fontSize: 16,
                }}
              >
                Borrower Details
              </div>
              <IconButton
                className={clsx(classes.expand2, {
                  [classes.expandOpen]: expanded2,
                })}
                onClick={handleExpandClick2}
                aria-expanded={expanded2}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded2} timeout='auto' unmountOnExit>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      fontWeight: 600,

                      fontFamily: "Roboto",
                    }}
                  >
                    Primary Borrower
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    First Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {/* {vjob.primaryBorrower.map((ob, i) => { */}
                    {vjob.primaryBorrower
                      ? vjob.primaryBorrower.firstName
                      : ""}{" "}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Last Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.lastName : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Phone Number
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.mobile : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Gender
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.gender : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Profession
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower
                      ? vjob.primaryBorrower.professionName
                      : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Company Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower
                      ? vjob.primaryBorrower.companyName
                      : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Annual Income
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    <span>₹</span>
                    {vjob.primaryBorrower
                      ? vjob.primaryBorrower.annualIncome
                      : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Aadhar Number
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.aadhar : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    PAN Number
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.pan : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Address
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.address : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    City
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.city : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    District
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.district : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    State
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.state : ""}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Pincode
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.primaryBorrower ? vjob.primaryBorrower.pincode : ""}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ marginLeft: "2.8rem", marginTop: "2rem" }}
                >
                  Document:
                </Grid>
                <Grid item xs={12} style={{ marginLeft: "2rem" }}>
                  {vjobq.documents.map((j, k) => {
                    return (
                      <>
                        {borrower.map((n, m) => {
                          return (
                            <>
                              {n.id === j.docConfigId && (
                                <>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8rem",
                                      marginLeft: "1rem",
                                    }}
                                  >
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionOneRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionOne}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyOneValue}
                                      </Grid>
                                    </Grid>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionTwoRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionTwo}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyTwoValue}
                                      </Grid>
                                    </Grid>
                                    <Grid container>
                                      <Grid
                                        item
                                        xs={6}
                                        style={{
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {n.keyCaptionThreeRequired && (
                                          <span style={{ color: "red" }}>
                                            *
                                          </span>
                                        )}
                                        {n.keyCaptionThree}
                                      </Grid>
                                      <Grid
                                        item
                                        xs={3}
                                        style={{
                                          color: "#ACACAC",
                                          opacity: 1.5,
                                          fontFamily: "Roboto",
                                        }}
                                      >
                                        {j.docKeyThreeValue}
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      xs={4}
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyCaption}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/true`}
                                      >
                                        {vjob.applicationStatus !==
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/false`}
                                      >
                                        {vjob.applicationStatus ===
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                    </Grid>

                                    <Grid item xs={2} style={{}}>
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            marginRight: "1rem",
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#0088FC",
                                          }}
                                        >
                                          Stamping Required
                                        </div>
                                      )}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#66BB6A",
                                          }}
                                        >
                                          Verfication Required
                                        </div>
                                      )}
                                    </Grid>
                                    {j.verified === "Approved" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{ paddingLeft: "1rem" }}
                                      >
                                        <img src={verified}></img>
                                      </Grid>
                                    )}
                                    {j.verified === "Rejected" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{
                                          color: "red",
                                          paddingLeft: "1rem",
                                        }}
                                      >
                                        X
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              )}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </Grid>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      fontWeight: 600,
                      marginTop: "2rem",
                      marginLeft: "2rem",
                    }}
                  >
                    CoBorrower Details
                  </Grid>
                </Grid>
                <Grid style={{ marginTop: "1rem" }}>
                  {vjob.coBorrowers.map((j, i) => {
                    return (
                      <div>
                        <Grid container item xs={12}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            First Name
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.firstName}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Last Name
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.lastName}
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "1rem" }}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Phone Number
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.mobile}
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "1rem" }}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Gender
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.gender}
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "1rem" }}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Profession Name
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.professionName}
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: "1rem" }}>
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Company Name
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.companyName}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Annual Income
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.annualIncome}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Aadhar Number
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.aadhar}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            PAN Number
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.pan}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Address
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.address}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            City
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.city}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            District
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.district}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            State
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.state}
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          item
                          xs={12}
                          style={{ marginTop: "1rem" }}
                        >
                          <Grid
                            item
                            xs={6}
                            style={{
                              marginLeft: "2rem",
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            Pincode
                          </Grid>
                          <Grid
                            item
                            xs={4}
                            style={{
                              color: "#ACACAC",
                              opacity: 1.5,
                              fontFamily: "Roboto",
                            }}
                          >
                            {j.pincode}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          style={{ marginLeft: "2.8rem", marginTop: "2rem" }}
                        >
                          Document:
                        </Grid>
                        <Grid item xs={12} style={{ marginLeft: "2rem" }}>
                          {j.documents.map((p, q) => {
                            return (
                              <>
                                {borrower.map((n, m) => {
                                  return (
                                    <div key={m}>
                                      {console.log(m, "gggggggggg")}
                                      {p.refEntityId === j.id &&
                                        n.id === p.docConfigId && (
                                          <>
                                            <Grid
                                              container
                                              style={{
                                                marginLeft: "2.8rem",
                                                marginLeft: "1rem",
                                              }}
                                            >
                                              <Grid container>
                                                <Grid
                                                  item
                                                  xs={6}
                                                  style={{
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {n.keyCaptionOneRequired && (
                                                    <span
                                                      style={{
                                                        color: "red",
                                                      }}
                                                    >
                                                      *
                                                    </span>
                                                  )}
                                                  {n.keyCaptionOne}
                                                </Grid>
                                                <Grid
                                                  item
                                                  xs={3}
                                                  style={{
                                                    color: "#ACACAC",
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {p.docKeyOneValue}
                                                </Grid>
                                              </Grid>
                                              <Grid container>
                                                <Grid
                                                  item
                                                  xs={6}
                                                  style={{
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {n.keyCaptionTwoRequired && (
                                                    <span
                                                      style={{
                                                        color: "red",
                                                      }}
                                                    >
                                                      *
                                                    </span>
                                                  )}
                                                  {n.keyCaptionTwo}
                                                </Grid>
                                                <Grid
                                                  item
                                                  xs={3}
                                                  style={{
                                                    color: "#ACACAC",
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {p.docKeyTwoValue}
                                                </Grid>
                                              </Grid>
                                              <Grid container>
                                                <Grid
                                                  item
                                                  xs={6}
                                                  style={{
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {n.keyCaptionThreeRequired && (
                                                    <span
                                                      style={{
                                                        color: "red",
                                                      }}
                                                    >
                                                      *
                                                    </span>
                                                  )}
                                                  {n.keyCaptionThree}
                                                </Grid>
                                                <Grid
                                                  item
                                                  xs={3}
                                                  style={{
                                                    color: "#ACACAC",
                                                    opacity: 1.5,
                                                    fontFamily: "Roboto",
                                                  }}
                                                >
                                                  {p.docKeyThreeValue}
                                                </Grid>
                                              </Grid>
                                            </Grid>
                                            <Grid
                                              container
                                              style={{
                                                marginLeft: "2.8",
                                                marginTop: "1rem",
                                              }}
                                            >
                                              <Grid
                                                item
                                                xs={4}
                                                style={{
                                                  color: "#ACACAC",
                                                  opacity: 1.5,
                                                  fontFamily: "Roboto",
                                                }}
                                              >
                                                {p.docKeyCaption}
                                              </Grid>
                                              <Grid item xs={2} style={{}}>
                                                <a
                                                  onClick={() => {
                                                    setUrl(
                                                      p.fileOneSignedUrl,
                                                      p.fileTwoSignedUrl
                                                    );
                                                  }}
                                                  href={`/verify/${vjob.id}/${
                                                    p.id
                                                  }/${p.docKeyCaption.substring(
                                                    p.docKeyCaption.lastIndexOf(
                                                      "/"
                                                    ) + 1
                                                  )}/false`}
                                                >
                                                  {vjob.applicationStatus !==
                                                    "PendingOSV" && (
                                                    <Visibility
                                                      style={{
                                                        color: "black",
                                                      }}
                                                    />
                                                  )}
                                                </a>
                                                <a
                                                  onClick={() => {
                                                    setUrl(
                                                      p.fileOneSignedUrl,
                                                      p.fileTwoSignedUrl
                                                    );
                                                  }}
                                                  href={`/verify/${vjob.id}/${
                                                    p.id
                                                  }/${p.docKeyCaption.substring(
                                                    p.docKeyCaption.lastIndexOf(
                                                      "/"
                                                    ) + 1
                                                  )}/false`}
                                                >
                                                  {vjob.applicationStatus ===
                                                    "PendingOSV" && (
                                                    <Visibility
                                                      style={{
                                                        color: "black",
                                                      }}
                                                    />
                                                  )}
                                                </a>
                                              </Grid>

                                              <Grid item xs={2} style={{}}>
                                                {p.isStampingReq && (
                                                  <div
                                                    style={{
                                                      marginRight: "1rem",
                                                      paddingLeft: "1rem",
                                                      fontFamily: "Roboto",
                                                      fontSize: 10,
                                                      color: "#0088FC",
                                                    }}
                                                  >
                                                    Stamping Required
                                                  </div>
                                                )}
                                              </Grid>
                                              <Grid item xs={2} style={{}}>
                                                {p.isVerificationReq && (
                                                  <div
                                                    style={{
                                                      paddingLeft: "1rem",
                                                      fontFamily: "Roboto",
                                                      fontSize: 10,
                                                      color: "#66BB6A",
                                                    }}
                                                  >
                                                    Verfication Required
                                                  </div>
                                                )}
                                              </Grid>
                                              {p.verified === "Approved" && (
                                                <Grid
                                                  item
                                                  xs={1}
                                                  style={{
                                                    paddingLeft: "1rem",
                                                  }}
                                                >
                                                  <img src={verified}></img>
                                                </Grid>
                                              )}
                                              {p.verified === "Rejected" && (
                                                <Grid
                                                  item
                                                  xs={1}
                                                  style={{
                                                    color: "red",
                                                    paddingLeft: "1rem",
                                                  }}
                                                >
                                                  X
                                                </Grid>
                                              )}
                                            </Grid>
                                          </>
                                        )}
                                    </div>
                                  );
                                })}
                              </>
                            );
                          })}
                        </Grid>
                        <Divider
                          style={{
                            marginLeft: "0rem",
                            marginRight: "1rem",
                            marginTop: "0.4rem",
                            // width: "100%",
                          }}
                        />
                      </div>
                    );
                  })}
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div
                style={{
                  marginLeft: "2.8rem",
                  fontWeight: 500,
                  letterSpacing: 0.48,
                  fontSize: 16,
                }}
              >
                Bank Details
              </div>
              <IconButton
                className={clsx(classes.expand1, {
                  [classes.expandOpen]: expanded1,
                })}
                onClick={handleExpandClick1}
                aria-expanded={expanded1}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded1} timeout='auto' unmountOnExit>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Bank Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.bankName}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Branch
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.bankBranchName}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Rm Name
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.bankRmName}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Rm Email
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    {vjob.bankRmEmail}
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  style={{
                    marginTop: "2rem",
                    marginLeft: "2rem",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                  }}
                >
                  Documents:
                </Grid>
                <Grid item xs={12}>
                  {vjobproperty.map((j, k) => {
                    return (
                      <>
                        {bank.map((n, m) => {
                          return (
                            <>
                              {n.id === j.docConfigId && (
                                <>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8rem",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionOneRequired && (
                                        <span>*</span>
                                      )}
                                      {n.keyCaptionOne}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionTwoRequired && (
                                        <span>*</span>
                                      )}
                                      {n.keyCaptionTwo}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionThreeRequired && (
                                        <span>*</span>
                                      )}
                                      {n.keyCaptionThree}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyOneValue}
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    container
                                    style={{
                                      marginTop: "1rem",
                                      marginLeft: "2.8rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      xs={4}
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyCaption}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/true`}
                                      >
                                        {vjob.applicationStatus !==
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/false`}
                                      >
                                        {vjob.applicationStatus ===
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${
                                            j.id
                                          }/${j.docKeyCaption.substring(
                                            j.docKeyCaption.lastIndexOf("/") + 1
                                          )}`}
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            marginRight: "1rem",
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#0088FC",
                                          }}
                                        >
                                          Stamping Required
                                        </div>
                                      )}
                                    </Grid>

                                    <Grid item xs={2} style={{}}>
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#66BB6A",
                                          }}
                                        >
                                          Verfication Required
                                        </div>
                                      )}
                                    </Grid>
                                    {j.verified === "Approved" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{ paddingLeft: "1rem" }}
                                      >
                                        <img src={verified}></img>
                                      </Grid>
                                    )}
                                    {j.verified === "Rejected" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{
                                          color: "red",
                                          paddingLeft: "1rem",
                                        }}
                                      >
                                        X
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              )}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div
                style={{
                  marginLeft: "2.8rem",
                  fontWeight: 500,
                  letterSpacing: 0.48,
                  fontSize: 16,
                }}
              >
                OSV
              </div>
              <IconButton
                className={clsx(classes.expand4, {
                  [classes.expandOpen]: expanded4,
                })}
                onClick={handleExpandClick4}
                aria-expanded={expanded4}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded4} timeout='auto' unmountOnExit>
              <CardContent>
                <Grid container item xs={12}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Status
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.applicationStatus}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Reason
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.osvRejectionReason}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Televerification Status
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.teleVerificationStatus}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      color: "#ACACAC",
                      opacity: 1.5,
                      fontFamily: "Roboto",
                    }}
                  >
                    Tele verification failed reason:
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.teleVerificationFailedReason}
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  style={{
                    marginTop: "2rem",
                    marginLeft: "2rem",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                  }}
                >
                  Documents:
                </Grid>
                <Grid item xs={12}>
                  {vjobq.documents.map((j, k) => {
                    return (
                      <>
                        {osv.map((n, m) => {
                          return (
                            <>
                              {n.id === j.docConfigId && (
                                <>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8rem",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionOneRequired && (
                                        <span>*</span>
                                      )}
                                      {n.keyCaptionOne}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionTwoRequired && (
                                        <span style={{ color: "red" }}>*</span>
                                      )}
                                      {n.keyCaptionTwo}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {n.keyCaptionThreeRequired && (
                                        <span>*</span>
                                      )}
                                      {n.keyCaptionThree}
                                    </Grid>
                                    <Grid
                                      item
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyOneValue}
                                    </Grid>
                                  </Grid>
                                  <Grid
                                    container
                                    style={{
                                      marginLeft: "2.8rem",
                                      marginTop: "1rem",
                                    }}
                                  >
                                    <Grid
                                      item
                                      xs={4}
                                      style={{
                                        color: "#ACACAC",
                                        opacity: 1.5,
                                        fontFamily: "Roboto",
                                      }}
                                    >
                                      {j.docKeyCaption}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/true`}
                                      >
                                        {vjob.applicationStatus !==
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${
                                          j.id
                                        }/${j.docKeyCaption.substring(
                                          j.docKeyCaption.lastIndexOf("/") + 1
                                        )}/false`}
                                      >
                                        {vjob.applicationStatus ===
                                          "PendingOSV" && (
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        )}
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${
                                            j.id
                                          }/${j.docKeyCaption.substring(
                                            j.docKeyCaption.lastIndexOf("/") + 1
                                          )}`}
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            marginRight: "1rem",
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#0088FC",
                                          }}
                                        >
                                          Stamping Required
                                        </div>
                                      )}
                                    </Grid>
                                    <Grid item xs={2} style={{}}>
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            paddingLeft: "1rem",
                                            fontFamily: "Roboto",
                                            fontSize: 10,
                                            color: "#66BB6A",
                                          }}
                                        >
                                          Verfication Required
                                        </div>
                                      )}
                                    </Grid>
                                    {j.verified === "Approved" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{ paddingLeft: "1rem" }}
                                      >
                                        <img src={verified}></img>
                                      </Grid>
                                    )}
                                    {j.verified === "Rejected" && (
                                      <Grid
                                        item
                                        xs={1}
                                        style={{
                                          color: "red",
                                          paddingLeft: "1rem",
                                        }}
                                      >
                                        X
                                      </Grid>
                                    )}
                                  </Grid>
                                </>
                              )}
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </Grid>
              </CardContent>
            </Collapse>
          </Card>

          {(vjob.applicationStatus === "PendingOSV" ||
            vjob.applicationStatus === "OSVStampped" ||
            vjob.applicationStatus === "OSVApproved" ||
            vjob.applicationStatus === "OSVStampPending") && (
            <Row style={{ marginTop: "2rem" }}>
              <Col md={6}>
                <Button
                  className='login-otp'
                  style={{ background: "#0088FC", width: "100%" }}
                  onClick={(e) => {
                    handleOpen2();
                  }}
                >
                  Approve
                </Button>
                <Modal
                  open={open1}
                  onClose={handleClose2}
                  aria-labelledby='simple-modal-title'
                  aria-describedby='simple-modal-description'
                >
                  {body1}
                </Modal>
              </Col>
              <Col md={6}>
                <Button
                  className='login-otp'
                  style={{ background: "#ACACAC", width: "100%" }}
                  onClick={(e) => {
                    handleOpen1();
                    if (disabled === "true") {
                      handleChange1();
                    }
                  }}
                >
                  Reject
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose1}
                  aria-labelledby='simple-modal-title'
                  aria-describedby='simple-modal-description'
                >
                  {body}
                </Modal>
              </Col>
            </Row>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(Profile);
