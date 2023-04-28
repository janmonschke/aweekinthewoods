const Typography = require("typography");
const FairyGates = require("typography-theme-fairy-gates").default;

const noUnderline = {
  backgroundImage: "none",
  textShadow: "none",
};

FairyGates.overrideThemeStyles = () => ({
  "h1 a": noUnderline,
  "h2 a": noUnderline,
  "h3 a": noUnderline,
});

delete FairyGates.googleFonts;

const typography = new Typography(FairyGates);

module.exports = typography;
