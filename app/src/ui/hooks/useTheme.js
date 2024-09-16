import { useLayoutEffect } from "react";
import { LocalStorage } from "../../helpers/LocalStorage";

export const DEFAULT_THEME = "dark";
export const THEMES = ["light", "dark"];
export const THEME_PREFIX = "current-theme";

const THEME_NAMESPACE_KEY = "app-theme";
const THEME_KEY = "current-theme";
const REG_EXP = new RegExp(`${THEME_PREFIX}\\w+`);

export function useTheme() {
  const themeCache = new LocalStorage(THEME_NAMESPACE_KEY);

  function constructThemeName(theme) {
    return `${THEME_PREFIX}-${theme}`;
  }

  function getTheme() {
    const currentTheme = document.body.className.match(REG_EXP)?.[0];
    const themeFromCache = themeCache.getItem(THEME_KEY);

    return currentTheme || themeFromCache;
  }

  function setTheme(theme) {
    if (!THEMES.includes(theme.split("-").at(-1))) {
      throw new Error(`Theme ${theme} is not supported`);
    }

    const newTheme = constructThemeName(theme);

    if (document.body.className.includes(newTheme)) {
      document.body.className = document.body.className.replace(
        REG_EXP,
        newTheme,
      );
    } else {
      document.body.className = document.body.className
        .concat(` ${newTheme}`)
        .trim();
    }

    themeCache.setItem(THEME_KEY, newTheme);
  }

  function getThemeFromCache() {
    return themeCache.getItem(THEME_KEY).split("-").at(-1);
  }

  function restoreTheme() {
    const currentTheme = getTheme();

    if (!currentTheme) {
      setTheme(DEFAULT_THEME);
      return;
    }

    setTheme(getThemeFromCache());
  }

  return { getTheme, setTheme, restoreTheme };
}
