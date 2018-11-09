# toast

 ``` javascript
  <toast v-model="show" text="toast" :time="3000"></toast>
 ```

该组件支持以plugin形式调用：

``` javascript
  import  { ToastPlugin } from 'vux'
  Vue.use(ToastPlugin)
 ```

 ``` javascript
  // 显示
  this.$log.toast.text('Loading')

  this.$log.toast.show({
    text: 'Loading'
  })

  // 隐藏
  this.$log.toast.hide()
 ```


#####属性
---
名字  | 类型    | 默认值 | 说明                            | 版本要求
------|---------|--------|-------------------------------|-----
value | Boolean | false  | 是否显示, 使用 v-model 绑定变量 | --
time  | Number  | 2000   | 显示时间                        | --
text  | String  |        | 提示内容，支持 html              | --
