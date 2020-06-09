<script>
export default {
  components: {
    
  },
  props: {
    faqLeft: {
      type: Array,
      default() {
        return []
      }
    },
    faqRight: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      active_item_id: 0,
      is_active: false,
      swiperOptionMobile: {
        spaceBetween: 12,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
      },
    };
  },
  computed: {},
  methods: {
    
    showAnswer(number){
      if (this.active_item_id == number){
        this.active_item_id = null;
      }else{
        this.active_item_id = number;
      }
    },
   
    show() {
      this.$emit('show');
    },
  },
  
};
</script>

<template>
  <div class="container">
    <div class="faq-content">
      <div class="faq-content__subtitle">Вопросы это хорошо</div>
      <div class="faq-content__title">ВОПРОСЫ И ОТВЕТЫ</div>
      
      <div class="faq-content__content faq-items faq-items-desktop">
        
        <img class="faq-img" src="@/assets/img/faq-img.svg" alt="">
        
        <div class="faq-items-left faq-items-container">
          
          <div v-for="(item, i) in faqLeft" :key="i" class="faq-item" @click="showAnswer(faqLeft[i].id)" :ref="'showItem-' + faqLeft[i].id">
            <div class="faq-item__overlay">
              <img :class="{ is_active: active_item_id == faqLeft[i].id }" class="faq-arrow" src="@/assets/img/faq-arrow.svg" alt="">
              <div class="faq-item__question">
                <div class="faq-item__question-text">
                  <p>{{ faqLeft[i].quest }}</p>
                </div>
              </div>
              <div class="faq-item__answer" v-show="active_item_id == faqLeft[i].id">{{ faqLeft[i].answer }}</div>
            </div>
          </div>
          
        </div>
        
        <div class="faq-items-right faq-items-container">
          
          <div v-for="(item, i) in faqRight" :key="i" class="faq-item" @click="showAnswer(faqRight[i].id)" :ref="'showItem-' + faqRight[i].id">
            <div class="faq-item__overlay">
              <img :class="{ is_active: active_item_id == faqRight[i].id }" class="faq-arrow" src="@/assets/img/faq-arrow.svg" alt="">
              <div class="faq-item__question">
                <div class="faq-item__question-text">
                  <p>{{ faqRight[i].quest }}</p>
                </div>
              </div>
              <div class="faq-item__answer" v-show="active_item_id == faqRight[i].id">{{ faqRight[i].answer }}</div>
            </div>
          </div>
          
        </div>
        
      </div>
      
      
      <div class="faq-items-mobile">
        <swiper :options="swiperOptionMobile" class="faq-items-mobile__slider">
          <swiper-slide v-for="(item, i) in faqLeft.concat(faqRight)" :key="i">
            <div class="faq-item" @click="showAnswer(item.id)" :ref="'showItem-' + item.id">
              <div class="faq-item__overlay">
                <div class="faq-item__question">
                  <div class="faq-item__question-text">
                    <p>{{ item.quest }}</p>
                  </div>
                  
                </div>
                <div class="faq-item__answer" v-show="active_item_id == item.id" >{{ item.answer }}</div>
              </div>
              <img :class="{ is_active: active_item_id == item.id }" class="faq-arrow" src="@/assets/img/faq-arrow.svg" alt="">
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      <div class="faq-content__button next-button" @click="show()">
        Задать вопрос
        <div class="next-button__img">
          <img class="arrow-next" src="@/assets/img/faq-question.svg" alt="">
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.faq-content {
  padding-top: 60px;
  padding-bottom: 110px;
  
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    position: relative;
    
    .faq-img {
      width: 280px;
      height: 306px;
      -webkit-transform: rotate(2.18deg);
      transform: rotate(0.18deg);
      position: absolute;
      right: 160px;
      top: 282px;
      z-index: -1;
    }
    
    .faq-items-container {
      width: 100%;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      .faq-item {
        width: 100%;
        max-width: 558px;
        background: @light-blue;
        border-radius: 10px;
        padding: 7px;
        margin-bottom: 20px;
        cursor: pointer;
        &__overlay {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 25px 30px 25px 25px;
          border: 1px solid #4A86F8;
          border-radius: 10px;
          position: relative;
          .faq-arrow {
            width: 8px;
            height: 14px;
            position: absolute;
            right: 14px;
            top: 45px;
            &.is_active {
              transform: rotate(90deg);
            }
          }
          .faq-item__question {
            width: 100%;
            max-width: 400px;
            min-height: 50px;
            display: flex;
            align-items: center;
            &-text {
              font-size: 18px;
              line-height: 24px;
              color: @black;
            }
          }
          .faq-item__answer {
            font-size: 18px;
            line-height: 24px;
            color: @black;
            margin-top: 40px;
          }
        }
      }
    }
  }
  
  .next-button {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 206px;
    height: 45px;
    padding-left: 20px;
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
        height: 18px;
      }
    }
  }
  
  .faq-items-mobile {
    display: none;
    margin-bottom: 25px;
    &__slider {
      .swiper-slide {
        width: 243px;
      }
    }
    
    .faq-item {
      width: 243px;
      min-height: 170px;
      background: #F3F7FF;
      border-radius: 10px;
      padding: 17px 15px 20px 20px;
      position: relative;
      &__question-text {
        font-size: 18px;
        line-height: 24px;
        color: @black;
      }
      .faq-arrow {
        width: 8px;
        height: 14px;
        position: absolute;
        right: calc(50% - 4px);
        bottom: 3px;
        transform: rotate(90deg);
        &.is_active {
          transform: rotate(-90deg);
        }
      }
      &__answer {
        margin-top: 25px;
      }
    }
  } 
}

@media (max-width: 1200px) {
  .faq-content {
    padding-left: 16px;
    padding-right: 16px;
    
    &__subtitle, &__title {
    text-align: center;
  }
  }
  .faq-content__content {
    justify-content: center;
    flex-wrap: wrap;
  }
  
}

@media (max-width: 500px) {
  .faq-content {
    padding-right: 0px;
    padding-bottom: 35px;
  }
  .faq-content__subtitle {
    font-size: 15px;
  }
  .faq-content__title {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  
  .faq-items-desktop {
    display: none;
  }
  .faq-items-mobile {
    display: block !important;
  }
  
  .faq-content .next-button {
    max-width: 288px;
    justify-content: center;
    padding-left: 0px;
    margin-left: inherit;
  }
}

</style>