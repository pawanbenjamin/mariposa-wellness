import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography
      style={{
        fontSize: "11px",
      }}
      variant="subtitle"
      color="textSecondary"
      align="center"
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://mariposawellness.com/">
        Mariposa Wellness
      </MuiLink>
      {new Date().getFullYear()}
    </Typography>
  );
}
