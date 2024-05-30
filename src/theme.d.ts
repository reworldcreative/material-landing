import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Palette, PaletteOptions } from "@mui/material/styles/createPalette";
import { Theme } from "@mui/material/styles/createTheme";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    main: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    main?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    main: true;
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    custom: {
      maxWidth: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      maxWidth?: string;
    };
  }
}
