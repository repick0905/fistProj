<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info ref="recommend" :recommend-info="recommendInfo"></detail-recommend-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";

import Scroll from "@/components/common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam
} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendInfo: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommend();
  },
  methods: {
    //网络请求方法
    getDetail() {
      return getDetail(this.iid).then(res => {
        const data = res.result;

        //1.获取轮播图的信息
        this.topImages = data.itemInfo.topImages;

        // 2.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo);

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );

        //6.取出评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      return getRecommend().then(res => {
        this.recommendInfo = res.data.list;
        console.log(this.recommendInfo);
        console.log(this.recommendInfo[0].image);
      });
    },

    imageLoad() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.detail-content {
  height: calc(100% - 44px);
}
</style>