<script>

export default {
  components: {},
  props: { 
    mapCoords: {
      type: Array,
      default() {
        return []
      }
    },
    marks: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      placemarks: [
        {
          coords: [0, 0],
          properties: {},
          options: {},
          clusterName: "1",
          callbacks: { click: function() {} }
        }
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://baby.4163.ru/static/img/icons/map-icon.svg',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 15],
        contentLayout: ''
      }
    };
  },
  mounted () {},
  
  methods: {
    close() {
      this.$emit('close');
    },
    adopted() {
      this.$emit('adopted');
    }
  }
};
</script>

<template>
  <transition name="popup-fade">
    <div class="modal-popup" @click.self="close">
      <div class="modal-popup__container">
        <yandex-map
        :coords="mapCoords"
        zoom="4"
        style="min-width: 100%; height: 100%"
        map-type="map"
      >
        <ymap-marker 
          v-for="(item, i) in marks"
          :key="i"
          marker-id="123"
          :coords="marks[i]"
          :icon="markerIcon"
        ></ymap-marker>
      </yandex-map>
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
    height: 406px;
    border-radius: 3px;
    background-color: @white;
    z-index: 10001;
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


@media (max-width: 500px) {
  .modal-popup__container {
    max-width: 288px;
    height: 318px;
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
  
}
</style>
