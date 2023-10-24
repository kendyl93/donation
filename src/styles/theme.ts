import { Theme } from "./types";

const theme: Theme = {
  spacing: 8,
  font: {
    family: {
      inter: "'Inter', sans-serif",
      workSans: "Work Sans",
      rubik: "'Rubik', sans-serif",
    },
    baseSize: 8,
  },
  colors: {
    primary: {
      light: "#645D93",
      default: "#423C66",
      dark: "#241E47",
    },
    secondary: "#595D7B",
    gray: {
      superLight: "#E0E0E0",
      light: "#E9EEF2",
      primary: "#F4F8FA",
      dark: "#1E2A32",
      superDark: "#4D6475",
    },
    background: {
      header: "#FCD5CE",
      light: "#f2f2f2",
      primary: "#f0f0f0",
    },
    hover: "#F3F5FE",
    active: "#E8EAF2",
  },
  breakpoints: {
    mobile: "525px",
  },
};

export default theme;
