<template>
  <div>
    <nav-bar>
      <div slot="left" class="back-img" @click="backbtn">
        <img src="~@/assets/img/common/back.svg" alt />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index+item"
          class="title-item"
          :class="{active:curIndex===index}"
          @click="clickbtn(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() { 
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      curIndex: 0
    };
  },
  methods: {
    clickbtn(index) {
      this.curIndex = index;
    },
    backbtn(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: #d81e06;
}
.back-img{
  margin-top: 5px;
}
</style>