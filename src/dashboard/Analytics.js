import React, { Component, Fragment } from "react";
import { Grid, Card } from "@material-ui/core";
import TableCard from "./Table";
import { withStyles } from "@material-ui/styles";

class Dashboard1 extends Component {
  state = {};

  render() {
    let { theme } = this.props;

    return (
      <Fragment>
        <div className='analytics m-sm-30 mt--18'>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TableCard />
              <h4 className='card-title text-muted mb-4'>Ongoing Projects</h4>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
