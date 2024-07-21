import React from "react";
import { Box, Typography } from "@mui/material";

interface IconTextBoxProps {
  icon: React.ReactNode;
  text: string;
}

const IconTextBox: React.FC<IconTextBoxProps> = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    {icon}
    <Typography variant="body1">{text}</Typography>
  </Box>
);

export default IconTextBox;
