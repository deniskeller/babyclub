<script>

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      show: false,
      value: null
    };
  },

  methods: {
    keyUp(e) {
      if (e.keyCode == 27) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
        this.$emit('zedIndexLow');
      }
    },
    showList() {
      document.addEventListener('click', this.hideList);
      document.addEventListener('keyup', this.keyUp);
      this.$emit('zedIndexUp');
    },
    hideList(e) {
      if (e.target !== this.$el) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
        this.$emit('zedIndexLow');
      }
    },
    setData(item) {
      this.value = item.club;
      this.$emit('input', this.value);
      this.show = false;
      this.$emit('zedIndexLow');
    },
    closeList() {
      this.show = false;
      this.$emit('zedIndexLow');
    }
  }
};
</script>

<template>
  <div  class="base-select">
    <span class="base-select__overlay" @click.stop="show = !show; showList();">
      
      <label for="value" class="base-select__label">{{ label }}</label>
      <input 
        :name="name" 
        :value="value" 
        type="hidden" >

      <div
      v-if="!value"
      :class="{ is_error: isError }"
      class="base-select__input"
    >
      <slot />
    </div>

      <div
        v-else-if="value"
        :class="{ is_error: isError }"
        class="base-select__input"
      >
        {{ value }}
      </div>
    
      <span class="base-select__icon">
        <img :class="{ is_open: show }" class="base-select__icon-desktop" src="@/assets/img/select.svg" alt="">
        <img class="base-select__icon-mobile" src="@/assets/img/arrow-next.svg" alt="">
      </span>
    </span>
    <transition name="base-select-fade">
      <div 
        v-if="show" 
        class="base-select-list base-select__list" @click.stop="hideList();">
        
        
        
        <template>
          
          <div class="scroll">
              <div class="base-select-list__back" @click="closeList()">
                <svg class="base-select-list__back-img" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM22 7L1 7V9L22 9V7Z" fill="white"/>
                </svg>
                Назад
              </div>
              <div
                  v-for="(item, index) in list"
                  :key="index"
                  class="base-select-list__item"
                  @click="setData(item)"
                >
                  
                  <template>
                    <div class="base-select-list__item-text">
                      {{ item.club }}
                    </div>
                  </template>
                  <span class="base-select-list__icon" v-if="item.english">
                    <img src="@/assets/img/english.svg" alt="">
                  </span>
                </div>
            </div>
          
        </template>
      </div>
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";
.scroll-overlay {
  width: 100%;
  position: static;
  left: 0;
  overflow: auto;
  top: 96px;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: @white;
  padding-bottom: 30px;
}
.scroll {
  width: 586px;
  height: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.base-select {
  position: relative;
  width: 100%;
  margin-top: 30px;
  
  &__overlay {
    position: relative;
    z-index: 1000;
    width: 100%;
    display: block;
    padding-right: 33px;
    cursor: pointer;
  }
  
  &__label {
    position: absolute;
    top: -17px;
    z-index: 1000;
    font-size: 12px;
    color: @grey;
    letter-spacing: 0;
    white-space: nowrap;
  }

  &__input {
    font-size: 16px;
    line-height: 16px;
    font-family: @bold;
    color: @black;
    pointer-events: none;
    white-space: nowrap;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 20px;
    border-bottom: 1px dashed #FF9149;

    &.is_error {
      border-color: @red;
    }
  }
  
  &__icon {
    position: absolute;
    top: 14px;
    right: 0px;
    transform: translateY(-50%);
    transition: fill 0.1s;
    &-desktop{
      display: block;
      &.is_open {
        transform: rotate(-90deg);
      }
    }
    &-mobile {
      display: none;
    }
  }

  &__list {
    position: absolute;
    z-index: 1000;
    top: 33px;
    height: auto;
    position: absolute;
    overflow-y: auto;
    background-color: @white;
    border: 1px solid #DED4D4;
    z-index: 200000;
    padding: 25px;
  }
  
}

.base-select-list {
  
  &__back {
    display: none;
    width: 100%;
    position: fixed;
    top: 96px;
    left: 0;
    font-size: 14px;
    line-height: 33px;
    color: @white;
    text-transform: uppercase;
    cursor: pointer;
    padding: 8px 16px 6px 50px;
    z-index: 100020;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    background: @blue;
    &-img {
      position: absolute;
      left: 16px;
      top: 31%;
      transform: rotate(0deg);
      &:path {
        stroke: @white;
      }
    }
  }

  &__item {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
    white-space: nowrap;
    max-width: 180px;
    padding-left: 10px;
    position: relative;
    &-text {
      width: max-content;
    }
  }
  
  &__icon {
    margin-left: 10px;
    img{
      width: 20px;
      height: 20px;
    }
  }
 
}

@media (max-width: 1170px) {
  .base-select__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 0px;
  }
  .base-select__icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: @blue;
    border-radius: 100px;
    transform: translateY(0%);
    top: 2px;
    right: 2px;
    &-desktop{
      display: none;
    }
    &-mobile {
      display: flex;
      width: 13px;
      height: 11px;
    }
  }
  .scroll-overlay {
    position: fixed;
    height: 100%;
    background: @blue;
  }
  .scroll {
    width: 100%;
    max-height: 100%;
    min-height: 840px;
    height: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: @blue;
  }
  .base-select__list {
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    background: #4C85F7;
    left: -16px;
    top: -30px;
    padding: 0px;
    border: none;
  }
  .base-select-list__back {
    display: block;
  }
  .base-select-list__item {
    font-size: 18px;
    color: @white;
    font-family: @font-Muller;
    margin-left: 16px;
    padding-left: 0px;
    &:hover {
      .base-select-list__item-text {
        border-bottom: 1px dashed @white;
        width: max-content;
      }
    }
  }
  .base-select__label {
    display: none;
  }
  .base-select__input {
    color: @blue;
    border-bottom: none;
    justify-content: center;
  }
  
}

</style>
