<template>
  <el-container>
    <div class="P_info">
      <div class="head">基本信息</div>
      <div class="username">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
      </el-form>
      </div>
      <div class="nickname">
      <el-form ref="form" :model="form" label-width="80px" >
        <el-form-item label="昵称">
          <el-input v-model="nickname"></el-input>
        </el-form-item>
      </el-form>
      </div>
      <div class="telphone">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="手机号">
          <el-input v-model="telephone"></el-input>
        </el-form-item>
      </el-form>
      </div>
      <div class="sex">
        <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="性别">
        <el-radio v-model="radio" label="1">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio>
      </el-form-item>
        </el-form>
      </div>
      <div class="container">
        <div class="block">
          生日
          &nbsp
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="submit">
      <el-button type="primary" plain>提交</el-button>
    </div>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "page1",
  data () {
    return {
      radio: '1',
      value1: '',
    };
  }
}
</script>

<style scoped>
.P_info{
  margin-left: 4cm;
  margin-right: 2cm;
  border-left-style: outset;
  border-right-style: inset;
}
.head{
  border-bottom-style: inset;
  line-height: 3cm;
  font-size: 15px;
  color: #736f66;
}
.username{
  margin-top: 1cm;
  line-height: 3cm;
  position: center;
  margin-left: 450px;
  margin-right: 500px;
}
.nickname{
  line-height: 3cm;
  position: center;
  margin-left: 450px;
  margin-right: 500px;
}
.telphone{
  line-height: 3cm;
  position:center;
  margin-left: 450px;
  margin-right: 500px;
}
.sex{
  line-height: 3cm;
  position:center;
  margin-left: 450px;
  margin-right: 500px;
}
.container{
  line-height: 1cm;
  position: center;
  font-size: 15px;
  color: #736f66;
}
.submit{

  line-height:3cm ;
}
</style>
