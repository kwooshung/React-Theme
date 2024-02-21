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
  getValueTheme: () => 'auto',
  getNameTheme: () => 'auto',
  getAvailableThemes: () => ['light', 'dark']
});

export default ThemesContext;
