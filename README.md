# my-ui

## mySwitch
```
用this.$refs快速获取元素

this.$nexttick再次使用
```
## myInput
```
父组件v-model的数据传到子组件:
    1.子组件接受一个value，是父组件v-model绑定的值
    2.子组件通过this.$emit('input', 参数) 来改变value值 （因为是单向流所以不能直接在子组件里改）
    3.原因是：
        <!-- v-model等价于 -->
        <!-- <el-input :value="value" @input="username=e.target.value"></el-input> -->
```
## myDialog
```
用到了<transition :name="fade"></transition>
需在样式添加:
//两个特殊类
.fade-enter-active {
    transition:
}
.fade-leave-active {
    transition:
}
@keyframe run {//自定义动画函数

}
```
## myRadio & myRadioGroup
```
用到了子孙组件的传值
    provide(){},inject:{}

子组件中v-model绑定父组件传来的值
    computed中定义get和set方法
```
## myCheckbox & myCheckboxGroup
```
注意group中判断是否选中 本case中定义了isCheck计算属性判断
```