import { FC, ReactNode } from 'react';
import { useBool, useThemes } from 'lomind-react';
import { useNoSSR } from '@kwooshung/react-no-ssr';
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

  const [isSSR, { setFalse: setSSR }] = useBool(true);

  useNoSSR(setSSR);

  return isSSR ? (
    children
  ) : (
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
