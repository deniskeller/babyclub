<template>
  <div id="app">
    <div class="preloader" ref="preloader">
      <img src="@/assets/img/logo.svg" class="preloader__img" alt="">
    </div>
    <Landing/>
    <router-view/>
  </div>
</template>

<script>
import Landing from "./views/Landing.vue";
export default {
  name: 'app',
  components: {
    Landing
  },
  mounted() {
    setTimeout(() => !this.$refs.preloader.classList.contains('preloader_onload') ? this.$refs.preloader.classList.add('preloader_onload') : '', 1000);
  }
};
</script>

<style lang="less">
@import "./assets/less/variables.less";
#app {
  font-family: @font-Muller;
  font-style: normal;
}

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  visibility: visible;
  opacity: 1;
  
  &_onload {
    visibility: hidden;
    opacity: 0;
    transition: 1s ease;
  }
  
  &__img {
    width: 400px;
  }
}

@media (max-width: 767px) {
  .preloader {
    &__img {
      width: 290px;
    }
  }
}
</style>
