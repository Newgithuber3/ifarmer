<template>
  <div class="product_detail">
    <el-container>
      <el-header>
        <div class="pro_name">
          商品详情
        </div>
      </el-header>
      <el-main style="margin-top: 1%">
        <div class="inf">
          <div class="demo-image__placeholder">
            <div class="block">
              <img :src="product.productDetail.imageurl" class="picture" />
            </div>
          </div>
          <div class="inf_detail">
            <div class="pro_name">
              {{ product.name }}
            </div>
            <div class="pro_price">
              <span id="money"
                >¥{{ product.productDetail.price }}/{{
                  product.productDetail.unit
                }}</span
              >
            </div>
            <div class="pro_row">
              <div class="div_inline">月销量：{{ num }}万</div>
              <br />
              <div class="div_inline">
                累计评价：
                <el-rate
                  v-model="product.productDetail.score"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
              </div>
            </div>
            <label>数量：</label>
            <el-input-number
              size="small"
              v-model="number"
              :min="1"
              :max="100"
              label="描述文字"
            ></el-input-number>
            <div class="pro_buy" style="margin-left: 20%">
              <el-row :gutter="1">
                <el-col :span="8"
                  ><el-button class="N_buy" type="primary"
                    >立即购买
                  </el-button></el-col
                >
                <el-col :span="8">
                  <el-button
                      @click="addCart"
                    class="J_shop "
                    type="primary"
                    icon="el-icon-goods"
                    >加入购物车</el-button
                  >
                </el-col>
              </el-row>
            </div>
            <div class="promise">
              <div class="long">
                <strong>服务承诺</strong>
                &nbsp; 不支持七天无理由退换 &nbsp; 正品保证 &nbsp; 极速退款
              </div>
              <el-dropdown
                size="medium"
                split-button
                type="primary"
                @click="handleClick"
              >
                付款方式
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>支付宝</el-dropdown-item>
                  <el-dropdown-item>微信</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="inf_more">
            <span class="more_row1">
              商品详情介绍：
            </span>
            <div class="more_row2">品牌名称：</div>
            <div class="more_row3">
              <div class="parameter">
                <strong>产品参数：</strong>
                <div id="para_row1">厂名：</div>
                <div id="para_row2">厂址：</div>
                <div id="para_row3">联系方式：</div>
                <div id="para_row4">保质期：</div>
                <div id="para_row5">产地：</div>
                <div id="para_row6">包装方式：</div>
                <div id="para_row7">食用方式：</div>
              </div>
            </div>
          </div>
        </div>

        <div class="inf_store">
          <div class="store_name">店铺名：{{ product.seller.storename }}</div>
          <div class="store_detail">
            <span class="row1">描述</span>
            <span class="row2">服务</span>
            <span class="row3">物流</span>
          </div>
          <div class="store_more">
            <a style="color: mediumspringgreen" href="#">进店逛逛</a>
            &nbsp&nbsp&nbsp&nbsp
            <a style="color: mediumspringgreen" href="#">收藏店铺</a>
          </div>
        </div>
      </el-main>
      <el-footer> </el-footer>
    </el-container>
  </div>
</template>

<script>
import { getProduct } from "@/api/product";
import { addCart } from "@/api/cart";

export default {
  data() {
    return {
      input: "",
      productId: "",
      product: {},
      num: 1.3,
      number: 1
    };
  },
  created() {
    this.productId = this.$route.query.productId;
    this.getProduct();
    this.createNum();
  },
  methods: {
    goBack() {
      console.log("go back");
    },
    getProduct() {
      const param = { id: this.productId };
      getProduct(param).then(res => {
        this.product = res.data.product;
      });
    },
    addCart() {
      this.checkLogin();
      const params = { productid: this.productId, number: this.number };
      addCart(params).then(res => {
        if (res.success === true) {
          this.$message({
            showClose: true,
            message: "添加购物车成功",
            type: "success"
          });
        }
      });
    },
    createNum() {
      this.num = Math.round(Math.random() * 100) / 10;
    },
    checkLogin() {
      const token = this.$store.getters.token;
      console.log(token);
      if (token === "" || token === null || token === undefined){
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style scoped>
.picture {
  width: 350px;
  height: 350px;
  margin: 50px;
}
.product_detail {
  margin-top: 0;
  margin-left: 1cm;
  margin-right: 1cm;
}
.nav {
  width: 1350px;
  height: 40px;
  background-color: ghostwhite;
  font-family: "Microsoft YaHei UI";
  font-size: 150%;
  font-style: italic;
  font-weight: bold;
  top: 0;
  margin-left: 1cm;
  margin-right: 1cm;
}
.search {
  background-color: #dd0a10;
  border: none;
}

.demo-image__placeholder {
  float: left;
  height: 14cm;
  width: 12cm;
  margin-left: 1cm;
  background-color: white;
}
.shop {
  color: #333333;
  margin-bottom: auto;
}
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  border-radius: 1px;
  background-color: beige;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 3cm;
  margin-right: 3cm;
}
.inf_detail {
  border-radius: 1px;
  float: left;
  width: 600px;
  background-color: azure;
}
.pro_name {
  line-height: 90px;
  font-size: 20px;
  font-weight: bold;
}
.pro_price {
  line-height: 30px;
  font-size: 40px;
  color: red;
}
.pro_row {
  line-height: 50px;
  font-size: 20px;
  color: tan;
  font-family: 华文细黑;
}
.long {
  font-family: 华文细黑;
  font-size: 20px;
}
.promise {
  font-size: 10px;
  line-height: 100px;
}
.div_inline {
  display: inline;
}
.Net_weight {
  line-height: 30px;
}
.pro_buy {
}
.N_buy {
  background-color: blanchedalmond;
  border: #dd0a10;
  color: #dd0a10;
  width: 150px;
}
.J_shop {
  background-color: #dd0a10;
  border-width: 0;
  width: 150px;
}

.inf_more {
  height: 400px;
  background-color: white;
  float: right;
  width: 600px;
  margin-right: 70px;
  line-height: normal;
  border: lightgrey;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-input {
  width: 350px;
}
.el-dropdown {
  vertical-align: top;
  line-height: normal;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.inf_store {
  width: 12cm;
  margin-top: 520px;
  margin-left: 1cm;
  background-color: blanchedalmond;
  border: 1px dimgray;
}
.store_name {
  font-size: 15px;
  font-weight: bold;
  line-height: 90px;
  margin-top: 0px;
}
.row1 {
  border-width: 200px;
}
.row2 {
  border-width: 200px;
}
.row3 {
  border-width: 200px;
}
.store_more {
  font-size: 20px;
}
</style>
