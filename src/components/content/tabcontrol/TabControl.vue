<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{active:curIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      curIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.curIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background: #ffffff;
}
.tab-control .active span {
  color: #d81e06;
  border-bottom: 3px solid #d81e06;
}
.tab-control .tab-control-item span {
  padding: 5px;
}
.tab-control-item {
  flex: 1;
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
</style>