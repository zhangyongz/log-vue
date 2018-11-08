# loading

 ``` javascript
 <loading v-model="show" text="加载中"></loading>
 ```

 该组件支持以plugin形式调用：

``` javascript
 import  { LoadingPlugin } from 'log'
  Vue.use(LoadingPlugin)
 ```

 ``` javascript
  // 显示
  this.$log.loading.show({
    text: 'Loading'
  })

  // 隐藏
  this.$log.loading.hide()
 ```


#####属性
---
名字 | 类型    | 默认值 | 说明                            | 版本要求
-----|---------|--------|-------------------------------|-----
show | Boolean | false  | 是否显示, 使用 v-model 绑定变量 | --
text | String  |        | 提示文字                        | --