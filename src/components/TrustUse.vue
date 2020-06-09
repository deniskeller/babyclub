<script>

export default {
  components: {
    
  },
  props: {},
  data() {
    return {
      swiperOptionMobile: {
        spaceBetween: 23,
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
      },
    };
  },
  computed: {}
};
</script>

<template>
  <div class="trust-use">
    <div class="container">
      <div class="trust-use-content">
        <div class="trust-use-content__subtitle">Почему родители</div>
        <div class="trust-use-content__title">НАМ ДОВЕРЯЮТ</div>
        
        <div class="trust-use-content__content trust-use-content__content-desktop">
          
          <div class="trust-use-top">
            
            <div class="trust-use-top-item">
              <div class="trust-use-top-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-1.svg" alt="">
                <div class="overlay-text">Более 80 000 <br> воспитанников</div>
              </div>
              <div class="trust-use-top-item__text">Успешно поступили в лучшие <br> школы и гимназии</div>
            </div>
            
            <div class="trust-use-top-item trust-use-top-item-middle">
              <div class="trust-use-top-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-2.svg" alt="">
                <div class="overlay-text">Работаем с 2000 года</div>
              </div>
              <div class="trust-use-top-item__text">Все наши методики прошли <br> проверку временем</div>
            </div>
            
            <div class="trust-use-top-item">
              <div class="trust-use-top-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-3.svg" alt="">
                <div class="overlay-text">Более 195 клубов</div>
              </div>
              <div class="trust-use-top-item__text">Каждый год проходят съезды <br> партнеров сети и обмен опытом</div>
            </div>
            
          </div>
          
          <div class="trust-use-bottom">
            
            <div class="trust-use-bottom-item">
              <div class="trust-use-bottom-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-4.svg" alt="">
                <div class="overlay-text">Более 20 000 детей</div>
              </div>
              <div class="trust-use-bottom-item__text">Занимаются в наших клубах <br> ежедневно</div>
            </div>
            
            <div class="trust-use-bottom-item trust-use-bottom-item-middle">
              <div class="trust-use-bottom-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-5.svg" alt="">
                <div class="overlay-text">Будущее детей</div>
              </div>
              <div class="trust-use-bottom-item__text">Мы осознаем свою ответственность <br> в формировании будущего детей, <br> поэтому тщательно следим за качеством <br> обучения в каждом нашем клубе</div>
            </div>
            
            <div class="trust-use-bottom-item">
              <div class="trust-use-bottom-item__overlay">
                <img class="overlay-img" src="@/assets/img/trust-us-img-6.svg" alt="">
                <div class="overlay-text">Более 1 000 <br> специалистов</div>
              </div>
              <div class="trust-use-bottom-item__text">Прошли обучение в <br> Методическом центре</div>
            </div>
            
          </div>
          
        </div>
        
        <div class="trust-use-mobile">
          
          <swiper :options="swiperOptionMobile" class="trust-use-mobile__slider">
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-1.svg" alt="">
                    <div class="overlay-text">Более 80 000 <br> воспитанников</div>
                  </div>
                  <div class="trust-use-item__text">Успешно поступили в лучшие <br> школы и гимназии</div>
                </div>
              </swiper-slide>
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-2.svg" alt="">
                    <div class="overlay-text overlay-text--blue">Работаем с 2000 года</div>
                  </div>
                  <div class="trust-use-item__text">Все наши методики прошли <br> проверку временем</div>
                </div>
              </swiper-slide>
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-3.svg" alt="">
                    <div class="overlay-text">Более 195 клубов</div>
                  </div>
                  <div class="trust-use-item__text">Каждый год проходят съезды <br> партнеров сети и обмен опытом</div>
                </div>
              </swiper-slide>
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-4.svg" alt="">
                    <div class="overlay-text">Более 20 000 детей</div>
                  </div>
                  <div class="trust-use-item__text">Занимаются в наших клубах <br> ежедневно</div>
                </div>
              </swiper-slide>
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-5.svg" alt="">
                    <div class="overlay-text overlay-text--blue">Будущее детей</div>
                  </div>
                  <div class="trust-use-item__text">Мы осознаем свою ответственность <br> в формировании будущего детей, <br> поэтому тщательно следим за качеством <br> обучения в каждом нашем клубе</div>
                </div>
              </swiper-slide>
              
            <swiper-slide>
                <div class="trust-use-item">
                  <div class="trust-use-item__overlay">
                    <img class="overlay-img" src="@/assets/img/trust-us-img-6.svg" alt="">
                    <div class="overlay-text">Более 1 000 <br> специалистов</div>
                  </div>
                  <div class="trust-use-item__text">Прошли обучение в <br> Методическом центре</div>
                </div>
              </swiper-slide>
              
          </swiper>
          
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.trust-use {
  background: url('../assets/img/trust-us-bg.svg') no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  padding-bottom: 110px;
  &-content {
    
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
      margin-bottom: 43px;
    }
    
    &__content {
      
      .trust-use-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 95px;
        
        &-item {
          text-align: center;
          
          &__overlay {
            width: 278px;
            height: 278px;
            border-radius: 35px;
            position: relative;
            margin-bottom: 15px;
            .overlay-img {
              width: 100%;
              height: 100%;
              border-radius: 35px;
            }
            .overlay-text {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 54px;
              background: @red;
              border-radius: 35px;
              font-size: 16px;
              line-height: 16px;
              font-family: @bold;
              color: @white;
              text-transform: uppercase;
              text-align: center;
            }
          }
          
          &__text {
            font-size: 16px;
            line-height: 20px;
            color: @light-black;
          }
        }
        
        &-item-middle {
          margin-top: 45px;
          .trust-use-top-item__overlay {
            width: 362px;
            height: 265px;
            .overlay-text {
              background: @blue;
            }
          }
        }
      }
      
      .trust-use-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        
        &-item {
          text-align: center;
          
          &__overlay {
            width: 278px;
            height: 278px;
            border-radius: 35px;
            position: relative;
            margin-bottom: 15px;
            .overlay-img {
              width: 100%;
              height: 100%;
              border-radius: 35px;
            }
            .overlay-text {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 54px;
              background: @red;
              border-radius: 35px;
              font-size: 16px;
              line-height: 16px;
              font-family: @bold;
              color: @white;
              text-transform: uppercase;
              text-align: center;
            }
          }
          
          &__text {
            font-size: 16px;
            line-height: 20px;
            color: @light-black;
          }
        }
        
        &-item-middle {
          margin-top: -45px;
          .trust-use-bottom-item__overlay {
            width: 362px;
            height: 265px;
            .overlay-text {
              background: @blue;
            }
          }
        }
      }
      
    }
    
    .trust-use-mobile {
      display: none;
      &__slider {
        .swiper-slide {
          width: 265px;
        }
        .trust-use-item {
          width: 265px;
          &__overlay {
            width: 265px;
            height: 234px;
            overflow: hidden;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
            margin-bottom: 10px;
            position: relative;
            .overlay-text {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 54px;
              background: @red;
              border-radius: 35px;
              font-size: 16px;
              line-height: 16px;
              font-family: @bold;
              color: @white;
              text-transform: uppercase;
              text-align: center;
            }
            .overlay-text--blue {
              background: @blue;
            }
          }
          
          &__text {
            font-size: 16px;
            line-height: 20px;
            color: @light-black;
            text-align: center;
          }
          
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .trust-use {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 1024px) {
  .trust-use {
    padding-right: 0px;
  }
  .trust-use-content__content-desktop {
    display: none;
  }
  .trust-use-mobile {
    display: block !important;
  }
}

@media (max-width: 500px) {
  .trust-use {
    padding-bottom: 35px;
  }
  .trust-use-content__subtitle {
    font-size: 15px;
    margin-bottom: 7px;
  }
  .trust-use-content__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }
}

</style>
