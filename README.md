# log-vue

> A developing mobile ui lib implement by Vue

##### install

``` javascript
  npm install log-vue --save
```

##### 后编译

1、修改 package.json 并安装依赖
``` javascript
  npm install --save-dev webpack-post-compile-plugin webpack-transform-modules-plugin less less-loader
```

``` javascript
  {
  // webpack-transform-modules-plugin 依赖 transformModules
  "transformModules": {
    "log-vue": {
      "transform": "log-vue/src/components/${member}"
    }
  }
}
```

2、修改 webpack.base.conf.js

``` javascript
  var PostCompilePlugin = require('webpack-post-compile-plugin')
  var TransformModulesPlugin = require('webpack-transform-modules-plugin')
  module.exports = {
    // ...
    plugins: [
      // ...
      new PostCompilePlugin(),
      new TransformModulesPlugin()
    ]
    // ...
  }
```

##### 使用

######全部引入

一般在入口文件中：

``` javascript
  import Vue from 'vue'
  import Log from 'log-vue'

  Vue.use(Log)
```

######按需引入

``` javascript
  import {
    Alert
  } from 'log-vue'
```

