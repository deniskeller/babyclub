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
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      max-width: 139px;
      height: 24px;
      text-align: center;
      font-weight: 500;
      font-size: 13px;
      line-height: 21px;
      color: @black;
      padding-left: 40px;
      margin-right: 20px;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: '';
        width: 22px;
        height: 22px;
        border-radius: 100px;
        border: 1px solid @black;
      }
      &:last-child {
        margin-right: 0;
      }
      &.is_active {
        color: @blue;
        &:after {
          position: absolute;
          left: 6px;
          top: 6px;
          content: '';
          width: 12px;
          height: 12px;
          background: @blue;
          border-radius: 100px;
        }
        &:before {
          border: 1px solid @blue;
        }
      }
    }
  }
  
@media (max-width: 1024px) {
  .base-switch {
    flex-wrap: wrap;
  }
  .base-switch__item {
    margin-bottom: 10px;
  }
}
</style>
