<script>

export default {
  components: {
    
  },
  props: {
    content: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptionMobile: {
        spaceBetween: 22,
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
  <div class="news">
      <div class="container">
          <div class="news-content">
              <div class="news-content__subtitle">Не пропускайте</div>
              <div class="news-content__title">Новости</div>
              <div class="news-content__all-news">
                <a href="" class="next-button">
                  Смотреть все новости
                  <div class="next-button__img">
                    <img class="arrow-next" src="@/assets/img/arrow-next-b.svg" alt="">
                  </div>
                </a>
              </div>
              
              <div class="news-content__content news-content--desktop">
                
                <a v-for="(item, i) in content" :key="i" :href="item.link" class="content-item">
                  <div class="content-item__img-overlay">
                    <img class="content-item__img" :src="item.img" alt="">
                  </div>
                  
                  <div class="content-item__title">{{ item.title }}
                    <img class="info-news" src="@/assets/img/info-news.svg" alt="">
                  </div>
                  
                  <div class="content-item__text">
                    {{ item.text }}
                  </div>
                </a>
                
              </div>
              
              <div class="news-content__content news-content--mobile">
                <swiper :options="swiperOptionMobile" class="slider">
              
                  <swiper-slide v-for="(item, i) in content" :key="i">
                    <a :href="item.link" class="content-item">
                      <div class="content-item__img-overlay">
                        <img class="content-item__img" :src="item.img" alt="">
                      </div>
                      
                      <div class="content-item__title">{{ item.title }}
                        <img class="info-news" src="@/assets/img/info-news.svg" alt="">
                      </div>
                      
                      <div class="content-item__text">
                        {{ item.text }}
                      </div>
                    </a>
                  </swiper-slide>
                    
                </swiper>
              </div>
              
          </div>
      </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.news {
  background: url('../assets/img/news-bg.svg') no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
  padding-top: 60px;
  padding-bottom: 80px;
  
  .news-content {
    position: relative;
    
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
    
    &__all-news {
      position: absolute;
      top: 10px;
      right: 0;
    }
    
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      .content-item {
        width: 100%;
        max-width: 362px;
        text-decoration: none;
        
        &__img-overlay {
          width: 362px;
          height: 294px;
          overflow: hidden;
          border-radius: 45px;
          background: @grey;
          margin-bottom: 16px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        
        &__title {
          width: max-content;
          max-width: 280px;
          font-size: 20px;
          font-family: @bold;
          color: @black;
          position: relative;
          margin-bottom: 16px;
          
          .info-news {
            width: 41px;
            height: 13px;
            position: absolute;
            top: 3px;
            right: -70px;
            cursor: pointer;
          }
        }
        
        &__text {
          font-size: 15px;
          line-height: 21px;
          color: @light-black;
        }
      }
    }
    
  }
  
  .news-content--mobile {
    display: none;
  }
  
  .next-button {
    display: flex;
    align-items: center;
    width: 227px;
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


@media (max-width: 1200px) {
  .news .news-content {
    padding-left: 16px;
  }
  .news .news-content__all-news {
    right: 16px;
  }
  .news .news-content--desktop {
    display: none;
  }
  .news .news-content--mobile {
    display: block;
    .slider {
      .swiper-slide {
        width: 362px;
      }
    }
  }
}

@media (max-width: 500px) {
  .news {
    padding-bottom: 110px;
  }
  .news .news-content--mobile {
    display: block;
    .slider {
      .swiper-slide {
        width: 264px;
      }
    }
  }
  .news .news-content__content .content-item__img-overlay {
    width: 264px;
    height: 215px
  }
  .news .news-content__content .content-item__title .info-news {
    display: none;
  }
  .news .news-content__subtitle {
    font-size: 15px;
    margin-bottom: 5px;
  }
  .news .news-content__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }
  .news .news-content__all-news {
    top: auto;
    bottom: -87px;
    right: calc(50% - 144px);
  }
  .news .next-button {
    width: 288px;
    justify-content: center;
    padding-left: 0px;
  }
}
</style>
