<template>
  <div class="R_address">
    <div class="head">收货地址</div>
    <div class="person">
    <el-form ref="person" :model="form" label-width="80px">
      <el-form-item label="收货人">
        <el-input v-model="name"></el-input>
      </el-form-item>
    </el-form>
    </div>
    <div class="telphone">
    <el-form ref="telphone" :model="form" label-width="80px">
      <el-form-item label="手机号">
        <el-input v-model="telephone"></el-input>
      </el-form-item>
    </el-form>
    </div>
      <div class="address">
        收货地址
        &nbsp&nbsp&nbsp
    <el-select v-model="address" multiple placeholder="所在省份">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select
      v-model="value2"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="所在市区">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select
      v-model="value3"
      multiple
      collapse-tags
      style="margin-left: 20px;"
      placeholder="所在县区">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
      </div>
    <div class="address_detail">
    <el-input
      type="textarea"
      :rows="3"
      placeholder="请输入所在地区或街道/门牌号等详细地址"
      v-model="textarea">
    </el-input>
    </div>
    <div class="add">
      <el-button type="primary" plain>新增收货地址</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "page2"
}
</script>

<style scoped>
.R_address{
  margin-left: 4cm;
  margin-right: 4cm;
  border-left-style: outset;
  border-right-style: inset;
}
.head{
  border-bottom-style: inset;
  line-height: 3cm;
  font-size: 15px;
  color: #736f66;
}
.person{
  margin-top: 1cm;
  position: center;
  margin-left: 450px;
  margin-right: 500px;
}
.telphone{
  position: center;
  margin-left: 450px;
  margin-right: 500px;
}
.address{
  font-size: 15px;
  color: #736f66;
}
.address_detail{
  position: center;
  line-height: 3cm;
  margin-left: 450px;
  margin-right: 450px;
  font-size: 15px;
  color: #736f66;
}
.add{
  line-height: 3cm;
}
</style>
