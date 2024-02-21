import { FC, memo, ReactNode, useContext } from 'react';
import ThemesContext from './themesContext';
import { IThemesProps } from './interfaces';

/**
 * @zh 组件：主题
 * @en Component: Themes
 */
const Themes: FC<IThemesProps> = ({ children }: IThemesProps): ReactNode => {
  const context = useContext(ThemesContext);
  return children(context);
};

export default memo(Themes);
