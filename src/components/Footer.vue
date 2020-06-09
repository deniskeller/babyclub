<script>

export default {
  components: {},
  props: {
    gotoId: {
      type: Function,
      default: () => ''
    }
  },
  data() {
    return {
      is_active: false,
    };
  },
  computed: {},
  methods: {
    showAnswer(){
      this.is_active = !this.is_active;
    },
    closeMenu() {
      this.is_active = false;
    }
  }
};
</script>

<template>
  <div class="footer-content">
    <div class="container">
      
      <div class="footer footer-desktop">
        
        <div class="footer-left">
          <img class="footer-left__logo" src="@/assets/img/logo_footer.svg" alt="">
          <div class="footer-left__text">Для детей от 8 месяцев до 7 лет</div>
          <div class="footer-left__copyright">
            <img class="copyright-logo" src="@/assets/img/footer-icon.svg" alt="">
            <span class="copyrigh-text">Tehotdel - разработкa и продвижение сайтов</span>
          </div>
        </div>
      
        <div class="footer-right">
        
          <div class="menu-block">
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#about_club', offset: -200, }">О клубе</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#methodology', offset: -150, }">Методика</router-link>
          </div>
          
          <div class="menu-block">
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#reviews', offset: -150, }">Отзывы</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#news', offset: -150, }">Новости</router-link>
          </div>
          
          <div class="menu-block">
            <router-link to="/#0" class="menu-block__item">Работа у нас</router-link>
            <router-link to="/#0" class="menu-block__item">Документы</router-link>
          </div> 
          
          <div class="menu-block">
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#programs', offset: -50, }">Расписание</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#contacts', offset: -150, }">Контакты</router-link>
          </div> 
          
        </div>
      </div>
      
      <div class="footer footer-mobile">
        
        <a href="tel:79261895027" class="footer-mobile__phone">+ 7 (926) 189-50-27 
          <span class="phone-img">
            <img src="@/assets/img/call.svg" alt="">
          </span>
        </a>
        
        <div class="footer-mobile__menu">
          
          <div class="menu-logo" @click="showAnswer()">
            <div class="menu-logo__title">Бэби-клуб</div>
            <svg :class="{ is_active: is_active }" class="menu-logo__hidden" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path class="kek" d="M0.86084 1L8.65214 8L0.86084 15" stroke="#4A86F8" stroke-width="2"/>
            </svg>
          </div>
          
          <div class="menu-block" v-show="is_active">
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#about_club', offset: -200, }" @click.native="closeMenu">О клубе</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#reviews', offset: -20, }" @click.native="closeMenu">Отзывы</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#news', offset: -50, }" @click.native="closeMenu">Новости</router-link>
            <router-link to="/#0" class="menu-block__item" @click.native="closeMenu">Работа у нас</router-link>
            <router-link to="/#0" class="menu-block__item" @click.native="closeMenu">Документы</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#programs', offset: -110, }" @click.native="closeMenu">Расписание</router-link>
            <router-link to="/#0" class="menu-block__item" v-scroll-to="{ el: '#contacts', offset: -95, }" @click.native="closeMenu">Контакты</router-link>
          </div>
          
        </div>
        
        <div class="footer-mobile__copyright">
          <img class="copyright-logo" src="@/assets/img/footer-icon.svg" alt="">
          <span class="copyrigh-text">Tehotdel - разработкa и продвижение сайтов</span>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";
.footer-content {
  min-height: 160px;
  background: @blue;
  padding-top: 20px;
  padding-bottom: 24px;
  position: relative;
  z-index: 1000;
}
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__logo {
      width: 300px;
      height: 54px;
      margin-bottom: 8px;
    }
    
    &__text {
      font-size: 13px;
      font-weight: 500;
      text-transform: uppercase;
      color: @white;
      margin-bottom: 24px;
    }
    
    &__copyright {
      display: flex;
      align-items: center;
      .copyright-logo {
        width: 13px;
        height: 15px;
        margin-right: 9px;
      }
      .copyrigh-text {
        font-size: 14px;
        color: @white;
      }
    }
  }
  
  .footer-right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    
    .menu-block {
      display: flex;
      flex-direction: column;
      margin-right: 78px;
      &:last-child {
        margin-right: 0px;
      }
      &__item {
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
        color: @white;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
  
}

.footer-mobile {
  display: none;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  &__phone {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    line-height: 20px;
    font-family: @bold;
    color: @white;
    text-decoration: none;
    margin-bottom: 12px;
    .phone-img {
      width: 35px;
      height: 35px;
      background: @red;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      margin-left: 12px;
    }
  }
  
  &__menu {
    .menu-logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      &__title {
        font-size: 20px;
        line-height: 20px;
        color: @white;
        font-family: @bold;
      }
      &__hidden {
        width: 10px;
        height: 20px;
        margin-left: 15px;
        path {
          stroke: @white;
          stroke-width: 3;
        }
        &.is_active {
          transform: rotate(90deg);
        }
      }
      &__hidden.is_active {
        
      }
    }
    .menu-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
      &__item {
        font-size: 16px;
        line-height: 32px;
        text-transform: uppercase;
        color: @white;
        text-decoration: none;
      }
    }
  }
  
  &__copyright {
    width: 100%;
    max-width: 210px;
    position: relative;
    margin-top: 30px;
    padding-left: 30px;
    .copyright-logo {
      position: absolute;
      left: 0px;
      top: 0;
    }
    .copyrigh-text {
      font-size: 16px;
      color: @white;
    }
  }
}

@media (max-width: 1200px) {
  .footer-desktop {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 1024px) {
  .footer-desktop {
    justify-content: center;
    flex-wrap: wrap;
  }
  .footer .footer-right {
    padding-top: 40px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    padding-top: 16px;
    padding-bottom: 20px;
  }
  .footer-desktop {
    display: none;
  }
  .footer-mobile {
    display: flex;
  }
}

</style>
