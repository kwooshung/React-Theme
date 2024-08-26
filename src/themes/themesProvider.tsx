import { useEffect } from 'react';
import { datas } from 'lomind';
import { useThemes } from 'lomind-react';
import ThemesContext from './themesContext';
import IThemesProviderProps from './interfaces';

/**
 * @zh 主题提供者
 * @en Theme provider
 */
const ThemesProvider: React.FC<IThemesProviderProps> = ({ defaultValue = 'auto', list = ['light', 'dark'], saveKey, saveExpired = 365 * 24 * 60 * 60 * 1000, children }) => {
  const theme = useThemes(defaultValue, list);

  useEffect(() => {
    saveKey && datas.Cookie.set(saveKey, theme.themeValue, saveExpired);
  }, [theme.themeValue, saveKey, saveExpired]);

  return <ThemesContext.Provider value={theme}>{children}</ThemesContext.Provider>;
};

export default ThemesProvider;
