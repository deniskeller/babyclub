<script>
import Inputmask from 'inputmask';
import Checkbox from './Checkbox.vue';
export default {
  components: {
    Checkbox
  },
  props: {
    offerText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: false
    };
  },
  mounted () {
    var im = new Inputmask("+7 (999)999-99-99");
    im.mask(document.getElementById('first-block-2'));
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
        this.$emit('adopted');
      }
    }
  }
};
</script>

<template>
  <div class="first-block">
    <img class="lamb" src="@/assets/img/lamb.svg" alt="">
    <img class="hearts hearts-desktop" src="@/assets/img/hearts-2.svg" alt="">
    <img class="hearts hearts-tablet" src="@/assets/img/hearts.svg" alt="">
    <img class="hearts-mobile" src="@/assets/img/hearts-mobile.svg" alt="">
    
    <div class="container">
      <div class="first-block-content">
        <img class="child" src="@/assets/img/child-2.svg" alt="">
        <img class="child-mobile" src="@/assets/img/child-mobile2.svg" alt="">
        <img class="heart-2" src="@/assets/img/heart-2.svg" alt="">
        <img class="for-children" src="@/assets/img/for-children.svg" alt="">
        
        <div class="first-block-content__subtitle">Вклад в счастье вашего ребенка</div>
        <h1 class="first-block-content__title">Развивающий ДЕТСКИЙ клуб <br> <span class="bold">в южном <br class="br"> бутово</span></h1>
        <form @submit.prevent="fetchFn" class="first-block-content__form">
          <img class="form-img" src="@/assets/img/arrow-to-1.svg" alt="">
          <div class="form-title" v-html="offerText"></div>
          <div class="form-fill">
            <input class="form-fill__input" type="text" placeholder="+7 (___)___-__-__" ref="phone" id="first-block-2"/>
            <button class="form-fill__button">Записаться</button>
          </div>
          <div class="form-privacy-policy">
            <Checkbox 
              @input="active = !active"
              :is_active="false"
              class="form-privacy-policy__checkbox"/>
            <div class="form-privacy-policy__text">Оставляя свои контактные данные, Вы соглашаетесь с <a href="#">политикой конфиденциальности.</a></div>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.first-block {
  background: #F0F5FF;
  position: relative;
  overflow: hidden;
  .lamb {
    position: absolute;
    top: -90px;
    left: 0;
  }
  .hearts {
    position: absolute;
    top: -7px;
    right: calc(26% - 500px);
    z-index: 1;
  }
  .hearts-tablet {
    display: none;
  }
  .hearts-mobile {
    display: none;
    position: absolute;
    bottom: 0px;
    right: 0;
    z-index: 1;
  }
  .first-block-content {
    position: relative;
    padding-top: 130px;
    padding-bottom: 76px;
    text-align: left;
    .child {
      position: absolute;
      top: 11px;
      right: -53px;
      z-index: 3;
    }
    
    .child-mobile {
      display: none;
      position: absolute;
      bottom: -75px;
      right: -40px;
      z-index: 3;
    }
    
    .for-children {
      position: absolute;
      top: 122px;
      right: 363px;
      z-index: 2;
      @media (max-width: 900px) {
        display: none;
      }
    }
    
    .heart-2 {
      position: absolute;
      top: 255px;
      right: 480px;
      z-index: 3; 
    }
    
    .text {
      position: absolute;
      top: 350px;
      right: 480px;
      transform: rotate(-0.75deg);
      z-index: 3;
    }
    
    &__subtitle {
      font-family: @font-Tagir;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      color: @red;
      margin-bottom: 10px;
      position: relative;
      z-index: 1000;
    }
    
    &__title {
      font-style: normal;
      font-family: @bold-extra;
      font-size: 40px;
      line-height: 42px;
      text-transform: uppercase;
      background: linear-gradient(169.23deg, #4C85F7 15.12%, #245FD3 83.53%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 100%;
      max-width: 490px;
      margin-bottom: 70px;
      padding-top: 7px;
      position: relative;
      z-index: 1000;
      .br {
        display: none;
      }
    }
    
    &__form {
      position: relative;
      z-index: 1000;
      
      .form-img {
        position: absolute;
        left: -38px;
        top: 33px;
      }
      
      .form-title {
        font-size: 20px;
        color: @black;
        width: 100%;
        max-width: 340px;
        margin-bottom: 25px;
        .blue {
          color: @blue;
          font-family: @bold;
        }
      }
      
      .form-fill {
        position: relative;
        width: 100%;
        max-width: 414px;
        margin-bottom: 15px;
        &__input {
          font-size: 18px;
          color: #84878C; 
          width: 375px;
          height: 54px;
          background: @white;
          border: 1px solid #CBE7F5;
          box-sizing: border-box;
          border-radius: 100px;
          padding: 17px 100px 15px 21px;
          outline: none;
        }
          input[type="text"]::-moz-placeholder { color: #84878C; font-size: 18px; }
          input[type="text"]::-webkit-input-placeholder { color: #84878C; font-size: 18px; }
          input[type="text"]:-ms-input-placeholder { color: #84878C; font-size: 18px; }
          input[type="text"]::-ms-input-placeholder { color: #84878C; font-size: 18px; }
          input[type="text"]::placeholder { color: #84878C; font-size: 18px; }
        &__button {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 54px;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: @white;
          background: @red;
          border-radius: 100px;
          cursor: pointer;
        }
      }
      
      .form-privacy-policy {
        width: 100%;
        max-width: 330px;
        
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
}

@media (max-width: 1300px) {
  .first-block .first-block-content__subtitle {
    padding-left: 40px;
  }
  .first-block .first-block-content__title {
    padding-left: 40px;
  }
  .first-block .first-block-content__form {
    padding-left: 40px;
  }
  .first-block .first-block-content__form .form-img {
    left: 2px;
  }
  .first-block .hearts {
    right: -410px;
  }
  .first-block .first-block-content .child {
    right: -40px;
  }
  .first-block .first-block-content .for-children {
    right: 250px;
  }
}

@media (max-width: 1024px) {
  .first-block .hearts-tablet {
    display: block;
  }
  .first-block .hearts-desktop {
    display: none;
  }
  .first-block .first-block-content .heart-2 {
    display: none;
  }
}

@media (max-width: 767px) {
  .first-block {
    padding-bottom: 0px;
  }
  .first-block .lamb {
    display: none;
  }
  .hearts {
    display: none;
  }
  .child {
    display: none;
  }
  .first-block .hearts-tablet {
    display: none;
  }
  .first-block .hearts-mobile {
    display: block;
    bottom: 162px;
  }
  .first-block .first-block-content .child-mobile {
    display: block;
    bottom: 110px;
    right: 0px;
  }
  .for-children {
    display: none;
  }
  
  .first-block .first-block-content {
    padding-bottom: 0px;
  }
  .first-block .first-block-content__title {
    .br {
      display: block;
    }
  }
  .first-block .first-block-content__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: @blue;
    padding: 13px 16px;
  }
  .first-block .first-block-content__form .form-title {
    font-size: 16px;
    font-family: @bold;
    max-width: 198px;
    color: @white;
    text-align: center;
    margin-bottom: 15px;
    .blue {
      color: @white;
    }
  }
  
  .first-block .first-block-content__form .form-fill {
    max-width: 288px;
  }
  .first-block .first-block-content__form .form-fill__input {
    width: 288px;
    height: 36px;
    font-size: 14px;
    padding: 10px 57px;
    margin-bottom: 6px;
    text-align: center;
  }
  input[type="text"]::-moz-placeholder { color: #84878C; font-size: 14px !important; }
  input[type="text"]::-webkit-input-placeholder { color: #84878C; font-size: 14px !important; }
  input[type="text"]:-ms-input-placeholder { color: #84878C; font-size: 14px !important; }
  input[type="text"]::-ms-input-placeholder { color: #84878C; font-size: 14px !important; }
  input[type="text"]::placeholder { color: #84878C; font-size: 14px !important; }
  
  .first-block .first-block-content__form .form-fill__button {
    position: static;
    width: 288px;
    height: 40px;
    font-size: 14px;
  }
  .first-block .first-block-content__form .form-privacy-policy__text {
    font-size: 11px;
    color: #9EBDFB;
    a {
      color: #9EBDFB;
    }
  }
}

@media (max-width: 570px) {
  .first-block .first-block-content {
    padding-top: 30px;
  }
  .first-block .first-block-content__subtitle {
    font-size: 16px;
    margin-bottom: 5px;
    padding-left: 16px;
  }
  .first-block .first-block-content__title {
    font-size: 20px;
    line-height: 22px;
    max-width: 220px;
    padding-top: 5px;
    padding-left: 16px;
    margin-bottom: 170px;
    .bold {
      font-family: @bold-extra;
      font-size: 24px;
    }
    .br {
      display: block;
    }
  }
}

</style>
