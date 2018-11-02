# cell

 ``` javascript
 <group>
    <cell title="title" value="value"></cell>
  </group>
 ```

> Cell 组件只能在Group中使用

#####属性
---
名字          | 类型            | 默认值     | 说明                                   | 版本要求
---           | ---             | ---       | ---                                    | ---
title         | String          |           | 左边标题文字                            | -- 
value         | String          |           | 右侧文字                                | --
border-intent | Boolean         |  true     | 是否显示边框与左边的间隙                  | --
isLink        | Boolean         |  false    | 是否为链接，如果是，右侧将会出现指引点击的右箭头    | --
link          | String, Object  |           | 点击链接，可以为http(s)协议，也可以是 vue-router 支持的地址形式或'BACK'  | --
value-align   | String          |  left     | 文字值对齐方式，可选值为 left right        | --