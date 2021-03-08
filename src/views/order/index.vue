<template>
  <div>
    <el-container>
      <el-header>
        <h1 class="orderTitle">
          <i
            style="color: #dd0a10;font-size: 30px"
            class="el-icon-shopping-cart-full"
          ></i
          >&nbsp;确认订单信息
        </h1>
      </el-header>
      <el-main>
        <h3 style="margin-left: 7%" class="headerTitle">选择收货地址</h3>
        <div v-if="addressList.length > 0 && addressList !== undefined">
          <address-select
            style="margin-left: 8%"
            :addressList="addressList"
            :select="select"
          ></address-select>
        </div>
        <el-card
          style="margin-left: 7%;width: 150px;text-align: center"
          v-else
        >
          <span>添加收获地址</span><br />
          <i
              @click="addAddress"
            style="font-size: 50px"
            class="el-icon-plus avatar-uploader-icon"
          ></i>
        </el-card>
        <div class="orderAddress">
          <div class="headerWrapper">
            <div style="margin-left: 15%">
              <el-row :gutter="10">
                <el-col :span="5">
                  <div class="product fl">商品</div>
                </el-col>
                <el-col :span="6">
                  <div class="productDetail fl">商品属性</div>
                </el-col>
                <el-col :span="4">
                  <div class="num fl">单价(元)</div>
                </el-col>
                <el-col :span="4">
                  <div class="price fl">数量</div>
                </el-col>
                <el-col :span="5">
                  <div class="totalMoney fl">金额(元)</div>
                </el-col>
              </el-row>
            </div>
            <div class="orderProduct">
              <table>
                <tbody>
                  <tr v-for="(item, index) in productList">
                    <td class="td-product">
                      <img
                        :src="item.productimage"
                        width="100"
                        height="100"
                        alt=""
                      />
                      <div class="product-info">
                        <h6>{{ item.productname }}</h6>
                      </div>
                    </td>
                    <td>
                      <p class="td-productDetail">
                        {{ item.productDetail }}
                      </p>
                    </td>
                    <td class="td-price">
                      <p class="red-text">
                        <span class="price-text">{{
                          item.price | formatMoney
                        }}</span>
                      </p>
                    </td>
                    <td>
                      <p class="td-num">{{ item.number }}</p>
                    </td>
                    <td class="td-totalMoney">
                      <p class="red-text">
                        <span class="price-text">{{
                          (item.price * item.number) | formatMoney
                        }}</span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="payment">
            实付款：<span style="color: red;">
              {{ totalMoney | formatMoney }}</span
            >元
          </div>
          <a @click="returnCart" class="return">返回购物车</a>
          <el-button type="danger" class="submit">提交订单</el-button>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { getCartListByIds } from "@/api/cart";
import { getUserAddress } from "@/api/user";
import addressSelect from "@/components/addressSelect/index";

export default {
  components: {
    addressSelect
  },
  data() {
    return {
      radio: "",
      totalMoney: 1.0,
      productList: [],
      addressList: [],
      ids: [],
      select: 1
    };
  },
  mounted() {},
  created() {
    this.ids = this.$route.params.ids;
    this.initAddressList();
    this.getProductList();
    console.log("isd" + this.ids);
  },
  filters: {
    formatMoney: function(value) {
      return "￥ " + value.toFixed(2);
    }
  },
  methods: {
    getProductList() {
      getCartListByIds(this.ids).then(res => {
        this.productList = res.data.list;
        this.getTotalMoney();
      });
    },
    initAddressList() {
      getUserAddress().then(res => {
        this.addressList = res.data.addressList;
      });
    },
    getTotalMoney: function() {
      let total = 0.0;
      let _this = this;
      this.productList.forEach(function(item) {
        total += item.price * item.number;
        _this.totalMoney = total;
      });
    },
    returnCart() {
      this.$router.push("/cart");
    },
    addAddress() {
      this.$router.push("/userInfo");
    }
  }
};
</script>

<style scoped>
.logo {
  float: left;
}

.orderTitle {
  color: black;
  float: left;
  margin: 16px;
}

.orderAddress {
  margin-bottom: 30px;
  margin-top: 30px;
}

.headerWrapper {
  margin-bottom: 15px;
  float: left;
}

.headerTitle {
  line-height: 25px;
  color: #333333;
  font-weight: 700;
  width: 1200px;
  text-align: left;
}

textarea {
  font-size: 16px;
  float: left;
}

.innerAddress .addressDetail span {
  word-break: break-all;
}

a {
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
}

.orderProduct {
  padding: 0 20px;
  text-align: center;
}

.orderProduct table {
  width: 100%;
  text-align: center;
  font-size: 15px;
  border-collapse: separate;
  border-spacing: 120px 10px;
}

.orderProduct table td {
  padding: 10px 0;
}

.orderProduct table tr {
  border-bottom: 1px dashed #e3e3e3;
  /*border: 1px solid #ffffff;*/
}

.orderProduct table tr:last-child {
  border-bottom: none;
}

.orderProduct table .td-product {
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}

.orderProduct table .td-product img {
  border: 1px solid #e3e3e3;
  margin-right: 10px;
}

.orderProduct table .td-product .product-info {
  display: inline-block;
  vertical-align: middle;
  /*text-align: left;*/
}

h6 {
  text-align: center;
}

.footer {
  float: right;
}

.footer .payment {
  height: 80px;
  line-height: 80px;
  /*background: #f7f7f7;*/
  font-size: 25px;
}

.footer .return {
  font-size: 20px;
  margin: 30px;
}

.footer .submit {
  float: right;
  font-size: 20px;
}
</style>
