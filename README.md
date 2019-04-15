## 命令

``` bash
# 安装依赖
$ npm install

# 开发时构建
$ npm run dev

# 启动图片服务，请先将 http-server 安装到全局
$ cd cdn && http-server -p 88

# 打包构建
$ npm run build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
$ npm dev:wx
$ npm dev:swan
$ npm dev:tt
$ npm dev:my

# 指定平台的打包构建
$ npm build:wx
$ npm build:swan
$ npm build:tt
$ npm build:my
```

## 优化开发体验

#### 引入 mpvue-entry

```bash
# 安装
$ npm install --save-dev mpvue-entry@next
```

```js
// webpack.base.conf.js
const MpvueEntry = require('mpvue-entry')

module.exports = {
  entry: MpvueEntry.getEntry('src/app.json'),
  ...
  plugins: [
    new MpvueEntry(),
    ...
  ]
}
```

```json
// app.json - 支持 js 格式，兼容微信小程序官方配置规范
{
  "pages": [
    {
      "path": "pages/news/list",
      "config": {
        "navigationBarTitleText": "文章列表",
        "enablePullDownRefresh": true
      }
    }
  ],
  "window": {}
}
```

#### 使用 Sass

```bash
# 安装
$ npm install --save node-sass sass-loader
```

## 参考

- [mpVue](http://mpvue.com)
- [awesome-mpvue](https://github.com/mpvue/awesome-mpvue)
- [Flyio](https://wendux.github.io/dist/#/doc/flyio/readme)
- [mpvue-entry](https://github.com/F-loat/mpvue-entry)
- [mpvue中无缝接入Vant Weapp组件库](https://github.com/Rychou/mpvue-vant)
- [mini-program](https://github.com/zhaotoday/mini-program)
- [为什么有些组件名不可以使用](http://mpvue.com/qa/#_3)；
- mpVue 暂时不支持 wxs；
- [unionId 和 openId 的区别](https://mp.weixin.qq.com/s?__biz=NzA3OTQ2OTgw&mid=204189507&idx=1&sn=58fd3df3a8323f6b7bfb2680f222c293)
