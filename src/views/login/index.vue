<template>
  <div class="login-wrap">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-header>
        <div class="login-title">
          <h3>云创慧农网站，欢迎您</h3>
        </div>
      </el-header>
      <el-main>
        <div class="login-main">
          <el-form
            class="login-form"
            label-position="top"
            label-width="80px"
            :rules="rules"
            ref="loginForm"
            status-icon
            :model="formdata"
          >
            <h2>账号登陆</h2>
            <el-form-item label="用户名/手机号" prop="username">
              <el-input
                v-model="formdata.username"
                placeholder="请输入用户名/手机号"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="formdata.password"
                placeholder="请输入密码"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-button
              class="login-btn"
              type="danger"
              @click="submitForm('loginForm')"
              >登录</el-button
            >
            <el-button type="text1" class="forget-password">忘记密码</el-button>
            <router-link to="/register" class="free-register">
              <el-button type="text2" @click="free - register"
                >免费注册</el-button
              >
            </router-link>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <el-button type="text3">关于我们</el-button>
        <el-button type="text4">联系我们</el-button>
        <el-button type="text5">帮助中心</el-button>
      </el-footer>
    </el-container>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formdata: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 30 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // free-register()
    // {window.location.href="/register"}
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("user/login", this.formdata)
            .then(() => {
              this.$router.push("/");
            })
            .catch(() => {
              this.formdata.password = "";
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-title h3 {
  text-align: left;
}
.login-wrap .login-main {
  float: right;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.login-wrap {
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
.login-wrap .login-form {
  width: 400px;
  height: 365px;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  /*text-align: right;*/
  /*left: 50%;*/
  /*top: 50%;*/
  /*margin-left:-200px;*/
  /*margin-top:-140px;*/
  align: center;
}
.login-btn {
  width: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: white;
}
.el-main {
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/public/images/firstimage/login-background.png");
}
.el-footer {
  margin: 25px;
}
.login-wrap .forget-password {
  float: right;
  margin: 5px;
}
.login-wrap .free-register {
  float: right;
  margin: 5px;
}
.el-row {
  margin-bottom: 20px;
  /*&:last-child {*/
  /*   margin-bottom: 0;*/
  /* }*/
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
