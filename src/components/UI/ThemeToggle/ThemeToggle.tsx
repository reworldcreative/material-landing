import { FC, memo } from "react";
import { IconButton } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useTheme } from "@mui/material/styles";

const ThemeToggle: FC = memo(() => {
  const { toggleTheme } = useGlobalContext();
  const theme = useTheme();

  return (
    <IconButton
      aria-label="change theme"
      onClick={toggleTheme}
      sx={{ width: "fit-content", margin: "auto", padding: "5px" }}
    >
      {theme.palette.mode === "light" ? (
        <WbSunnyIcon sx={{ color: theme.palette.primary.main }} />
      ) : (
        <ModeNightIcon sx={{ color: theme.palette.primary.main }} />
      )}
    </IconButton>
  );
});

export default ThemeToggle;
