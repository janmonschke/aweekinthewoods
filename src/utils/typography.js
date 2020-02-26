import Typography from "typography"
import FairyGates from "typography-theme-fairy-gates"

const noUnderline = {
  backgroundImage: "none",
  textShadow: "none",
}

FairyGates.overrideThemeStyles = () => ({
  "h1 a": noUnderline,
  "h2 a": noUnderline,
  "h3 a": noUnderline,
})

const typography = new Typography(FairyGates)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
