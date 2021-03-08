<template>
  <div>
    <el-row>
      <el-col style="height: 150px" v-for="(item, index) of addressList" :key="index" :span="6">
        <label class="myRadio">
          <input type="radio" v-model="select" :value="item.id" />
          <el-card class="address">
            <span
              >{{ item.username }}收&nbsp;{{ item.telephone }}<br />
              {{ item.address }}
              {{ item.detailAddress }}
            </span>
          </el-card>
        </label>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    addressList: {
      type: Array,
      default() {
        return [];
      }
    },
    select: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
    };
  },
  watch: {
    picked() {
      console.log("changed");
    }
  }
};
</script>

<style scoped>
.myRadio {
  width: 80%;
  margin-left: 10%;
  margin-bottom: 0.2rem;
  display: block;
  cursor: pointer;
}

.myRadio input[type="radio"] {
  outline: none;
  display: none;
}

.myRadio input[type="radio"] + span {
  color: black;
  display: block;
  width: 100%;
  height: 0.7rem;
  background: #ffffff;
  border-radius: 0.103rem;
  box-shadow: 3px 5px 4px 0 rgba(189, 188, 188, 0.36);
  font-size: 0.35rem;
  line-height: 0.7rem;
  text-indent: 0.2rem;
}

.myRadio input[type="radio"]:checked + .address {
  background-color: #55ccfe;
  color: white;
}

p {
  font-size: 0.2rem;
}
</style>
