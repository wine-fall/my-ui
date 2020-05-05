<template>
  <div id="app">
      <div class="row">
        <el-button type="success">success</el-button>
        <el-button type="primary" circle>primary</el-button>
        <el-button type="info" round>info</el-button>
        <el-button type="warning">warning</el-button>
        <el-button disabled type="danger">danger</el-button>
        <el-button icon="el-icon-edit" type="info" @click="visible=true">显示对话框</el-button>
        <el-button>default</el-button>
      </div>
      <div class="row">
          <el-dialog title="我还是标题" :visible.sync="visible" width="40%">
              <template v-slot:title>
                  <h3>标题3</h3>
              </template>
              <template v-slot:content>
                  父组件要用v-slot
              </template>
              <template v-slot:footer>
                  <el-button type="primary" @click="visible=false">确定</el-button>
                  <el-button @click="visible=false">取消</el-button>
              </template>
          </el-dialog>
      </div>
        <div class="row">
            <el-input type="text" placeholder="这是父组件的默认文本" v-model="username" clearable></el-input>
            <el-input placeholder="这是父组件的默认文本" password v-model="username"></el-input>
            <!-- v-model等价于 -->
            <!-- <el-input :value="value" @input="username=e.target.value"></el-input> -->
        </div>
        <div class="row">
            <el-switch v-model="toggle" active-color="green" inactive-color="red"></el-switch>
        </div>
  </div>

</template> 

<script>
export default{
    data(){
        return {
            visible:false,
            username:'zs',
            toggle:false
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
.el-button:first-child ~.el-button{
    margin-left: 15px;
}
</style>
