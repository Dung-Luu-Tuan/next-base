import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface LinkTextProps {
  children: React.ReactNode;
  href: string;
}

export default function LinkTextComponent({
  href,
  children,
}: LinkTextProps): JSX.Element {
  const [isClient, setIsClient] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <></>;
  }

  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <Typography
        component="a"
        sx={{
          fontWeight: 700,
          cursor: "pointer",
          textDecoration: "none",
          color: theme.palette.secondary.main,
          "&:hover": {
            color: theme.palette.secondary.dark,
          },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}
