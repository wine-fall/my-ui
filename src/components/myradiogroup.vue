<template>
    <div class="el-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"el-radio-group",
    props:{
        value:null
    },
    provide(){
        return {
            radioGroup:this
        }
    }
}
</script>

<style>

</style>