import Head from "next/head";

import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
  },
}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container className={classes.main}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome To Mariposa Wellness
        </Typography>
        <img src="http://bodyconnecthw.com/wp-content/uploads/2019/03/Maria-Alonso.jpg" />
      </Box>
    </Container>
  );
}
