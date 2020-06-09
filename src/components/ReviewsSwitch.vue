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
      <span class="img-overflow">
        <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-3.svg" alt="">
      </span>
      
    </div>
    <div class="base-switch__item base-switch__item-hidden"></div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.base-switch {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  
  &__bg-active {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
  }
  
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 140px;
    height: 48px;
    background: #F3F7FF;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    color: @black;
    cursor: pointer;
    margin-bottom: 17px;
    padding-left: 40px;
    padding-right: 40px;
    position: relative;
    .img-overflow {
      width: 100%;
      height: 100%;
      border-radius: 100px;
      position: absolute;
      overflow: hidden;
    }
    &.is_active {
      color: @white;
      background: @red;
     
      .base-switch__bg-active {
        display: block;
      }
    }
  }
  
  &__item-hidden {
    height: 0;
  }
}
</style>
