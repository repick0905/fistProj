<template>
  <div class="tab-bar-item" @click="clickbtn">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="getColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isClick: false
    };
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#d81e06"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.includes(this.path);
    },
    getColor() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    clickbtn() {
      this.$router.replace(this.path).catch(err => {});
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  /* font-weight: 300; */
}
.tab-bar-item img {
  height: 22px;
  margin-top: 4px;
  margin-bottom: 1px;
  vertical-align: middle;
}
</style>