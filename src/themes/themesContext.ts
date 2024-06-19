import { createContext } from 'react';
import { IThemesContext } from './interfaces';

/**
 * @zh 主题上下文
 * @en Themes context
 */
const ThemesContext = createContext<IThemesContext>({
  value: 'auto',
  name: 'auto',
  setTheme: () => {},
  addThemes: () => {},
  getThemeValue: () => 'auto',
  getThemeName: () => 'auto',
  getThemesAvailable: () => ['light', 'dark']
});

export default ThemesContext;
