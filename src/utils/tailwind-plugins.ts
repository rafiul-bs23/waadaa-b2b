import plugin from "tailwindcss/plugin";

export const containerPlugin = plugin((props) => {
  props.addComponents({
    ".container": {
      maxWidth: "100dvw",
      marginRight: "auto",
      marginLeft: "auto",

      "@screen sm": {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
      "@screen md": {
        paddingLeft: "2rem",
        paddingRight: "2rem",
        maxWidth: "720px",
      },
      "@screen lg": {
        paddingLeft: "3rem",
        paddingRight: "3rem",
        maxWidth: "960px",
      },
      "@screen xl": {
        paddingLeft: "4rem",
        paddingRight: "4rem",
        maxWidth: "1140px",
      },
      "@screen 2xl": {
        paddingLeft: "4.5rem",
        paddingRight: "4.5rem",
        maxWidth: "1440px",
      },
      "@screen 3xl": {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        maxWidth: "1440px",
      },
    },
  });
});
