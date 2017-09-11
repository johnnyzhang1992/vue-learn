# vue-learn

> 对vueJs的学习实例以及笔记

# Vue 实例

##构造器

每个 Vue.js 应用都是通过构造函数 Vue 创建一个 Vue 的根实例 启动的：
```
var vm = new Vue({
  // 选项
})
```
## 属性和方法

每个 Vue 实例都会代理其 ```data``` 对象里所有的属性：
```
var data = { a: 1 }
var vm = new Vue({
  data: data
})
vm.a === data.a // -> true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // -> 2
// ... 反之亦然
data.a = 3
vm.a // -> 3
```
除了 data 属性， Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，
以便与代理的 data 属性区分。例如：
```
var data = { a: 1 }
var vm = new Vue({
  el: '#example',
  data: data
})
vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
  // 这个回调将在 `vm.a`  改变后调用
})
```
## 实例生命周期

每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如，
实例需要配置数据观测(data observer)、编译模版、挂载实例到 DOM ，
然后在数据变化时更新 DOM 。在这个过程中，实例也会调用一些 生命周期钩子 ，
这就给我们提供了执行自定义逻辑的机会。例如，created 这个钩子在实例被创建之后被调用：
```
var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"
```
也有一些其它的钩子，在实例生命周期的不同阶段调用，如 mounted、 updated 、destroyed 

# 模板语法

> vm(ViewModel的简称)
    
    console.log('this is a code pra')
    