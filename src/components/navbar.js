import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Icon from "../img/icon.png";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "../App.css";

function ResponsiveAppBar() {
  return (
    <AppBar position="sticky" style={{ background: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Icon} height="35px" width="35px" alt="Kula AI" />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              sx={{ mx: 2 }}
            >
              <button class="menu">Products</button>
              <button class="menu">Our Story</button>
              <button class="menu">Resources</button>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <button class="button-63" role="button">
              Book a demo
            </button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
