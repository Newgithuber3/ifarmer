<template>
  <div class="product_detail">
    <div class="nav">欢迎来到惠农云创！</div>
    <el-container>
    <el-header>
      <div class="input">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable>
      </el-input>
        <el-button class="search" type="primary" icon="el-icon-search">搜索</el-button>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <el-button class=" shop" plain icon="el-icon-goods" round>我的购物车</el-button>
      </div>
    </el-header>
    <el-main>
      <div class="back">
        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>
      </div>
      <div class="inf">
       <div class="demo-image__placeholder">
       <div class="block">
         <span class="demonstration">默认</span>
         <el-image :src="src"></el-image>
       </div>
       </div>
        <div class="inf_detail">
          <div class="pro_name">
            农产品描述
          </div>
          <div class="pro_price">
            <span id="money">¥</span>
            <strong>XXX</strong>
          </div>
          <div class="pro_row">
            <div class="div_inline">月销量：</div>
            <div class="div_inline">累计评价：</div>
          </div>
          <div class="Net_weight">净含量：</div>
          <div class="pro_buy">
            <el-row>
              <el-button  class="N_buy"type="primary">立即购买</el-button>
              <el-popconfirm
                confirm-button-text='是的'
                cancel-button-text='取消'
                icon="el-icon-info"
                icon-color="red"
                title="确定加入你的购物车吗"
              >
                &nbsp&nbsp&nbsp&nbsp
                <el-button  class="J_shop "type="primary"slot="reference" icon="el-icon-goods">加入购物车</el-button>
              </el-popconfirm>
            </el-row>
          </div>
          <div class="promise">
            <div class="long">
            <strong>服务承诺</strong>
            &nbsp&nbsp
            不支持七天无理由退换
            &nbsp&nbsp
            正品保证
            &nbsp&nbsp
            极速退款
            &nbsp&nbsp
            </div>
            <el-dropdown  size="medium" split-button  type="primary" @click="handleClick">
              付款方式
              <el-dropdown-menu  slot="dropdown">
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
        <div class="store_name">店铺名：XXX</div>
        <div class="store_detail">
          <span class="row1">描述</span>
          <span class="row2">服务</span>
          <span class="row3">物流</span>
        </div>
        <div class="store_more">
          <a style="color: mediumspringgreen"  href="#" >进店逛逛</a>
          &nbsp&nbsp&nbsp&nbsp
          <a style="color: mediumspringgreen" href="#">收藏店铺</a>
        </div>
      </div>
    </el-main>
    <el-footer>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  name: "product_detail",

 data() {
    return {
      input: ''
    }
  },
  methods: {
    goBack() {
      console.log('go back');
    }
  },

}
</script>

<style scoped>
.product_detail{
  margin-top:0;
  margin-left: 1cm;
  margin-right: 1cm;
}
.nav {
  width: 1350px;
  height:40px;
  background-color: ghostwhite;
  font-family: "Microsoft YaHei UI";
  font-size:150%;
  font-style:italic;
  font-weight: bold;
  top:0;
  margin-left: 1cm;
  margin-right: 1cm;
}
.search{
  background-color: #dd0a10;
  border:none ;
}

.demo-image__placeholder{
  float: left;
  float: top;
  height: 14cm ;
  width: 12cm;
  margin-left: 1cm;
  background-color: white;
}
.shop{
  color: #333333;
  margin-bottom: auto;
}
.el-header, .el-footer {
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
.inf_detail{
  border-radius: 1px;
  float: left;
  width: 600px;
  height: 14cm;
  background-color: azure;
}
.pro_name{
 margin: 0px;
  line-height: 90px;
  font-size: 20px;
  font-weight: bold;
}
.pro_price{
  line-height: 30px;
  font-size: 40px;
  color: red;
}
.pro_row{
  line-height: 50px;
  font-size: 20px;
  color: tan;
  font-family: 华文细黑;
}
.long{
  font-family: 华文细黑;
  font-size: 20px;
}
.promise{
  font-size: 10px;
  line-height: 100px;
}
.div_inline{
  display: inline;
  border: tan 1px dashed ;
}
.Net_weight{
  line-height: 30px
}
.pro_buy{
  line-height: 90px;
}
.N_buy{
  background-color: blanchedalmond;
  border: #dd0a10 ;
  color: #dd0a10;
}
.J_shop{
  background-color: #dd0a10;
  ;border-width: 0;
}


.inf_more{
height: 400px;
  background-color: white;
  float:right;
  width: 600px;
  margin-right: 70px;
  line-height: normal;
  border: lightgrey;
   ;
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
.el-dropdown +.el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.inf_store{
  width: 12cm;
  margin-top: 520px;
  margin-left: 1cm;
  background-color: blanchedalmond;
  border: 1px dimgray;
}
.store_name{
  font-size: 15px;
  font-weight: bold;
  line-height: 90px;
   margin-top: 0px;
}
.row1{
  border-width: 200px;
}
.row2{
  border-width: 200px;
}
.row3{
  border-width: 200px;
 }
.store_more{
  font-size: 20px;

}


</style>
