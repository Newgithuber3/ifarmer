
<template >
  <div>
  <div>欢迎来到惠农云创！</div>
  <div class="cover">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">商品搜索列表</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的订单</template>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="#"></a>我的购物车</el-menu-item>
      <i class="el-icon-goods"></i>
    </el-menu>
  </div>
  <el-container>
    <el-header>
      <div class="nav">
        <el-input v-model="input" placeholder="请输入你想要的商品"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <div class="nav-c">
        <div class="head">
          <h4>
            <span class="title" title="省份">省份：</span>
          </h4>
        </div>
        <div class="body">
          <div class="row J_Row row-first" id="J_NavCommonRow_0">
              <div class="items items-show2line J_Items">
                <div class="items-inner g-clearfix" id="J_NavCommonRowItems_0">
                  <a href="#" target="_blank" title="山东">
                  <span class="text">山东</span>
              </a>
                  <a href="#" target="_blank">
                    <span class="text">山东</span>
                  </a>
                  <a href="#" target="_blank" >
                    <span class="text">河南</span>
                  </a>
                  <a href="#" target="_blank" >
                    <span class="text">江西</span>
                  </a>
                  <a href="#" target="_blank" >
                    <span class="text">山西</span>
                  </a>
                  <a href="#" target="_blank" >
                    <span class="text">安徽</span>
                  </a>
                  <a href="#" target="_blank" >
                    <span class="text">云南</span>
                  </a>
                  <a href="#" target="_blank" >
                  <span class="text">辽宁</span>
                </a>
            </div>
          </div>
        </div>
        </div>
        <div class="foot">
          <span class="show-more J_ToggleItems">更多<span class="icon-btn-arrow-down-2">
          </span>
          </span>
          <span class="show-less J_ToggleItems">收起<span class="icon-btn-arrow-up-2">
          </span>
          </span>
        </div>
        <div class="row J_Row " id="J_NavCommonRow_1">
          <div class="head">
            <h4>

              <span class="title" title="农产品分类">农产品分类：</span>
            </h4>
              </div>
          <div class="body">
            <div class="items-inner g-clearfix" id="J_NavCommonRowItems_1">

              <a  href="#"   target="_blank">
                <span class="text">蔬菜</span>
              </a>
              <a  href="#"   target="_blank">
                <span class="text">水果</span>
              </a>
              <a  href="#"   target="_blank">
              <span class="text">牲畜</span>
            </a>
              <a  href="#"   target="_blank">
                <span class="text">家禽</span>
              </a>
              <a  href="#"   target="_blank">
                <span class="text">化肥</span>
              </a>
              <a  href="#"   target="_blank">
                <span class="text">种子</span>
              </a>
              <a  href="#"   target="_blank">
                <span class="text">粮食</span>
              </a>
            </div>
        </div>
          <div class="foot">
          <span class="show-more J_ToggleItems">更多<span class="icon-btn-arrow-down-2">
          </span>
          </span>
            <span class="show-less J_ToggleItems">收起<span class="icon-btn-arrow-up-2">
          </span>
          </span>
          </div>
      </div>

      </div>
    </el-header>
      <el-main>
      <div class="itemlists">
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
                     <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>234人付款</div>
                </div>
                       <div class="row_inf">
                         <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                       </div>
                       <div class="row_shop">
                         <a href ="#">
                           <span>XXX店铺名</span>
                         </a>
                       </div>
                       <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=static/images/product/2.jpg/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>1.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">甘草种子颗颗饱满长出肥沃甘草好评不断泡水喝喂牛羊</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">河南</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>5.4/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">散养野山鸡笨柴鸡不打任何激素纯天然肉质鲜美水煮都好吃无需加大料</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">云南</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>1.3/斤</strong>
                  <div>345人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜白菜应季菜纯天然颗颗饱满口感爽滑水嫩涮火锅必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山西</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>65/包</strong>
                  <div>43人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">尿素有机复合肥种庄稼必备不怕烧庄稼提高产量必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">河南</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>1980/头</strong>
                  <div>15人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">优质黄牛拉犁耕地效率高壮硕健康肉质鲜美价格优惠</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">安徽</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>5.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">优质玉米面现磨现发货无任何掺假价格实惠</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">江苏</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src=1.jpg"/>
              <div style="padding: 14px;">
                <div  class="row_price">
                  <span>¥</span>
                  <strong>3.6/斤</strong>
                  <div>24人付款</div>
                </div>
                <div class="row_inf">
                  <a herf="#">新鲜苹果即摘即送果实大又甜颜色鲜红送礼必备</a>
                </div>
                <div class="row_shop">
                  <a href ="#">
                    <span>XXX店铺名</span>
                  </a>
                </div>
                <div class="location">山东</div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button"><a href="#"></a>查看</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      </el-main>
    <el-footer>
      Scroll down to see the bottom-right button.
      <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
    </el-footer>
  </el-container>
  </div>
</template>

<script>
name: "product_main"
export default {
};

</script>

<style scoped>
.el-menu{
  background-color:#42b983;
  text-color: #fff
  active-text-color：#ffd04b
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.ul{
  width:700px;
  height:50px;
  list-style: none;
  float: left;
  margin:0;
  padding:0;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
