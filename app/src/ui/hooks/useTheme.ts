import { LocalStorage } from "../../helpers/LocalStorage";
export enum Theme {
  Dark = "dark",
  Light = "light",
}
export const DEFAULT_THEME = Theme.Dark;
export const THEMES: Theme[] = [Theme.Dark, Theme.Light];
export const THEME_PREFIX = "current-theme";

const THEME_NAMESPACE_KEY = "app-theme";
const THEME_KEY = "current-theme";
const REG_EXP = new RegExp(`${THEME_PREFIX}\\w+`);

export function useTheme() {
  const themeCache = new LocalStorage(THEME_NAMESPACE_KEY);

  function getClassNameFromTheme(theme: Theme) {
    return `${THEME_PREFIX}-${theme}`;
  }

  function getThemeFromClassName(className: string) {
    return className.split("-").at(-1);
  }

  function getTheme() {
    const currentTheme = document.body.className.match(REG_EXP)?.[0];
    const themeFromCache = themeCache.getItem(THEME_KEY);

    return getThemeFromClassName(
      currentTheme || themeFromCache || DEFAULT_THEME,
    );
  }

  function setTheme(theme: Theme) {
    if (!THEMES.includes(theme)) {
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

  function getThemeFromCache(): Theme | null {
    return themeCache.getItem(THEME_KEY) as Theme | null;
  }

  function restoreTheme() {
    const themeFromCache = getThemeFromCache();

    if (!themeFromCache || !THEMES.includes(themeFromCache)) {
      setTheme(DEFAULT_THEME);
      return;
    }

    setTheme(themeFromCache);
  }

  return { getTheme, setTheme, restoreTheme };
}
