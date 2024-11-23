import "@/styles/globals.css";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/shared/theme/toggle";

const LIGHT_THEME_LOGO_PATH = "/favicons/favicon.png";
const DARK_THEME_LOGO_PATH = "/favicons/favicon-light.png";

export default function App() {
  const { theme } = useTheme();

  return (
    // This should be the only container with hard coded width and height
    <div className="flex flex-col items-center justify-center w-[400px] h-[400px] space-y-5">
      <img
        src={theme === "dark" ? DARK_THEME_LOGO_PATH : LIGHT_THEME_LOGO_PATH}
        alt="Logo"
        className="logo"
      />
      <div className="flex flex-col justify-center items-center space-y-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
