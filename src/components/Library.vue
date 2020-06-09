<script>

export default {
  components: {},
  props: {
    link: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      swiperOptionMobile: {
        spaceBetween: 30,
        slidesPerView: 2,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 'auto',
            spaceBetween: 18
          },
        }
      },
    };
  },
  computed: {},
  methods: {
    show() {
      this.$emit('show');
    },
  }
};
</script>

<template>
  <div class="container">
    <div class="library">
      
      <div class="library__subtitle">То над чем мы работаем постоянно</div>
      <div class="library__title">Бэбиблиотека</div>
      <div class="library__all-news">
        <a :href="link" class="next-button">
          Вся Бэбиблиотека
          <div class="next-button__img">
            <img class="arrow-next" src="@/assets/img/arrow-next-b.svg" alt="">
          </div>
        </a>
      </div>
      
      <div class="library__slide-content">
        
        <swiper :options="swiperOptionMobile" class="slide-content">
          
          <swiper-slide>
            <div class="overlay-slide-item">
              <div class="slide-item">
                <img class="slide-item__img" src="@/assets/img/book-1.svg" alt="">
                <div class="slide-item__subtitle">Ежедневник</div>
                <div class="slide-item__title">Сила маленьких шагов</div>
                <div class="slide-item__text">Ежедневник по методу основателя Беби-клуба Юрия Белонощенко - путеводитель и помощник в совершении маленьких шагов, которые ...</div>
                <div class="slide-item__get-on-mail" @click="show()">Получить на E-mail</div>
                <div class="slide-item__download">Скачали<br><span class="value">1234</span><br> раз</div>
              </div>
            </div>
          </swiper-slide>
          
          <swiper-slide>
            <div class="overlay-slide-item">
              <div class="slide-item">
                <img class="slide-item__img" src="@/assets/img/book-2.svg" alt="">
                <div class="slide-item__subtitle">Методическое пособие</div>
                <div class="slide-item__title">После трех уже поздно</div>
                <div class="slide-item__text">Ежедневник по методу основателя Беби-клуба Юрия Белонощенко - путеводитель и помощник в совершении маленьких шагов, которые...</div>
                <div class="slide-item__get-on-mail" @click="show()">Получить на E-mail</div>
                <div class="slide-item__download">Скачали <br><span class="value">1234</span><br>раз</div>
              </div>
            </div>
          </swiper-slide>
          
          <div class="swiper-button-prev" slot="button-prev">
            <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
          </div>
          
        </swiper>
        
      </div>
      
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.library {
  position: relative;
  padding-top: 58px;
  padding-bottom: 95px;
  
  &__subtitle {
    font-weight: 500;
    font-size: 19px;
    line-height: 24px;
    color: @blue;
    font-family: @font-Tagir;
    margin-bottom: 10px;
  }
  
  &__title {
    font-size: 30px;
    line-height: 37px;
    color: @black;
    font-family: @bold;
    text-transform: uppercase;
    margin-bottom: 63px;
  }
  
  &__all-news {
    position: absolute;
    top: 75px;
    right: 0;
  }
  
  &__slide-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    width: 100%;
    
    .slide-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      padding-top: 5px;
      padding-bottom: 5px;
      transition: all .32s ease;
    }
    
    .overlay-slide-item {
      min-width: 556px;
      display: flex;
      justify-content: flex-end;
      margin-left: 30px;
      &:first-child {
        margin-left: 0px;
      }
      .slide-item {
        width: 460px;
        height: 277px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);
        border-radius: 25px;
        padding: 38px 25px 25px 80px;
        position: relative;
        z-index: 1000;
        display: flex;
        flex-direction: column;
    
        &__img {
          position: absolute;
          left: -100px;
          top: 20px;
        }
        
        &__subtitle {
          font-size: 14px;
          line-height: 16px;
          color: @grey;
          margin-bottom: 11px;
        }
        
        &__title {
          font-size: 20px;
          line-height: 23px;
          font-family: @bold-extra;
          text-transform: uppercase;
          color: @black;
          margin-bottom: 11px;
        }
        
        &__text {
          font-size: 15px;
          line-height: 23px;
          color: @light-black;
        }
        
        &__get-on-mail {
          width: 100%;
          max-width: 178px;
          height: 37px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid @red;
          border-radius: 100px;
          font-size: 14px;
          line-height: 21px;
          color: @red;
          cursor: pointer;
          margin-top: auto;
        }
        
        &__download {
          position: absolute;
          right: 13px;
          bottom: 13px;
          width: 62px;
          height: 62px;
          padding-top: 13px;
          background: linear-gradient(142.58deg, #4C85F7 15.12%, #245FD3 83.53%);
          border-radius: 100px;
          font-size: 10px;
          color: @white;
          text-align: center;
          .value {
            font-size: 15px;
            font-family: @bold;
          }
        }
      }
    }
    
    .swiper-container {
      position: static;
      .swiper-slide {
        width: 556px !important;
        height: 277px !important;
      }
    }
  }
  
.swiper-button-prev {
  position: absolute;
  top: calc(50% - 15px);
  left: -80px;
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
  right: -80px;
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
.next-button {
    display: flex;
    align-items: center;
    width: 227px;
    height: 45px;
    padding-left: 28px;
    background: @blue;
    border-radius: 100px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: @white;
    text-decoration: none;
    position: relative;
    margin: 0 auto;
    &__img {
      width: 43px;
      height: 43px;
      border-radius: 100px;
      background: @white;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 1px;
      right: 2px;
      img {
        width: 13px;
        height: 11px;
      }
    }
  }
}
@media (max-width: 1350px) {
  .library .swiper-button-next {
    top: auto;
    bottom: -80px;
    right: 50px;
  }
  .library .swiper-button-prev {
    top: auto;
    bottom: -80px;
    left: 50px;
  }
}
@media (max-width: 1200px) {
  .library {
    padding-left: 16px;
    padding-right: 16px;
  }
  .library__all-news {
    right: 16px;
  }
  .library .swiper-button-next {
    display: none;
  }
  .library .swiper-button-prev {
    display: none;
  }
}

@media (max-width: 768px) {
  .library {
    padding-right: 0px;
    padding-left: 0px;
  }
  .library__slide-content {
    padding-left: 10px;
  }
  .library__slide-content .swiper-container {
    padding: 50px 0px 15px 10px;
  }
  .library__slide-content .swiper-container .swiper-slide {
    width: 265px !important;
    height: 385px !important;
  }
  .library__slide-content .overlay-slide-item .slide-item {
    width: 265px;
    height: 385px;
    padding: 97px 23px 23px 20px;
  }
  .library__slide-content .overlay-slide-item {
    min-width: 100%;
  }
  
  .library__slide-content .overlay-slide-item .slide-item__img {
    width: 146px;
    height: 128px;
    left: -13px;
    top: -50px;
  }
  .library__slide-content .overlay-slide-item .slide-item__download {
    width: 96px;
    height: 96px;
    right: -8px;
    bottom: auto;
    top: -20px;
    font-size: 14px;
    line-height: 18px;
    padding-top: 25px;
  }
  .library__slide-content .overlay-slide-item .slide-item__title {
    font-size: 16px;
  }
  .library__slide-content .overlay-slide-item .slide-item__get-on-mail {
    max-width: 212px;
  }
  .library__subtitle {
    font-size: 15px;
    margin-bottom: 9px;
    padding-left: 16px;
  }
  .library__title {
    font-size: 20px;
    line-height: 25px;
    padding-left: 16px;
    margin-bottom: 25px;
  }
  .library__all-news {
    right: auto;
    top: auto;
    bottom: 30px;
    left: calc(50% - 144px);
  }
  .library .next-button {
    width: 288px;
    padding-left: 0px;
    justify-content: center;
  }
  
  
}

</style>
