import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "../Link";
import Hidden from "@material-ui/core/Hidden";

import Copyright from "../Copyright";

// import swirl from "../../assets/swirl.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.orange,
    width: "100%",
    height: "5em",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  footerLogo: {
    height: "5em",
    [theme.breakpoints.down("sm")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  mainContainer: {
    position: "absolute",
    marginTop: ".3em",
  },
  link: {
    fontFamily: "Heebo, sans-serif",
    fontSize: "0.75rem",

    opacity: ".7",
    textDecoration: "none",
    color: "black",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { value, setValue, selectedIndex, setSelectedIndex } = props;

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
        <Grid
          container
          className={classes.mainContainer}
          justify="center"
          spacing={2}
        >
          <Grid item className={classes.link}>
            <Grid container direction="column">
              <Grid
                component={Link}
                href="/"
                item
                className={classes.link}
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                href="/aboutus"
                item
                className={classes.link}
                onClick={() => setValue(1)}
              >
                About Us
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                href="/faq"
                item
                className={classes.link}
                onClick={() => setValue(2)}
              >
                FAQ
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                href="/treatments"
                item
                className={classes.link}
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(0);
                }}
              >
                Treatments
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid
                component={Link}
                href="/contactus"
                item
                className={classes.link}
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      {/* <img alt="logo" src={swirl} className={classes.footerLogo} /> */}
    </footer>
  );
}
