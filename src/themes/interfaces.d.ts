import { ReactNode } from 'react';

/**
 * @zh 主题上下文
 * @en Themes context
 */
export interface IThemesContext {
  /**
   * @zh 当前主题值，默认 'auto'
   * @en Current theme value, default 'auto'
   */
  value: string;
  /**
   * @zh 当前主题名，默认 'auto'
   * @en Current theme name, default 'auto'
   */
  name: string;
  /**
   * @zh 主题列表
   * @en Theme list
   * @param {string} theme 主题名
   * @returns 无返回值
   */
  setTheme: (theme: string) => void;
  /**
   * @zh 添加主题
   * @en Add themes
   * @param {string | string[]} themes 主题名或主题名列表
   * @returns 无返回值
   */
  addThemes: (themes: string | string[]) => void;
  /**
   * @zh 获取当前主题值
   * @en Get the current theme value
   * @returns 当前主题值
   */
  getThemeValue: () => string;
  /**
   * @zh 获取当前主题名
   * @en Get the current theme name
   * @returns 当前主题名
   */
  getThemeName: () => string;
  /**
   * @zh 获取可用主题列表
   * @en Get available theme list
   * @return {string[]} 主题名列表
   */
  getThemesAvailable: () => string[];
}

/**
 * @zh 主题提供者Props属性
 * @en Theme provider props
 */
export interface IThemesProviderProps {
  /**
   * @zh 主题默认值，默认 'auto'
   * @en Default theme value, default 'auto'
   */
  def: string;
  /**
   * @zh 主题列表
   * @en Theme list
   */
  list?: string[];
  /**
   * @zh cookie 保存的 key，不填写则不保存；注意存储的是主题名，而不是主题值；
   * @en Cookie save key，if not set, it will not save; note that the stored is the theme name, not the theme value;
   */
  saveKey?: string;
  /**
   * @zh cookie 保存的过期时间，单位秒，默认 365 天
   * @en Cookie save expired time，unit second，default 365 days
   */
  saveExpired?: number;
  /**
   * @zh 子元素
   * @en Sub element
   */
  children: ReactNode;
}

/**
 * @zh 主题组件 Props属性
 * @en Theme component props
 */
export interface IThemesProps {
  /**
   * @zh 子组件渲染函数
   * @en Children render function
   * @param {IThemesContext} themeContext 主题上下文
   * @return {ReactNode} React节点
   */
  children: (themeContext: IThemesContext) => ReactNode;
}
