import React, { FC, ReactNode, useEffect } from 'react';
import { useThemes } from 'lomind-react';
import ThemesContext from './themesContext';
import { IThemesProviderProps } from './interfaces';

/**
 * @zh 设置Cookie
 * @en Set cookie
 * @param {string} name 名称
 * @param {string} value 值
 * @param {number} seconds 有效期（秒）
 */
const setCookie = (name: string, value: string, seconds: number) => {
  const date = new Date();
  date.setTime(date.getTime() + seconds * 1000); // 设置有效期，按秒计算
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

/**
 * @zh 组件：主题提供者
 * @en Component: Themes provider
 * @param {IThemesProviderProps} props 属性
 * @return {ReactNode} React节点
 */
const ThemesProvider: FC<IThemesProviderProps> = ({ def, list, saveKey, saveExpired, children }: IThemesProviderProps): ReactNode => {
  const [value, name, { setTheme, addThemes, getThemeValue, getThemeName, getThemesAvailable }] = useThemes(def, list, (value: string, name: string) => {
    saveKey && setCookie(saveKey, name, saveExpired || 365 * 24 * 60 * 60);
  });

  return (
    <ThemesContext.Provider
      value={{
        value,
        name,
        setTheme,
        addThemes,
        getThemeValue,
        getThemeName,
        getThemesAvailable
      }}
    >
      {children}
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
