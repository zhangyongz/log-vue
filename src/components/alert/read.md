# alert

 ``` javascript
  <alert v-model="show" title="title" content="content" @on-show="onShow" @on-hide="onHide"></alert>
 ```

该组件支持以plugin形式调用：

> 以插件形式调用时，和template中使用不同，属性名请使用小驼峰式，比如buttonText而不是button-text。

 ``` javascript
  import  { AlertPlugin } from 'log'
  Vue.use(AlertPlugin)
 ```

 ``` javascript
  // 显示
  this.$log.alert.show({
    title: 'Log is Cool',
    content: 'Do you agree?',
    onShow () {
      console.log('Plugin: I\'m showing')
    },
    onHide () {
      console.log('Plugin: I\'m hiding')
    }
  })

  // 隐藏
  this.$log.alert.hide()
 ```

#####属性
---
名字        | 类型    | 默认值 | 说明                            | 版本要求
------------|---------|--------|-------------------------------|-----
value       | Boolean | false  | 是否显示, 使用 v-model 绑定变量 | --
title       | String  |        | 弹窗标题                        | --
content     | String  |        | 提示内容                        | --
button-text | String  | 确定   | 按钮文字                        | --

#####事件
---
名字     | 参数 | 说明           | 版本要求
---------|------|--------------|-----
@on-show | ---  | 弹窗显示时触发 | ---
@on-hide | ---  | 弹窗关闭时触发 | ---