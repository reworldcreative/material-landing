import { FC, lazy, Suspense } from "react";
import "./MainPage.scss";
import { Container } from "@mui/material";
// import Hero from "@/components/widgets/Hero/Hero";
// import PopUp from "@/components/UI/PopUp/PopUp";
// import Employees from "@/components/widgets/Employees/Employees";
// import SignUp from "@/components/widgets/SignUp/SignUp";

const Hero = lazy(() => import("@/components/widgets/Hero/Hero"));
const Employees = lazy(() => import("@/components/widgets/Employees/Employees"));
const SignUp = lazy(() => import("@/components/widgets/SignUp/SignUp"));
const PopUp = lazy(() => import("@/components/UI/PopUp/PopUp"));

const MainPage: FC = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<></>}>
        <PopUp />
      </Suspense>

      <Container component="div" className="main__container">
        <Suspense fallback={<></>}>
          <Employees />
        </Suspense>

        <Suspense fallback={<></>}>
          <SignUp />
        </Suspense>
      </Container>
    </>
  );
};

export default MainPage;
