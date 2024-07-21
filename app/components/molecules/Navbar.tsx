"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import LinkTextComponent from "../atoms/LinkText";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  maxWidth: "1600px",
  width: "100%",
  height: "93px",
  borderRadius: "12px",
  justifyContent: "center",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    height: "80px",
  },
}));

const Navbar = () => (
  <Box sx={{ display: "flex", justifyContent: "center" }}>
    <StyledAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Typography variant="h6" sx={{}}>
          MyApp
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <LinkTextComponent href="/">Website</LinkTextComponent>
          <LinkTextComponent href="/">Phần mềm</LinkTextComponent>
          <LinkTextComponent href="/">Marketing</LinkTextComponent>
          <LinkTextComponent href="/">Hosting & Tên miền</LinkTextComponent>
          <LinkTextComponent href="/">Liên hệ</LinkTextComponent>
        </Box>
        <Button color="inherit">
          <SearchIcon />
        </Button>
      </Toolbar>
    </StyledAppBar>
  </Box>
);

export default Navbar;
