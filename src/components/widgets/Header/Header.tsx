import { FC, useState } from "react";
import "./Header.scss";
import { AppBar, IconButton, Drawer, Button, Container, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo/Logo";
import ThemeToggle from "@/components/UI/ThemeToggle/ThemeToggle";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(isOpen);
  };

  const menuItems = ["Users", "Sign up"];

  const list = () => (
    <Container
      component="div"
      className="flex-container header__container"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{
        maxWidth: "260px",
        width: "100%",
        margin: "0px",
        [theme.breakpoints.up("lg")]: {
          maxWidth: "260px",
          width: "100%",
        },
      }}
    >
      <ThemeToggle />
      <Container
        component="div"
        aria-label="header menu"
        className="flex-container header__container"
        sx={{
          maxWidth: "210px",
          margin: "0px",
          justifyContent: "space-between",
        }}
      >
        {menuItems.map((text, index) => (
          <Button variant="contained" key={index} component={HashLink} to={`#${text}`} smooth>
            {text}
          </Button>
        ))}
      </Container>
    </Container>
  );

  return (
    <div>
      <AppBar className="header" sx={{ backgroundImage: "none" }}>
        <Container className="header__wrapper main__container">
          <Logo />

          {isMobile ? (
            <IconButton
              sx={{ color: theme.palette.primary.main, padding: "2px" }}
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ width: "30px", height: "30px" }} />
            </IconButton>
          ) : (
            list()
          )}
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: "100%",
            maxWidth: "260px",
          },
        }}
      >
        <Container sx={{ maxWidth: 260 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: theme.palette.primary.main }}>
            <CloseIcon />
          </IconButton>
          {list()}
        </Container>
      </Drawer>
    </div>
  );
};

export default Header;
