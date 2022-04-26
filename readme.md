## 纯原生 JS 手写图片懒加载

- 建议用 http-server 这种静态服务器访问

- 用服务器地址模拟比较真实,文件地址访问加载太快,看不到效果, 而且会重复加载,用服务器可以解决这种问题

- 测试效果步骤:

```sh
npm i -g http-server

cd lazyload

# 默认代码里写的是 8899
http-server -p8899
```
