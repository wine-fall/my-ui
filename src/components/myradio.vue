<template>
    <label class="el-radio" :class="{'is-checked':label===model}">
    <!-- 小圆 -->
    <span class="el-radio__input" >
      <span class="el-radio__inner" ></span>
      <!-- 注意input中radio类型的用法，v-model绑定的数据是与value绑定的数据相关联的 具体可参考vue官网 -->
      <input
        class="el-radio__original"
        type="radio"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <!-- 如果没有插槽，就显示label -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
    name:"el-radio",
    inject:{
        radioGroup:{
            default:""
        }
    },
    props:{
        label:{
            type:[String,Number,Boolean],
            default:""
        },
        name:{
            type:String,
            default:""
        },
        value:null
    },
    computed:{
        model:{
            get(){
                return this.isGroup? this.radioGroup.value : this.value
            },
            set(newVal){//点击哪个单选框，model就会变成该单选框的value值，也就是调用了set方法
                this.isGroup? this.radioGroup.$emit("input",newVal) : this.$emit("input",newVal)
            }
        },
        isGroup(){
            return !!this.radioGroup
        }
    }
}
</script>

<style lang="scss">
.el-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .el-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .el-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
    }
    
    .el-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .el-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.el-radio.is-checked{
    color: rgb(23, 125, 241);
    .el-radio__inner {
        border: 4px solid rgb(23, 125, 241);
        background-color: white;
    }
}

</style>