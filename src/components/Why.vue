<script>
import WhySwitch from './WhySwitch.vue';
export default {
  components: {
    WhySwitch
  },
  props: {},
  data() {
    return {
      index: 1,
      activeItem: 1,
      switch_items: [
        'Индивидуальный подход к вашему ребенку',
        'Собственная методика БРИ',
        'Взаимодействие с родителями',
        'Подготовка ребенка ко взрослой жизни',
        'Подготовка к школе',
        'Общение со сверстниками и работа в команде'
      ]
    };
  },
  computed: {
    show_this_activetab(){
      switch (this.index) {
        case 0:
          return 1;
        case 1:
          return 2;
        case 2:
          return 3;
        case 3:
          return 4;
        case 4:
          return 5;
        case 5:
          return 6;
      }
      return 1;
    },
    show_this_activetab_mobile(){
      switch (this.activeItem) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
        case 5:
          return 5;
        case 6:
          return 6;
      }
      return 1;
    },
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<template>
  <div class="third-block">
    
    <div class="overflow-bg">
      <div class="bg-left">
        <img class="bg-left__img" src="@/assets/img/child-left.svg" alt="">
      </div>
      <div class="bg-right">
        <img class="bg-right__img" src="@/assets/img/child-right.svg" alt="">
      </div>
    </div>
    
    <div class="container">
      <div class="third-block-content">
        
        <img class="bg-shadow-1" src="@/assets/img/shadow-3-1.svg" alt="">
        <img class="bg-shadow-2" src="@/assets/img/shadow-3-2.svg" alt="">
        <img class="bg-shadow-3" src="@/assets/img/shadow-3-3.svg" alt="">
        <img class="bg-shadow-4" src="@/assets/img/shadow-3-4.svg" alt="">
        <img class="bg-shadow-5" src="@/assets/img/shadow-3-2.svg" alt="">
        
        <div class="third-block-content__subtitle">Почему наши воспитанники</div>
        <div class="third-block-content__title">ПОСТУПАЮТ В ЛУЧШИЕ ШКОЛЫ И ГИМНАЗИИ</div>
        
        <div class="third-block-content__switch-content">
          
          <div class="switch-content switch-content-desktop">
            
            <WhySwitch 
              class="switch-content__switch-item"
              :items="switch_items"
              v-model="index"
              :index="index"/>
            
            <div class="switch-content__show-items">
              <transition name="layout-fade">
                <div class="show-item show-item-1" v-if="show_this_activetab === 1">
                <div class="show-item__title">Индивидуальный подход к вашему ребенку</div>
                <div class="show-item__text">На первом занятии проводится тестирование на основе системно-векторного анализа личности. Уже на основе результатов преподаватель найдет подход именно к вашему малышу.</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item show-item-2" v-if="show_this_activetab === 2">
                  <div class="show-item__title">Собственная методика Бережного развития интеллекта</div>
                  <div class="show-item__text">Уникальная методика раннего развития — мы взяли лучшее из практики <br>Н. Зайцева, А. Колмановского, Т. Бьюзена, Е. Железновой, О. Бренифье, В. Толкачева, М. Монтессори</div>
                </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item show-item-3" v-if="show_this_activetab === 3">
                <div class="show-item__title">Взаимодействие с родителями</div>
                <div class="show-item__text">Обратная связь и рекомендации родителям после занятий. На постоянной основе проводим обучающие тренинги и семинары по методикам развития интеллекта</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item show-item-4" v-if="show_this_activetab === 4">
                <div class="show-item__title">Подготовка ребенка ко взрослой жизни</div>
                <div class="show-item__text">Занимаясь в Бэби-клубе дети начинают осознавать себя как самостоятельные личности, обретают уверенность в себе и научатся принимать ответственность</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item show-item-5" v-if="show_this_activetab === 5">
                <div class="show-item__title">Подготовка к школе</div>
                <div class="show-item__text">На занятиях ребенок научится всем необходимым навыкам: счёт, чтение, письмо, логика, грамотная речь. Более того: научится применять  их в реальной жизни и самостоятельно развивать</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item show-item-6" v-if="show_this_activetab === 6">
                <div class="show-item__title">Общение со сверстниками и работа в команде</div>
                <div class="show-item__text">На занятиях дети учатся общаться и дружить со сверстниками. Совместная активность мотивирует к обмену и получению новых знаний. Это позволяет детям проще адаптироваться в школе</div>
              </div>
              </transition>
            </div>
            
          </div>
          
          <div class="switch-content switch-content-mobile">
            
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(1)" :class="{ active: isActive(1) }">Индивидуальный подход к вашему ребенку
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-1" v-if="show_this_activetab_mobile === 1">
                  <div class="show-item__title">Индивидуальный подход к вашему ребенку</div>
                  <div class="show-item__text">На первом занятии проводится тестирование на основе системно-векторного анализа личности. Уже на основе результатов преподаватель найдет подход именно к вашему малышу.</div>
                </div>
              </transition>
            </div>
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(2)" :class="{ active: isActive(2) }">Собственная методика БРИ
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-2" v-if="show_this_activetab_mobile === 2">
                  <div class="show-item__title">Собственная методика Бережного развития интеллекта</div>
                  <div class="show-item__text">Уникальная методика раннего развития — мы взяли лучшее из практики <br>Н. Зайцева, А. Колмановского, Т. Бьюзена, Е. Железновой, О. Бренифье, В. Толкачева, М. Монтессори</div>
                </div>
              </transition>
            </div>
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(3)" :class="{ active: isActive(3) }">Взаимодействие с родителями
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-3" v-if="show_this_activetab_mobile === 3">
                  <div class="show-item__title">Взаимодействие с родителями</div>
                <div class="show-item__text">Обратная связь и рекомендации родителям после занятий. На постоянной основе проводим обучающие тренинги и семинары по методикам развития интеллекта</div>
                </div>
              </transition>
            </div>
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(4)" :class="{ active: isActive(4) }">Подготовка ребенка ко взрослой жизни
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-4" v-if="show_this_activetab_mobile === 4">
                  <div class="show-item__title">Подготовка ребенка ко взрослой жизни</div>
                <div class="show-item__text">Занимаясь в Бэби-клубе дети начинают осознавать себя как самостоятельные личности, обретают уверенность в себе и научатся принимать ответственность</div>
                </div>
              </transition>
            </div>
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(5)" :class="{ active: isActive(5) }">Подготовка к школе
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-5" v-if="show_this_activetab_mobile === 5">
                  <div class="show-item__title">Подготовка к школе</div>
                  <div class="show-item__text">На занятиях ребенок научится всем необходимым навыкам: счёт, чтение, письмо, логика, грамотная речь. Более того: научится применять  их в реальной жизни и самостоятельно развивать</div>
                </div>
              </transition>
            </div>
            
            <div class="switch-content-mobile__item">
              <div class="switch-content-mobile__item-switch" @click="setActive(6)" :class="{ active: isActive(6) }">Общение со сверстниками и работа в команде
                <span class="img-overflow">
                  <img class="base-switch__bg-active" src="@/assets/img/bg-switch-item-1.svg" alt="">
                </span>
              </div>
              <transition name="layout-fade">
                <div class="show-item show-item-6" v-if="show_this_activetab_mobile === 6">
                  <div class="show-item__title">Общение со сверстниками и работа в команде</div>
                  <div class="show-item__text">На занятиях дети учатся общаться и дружить со сверстниками. Совместная активность мотивирует к обмену и получению новых знаний. Это позволяет детям проще адаптироваться в школе</div>
                </div>
              </transition>
            </div>
            
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.third-block {
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 80px;
  .overflow-bg {
    position: relative;
    width: 100%;
    height: 100%;
    .bg-left{
      width: 35%;
      height: 100%;
      position: relative;
      &__img {
        position: absolute;
        top: -127px;
        left: -27%;
      }
    }
    .bg-right {
      width: 65%;
      height: 100%;
      position: relative;
      &__img {
        position: absolute;
        top: -42px;
        left: 57%;
      }
    }
  }
  &-content {
    position: relative;
    z-index: 1000;
    
    .bg-shadow-1 {
      position: absolute;
      z-index: 200;
      top: -95px;
      left: 0;
    }
    .bg-shadow-2 {
      position: absolute;
      z-index: 200;
      top: -127px;
      right: -500px;
    }
    .bg-shadow-3 {
      position: absolute;
      z-index: 200;
      left: -635px;
      top: -95px;
    }
    .bg-shadow-4 {
      position: absolute;
      z-index: 200;
      bottom: -128px;
      right: -500px;
    }
    .bg-shadow-5 {
      position: absolute;
      z-index: 200;
      left: -557px;
      top: -152px;
    }
    
    
    &__subtitle {
      font-weight: 600;
      font-size: 18px;
      font-family: @font-Tagir;
      color: @blue;
      margin-bottom: 10px;
      position: relative;
      z-index: 1000;
    }
    
    &__title {
      font-size: 30px;
      line-height: 32px;
      font-family: @bold;
      color: @black;
      width: 100%;
      max-width: 400px;
      margin-bottom: 40px;
      position: relative;
      z-index: 1000;
    }
    
    .switch-content {
      display: flex;
      flex-direction: row;
      position: relative;
      z-index: 10000;
      &__switch-item {
        margin-right: 70px;
      }
      
      &__show-items {
        .show-item {
          width: 100%;
          max-width: 340px;
          &__title {
            font-family: @bold;
            font-size: 17px;
            line-height: 23px;
            color: @red;
            text-transform: uppercase;
            margin-bottom: 26px;
            max-width: 260px;
          }
          &__text {
            font-size: 16px;
            line-height: 22px;
            color: @light-black;
          }
        }
      }
    }
    
    .switch-content-mobile{
      display: none;
      text-align: center;
      
      &__item {
        width: 100%;
        max-width: 288px;
        margin: 0 auto 20px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      
      &__item-switch {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        width: 288px;
        height: 73px;
        background: #F3F7FF;
        border-radius: 100px;
        text-align: center;
        font-weight: 500;
        font-size: 17px;
        line-height: 20px;
        color: @black;
        cursor: pointer;
        margin-bottom: 15px;
        padding-left: 35px;
        padding-right: 35px;
        position: relative;
        .img-overflow {
          width: 100%;
          height: 100%;
          border-radius: 100px;
          position: absolute;
          overflow: hidden;
          .base-switch__bg-active {
            display: none;
            width: 254px;
            height: 257px;
            position: absolute;
            top: -80px;
            right: -140px;
          }
        }
        &.active {
          color: @white;
          background: @red;
          .base-switch__bg-active {
            display: block;
          }
        }
      }
      
      .show-item {
        width: 100%;
        &__title {
          font-family: @bold;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 10px;
          color: @red;
          text-transform: uppercase;
        }
        &__text {
          font-size: 16px;
          line-height: 22px;
          color: @light-black;
        }
      }
    }
    
  }
}

.layout-fade-enter-active {
  display: block;
  transition: opacity 2s;
}
.layout-fade-leave-active {
  display: none;
  transition: opacity .0s;
}
.layout-fade-enter,
.layout-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1330px) {
  .third-block .third-block-content{
    padding-left: 100px;
    padding-right: 16px;
  }
}

@media (max-width: 768px) {
  .third-block {
    &-content {
      .bg-shadow-1 {
        left: -15%;
      }
    }
    .overflow-bg {
      .bg-right {
        &__img {
          left: 0;
        }
      }
    }
  }
  .third-block .third-block-content {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 40px;
  }
  .third-block .third-block-content .switch-content__switch-item {
    margin-right: 20px;
  }
}

@media (max-width: 500px) {
  .third-block {
    padding-bottom: 30px;
  }
  .third-block-content__subtitle {
    text-align: center;
    font-size: 15px;
  }
  .third-block-content__title {
    max-width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  
  .third-block-content .switch-content-desktop{
    display: none;
  }
  .third-block-content .switch-content-mobile{
    display: block;
  }
}


</style>
