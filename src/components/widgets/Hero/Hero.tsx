import { FC,memo } from "react";
import backgroundImage from "@img/hero-bunner.jpg";
import { Button, Container, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

const Hero: FC = memo(() => {
  return (
    <Container
      component="div"
      className="hero"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        "@supports (background-image: url('example.webp'))": {
          backgroundImage: `url(${backgroundImage.replace(/\.[^/.]+$/, "") + ".webp"})`,
        },
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

        <Button variant="contained" sx={{ margin: "auto" }} component={HashLink} to="#Sign up" smooth>
          Sign up
        </Button>
      </Container>
    </Container>
  );
});

export default Hero;
