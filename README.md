<div align="center">

# @kwooshung/react-themes

It is more convenient to use svg as React icon, which has strong operability and high degree of freedom.

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

- So, I think directly importing icons as components into my project is the most suitable way for me.
- Because current **React websites** only load the entire page during the initial load. During route switching, there's no whole page reload, and writing them once in the global structure won't pose any performance issues (after all, the dynamic creation process of [IconFont](https://www.iconfont.cn/) scripts works the same way).

# What Pain Points Does It Solve?

- Why not directly import SVGs and auto-generate icons?
  - Because I don't like this way of importing, and the componentization functionality is not strong or flexible enough.
- Why not directly use [IconFont](https://www.iconfont.cn/) to import **script**?
  - I quite like this method, but it’s troublesome to manage icons on the official website every time;
  - It's also bothersome to upload my own icons, especially since the review mechanism is very strict; for example, I wanted to upload a Chinese flag icon to support internationalization, but the review system didn't allow it;
  - There was an incident where [IconFont](https://www.iconfont.cn/) suddenly announced they would close their CDN service. Although the existing icon links were not affected, modifying the icon library became impossible, and I had to download them myself. Later on, they reopened the service, but such instability is worrying;
- Full control over tags and SVG structure;
- Supports **prefix** for easy management;

# Why Use It?

- Supports custom SVG icons, allowing you to use any icons you like;
- Supports customization of the loading bar's style, such as color, size, rotation direction, and animation;
- Supports bilingual annotations in both English and Chinese;
- Low learning curve, simple and flexible usage;
- Implemented using modern features of **ES6**;
- Written in **TypeScript** for type safety;
- Supports modular import on demand with `esm`, natively supporting **tree-shaking**, so there's no need to worry about the package size post-compilation;
- This project also provides a `commonjs` (`cjs`) version;
- Test coverage **100%**;

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

