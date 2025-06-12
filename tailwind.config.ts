// import { containerPlugin } from '@/utils/tailwind-plugins';

import type { Config } from "tailwindcss";

import { containerPlugin } from "./src/utils/tailwind-plugins";

const screens = {
  xs: "375px",
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  "2xl": "1320px",
  "3xl": "1440px",
};

const fontSize = {
  "xs-rem": "12.5px", // for tiny screens
  "sm-rem": "12px", // for small screens (540px)
  "md-rem": "13px", // for medium screens (720px)
  "lg-rem": "14.5px", // for large screens (960px)
  "xl-rem": "15px", // for extra large screens (1140px)
  "2xl-rem": "16px", // for 2xl screens (1320px)
  "3xl-rem": "16px", // for 3xl screens (1440px)
};

const fontFamily = {
  "public-sans": ["var(--wd-font-public-sans)", "sans-serif"],
  "dm-serif-display": ["var(--wd-font-dm-serif-display)", "sans-serif"],
  inter: ["var(--wd-font-inter)", "sans-serif"],
  montserrat: ["var(--wd-font-montserrat)", "sans-serif"],
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--wd-primary)",
        secondary: "var(--wd-secondary)",
        ternary: "var(--wd-sonic-silver)",
        "wd-neutral": {
          600: "var(--wd-naro)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        "active-background-color":
          "var(--wd-buttons-primary-active-background)",
      },
      fontSize,
      screens,
      fontFamily,
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [containerPlugin],
};

export default config;
