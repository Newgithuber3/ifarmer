<template>
  <div class="home">
    <el-container>
      <el-header style="margin-bottom: 10px">
        <img style="height: 80px;width: 100%" src="@/assets/imgs/header.jpg" />
      </el-header>
      <el-main style="margin-left: 3%;">
        <div class="search">
          <el-row style="margin-left: 25%">
            <el-col :span="1">
              <i
                class="el-icon-shopping-cart-full"
                style="font-size: 40px;color: #dd0a10"
              ></i>
            </el-col>
            <el-col :span="20" style="margin-left: 10px">
              <input v-model="searchInput" type="text" id="in" />
              <button class="btn_search" @click="search(searchInput)">搜索</button>
            </el-col>
          </el-row>
        </div>
        <el-row style="margin-top: 30px">
          <el-col :span="4" style="width: 20%" class="category">
            <div class="links">
              <el-row
                class="rows"
                :gutter="20"
                v-for="item in category"
                :key="item"
              >
                <el-col :span="7" v-for="items in item" :key="items">
                  <el-link @click="search(items.name)">{{ items.name }}</el-link>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="9" style="width: 50%">
            <div class="center">
              <Carousel
                :images="imgList"
                style="width: 100%;height: 310px"
              ></Carousel>
            </div>
            <el-row>
              <el-col :span="12">
                <img class="centerImg" src="@/assets/imgs/home1.jpg" />
              </el-col>
              <el-col :span="12">
                <img class="centerImg" src="@/assets/imgs/home2.jpg" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6" style="width: 30%;">
            <el-card style="height: 510px;">
              <div class="block" style="margin-left: 40%;width: 20%">
                <el-avatar :size="60" :src="avatarUrl"></el-avatar>
                <span v-if="name === '' || name === null">Hi, 你好</span>
                <span v-else>Hi,{{ name }}</span>
              </div>
              <el-row
                v-if="!isLogin"
                :gutter="10"
                style="margin-left: 15%;margin-top: 10px"
              >
                <el-col :span="6"
                  ><el-button type="warning" round plain @click="login"
                    >登录</el-button
                  ></el-col
                >
                <el-col :span="6"
                  ><el-button type="warning" round plain @click="register"
                    >注册</el-button
                  ></el-col
                >
                <el-col :span="6"
                  ><el-button type="warning" round plain @click="toMall"
                    >开店</el-button
                  ></el-col
                >
              </el-row>
              <el-row v-else style="margin-left: 10px;margin-top: 20px">
                <el-col :span="6" style="text-align: center"
                  ><span style="color: red">0</span><br /><span
                    >待收货</span
                  ></el-col
                >
                <el-col :span="6" style="text-align: center"
                  ><span style="color: red">0</span><br /><span
                    >待收货</span
                  ></el-col
                >
                <el-col :span="6" style="text-align: center"
                  ><span style="color: red">0</span><br /><span
                    >待收货</span
                  ></el-col
                >
                <el-col :span="6" style="text-align: center"
                  ><span style="color: red">0</span><br /><span
                    >待收货</span
                  ></el-col
                >
              </el-row>
              <br />
              <hr />
              <img
                src="@/assets/imgs/home3.jpg"
                style="width: 100%;height: 100px"
              />
              <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
                style="width: 80%;margin-left: 10%"
              >
                <el-tab-pane class="tabs" label="公告" name="first"
                  >...公告...</el-tab-pane
                >
                <el-tab-pane class="tabs" label="资讯" name="second"
                  >...资讯...</el-tab-pane
                >
                <el-tab-pane class="tabs" label="规则" name="third"
                  >规则</el-tab-pane
                >
                <el-tab-pane class="tabs" label="论坛" name="fourth"
                  >论坛</el-tab-pane
                >
              </el-tabs>
            </el-card>
          </el-col>
        </el-row>
        <br /><br />
        <img style="margin-left: 10%" src="@/assets/font/img.png" />
        <div class="list">
          <el-row :gutter="10" style="margin-left: 10%">
            <el-col
              :span="5"
              v-for="item in productList.slice(0, 4)"
              :key="item"
            >
              <product-card :product="item"></product-card
            ></el-col>
          </el-row>
          <el-row :gutter="10" style="margin-left: 10%">
            <el-col
              :span="5"
              v-for="item in productList.slice(5, 9)"
              :key="item"
            >
              <product-card :product="item"></product-card
            ></el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel/index";
import productCard from "@/components/productCard/index";
import { getProductList } from "@/api/product";

const imgListDefault = [
  { url: require("@/assets/carousel/u1.jpg") },
  { url: require("@/assets/carousel/u2.jpg") },
  { url: require("@/assets/carousel/u3.jpg") },
  { url: require("@/assets/carousel/u4.jpg") }
];

const categoryDefault = [
  [{ name: "粮食" }, { name: "大米" }, { name: "小麦" }],
  [{ name: "水果" }, { name: "苹果" }, { name: "水蜜桃" }],
  [{ name: "蔬菜" }, { name: "新鲜白菜" }, { name: "土豆" }],
  [{ name: "海鲜" }, { name: "大闸蟹" }, { name: "牡蛎" }],
  [{ name: "种子" }, { name: "抗盐碱水稻" }, { name: "抗虫白菜" }],
  [{ name: "化肥" }, { name: "无磷化肥" }, { name: "特价尿素" }],
  [{ name: "农具" }, { name: "精制铁锹" }, { name: "拖拉机" }],
  [{ name: "饲料" }, { name: "有机饲料" }, { name: "特价狗粮" }]
];
export default {
  name: "Home",
  components: {
    Carousel,
    productCard
  },
  filters: {},
  data() {
    return {
      imgList: imgListDefault,
      category: Object.assign({}, categoryDefault),
      activeName: "first",
      searchInput: "",
      avatarUrl: require("@/assets/imgs/icon.jpg"),
      active: "",
      productList: [],
      name: "你好",
      isLogin: false
    };
  },
  created() {
    this.getName();
    this.fetchData();
  },
  methods: {
    fetchData() {
      const params = { pageNum: 1, pageSize: 100 };
      getProductList(params).then(res => {
        this.productList = res.data.pageInfo.list;
      });
    },
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    toMall() {
      window.location = "http://www.baidu.com";
    },
    getName() {
      this.name = this.$store.getters.name;
      this.isLogin = !(this.name === null || this.name === "");
    },
    search(name) {
      this.$router.push({
        path: "/productList",
        query: { productName: name }
      });
    }
  }
};
</script>
<style scoped>
/*.list {*/
/*}*/
.category {
  font: 21px/21px 'microsoft yahei';
}
.links {
  width: 97%;
  height: 510px;
  border: 1px solid #e54c00;
  text-align: center;
}
.links .rows {
  margin-top: 25px;
  font-size: x-large;
  font-weight: bold;
}
.search {
  width: 100%;
  height: 40px;
  background-color: #fffefb;
}
.search #in {
  width: 500px;
  height: 40px;
  border: 2px solid red;
  outline: none;
  font: 14px/30px "microsoft yahei";
}
.search .btn_search {
  background: red;
  width: 100px;
  height: 47px;
  color: white;
  border: none;
  outline: none;
  font: 14px/34px "microsoft yahei";
}
.centerImg {
  width: 350px;
  height: 200px;
}
</style>
