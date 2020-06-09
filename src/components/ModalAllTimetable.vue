<script>
import ModalAllTimetableSwitch1 from './ModalAllTimetableSwitch1.vue';
import ModalAllTimetableSwitch2 from './ModalAllTimetableSwitch2.vue';
export default {
  components: {
    ModalAllTimetableSwitch1,
    ModalAllTimetableSwitch2
  },
  props: {
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
      index: 1,
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
      swiperOption: {
        slidesPerView: 4,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1170: {
            slidesPerView: 3,
            spaceBetween: 5
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          550: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        }
      },
      activeDisplay: false,
      activeDisplay2: false
    };
  },
  
  methods: {
    close() {
      this.$emit('close');
    },
  }
};
</script>

<template>
  <transition name="popup-fade">
    <div class="modal-popup" @click.self="close">
      <div class="modal-popup__container">
        <div class="modal-popup-header">
          <div class="modal-popup-header__subtitle">"Делу - время, потехе - час"</div>
          <div class="modal-popup-header__title">РАСПИСАНИЕ КЛУБА «СОЛНЦЕВО-ПАРК»</div>
          <div class="modal-popup-header__address">
            <div class="address-title">Адрес:</div>
            <div class="address-value">г. Москва, р. НМАО, Улица <br> Авиаконструктора Петлякова, д. 31</div>
          </div>
        </div>
        
        <div class="modal-popup__select select-age">
          <div class="select-title" @click="activeDisplay = !activeDisplay">Выберите возраст
            <img class="select-icon" src="@/assets/img/select.svg" alt="">
          </div>
          <ModalAllTimetableSwitch1 
            class="select-switch-item"
            :items="switch_age"
            v-model="index"
            :index="index"
            :class="{ hidden: activeDisplay }"/>
        </div>
        
        <div class="modal-popup__select select-category">
          <div class="select-title" @click="activeDisplay2 = !activeDisplay2">Выберите занятия
            <img class="select-icon" src="@/assets/img/select.svg" alt="">
          </div>
          <ModalAllTimetableSwitch2 
            class="select-switch-item"
            :items="switch_category"
            v-model="index"
            :index="index"
            :class="{ hidden: activeDisplay2 }"/>
        </div>
        
        <div class="modal-timetable">
    
          <swiper :options="swiperOption">
            <swiper-slide>
              
              <table>
                <caption>Понедельник</caption>
                <tbody>
                  <tr v-for="(item, i) in monday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Вторник</caption>
                <tbody>
                  <tr v-for="(item, i) in tuesday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Среда</caption>
                <tbody>
                  <tr v-for="(item, i) in wednesday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Четверг</caption>
                <tbody>
                  <tr v-for="(item, i) in thursday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Пятница</caption>
                <tbody>
                  <tr v-for="(item, i) in friday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Суббота</caption>
                <tbody>
                  <tr v-for="(item, i) in saturday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            <swiper-slide>
              
              <table>
                <caption>Воскресенье</caption>
                <tbody>
                  <tr v-for="(item, i) in sunday" :key="i">
                    <td >
                      <div class="modal-timetable__time">{{ item.time }}</div>
                      <div class="modal-timetable__group-number">{{ item.group }}</div>
                      <div class="modal-timetable__group-name">{{ item.name }}</div>
                    </td>
                    <td>
                      <img class="modal-timetable__img" src="@/assets/img/english.svg" alt="">
                      <div class="modal-timetable__time">{{ item.timeEng }}</div>
                      <div class="modal-timetable__group-number">{{ item.groupEng }}</div>
                      <div class="modal-timetable__group-name">{{ item.nameEng }}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </swiper-slide>
            
            <div class="swiper-button-prev" slot="button-prev">
              <img class="swiper-button-prev__img" src="@/assets/img/arrow-next-black.svg" alt="">
            </div>
            <div class="swiper-button-next" slot="button-next">
              <img class="swiper-button-next__img" src="@/assets/img/arrow-next-black.svg" alt="">
            </div>
          </swiper>
          
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
    position: relative;
    width: 100%;
    max-width: 1140px;
    border-radius: 3px;
    background-color: @white;
    z-index: 10001;
    padding: 50px 50px 32px;
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
  
  &-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 40px;
    &__subtitle {
      font-size: 19px;
      line-height: 24px;
      font-weight: 500;
      color: @blue;
      font-family: @font-Tagir;
      width: 100%;
      max-width: 140px;
      margin-right: 25px;
    }
    &__title {
      font-size: 30px;
      line-height: 35px;
      text-transform: uppercase;
      font-family: @bold;
      color: @black;
      width: 100%;
      max-width: 330px;
      margin-right: 50px;
    }
    
    &__address {
      .address-title {
        font-size: 15px;
        color: @blue;
        margin-bottom: 7px;
      }
      .address-value {
        font-size: 15px;
        color: @light-black;
      }
    }
  }
  
  &__select {
    display: flex;
    flex-direction: row;
    align-items: center;
    .select-title {
      font-size: 16px;
      color: @light-black;
      margin-right: 52px;
      position: relative;
      .select-icon {
        display: none;
        position: absolute;
        right: -25px;
        transform: rotate(-90deg);
      }
    }
  }
  .select-age {
    margin-bottom: 25px;
  }
  .select-category {
    margin-bottom: 30px;
  }
  
  .modal-timetable {
    width: 100%;
    min-height: 540px;
    background: @white;
    z-index: 10001;
    position: relative;
    &__img {
      width: 14px;
      height: 14px;
      border-radius: 100px;
      
    }
    &__time {
      font-size: 12px;
      line-height: 12px;
      color: @light-black;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    &__group-number {
      font-size: 12px;
      color: @black;
      line-height: 12px;
      margin-bottom: 7px;
    }
    &__group-name {
      font-size: 14px;
      text-transform: uppercase;
      font-family: @bold;
      color: @black;
    }
    table {
      background: @white;
      border-collapse: separate;
      border-spacing: 4px 4px;
      text-align: center;
      caption {
        width: 255px;
        height: 32px;
        font-size: 14px;
        font-family: @bold;
        color: @black;
        background: #FFCC00;
        text-align: center;
        line-height: 34px;
        margin-left: 2px;
      }
      tbody {
        tr {
          td {
            background: #F0F5FF;
            text-align: center;
            width: 125px;
            height: 120px;
          }
        }
      }
    }
    
    .swiper-container {
      position: static;
    }
    .swiper-button-prev {
      position: absolute;
      top: calc(55% - 29px);
      left: -35px;
      background: #FFCC00;
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
      top: calc(55% - 29px);
      right: -35px;
      background: #FFCC00;
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
  }
  
}

@media (max-width: 1170px) {
  .modal-popup__container {
    max-width: 95%;
  }
  .modal-popup .modal-timetable table {
    width: 100%;
  }
  .modal-popup .modal-timetable table caption {
    width: 100%;
    margin-left: 0px;
  }
  
  .modal-popup .select-age, .modal-popup .select-category {
    flex-direction: column;
    align-items: flex-start;
    .select-title {
      margin-bottom: 10px;
    }
  }
}

@media (max-width: 1024px) {
  .modal-popup-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .modal-popup-header__subtitle {
    max-width: 100%;
    margin-right: 0px;
    margin-bottom: 15px;
  }
  .modal-popup-header__title {
    margin-right: 0px;
    margin-bottom: 15px;
  }
}

@media (max-width: 500px) {
  .modal-popup__container {
    max-width: 90%;
    padding: 20px 20px 23px;
  }
  .modal-popup__close {
    width: 40px;
    height: 40px;
    img {
      width: 12px;
      height: 12px;
    }
  }
  
  .modal-popup-header {
    margin-bottom: 24px;
  }
  .modal-popup-header__subtitle {
    font-size: 15px;
  }
  .modal-popup-header__title {
    font-size: 20px;
    line-height: 25px;
  }
  .modal-popup-header__address .address-value {
    white-space: nowrap;
  }
  
  .modal-popup .modal-timetable .swiper-button-next {
    width: 40px;
    height: 40px;
    top: calc(57% - 29px);
    right: -15px;
    img {
      width: 14px;
      height: 12px;
    }
  }
  .modal-popup .modal-timetable .swiper-button-prev {
    width: 40px;
    height: 40px;
    top: calc(57% - 29px);
    left: -15px;
    img {
      width: 14px;
      height: 12px;
    }
  }
  
  .modal-popup__select .select-title {
    font-family: @bold;
    border-bottom: 1px dashed #FF9149;
    width: max-content;
    padding-bottom: 5px;
  }
  .modal-popup .select-age {
    margin-bottom: 15px;
  }
  .hidden {
    display: none;
  }
  .modal-popup__select .select-title .select-icon {
    display: inline-block;
  }
}

</style>
