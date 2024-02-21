<div align="center">

# @kwooshung/react-themes

> A super convenient theme management component, you can set the theme color by yourself, add custom themes at will, and design templates by yourself. All data themes share the same state, support local storage settings, and can determine light or dark colors according to the system.

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
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

# Why Develop It?

- In today's world, can a website be called modern without a **`Change Theme`** feature? At the very least, it should have a **`Dark Mode`**, right?

# What Pain Points Does It Solve?

- Every time a website is developed, there's the hassle of writing a theme management system from scratch;
- Why not use other third-party components?
  - They are often highly integrated with their own UI component libraries;
  - The functionality is too complex and not lightweight enough;
  - The lightweight component libraries, on the other hand, tend to be overly simplistic in features;

# Why Use It?

- **Headless**, no predefined styles, allows customizing the theme switch button or list;
- Supports custom theme colors, with default support for **'light'** and **'dark'** themes;
- Easy to use, simple operation, **low learning curve**, and high flexibility;
- Shared state, all data themes share the same status;
- Implemented with modern **ES6** features;
- Written in **TypeScript** for type safety;
- Modular **esm** import on demand, naturally supports **tree-shaking**, no worries about the size after packaging;
- Of course, this project also offers a **commonjs (cjs)** version;
- **100%** test coverage;

# Demo

- [CodePen](https://codepen.io/kwooshung/pen/vYPwypM)
- [CodeSandbox](https://codesandbox.io/p/devbox/react-themes-tmdtrh?file=%2Fsrc%2Fmain.tsx%3A9%2C3)

# Installation

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

# Usage

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
      // Write your theme switching button or list here, and you can get the theme status through `context`;
    );
  };

  return <Themes>{themes}</Themes>;
};

export default Switch;
```

# API

For interface type definition, you can also read the **[interfaces.d.ts](./src/themes/interfaces.d.ts)** source file;

## IThemesProps

| Properties | Type                                          | Default Value | Description                     |
| ---------- | --------------------------------------------- | ------------- | ------------------------------- |
| children   | (themeContext: `IThemesContext`) => ReactNode | -             | Subcomponent rendering function |

## IThemesProviderProps

| Properties | Type     | Default Value | Description                         |
| ---------- | -------- | ------------- | ----------------------------------- |
| def        | string   | `auto`        | Default theme value, default `auto` |
| list       | string[] | -             | Topic list                          |

## IThemesContext

| Properties         | Type                    | Default Value     | Description                                                                                                               |
| ------------------ | ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| value              | string                  | `auto`            | Current theme value, default `auto`                                                                                       |
| name               | string                  | `auto`            | The current theme name, except `auto`, is the same as `value`. If `value = auto`, if the system is dark, then `name=dark` |
| setTheme           | (theme: string) => void | -                 | Topic list                                                                                                                |
| addThemes          | (themes: string         | string[]) => void | Add topic                                                                                                                 |
| getValueTheme      | () => string            | -                 | Get the current topic value                                                                                               |
| getNameTheme       | () => string            | -                 | Get the current topic name                                                                                                |
| getAvailableThemes | () => string[]          | -                 | Get a list of available themes                                                                                            |
