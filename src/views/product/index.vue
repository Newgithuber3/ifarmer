<template>
  <div>
    <div class="box">
      <div class="searchBox">
        <el-input
          v-model="productName"
          placeholder="请输入关键词进行搜索"
          class="searchInput"
        />
        <el-button type="success" @click="search" class="searchButton"
          >搜索
        </el-button>
      </div>
    </div>
    <el-card style="width: 70%;margin-left: 15%;margin-top: 20px">
      <div>
        <span>产地:</span>
        <el-link
          v-for="item in origin"
          type="info"
          :key="item"
          style="margin: 20px"
          @click="filterSearch(item.name, 1)"
          >{{ item.name }}</el-link
        >
      </div>
      <div>
        <span>品牌:</span>
        <el-link
          v-for="item in brand"
          type="info"
          :key="item"
          style="margin: 20px"
          @click="filterSearch(item.name, 2)"
          >{{ item.name }}</el-link
        >
      </div>
      <div>
        <span>排序:</span>
        <el-radio-group
          v-model="orderBy"
          size="medium"
          style="margin-left: 27px"
        >
          <el-radio-button label="销量"></el-radio-button>
          <el-radio-button label="价格"></el-radio-button>
          <el-radio-button label="评分"></el-radio-button>
        </el-radio-group>
      </div>
    </el-card>
    <el-row>
      <div style="width: 70%;margin-left: 15%;margin-top: 20px;">
        <product-card
          v-for="item in list"
          :key="item"
          :product="item"
          style="float: left"
        ></product-card>
      </div>
    </el-row>
    <div style="float: right;margin-bottom: 10%;margin-right: 8%;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        background
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getProductList } from "@/api/product";
import productCard from "@/components/productCard/index";
const originDefault = [
  { name: "山西" },
  { name: "安徽" },
  { name: "北京" },
  { name: "云南" },
  { name: "重庆" },
  { name: "湖北" },
  { name: "南京" },
  { name: "河南" }
];
const brandDefault = [
  { name: "龙威贡牌" },
  { name: "神籽" },
  { name: "菁云" },
  { name: "景润" },
  { name: "万河" },
  { name: "塞外香" },
  { name: "阳山水蜜桃" },
  { name: "东北江达" }
];
export default {
  components: {
    productCard
  },
  data() {
    return {
      productName: "",
      list: [],
      currentPage: 1,
      pageSize: 10,
      total: "",
      origin: Object.assign({}, originDefault),
      originSelect: "",
      brand: Object.assign({}, brandDefault),
      brandSelect: "",
      orderBy: "销量"
    };
  },
  created() {
    this.productName = this.$route.query.productName;
    this.search();
  },
  methods: {
    search() {
      let searchName = "";
      searchName += this.productName;
      if (this.originSelect !== null || this.originSelect !== "") {
        searchName += " " + this.originSelect;
        this.originSelect = "";
        this.productName = searchName;
      }
      if (this.brandSelect !== null || this.brandSelect !== "") {
        searchName += " " + this.brandSelect;
        this.brandSelect = "";
        this.productName = searchName;
      }
      const params = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
        name: searchName.trim()
      };
      getProductList(params).then(res => {
        this.list = res.data.pageInfo.list;
        this.total = res.data.pageInfo.total;
      });
    },
    filterSearch(filterName, cmd) {
      if (filterName !== null && filterName !== "" && filterName.length > 0) {
        console.log("this");
        if (cmd === 1) {
          this.originSelect = filterName;
        } else {
          this.brandSelect = filterName;
        }
        this.search();
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.search();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.search();
    }
  }
};
</script>

<style scoped>
.box {
  margin: 0 auto;
  padding-top: 80px;
  width: 100%;
}

.searchBox {
  margin: 0 auto;
  width: 50%;
  position: relative;
}

.searchInput {
  width: 80%;
  height: 40px;
}

.searchButton {
  width: 20%;
  height: 40px;
}
</style>
