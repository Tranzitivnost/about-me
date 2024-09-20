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

  function getClassNameFromTheme(theme) {
    return `${THEME_PREFIX}-${theme}`;
  }

  function getThemeFromClassName(className) {
    return className.split("-").at(-1);
  }

  function getTheme() {
    const currentTheme = document.body.className.match(REG_EXP)?.[0];
    const themeFromCache = themeCache.getItem(THEME_KEY);

    return getThemeFromClassName(
      currentTheme || themeFromCache || DEFAULT_THEME,
    );
  }

  function setTheme(theme) {
    if (!THEMES.includes(theme)) {
      throw new Error(`Theme ${theme} is not supported`);
    }

    if (theme === getTheme()) {
      return;
    }

    const themeClassName = getClassNameFromTheme(theme);
    const themeClassNames = THEMES.map(getClassNameFromTheme);

    for (const className of themeClassNames) {
      document.body.classList.remove(className);
    }

    document.body.classList.add(themeClassName);

    themeCache.setItem(THEME_KEY, theme);
  }

  function getThemeFromCache() {
    return themeCache.getItem(THEME_KEY);
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
