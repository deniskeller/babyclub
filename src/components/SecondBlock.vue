<script>
export default {
  components: {},
  props: {
    content: {
      type: Array,
      default() {
        return []
      }
    },
    link: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 22,
        loop: true,
        centeredSlides: true,
        breakpoints: {
          1024: {
            slidesPerView: "auto",
            spaceBetween: 16
          },
        }
      }
    };
  },
};
</script>

<template>
  <div class="second-block">
    
    <div class="container">
      <div class="advantages advantages-desktop">
    
        <div v-for="(item, i) in content" :key="i" :class="'advantages-item-overflow advantages-item-overflow-' + (i + 1)">
          <div :class="'advantages-item advantages-item-' + (i + 1)">
            <div :class="'advantages-item__text advantages-item__text-' + (i + 1)">{{ content[i].text }}</div>
          </div>
        </div>
        
      </div>
      
      <div class="advantages advantages-mobile">
        <div>
          <div>
      <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, i) in content" :key="i">
              <div :class="'advantages-item-overflow advantages-item-overflow-' + (i + 1)">
                <div :class="'advantages-item advantages-item-' + (i + 1)">
                  <div :class="'advantages-item__text advantages-item__text-' + (i + 1)">{{ content[i].text }}</div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        </div>
      </div>
      
      <div class="about">
        
        <div class="about-text-content">
          <div class="about-text-content__subtitle">Короткое видео о том</div>
          <div class="about-text-content__title">ЧТО ТАКОЕ БЭБИ-КЛУБ</div>
          <div class="about-text-content__text">
            <p class="p-1">Бэби-клуб - это ведущая в России сеть детских клубов с авторской системой развития интеллекта.</p>
            <br class="br-1">
            <p><span class="uppercase">Посмотрите короткое видео</span>, в котором мы рассказываем об особенностях нашей методики 10 видов интеллекта.</p> 
          </div>
          <a href="" class="about-text-content__button next-button">
            Подробнее о методике
            <div class="next-button__img">
              <img class="arrow-next" src="@/assets/img/arrow-next-b.svg" alt="">
            </div>
          </a>
        </div>
        
        <div class="about-video-content">
          <img class="giraffe" src="@/assets/img/giraffe.svg" alt="">
          <iframe class="video" width="100%" height="100%" :src="link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
      
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.second-block {
  padding-top: 65px;
  padding-bottom: 112px;
  overflow: hidden;
  .advantages {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 130px;
    .advantages-item-overflow {
      width: 260px;
      height: 190px;
      border-radius: 25px;
      padding: 7px;
      .advantages-item {
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 10px rgba(151, 152, 162, 0.16);
        border-radius: 25px;
        padding: 0px 25px 0px;
        text-align: center;
        display: flex;
        align-items: center;
        &__text {
          font-size: 16px;
          font-family: @bold;
          text-transform: uppercase;
          text-align: center;
        }
        
        .advantages-item__text-1 {
          color: #4C85F7;
        }
        .advantages-item__text-2 {
          color: #E6AB39;
        }
        .advantages-item__text-3 {
          color: #F55853;
        }
        .advantages-item__text-4 {
          color: #784CF7;
        }
      }
      
      .advantages-item-1 {
        border: 1px solid #4C85F7;
      }
      .advantages-item-2 {
        border: 1px solid #FFE58A;
      }
      .advantages-item-3 {
        border: 1px solid #F55853;
      }
      .advantages-item-4 {
        border: 1px solid #7579D1;
      }
    }
    
    .advantages-item-overflow-1 {
      background: #F0F5FF;
    }
    .advantages-item-overflow-2 {
      background: #FFFEF0;
    }
    .advantages-item-overflow-3 {
      background: #FFF0F0;
    }
    .advantages-item-overflow-4 {
      background: #F0F0FF;
    }
  }
  .advantages-mobile {
    display: none;
  }
  .about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    
    &-text-content {
      width: 100%;
      max-width: 360px;
      
      &__subtitle {
        font-size: 18px;
        font-weight: 500;
        font-family: @font-Tagir;
        color: @blue;
        margin-bottom: 10px;
      }
      
      &__title {
        font-size: 30px;
        line-height: 37px;
        font-family: @bold;
        color: @black;
        margin-bottom: 28px;
      }
      
      &__text {
        font-size: 16px;
        line-height: 24px;
        color: @light-black;
        margin-bottom: 25px;
        .uppercase {
          font-family: @bold;
          text-transform: uppercase;
          color: @black;
        }
      }
      
    }
    
    &-video-content {
      position: relative;
      width: 100%;
      max-width: 628px;
      height: 458px;
      background: @white;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      border-radius: 40px;
      padding: 15px;
      .giraffe {
        position: absolute;
        top: 40px;
        right: -65px;
        z-index: -1;
      }
      iframe {
        width: 100%;
        max-width: 628px;
        height: 100%;
        border-radius: 30px;
        z-index: 100;
      }
    }
    
  }
  
  .next-button {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 227px;
    height: 45px;
    padding-left: 15px;
    background: @blue;
    border-radius: 100px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    color: @white;
    text-decoration: none;
    position: relative;
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

@media (max-width: 1300px) {
  .second-block .about {
    padding-left: 40px;
    padding-right: 70px;
  }
}

@media (max-width: 1100px) {
  .second-block .advantages-desktop {
    display: none;
  }
  .second-block .advantages-mobile {
    display: block;
    
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
  }
  .swiper-container-android .swiper-slide {
    width: 260px !important;
    height: 190px;
  }
  
  .second-block .about-video-content {
    max-width: 420px;
    height: 305px;
    margin-top: 27px;
  }
}

@media (max-width: 880px) {
  .second-block .about {
    justify-content: center;
  }
}
@media (max-width: 500px) {
  .second-block {
    padding-top: 20px;
    padding-bottom: 0px;
  }
  .second-block .advantages-mobile {
    margin-bottom: 30px;
  }
  .second-block .advantages .advantages-item-overflow {
    width: 240px;
    height: 100px;
  }
  .second-block .advantages .advantages-item-overflow .advantages-item__text {
    font-size: 14px;
  }
  .swiper-container-android .swiper-slide {
    width: 240px !important;
    height: 100px;
  }
  
  .second-block .about {
    padding: 0px 16px;
  }
  .second-block .about-text-content__subtitle {
    font-size: 16px;
    margin-bottom: 6px;
  }
  .second-block .about-text-content__title {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .second-block .about-text-content__text {
    margin-bottom: 0px;
    .p-1 {
      display: none;
    }
    .br-1 {
      display: none;
    }
    p {
      .uppercase {
        text-transform: inherit;
        color: @light-black;
        font-family: @font-Muller;
      }
    }
    
  }
  .second-block .next-button {
    display: none;
  }
  
  .second-block .about-video-content {
    max-width: 288px;
    height: 205px;
    overflow: hidden;
    background: none;
    border-radius: 15px;
    padding: 0;
  }
  .second-block .about-video-content iframe {
    border-radius: 15px;
  }
  .second-block .about-video-content .giraffe {
    display: none;
  }
}

</style>
