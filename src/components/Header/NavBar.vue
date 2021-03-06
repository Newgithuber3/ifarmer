<template>
  <nav>
    <div class="logo">
      <slot name="logo-icon"
        ><img style="width: 100px;height: 50px" src="../../assets/titleLogo.png"
      /></slot>
      <slot name="logo-title"></slot>
    </div>
    <div class="user">
      <el-dropdown v-if="isLogin" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>{{ username }}&nbsp;
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人中心</el-dropdown-item>
          <el-dropdown-item command="b">收货地址</el-dropdown-item>
          <el-dropdown-item command="c">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-link
        type="danger"
        :underline="false"
        v-else
        class="titleLogin"
        @click="login"
        >{{ username }}</el-link
      >
    </div>
    <div class="search">
      <el-input placeholder="请输入内容" size="medium" class="input_search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <ul class="nav-menu">
      <slot></slot>
    </ul>

    <div class="burger" @click="handleBurger()">
      <div class="top-line"></div>
      <div class="middle-line"></div>
      <div class="bottom-line"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      username: "",
      isLogin: false
    };
  },
  mounted() {
    this.getName();
  },
  methods: {
    handleBurger() {
      const burger = document.querySelector(".burger");
      const navMenu = document.querySelector(".nav-menu");
      burger.addEventListener("click", function() {
        burger.classList.toggle("active");
        navMenu.classList.toggle("open");
      });
    },
    getName() {
      this.username = this.$store.getters.name;
      if (this.username === null || this.username === "") {
        this.username = "亲，请登录";
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }
    },
    handleCommand(command) {
      if (command === "a") {
        this.$router.push("/");
      } else if (command === "b") {
        this.$router.push("/");
      } else {
        this.$store.dispatch("user/logout");
        this.$router.push("/");
        location.reload();
      }
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
nav {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  height: 70px;
  background-color: #ffffff;
}
.logo {
  font-size: 28px;
  font-weight: 600;
  background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo img {
  border-radius: 5px;
  flex: 1;
  vertical-align: center;
}
.nav-menu {
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 500px;
}
.burger {
  margin-left: 10px;
  display: none;
}
.burger div {
  width: 30px;
  height: 2px;
  background-color: #dadbdd;
  margin: 6px;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    width: 40vw;
    height: 540px;
    background-color: rgba(65, 81, 101, 0.7);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    transform: translateX(100%);
    transition: 0.3s ease-in-out;
  }
  .nav-menu.open {
    transform: translateX(0);
  }
  .burger {
    display: block;
  }

  .burger.active div {
    transition: 0.3s ease-in-out 0.2s;
  }
  .burger.active .top-line {
    transform: rotate(90deg) translateX(8px) translateY(-14px);
  }
  .burger.active .bottom-line {
    transform: rotate(90deg) translateX(-8px) translateY(-6px);
  }
  .burger.active .middle-line {
    transform: rotate(90deg) translateY(2px);
  }
  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
.user {
  margin-right: 270px;
}
.titleLogin {
  color: #dd0a10;
}
</style>
