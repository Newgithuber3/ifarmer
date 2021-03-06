<template>
  <div class="el-container">
    <el-tabs class="tabPane" tab-position="left">
      <el-tab-pane class="info margin" label="个人信息">
        <div class="P_info" style="width: 400px">
          <div class="head">基本信息</div>
          <div class="username">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="username"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="nickname">
            <el-form ref="form" :model="form" label-width="80px">
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
              生日 &nbsp;
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="submit">
            <el-button type="primary" plain>提交</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane class="address margin" label="收货地址"
        ><div class="R_address" style="width: 600px;">
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
            <v-distpicker
              :placeholders="placeholders"
              @selected="select"
            ></v-distpicker>
          </div>
          <div class="address_detail">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请输入所在地区或街道/门牌号等详细地址"
              v-model="detailAddress"
            >
            </el-input>
          </div>
          <div class="add">
            <el-button type="primary" plain @click="addAddress"
              >新增收货地址</el-button
            >
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
export default {
  components: {
    VDistpicker
  },
  data() {
    return {
      address: "",
      detailAddress: "",
      placeholders: {
        province: "------- 省 --------",
        city: "--- 市 ---",
        area: "--- 区 ---"
      }
    };
  },
  methods: {
    select(data) {
      console.log("aa" + data);
      this.address = data.province.value + data.city.value + data.area.value;
    },
    updateUserInfo() {},
    addAddress() {
      console.log("ss" + this.address);
    }
  }
};
</script>

<style scoped>
.el-container {
}
.tabPane {
  margin-top: 5%;
  margin-left: 15%;
}
.margin {
  margin-top: 1%;
  margin-left: 10%;
  margin-bottom: 10%;
}
.info {
  width: 800px;
}
.address {
  width: 800px;
}
</style>
