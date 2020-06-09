<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    },
    index: {
      type: Number,
      default: null
    },
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeItem: this.active
    };
  },
  computed: {},
  mounted() {
    this.changeItem(this.active);
  },
  methods: {
    changeItem(index) {
      this.activeItem = index;
      this.$emit('input', index);
    }
  }
};
</script>

<template>
  <div class="base-switch">
    <div
      v-for="(item, index) in items"
      :class="{ is_active: activeItem === index }"
      :key="index"
      class="base-switch__item"
      @click="changeItem(index)">
      {{ item }}
      
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.base-switch {
    display: flex;
    flex-direction: row;
    
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 48px;
      border: 2px solid #4C85F7;
      border-radius: 100px;
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: @blue;
      cursor: pointer;
      position: relative;
      margin-right: 10px;
      
      &.is_active {
        color: @white;
        background: @blue;
      }
    }
  }
  
  @media (max-width: 1024px) {
  .base-switch {
    flex-wrap: wrap;
  }
  .base-switch__item {
    width: 242px;
    margin-bottom: 10px;
  }
}
</style>
