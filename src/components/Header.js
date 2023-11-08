import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color={"warning"}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Daily everyday
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
