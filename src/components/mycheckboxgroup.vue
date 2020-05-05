<template>
  <div class="el-checkbox-group">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"el-checkbox-group",
    props:{
        value:{
            type:Array,
            default:[]
        }
    },
    provide(){
        return {
            checkGroup:this
        }
    }
}
</script>

<style>

</style>