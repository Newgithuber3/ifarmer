<template>
  <div
    :style="active"
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    @click="detail"
    class="product"
  >
    <el-card :body-style="{ padding: '0px' }" class="card">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <div style="padding: 14px;">
        <span>{{ product.name }}</span
        ><br />
        <span class="price">¥{{ product.productDetail.price }}</span>
        <span style="text-decoration: line-through;color: #d3dce6"
          >&nbsp;¥{{ product.productDetail.price * 1 + 10 }}</span
        >
        <div class="bottom clearfix"></div>
        <span style="float: right">月销{{ num }}万</span>
      </div>
    </el-card>
  </div>
</template>

<script>
const productAssign = {
  name: "",
  category: "",
  storeid: "",
  productDetail: {
    name: "",
    description: "",
    unit: "",
    price: "",
    number: "",
    score: "",
    status: "",
    imageurl: ""
  },
  productParameter: {
    origin: "",
    productionDate: "",
    expirationDate: "",
    note: ""
  }
};
export default {
  props: {
    product: Object.assign({}, productAssign)
  },
  data() {
    return {
      active: "",
      num: 1.3
    };
  },
  created() {
    this.createNum();
  },
  methods: {
    mouseOver() {
      this.active = "border: 1px solid #FF6331;";
    },
    mouseLeave() {
      this.active = "";
    },
    detail() {
      this.$router.push({
        path: "/detail",
        query: { productId: this.product.id }
      });
    },
    createNum() {
      this.num = Math.round(Math.random() * 100) / 10;
    }
  }
};
</script>

<style scoped>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.image {
  width: 210px;
  height: 250px;
}
.card {
  width: 210px;
  height: 350px;
  margin: 20px;
}
.product {
  width: 250px;
  height: 390px;
  border: 1px solid white;
}
.price {
  color: #dd0a10;
  font-size: larger;
}
</style>
