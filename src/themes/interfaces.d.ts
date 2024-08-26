import { ReactNode } from 'react';

interface IThemesProviderProps {
  /**
   * @zh 默认主题值
   * @en Default theme value
   */
  defaultValue?: string;
  /**
   * @zh 主题列表
   * @en Theme list
   */
  list?: string[]; // 可用主题列表
  /**
   * @zh 保存主题的 cookie 键名
   * @en Cookie key to save the theme
   */
  saveKey?: string;
  /**
   * @zh 保存主题的 cookie 过期时间，单位毫秒，默认 365 天
   * @en Cookie expiration time to save the theme, in milliseconds, default 365 days
   */
  saveExpired?: number;
  /**
   * @zh 子组件
   * @en Child component
   */
  children: ReactNode;
}

export default IThemesProviderProps;
