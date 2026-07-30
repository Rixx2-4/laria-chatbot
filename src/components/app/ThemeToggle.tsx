import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme = "pastel" | "dark-blue";

function getStoredTheme(): Theme {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("laria-theme");
    if (stored === "pastel" || stored === "dark-blue") return stored;
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark-blue";
  }
  return "pastel";
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("laria-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("pastel");

  useEffect(() => {
    const t = getStoredTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  function toggle() {
    const next = theme === "pastel" ? "dark-blue" : "pastel";
    setTheme(next);
    applyTheme(next);
  }

  return (
    <Button type="button" variant="ghost" size="sm" onClick={toggle} aria-label="Cambiar tema">
      {theme === "pastel" ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  );
}
