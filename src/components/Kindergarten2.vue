<script>
export default {
  components: {},
  props: {
    photos: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        grabCursor: true
      }
    };
  },
  mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
};
</script>

<template>
  <div class="kindergarten">
    <img class="kindergarten__img" src="@/assets/img/bg-line-1.svg" alt="">
    
    <div class="container">
      
      <div class="kindergarten__content">
        
        <div class="kindergarten-text-content">
          <div class="kindergarten-text-content__subtitle">Для детей от 2,5 лет</div>
          <div class="kindergarten-text-content__title">БЭБИ-САД</div>
          <div class="kindergarten-text-content__text">Интеллектуальное и коммуникативное развитие личности ребенка (группа кратковременного пребывания)</div>
          <div class="kindergarten-text-content__age-group age-group">
            <div class="age-group__title">Возраст:</div>
            <div class="age-group__age-items">
              <div class="age-item">
                <div class="age-item__title">2,5-3,5 года</div>
                <div class="age-item__subtitle">младшая группа</div>
              </div>
              <div class="age-item">
                <div class="age-item__title">4-6 лет</div>
                <div class="age-item__subtitle">старшая группа</div>
              </div>
              
            </div>
          </div>
          <div class="kindergarten-text-content__visit-mode visit-mode">
            <div class="visit-mode__title">Режим посещения:</div>
            <div class="visit-mode__age">с 9-00 до 13-00</div>
            <div class="visit-mode__text">В течение дня малыши от 2.5 лет будут находиться в Бэби-саду с 4 разовым питанием, сном, прогулками и занятиями по методикам Бэби-клуба. В программе Бэби-сада: традиционный Бэби-класс и ежедневные дополнительные занятия.</div>
          </div>
        </div>
        
        <div class="kindergarten-slide-content">
          <div class="kindergarten-slider">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide v-for="(item, i) in photos" :key="i"><img class="kindergarten-slide__img" :src="photos[i]" alt=""></swiper-slide>
              
              <div class="swiper-button-prev" slot="button-prev">
                <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
              <div class="swiper-button-next" slot="button-next">
                <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
              
            </swiper>
                  <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide v-for="(item, i) in photos.slice(1)" :key="i"><img class="kindergarten-slide__img" :src="photos[i + 1]" alt=""></swiper-slide>
              <swiper-slide><img class="kindergarten-slide__img" :src="photos[0]" alt=""></swiper-slide>
            </swiper>
            
          </div>
        </div>
        
      </div>
      
      <div class="kindergarten__foreword">
        <div class="foreword-item">
          <img class="foreword-item__img" src="@/assets/img/kindergarten2-img-1.svg" alt="">
          <div class="foreword-item__text">
            <span class="bold">Небольшие</span> группы — <span class="bold">до 15 <br> детей</span>
          </div>
        </div>
        <div class="foreword-item">
          <img class="foreword-item__img" src="@/assets/img/kindergarten2-img-2.svg" alt="">
          <div class="foreword-item__text">
            С детьми <span class="bold">одновременно</span> <br> работают <span class="bold">3 специалиста</span>
          </div>
        </div>
        <div class="foreword-item">
          <img class="foreword-item__img" src="@/assets/img/kindergarten2-img-3.svg" alt="">
          <div class="foreword-item__text">
            <span class="bold">Разница в возрасте</span> детей <br> в одной группе - <span class="bold">до 3 лет</span>
          </div>
        </div>
      </div>
        
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.kindergarten {
  padding-top: 65px;
  padding-bottom: 130px;
  position: relative;
  
  &__img {
    position: absolute;
    width: 100%;
    top: 110px;
  }
  
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    
    .kindergarten-text-content {
      margin-bottom: 85px;
      width: 100%;
      &__subtitle {
        font-size: 18px;
        font-weight: 500;
        font-family: @font-Tagir;
        color: @blue;
        margin-bottom: 10px;
      }
      
      &__title {
        font-size: 30px;
        font-family: @bold;
        color: @black;
        margin-bottom: 25px;
      }
      
      &__text {
        font-size: 16px;
        line-height: 24px;
        color: @light-black;
        margin-bottom: 20px;
        width: 100%;
        max-width: 471px;
      }
      
      &__age-group {
        margin-bottom: 25px;
      }
      .age-group {
        &__title {
          font-size: 14px;
          font-family: @bold;
          text-transform: uppercase;
          color: @black;
          margin-bottom: 13px;
        }
        &__age-items {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          max-width: 320px;
          .age-item {
            &__title {
              font-size: 27px;
              font-style: italic;
              font-family: @bold;
              color: @red;
              margin-bottom: 5px;
            }
            &__subtitle {
              font-size: 16px;
              color: @light-black;
            }
          }
        }
      }
      .visit-mode {
        &__title {
          font-size: 14px;
          font-family: @bold;
          text-transform: uppercase;
          color: @black;
          margin-bottom: 13px;
        }
        &__age {
          font-size: 27px;
          font-style: italic;
          font-family: @bold;
          color: @red;
          margin-bottom: 25px;
        }
        &__text {
          font-size: 16px;
          line-height: 24px;
          color: @light-black;
          width: 100%;
          max-width: 410px;
        }
      }
      
    }
    
    .kindergarten-slide-content {
      position: relative;
      width: 100%;
      height: 454px;
      margin-left: 100px;
      .kindergarten-slider {
        
      }
    }
  }
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    width: 558px;
    height: 438px;
    border-radius: 40px;
    overflow: hidden;
    background: @grey;
    img {
      border-radius: 35px;
    }
  }
  .gallery-top {
    width: 558px;
    height: 438px;
    background: #fff;
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 15px;
    position: static;
    .swiper-slide {
      border-radius: 30px;
      width: 100%;
      height: 100%;
    }
  }
  .gallery-thumbs {
    width: 533px;
    height: 408px;
    position: absolute;
    top: 15px;
    right: -608px;
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    background: @grey;
    .swiper-slide {
      width: 533px;
      height: 408px;
    }
    &.slide-1 {
      background:red;
      
    }
    &.slide-2 {
      background:green;
      
    }
    &.slide-3 {
      background:red;
    }
    &.slide-4 {
      background:green;
    }
    &.slide-5 {
      background:red;
    }
  }
  .gallery-thumbs .swiper-slide {
    width: 533px;
    height: 408px;
    border-radius: 30px;
  }
  .gallery-thumbs .swiper-slide-active {
    
  }
  
  &__foreword {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .foreword-item {
      width: 100%;
      max-width: 220px;
      &__img {
        margin-bottom: 20px;
      }
      &__text {
        font-size: 14px;
        line-height: 20px;
        .bold {
          font-family: @bold;
        }
      }
    }
  }
  
}

.swiper-button-prev {
  position: absolute;
  top: calc(50% - 15px);
  left: -30px;
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
    transform: rotate(180deg);
    fill: @black;
  }
}
.swiper-button-next {
  position: absolute;
  top: calc(50% - 15px);
  right: -30px;
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
@media (max-width: 1200px) {
  .kindergarten__content {
    padding-left: 16px;
    padding-right: 35px;
  }
  .kindergarten__foreword {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 1024px) {
  .kindergarten {
    display: none;
  }
}
</style>
