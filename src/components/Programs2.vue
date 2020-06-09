<script>
import Checkbox from './Checkbox.vue';
import Inputmask from 'inputmask';
import ModalTimetable from './ModalTimetable.vue';
import ProgramsSwitch1 from './ProgramsSwitch1.vue';
import ProgramsSwitch2 from './ProgramsSwitch2.vue';
export default {
  components: {
    Checkbox,
    ModalTimetable,
    ProgramsSwitch1,
    ProgramsSwitch2
  },
  props: {
    offerSubtitle: {
      type: String,
      default: ""
    },
    offerTitle: {
      type: String,
      default: ""
    },
    babies: {
      type: Array,
      default() {
        return []
      }
    },
    monday: {
      type: Array,
      default() {
        return []
      }
    },
    tuesday: {
      type: Array,
      default() {
        return []
      }
    },
    wednesday: {
      type: Array,
      default() {
        return []
      }
    },
    thursday: {
      type: Array,
      default() {
        return []
      }
    },
    friday: {
      type: Array,
      default() {
        return []
      }
    },
    saturday: {
      type: Array,
      default() {
        return []
      }
    },
    sunday: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      active: false,
      activeSlide: 1,
      isModalTimetable: false,
      // index: 1,
      switch_age: [
        '8 мес - 1,5 года',
        '1,5 - 2,5 года',
        '2,5 - 3,5 года',
        '3,5 - 4,5 года',
        '4,5 - 5,5 года',
        '5,5 - 7 года'
      ],
      switch_category: [
        'Общеразвивающие',
        'Дополнительные'
      ],
      swiperOptionMobile: {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 16
          },
        }
      },
      active_table: 0
    };
  },
  computed: { },
  mounted () {
    var im = new Inputmask("+7 (999)999-99-99");
    im.mask(document.getElementById('form-input-3'));

    Array.from(document.querySelectorAll('.btn-timetable_mounted')).map((elem, index) => {
      elem.addEventListener("click", () => {
        if (!this.isModalTimetable) {
          Array.from(document.querySelectorAll('.baby-slide')).map((el, i) => {
            i != index ? el.classList.add('baby-slide_hide') : el.classList.add('baby-slide_active');
          });
        } else {
          Array.from(document.querySelectorAll('.baby-slide')).map(el => {
            el.classList.remove('baby-slide_hide', 'baby-slide_active');
          });
        }
        
        this.isModalTimetable = !this.isModalTimetable;
      });
    });
    
  },
  methods: {
    fetchFn() {
      let data = {
        form_name: this.$refs.name.value,
        form_phone: this.$refs.phone.value
      };
      
      if (data.form_name != "" && data.form_phone != "" && this.active) {
        fetch('https://baby.4163.ru/api/form', {
          method: "POST",
          body: JSON.stringify(data)
        })
        .then(data => console.log(data));
        this.$emit('confirm');
      }
    },
    
    adopted() {
      this.$emit('adopted');
    },
    showAllTimetable() {
      this.$emit('showAllTimetable');
    },
    showTimetable(number) {
      if (this.active_table == number){
        this.active_table = null;
      }else{
        this.active_table = number;
      }
    }
  }
};
</script>

<template>
  <div class="programs">
    
    <div class="container">
      <div class="programs-top">
        <div class="programs-top__left">
          <div class="programs-top__left-subtitle">Ваш ребенок талантлив</div>
          <div class="programs-top__left-title">Наши программы</div>
        </div>
        
        <div class="programs-top__right">
          
          <div class="timetable">
            <img class="timetable__img" src="@/assets/img/arrow-to-3.svg" alt="">
            <div class="timetable__text">
              Посмотреть все програмы Бэби-клуба можно здесь
            </div>
            <div class="timetable__btn" @click="showAllTimetable">Расписание клуба</div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="programs-menu-classes">
      <div class="container">
        <div class="programs-menu">
          <img class="programs-menu__img" src="@/assets/img/programs-icon.svg" alt="">
          <div class="programs-menu__name">
            <div class="programs-menu__name-number">1</div>
            <div class="programs-menu__name-text">Выберите занятия</div>
          </div>
          <ProgramsSwitch2 
            class="select-switch-item"
            :items="switch_category"/>
        </div>
      </div>
    </div>
    
    <div class="programs-menu-age">
      <div class="container">
        <div class="programs-menu">
          <div class="programs-menu__name">
            <div class="programs-menu__name-number">2</div>
            <div class="programs-menu__name-text">Выберите возраст</div>
          </div>
          
          <ProgramsSwitch1 
            class="select-switch-item"
            :items="switch_age"/>
      
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="programs-info programs-info-desktop">
        
          <div class="slide-content-overlay">
              
              <swiper :options="swiperOptionMobile" class="slide-content">
                <swiper-slide v-for="(item, i) in babies" :key="i" class="baby-slide">
                    <div class="slide-content__item">
                      <div class="item-group">
                        <div class="item-group__img">
                          <img :src="babies[i].photo" alt="">
                        </div>
                        <div class="item-group__name">
                          <div class="item-group__name-title">{{ babies[i].title }}</div>
                          <div class="item-group__name-value">{{ babies[i].age }}</div>
                        </div>
                      </div>
                      
                      <div class="item-text">{{ babies[i].description }}</div>
                      <div class="item-price">от <span class="bold">{{ babies[i].price }}</span> руб/месяц</div>
                      <div class="item-buttons">
                        <div class="btn-info" @click="adopted">О программе</div>
                        <div class="btn-timetable btn-timetable_mounted next-button">
                          Расписание
                          <div class="next-button__img">
                            <img class="arrow-next" src="@/assets/img/arrow-next.svg" alt="">
                            <img class="arrow-next-hover" src="@/assets/img/arrow-next-b.svg" alt="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                
                <div class="swiper-button-prev" slot="button-prev" v-show="!isModalTimetable">
                  <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>

                <div class="swiper-button-next" slot="button-next" v-show="!isModalTimetable">
                  <img class="swiper-button-next__img" src="@/assets/img/arrow-next-b.svg" alt="">
                </div>
              </swiper>
          </div>
          <transition name="fade">
            <div v-if="isModalTimetable">
              <ModalTimetable
                :monday="monday"
                :tuesday="tuesday"
                :wednesday="wednesday"
                :thursday="thursday"
                :friday="friday"
                :saturday="saturday"
                :sunday="sunday"
              />
            </div>
          </transition>
      </div>
      
      <div class="programs-info programs-info-mobile">
        
        <div v-for="(item, i) in babies" :key="i" class="programs-info-mobile__item">
          <div class="slide-content__item">
            <div class="item-group">
              <div class="item-group__img">
                <img :src="babies[i].photo" alt="">
              </div>
              <div class="item-group__name">
                <div class="item-group__name-title">{{ babies[i].title }}</div>
                <div class="item-group__name-value">{{ babies[i].age }}</div>
              </div>
            </div>
            <div class="item-text">{{ babies[i].description }}</div>
            <div class="item-price">от <span class="bold">{{ babies[i].price }}</span> руб/месяц</div>
            <div class="item-buttons">
              <div class="btn-info" @click="adopted">О программе</div>
              <div class="btn-timetable" @click="showTimetable(i + 1)">
                Расписание
                <div class="btn-timetable__img">
                  <img class="arrow-next" src="@/assets/img/arrow-next.svg" alt="">
                </div>
              </div>
            </div>
          </div>
          <ModalTimetable v-if="active_table == (i + 1)"
            :monday="monday"
            :tuesday="tuesday"
            :wednesday="wednesday"
            :thursday="thursday"
            :friday="friday"
            :saturday="saturday"
            :sunday="sunday"
          />
        </div>
        
      </div>
      <div class="programs-timetable-btn" @click="showAllTimetable">Общее расписание клуба</div>
          
      <div class="modal-popup">
        <div class="modal-popup__container">
          <img class="modal-popup__img" src="@/assets/img/programs-form-icon.svg" alt="">
          <div class="modal-popup__subtitle">{{ offerSubtitle }}</div>
          <div class="modal-popup__title">{{ offerTitle }}</div>
          
          <form @submit.prevent="fetchFn" class="modal-popup__content">
            <div class="content-form">
              <input class="content-form__input" type="text" ref="name" placeholder="Имя"/>
              <input class="content-form__input" type="text" ref="phone" placeholder="+7 (___)___-__-__" id="form-input-3"/>
            </div>
            <button class="content-btn">Хочу пойти</button>
            
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
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";
.fade-enter-active {
  transition: .3s;
}

.fade-leave-active {
  transition: 0s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.programs {
  padding-bottom: 107px;
}
.programs-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 42px;
  
  &__left {
    &-subtitle {
      font-weight: 500;
      font-size: 19px;
      color: @blue;
      font-family: @font-Tagir;
      margin-bottom: 8px;
    }
    &-title {
      font-size: 30px;
      line-height: 37px;
      color: @black;
      font-family: @bold;
      text-transform: uppercase;
    }
  }
  
  &__right {
    width: 100%;
    max-width: 655px;
    background: @light-blue;
    border-radius: 10px;
    padding: 13px;
    position: relative;
    .timetable {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #4A86F8;
      border-radius: 10px;
      padding: 30px 60px 30px 30px;
      position: relative;
      &__img {
        position: absolute;
        right: 280px;
        bottom: 15px;
      }
      &__text {
        font-size: 18px;
        line-height: 24px;
        color: @black;
        max-width: 270px;
      }
      &__btn {
        width: 206px;
        height: 45px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: @red;
        border-radius: 100px;
        font-size: 16px;
        color: @white;
        cursor: pointer;
      }
    }
  }
}

.programs-menu-classes {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: @red;
  min-height: 72px;
  
  .programs-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    &__img {
      position: absolute;
      top: -117px;
      left: -315px;
    }
    
    &__name {
      display: inline-flex;
      align-items: center;
      min-width: 230px;
      &-number {
        width: 26px;
        height: 26px;
        border-radius: 100px;
        background: @white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: @red;
        margin-right: 8px;
      }
      &-text {
        font-size: 16px;
        color: @white;
      }
    }
    
  }
}

.programs-menu-age {
  background: @blue;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 28px;
  
  .programs-menu {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    &__name {
      display: inline-flex;
      align-items: center;
      min-width: 230px;
      &-number {
        width: 26px;
        height: 26px;
        border-radius: 100px;
        background: @white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: @blue;
        margin-right: 8px;
      }
      &-text {
        font-size: 16px;
        color: @white;
      }
    }
  }
}

.programs-info {
  position: relative;
  margin-bottom: 38px;
  .slide-content-overlay {
    width: 100%;
    position: relative;
    
    .baby-slide {
      &_active {
        .next-button {
          background: @blue;
          color: @white;
          &__img {
            background: @white;
            .arrow-next {
              display: none;
            }
            .arrow-next-hover {
              display: block;
              transform: rotate(180deg);
            }
          }
        }
        .slide-content {
          &__item {
            background: #F0F5FF;
          
            &:before {
              display: none;
            }
            
            .item-price {
              color: @red;
            }
            
            .item-buttons {
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    
      &_hide {
        display: none;
      }
    }
    
    .slide-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: static;
      transition: all .32s ease;
      &__item {
        width: 100%;
        max-width: 377px;
        min-height: 390px;
        background: @white;
        border-radius: 30px;
        cursor: pointer;
        position: relative;
        padding: 15px 22px 30px;
        &:before {
          position: absolute;
          right: 0;
          top: 26px;
          content: '';
          display: block;
          width: 0px;
          height: 100%;
          max-height: 340px;
          border: 1px dashed #4C85F7;
        }
        &:hover, &:active {
          background: #F0F5FF;
          &:before {
            display: none;
          }
          .item-price {
            color: @red;
          }
          .item-buttons {
            opacity: 1;
            visibility: visible;
          }
        }
        
        .item-group {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 21px;
          &__img {
            margin-right: 30px;
            width: 96px;
            height: 96px;
            border-radius: 100px;
            
            img {
              width: 100%;
            }
          }
          &__name {
            &-title {
              font-size: 22px;
              text-transform: uppercase;
              color: @black;
              margin-bottom: 7px;
            }
            &-value {
              font-size: 15px;
              color: @red;
              border-bottom: 1px dashed @red;
              width: max-content;
            }
          }
        }
        
        .item-text {
          font-size: 15px;
          line-height: 20px;
          color: @light-black;
          margin-bottom: 25px;
          max-width: 279px;
        }
        
        .item-price {
          font-size: 15px;
          color: @black;
          margin-bottom: 25px;
          
          .bold {
            font-size: 20px;
            font-family: @bold;
          }
        }
        
        .item-buttons {
          width: 100%;
          display: flex;
          justify-content: space-between;
          opacity: 0;
          visibility: hidden;
          transition: .2s;
          .btn-info {
            width: 162px;
            height: 43px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: @white;
            background: @blue;
            border-radius: 100px;
            cursor: pointer;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

.programs-info-mobile {
  display: none;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  &__item {
    width: 100%;
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  .slide-content__item {
    width: 100%;
    max-width: 288px;
    min-height: 390px;
    background: @white;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    margin: 0 auto;
    
    
    .item-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 21px;
      &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 30px;
        width: 96px;
        height: 96px;
        border-radius: 100px;
        -webkit-background-size: cover;
        background-size: cover;
      }
      &__name {
        &-title {
          font-size: 22px;
          text-transform: uppercase;
          color: @black;
          margin-bottom: 7px;
        }
        &-value {
          font-size: 15px;
          color: @red;
          border-bottom: 1px dashed @red;
          width: max-content;
        }
      }
    }
    
    .item-text {
      font-size: 15px;
      line-height: 20px;
      color: @light-black;
      margin-bottom: 25px;
      max-width: 279px;
    }
    
    .item-price {
      font-size: 15px;
      color: @red;
      margin-bottom: 25px;
      
      .bold {
        font-size: 20px;
        font-family: @bold;
      }
    }
    
    .item-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      .btn-info {
        width: 100%;
        max-width: 288px;
        height: 43px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: @white;
        background: @blue;
        border-radius: 100px;
        cursor: pointer;
        margin-right: 5px;
        margin-bottom: 12px;
      }
      .btn-timetable {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 288px;
        height: 43px;
        background: rgba(255, 255, 255, 0.4);
        border: 1px solid #4C85F7;
        border-radius: 100px;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        color: @blue;
        text-decoration: none;
        position: relative;
        margin: 0 auto;
        
        &__img {
          width: 39px;
          height: 39px;
          border-radius: 100px;
          background: @blue;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 1px;
          right: 2px;
          .arrow-next {
            width: 13px;
            height: 11px;
          }
        }
        &:hover, &:active {
          .btn-timetable__img {
            .arrow-next {
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }
}

.programs-timetable-btn {
  width: 100%;
  max-width: 288px;
  height: 45px;
  border-radius: 100px;
  background: @red;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: @white;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 32px;
}

.modal-popup {
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
  width: 162px;
  height: 43px;
  padding-left: 16px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #4C85F7;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  color: @blue;
  text-decoration: none;
  position: relative;
  margin: 0 auto;
  
  &__img {
    width: 39px;
    height: 39px;
    border-radius: 100px;
    background: @blue;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1px;
    right: 2px;
    .arrow-next {
      width: 13px;
      height: 11px;
    }
    .arrow-next-hover {
      display: none;
    }
  }
  &:hover, &:active {
    background: @blue;
    color: @white;
    .next-button__img {
      background: @white;
      .arrow-next {
        display: none;
      }
      .arrow-next-hover {
        display: block;
        transform: rotate(180deg);
      }
    }
  }
}


@media (max-width: 1350px) {
  .swiper-button-next {
    right: -40px;
    display: none;
  }
  .swiper-button-prev {
   left: -40px;
   display: none;
  }
}

@media (max-width: 1170px) {
  .programs-top {
    padding-left: 16px;
    padding-right: 16px;
  }
  
  .programs-menu-classes {
    padding: 11px 16px 20px;
  }
  .programs-menu-classes .programs-menu {
    flex-direction: column;
    align-items: flex-start;
  }
  .programs-menu-classes .programs-menu__name {
    margin-bottom: 17px;
  }
  
  .programs-menu-age {
    padding: 27px 16px 27px;
  }
  .programs-menu-age .programs-menu {
    flex-direction: column;
    align-items: flex-start;
  }
  .programs-menu-age .programs-menu__name {
    margin-bottom: 17px;
  }
  
  .modal-timetable {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto;
    margin-top: 20px;
  }
  .next-button:hover .next-button__img .arrow-next-hover, .next-button:active .next-button__img .arrow-next-hover {
    transform: rotate(90deg);
  }
  .programs-info {
    margin-bottom: 25px;
  }
  .programs-info .slide-content-overlay {
    padding-left: 16px;
    
    .baby-slide {
      &_active {
        margin: 0 auto !important;
      }
    }
  }
  
  .programs-info .slide-content-overlay .slide-content__item {
    .item-group__img {
      margin-right: 10px;
    }
    
    .item-buttons {
      flex-direction: column;
      
      .btn-info {
        margin: 0 auto 10px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .programs-info-mobile {
    display: flex;
  }
  
  .programs-info-desktop {
    display: none;
  }
  
  .programs-top {
    flex-direction: column;
    &__left {
      margin-bottom: 35px;
    }
  }
  
  .modal-popup {
    max-width: 90%;
  }
  .modal-popup__container {
    padding: 26px 20px 30px;
  }
  .modal-popup__img {
    display: none;
  }
  .modal-popup__content .content-form__input:first-child {
    margin-bottom: 11px;
  }
}

@media (max-width: 768px) {

  .programs-top {
    align-items: flex-start;
    margin-bottom: 25px;
  }
  .programs-top__left {
    margin-bottom: 0px;
  }
  .programs-top__right {
    display: none;
  }
  .programs-timetable-btn {
    display: flex;
  }
  
  .modal-popup__content .content-form {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 500px) {
  .programs {
    padding-bottom: 53px;
  }
  .modal-popup__container {
    align-items: flex-start;
  }
  .modal-popup__subtitle {
    font-size: 15px;
  }
  .modal-popup__title {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }
  .modal-popup {
    padding: 0px;
  }
  .modal-popup__content .content-form {
    margin-bottom: 17px;
  }
  .modal-popup__content .content-form__input {
    max-width: 242px;
    font-size: 16px;
  }
  input[type="text"]::-moz-placeholder { color: #84878C; font-size: 16px; }
  input[type="text"]::-webkit-input-placeholder { color: #84878C; font-size: 16px; }
  input[type="text"]:-ms-input-placeholder { color: #84878C; font-size: 16px; }
  input[type="text"]::-ms-input-placeholder { color: #84878C; font-size: 16px; }
  input[type="text"]::placeholder { color: #84878C; font-size: 16px; }
  
  .modal-popup__content .content-btn {
    margin-bottom: 24px;
  }
  
  .swiper-container-android .swiper-slide {
    width: 262px !important;
  }
  .programs-top__left-subtitle {
    font-size: 15px;
  }
  .programs-top__left-title {
    font-size: 20px;
    line-height: 25px;
  }
  .programs-info .slide-content-overlay .slide-content__item {
    width: 262px;
    padding: 9px 15px 15px;
    background: #F0F5FF;
  }
  .programs-info .slide-content-overlay .slide-content__item:before {
    display: none;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-group__img {
    width: 76px;
    height: 76px;
    margin-right: 21px;
    img {
      width: 76px;
      height: 76px;
    }
  }
  .programs-info .slide-content-overlay .slide-content__item .item-group__name-title {
    font-size: 18px;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-price {
    margin-bottom: 13px;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-buttons, .programs-info .slide-content-overlay .slide-content__item {
    flex-direction: column;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-buttons .btn-info {
    width: 234px;
    margin-bottom: 14px;
  }
  .next-button {
    width: 234px;
    justify-content: center;
    padding-left: 0px;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-buttons {
    display: flex;
  }
  .programs-info .slide-content-overlay .slide-content__item .item-price {
    color: @red;
  }
}
</style>
