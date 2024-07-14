## uni-app

### 一、前期准备

#### 语言基础

1、vuejs
2、原生小程序

#### 开发准备

1、vscode
2、微信开发者工具
3、微信小程序 Appid

#### 项目资料

1、接口文档：https://www.apifox.cn/apidoc/shared-e3ac8d74-b009-45a6-bce4-b098c9766c25
2、项目原型：https://js.design/f/MHa85t?p=HZEEKv
3、微信 appid：wx1c01ba355d99c6af

### 二、文件目录解析

pages:：小程序其实是一个多页面的应用，小程序开发的页面都需要放到 pages 目录下
规范 ：该目录下会有页面的目录，每个目录存在四个文件
utils：存放开发过程中自己封装的代码文件
.eslintrc.js：eslint 代码检测
app.js：项目的入口文件，小程序是从该文件开始执行
app.json：小程序的配置文件（顶部的标题，背景，底部的 tabbar）
app.wxss： 小程序的全局样式文件
project.config.json：项目配置文件
