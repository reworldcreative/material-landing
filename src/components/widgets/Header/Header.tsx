import { FC, useState } from "react";
import "./Header.scss";
import { AppBar, IconButton, Drawer, List, ListItem, Button, Container, useTheme } from "@mui/material";
import Logo from "@/components/UI/Logo/Logo";
import ThemeToggle from "@/components/UI/ThemeToggle/ThemeToggle";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem key="theme">
          <ThemeToggle />
        </ListItem>

        {menuItems.map((text, index) => (
          <ListItem key={index}>
            <Button variant="contained">{text}</Button>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar className="header">
        <Container className="header__wrapper">
          <Logo />

          {isMobile ? (
            <IconButton
              sx={{ color: theme.palette.primary.main }}
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ width: "30px", height: "30px" }} />
            </IconButton>
          ) : (
            <Container
              component="div"
              className="flex-container"
              sx={{
                maxWidth: "250px !important",
                width: "100% !important",
                "@media (max-width: 400px)": {
                  display: "grid",
                  gap: "10px",
                  justifyContent: "center",
                },
              }}
            >
              <ThemeToggle />
              <Container
                component="div"
                aria-label="header menu"
                className="flex-container"
                sx={{
                  width: "210px !important",
                  "@media (max-width: 250px)": {
                    display: "grid",
                    gap: "10px",
                    justifyContent: "center",
                  },
                }}
              >
                <Button variant="contained">Users</Button>
                <Button variant="contained">Sign up</Button>
              </Container>
            </Container>
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
          },
        }}
      >
        <div style={{ width: 250 }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: theme.palette.primary.main }}>
            <CloseIcon />
          </IconButton>
          {list()}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
