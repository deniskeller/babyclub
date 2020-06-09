<script>

import SelectClub from './SelectClub.vue';
import SelectCity from './SelectCity.vue';
export default {
  components: {
    SelectClub,
    SelectCity
  },
  props: {
    phones: {
      type: Array,
      default() {
        return []
      }
    },
    defaultClub: {
      type: String,
      default: ""
    },
    clubs: {
      type: Array,
      default() {
        return []
      }
    },
    defaultCity: {
      type: String,
      default: ""
    },
    popular_cities: {
      type: Array,
      default() {
        return []
      }
    },
    cities: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      open: false,
      zedIndex: ''
    };
  },
  computed: {},
  methods: {
    show() {
      this.$emit('show');
    },
    showMap() {
      this.$emit('showMap');
    },
    toggleNav: function() {
      this.open = !this.open;
      this.$emit('toggle', this.open);
    },
    zedIndexUp() {
      return this.zedIndex = 2;
    },
    zedIndexLow() {
      return this.zedIndex = 1;
    },
    closeMenu() {
      this.open = false;
    }
  },
  
};
</script>

<template>
  <div class="header">
    
    <span class="header-desktop">
      <div class="container">
        <div class="header-top">
          <div class="header-top__left-items left-items">
            
            <div class="left-items-logo">
              <div class="left-items-logo__logo">
                <img src="@/assets/img/logo.svg" alt="">
              </div>
              <div class="left-items-logo__text">
                <span class="black">Для детей от </span>8 месяцев до 7 лет
              </div>
            </div>
            
            <div class="left-items-address">
              <div class="address-items">
                <SelectClub
                  label="Клуб"
                  :list="clubs"
                  class="address-items__select">
                  {{ defaultClub }}
                </SelectClub>
                
                <SelectCity
                  label="Город"
                  :popular_cities="popular_cities"
                  :city="cities"
                  class="address-items__select address-items__select-city">
                  {{ defaultCity }}
                </SelectCity>
              </div>
              <div class="address-show-on-map" @click="showMap()">
                <img class="show-on-map__img" src="@/assets/img/show-map.svg" alt="">
                <div class="show-on-map__text">Показать на карте</div>
              </div>
            </div>
            
          </div>
          
          <div class="header-top__right-items right-items">
            <div class="right-items__common-phone common-phone">
              <a :href="phones[0].link" class="common-phone__value bold">{{ phones[0].tel }}</a>
              <div class="common-phone__text">общий телефон клуба</div>
            </div>
            <div class="right-items__call-me-back call-me-back">
              <a :href="phones[1].link" class="call-me-back__value">{{ phones[1].tel }}</a>
              <div class="call-me-back__button" @click="show()">Перезвоните мне</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="header-menu">
        <div class="container">
          <div class="header-menu__nav">
            <router-link class="header-menu__nav-item" to="/#0" v-scroll-to="{ el: '#about_club', offset: -200, }">О клубе</router-link>
            <router-link class="header-menu__nav-item" to="/#1" v-scroll-to="{ el: '#methodology', offset: -150, }">Методика</router-link>
            <router-link class="header-menu__nav-item" to="/#2" v-scroll-to="{ el: '#programs', offset: -50, }">Расписание</router-link>
            <router-link class="header-menu__nav-item" to="/#3" v-scroll-to="{ el: '#staff', offset: -100, }">Преподаватели</router-link>
            <router-link class="header-menu__nav-item" to="/#4" v-scroll-to="{ el: '#reviews', offset: -150, }">Отзывы</router-link>
            <router-link class="header-menu__nav-item" to="/#5" v-scroll-to="{ el: '#contacts', offset: -150, }">Контакты</router-link>
            <router-link class="header-menu__nav-item" to="/#6">Работа</router-link>
          </div>
        </div>
      </div>
    </span>
    
    <div class="header-mobile" >
      
      <div class="header-mobile__top">
        <div class="header-mobile__top-logo">
          <img src="@/assets/img/logo-mobile.svg" alt="">
        </div>
        <div class="header-mobile__top-text">
          Для детей <br> от 8 месяцев <br> до 7 лет
        </div>
      </div>
      
      <div class="header-mobile__burdermenu">
        <div class="header-mobile__phone">
          <a :href="phones[1].link" class="phone">{{ phones[1].tel }}</a>
          <a :href="phones[1].link" class="phone-img">
            <img src="@/assets/img/call.svg" alt="">
          </a>
          <span class="map" @click="showMap()"><img src="@/assets/img/location.svg" alt=""></span>
        </div>
        
        <div :class="['header-mobile__burder', {'header-mobile__burder--open': this.open}]" @click="toggleNav">
          <span class="burger" ></span>
        </div>
      </div>
      
      <div class="menu-wrapper" :class="['menu-wrapper', {'menu-wrapper--open': this.open}]" v-scroll-lock="open">
        <div class="header-mobile__menu">
        
          <SelectClub
            label="Клуб"
            :list="clubs"
            class="header-mobile__menu-club"
            @zedIndexUp="zedIndexUp"
            @zedIndexLow="zedIndexLow"
            :style="{ zIndex: zedIndex }">
            {{ defaultClub }}
          </SelectClub>
          
          <SelectCity
            label="Город"
            :popular_cities="popular_cities"
            :city="cities"
            class="header-mobile__menu-city">
            {{ defaultCity }}
          </SelectCity>
        
          <div class="header-mobile__menu-navbar">
            <router-link class="navbar-item" to="/#0" v-scroll-to="{ el: '#about_club', offset: -200, }" @click.native="closeMenu">О клубе</router-link>
            <router-link class="navbar-item" to="/#1" v-scroll-to="{ el: '#methodology', offset: -50, }" @click.native="closeMenu">Методика</router-link>
            <router-link class="navbar-item" to="/#2" v-scroll-to="{ el: '#programs', offset: -110, }" @click.native="closeMenu">Расписание</router-link>
            <router-link class="navbar-item" to="/#3" v-scroll-to="{ el: '#staff', offset: -110, }" @click.native="closeMenu">Преподаватели</router-link>
            <router-link class="navbar-item" to="/#4" v-scroll-to="{ el: '#reviews', offset: -20, }" @click.native="closeMenu">Отзывы</router-link>
            <router-link class="navbar-item" to="/#5" v-scroll-to="{ el: '#contacts', offset: -95, }" @click.native="closeMenu">Контакты</router-link>
            <router-link class="navbar-item" to="/#6">Работа</router-link>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";
.menu-wrapper {
  display: none;
  // overflow: auto;
  position: fixed;
  width: 100%;
  height: 100%;
}
.menu-wrapper--open {
  display: block;
}
.header {
  position: fixed;
  z-index: 100009;
  width: 100%;
  background: @white;
  
  &-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 116px;
    position: relative;
    .left-items {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      &-logo {
        text-align: center;
        margin-right: 66px;
        &__logo {
          width: 100%;
          max-width: 300px;
          height: 54px;
          margin-bottom: 7px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &__text {
          font-size: 15px;
          font-weight: 600;
          text-transform: uppercase;
          color: @blue;
          .black {
            color: @black;
          }
        }
      }
      
      &-address {
        .address-items {
          display: flex;
          flex-direction: row;
          margin-bottom: 13px;
          &__select {
            width: 100%;
            height: 100%;
            &:first-child {
              margin-right: 42px;
            }
          }
          &__select-city {
            margin-right: 20px;
          }
        }
        .address-show-on-map {
          display: flex;
          flex-direction: row;
          align-items: center;
          cursor: pointer;
          .show-on-map__text {
            font-size: 14px;
            line-height: 14px;
            color: @blue;
            margin-left: 5px;
          }
        }
      }
      
      
    }
    
    .right-items {
      display: flex;
      flex-direction: row;
      height: 116px;
      padding-top: 25px;
      
      .common-phone {
        margin-right: 50px;
        &__value {
          font-size: 16px;
          line-height: 16px;
          color: @grey;
          position: relative;
          text-decoration: none;
          display: block;
          &::before {
            content: '';
            display: block;
            width: 1px;
            height: 19px;
            position: absolute;
            right: -24px;
            top: -3px;
            background: #DED4D4;
          }
          .bold {
            font-family: @bold;
          }
        }
        &__text {
          font-size: 11px;
          line-height: 11px;
          color: #888383;
        }
      }
      
      .call-me-back {
        text-align: center;
        &__value {
          font-size: 18px;
          line-height: 18px;
          font-family: @bold;
          color: @black;
          margin-bottom: 13px;
          text-decoration: none;
          display: block;
        }
        &__button {
          width: 179px;
          height: 43px;
          border-radius: 100px;
          background: @red;
          font-style: normal;
          font-weight: 500;
          font-size: 15px;
          line-height: 15px;
          color: @white;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    
  }
  .link-phone {
    text-decoration: none;
  }
  &-menu {
    height: 60px;
    background: @blue;
    &__nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      min-height: 60px;
      &-item {
        display: flex;
        align-items: center;
        height: 60px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: @white;
        text-transform: uppercase;
        text-decoration: none;
        padding: 0px 27px;
        white-space: nowrap;
        transition-duration: 1s;
        &:hover {
          background: @red;
        }
        &.router-link-exact-active {
          background: @red;
        }
      }
    }
  }
  
  .header-mobile {
    display: none;
    position: relative;
    width: 100%;
    
    &__top {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 47px;
      background: @white;
      &-logo {
        width: 134px;
        height: 24px;
      }
      &-text {
        font-size: 11px;
        line-height: 10px;
        color: @blue;
        margin-left: 25px;
        position: relative;
        &:before {
          position: absolute;
          top: 0;
          left: -8px;
          content: '';
          width: 1px;
          height: 100%;
          background: @blue;
        }
      }
    }
    &__burdermenu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 49px;
      background: @red;
      padding: 0px 16px;
    }
    &__phone {
      display: flex;
      flex-direction: row;
      align-items: center;
      .phone {
        font-size: 15px;
        font-family: @bold;
        color: @white;
        text-decoration: none;
        margin-right: 10px;
      }
      .phone-img, .map {
        width: 35px;
        height: 35px;
        border-radius: 100px;
        background: @blue;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .phone-img {
        margin-right: 12px;
        img {
          width: 15px;
          height: 15px;
        }
      }
      .map {
        img {
          width: 13px;
          height: 17px;
        }
      }
    }
    &__burder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 24px;
      height: 15px;
      cursor: pointer;
      .burger {
        display: block;
        width: 24px;
        height: 2px;
        background: @white;
        position: relative;
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: -7px;
          left: 0;
          width: 24px;
          height: 2px;
          background: @white;
        }
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 7px;
          left: 0;
          width: 24px;
          height: 2px;
          background: @white;
        }
      }
    }
    &__burder--open {
      .burger {
        background-color: transparent;
        &:before {
          width: 31px;
          left: -4px;
					transform: translateY(7px) rotate(45deg);
        }
        &:after {
          width: 31px;
          left: -4px;
          transform: translateY(-7px) rotate(-45deg);
        }
      }
    }
    
    &__menu {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      min-height: 550px;
      background: @blue;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: @white;
      padding: 30px 16px 0px;
      &--open {
        display: flex;
        width: 100%;
        min-height: 560px;
        position: relative;
        overflow: auto;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }
      &-club {
        margin-bottom: 16px;
        z-index: 1;
      }
      &-city {
        z-index: 1;
      }
      &-club, &-city {
        width: 100%;
        max-width: 288px;
        height: 44px;
        border-radius: 100px;
        background: #EFEFEF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        font-size: 16px;
        color: @blue;
        text-decoration: none;
        .img {
          width: 38px;
          height: 38px;
          border-radius: 100px;
          background: @blue;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 3px;
          right: 3px;
          img {
            width: 13px;
            height: 11px;
          }
        }
      }
      
      &-navbar {
        width: 100%;
        margin-top: 45px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    
        .navbar-item {
          font-size: 16px;
          color: @white;
          margin-bottom: 23px;
          text-decoration: none;
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
   
}

@media (max-width: 1170px) {
  .header .header-desktop {
    display: none;
  }
  .header .header-mobile {
    display: block;
  }
  .header .header-mobile__menu-club, .header .header-mobile__menu-city {
    margin-top: 0px;
    padding-right: 0px;
  }
}
</style>
