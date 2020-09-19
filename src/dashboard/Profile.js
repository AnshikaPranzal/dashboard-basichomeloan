import { Card, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
// import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";
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
import { GETAPPLICATION } from "../helper/index";
import { GETALLLEADS, getDocConfig } from "../helper/index";
import Divider from "@material-ui/core/Divider";
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
}));
function Profile(props) {
  const [jobs, setjobs] = useState([]);
  const [jobs1, setjobs1] = useState([]);
  const [vjobs1, setvjobs1] = useState([]);
  const [vjobs, setvjobs] = useState([
    {
      documents: [],
      // primaryBorrower: [],
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

  useEffect(() => {
    loadAlljobs();
  }, [refresh1]);

  const loadDoc = () => {
    getDocConfig().then((data) => {
      // console.log(data.result);
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          setjobs1(data);
          setvjobs1(data.result);
        }
    });
  };
  console.log("sammm", vjobs1);
  const [refresh3, setrefresh3] = useState(true);

  useEffect(() => {
    loadDoc();
  }, [refresh3]);

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
    }
    // },
    // },
  );
  // console.log("ghgg", vjob.coBorrowers.documents);
  const [vjobp, setvjobp] = useState([]);

  //   const [errorF, seterrorF] = useState(false);

  const getajob = (id) => {
    GETAPPLICATION(id).then((data) => {
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          // console.log(data);
          setvjob(data.result);
          // console.log(data.result);
          setvjobp(data.result.coBorrowers);
          // console.log("ggii");
          // console.log(vjobp, data.result.coBorrowers);
        }
    });
  };
  // console.log("hi", vjobp[0]);
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

  return (
    <div>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant='h6' style={{ color: "black" }}>
            Basic HomeLoan
          </Typography>
        </Toolbar>
      </AppBar>
      {vjobp.map((j, k) => {
        // console.log("jiik", j.documents);
      })}
      <Grid container style={{ marginTop: "10rem" }}>
        <Grid className={classes.text} item xs={12} md={4} style={{}}>
          <div>
            {/* <div className={classes.toolbar} /> */}
            {/* <Divider /> */}
            <div style={{}}>
              <div
                style={{
                  backgroundColor: "#f1f3f8",
                  borderRadius: "10px",
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
                      {vjobs.map((obj2, i) => {
                        return (
                          <div>
                            {obj2.id === vjob.id && (
                              <img
                                // className='circular-image-small'
                                src={obj2.id === vjob.id && obj2.profilePicUrl}
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
                      {vjobs.map((obj2, i) => {
                        return (
                          <div>{obj2.id === vjob.id && obj2.customerName}</div>
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
                      {vjobs.map((obj2, i) => {
                        return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
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
                    {vjobs.map((obj2, i) => {
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
                    {vjobs.map((obj2, i) => {
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
                    {vjobs.map((obj2, i) => {
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
                    {vjobs.map((obj2, i) => {
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
                    {/* {vjob.documments.id == null ? "" : vjob.bankId} */}
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
                <Grid item xs={12}>
                  Documents:
                  <Grid item xs={12}>
                    {vjobs1.map(
                      (o, i) =>
                        o.belongsToEntity === "ApplicationCustomer" &&
                        o.id === vjobp.id &&
                        o.id
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    {vjobs1.map(
                      (o, i) =>
                        o.belongsToEntity === "ApplicationCustomer" &&
                        o.docCategoryName === "KYC" &&
                        o.docCategoryDescription

                      // o.id
                    )}
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
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
