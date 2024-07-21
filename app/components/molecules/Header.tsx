"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Icon from "../atoms/Icon";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  maxWidth: "1600px",
  width: "100%",
  height: "48px",
  borderRadius: "12px",
  justifyContent: "center",
  margin: "0 auto",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    height: "80px",
  },
}));

const Header = () => (
  <Box sx={{ display: "flex", justifyContent: "center", padding: "12px 0px" }}>
    <StyledAppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Icon component={FmdGoodOutlinedIcon} sx={{ fontSize: 20 }} />
            <Typography variant="subtitle2">
              The Sun Avenue, 28 Mai Chí Thọ, An Phú, TP Thủ Đức, Hồ Chí Minh,
              Việt Nam.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Icon component={EmailOutlinedIcon} sx={{ fontSize: 20 }} />
            <Typography variant="subtitle2">admin@homenest.com.vn</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Icon component={AccessTimeOutlinedIcon} sx={{ fontSize: 20 }} />
            <Typography variant="subtitle2">
              Thứ 2 - Chủ Nhật: 9.00 am - 8.00pm
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Icon component={FacebookOutlinedIcon} sx={{ fontSize: 20 }} />
          <Icon component={InstagramIcon} sx={{ fontSize: 20 }} />
          <Icon component={YouTubeIcon} sx={{ fontSize: 20 }} />
        </Box>
      </Toolbar>
    </StyledAppBar>
  </Box>
);

export default Header;
