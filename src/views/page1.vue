<template>
  <el-container>
    <div class="P_info">
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
          生日：
          &nbsp&nbsp&nbsp
          <span class="demonstration">年</span>
          <el-date-picker
            v-model="value1"
            type="year"
            placeholder="选择年">
          </el-date-picker>
          &nbsp&nbsp&nbsp
          <span class="demonstration">月</span>
          <el-date-picker
            v-model="value2"
            type="month"
            placeholder="选择月">
          </el-date-picker>
          &nbsp&nbsp&nbsp
          <span class="demonstration">日</span>
          <el-date-picker
            v-model="value3"
            type="day"
            placeholder="选择日">
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
      radio: '1'
    };
  }
}
</script>

<style scoped>
.username{
  position: center;
  margin-left: 600px;
  margin-right: 500px;
}
.nickname{
  position: center;
  margin-left: 600px;
  margin-right: 500px;
}
.telphone{
  position:center;
  margin-left: 600px;
  margin-right: 500px;
}
.sex{
  position:center;
  margin-left: 600px;
  margin-right: 500px;
}
.container{
  position: center;
  margin-left: 100px;
  font-size: 15px;
  color: #736f66;
}
.submit{

  margin-left: 200px;
  line-height:3cm ;
}
</style>
