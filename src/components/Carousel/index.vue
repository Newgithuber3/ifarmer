<template>
  <el-carousel>
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="item.url" alt="无图片" width="100%" height="100%" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    // 传入的图片url数组
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
</style>
