import { createContext } from 'react';
import { useThemes } from 'lomind-react';

/**
 * @zh 主题上下文
 * @en Themes context
 */
const ThemesContext = createContext<ReturnType<typeof useThemes> | undefined>(undefined);

export default ThemesContext;
