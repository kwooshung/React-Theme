import { useContext } from 'react';
import ThemesContext from './themesContext';

/**
 * @zh 主题上下文 hook，必须在 ThemesProvider 中使用；与 lomind-react 的 useThemes 一致；只不过当您使用 ThemesProvider 的时候，更推荐使用 useThemesContext 获取上下文，而不是 useThemes
 * @en Theme context hook, must be used in ThemesProvider; Consistent with useThemes in lomind-react; However, when you use ThemesProvider, it is more recommended to use useThemesContext to get the context, rather than useThemes
 */
const useThemesContext = () => {
  const context = useContext(ThemesContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemesProvider');
  }
  return context;
};

export default useThemesContext;
