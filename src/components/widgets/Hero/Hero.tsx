import { FC } from "react";
import backgroundImage from "@img/hero-bunner.jpg";
import { Button, Container, Typography } from "@mui/material";

const Hero: FC = () => {
  return (
    <Container
      component="div"
      className="hero"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Container component="div" className="hero__wrapper">
        <Typography variant="h1">
          Introducing the <br /> MUI Library
        </Typography>

        <Typography variant="main" sx={{ color: "#ffffff", marginTop: "21px", marginBottom: "57px", display: "block" }}>
          Now the MUI library is very popular among the development of UI interfaces in React. Therefore, a good React
          development specialist must know the UI component MUI library, since it is often in demand
        </Typography>

        <Button variant="contained" sx={{ margin: "auto", display: "block" }}>
          Sign up
        </Button>
      </Container>
    </Container>
  );
};

export default Hero;
