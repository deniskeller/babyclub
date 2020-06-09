<script>

export default {
  components: {},
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
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        loopedSlides: 7,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2
          },
          500: {
            slidesPerView: 1
          }
        }
      }
    };
  },
  computed: {},
  watch: {},
  
  mounted () {},
  
  methods: {}
};
</script>

<template>
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
        <img class="swiper-button-prev__img" src="@/assets/img/arrow-next.svg" alt="">
      </div>
      <div class="swiper-button-next" slot="button-next">
        <img class="swiper-button-next__img" src="@/assets/img/arrow-next.svg" alt="">
      </div>
    </swiper>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.modal-timetable {
  position: absolute;
  top: 0;
  right: 90px;
  width: 100%;
  max-width: 647px;
  min-height: 385px;
  background: @white;
  z-index: 1000;
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
      width: 208px;
      height: 32px;
      font-size: 14px;
      font-family: @bold;
      color: @white;
      background: @red;
      text-align: center;
      line-height: 34px;
      margin-left: 4px;
    }
    tbody {
      tr {
        td {
          background: #FFF4F3;
          text-align: center;
          width: 104px;
          height: 86px;
        }
      }
    }
  }
  
  .swiper-container {
    position: static;
  }
  .swiper-button-prev {
    background: @red;
    width: 59px;
    height: 59px;
    border-radius: 100px;
    margin-left: -50px;
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
      fill: green;
    }
  }
  .swiper-button-next {
    background: @red;
    width: 59px;
    height: 59px;
    border-radius: 100px;
    margin-right: -50px;
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

@media (max-width: 768px) {
  .modal-timetable {
    max-width: 414px;
  }
  .modal-timetable table caption {
    width: auto;
    margin-left: 0px;
  }
}
@media (max-width: 500px) {
  .modal-timetable {
    max-width: 288px;
  }
  .modal-timetable table {
    width: 288px;
    margin: 0 auto;
  }
  .modal-timetable .swiper-button-prev, .modal-timetable .swiper-button-next {
    width: 40px;
    height: 40px;
    margin-right: -20px;
    margin-left: -20px;
  }
  .modal-timetable .swiper-button-next__img, .modal-timetable .swiper-button-prev__img {
    width: 14px;
    height: 12px;
  }
}
</style>
