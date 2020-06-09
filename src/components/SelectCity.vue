<script>

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    popular_cities: {
      type: Array,
      default() {
        return []
      }
    },
    city: {
      type: Array,
      default() {
        return []
      }
    },
    isError: {
      type: Boolean,
      default: false
    },
  },

  data() {
    return {
      show: false,
      value: null,
      search_item: '',
      selected_city: [],
      open: true,
    };
  },
  computed:{

  },
  
  methods: {
    filterList(search_item) {
      let new_array = null;
      if (search_item[0]){
        new_array =[
        { 
          letter: search_item[0].toUpperCase(), 
          name:[] 
        }];
      }else{
        return this.city;
      }
      
      for (let stack_city of this.city){
        if (stack_city.letter==search_item[0].toUpperCase()){
          for (let name_city of stack_city.name){
            if (name_city.toUpperCase().indexOf(search_item.toUpperCase()) !== -1) {
              new_array[0].name.push(name_city);
            }
          }
        }
      }
      return new_array;
    },
    
    keyUp(e) {
      if (e.keyCode == 27) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
      }
    },
    showList() {
      document.addEventListener('click', this.hideList);
      document.addEventListener('keyup', this.keyUp);
      this.$emit('zedIndex');
      var container = this.$el.querySelector(".base-select-list");
      container.scrollTop = container.scrollHeight;
    },
    hideList(e) {
      if (e.target !== this.$el) {
        this.show = false;
        document.removeEventListener('click', this.hideList);
        document.removeEventListener('keyup', this.keyUp);
        this.search_item = '';
      }
    },
    setData(item) {
      this.value = item;
      this.$emit('input', this.value);
      this.show = false;
    },
    closeList() {
      this.show = false;
    }
  },
};
</script>

<template>
  
  <div class="base-select" >
    <span class="base-select__overlay" @click.stop="show = !show; showList();">
      <label for="value" class="base-select__label">{{ label }}</label>
      <!--:name="name" -->
      <input 
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

    <transition name="base-select-fade" v-if="show" >
      
      <!--<div class="base-select-list base-select__list">-->
      <div class="base-select-list base-select__list" @click.stop="hideList()" v-scroll-lock="open">
        <div class="base-select-list__back" @click="closeList()">
          <svg class="base-select-list__back-img" width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM22 7L1 7V9L22 9V7Z" fill="white"/>
          </svg>
          Назад
        </div>
        
        
        <template>
          <!--<div class="scroll-overlay" >-->
            <div class="scroll">
              
              <div class="base-select-list__header">
            <input type="text" placeholder="Введите название города" class="base-select-list__search" v-model="search_item">
            
            <div class="base-select-list__top-city top-city">
              <div class="top-city__title">Популярные города</div>
              <div class="top-city__name">
                <div class="top-city__name-item" v-for="item in popular_cities" :key="item.id" @click="setData(item)">{{ item }}</div>
              </div>
            </div>
            
          </div>
          
              <div class="base-select-list__list-item">
            <div class="base-select-list__group" v-for="item in filterList(search_item)" :key="item.id">
              <div class="base-select-list__group-title">{{ item.letter }}</div>
              <div class="base-select-list__group-item" v-for="name_item in item.name" :key="name_item" @click="setData(name_item)">{{ name_item }}</div>
            </div>
          </div>
          
            </div>
          <!--</div>-->
        </template>
      </div>
      
    </transition>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.base-select {
  z-index: 1000;
  width: 100%;
  margin-top: 30px;
  
  &__overlay {
    position: relative;
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
    cursor: pointer;

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
    
    &-mobile {
      display: none;
    }
    
    &-desktop {
      width: 16px;
      height: 16px;
      &.is_open {
        transform: rotate(-90deg);
      }
    }
  }

  &__list {
    width: 100%;
    max-width: 1030px;
    max-height: 90vh;
    margin-bottom: 20px;
    height: auto;
    position: absolute;
    overflow-y: auto;
    z-index: 11000;
    left: 3px;
    top: 80px;
    background: @white;
    border: 1px solid #DED4D4;
    z-index: 1000;
    padding: 45px;
  }
  
}

.base-select-list {
  &:before {
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    content: '';
    left: 0;
    top: 157px;
    background: #DED4D4;
  }
  
  &__header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 80px;
  }
  
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
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 180px;
    padding-left: 10px;
    height: 40px;
    font-size: 16px;
    line-height: 16px;
    font-family: @bold;
    color: @black;
    text-align: left;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background-color: #f2f9fc;
    }
  }
  
  .top-city {
    &__title {
      font-size: 18px;
      font-family: @bold;
      color: @black;
      margin-bottom: 20px;
    }
    &__name {
      display: flex;
      flex-direction: row;
      font-size: 18px;
      color: @blue;
      &-item {
        margin-right: 25px;
        cursor: pointer;
        padding-bottom: 5px;
        &:hover {
          border-bottom: 1px dashed @blue;
          padding-bottom: 4px;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  
  &__list-item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 1200px;
    max-width: 1020px;
  }
  
  
  
  &__group {
    margin-bottom: 50px;
    width: 100%;
    max-width: 240px;
    
    &:last-child {
      margin-bottom: 30px;
    }
    &-title {
      font-size: 20px;
      font-family: @bold;
      color: @black;
      margin-bottom: 18px;
    }
    &-item {
      font-size: 18px;
      color: @blue;
      cursor: pointer;
      margin-bottom: 16px;
      width: max-content;
      padding-bottom: 5px;
      &:hover {
        border-bottom: 1px dashed @blue;
        padding-bottom: 4px;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  
  &__search {
    width: 100%;
    max-width: 415px;
    min-width: 250px;
    min-height: 65px;
    border: 2px solid #CBE7F5;
    border-radius: 30px;
    padding-left: 32px;
    padding-right: 32px;
    outline: none;
    color: @light-black;
    font-size: 18px;
    margin-right: 125px;
  }
  &__search[type="text"]::-moz-placeholder { color: @light-black; font-size: 18px; font-family: @font-Muller; }
  &__search[type="text"]::-webkit-input-placeholder { color: @light-black; font-size: 18px; font-family: @font-Muller;}
  &__search[type="text"]:-ms-input-placeholder { color: @light-black; font-size: 18px; font-family: @font-Muller;}
  &__search[type="text"]::-ms-input-placeholder { color: @light-black; font-size: 18px; font-family: @font-Muller;}
  &__search[type="text"]::placeholder { color: @light-black; font-size: 18px; font-family: @font-Muller;}
 
}

@media (max-width: 1170px) {
  .base-select-list__header {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 80px;
    margin-bottom: 30px;
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
  
  /*.scroll-overlay {*/
  /*  width: 100%;*/
  /*  position: static;*/
  /*  left: 0;*/
  /*  overflow: hidden;*/
  /*  top: 96px;*/
  /*  right: 0;*/
  /*  bottom: 0;*/
  /*  z-index: 900;*/
  /*  background: @white;*/
  /*  padding-bottom: 30px;*/
  /*}*/
  /*.scroll {*/
  /*  width: 586px;*/
  /*  height: 100%;*/
  /*  max-height: 250px;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  position: fixed;*/
  /*}*/
  
  /*.scroll-overlay {*/
  /*  position: fixed;*/
  /*  background: @blue;*/
    /*overflow-y: scroll;*/
  /*}*/
  /*.scroll {*/
  /*  width: 100%;*/
  /*  max-height: 100%;*/
  /*  min-height: 740px;*/
    /*position: absolute;*/
  /*  top: 80px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  bottom: 0;*/
  /*  background: @blue;*/
  /*  overflow-y: scroll;*/
  /*}*/
  
  
  
  .base-select__list {
    max-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    background: @blue;
    left: -16px;
    top: -90px;
    padding: 0px;
    border: none;
    &:before {
      display: none;
    }
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
  .base-select__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-right: 0px;
  }
  .base-select-list__top-city {
    width: 100%;
  }
  .base-select-list__list-item {
    flex-wrap: nowrap;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 80px;
    max-height: 100%;
    height: 100%;
  }
  .base-select-list__group {
    max-width: max-content;
  }
  .base-select-list__group-title {
    color: @white;
  }
  .base-select-list__group-item {
    color: @white;
    width: max-content;
    &:hover, &:active {
      color: @white;
      border-bottom: 1px dashed @white;
    }
  }
  .base-select-list__search {
    max-width: 288px;
    min-height: 43px;
    border: none;
    font-size: 16px;
    color: @blue;
    background: #EFEFEF;
    margin-bottom: 30px;
  }
  .base-select-list__search[type="text"]::-moz-placeholder { color: @blue; font-size: 16px; text-align: center;}
  .base-select-list__search[type="text"]::-webkit-input-placeholder { color: @blue; font-size: 16px; text-align: center;}
  .base-select-list__search[type="text"]:-ms-input-placeholder { color: @blue; font-size: 16px; text-align: center;}
  .base-select-list__search[type="text"]::-ms-input-placeholder { color: @blue; font-size: 16px; text-align: center;}
  .base-select-list__search[type="text"]::placeholder { color: @blue; font-size: 16px; text-align: center;}
  
  .base-select-list .top-city__title {
    display: none;
  }
  .base-select-list .top-city__name {
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid @white;
  }
  .base-select-list .top-city__name-item {
    font-size: 18px;
    color: @white;
    margin-bottom: 25px;
    margin-right: 0px;
    width: max-content;
    &:hover, &:active {
      color: @white;
      border-bottom: 1px dashed @white;
    }
  }
}


</style>
