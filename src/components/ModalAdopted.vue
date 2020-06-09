<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  }
};
</script>

<template>
  <transition name="popup-fade">
    <div class="modal-popup" @click.self="closeModal">
      <div class="modal-popup__container">
        
        <div class="modal-popup__subtitle">
          Вы заполнили форму
        </div>
        <div class="modal-popup__title">Ваша заявка отправлена</div>
        
        <div class="modal-popup__btn" @click="closeModal">Хорошо</div>
        
        <div class="modal-popup__close" @click="closeModal">
          <img src="@/assets/img/close-icon.svg" alt="">
        </div> 
      </div>
    </div>
  </transition>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.modal-popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100010;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &__container {
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    position: fixed;
    width: 100%;
    max-width: 668px;
    border-radius: 3px;
    background-color: @white;
    z-index: 10001;
    padding: 32px 70px 40px;
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
  
  &__btn {
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
}

@media (max-width: 500px) {
  .modal-popup__container {
    max-width: 288px;
    margin-top: 100px;
    padding: 20px 23px 26px;
    align-items: center;
  }
  .modal-popup__subtitle {
    font-size: 15px;
  }
  .modal-popup__title {
    font-size: 20px;
    text-align: center;
    max-width: 160px;
  }
  .modal-popup__close {
    width: 40px;
    height: 40px;
    right: -10px;
    top: -10px;
    img {
      width: 12px;
      height: 12px;
    }
  }
}

</style>
