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
        <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-2.svg" alt="">
      </span>
      
      <img class="base-switch__img-active" src="@/assets/img/key.svg" alt="">
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.base-switch {
  display: flex;
  flex-direction: column;
  
  &__bg-active {
    display: none;
    width: 160px;
    height: 160px;
    position: absolute;
    top: -34px;
    right: -11px;
    -webkit-transform: rotate(-15.71deg);
    transform: rotate(3.29deg)
  }
  &__img-active {
    display: none;
    width: 51px;
    height: 65px;
    position: absolute;
    left: -62px;
    top: 15px;
  }
  
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 238px;
    height: 91px;
    background: #F3F7FF;
    border-radius: 100px;
    text-align: center;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: @black;
    cursor: pointer;
    margin-bottom: 5px;
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
      .base-switch__img-active {
        display: block;
      }
      .base-switch__bg-active {
        display: block;
      }
    }
  }
}
</style>
