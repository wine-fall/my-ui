<template>
    <div class="el-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'el-form',
    props:{
        model:{
            type:Object,
            required:true
        },
        labelWidth:{
            type:String
        }
    },
    provide(){
        return {
            Form:this
        }
    }
}
</script>

<style>

</style>