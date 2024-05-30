import { FC } from "react";
import "./MainPage.scss";
import Hero from "@/components/widgets/Hero/Hero";
import { Container } from "@mui/material";
import Employees from "@/components/widgets/Employees/Employees";

const MainPage: FC = () => {
  return (
    <>
      <Hero />

      <Container component="div" className="main__container">
        <Employees />
      </Container>
    </>
  );
};

export default MainPage;
