# marked-editor

## 简介

这是一款基于Vue打造的Markdown编辑器插件；该款编辑器涵盖了markdown编辑器的常用功能，并且支持可配置；

## 安装与使用

### 安装

```bash
 npm i marked-editor

 //or

 yarn add marked-editor
```

### 使用

安装后，首先，在项目中引入marked-editor插件；

```js
import Vue from 'vue';
import markedEditor from 'marked-editor';

Vue.use(markedEditor);
...

```

然后，在页面中使用：

```html

<template>
    <div>
        <marked-editor></marked-editor>
    </div>
</template>

```

## 功能列表

+ 插入文本
  - [x] 标题
  - [x] 粗体
  - [x] 入斜体
  - [x] 删除线
  - [x] 引用
  - [x] 无序列表
  - [x] 有序列表
  - [x] 完成列表
  - [x] 未完成列表
  - [x] 代码块
  - [x] 图片
  - [x] 链接
  - [x] 表格
- 视图切换
  - [x] 切换预览
  - [x] 切换全屏
  - [x] 目录切换 
- 快捷键
  - [x] ctrl+s 保存
  - [x] tab 制表符
- 其他功能
  - [x] 导入markdown文档
  - [x] 导出当前文档 

## 更新说明

> 后续功能持续开发中。。。

+ v1.0.1
  + 增加目录点击，视图滑动到相应位置

+ v1.0.0
  + 增加对markdown文档的导入和导出
  + 增加文档目录以及显示隐藏
  + 增加文档的同时滚动
  + 优化样式

+ v0.1.2
  + 引入iconfont，移除font Awesome
  + 优化视图切换功能

+ v0.1.1
  + 增加工具栏的配置
  + 增加视图的切换
  + 增加行号的显示
  + 增加GitHub预览样式
