<template>
  <swiper>
    <div class="swiper-slide" :key="item.link" v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="swiperLoaded" />
      </a>
    </div>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    swiperLoaded() {
      if (!this.isLoad) {
        this.$emit("swiperLoaded");
        this.isLoad = true;
      }
    }
  }
};
</script>

<style>
</style>