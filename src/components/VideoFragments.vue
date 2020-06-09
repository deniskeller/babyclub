<script>
import Checkbox from './Checkbox.vue';
import Inputmask from 'inputmask';

export default {
  components: {
    Checkbox
  },
  props: {
    videos: {
      type: Array,
      default() {
        return []
      }
    },
    offerSubtitle: {
      type: String,
      default: ""
    },
    offerTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: false,
      swiperOptionTop: {
        spaceBetween: 30,
        loop: true,
        slideToClickedSlide: true,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 30,
        loop: true,
        grabCursor: true
      }
    };
  },
  mounted() {
    var im = new Inputmask("+7 (999)999-99-99");
    im.mask(document.getElementById('form-input-4'));
  
    this.$nextTick(() => {
      const swiperVideoTop = this.$refs.swiperVideoTop.swiper;
      const swiperVideoThumbs = this.$refs.swiperVideoThumbs.swiper;
      swiperVideoTop.controller.control = swiperVideoThumbs;
      swiperVideoThumbs.controller.control = swiperVideoTop;
    });
  },
  
  methods: {
    fetchFn() {
      let data = {
        form_name: 'name',
        form_phone: this.$refs.phone.value
      };
      
      if (data.form_phone != "" && this.active) {
        fetch('https://baby.4163.ru/api/form', {
          method: "POST",
          body: JSON.stringify(data)
        })
        .then(data => console.log(data));
        this.$emit('confirm');
      }
    }
  }
};
</script>

<template>
  <div class="video-fragments">
    <div class="container">
      
      <div class="video-fragments__content">
        
        <div class="video-fragments-text-content">
          <div class="video-fragments-text-content__subtitle">Посмотрите как проходят занятия</div>
          <div class="video-fragments-text-content__title">Видео-фрагменты занятий</div>
          <div class="video-fragments-text-content__text">Мы разработали авторскую структуру занятий на основе всемирно известных практик, способствующих развитию интеллекта ребенка с ранних лет.</div>
        </div>
        
        <div class="video-fragments-slide-content">
          <div class="video-fragments-slider">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperVideoTop">
              <swiper-slide v-for="(item, i) in videos" :key="i">
                <iframe class="video" width="100%" height="100%" :src="videos[i]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev">
                <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
              <div class="swiper-button-next" slot="button-next">
                <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
            </swiper>
                  <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperVideoThumbs">
              <swiper-slide v-for="(item, i) in videos.slice(1)" :key="i">
                <iframe class="video" width="100%" height="100%" :src="videos[i + 1]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </swiper-slide>
              <swiper-slide>
                <iframe class="video" width="100%" height="100%" :src="videos[0]" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </swiper-slide>
            </swiper>
            
          </div>
        </div>
        
      </div>
      
      <div class="video-fragments__form">
        
        <div class="modal-popup">
        <div class="modal-popup__container">
          <img class="modal-popup__img" src="@/assets/img/video-fragment-form-img.svg" alt="">
          <div class="modal-popup__subtitle">{{ offerSubtitle }}</div>
          <div class="modal-popup__title">{{ offerTitle }}</div>
          
          <form @submit.prevent="fetchFn" class="modal-popup__content">
            <div class="content-form">
              <input class="content-form__input" type="text" ref="phone" placeholder="+7 (___)___-__-__" id="form-input-4"/>
              <button class="content-form__btn">Хочу пойти</button>
            </div>
            
            
            <div class="content-privacy-policy">
              <Checkbox 
                @input="active = !active"
                :is_active="false"
                class="content-privacy-policy__checkbox"/>
              <div class="content-privacy-policy__text">Оставляя свои контактные данные, Вы соглашаетесь с <a href="#">политикой конфиденциальности.</a></div>
            </div>
            
          </form>
          
        </div>
      </div>
        
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.video-fragments {
  padding-top: 55px;
  padding-bottom: 110px;
  position: relative;
  
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 32px;
    
    .video-fragments-text-content {
      width: 100%;
      max-width: 390px;
      min-width: 300px;
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
        text-transform: uppercase;
        margin-bottom: 25px;
        width: 100%;
        max-width: 420px;
      }
      
      &__text {
        font-size: 16px;
        line-height: 24px;
        color: @light-black;
        width: 100%;
        max-width: 370px;
      }
    }
    
    .video-fragments-slide-content {
      position: relative;
      width: 100%;
      // height: 454px;
      margin-left: 100px;
    }
  }
  
  .swiper-container {
    background-color: #000;
  }
  .swiper-slide {
    width: 100%;
    height: 100%;
  }
  .gallery-top {
    width: 628px;
    height: 458px;
    background: #fff;
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 15px;
    position: static;
    overflow: hidden;
    .swiper-slide {
      border-radius: 30px;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .video {
        border-radius: 30px;
        overflow: hidden;
      }
    }
  }
  .gallery-thumbs {
    width: 628px;
    height: 458px;
    background: #fff;
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    padding: 15px;
    position: absolute;
    top: 0px;
    right: -680px;
    display: flex;
    flex-direction: row;
    .swiper-slide {
      width: 100%;
      height: 100%;
      border-radius: 30px;
      .video {
        width: 100%;
        height: 100%;
        border-radius: 30px;
      }
    }
  }
  
  &__form {
    
    .modal-popup {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 18px;
  background: @light-blue;
  border-radius: 35px;
  position: relative;
  overflow: hidden;
  
  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid @blue;
    border-radius: 30px;
    padding: 34px 176px 20px;
    position: relative;
  }
  
  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
    border-bottom-right-radius: 30px;
  }
  
  &__subtitle {
    font-size: 19px;
    font-family: @font-Tagir;
    font-weight: 600;
    color: @blue;
    margin-bottom: 11px;
  }
  
  &__title {
    font-size: 25px;
    font-family: @bold;
    color: @black;
    width: 100%;
    max-width: 500px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  &__content {
    width: 100%;
    .content-form {
      width: 100%;
      max-width: 528px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-bottom: 26px;
      
      &__input {
        position: relative;
        width: 100%;
        max-width: 260px;
        font-size: 18px;
        color: #84878C; 
        width: 260px;
        height: 45px;
        background: @white;
        border: 1px solid #CBE7F5;
        box-sizing: border-box;
        border-radius: 100px;
        padding: 17px 21px 15px 21px;
        outline: none;
      
        input[type="text"]::-moz-placeholder { color: #84878C; font-size: 18px; }
        input[type="text"]::-webkit-input-placeholder { color: #84878C; font-size: 18px; }
        input[type="text"]:-ms-input-placeholder { color: #84878C; font-size: 18px; }
        input[type="text"]::-ms-input-placeholder { color: #84878C; font-size: 18px; }
        input[type="text"]::placeholder { color: #84878C; font-size: 18px; }
        
      }
      
      &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 232px;
        height: 48px;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: @white;
        background: @red;
        border-radius: 100px;
        cursor: pointer;
        margin: 0 auto;
        margin-bottom: 11px;
      }
    }
    
   
    
    .content-privacy-policy {
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
      position: relative;
      &__checkbox {
        display: block;
        position: absolute;
        top: -3px;
        left: 0;
      }
      
      &__text {
        padding-left: 25px;
        font-size: 12px;
        line-height: 14px;
        color: @grey;
        a {
          color: @blue;
          text-decoration: none;
        }
      }
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
  .video-fragments {
    padding-left: 16px;
    padding-right: 16px;
  }
  .video-fragments__content {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .video-fragments__content .video-fragments-text-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin-bottom: 30px;
    text-align: center;
  }
  .video-fragments__content .video-fragments-slide-content {
    margin-left: 12px;
    width: auto;
  }
}

@media (max-width: 1024px) {
  .video-fragments__form {
    display: none;
  }
}

@media (max-width: 767px) {
  .video-fragments__content .video-fragments-text-content {
    max-width: 100%;
  }
  .video-fragments__content .video-fragments-text-content__subtitle {
    font-size: 15px;
    margin-bottom: 9px;
  }
  .video-fragments__content .video-fragments-text-content__title {
    font-size: 20px;
    line-height: 23px;
    max-width: 230px;
    margin-bottom: 20px;
  }
  .video-fragments__content .video-fragments-text-content__text {
    max-width: 290px;
  }
  
  .video-fragments .gallery-top {
    width: 450px;
    height: 360px;
  }
  .video-fragments .gallery-thumbs {
    width: 450px;
    height: 360px;
    right: -480px;
  }
  
  .swiper-button-prev {
    top: 110%;
    left: 35%;
  }
  
  .swiper-button-next {
    top: 110%;
    right: 35%;
  }
}

@media (max-width: 500px) {
  .video-fragments {
    padding-bottom: 0px;
  }
  .video-fragments .gallery-top {
    width: 265px;
    height: 205px;
    box-shadow: none;
    padding: 0px;
    overflow: hidden;
  }
  .video-fragments .gallery-thumbs {
    width: 265px;
    height: 205px;
    right: -285px;
    box-shadow: none;
    padding: 0px;
  }
  
  .swiper-button-prev {
    top: 115%;
    left: 25%;
  }
  
  .swiper-button-next {
    top: 115%;
    right: 25%;
  }
}
</style>
