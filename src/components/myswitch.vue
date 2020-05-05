<template>
  <div class="el-switch" :class="{'is-checked':value}">
    <span class="el-switch__core" @click="handleVal"  ref="toggle" >
      <span class="el-switch__button" ></span>
    </span>
    <input class="el-switch__input" type="checkbox" :name="name" ref="input">
  </div>
</template>

<script>
export default {
    name:"el-switch",
    props:{
        value:{
            type:Boolean,
            default:false
        },
        activeColor:{
            type:String,
            default:""
        },
        inactiveColor:{
            type:String,
            default:""
        },
        name:{
            type:String,
            default:""
        }
    },
    methods:{
        handleVal(){
            this.$emit('input',!this.value)
            this.$nextTick(()=>{
                this.setColor()
            })
        },
        setColor(){
            if (this.activeColor||this.inactiveColor){
                let color=this.value?this.activeColor:this.inactiveColor
                this.$refs.toggle.style.borderColor=color
                this.$refs.toggle.style.backgroundColor=color
            }
            
            this.$refs.input.checked=this.value
            console.log(this.$refs.input.getAttribute);

        }
    },
    mounted(){
        this.setColor()
    }
}
</script>

<style lang="scss">
.el-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .el-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .el-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .el-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.el-switch.is-checked {
  .el-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .el-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>