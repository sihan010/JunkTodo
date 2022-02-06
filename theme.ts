import { configureFonts, DarkTheme, DefaultTheme } from "react-native-paper";

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

const _fontConfig = {
  regular: {
    fontFamily: "Oswald-Regular",
    fontWeight: "normal" as FontWeight,
  },
  medium: {
    fontFamily: "Oswald-Medium",
    fontWeight: "normal" as FontWeight,
  },
  light: {
    fontFamily: "Oswald-Light",
    fontWeight: "normal" as FontWeight,
  },
  thin: {
    fontFamily: "Oswald-Thin",
    fontWeight: "normal" as FontWeight,
  },
};

const fontConfig = {
  ios: _fontConfig,
  android: _fontConfig,
};

export const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: "#BB8FCE",
    success: "#138D75",
    accent: "#64B5F6",
  },
  fonts: configureFonts(fontConfig),
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 15,
  colors: {
    ...DarkTheme.colors,
    primary: "#6C3483",
    success: "#138D75",
    accent: "#FF5722",
    surface: "#161616",
    background: "#000000",
    placeholder: "#C1CFC0",
  },
  fonts: configureFonts(fontConfig),
};
