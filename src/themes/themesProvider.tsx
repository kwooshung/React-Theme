import { FC, ReactNode } from 'react';
import { useThemes } from 'lomind-react';
import ThemesContext from './themesContext';
import { IThemesProviderProps } from './interfaces';

/**
 * @zh 组件：主题提供者
 * @en Component: Themes provider
 * @param {IThemesProviderProps} props 属性
 * @return {ReactNode} React节点
 */
const ThemesProvider: FC<IThemesProviderProps> = ({ def, list, children }: IThemesProviderProps): ReactNode => {
  const [value, name, { setTheme, addThemes, getValueTheme, getNameTheme, getAvailableThemes }] = useThemes(def, list);

  return (
    <ThemesContext.Provider
      value={{
        value,
        name,
        setTheme,
        addThemes,
        getValueTheme,
        getNameTheme,
        getAvailableThemes
      }}>
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
