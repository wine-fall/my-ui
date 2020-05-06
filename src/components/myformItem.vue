<template>
    <div class="el-form-item">
        <label class="el-form-item__label" :style="{width:this.Form.labelWidth}">{{label}}</label>
        <div class="el-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'el-form-item',
    props:{
        label:{
            type:String,
            default:""
        }
    },
    inject: {
        Form:{
            default:""
        }
    }
}
</script>

<style lang="scss">
.el-form-item {
    margin-bottom: 25px;
    .el-form-item__label {
        text-align: center;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .el-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
    }
}
</style>