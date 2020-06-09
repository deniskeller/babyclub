<script>
export default {
  components: {},
  
  mounted () {
    
  },
  methods: {
    closeCookie() {
      this.$emit('closeCookie');
    }
  }
};
</script>

<template>
 
    <div class="cookie">
      <div class="container">
        
        <div class="cookie__text">
          Мы используем куки, чтобы помочь вам в навигации и улучшении пользовательского опыта. <br> <a href="#">Политика конфиденциальности.</a>
        </div>
        
        <div class="cookie__btn" @click="closeCookie()">
          Хорошо
          <img src="@/assets/img/cookie-img.svg" alt="">
        </div>
          
        
      </div>
    </div>
  
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.cookie {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 150px;
  box-sizing: border-box;
  background: @blue;
  z-index: 100010;
  display: flex;
  padding: 20px 16px;
  
  &__text {
    font-size: 16px;
    line-height: 21px;
    color: @white;
    margin-bottom: 25px;
    a {
      color: @white;
      &:hover {
        text-decoration: none;
      }
    }
  }
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 166px;
    height: 45px;
    background: @white;
    border-radius: 100px;
    font-size: 15px;
    color: @blue;
    font-family: @bold;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    }
    img {
      margin-left: 9px;
    }
  }
}

@media (max-width: 500px) {
  .cookie {
    width: 226px;
    height: 133px;
    border-radius: 25px;
    left: calc(50% - 113px);
    padding-top: 30px;
  }
  .cookie__text {
    font-size: 10px;
    line-height: 13px;
    text-align: center;
    padding: 0px 10px;
    margin-bottom: 11px;
  }
  .cookie__btn {
    width: 102px;
    height: 32px;
    font-size: 12px;
    margin: 0 auto;
    img {
      width: 16px;
      height: 16px;
    }
  }
}

</style>
