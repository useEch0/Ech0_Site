---
title: MetingAPI
description: 基于 Meting 创建的 APlayer API，通过传入链接参数输出音乐信息
---

[Meting API](https://github.com/injahow/meting-api) 是基于 [Meting](https://github.com/xizeyoupan/Meting-API) 创建的 APlayer API，通过传入链接参数输出音乐信息

Ech0 部署后内置了一个部署在 Vercel 上的 Meting API，你也可以在设置中设置其他的 Meting API 地址

## 公共实例

- https://meting.qjqq.cn

- https://api.injahow.cn/meting

- https://api.moeyao.cn/meting

- https://meting.jinghuashang.cn

- 笒鬼鬼-Meting-API: https://music.cenguigui.cn

**VIP 解析**

- https://api.obdo.cc/meting/

- 祈杰の Meting-API: https://api.qijieya.cn/meting

## 简易部署

使用 [xizeyoupan/Meting-API](https://github.com/xizeyoupan/Meting-API) 项目进行部署

### Docker 部署

运行下面的命令下载 Meting-API 镜像

```
docker pull intemd/meting-api:latest
```

然后运行 Meting-API 即可

```
docker run -d --name meting -p 3000:3000 intemd/meting-api:latest
```

使用国外服务器部署时，需要增加一个 OVERSEAS=1 的环境变量，设为 1 会启用 qq 音乐的 jsonp 返回，同时需要替换前端插件（插件看末尾），能实现国内访问国外 api 服务解析 qq 音乐。当部署到 vercel 上时，此选项自动设为 1。

### 部署到 vercel

1.模板一键部署：

[Deploy](https://vercel.com/import/project?template=https://github.com/xizeyoupan/Meting-API)

一直下一步即可

2.先 Fork 后部署

前往 [xizeyoupan/Meting-API](https://github.com/xizeyoupan/Meting-API) ，点击右上角的 Fork 按钮 Fork 此仓库的 main 分支

进入 Vercel 平台点击 Add New...>Project，添加刚才 Fork 过来的仓库

**添加自定义域名**

进入到项目的 Settings>Domains 自定义域名，添加自己的二级域名，如 meting-api.example.com

前往自己域名的 DNS 服务商，添加 Vercel 提供的 CNAME 解析

### 反向代理

使用用 nginx，让请求 `http://localhost:8099/meting` 的流量全部转发到 `http://localhost:3000` ，不能这么写：

```
   server {
      listen       8099;
      server_name  localhost;

      location /meting/ {
         proxy_pass http://localhost:3000/;
      }
   }
```

正确写法：

- nginx

  ```
  server {
     listen       8099;
     server_name  localhost;
  
     location /meting/ {
        proxy_pass http://localhost:3000/;
        proxy_set_header X-Forwarded-Host $scheme://$host:$server_port/meting;
     }
  }
  ```

  

- caddy

  ```
   http://localhost:8099 {
         handle_path /meting* {
                  reverse_proxy http://localhost:3000 {
                        header_up X-Forwarded-Host {scheme}://{host}:{port}/meting
                  }
         }
   }
  ```

### SSL 证书

在上面基础上改动即可。

- nginx

  ```
      server {
        listen       8099 ssl;
        server_name  localhost;
  
        ssl_certificate     ../server.crt;  # pem 文件的路径
        ssl_certificate_key  ../server.key; # key 文件的路径
        ssl_session_timeout 5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_prefer_server_ciphers on;
  
        location /meting/ {
            proxy_pass http://localhost:3000/;
            proxy_set_header X-Forwarded-Host $scheme://$host:$server_port/meting;
        }
      }
  ```

  

- caddy

  ```
   https://localhost:8099 {
      tls ./server.crt ./server.key
      handle_path /meting* {
         reverse_proxy http://localhost:3000 {
            header_up X-Forwarded-Host {scheme}://{host}:{port}/meting
         }
      }
   }
  ```