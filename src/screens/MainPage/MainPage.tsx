import React, { FC } from "react";
import "./MainPage.scss";
import Hero from "@/components/widgets/Hero/Hero";
import { Container } from "@mui/material";
// import PopUp from "@/components/UI/PopUp/PopUp";
// import Employees from "@/components/widgets/Employees/Employees";
// import SignUp from "@/components/widgets/SignUp/SignUp";

const Employees = React.lazy(() => import("@/components/widgets/Employees/Employees"));
const SignUp = React.lazy(() => import("@/components/widgets/SignUp/SignUp"));
const PopUp = React.lazy(() => import("@/components/UI/PopUp/PopUp"));

const MainPage: FC = () => {
  return (
    <>
      <Hero />

      <PopUp />

      <Container component="div" className="main__container">
        <Employees />

        <SignUp />
      </Container>
    </>
  );
};

export default MainPage;
