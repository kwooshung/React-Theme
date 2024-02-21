<div align="center">

# @kwooshung/react-themes

## 超方便的主题管理组件，可自行设置主题颜色，可任意增加自定义主题，可自行设计模板，所有数据主题共享同一个状态，支持本地存储设置，可根据系统判断浅色调或暗色调。

[![GitHub License](https://img.shields.io/github/license/kwooshung/React-Themes?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/React-Themes?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/React-Themes?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/react-themes?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/react-themes)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/react-themes?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/react-themes)
[![Github CI/CD](https://github.com/kwooshung/React-Themes/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/React-Themes/actions/)
[![codecov](https://codecov.io/gh/kwooshung/React-Themes/graph/badge.svg?token=EI87ZaW6EC)](https://codecov.io/gh/kwooshung/React-Themes)
[![Maintainability](https://api.codeclimate.com/v1/badges/d40982a696f3df2e89b8/maintainability)](https://codeclimate.com/github/kwooshung/React-Themes/maintainability)
[![Gitee Repo](https://img.shields.io/badge/Gitee-React--Themes-165dff?logo=gitee)](https://gitee.com/kwooshung/React-Themes/)

<p align="center">
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

# 为什么开发它？

- 现如今的网站，要是没有个 **“更换主题”** 的功能，能叫现代化网站？最次也得有个 **“暗黑模式”** 吧？

# 解决了什么痛点？

- 每次开发一个网站，都要自己写一套主题管理，都非常麻烦；
- 为什么不用其他第三方组件？
  - 与其自家的UI组件库高度耦合；
  - 功能太过于复杂，不够轻量；
  - 轻量的组件库，功能相对过于简单；

# 为什么使用它？

- **无头**，没有样式，可自定义主题切换按钮或列表；
- 支持自定义主题颜色，默认支持 **'light'** 和 **'dark'** 两种主题；
- 使用方便，操作简单，**学习成本低**，灵活性高；
- 状态共享，所有数据主题共享同一个状态；
- **ES6** 的现代特性实现；
- **TypeScript** 编写，类型安全；
- 可按需引入，**esm** 模块化，天生支持 **树摇（tree-shaking）**，不用担心打包后的体积；
- 当然本项目也提供了 **commonjs** 规范的 **cjs** 版本；
- 测试覆盖率 **100%**；

# 在线演示

## [CodePen](https://codepen.io/kwooshung/pen/vYPwypM)

## [CodeSandbox](https://codesandbox.io/p/devbox/react-themes-tmdtrh?file=%2Fsrc%2Fmain.tsx%3A9%2C3)

# 安装

## npm

```bash
npm install @kwooshung/react-themes
```

## yarn

```bash
yarn add @kwooshung/react-themes
```

## pnpm

```bash
pnpm add @kwooshung/react-themes
```

# 使用方法

被 `ThemesProvider` 包裹的组件，都可以通过 `Themes` 获取到主题统一的状态。

## ThemesProvider

```tsx
import { ThemesProvider } from '@kwooshung/react-themes';
import Switch from './Switch';

/**
 * @zh 主题列表
 * @en Theme list
 */
const ThemeList = ['light', 'dark', 'blue', 'green'];

/**
 * @zh 全局布局
 * @en Global layout
 */
const Layout = () => {
  return (
    <ThemesProvider def='auto' list={ThemeList}>
      <OtherComponents />
      <Switch />
      <OtherComponents />
    </ThemesProvider>
  );
};

export default App;
```

## Themes

```tsx
import { IThemesContext, Themes } from '@kwooshung/react-themes';

const Demo = () => {
  const themes = (context: IThemesContext): ReactNode => {
    return (
      //在这里写你的主题切换按钮或列表，通过 `context` 可以获取到主题状态；
    );
  };

  return <Themes>{themes}</Themes>;
};

export default Switch;
```

# API

接口类型定义，也可阅览 **[interfaces.d.ts](./src/themes/interfaces.d.ts)** 源文件；

## IThemesProps

| 属性     | 类型                                          | 默认值 | 描述           |
| -------- | --------------------------------------------- | ------ | -------------- |
| children | (themeContext: `IThemesContext`) => ReactNode | -      | 子组件渲染函数 |

## IThemesProviderProps

| 属性 | 类型     | 默认值 | 描述                    |
| ---- | -------- | ------ | ----------------------- |
| def  | string   | `auto` | 默认主题值，默认 `auto` |
| list | string[] | -      | 主题列表                |

## IThemesContext

| 属性               | 类型                    | 默认值            | 描述                                                                                               |
| ------------------ | ----------------------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| value              | string                  | `auto`            | 当前主题值，默认 `auto`                                                                            |
| name               | string                  | `auto`            | 当前主题名，除了 `auto` 以外，和 `value` 一样，如果 `value = auto`，若系统是暗色调，则 `name=dark` |
| setTheme           | (theme: string) => void | -                 | 主题列表                                                                                           |
| addThemes          | (themes: string         | string[]) => void | 添加主题                                                                                           |
| getValueTheme      | () => string            | -                 | 获取当前主题值                                                                                     |
| getNameTheme       | () => string            | -                 | 获取当前主题名                                                                                     |
| getAvailableThemes | () => string[]          | -                 | 获取可用主题列表                                                                                   |
