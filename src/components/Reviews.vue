<script>
import ReviewsSwitch from './ReviewsSwitch.vue';
export default {
  components: {
    ReviewsSwitch
  },
  props: {
    videos: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      index: 0,
      activeItem: 1,
      switch_items: [
        'Дети',
        'Родители',
        'Сотрудники',
        'Выпускники',
        'Владельцы клубов'
      ],
      swiperOptionMobile: {
        spaceBetween: 22,
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    };
  },
  computed: {
    show_this_activetab(){
      switch (this.index) {
        case 0:
          return 1;
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 4;
        case 4:
          return 5;
      }
      return 1;
    },
    show_this_activetab_mobile(){
      switch (this.activeItem) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
        case 5:
          return 5;
      }
      return 1;
    },
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="reviews-content">
      
      <div class="reviews-content-left">
        <div class="reviews-content-left__subtitle">Что думают детки <br> о нашем Бэби-клубе?
          <img class="arrow-to" src="@/assets/img/arrow-to-2.svg" alt="">
        </div>
        <div class="reviews-content-left__title">Отзывы</div>
        
        
        
        <div class="mobile-reviews">
          
          <div class="mobile-reviews__item">
            <div class="mobile-reviews__item-switch" @click="setActive(1)" :class="{ active: isActive(1) }">Дети
              <img class="bg-active" src="@/assets/img/bg-mobile-switch.svg" alt="">
            </div>
            <div class="mobile-reviews__item-slider" v-if="show_this_activetab_mobile === 1">
              <swiper :options="swiperOptionMobile" class="slider">
                <swiper-slide v-for="(item, i) in videos.tab1" :key="i">
                  <div class="video-item">
                    <iframe width="100%" height="100%" :src="videos.tab1[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="video-buttons">
                <div class="swiper-button-prev" slot="button-prev">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          
          <div class="mobile-reviews__item">
            <div class="mobile-reviews__item-switch" @click="setActive(2)" :class="{ active:isActive(2) }">Родители
              <img class="bg-active" src="@/assets/img/bg-mobile-switch.svg" alt="">
            </div>
            <div class="mobile-reviews__item-slider" v-if="show_this_activetab_mobile === 2">
              <swiper :options="swiperOptionMobile" class="slider">
              
                <swiper-slide v-for="(item, i) in videos.tab2" :key="i">
                  <div class="video-item">
                    <iframe width="100%" height="100%" :src="videos.tab2[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </swiper-slide>
              </swiper>
              <div class="video-buttons">
                <div class="swiper-button-prev" slot="button-prev">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          
          <div class="mobile-reviews__item">
            <div class="mobile-reviews__item-switch" @click="setActive(3)" :class="{ active:isActive(3) }">Сотрудники
              <img class="bg-active" src="@/assets/img/bg-mobile-switch.svg" alt="">
            </div>
            <div class="mobile-reviews__item-slider" v-if="show_this_activetab_mobile === 3">
              <swiper :options="swiperOptionMobile" class="slider">
              
                <swiper-slide v-for="(item, i) in videos.tab3" :key="i">
                  <div class="video-item">
                    <iframe width="100%" height="100%" :src="videos.tab3[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </swiper-slide>
                    
              </swiper>
              <div class="video-buttons">
                <div class="swiper-button-prev" slot="button-prev">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          
          <div class="mobile-reviews__item">
            <div class="mobile-reviews__item-switch" @click="setActive(4)" :class="{ active:isActive(4) }">Выпускники
              <img class="bg-active" src="@/assets/img/bg-mobile-switch.svg" alt="">
            </div>
            <div class="mobile-reviews__item-slider" v-if="show_this_activetab_mobile === 4">
              <swiper :options="swiperOptionMobile" class="slider">
              
                <swiper-slide v-for="(item, i) in videos.tab4" :key="i">
                  <div class="video-item">
                    <iframe width="100%" height="100%" :src="videos.tab4[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </swiper-slide>
                    
              </swiper>
              <div class="video-buttons">
                <div class="swiper-button-prev" slot="button-prev">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          
          <div class="mobile-reviews__item">
            <div class="mobile-reviews__item-switch" @click="setActive(5)" :class="{ active:isActive(5) }">Владельцы клубов
              <img class="bg-active" src="@/assets/img/bg-mobile-switch.svg" alt="">
            </div>
            <div class="mobile-reviews__item-slider" v-if="show_this_activetab_mobile === 5">
              <swiper :options="swiperOptionMobile" class="slider">
              
                <swiper-slide v-for="(item, i) in videos.tab5" :key="i">
                  <div class="video-item">
                    <iframe width="100%" height="100%" :src="videos.tab5[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </swiper-slide>
                    
              </swiper>
              <div class="video-buttons">
                <div class="swiper-button-prev" slot="button-prev">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        
        <ReviewsSwitch 
          class="reviews-content-left__switch-item"
          :items="switch_items"
          v-model="index"
          :index="index"/>
          
        <div class="reviews-content-left__text">
          <p class="mobile-hidden">Позитивные отзывы нас вдохновляют, <br> негативные - мотивируют искать ошибки <br> и становиться еще лучше!</p>
          <br>
          <p class="reviews-content-text">Присылайте нам свои отзывы <a href="mailto:">на почту</a>, <br class="mobile-hidden"> в мессенджеры или карты <span class="blue">:)</span></p>
        </div>
        
        <div class="reviews-content-left__map">
          <a href="https://goo.gl/maps/DBWg9H7JUcqwjNBa6" class="map-item" aria-label="goo" target="blank">
            <img src="@/assets/img/google-map.svg" alt="">
          </a>
          <a href="https://yandex.ru/maps/?from=api-maps&ll=-0.000000%2C0.000000&mode=routes&origin=jsapi_2_1_75&rtext=~0.000000%2C0.000000&rtt=auto&ruri=~&z=2" class="map-item" aria-label="ymaps" target="blank">
            <img src="@/assets/img/yandex-map.svg" alt="">
          </a>
        </div>
        
      </div>
      
      <div class="reviews-content-right" v-if="show_this_activetab === 1">
        
        <div v-for="(item, i) in videos.tab1" :key="i" class="video-item">
          <iframe width="100%" height="100%" :src="videos.tab1[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
      <div class="reviews-content-right" v-if="show_this_activetab === 2">
        
        <div v-for="(item, i) in videos.tab2" :key="i" class="video-item">
          <iframe width="100%" height="100%" :src="videos.tab2[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
      <div class="reviews-content-right" v-if="show_this_activetab === 3">
        
        <div v-for="(item, i) in videos.tab3" :key="i" class="video-item">
          <iframe width="100%" height="100%" :src="videos.tab3[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
      <div class="reviews-content-right" v-if="show_this_activetab === 4">
        
        <div v-for="(item, i) in videos.tab4" :key="i" class="video-item">
          <iframe width="100%" height="100%" :src="videos.tab4[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
      <div class="reviews-content-right" v-if="show_this_activetab === 5">
        
        <div v-for="(item, i) in videos.tab5" :key="i" class="video-item">
          <iframe width="100%" height="100%" :src="videos.tab5[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.mobile-reviews__item-switch {
  margin: 0 auto 17px;
}

.reviews-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 58px;
  padding-bottom: 58px;
  
  .mobile-reviews {
    display: none;
    &__item {
      &-switch {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 287px;
        height: 46px;
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
        .bg-active {
          display: none;
        }
        &.active {
          color: @white;
          background: @red;
          position: relative;
          .bg-active {
            display: block;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
      
      &-slider {
        margin-bottom: 18px;
        .slider {
          .swiper-slide {
            width: 264px;
            height: 188px;
            border-radius: 30px;
            .video-item {
              width: 264px;
              height: 188px;
              border-radius: 30px;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  
  .reviews-content-left {
    position: relative;
    width: 100%;
    max-width: 453px;
    
    &__subtitle {
      font-size: 18px;
      font-family: @font-Tagir;
      color: @blue;
      margin-bottom: 10px;
      position: relative;
      z-index: 1000;
      .arrow-to {
        position: absolute;
        top: 25px;
        left: -65px;
      }
    }
    
    &__title {
      font-size: 30px;
      line-height: 32px;
      font-family: @bold;
      text-transform: uppercase;
      color: @black;
      width: 100%;
      max-width: 400px;
      margin-bottom: 28px;
      position: relative;
      z-index: 1000;
    }
    
    &__switch-item {
      margin-bottom: 30px;
    }
    
    &__text {
      margin-bottom: 30px;
      p {
        font-size: 16px;
        line-height: 26px;
        font-weight: 500;
        color: @light-black;
        a {
          color: @blue;
          text-decoration: none;
          border-bottom: 1px dashed;
        }
        .blue {
          color: @blue;
        }
      }
    }
    
    &__map {
      width: 100%;
      max-width: 334px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .map-item {
        width: 161px;
        height: 52px;
        cursor: pointer;
        border: 1px solid #C9C9C9;
        border-radius: 6px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          width: 139px;
          height: 39px;
        }
      }
    }
    
  }
  
  .reviews-content-right {
    width: 100%;
    max-width: 618px;
    height: 460px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .video-item {
      width: 300px;
      height: 213px;
      /*margin-bottom: 20px;*/
      border-radius: 25px;
      overflow: hidden;
    }
  }
}

.video-buttons {
  display: none;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
}

.swiper-button-prev, .swiper-button-next {
  position: static;
  background: @white;
  width: 59px;
  height: 59px;
  border-radius: 100px;
  outline: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &__img {
    width: 21px;
    height: 17px;
  }
}
.swiper-button-prev {
  margin-right: 15px;
  &__img {
    transform: rotate(180deg);
  }
}

@media (max-width: 1200px) {
  .reviews-content {
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;
  }
  .reviews-content .reviews-content-left {
    margin-left: 70px;
    margin-top: 30px;
    order: 1;
  }
}

@media (max-width: 768px) {
  .reviews-content {
    justify-content: flex-start;
    padding-right: 0px;
    padding-left: 0px;
  }
  
  .reviews-content-text {
    text-align: center;
  }
  
  .reviews-content .reviews-content-left {
    margin-left: 0px;
    max-width: 100%;
  }
  .reviews-content .reviews-content-right {
    display: none;
  }
  .reviews-content .reviews-content-left__subtitle {
    padding-left: 16px;
  }
  .reviews-content .reviews-content-left__title {
    padding-left: 16px;
  }
  .reviews-content .reviews-content-left__subtitle .arrow-to {
    display: none;
  }
  .reviews-content .reviews-content-left__switch-item {
    display: none;
  }
  .reviews-content .reviews-content-left__text {
    max-width: 240px;
    margin: 0 auto 20px;
  }
  .reviews-content .reviews-content-left__text .mobile-hidden {
    display: none;
  }
  .reviews-content .mobile-reviews {
    display: block;
    padding-left: 16px;
  }
  .reviews-content .reviews-content-left__map {
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
  }
  .reviews-content .reviews-content-left__map .map-item {
    width: 288px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
  
  .video-buttons {
    display: flex;
  }
}

</style>
