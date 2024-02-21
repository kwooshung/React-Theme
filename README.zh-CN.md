<div align="center">

# @kwooshung/react-themes

更方便的使用svg作为React图标，可操作性强，自由度高。

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

- 所以我觉得，把图标使用组件直接引入到自己的项目中，是最适合我的方式。
- 因为现在的 **react网站**，都是只有首次加载时，才加载整页，路由切换时，也不会触发整页加载，一次性写到全局解构中，也不会有性能问题（毕竟，[IconFont](https://www.iconfont.cn/) 脚本的动态创建也是这样的流程）。

# 解决了什么痛点？

- 为什么不直接引入，自动生成图标？
  - 因为我不喜欢这种引入方式，而且组件化功能不够强大灵活；
- 为什么不直接使用 [IconFont](https://www.iconfont.cn/) 引入 **script**？
  - 我挺喜欢这种方式，但是每次还都要到官网管理图标很麻烦；
  - 没有合适的图标，自己上传也很麻烦，特别审核机制很严格；比如我为了支持国际化，我需要上传中国国旗图标，但是审核机制不允许；
  - 之前发生过，[IconFont](https://www.iconfont.cn/) 官网突然公告说要关闭cdn服务，虽然已生成的图标链接不受影响，但是修改图标库就不行了，得自己下载。后来过了段时间又开放了，这种不稳定性很让人担心；
- 标签，**svg** 结构，完全的控制权；
- 支持 **prefix** 前缀，方便管理；

# 为什么使用它？

- 支持自定义svg图标，你可以使用任何你喜欢的图标；
- 支持自定义加载条的样式，比如颜色、尺寸、旋转方向和旋转动画；
- 支持中英文双语注释；
- 学习成本低，使用简单且灵活；
- **ES6** 的现代特性实现；
- **TypeScript** 编写，类型安全；
- 可按需引入，**esm** 模块化，天生支持 **树摇（tree-shaking）**，不用担心打包后的体积；
- 当然本项目也提供了 **commonjs** 规范的 **cjs** 版本；
- 测试覆盖率 **100%**；

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