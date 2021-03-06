<template>
  <div class="register-wrap">
    <el-container>
      <el-header>
        <div class="register-title"><h3>云创慧农网站，欢迎您</h3></div>
        <div class="register-subtitle"><h4>注册页面</h4></div>
      </el-header>
      <el-main>
        <div class="register-main">
          <el-form
            class="register-form"
            label-position="top"
            label-width="80px"
            :rules="rules"
            ref="registerForm"
            status-icon
            :model="registerdata"
          >
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="registerdata.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
              <el-input
                v-model="registerdata.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
              <el-input
                v-model="registerdata.password2"
                placeholder="请再次确认密码"
              ></el-input>
            </el-form-item>
            <el-button
              @click="submitRegister('registerData')"
              class="submit-btn"
              type="danger"
              >提交</el-button
            >
          </el-form>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerdata.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerdata: {
        username: "",
        password: "",
        password2: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 30 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
        ],
        password2: [
          { required: true, message: "确认密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度在 6 到 30 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitRegister(formName) {
      var userData = JSON.stringify(this.registerdata);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          axios({
            method: "post",
            url: "/user/login",
            data: {
              user: userData,
              password: userData
            }
          })
            .then(function(response) {
              console.log(response);
              if (response.body.msg === "success") {
              } else {
              }
            })
            .catch(function(error) {
              console.log(error);
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
.register-title h3 {
  text-align: left;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: white;
}
.register-wrap .register-main {
  text-align: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.register-wrap {
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}
.register-wrap .register-form {
  width: 400px;
  margin: 20px auto; /* 上下间距20px，左右自动居中*/
  background-color: rgb(255, 255, 255); /* 透明背景色 */
  padding: 30px;
  border-radius: 20px; /* 圆角 */
}
.submit-btn {
  width: 100%;
}
</style>
