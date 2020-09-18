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
import { GETALLLEADS } from "../helper/index";
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
      paddingLeft: "5rem",
      paddingRight: "2rem",
    },
  },
  text1: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "5rem",
      marginRight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5rem",
      paddingRight: "2rem",
      marginTop: "1rem",
    },
  },
}));
function Profile(props) {
  const [jobs, setjobs] = useState([]);
  const [vjobs, setvjobs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [errorF, seterrorF] = useState(false);
  const [update, setupdate] = useState(false);

  const loadAlljobs = () => {
    GETALLLEADS().then((data) => {
      console.log(data);
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

  const [vjob, setvjob] = useState({});
  //   const [errorF, seterrorF] = useState(false);

  const getajob = (id) => {
    GETAPPLICATION(id).then((data) => {
      if (data)
        if (data.error) {
          seterrorF(data.error);
        } else {
          console.log(data);
          setvjob(data.result);
          console.log(data.result);
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
  return (
    <div>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar>
          <Typography variant='h6'>Basic HomeLoan</Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{ marginTop: "10rem" }}>
        <Grid className={classes.text} item xs={12} md={4} style={{}}>
          <div>
            {/* <div className={classes.toolbar} /> */}
            {/* <Divider /> */}
            <div style={{}}>
              <div
                style={{
                  backgroundColor: "lightgray",
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
                    <div>
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
                    <div>
                      {vjobs.map((obj2, i) => {
                        return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
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
                    Basic Ref No:{" "}
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
                    Bank Application No:{" "}
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
                    Disbursement{" "}
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
                    Confirm Disbursement{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      textAlign: "right",
                      paddingRight: "2rem",
                    }}
                  >
                    {" "}
                    OSV{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      textAlign: "right",
                      paddingRight: "2rem",
                      color: "green",
                      paddingBottom: "2rem",
                    }}
                  >
                    {" "}
                    <div>
                      {vjobs.map((obj2, i) => {
                        return (
                          <div>
                            {obj2.id === vjob.id && obj2.applicationStage}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <Divider />
                <div
                  style={{
                    paddingLeft: "15%",
                    paddingTop: "6rem",
                    // height: "140%",
                  }}
                >
                  <div
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 16,
                      color: "blue",
                    }}
                  >
                    {" "}
                    {/* Basic Relationship Manager Details{" "} */}
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                    }}
                  >
                    {" "}
                    Name:{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                    }}
                  >
                    {" "}
                    Mobile{" "}
                  </div>
                  <div
                    style={{
                      marginTop: "1rem",
                      fontFamily: "Open Sans",
                      opacity: 0.75,
                      fontSize: 13,
                      paddingBottom: "2rem",
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
              <div style={{ marginLeft: "2rem", fontWeight: 600 }}>
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
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Customer Name
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return (
                        <div>{obj2.id === vjob.id && obj2.customerName}</div>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Phone Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Type
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.loanType}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Amount
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.amount}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Basic Ref Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.basicId == null ? "" : vjob.basickId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Bank Application Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.bankId == null ? "" : vjob.bankId}
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div style={{ marginLeft: "2rem", fontWeight: 600 }}>
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
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Customer Name
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return (
                        <div>{obj2.id === vjob.id && obj2.customerName}</div>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Phone Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Type
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.loanType}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Amount
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.amount}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Basic Ref Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.basicId == null ? "" : vjob.basickId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Bank Application Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.bankId == null ? "" : vjob.bankId}
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div style={{ marginLeft: "2rem", fontWeight: 600 }}>
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
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Customer Name
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return (
                        <div>{obj2.id === vjob.id && obj2.customerName}</div>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Phone Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Type
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.loanType}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Amount
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.amount}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Basic Ref Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.basicId == null ? "" : vjob.basickId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Bank Application Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.bankId == null ? "" : vjob.bankId}
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
          <Card style={{ marginTop: "2rem" }}>
            <CardActions disableSpacing>
              <div style={{ marginLeft: "2rem", fontWeight: 600 }}>
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
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Customer Name
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return (
                        <div>{obj2.id === vjob.id && obj2.customerName}</div>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Phone Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.mobile}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Type
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.loanType}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Loan Amount
                  </Grid>
                  <Grid item xs={4}>
                    {vjobs.map((obj2, i) => {
                      return <div>{obj2.id === vjob.id && obj2.amount}</div>;
                    })}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Basic Ref Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.basicId == null ? "" : vjob.basickId}
                  </Grid>
                </Grid>
                <Grid container item xs={12} style={{ marginTop: "1rem" }}>
                  <Grid item xs={6} style={{ marginLeft: "2rem" }}>
                    Bank Application Number
                  </Grid>
                  <Grid item xs={4}>
                    {vjob.bankId == null ? "" : vjob.bankId}
                  </Grid>
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
