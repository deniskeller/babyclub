<script>
import Inputmask from 'inputmask';
import Checkbox from './Checkbox.vue';
export default {
  components: {
    Checkbox
  },
  props: { 
    priceItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  
  mounted () {
    var im = new Inputmask("+7 (999)999-99-99");
    im.mask(document.getElementById('modal-programs-info'));
  },
  
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm');
    },
    
  }
};
</script>

<template>
  <transition name="popup-fade">
    <div class="modal-popup" @click.self="close">
      <div class="modal-popup__container">
        
        <div class="modal-popup__header">
          <div class="header-img">
            <img src="@/assets/img/baby-icon.svg" alt="">
          </div>
          <div class="header-info">
            <div class="header-info__group">8 мес - 1,5 года</div>
            <div class="header-info__name"><span class="uppercase">БЭБИК 1</span> от <span class="bold">3 900</span> руб/месяц</div>
          </div>
        </div>
       
       <div class="modal-popup__content">
         
         <div class="content-item content-item-left">
           <div class="content-item__img">
             <!--<img src="@/assets/img/group-img.svg" alt="">-->
           </div>
           <div class="content-item__title">ЧТО ИЗУЧАЕМ</div>
           <div class="content-item__text content-item__text-desktop">
             <p>Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира.</p> 
             <p>Точки на ладошках отвечают за развитие речевого центра малышей: делая пальчиковую гимнастику и развивая мелкую моторику, мы готовим детей к речи.</p>
             <p>Развиваем ловкость и координацию движений малышей в подвижных играх и танцах.</p>
             <p>В игре малыши не только приобретают коммуникативные навыки, но и начинают чувствовать себя более уверенно в новом пространстве.</p>
           </div>
           
           <div class="content-item__text content-item__text-mobile">
             <p>Малыши учатся общаться с другими детьми, узнают новые слова, предметы и явления окружающего мира.</p> 
             <p>1. <span class="bold">Небольшие</span> группы — <span class="bold">до 15 детей</span></p>
             <p>2. С детьми <span class="bold">одновременно</span> работают <span class="bold">3 специалиста</span></p>
             <p>3. <span class="bold">Разница в возрасте</span> детей в одной группе - <span class="bold">до 3 лет</span></p>
           </div>
           
         </div>
         
         <div class="content-item content-item-middle">
           <div class="content-item__img">
             <!--<img src="@/assets/img/group-img.svg" alt="">-->
           </div>
           <div class="content-item__title">ЧТО ПОЛУЧАЕМ</div>
           <div class="content-item__hashtag">
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Пальчиковая гимнастика</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Словарный запас</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Социализация</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Моторика</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Логоритмика</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Игры</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Цифры</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Координация движений</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Танцы</span>
             </div>
             <div class="hashtag-item">
               <span class="hashtag-item__hashtag">#</span><span class="hashtag-item__text">Буквы</span>
             </div>
           </div>
         </div>
         
         <div class="content-item content-item-right">
           <div class="content-item__img">
             <!--<img src="@/assets/img/group-img.svg" alt="">-->
           </div>
           <div class="content-item__title">РАСПИСАНИЕ</div>
           <div class="content-item__schedule">
             <div class="schedule-item">
               <span class="schedule-item__day">Понедельник</span>
               <span class="schedule-item__space"></span>
               <span class="schedule-item__time">09:30 - 11:30</span>
             </div>
             <div class="schedule-item">
               <span class="schedule-item__day">Четверг</span>
               <span class="schedule-item__space"></span>
               <span class="schedule-item__time">11:30 - 13:30</span>
             </div>
             <div class="schedule-item">
               <span class="schedule-item__day">Воскресенье</span>
               <span class="schedule-item__space"></span>
               <span class="schedule-item__time">16:30 - 18:30</span>
             </div>
           </div>
           <div class="content-item__title">ЦЕНЫ</div>
           <div class="content-item__price">
             <div v-for="(item, i) in priceItem" :key="i" class="price-item">
               <span class="price-item__name">{{ priceItem[i].name }}</span> 
               <span class="price-item__price">{{ priceItem[i].price }}</span>
             </div>
           </div>
           <div class="content-item__payment">Оплатить</div>
         </div>
         
       </div>
            
        <div class="modal-popup__form">
          <div class="modal-popup__form__container">
            <img class="modal-popup__form__img" src="@/assets/img/programs-form-icon.svg" alt="">
            <div class="modal-popup__form__subtitle">
              Ваш ребенок в надежных руках
            </div>
            <div class="modal-popup__form__title">Запишитесь на пробное занятие</div>
            
            <div class="modal-popup__form__content">
              <div class="content-form">
                <input class="content-form__input" type="text" placeholder="Имя"/>
                <input class="content-form__input" type="text" placeholder="+7 (___)___-__-__" id="modal-programs-info"/>
              </div>
              <div class="content-btn" @click="confirm">Хочу пойти</div>
              
              <div class="content-privacy-policy">
                <Checkbox 
                  :is_active="false"
                  class="content-privacy-policy__checkbox"/>
                <div class="content-privacy-policy__text">Оставляя свои контактные данные, Вы соглашаетесь с <a href="#">политикой конфиденциальности.</a></div>
              </div>
              
            </div>
            
          </div>
        </div>
        
        
        <div class="modal-popup__close" @click="close">
          <img src="@/assets/img/close-icon.svg" alt="">
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.modal-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100010;
  overflow-y: scroll;
  padding-top: 50px;
  padding-bottom: 50px;
  
  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 1077px;
    border-radius: 3px;
    background-color: @white;
    z-index: 10001;
    padding: 30px 47px 50px;
  }
  
  &__header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    .header-img {
      width: 96px;
      height: 96px;
      border-radius: 100px;
      margin-right: 36px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      -webkit-background-size: cover;
      background-size: cover;
      img {
        width: 96px;
        height: 96px;
        border-radius: 100px;
      }
    }
    .header-info {
      &__group {
        font-size: 19px;
        color: @blue;
        font-family: @font-Tagir;
        margin-bottom: 5px;
      }
      &__name {
        font-size: 30px;
        color: @black;
        .uppercase {
          text-transform: uppercase;
        }
        .bold {
          font-family: @bold;
          color: @red;
        }
      }
    }
  }
  
  &__content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
    
    .content-item {
      width: 100%;
      max-width: 304px;
      
      &__img {
        background: @grey url('../assets/img/group-img.svg') no-repeat center;
        margin-bottom: 23px;
        width: 100%;
        max-width: 304px;
        height: 200px;
        -webkit-background-size: cover;
        background-size: cover;
        img {
          width: 100%;
          height: 100%;
        }
      }
      
      &__title {
        font-size: 20px;
        font-family: @bold;
        text-transform: uppercase;
        color: @black;
        padding-bottom: 13px;
        border-bottom: 2px dashed #4C85F7;
        margin-bottom: 15px;
      }
      
      &__text {
        font-size: 16px;
        color: @light-black;
        p {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0px;
          }
          .bold {
            color: @black;
            font-family: @bold-extra;
          }
        }
      }
      
      &__text-mobile {
        display: none;
      }
      
      &__hashtag {
        .hashtag-item {
          font-size: 14px;
          color: @black;
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0px;
          }
          &__hashtag {
            color: @red;
            margin-right: 5px;
          }
        }
      }
      
      &__schedule {
        margin-bottom: 38px;
        .schedule-item {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: baseline;
          font-size: 14px;
          color: @black;
          margin-bottom: 11px;
          &:last-child {
            margin-bottom: 0px;
          }
          &__space {
            width: 100%;
            height: 1px;
            border-bottom: 0.5px dashed @black;
            margin-right: 8px;
            margin-left: 8px;
          }
          &__time {
            align-self: flex-end;
            white-space: nowrap;
          }
        }
        
      }
      
      &__price {
        margin-bottom: 22px;
        .price-item {
          margin-bottom: 13px;
          &:last-child {
            margin-bottom: 0px;
          }
          &__name {
            font-size: 16px;
            color: @black;
            margin-right: 36px;
            br.mobile {
              display: none;
            }
          }
          &__price {
            font-size: 16px;
            color: @red;
            font-family: @bold;
          }
        }
      }
      
      &__payment {
        width: 100%;
        max-width: 300px;
        height: 48px;
        background: @red;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        font-family: @bold;
        color: @white;
        cursor: pointer;
      }
    }
  }
  
  &__form {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  padding: 18px;
  background: @light-blue;
  border-radius: 35px;
  position: relative;
  
  &__container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid @blue;
    border-radius: 30px;
    padding: 34px 176px 20px;
  }
  
  &__img {
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 35px;
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
    }
    
    .content-btn {
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
    
    .content-privacy-policy {
      width: 100%;
      max-width: 540px;
      margin: 0 auto;
      &__checkbox {
        display: block;
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
  
  &__close {
    position: absolute;
    z-index: 10000;
    right: -15px;
    top: -15px;
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background: @light-blue;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
}

@media (max-width: 1170px) {
  .modal-popup__container {
    max-width: 95%;
  }
  .modal-popup__content {
    justify-content: space-around;
  }
  .modal-popup__content .content-item-middle {
    display: none;
  }
  .modal-popup__form__container {
    padding: 26px 20px 30px;
  }
  .modal-popup__form__content .content-form {
    flex-direction: column;
    align-items: center;
  }
  .modal-popup__form__content .content-form__input {
    &:first-child {
      margin-bottom: 11px;
    }
  }
  .modal-popup__form__img {
    display: none;
  }
}

@media (max-width: 768px) {
  .modal-popup__container {
    padding: 20px 23px;
  }
  .modal-popup__content {
    flex-direction: column;
    align-items: center;
  }
  .modal-popup__content .content-item-right .content-item__img {
    display: none;
  }
  .modal-popup__content .content-item-left .content-item__text {
    margin-bottom: 38px;
  }
  .modal-popup__content .content-item__text-desktop {
    display: none;
  }
  .modal-popup__content .content-item__text-mobile {
    display: block;
  }
  .modal-popup__form {
    background: none;
  }
  .modal-popup__form__container {
    border: none;
  }
}

@media (max-width: 500px) {
  .modal-popup__container {
    max-width: 90%;
  }
  .modal-popup__header {
    align-items: flex-start;
  }
  .modal-popup__header .header-img {
    width: 42px;
    height: 42px;
    margin-right: 10px;
    img {
      width: 42px;
      height: 42px;
    }
  }
  .modal-popup__header .header-info__group {
    font-size: 15px;
  }
  .modal-popup__header .header-info__name {
    font-size: 20px;
  }
  .modal-popup__header .header-info__name .uppercase {
    display: block;
  }
  .modal-popup__content .content-item__img {
    height: 169px;
  }
  
  .modal-popup__content .content-item__price .price-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .modal-popup__content .content-item__price .price-item__name br.mobile {
    display: block;
  }
  
  .modal-popup__form {
    padding: 0px;
  }
  .modal-popup__form__container {
    align-items: flex-start;
    padding: 0px;
  }
  .modal-popup__form__subtitle {
    font-size: 15px;
  }
  .modal-popup__form__title {
    font-size: 20px;
    text-align: left;
    margin-bottom: 20px;
  }
  .modal-popup__form__content .content-btn {
    max-width: 260px;
    width: 100%;
  }
  
  .modal-popup__close {
    width: 40px;
    height: 40px;
    img {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
