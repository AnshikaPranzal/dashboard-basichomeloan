import { Card, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
// import Card from '@material-ui/core/Card';
// import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { GETAPPLICATION, approveOSV } from "../helper/index";
import { GETALLLEADS, getDocConfig, addItem } from "../helper/index";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Row, Col } from "reactstrap";
import Modal from "@material-ui/core/Modal";
import Verify from "./VerifyDocument";
import verified from "../images/Group 2125.svg";
// import Modal from "@material-ui/core/Modal";

// import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { CheckCircleOutline, Visibility } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  // eslint-disable-next-line no-unused-vars
  const [errorF, seterrorF] = useState(false);
  const [update, setupdate] = useState(false);

  const loadAlljobs = () => {
    GETALLLEADS().then((data) => {
      // console.log(data);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs(data);
          setvjobs(data.result);

          console.log(vjobs);
        }
    });
  };

  const [refresh1, setrefresh1] = useState(true);
  const [property, setproperty] = useState([]);
  const [borrower, setborrower] = useState([]);
  const [osv, setosv] = useState([]);
  const [bank, setbank] = useState([]);
  useEffect(() => {
    loadAlljobs();
  }, [refresh1]);

  const loadDoc = () => {
    getDocConfig().then(async (data) => {
      // console.log(data.result);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs1(data);
          const h = await Promise.resolve(setvjobs1(data.result));
        }
    });
  };
  console.log("sammm", vjobs1, "kk", property, borrower, osv, bank);
  const [refresh3, setrefresh3] = useState(true);

  useEffect(() => {
    loadDoc();
  }, [refresh3]);
  useEffect(() => {
    const func= async()=>{
     const k= await Promise.resolve(loadDoc());
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
    }
    
    func()
  }, [vjobs1]);
  const [vjob, setvjob] = useState(
    {
      // coBorrowers: {
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
    }
    // },
    // },
  );

  // console.log("ghgg", vjob.coBorrowers.documents);
  const [vjobp, setvjobp] = useState([]);
  const [vjobq, setvjobq] = useState({
    documents: [],
  });

  //   const [errorF, seterrorF] = useState(false);

  const getajob = (id) => {
    GETAPPLICATION(id).then((data) => {
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          // console.log(data);
          setvjob(data.result);
          console.log("app", data.result);
          setvjobp(data.result.coBorrowers);
          setvjobq(data.result.primaryBorrower);
          console.log("ggii", data.result.primaryBorrower);
          // console.log(vjobp, data.result.coBorrowers);
        }
    });
  };
  console.log("hi", vjobq);
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

  const handleOpen1 = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
  };
  const [Name, setName] = useState("");

  // console.log("textft", text);

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
      <p id='simple-modal-description' style={{ textAlign: "center" }}>
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
          color='primary'
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

  const id = props.match.params.id;
  const check = () => {
    for (var i = 0; i < vjobq.documents.length; i++) {
      if (vjobs1.documents[0].verified !== "Approved") {
        return false;
      }
    }
  };

  const approve1 = (event, id, name, text) => {
    console.log("texttt", `${text}`);
    event.preventDefault();
    approveOSV(id, {
      status: `${name}`,
      reason: `${text}`,
    }).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      }
    });
  };

  const approve = async (event, id, name) => {
    console.log("sscccs", id);
    event.preventDefault();
    const c = await Promise.resolve(check());
    if (c === false) {
      alert("All the documents are not verified");
    } else {
      approveOSV(id, {
        '"status"': name,
      }).then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
        }
      });
    }
  };

  const reject = (event, id, name) => {
    console.log("sscccs", id);
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

  return (
    <div>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant='h6' style={{ color: "black" }}>
            Basic HomeLoan
          </Typography>
        </Toolbar>
      </AppBar>

      {/* {vjobp.map((j, k) => {
        console.log("jiik", j.documents);
      })} */}
      <Grid container style={{ marginTop: "10rem" }}>
        <Grid className={classes.text} item xs={12} md={4} style={{}}>
          <div>
            {/* <div className={classes.toolbar} /> */}
            {/* <Divider /> */}
            <div style={{}}>
              <div
                style={{
                  backgroundColor: "#f1f3f8",
                  borderRadius: "3px",
                  // width: 290,
                  // height: "150%",
                }}
              >
                <div
                  style={{
                    paddingLeft: "15%",
                    paddingTop: "6rem",
                    // height: "140%",
                  }}
                >
                  <div style={{ fontWeight: 600, fontFamily: "Open Sans" }}>
                    {" "}
                    <div>
                      {vjobs &&
                        vjobs.map((obj2, i) => {
                          return (
                            <div>
                              {obj2.id === vjob.id && (
                                <img
                                  // className='circular-image-small'
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
                    Basic Ref No:{" "}
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
                    Bank Application No:{" "}
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
                    {/* {vjob.applicationStatus}{" "} */}
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
                <div
                  style={{
                    paddingLeft: "15%",
                    paddingTop: "3rem",
                    // height: "140%",
                  }}
                >
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Roboto",
                      // opacity: 0.75,
                      // fontSize: 16,
                      fontWeight: 600,
                      letterSpacing: 0.21,
                      // color: "blue",
                    }}
                  >
                    {" "}
                    Basic Relationship Manager Details{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "2rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Name:{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Mobile{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Roboto",
                      opacity: 0.75,
                      fontSize: 13,
                      paddingBottom: "4rem",
                      color: "#ACACAC",
                      opacity: 1,
                    }}
                  >
                    {" "}
                    Email{" "}
                  </div>
                </div>
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
                  // opacity: 1.5,
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
                    {vjobs &&
                      vjobs.map((obj2, i) => {
                        return (
                          <div>{obj2.id === vjob.id && obj2.customerName}</div>
                        );
                      })}
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
                    {vjobs &&
                      vjobs.map((obj2, i) => {
                        return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
                      })}
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
                    {vjobs &&
                      vjobs.map((obj2, i) => {
                        return <div>{obj2.id === vjob.id && obj2.amount}</div>;
                      })}
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
                    Basic Ref Number
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
                    {vjob.basicId == null ? "" : vjob.basickId}
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
                    Bank Application Number
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
                    {vjob.bankId == null ? "" : vjob.bankId}
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
                    {/* {vjob.basicId == null ? "" : vjob.basickId} */}
                  </Grid>
                </Grid>

                <Grid container item xs={12} style={{ marginTop: "2rem" }}>
                  <Grid
                    item
                    xs={6}
                    style={{
                      marginLeft: "2rem",
                      fontWeight: 400,
                      // color: "#ACACAC",
                      // opacity: 1.5,
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

                <Grid item xs={12}>
                  {vjobq.documents.map((j, k) => {
                    console.log("jiik", j.docConfigId);
                    return (
                      <>
                        {property.map((n, m) => {
                          console.log(n);
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
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${j.id}/${j.docKeyCaption}`}
                                        target='_blank'
                                      >
                                        <Visibility
                                          style={{ color: "black" }}
                                        />
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${j.id}`}
                                          target='_blank'
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            // width: "20%"
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
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            // width: "20%"

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
                  // opacity: 1.5,
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
                      // opacity: 1.5,
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
                    Name
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
                    {vjob.primaryBorrower ? vjob.primaryBorrower.lastName : ""}
                    {/* })}
                    {/* {vjob.primaryBorrower.map((o, i) => {
                      return o.id;
                    })} */}
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
                    {/* {vjob.mobile} */}
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
                    Name
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
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          return o.firstName;
                        })
                      : ""}{" "}
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          return o.lastName;
                        })
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
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          return o.mobile;
                        })
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
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          return o.gender;
                        })
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
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          return o.professionName;
                        })
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
                    {vjob.coBorrowers
                      ? vjob.coBorrowers.map((o, i) => {
                          // console.log(vjobp.id);
                          return o.companyName;
                        })
                      : ""}
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
                    console.log("jiik", j.docConfigId);
                    return (
                      <>
                        {borrower.map((n, m) => {
                          console.log(n);
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
                                          // color: "#ACACAC",
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
                                          // color: "#ACACAC",
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
                                          // color: "#ACACAC",
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
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${j.id}/${j.docKeyCaption}`}
                                        target='_blank'
                                      >
                                        <Visibility
                                          style={{ color: "black" }}
                                        />
                                      </a>
                                    </Grid>
                                    {/* <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      <a
                                        onClick={() => {
                                          setUrl(
                                            j.fileOneSignedUrl,
                                            j.fileTwoSignedUrl
                                          );
                                        }}
                                        href={`/verify/${vjob.id}/${j.id}`}
                                        target='_blank'
                                      >
                                        <Visibility
                                          style={{ color: "black" }}
                                        />
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${j.id}`}
                                          target='_blank'
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid> */}
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            // width: "20%"
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
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            // width: "20%"

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
                    console.log("jiik", j.docConfigId);
                    return (
                      <>
                        {bank.map((n, m) => {
                          console.log(n);
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
                                        href={`/verify/${vjob.id}/${j.id}/${j.docKeyCaption}`}
                                        target='_blank'
                                      >
                                        <Visibility
                                          style={{ color: "black" }}
                                        />
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${j.id}`}
                                          target='_blank'
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            // width: "20%"
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

                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            // width: "20%"

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
                {/* </Grid> */}
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
                    Bank Name
                  </Grid>
                  <Grid item xs={4}>
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
                  <Grid item xs={4}>
                    {vjob.bankBranchName}
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
                    console.log("jiik", j.docConfigId);
                    return (
                      <>
                        {osv.map((n, m) => {
                          console.log(n);
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
                                        // marginTop: "1rem",
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
                                        href={`/verify/${vjob.id}/${j.id}/${j.docKeyCaption}`}
                                        target='_blank'
                                      >
                                        <Visibility
                                          style={{ color: "black" }}
                                        />
                                      </a>
                                      {j.fileTwoSignedUrl && (
                                        <a
                                          onClick={() => {
                                            setUrl(j.fileTwoSignedUrl);
                                          }}
                                          href={`/verify/${vjob.id}/${j.id}`}
                                          target='_blank'
                                        >
                                          <Visibility
                                            style={{ color: "black" }}
                                          />
                                        </a>
                                      )}
                                    </Grid>
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isStampingReq && (
                                        <div
                                          style={{
                                            // width: "20%"
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
                                    <Grid
                                      item
                                      xs={2}
                                      style={
                                        {
                                          // textAlign: "center",
                                          // paddingRight: "18%",
                                        }
                                      }
                                    >
                                      {j.isVerificationReq && (
                                        <div
                                          style={{
                                            // width: "20%"

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
                {/* </Grid> */}
              </CardContent>
            </Collapse>
          </Card>

          <Row style={{ marginTop: "2rem" }}>
            <Col md={6}>
              <Button
                className='login-otp'
                style={{ background: "#0088FC", width: "100%" }}
                // onClick={() => addItem(true)}
                disabled={disabled}
                onClick={(e) => {
                  console.log("hioo");
                  approve(e, id, "OSVApproved");
                  handleChange1();
                }}
              >
                Approve
              </Button>
            </Col>
            <Col md={6}>
              <Button
                // disabled={disabled1}
                disabled={disabled || disabled1}
                className='login-otp'
                style={{ background: "#ACACAC", width: "100%" }}
                // onClick={addItem}
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
