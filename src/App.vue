<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <MainTabBar></MainTabBar>
      <router-view></router-view>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import MainTabBar from "@/components/Header/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>
<style lang="scss"></style>
