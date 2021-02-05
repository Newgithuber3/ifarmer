<template >
  <el-menu :default-active="activeIndex"
           class="el-menu-demo"
           mode="horizontal"
           @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">账户设置</template>
      <el-menu-item index="1-1"><a class="one" href="page1">个人信息</a></el-menu-item>
      <el-menu-item index="1-2"><a class="two" href="page2">收货地址</a></el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "user_settings",
 data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style scoped>
.one{
  text-decoration:none;
  color: #333333;
}
.two{
  text-decoration:none;
  color: #333333;
}
</style>
