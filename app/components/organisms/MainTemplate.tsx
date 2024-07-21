import { ReactNode } from "react";
import Header from "../molecules/Header";
import Navbar from "../molecules/Navbar";
import { Container } from "@mui/material";

const MainTemplate = ({ children }: { children: ReactNode }) => (
  <div>
    <Header />
    <Navbar />
    <Container>{children}</Container>
  </div>
);

export default MainTemplate;
