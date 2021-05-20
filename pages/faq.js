import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
  },
}));

function faq(props) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.main}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          FAQ
        </Typography>
      </Box>
    </Container>
  );
}
export default faq;
