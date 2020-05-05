<template>
  <div class="el-input" :class="{'el-input--suffix':showIcon}">
        <input class="el-input__inner" :class="{'is-disabled':disabled}"
        :type="password?(showPassword?'text':'password'):type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        @input="handleVal"
        >
        <span class="el-input__suffix" v-if="showIcon">
            <i class="el-icon-circle-close" v-if="clearable && value" @click="clear"></i>
            <i class="el-icon-view" v-if="password" @click="isShowPwd"></i>
        </span>
  </div>
</template>

<script>
export default {
    name:"el-input",
    data() {
        return {
            showPassword:true
        }
    },
    props:{
        type:{
            type:String,
            default:'text'
        },
        placeholder:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value:{
            type:String,
            default:''
        },
        clearable:{
            type:Boolean,
            default:false
        },
        password:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        showIcon(){
            return this.clearable||this.password
        }
    },
    methods:{
        handleVal(e){
            this.$emit('input',e.target.value)
        },
        clear(){
            this.$emit('input','')
        },
        isShowPwd(){
            this.showPassword=!this.showPassword
        }
    }
}
</script>

<style lang="scss" scoped>
.el-input {
  width: 240px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .el-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

}

.el-input--suffix {
  .el-input__inner {
    padding-right: 30px;
  }
  .el-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
        //   cubic-bezier是做动画效果的，可以控制慢进慢出 https://cubic-bezier.com/
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
  }
}
</style>