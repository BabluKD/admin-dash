import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Paper from "@material-ui/core/Paper";

import "./CardData.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SignalCellular4BarIcon from "@material-ui/icons/SignalCellular4Bar";
// import ProgressBar from "./Progess";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 130,
    margin: 10,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <h2 style={{ textAlign: "center" }}>Overall Data</h2>
        <br />
        <Grid container justifyContent="center" spacing={5}>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">Total Orders</div>
                  <div className="data">24000</div>
                  {/* <div className="arrow">16% since last month.</div> */}
                </div>
                <div className="icon-color">
                  <DashboardIcon style={{ fontSize: 60 }} />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">Total Customers</div>
                  <div className="data">16000</div>
                  {/* <div className="arrow">16% since last month.</div> */}
                </div>
                <div className="icon-color">
                  <SupervisorAccountIcon
                    style={{ fontSize: 60, color: "green" }}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">Task Progess</div>
                  <div className="data">75%</div>
                  <div className="arrow"></div>
                </div>
                <div className="icon-color">
                  <SignalCellular4BarIcon
                    style={{ fontSize: 60, color: "orange" }}
                  />
                </div>
              </div>
              <div style={{ margin: "10px" }}></div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">TOTAL PROFIT</div>
                  <div className="data">$24,000</div>
                </div>
                <div className="icon-color">
                  <MonetizationOnIcon style={{ fontSize: 60, color: "blue" }} />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <br />
      <Divider />

      <Grid item xs={12} style={{ marginTop: 25 }}>
        <h2 style={{ textAlign: "center" }}>Monthly Data</h2>
        <br />
        <Grid container justifyContent="center" spacing={5}>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">New Orders</div>
                  <div className="data">4000</div>
                  <div className="arrow">16% since last month.</div>
                </div>
                <div className="icon-color">
                  <DashboardIcon style={{ fontSize: 60 }} />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">New Customers</div>
                  <div className="data">2000</div>
                  <div className="arrow">34% since last month.</div>
                </div>
                <div className="icon-color">
                  <SupervisorAccountIcon
                    style={{ fontSize: 60, color: "green" }}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">Task Progess</div>
                  <div className="data">75%</div>
                  <div className="arrow"></div>
                </div>
                <div className="icon-color">
                  <SignalCellular4BarIcon
                    style={{ fontSize: 60, color: "orange" }}
                  />
                </div>
              </div>
              <div style={{ margin: "10px" }}></div>
            </Paper>
          </Grid>
          <Grid>
            <Paper className={classes.paper}>
              <div className="carddata">
                <div className="content">
                  <div className="topc">Profit</div>
                  <div className="data">$17,00</div>
                  <div className="arrow">34% since last month.</div>
                </div>
                <div className="icon-color">
                  <MonetizationOnIcon style={{ fontSize: 60, color: "blue" }} />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
