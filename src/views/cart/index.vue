<template>
  <div>
  <div id="shopping-cart" class="page-shopping-cart">
    <el-container>
      <el-header>

        <h1 class="cart-title"><i style="color: #dd0a10;font-size: 30px" class="el-icon-shopping-cart-full"></i>&nbsp;购物车</h1>
        <div class="search">
          <input type="text" id="in" />
          <button class="btn_search">搜索</button>
        </div>
      </el-header>
      <el-main>
        <div class="cart-product-title">
          <el-row :gutter="1">
            <el-col :span="3">
              <div>
                <td>
                  <input
                    type="checkbox"
                    :checked="checkAllFlag"
                    @click="checkAll"
                  />
                </td>
                <td>
                  <span style="color: black;">&nbsp;&nbsp;全选</span>
                </td>
              </div>
            </el-col>
            <el-col :span="8" :pull="2">
              <div class="td-product fl">商品</div>
            </el-col>
            <el-col :span="4">
              <div class="td-num fl">数量</div>
            </el-col>
            <el-col :span="4">
              <div class="td-price fl">单价(元)</div>
            </el-col>
            <el-col :span="2">
              <div class="td-totalMoney fl">金额(元)</div>
            </el-col>
            <el-col :span="2">
              <div class="td-do fl">操作</div>
            </el-col>
          </el-row>
        </div>

        <!-- 内容 -->
        <div class="cart-product">
          <table>
            <tbody>
              <tr v-for="(item, index) in productList">
                <td style="width: 5%;">
                  <input
                    type="checkbox"
                    :checked="item.check"
                    @click="checkBox(item)"
                  />
                </td>
                <td class="td-product">
                  <img :src="item.productimage" width="100" height="100" alt="" />
                  <div class="product-info">
                    <h6>{{ item.productname }}</h6>
                  </div>
                  <div class="clearfix"></div>
                </td>
                <td class="td-num">
                  <el-input-number
                    v-model="item.number"
                    @change="handleChange(item.number, item.id)"
                    :min="1"
                    :max="10"
                    label="描述文字"
                  ></el-input-number>
                </td>
                <td class="td-price">
                  <p class="red-text">
                    <span class="price-text">{{
                      item.price | formatMoney
                    }}</span>
                  </p>
                </td>
                <td class="td-totalMoney">
                  <p class="red-text">
                    <span class="price-text">{{
                      (item.price * item.number) | formatMoney
                    }}</span>
                  </p>
                </td>
                <td class="td-do">
                  <a
                    href="#"
                    class="product-delete"
                    @click="deleteOneProduct(item.id, index)"
                    >删除</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-main>
      <el-footer>
        <!-- 最后一行统计 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
  <div style="width: 40%;float: bottom;margin-left: 60%;margin-bottom: 10%;">
    <el-row>
      <el-col :span="4">
        <span style="font-size: 30px">总计：</span>
      </el-col>
      <el-col :span="6"> <span style="color: red;font-size: 30px">{{ totalMoney | formatMoney }}</span></el-col>
      <el-col :span="6"><button class="pay" type="button" @click="paySelect">去结算</button></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import { deleteCart, getCartList, updateNum } from "@/api/cart";
export default {
  name: "cart",
  data() {
    return {
      input1: "",
      productList: [],
      checkAllFlag: false,
      totalMoney: 0,
      total: 0, // 总记录数
      currentPage: 1, // 当前页码
      pageSize: 20 // 每页显示10条数据,
    };
  },
  filters: {
    formatMoney: function(value) {
      return "￥ " + value.toFixed(2);
    }
  },
  created() {
    // 初始化获取列表数据
    this.fetchData();
  },
  methods: {
    handleChange(value, cartID) {
      this.getTotalMoney();
      const params = { cartID: cartID, num: value };
      updateNum(params);
      console.log(value + ":" + cartID);
    },
    // 当每页显示条数改变后,被触发 , val是最新的每页显示条数
    handleSizeChange(val) {
      // console.log(val)
      this.pageSize = val;
      this.fetchData();
    },
    // 当页码改变后,被触发 , val 是最新的页面
    handleCurrentChange(val) {
      this.currentPage = val;
      this.fetchData();
    },
    fetchData() {
      // 调用分页查询数据
      const params = { pageNum: this.currentPage, pageSize: this.pageSize };
      getCartList(params).then(res => {
        this.productList = res.data.pageInfo.list;
        this.total = res.data.pageInfo.total;
      });
    },
    //复选框设置
    checkBox: function(item) {
      var _this = this;
      // 记录选中的商品种类个数
      var number = 0;
      // 注意对比前后两次输出的结果
      if (typeof item.check == "undefined") {
        this.$set(item, "check", true);
        // 注意对比前后两次输出的结果
        console.log(item.check);
      } else {
        item.check = !item.check;
      }
      this.productList.forEach(function(item, value) {
        if (item.check) {
          number++;
        }
      });
      // 如果选中的商品种类个数等于商品列表（数组）的长度，修改全选框的全选标志；
      if (number == _this.productList.length) {
        this.checkAllFlag = true;
      } else {
        this.checkAllFlag = false;
      }
      // 计算总价
      this.getTotalMoney();
    },
    //全选按钮设置
    checkAll: function() {
      var _this = this;
      _this.checkAllFlag = !_this.checkAllFlag;
      this.productList.forEach(function(item, index) {
        if (typeof item.check == "undefined") {
          // 设置item的check属性
          _this.$set(item, "check", _this.checkAllFlag);
        } else {
          item.check = _this.checkAllFlag;
        }
      });
      // 计算总价
      this.getTotalMoney();
    },
    //总金额计算
    getTotalMoney: function() {
      var _this = this;
      // 商品总价首先置0，判断选中后，再计入总价
      this.totalMoney = 0;
      this.productList.forEach(function(item, index) {
        // 如果商品被选中，则计算到总价之中，运算符使用+=
        if (item.check) {
          _this.totalMoney += item.price * item.number;
        }
      });
    },
    //删除单条产品
    deleteOneProduct: function(cartID, index) {
      //根据索引删除productList的记录
      this.productList.splice(index, 1);
      console.log(cartID);
      const params = { cartID: cartID };
      deleteCart(params).then(res => {
        if (res.success === true) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
        }
      });
      // 计算总价
      this.getTotalMoney();
    },
    paySelect() {
      let ids = [];
      this.productList.forEach(function(item) {
        if (item.check) {
          ids.push(item.id);
        }
      });
      console.log(ids);
      this.$router.push({
        name: "MakeOrder",
        params: { ids: ids }
      });
    }
  }
};
</script>

<style scoped>
.el-container {
  height: auto;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
/*blockquote, body, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6,
img, input, li, ol, p, table, td, textarea, th, ul */
* {
  margin: 0;
  padding: 0;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  clear: both;
}
.clearfix:after {
  content: ".";
  display: block;
  overflow: hidden;
  visibility: hidden;
  font-size: 0;
  line-height: 0;
  width: 0;
  height: 0;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  vertical-align: middle;
}
.page-shopping-cart .logo {
  float: left;
}
.page-shopping-cart {
  width: 1200px;
  margin: 0 auto;
  font-size: 14px;
  border: 1px solid #e3e3e3;
  /*border-top: 2px solid #317ee7;*/
}
.page-shopping-cart .cart-title {
  color: black;
  float: left;
  margin: 16px;
}
.page-shopping-cart .search {
  float: right;
  margin: 16px;
}
.page-shopping-cart .search #in {
  width: 300px;
  height: 30px;
  border: 2px solid red;
  outline: none;
  font: 14px/30px "microsoft yahei";
}
.page-shopping-cart .search .btn_search {
  background: red;
  width: 80px;
  height: 34px;
  color: white;
  border: none;
  outline: none;
  font: 14px/34px "microsoft yahei";
}
.page-shopping-cart .red-text {
  color: #e94826;
}
.page-shopping-cart .td-product {
  width: 460px;
}
.page-shopping-cart .td-num,
.page-shopping-cart .td-price {
  width: 160px;
}
.page-shopping-cart .td-do {
  width: 150px;
}
.cart-product-title {
  text-align: center;
  height: 38px;
  line-height: 38px;
  padding: 0 20px;
  background-color: #f7f7f7;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}
.cart-product-title .td-product {
  text-align: center;
  font-size: 14px;
}
/* 购物车内容 */
.cart-product {
  padding: 0 20px;
  text-align: center;
}
.cart-product table {
  width: 100%;
  text-align: center;
  font-size: 14px;
}
.cart-product table td {
  padding: 20px 0;
}
.cart-product table tr {
  border-bottom: 1px dashed #e3e3e3;
}
.cart-product table tr:last-child {
  border-bottom: none;
}
.cart-product table .td-product {
  text-align: center;
  font-size: 12px;
  line-height: 20px;
}
.cart-product table .td-product img {
  border: 1px solid #e3e3e3;
  margin-right: 10px;
}
.cart-product table .td-product .product-info {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
.cart-product table .td-do {
  font-size: 12px;
}
.pay {
  background-color: darkorange;
  color: #fff;
  padding: 10px 25px;
  border: 0;
  border-radius: 5px;
  font-size: 25px;
}
</style>
