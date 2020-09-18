// import React, { useState, useEffect } from "react";
// import { GETAPPLICATION } from "../helper/index";
// import Card from "@material-ui/core/Card";
// import Grid from "@material-ui/core/Grid";
// import Navbar from "./Navbar";
// function Profile(props) {
//   // const [ vjob, setvjob ] = useState([]);
//   // const [ error, seterror ]
//   //   console.log(props.match.params.id);

//   const [vjob, setvjob] = useState({});
//   const [errorF, seterrorF] = useState(false);

//   const getajob = (id) => {
//     GETAPPLICATION(id).then((data) => {
//       if (data)
//         if (data.error) {
//           seterrorF(data.error);
//         } else {
//           console.log(data.result);
//           setvjob(data.result);
//         }
//     });
//   };

//   const [refresh, setrefresh] = useState(true);

//   useEffect(() => {
//     getajob(props.match.params.id);
//   }, [refresh]);

//   return (
//     <div>
//       <Navbar />
//       <Grid container>
//         <Grid item xs={12} sm={4} lg={3}>
//           <div style={{ backgroundColor: "lightgray", height: "160%" }}>
//             <div style={{ paddingLeft: "15%", paddingTop: "2rem" }}>
//               <div style={{ fontWeight: 600, fontFamily: "Open Sans" }}>
//                 {" "}
//                 Name{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                 }}
//               >
//                 {" "}
//                 1234567890{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                 }}
//               >
//                 {" "}
//                 Basic Ref No:{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                 }}
//               >
//                 {" "}
//                 Bank Application No:{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                 }}
//               >
//                 {" "}
//                 Disbursement{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                 }}
//               >
//                 {" "}
//                 Confirm Disbursement{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                   textAlign: "right",
//                   paddingRight: "2rem",
//                 }}
//               >
//                 {" "}
//                 OSV{" "}
//               </div>
//               <div
//                 style={{
//                   marginTop: "0.5rem",
//                   fontFamily: "Open Sans",
//                   opacity: 0.75,
//                   fontSize: 13,
//                   textAlign: "right",
//                   paddingRight: "2rem",
//                   color: "green",
//                 }}
//               >
//                 {" "}
//                 PendingOSV{" "}
//               </div>
//             </div>
//           </div>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Profile;
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@material-ui/icons/Mail";
// import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CardContent } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    border: "none",
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    border: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  text: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      {/* <Divider /> */}
      <div style={{ height: "60%" }}>
        <div
          style={{ backgroundColor: "lightgray", width: 290, height: "150%" }}
        >
          <div
            style={{ paddingLeft: "15%", paddingTop: "6rem", height: "140%" }}
          >
            <div style={{ fontWeight: 600, fontFamily: "Open Sans" }}>
              {" "}
              Name{" "}
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                fontFamily: "Open Sans",
                opacity: 0.75,
                fontSize: 13,
              }}
            >
              {" "}
              1234567890{" "}
            </div>
            <div
              style={{
                marginTop: "0.5rem",
                fontFamily: "Open Sans",
                opacity: 0.75,
                fontSize: 13,
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
              }}
            >
              {" "}
              PendingOSV{" "}
            </div>
          </div>
        </div>
        <div
          //   boxShadow={3}
          style={{
            // border: "1px solid black",
            height: "100%",
            paddingLeft: "13%",
            // marginTop: "5rem",
            paddingTop: "3rem",
            backgroundColor: "lightgray",
            boxShadow: "0px 3px 8px #00000029",
            // boxShadow: "0px 0px 0px ",
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
            Basic Relationship Manager Details{" "}
          </div>
          <div
            style={{
              marginTop: "0.5rem",
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
              marginTop: "0.5rem",
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
              marginTop: "0.5rem",
              fontFamily: "Open Sans",
              opacity: 0.75,
              fontSize: 13,
            }}
          >
            {" "}
            Email{" "}
          </div>
        </div>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant='h6' noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Card
          style={{
            width: "60%",
            background:
              "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            boxShadow: "0px 3px 8px #00000029",
            borderRadius: "6px",
            opacity: "1",
            marginLeft: "2%",
            marginRight: "3%",
            textAlign: "left",
          }}
        > */}
        {/* <CardContent style={{ paddingTop: "1rem" }}> */}
        <Accordion className={classes.text} style={{ marginTop: "2rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              <div
                style={{
                  fontWeight: 600,
                  paddingLeft: "3%",
                  fontFamily: "Open Sans",
                }}
              >
                {" "}
                Application Details
              </div>
            </Typography>
          </AccordionSummary>
          <Grid container item xs={12}>
            <AccordionDetails
              className={classes.text}
              style={{ width: "10rem" }}
            >
              <div>
                <Grid container item xs={12}>
                  <div style={{ width: "10rem" }}>Customer Name</div>
                  {/* <Grid item xs={4}>
                    Unknown Name
                  </Grid> */}
                </Grid>
              </div>
            </AccordionDetails>
          </Grid>
        </Accordion>
        <Accordion className={classes.text} style={{ marginTop: "2rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              <div
                style={{
                  fontWeight: 600,
                  paddingLeft: "3%",
                  fontFamily: "Open Sans",
                }}
              >
                {" "}
                Property Details
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  Customer Name
                </Grid>
                <Grid item xs={4}>
                  Unknown Name
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.text} style={{ marginTop: "2rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              <div
                style={{
                  fontWeight: 600,
                  paddingLeft: "3%",
                  fontFamily: "Open Sans",
                }}
              >
                {" "}
                Borrower Details
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  Customer Name
                </Grid>
                <Grid item xs={4}>
                  Unknown Name
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion className={classes.text} style={{ marginTop: "2rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography>
              <div
                style={{
                  fontWeight: 600,
                  paddingLeft: "3%",
                  fontFamily: "Open Sans",
                }}
              >
                {" "}
                Bank Details
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  Customer Name
                </Grid>
                <Grid item xs={4}>
                  Unknown Name
                </Grid>
              </Grid>
            </div>
          </AccordionDetails>
        </Accordion>

        {/* </CardContent> */}
        {/* </Card> */}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
