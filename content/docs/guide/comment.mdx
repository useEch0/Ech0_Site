---
title: 评论
description: Twikoo 等评论服务的支持
---

目前 Ech0 仅支持 Twikoo 一种评论系统，未来或将支持 Arktalk 等其他评论系统

## 启用

在 Ech0 设置中编辑评论设置

将启用评论按钮打开，评论服务已默认设置为 Twikoo

在 评论 API 的输入框中输入 Twikoo 链接，如：http(s)://twikoo.example.com

## Twikoo 部署

此处参考 [Twikoo 文档](https://twikoo.js.org/)

### Vercel 部署

> 注意
>
> Vercel 部署的环境需配合 1.4.0 以上版本的 twikoo.js 使用
>
> 默认域名 `*.vercel.app` 在中国大陆访问速度较慢甚至无法访问，绑定自己的域名可以提高访问速度

1.申请 [MongoDB Atlas](https://twikoo.js.org/mongodb-atlas.html) 账号，获取 MongoDB 连接字符串

2.申请 [Vercel](https://vercel.com/signup) 账号

3.点击以下按钮将 Twikoo 一键部署到 Vercel

[Deploy](https://vercel.com/import/project?template=https://github.com/twikoojs/twikoo/tree/main/src/server/vercel-min)

4.进入 Settings - Environment Variables，添加环境变量 `MONGODB_URI`，值为前面记录的数据库连接字符串

5.进入 Settings - Deployment Protection，设置 Vercel Authentication 为 Disabled，并 Save

6.进入 Deployments , 然后在任意一项后面点击更多（三个点） , 然后点击 Redeploy , 最后点击下面的 Redeploy

7.进入 Overview，点击 Domains 下方的链接，如果环境配置正确，可以看到“Twikoo 云函数运行正常”的提示

8.Vercel Domains（包含 `https://` 前缀，例如 `https://xxx.vercel.app`）即为您的环境 id

### Hugging Face 部署

> 注意
>
> Hugging Face 部署的环境，由于默认的邮件端口被屏蔽，无法使用邮件功能。详见 [twikoo/issues/638](https://github.com/twikoojs/twikoo/issues/638)

1.申请 [MongoDB Atlas](https://twikoo.js.org/mongodb-atlas.html) 账号，获取 MongoDB 连接字符串

2.申请 [Hugging Face](https://huggingface.co/join) 账号

3.登录，点击 Spaces - Create new Space

4.输入 Space name，Select the Space SDK 选择 Docker，Choose a Docker template 选择 Blank，Space hardware 选择 FREE，选择 Public，点击 Create Space

5.进入刚刚创建的 Space，点击页面上方的 Settings，滚动到 Variables and secrets 部分，点击 New secret，Name 输入 `MONGODB_URI`，Value 输入前面记录的数据库连接字符串，点击 Save

6.点击页面上方的 Files - Add file - Create a new file

7.在 Name your file 中输入 `Dockerfile`，在 Edit 区域输入以下内容

```
FROM imaegoo/twikoo
ENV TWIKOO_PORT 7860
EXPOSE 7860
```

8.点击 Commit new file to main

9.点击右上角 Settings 右方的菜单（三个点）图标 - Embed this Space，Direct URL 下的内容（例如 `https://xxx-xxx.hf.space`）即为环境 id

### Docker 部署

> 注意
>
> 私有部署的环境需配合 1.6.0 或以上版本的 twikoo.js 使用

**Docker**

```
docker run --name twikoo -e TWIKOO_THROTTLE=1000 -p 8080:8080 -v ${PWD}/data:/app/data -d imaegoo/twikoo
```

**Docker Compose**

```
version: '3'
services:
  twikoo:
    image: imaegoo/twikoo
    container_name: twikoo
    restart: unless-stopped
    ports:
      - 8080:8080
    environment:
      TWIKOO_THROTTLE: 1000
    volumes:
      - ./data:/app/data
```