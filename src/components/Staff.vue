<script>
export default {
  components: {},
  props: {
    persons: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        slidesPerView: 1,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 27,
        slidesPerView: 3,
        loopedSlides: 4,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionName: {
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionStaffInfo: {
        slidesPerView: 1,
        loop: true,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      
      swiperOptionMobile: {
        spaceBetween: 16,
        slidesPerView: 'auto',
        loop: true,
        slideToClickedSlide: true
      }
    };
  }
};
</script>

<template>
  <div class="staff">
    <div class="container">
      <div class="staff__content">
        <div class="staff__unit-info unit-info">
          <div class="unit-info__subtitle">У нас работают только</div>
          <div class="unit-info__title">ПРОФЕССИОНАЛЬНЫЕ СПЕЦИАЛИСТЫ</div>
          
          <swiper :options="swiperOptionStaffInfo" class="" ref="staffInfo">
            <swiper-slide v-for="(item, i) in persons" :key="i" class="slide">
              <span class="unit-info__item-overflow">
                <div class="unit-info__name">{{ persons[i].name }}</div>
                <div class="unit-info__profession">{{ persons[i].profession }}</div>
                <div class="unit-info__about-subtitle">{{ persons[i].aboutSubtitle }}</div>
                <div v-for="(elem, index) in persons[i].aboutTitle" :key="index" class="unit-info__about-title">{{ persons[i].aboutTitle[index] }}</div>
                <div class="unit-info__about-education">{{ persons[i].aboutEducation }}</div>
              </span>
            </swiper-slide>
          </swiper>
          <div class="unit-info__about-quote">
            <div class="unit-info__about-img">
              <img src="@/assets/img/angel.svg" alt="">
            </div>
            <div class="border">
              <div class="quote">
                «Постоянное развитие — это залог успеха <span class="red">в работе с детьми!»</span>
              </div>
            </div>
          </div>
          
        </div>
        <div class="staff__slide staff-slide">
          <div class="staff-slide__about-unit about-unit">
            <div class="about-unit__item">
              <img class="staff-line-1" src="@/assets/img/staff-line1.svg" alt="">
              <div class="about-unit__item-img">
                <img src="@/assets/img/staff-img1.svg" alt="">
              </div>
              <div class="about-unit__item-text">
                Наши специалисты проходят многоступенчатый конкурсный отбор. У нас не работают преподаватели без образования и опыта.
              </div>
            </div>
            
            <div class="about-unit__item">
              <div class="about-unit__item-img">
                <img src="@/assets/img/staff-img2.svg" alt="">
              </div>
              <div class="about-unit__item-text">Постоянное развитие: проводим Ежегодный общий съезд всех специалистов “Бэби-клуба”, делимся опытом и осваиваем новые методики.</div>
            </div>
            
            <div class="about-unit__item item-absolute">
              <img class="staff-line-2" src="@/assets/img/staff-line2.svg" alt="">
              <div class="about-unit__item-img">
                <img src="@/assets/img/staff-img3.svg" alt="">
              </div>
              <div class="about-unit__item-text">Обучение сотрудников проходит беспрерывно: ежемесячные семинары, ежегодное подтверждение квалификации.</div>
            </div>
          </div>
          <div class="staff-slide__unit slide-unit">
            <div class="gallery-top__unit-info unit-info">
              <swiper :options="swiperOptionName" class="unit-info__slider" ref="swiperName">
                <swiper-slide v-for="(item, i) in persons.slice(1)" :key="i" class="slide">
                  <div class="unit-info__name">{{ persons[i + 1].name }}</div>
                  <div class="unit-info__profession">{{ persons[i + 1].profession }}</div>
                </swiper-slide>
                <swiper-slide class="slide">
                  <div class="unit-info__name">{{ persons[0].name }}</div>
                  <div class="unit-info__profession">{{ persons[0].profession }}</div>
                </swiper-slide>
              </swiper>
            </div>
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
              <swiper-slide v-for="(item, i) in persons" :key="i" :class="'slide-' + (i + 1)"><img :src="persons[i].photo" alt=""></swiper-slide>
              <div class="swiper-button-prev" slot="button-prev">
                <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
              <div class="swiper-button-next" slot="button-next">
                <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
              </div>
            </swiper>
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
              <swiper-slide v-for="(item, i) in persons.slice(1)" :key="i" :class="'slide-' + (i + 2)"><img :src="persons[i + 1].photo" alt=""></swiper-slide>
              <swiper-slide class="slide-1"><img src="@/assets/img/staff-unit0.svg" alt=""></swiper-slide>
            </swiper>
          </div>
          <div class="staff-slide__unit-mobile slide-unit-mobile">
            <swiper :options="swiperOptionMobile" class="">
              <swiper-slide v-for="(item, i) in persons" :key="i">
                <div class="slide-unit-mobile__item">
                  <div class="slide-unit-mobile__img">
                    <img :src="persons[i].photo" alt="">
                  </div>
                  <div class="slide-unit-mobile__name">{{ persons[i].name }}</div>
                  <div class="slide-unit-mobile__profession">{{ persons[i].profession }}</div>
                  <div class="slide-unit-mobile__about-subtitle">{{ persons[i].aboutSubtitle }}</div>
                  <div v-for="(elem, index) in persons[i].aboutTitle" :key="index" class="slide-unit-mobile__about-title">{{ persons[i].aboutTitle[index] }}</div>
                  <div class="slide-unit-mobile__about-education">{{ persons[i].aboutEducation }}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";
.staff {
  width: 100%;
  height: 1080px;
  background: url('../assets/img/staff-bg.svg') center no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  
  &__content {
    display: flex;
    flex-direction: row;
  }
  .unit-info {
    width: 100%;
    max-width: 385px;
    padding-top: 190px;
    
    &__slider {
      .slide {
        background: none;
      }
    }
    
    &__subtitle {
      font-size: 19px;
      font-family: @font-Tagir;
      color: @white;
      margin-bottom: 10px;
    }
    &__title {
      font-size: 30px;
      line-height: 37px;
      font-family: @bold;
      color: @white;
      margin-bottom: 75px;
    }
    &__name {
      font-size: 25px;
      color: @white;
      font-family: @bold;
      margin-bottom: 5px;
    }
    &__profession {
      font-size: 14px;
      color: @white;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 35px;
    }
    &__about-subtitle {
      font-size: 16px;
      color: @white;
      margin-bottom: 10px;
    }
    &__about-title {
      font-size: 18px;
      font-family: @bold;
      color: @white;
      margin-bottom: 25px;
    }
    &__about-education {
      font-size: 16px;
      color: @white;
      margin-bottom: 164px;
      width: 100%;
      max-width: 330px;
    }
    &__about-img {
      position: absolute;
      top: -153px;
      left: calc(50% - 76px);
      width: 152px;
      height: 140px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__about-quote {
      position: relative;
      width: 293px;
      height: 157px;
      background: #FFDAD9;
      border-radius: 10px;
      padding: 9px;
      .border {
        font-size: 18px;
        color: @black;
        line-height: 24px;
        background: #FFF5F4;
        border: 1px solid #F55853;
        border-radius: 10px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 30px;
        .red {
          display: block;
          color: @red;
        }
      }
    }
  }
  
  .staff-slide {
    padding-top: 85px;
    
    .about-unit {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      width: 100%;
      max-width: 672px;
      position: relative;
      margin-left: 130px;
      margin-bottom: 50px;
      
      &__item {
        width: 100%;
        max-width: 295px;
        position: relative;
        z-index: 10000;
        .staff-line-1 {
          position: absolute;
          z-index: -1;
          top: -85px;
          left: 60px;
        }
        &-text {
          font-size: 14px;
          line-height: 19px;
          letter-spacing: 1px;
          font-family: @bold;
          color: @white;
          margin-top: 10px;
        }
      }
      .item-absolute {
        position: absolute;
        right: 0;
        bottom: -240px;
        .staff-line-2 {
          position: absolute;
          z-index: -1;
          top: 10px;
          left: 62px;
        }
      }
    }
    
    .slide-unit {
      position: relative;
      width: 312px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.14);
      border-radius: 40px;
      background: @white;
      border: 10px solid @white;
      .unit-info {
        position: absolute;
        bottom: -95px;
        right: -300px;
        z-index: 1000;
        text-align: center;
        &__name {
          font-size: 18px;
          line-height: 22px;
          font-family: @bold;
          color: @black;
        }
        &__profession {
          font-size: 13px;
          font-weight: 300;
          color: @grey;
          text-transform: uppercase;
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

  .swiper-container {
    position: static;
    margin-left: 0;
    margin-right: 0;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    /*background: @grey;*/
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .gallery-top {
    width: 292px;
    height: 539px;
    border-radius: 35px;
    background: #FFFFFF;
    .swiper-slide {
      background-size: cover;
      /*background: @grey url('../assets/img/staff-unit0.svg') no-repeat center;*/
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
  .gallery-thumbs {
    width: 737px;
    height: 231px;
    position: absolute;
    left: 340px;
    bottom: 0px;
    
  }
  .gallery-thumbs .swiper-slide {
    width: 229px;
    height: 231px;
    border-radius: 40px;
    overflow: hidden;
    background: @grey url('../assets/img/staff-unit0.svg') no-repeat center;
    background-size: cover;
  }
  
  .slide-unit-mobile {
    display: none;
    .slide-unit-mobile .swiper-container {
      position: static;
      overflow: visible;
    }
    .swiper-slide {
      width: 248px;
      height: 273px;
    }
    &__item {
      width: 248px;
      height: 273px;
      background: @red;
      border-radius: 10px;
      padding: 60px 14px 22px;
      position: relative;
    }
    &__img {
      width: 85px;
      height: 85px;
      border-radius: 100px;
      overflow: hidden;
      position: absolute;
      top: -40px;
      left: 15px;
    }
    &__name {
      font-size: 20px;
      color: @white;
      font-family: @bold;
      margin-bottom: 12px;
    }
    &__profession {
      font-size: 14px;
      color: @white;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 25px;
    }
    &__about-subtitle {
      font-size: 14px;
      color: @white;
      margin-bottom: 5px;
    }
    &__about-title {
      font-size: 16px;
      font-family: @bold;
      color: @white;
      margin-bottom: 15px;
    }
    &__about-education {
      font-size: 14px;
      color: @white;
      width: 100%;
      max-width: 220px;
    }
  }
  
  @media (max-width: 1300px) {
    .staff {
      padding-left: 16px;
      padding-right: 16px;
    }
    .staff .staff-slide .about-unit {
      margin-left: 25px;
    }
  }
  
  @media (max-width: 1070px) {
    .staff .staff-slide .about-unit {
      display: none;
    }
    .staff .staff-slide[data-v-5a9c3ee0] {
      padding-top: 360px;
    }
  }
  
  @media (max-width: 1024px) {
    .staff {
      background: none;
      height: 100%;
    }
    .staff__content {
      flex-direction: column;
    }
    .staff .unit-info {
      padding-top: 0px;
    }
    .staff .unit-info__subtitle {
      font-size: 15px;
      color: @blue;
    }
    .staff .unit-info__title {
      font-size: 20px;
      line-height: 25px;
      color: @black;
      margin-bottom: 60px;
    }
    .staff .unit-info__name {
      display: none;
    }
    .staff .unit-info__profession {
      display: none;
    }
    .staff .unit-info__about-subtitle {
      display: none;
    }
    .staff .unit-info__about-title {
      display: none;
    }
    .staff .unit-info__about-education {
      display: none;
    }
    .staff .unit-info__about-quote {
      display: none;
    }
    .staff .staff-slide {
      padding-top: 0px !important;
    }
    .staff .staff-slide .slide-unit {
      display: none;
    }
    
    .slide-unit-mobile {
      display: block;
    }
    .swiper-slide {
      background: none;
      overflow: visible;
    }
    .slide-unit-mobile .swiper-container {
      position: static;
      overflow: visible;
    }
    
  }

</style>
