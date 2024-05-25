import { FC } from "react";
import "./Header.scss";
import { AppBar, Box, Button, Container } from "@mui/material";
import Logo from "@/components/UI/Logo/Logo";
import ThemeToggle from "@/components/UI/ThemeToggle/ThemeToggle";

const Header: FC = () => {
  return (
    <AppBar
      sx={{
        padding: "13px 16px",
        backgroundColor: "secondary.main",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        position: "relative",
      }}
    >
      <Container
        sx={{
          padding: "0px",
          maxWidth: "1172px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          "@media (max-width: 359px)": {
            display: "grid",
            gap: "10px",
          },
          "@media (max-width: 250px)": {
            justifyItems: "center",
          },
        }}
      >
        <Logo />

        <Box
          component="div"
          sx={{
            maxWidth: "250px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 400px)": {
              display: "grid",
              gap: "10px",
              justifyContent: "center",
            },
          }}
        >
          <ThemeToggle />

          <Box
            component="div"
            aria-label="header menu"
            sx={{
              width: "210px",
              display: "flex",
              justifyContent: "space-between",
              "@media (max-width: 250px)": {
                display: "grid",
                gap: "10px",
                justifyContent: "center",
              },
            }}
          >
            <Button variant="contained">Users</Button>
            <Button variant="contained">Sign up</Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
