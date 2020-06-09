<script>
import Inputmask from 'inputmask';
import Checkbox from './Checkbox.vue';
export default {
  components: {
    Checkbox
  },
  props: { },
  data() {
    return {
      active: false
    };
  },
  mounted () {
    var im = new Inputmask("+7 (999)999-99-99");
    im.mask(document.getElementById('form-input-5'));
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
        this.$emit('adopted');
      }
    },
    
    close() {
      this.$emit('close');
    }
  }
};
</script>

<template>
  <transition name="popup-fade">
    <div class="modal-popup" @click.self="close">
      <div class="modal-popup__container">
        <img class="modal-popup__img" src="@/assets/img/modal-icon-2.svg" alt="">
        <div class="modal-popup__subtitle">
          Вопросы это хорошо
        </div>
        <div class="modal-popup__title">Задайте свой вопрос</div>
        
        <form @submit.prevent="fetchFn" class="modal-popup__content">
          <div class="content-form">
            <input class="content-form__input" type="text" ref="name" placeholder="Имя"/>
            <input class="content-form__input" type="text" ref="phone" placeholder="+7 (___)___-__-__" id="form-input-5"/>
          </div>
          
          <div class="content-textarea">
            <textarea name="" ref="textarea" placeholder="Место для вопроса" id="" cols="30" rows="10"></textarea>
          </div>
          
          <button class="content-btn">Отправить вопрос</button>
          
          <div class="content-privacy-policy">
            <Checkbox
              @input="active = !active"
              :is_active="false"
              class="content-privacy-policy__checkbox"/>
            <div class="content-privacy-policy__text">Оставляя свои контактные данные, Вы соглашаетесь с <a href="#">политикой конфиденциальности.</a></div>
          </div>
        </form>
        
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
    margin-top: 60px;
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 668px;
    border-radius: 3px;
    background-color: @white;
    z-index: 10001;
    padding: 32px 70px 40px;
  }
  
  &__img {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  &__subtitle {
    font-size: 19px;
    font-weight: 600;
    font-family: @font-Tagir;
    color: @blue;
    margin-bottom: 11px;
  }
  
  &__title {
    font-size: 25px;
    font-family: @bold;
    text-transform: uppercase;
    color: @black;
    width: 100%;
    max-width: 416px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  &__content {
    width: 100%;
    .content-form {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 11px;
      
      &__input {
        position: relative;
        width: 100%;
        max-width: 260px;
        font-size: 18px;
        color: #84878C; 
        width: 375px;
        height: 54px;
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
    
    .content-textarea {
      width: 100%;
      margin-bottom: 27px;
      textarea {
        width: 100%;
        height: 80px;
        background: @white;
        border: 1px solid #CBE7F5;
        border-radius: 15px;
        padding: 11px 14px;
        font-size: 18px;
        color: @black;
        outline: none;
      }
      textarea::-webkit-input-placeholder {
        font-size: 18px;
        color: @black;
        opacity: 0.45;
      }
      textarea:-moz-placeholder { /* Firefox 18- */
        font-size: 18px;
        color: @black;
        opacity: 0.45;  
      }
      textarea::-moz-placeholder {  /* Firefox 19+ */
        font-size: 18px;
        color: @black;
        opacity: 0.45; 
      }
      textarea:-ms-input-placeholder {
        font-size: 18px;
        color: @black;
        opacity: 0.45;  
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
      max-width: 330px;
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


@media (max-width: 768px) {
  .modal-popup__container {
    max-width: 93%;
  }
  .modal-popup__content .content-form {
    justify-content: center;
  }
  .modal-popup__content .content-form__input {
    max-width: 300px;
    &:first-child {
      margin-bottom: 10px;
    }
  }
  .modal-popup__content .content-textarea {
    max-width: 300px;
    margin: 0 auto;
    margin-bottom: 22px;
  }
}

@media (max-width: 620px) {
  .modal-popup__img {
    display: none;
  }
}
@media (max-width: 500px) {
  .modal-popup__container {
    max-width: 288px;
    padding: 20px 23px 26px;
    align-items: flex-start;
  }
  .modal-popup__subtitle {
    font-size: 15px;
  }
  .modal-popup__title {
    font-size: 20px;
    text-align: left;
    margin-bottom: 18px;
  }
  .modal-popup__close {
    width: 40px;
    height: 40px;
    right: -15px;
    top: -15px;
    img {
      width: 12px;
      height: 12px;
    }
  }
  
  .modal-popup__content .content-form__input {
    max-width: 242px;
    height: 45px;
    font-size: 15px;
    
  }
  input[type="text"]::-moz-placeholder { color: #84878C; font-size: 15px; }
  input[type="text"]::-webkit-input-placeholder { color: #84878C; font-size: 15px; }
  input[type="text"]:-ms-input-placeholder { color: #84878C; font-size: 15px; }
  input[type="text"]::-ms-input-placeholder { color: #84878C; font-size: 15px; }
  input[type="text"]::placeholder { color: #84878C; font-size: 15px; }
  .modal-popup__content .content-btn {
    width: 242px;
    margin-bottom: 24px;
  }
  .modal-popup__content .content-textarea {
    font-size: 15px;
    min-height: 140px;
    textarea::-webkit-input-placeholder {
        font-size: 15px;
      }
    textarea:-moz-placeholder { /* Firefox 18- */
        font-size: 15px;
      }
    textarea::-moz-placeholder {  /* Firefox 19+ */
        font-size: 15px;
      }
    textarea:-ms-input-placeholder {
        font-size: 15px;
      }
  }
  textarea {
    min-height: 140px;
  }
  
}
</style>
