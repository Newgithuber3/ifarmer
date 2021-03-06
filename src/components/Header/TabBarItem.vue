<template>
  <!--子组件通过props获取父组件传来的值-->
  <div class="item" @click="itemClick">
    <li :style="active" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <slot name="li-icon"></slot>
<!--      给slot设置name,以便别的组件使用指定的插槽，，也可以设置默认值-->
      <slot name="li-title"></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      active: ""
    };
  },
  props: {
    path: String
  },
  methods: {
    itemClick() {
      console.log("toPath");
      console.log(this.path);
      this.$router.replace(this.path);
    },
    mouseOver() {
      this.active = "color: #FF6666;";
    },
    mouseLeave() {
      this.active = "";
    }
  }
};
</script>

<style scoped>
.item {
  width: 80px;
  text-align: center;
}
li {
  list-style: none;
  color: #dadbdd;
  font-weight: 600;
}

li:hover {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  li {
    margin: 3vh;
    transform: translateX(20px);
    transition: 1s slideIn ease-in;
  }
}
</style>
