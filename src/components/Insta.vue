<script>

export default {
  components: {},
  props: {
    link: {
      type: String,
      default: ""
    },
    content: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grabCursor: true,
        slideToClickedSlide: true,
        pagination: {
          clickable: true
        },
        breakpoints: {
          500: {
            spaceBetween: 22,
          }
        }
      },
    };
  },
  computed: { }
};
</script>

<template>
  <div class="insta">
    <div class="container">
      <div class="insta__subtitle">Самые свежие новости</div>
      <div class="insta__title">Мы в instagram</div>
    </div>
    
    <div class="insta__content">
      
       <div>
        <div>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, i) in content" :key="i">
              <a :href="link" class="insta-item">
                <img class="insta-item__overlay" :src="content[i].img" alt="">
                <img class="insta-item__icon" src="@/assets/img/insta-icon.svg" alt="">
                <span class="insta-item__text" v-html="content[i].text"></span>
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

.insta {
  padding-bottom: 155px;
  
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
    margin-bottom: 50px;
  }
  
  &__content {
    .insta-item {
      width: 264px;
      height: 264px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      text-decoration: none;
      background: @blue;
      &__overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &:hover {
          opacity: .1;
        }
      }
      
      &__icon {
        width: 35px;
        height: 35px;
        margin-bottom: 16px;
      }
      &__text {
        width: 100%;
        max-width: 180px;
        font-size: 20px;
        line-height: 27px;
        font-family: @bold;
        color: @white;
        text-transform: uppercase;
        .gold {
          color: #ff9592;
        }
      }
    }
  }
}

.swiper-slide {
  min-width: 264px;
  min-height: 264px;
  max-width: 264px;
  max-height: 264px;
  width: 264px;
  height: 264px;
  
}

@media (max-width: 1200px) {
  .insta__subtitle {
    padding-left: 16px;
  }
  .insta__title {
    padding-left: 16px;
  }
}

@media (max-width: 500px) {
  .insta {
    padding-bottom: 35px;
  }
  .insta__content {
    padding-left: 16px;
  }
  .insta__subtitle {
    font-size: 15px;
    margin-bottom: 6px;
  }
  .insta__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 25px;
  }
}
  
</style>
