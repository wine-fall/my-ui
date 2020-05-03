<template>
  <div id="app">
      <div class="row">
        <el-button type="success">success</el-button>
        <el-button type="primary">primary</el-button>
        <el-button type="info">info</el-button>
        <el-button type="warning">warning</el-button>
        <el-button disabled type="danger">danger</el-button>
        <el-button>default</el-button>
      </div>
      <div class="row">
        <el-button plain type="success">success</el-button>
        <el-button circle type="primary">primary</el-button>
        <el-button round type="info">info</el-button>
        <el-button type="warning">warning</el-button>
        <el-button type="danger">danger</el-button>
        <el-button>default</el-button>
      </div>
      <div class="row">
        <el-button @click="changeIcon" icon="el-icon-check" type="success">success</el-button>
        <el-button icon="el-icon-delete" type="primary">primary</el-button>
        <el-button icon="el-icon-edit" type="info">info</el-button>
        <el-button icon="el-icon-check" type="warning"></el-button>
        <el-button icon="el-icon-check" type="danger"></el-button>
        <el-button icon="el-icon-edit" @click="visible=true">显示对话框</el-button>
      </div>
      <div class="row">
          <el-dialog title="我还是标题" :visible.sync="visible" width="40%">
              <template v-slot:title>
                  <h3>标题3</h3>
              </template>
              <template v-slot:content>
                  拉拉
              </template>
              <template v-slot:footer>
                  <el-button type="primary" @click="visible=false">确定</el-button>
                  <el-button @click="visible=false">取消</el-button>
              </template>
          </el-dialog>
      </div>
  </div>

</template> 

<script>
export default{
    data(){
        return {
            visible:false
        }
    },
    methods:{
        changeIcon(){
            console.log(1);
        }
    }
}
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
    width: 600px;    
}
</style>
