<template>
  <div id="app">
      <div class="row">
        <g-button type="success">success</g-button>
        <g-button type="primary">primary</g-button>
        <g-button type="info">info</g-button>
        <g-button type="warning">warning</g-button>
        <g-button type="danger">danger</g-button>
        <g-button>default</g-button>
      </div>
      <div class="row">
        <g-button plain type="success">success</g-button>
        <g-button circle type="primary">primary</g-button>
        <g-button round type="info">info</g-button>
        <g-button type="warning">warning</g-button>
        <g-button type="danger">danger</g-button>
        <g-button>default</g-button>
      </div>
      <div class="row">
        <g-button @click="changeIcon" icon="el-icon-check" type="success">success</g-button>
        <g-button icon="el-icon-delete" type="primary">primary</g-button>
        <g-button icon="el-icon-edit" type="info">info</g-button>
        <g-button icon="el-icon-check" type="warning"></g-button>
        <g-button icon="el-icon-check" type="danger"></g-button>
        <g-button icon="el-icon-edit"></g-button>
      </div>
  </div>
</template>

<script>
export default{
    methods:{
        changeIcon(){
            console.log(1);
        }
    }
}
</script>

<style lang="scss">
.row{
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
    width: 600px;    
}
</style>
