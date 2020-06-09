<script>
import MethodologySwitch from './MethodologySwitch.vue';
export default {
  components: {
    MethodologySwitch
  },
  props: {},
  data() {
    return {
      index: 1,
      switch_items: [
        'Разные образовательные локации',
        'Методический центр',
        'Смена видов деятельности',
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
      }
      return 1;
    },
  }
};
</script>

<template>
  <div class="eighth-block">
    
    <div class="overflow-bg">
      <div class="bg-left">
        <img class="bg-left__img" src="@/assets/img/bg-8-left.svg" alt="">
      </div>
      <div class="bg-right">
        <img class="bg-right__img" src="@/assets/img/bg-8-right.svg" alt="">
      </div>
    </div>
    
    <div class="container">
      <div class="eighth-block-content">
        
        <img class="bg-shadow-1" src="@/assets/img/shadow-8-1.svg" alt="">
        <img class="bg-shadow-2" src="@/assets/img/shadow-8-2.svg" alt="">
        <img class="bg-shadow-3" src="@/assets/img/shadow-8-3.svg" alt="">
        <img class="bg-shadow-4" src="@/assets/img/shadow-8-4.svg" alt="">
        <img class="bg-shadow-5" src="@/assets/img/shadow-8-5.svg" alt="">
        <img class="bg-shadow-6" src="@/assets/img/shadow-8-6.svg" alt="">
        
        <div class="eighth-block-content__subtitle">Мы уверены в нашей методике</div>
        <div class="eighth-block-content__title">Отточенная методика</div>
        <div class="eighth-block-content__switch-content">
          <div class="switch-content">
            
            <MethodologySwitch 
              class="switch-content__switch-item"
              :items="switch_items"
              v-model="index"
              :index="index"/>
            
            <div class="switch-content__show-items">
              <transition name="layout-fade">
                <div class="show-item" v-if="show_this_activetab === 1">
                <div class="show-item__title">Разные образовательные локации</div>
                <div class="show-item__text">Занятия проходят одновременно в двух разных помещениях - интеллектуальной и игровой. Из-за возрастных особенностей ребенок не видит различий между образовательным процессом и игрой - поэтому буквально "впитывает" информацию и не устает</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item" v-if="show_this_activetab === 2">
                <div class="show-item__title">Методический центр</div>
                <div class="show-item__text">Программы для каждого возраста разработаны в методическом центре с учетом возраста, физиологических и психологических особенностей. <br> <br> Каждое занятия - часть единого образовательного процесса. Именно благодаря детально проработанной программе и подготовке преподавателей занятия в Бэби-клубе так эффективны.</div>
              </div>
              </transition>
              <transition name="layout-fade">
                <div class="show-item" v-if="show_this_activetab === 3">
                <div class="show-item__title">Смена видов деятельности</div>
                <div class="show-item__text">На каждом занятии ребенок получает яркие впечатления. Занятия включают в себя подвижные игры, прослушивание музыки, знакомство с художественными произведениями. Мы удивляем и мотивируем потребность узнавать новое</div>
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

.eighth-block {
  position: relative;
  overflow: hidden;
  padding-top: 90px;
  padding-bottom: 200px;
  .overflow-bg {
    width: 100%;
    height: 100%;
    .bg-left{
      width: 40%;
      height: 100%;
      &__img {
        position: absolute;
        top: 0px;
        left: 0px;
      }
    }
    .bg-right {
      width: 60%;
      height: 100%;
      &__img {
        position: absolute;
        top: 0px;
        right: -50px;
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
      left: 30px;
    }
    .bg-shadow-2 {
      position: absolute;
      z-index: 200;
      top: -95px;
      left: -670px;
    }
    .bg-shadow-3 {
      position: absolute;
      z-index: 200;
      right: -700px;
      top: -130px;
    }
    .bg-shadow-4 {
      position: absolute;
      z-index: 200;
      bottom: -200px;
      right: -700px;
    }
    .bg-shadow-5 {
      position: absolute;
      z-index: 200;
      left: -900px;
      top: -110px;
    }
    .bg-shadow-6 {
      position: absolute;
      z-index: 200;
      bottom: -200px;
      left: -900px;
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
      text-transform: uppercase;
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
          max-width: 350px;
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

@media (max-width: 1300px) {
  .eighth-block {
    padding-left: 70px;
  }
}

@media (max-width: 767px) {
  .eighth-block {
    display: none;
  }
}

</style>
