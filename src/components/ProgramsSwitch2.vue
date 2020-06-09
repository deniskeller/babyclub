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
  flex-wrap: wrap;
  
  &__item {
    width: 244px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid @white;
    border-radius: 100px;
    font-size: 16px;
    color: @white;
    cursor: pointer;
    margin-right: 15px;
    &:last-child {
      margin-right: 0px;
    }
    &.is_active {
      background: @white;
      color: @red;
    }
  }
}

@media (max-width: 768px) {
  .base-switch {
    flex-direction: column;
  }
  .base-switch__item {
    width: 288px;
    margin-right: 0px;
    margin-bottom: 11px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
