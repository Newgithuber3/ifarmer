<template>
  <!--父组件   path就是传给子组件的值-->
  <div>
    <nav-bar>
      <tab-bar-item path="/">
        <span slot="li-title" style="color: #333333">首页</span>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <span slot="li-title">购物车</span>
      </tab-bar-item>
      <tab-bar-item path="">
        <span slot="li-title">卖家中心</span>
      </tab-bar-item>
      <tab-bar-item>
        <span slot="li-title">消息中心</span>
      </tab-bar-item>
      <tab-bar-item>
        <span slot="li-title">关于我们</span>
      </tab-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: { TabBarItem, NavBar },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
