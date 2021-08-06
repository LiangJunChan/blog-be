# 博客系统后端

- 使用 [Koa][koa] 搭建

## 项目简介

博客系统后端
- 本项目用于前端工程师全栈之路学习后端,用于返回博客系统前端请求数据
- 需要搭配 [博客系统前端](https://github.com/LiangJunChan/blog-fe) 使用
- 另外本项目可与另一个实现同样功能基于 [基于egg的博客系统后端][be-egg] 进行比较使用
- 如果单纯想要搭建博客,最佳实践可参考[良菌的技术后花园](https://github.com/LiangJunChan/liangjunchan.github.io)

### 项目实现功能

- [x] 基础框架
- [x] md转html
- [x] 目录读取

### 环境

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

### 启动项目

```bash
yarn start
```
[koa]:https://koajs.com
[be-egg]: https://github.com/LiangJunChan/blog-be-egg