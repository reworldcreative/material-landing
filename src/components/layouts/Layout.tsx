import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/widgets/Header/Header";
import { Container } from "@mui/material";

const Layout: FC = () => {
  return (
    <>
      <Header />

      <Container component="main" className="main__container pageContainer__main">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
