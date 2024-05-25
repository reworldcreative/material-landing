import { FC } from "react";
import "./Logo.scss";
import { Link as MuiLink, Typography, useTheme } from "@mui/material";
import { ReactComponent as LogoIcon } from "@img/logo.svg";
import { Link as RouterLink } from "react-router-dom";

const Logo: FC = () => {
  const theme = useTheme();
  return (
    <MuiLink
      component={RouterLink}
      to={"/"}
      underline="none"
      color={theme.palette.primary.main}
      alignItems="end"
      display="flex"
    >
      <LogoIcon fill={theme.palette.accent.main} width="30" height="30" />

      <Typography
        variant="main"
        sx={{
          marginLeft: "4px",
        }}
      >
        MATERIAL
      </Typography>
    </MuiLink>
  );
};

export default Logo;
