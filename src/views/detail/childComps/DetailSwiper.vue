<template>
  <swiper>
    <div class="swiper-slide" :key="item" v-for="item in topImages">
      <img :src="item" />
    </div>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-slide {
  height: 300px;
}
</style>