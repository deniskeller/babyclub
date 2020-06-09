<script>
export default {
  components: {},
  props: {
    link: {
      type: String,
      default: ""
    },
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
        spaceBetween: 15,
        loop: true,
        loopedSlides: 4, //looped slides should be the same
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 15,
          slidesPerView: 3,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 4, //looped slides should be the same
          slideToClickedSlide: true,
      },
      swiperOptionMobile: {
        spaceBetween: 22,
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    })
  }
};
</script>

<template>
  <div class="photo-gallery-content">
    
    
    <div class="photo-gallery-content__bg-left"></div>
    <div class="photo-gallery-content__bg-right"></div>
    <div class="container">
      <div class="photo-gallery photo-gallery--desktop">
        
        <div class="photo-gallery__text-content text-content">
          <img class="photo-gallery-content__img-left" src="@/assets/img/photo-gallery-bg-1.svg" alt="">
          <div class="text-content__subtitle">Где проходят занятия</div>
          <div class="text-content__title">Фотогалерея клуба</div>
          <div class="text-content__text">
            <p>Для развития малыша важно то, в какой атмосфере он находится.</p>
            
            <p>Бэби-клуб оборудован всем необходимым, чтобы ребенку было уютно и комфортно: от эко-материалов до размеров помещений.</p>
            
            <p>Занятия проходят в двух комнатах: игровой и интеллектуальной. Смена активности между двумя комнатами переключает внимание ребенка, и он успешнее справляется с разными задачами.</p>
            
            <p class="title">Посмотрите сами!</p>
            <img class="text-content__img" src="@/assets/img/arrow-next-down.svg" alt="">
          </div>
          <a :href="link" class="text-content__btn next-button">
            Онлайн-экскурсия
            <div class="next-button__img">
              <img class="arrow-next" src="@/assets/img/play.svg" alt="">
            </div>
          </a>
        </div>
        
        <div class="photo-gallery__slide-content slide-content">
          <img class="photo-gallery-content__img-right" src="@/assets/img/photo-gallery2-bg-2.svg" alt="">
          <div>
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide v-for="(item, i) in photos" :key="i" :class="'slide-' + (i + 1)"><img class="gallery-top__img" :src="photos[i]" alt=""></swiper-slide>
              <div class="swiper-button-prev" slot="button-prev">
                <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
              <div class="swiper-button-next" slot="button-next">
                <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide v-for="(item, i) in photos" :key="i" :class="'slide-' + (i + 1)"><img class="gallery-thumbs__img" :src="photos[i]" alt=""></swiper-slide>
            </swiper>
          </div>
          
        </div>
        
      </div>
      
      <div class="photo-gallery photo-gallery--mobile">
        
        <div class="subtitle">Где проходят занятия</div>
        <div class="title">Фотогалерея клуба</div>
          
        <swiper :options="swiperOptionMobile" class="slider">
              
          <swiper-slide v-for="(item, i) in photos" :key="i"><img class="gallery-thumbs__img" :src="photos[i]" alt=""></swiper-slide>
              
        </swiper>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.photo-gallery-content {
  width: 100%;
  height: 700px;
  position: relative;
  overflow: hidden;
  
  &__bg-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 50%;
    height: 100%;
    background: @red;
  }
  &__img-left {
    position: absolute;
    top: 23px;
    left: -400px;
    z-index: 2;
  }
  &__bg-right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 50%;
    height: 100%;
    background: @red;
  }
  &__img-right {
    position: absolute;
    top: -6px;
    right: -420px;
    z-index: 2;
  }
}

.photo-gallery {
  display: flex;
  flex-direction: row;
  
  .text-content {
    position: relative;
    z-index: 1000;
    width: 100%;
    max-width: 353px;
    color: @white;
    padding-top: 70px;
    padding-bottom: 76px;
    margin-left: 30px;
    &__subtitle {
      font-size: 19px;
      font-family: @font-Tagir;
      margin-bottom: 10px;
    }
    &__title {
      width: 100%;
      max-width: 300px;
      font-size: 30px;
      font-family: @bold;
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    &__text {
      width: 100%;
      max-width: 300px;
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 30px;
      p {
        margin-bottom: 15px;
      }
      .title {
        text-transform: uppercase;
        font-family: @bold;
        letter-spacing: 1px;
      }
    }
    &__img {
      width: 62px;
      height: 73px;
      position: absolute;
      right: 90px;
      bottom: 108px;
    }
  }
  
  .slide-content {
    position: relative;
    z-index: 1000;
    padding-left: 15px;
    padding-right: 15px;
    background: #fff;
  }
}

.swiper-button-prev {
  position: absolute;
  top: calc(32% - 15px);
  left: -12px;
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
  top: calc(32% - 15px);
  right: -12px;
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
  width: 242px;
  height: 50px;
  padding-left: 65px;
  background: @blue;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
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
    top: 3px;
    left: 2px;
    img {
      width: 20px;
      height: 16px;
    }
  }
}


.swiper-container {
    background-color: @white;
    width: 100%;
    max-width: 700px;
    height: 100%;
    position: static;
  }
.swiper-slide {
    background: @grey;
    overflow: hidden;
  }
.gallery-top {
    width: 699px;
    height: 462px;
    margin-bottom: 15px;
    position: static;
    &__img {
      width: 100%;
    }
  }
.gallery-thumbs {
    &__img {
      // width: 100%;
    }
  }
.gallery-thumbs .swiper-slide {
    width: 223px !important;
    height: 222px !important;
    overflow: hidden;
  }
  
.photo-gallery--mobile {
  display: none;
  padding-left: 16px;
  background: @red;
  padding-top: 32px;
  padding-bottom: 57px;
  .subtitle {
    font-size: 19px;
    font-family: @font-Tagir;
    margin-bottom: 15px;
    color: @white;
  }
  .title {
    width: 100%;
    max-width: 350px;
    font-size: 30px;
    font-family: @bold;
    color: @white;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  
  .swiper-container {
    width: 100%;
    max-width: 100%;
  }
  .slider {
    background: @red;
    .swiper-slide {
      width: 265px;
      height: 205px;
      border-radius: 40px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}

@media (max-width: 1170px) {
  .photo-gallery .text-content__img {
    display: none;
  }
}

@media (max-width: 1024px) {
  .photo-gallery--mobile {
    display: block;
  }
  .photo-gallery-content {
    height: 100%;
  }
  .photo-gallery--desktop {
    display: none;
  }
  .photo-gallery-content__bg-right {
    display: none;
  }
  .photo-gallery-content__bg-left {
    display: none;
  }
}

@media (max-width: 500px) {
  .photo-gallery--mobile .subtitle {
    font-size: 15px;
  }
  .photo-gallery--mobile .title {
    font-size: 20px;
  }
}

</style>
