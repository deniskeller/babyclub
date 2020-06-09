<script>
export default {
  props: {
    links: {
      type: Object,
      default() {
        return {}
      }
    },
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
  computed: { },
  
  methods: {
    show() {
      this.$emit('show');
    },
  },
  
};
</script>

<template>
  <div class="contacts">
    <img class="nut3" src="@/assets/img/nut3.svg" alt="">
    <div class="container container_back">
      <img class="contacts-content__img" src="@/assets/img/contacts-img.svg" alt="">
    </div>
    <div class="container">
      <img class="contacts-content__left-arm" src="@/assets/img/arm-left.svg" alt="">
      <img class="contacts-content__right-arm" src="@/assets/img/arm-right.svg" alt="">
      <div class="contacts-content">
        
        <div class="contacts-content__contact-item">
          
          <div class="contact-item">
              <img class="contact-item__nut1" src="@/assets/img/nut1.svg" alt="">
              <img class="contact-item__nut2" src="@/assets/img/nut2.svg" alt="">
              
              <div class="contact-item__title">Контакты</div>
              
              <div class="contact-item__address">
                <span class="address-title">Адрес: </span>
                <span class="address-value">г. Москва, ул. Талалихина, д. 1, к. 2</span>
              </div>
              
              <div class="contact-item__area">
                <span class="area-title">Район: </span>
                <span class="area-value">ЦАО. Ст. метро: Таганская</span>
              </div>
              
              <div class="contact-item__email">
                <span class="email-title">E-mail: </span>
                <span class="email-value">msk.taganka@baby-club.ru</span>
              </div>
              
              <div class="contact-item__operating-mode">
                <span class="operating-mode-title">Режим работы:</span>
                <span class="operating-mode-value">
                  пн-пт: 9:00 - 20:00 <br> сб-вс: 9:00 - 19:00
                </span>
              </div>
              
              <div class="contact-item__phone">
                <div class="phone-items">
                  <div class="item-phone">
                    +7 499 677-57-99
                  </div>
                  <div class="item-phone">
                    +7 906 089-75-79
                  </div>
                  <div class="item-phone">
                    +7 800 100 20 24
                  </div>
                </div>
                
                <div class="phone-btn next-button" @click="show()">
                  Перезвоните мне
                  <div class="next-button__img">
                    <img class="arrow-next" src="@/assets/img/phone.svg" alt="">
                  </div>
                </div>
              </div>
              
              <div class="contact-item__social">
                <div class="social">
                  <a :href="links.facebook" class="social-item">
                    <img class="social-item__img" src="@/assets/img/facebook.svg" alt="">
                  </a>
                  <a :href="links.vk" class="social-item">
                    <img class="social-item__img" src="@/assets/img/vk.svg" alt="">
                  </a>
                  <a :href="links.instagram" class="social-item">
                    <img class="social-item__img" src="@/assets/img/instagram.svg" alt="">
                  </a>
                  <a :href="links.youtube" class="social-item">
                    <img class="social-item__img" src="@/assets/img/youtube.svg" alt="">
                  </a>
                </div>
                
                <div class="other-club">Посмотреть другие клубы</div>
              </div>
              
            </div>
          
        </div>
      </div>
    </div>
    <div class="contacts-map">
      
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
    </div>
    
  </div>
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

.contacts {
  min-height: 527px;
  padding-top: 57px;
  padding-bottom: 125px;
  background: @grey;
  position: relative;
  .container {
    position: relative;
    z-index: 3;
    
    &_back {
      z-index: 1;
    }
  }
  .nut3 {
    position: absolute;
    right: 180px;
    top: 100%;
    z-index: 2;
    transform: translateY(-50%);
  }
  .contacts-map {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .contacts-content {
    position: absolute;
    z-index: 1000;
    left: 50px;
    &__img {
      position: absolute;
      right: 0;
      top: -200px;
      z-index: -1;
    }
    &__left-arm {
      position: absolute;
      right: 85px;
      top: -75px;
      z-index: 1;
    }
    &__right-arm {
      position: absolute;
      right: 125px;
      top: -80px;
      z-index: 1;
    }
    
    &__contact-item {
      width: 100%;
      max-width: 493px;
      background: @light-blue;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
      border-radius: 35px;
      padding: 15px;
      
      .contact-item {
        border: 1px solid #4C85F7;
        border-radius: 30px;
        padding: 36px 30px 42px 38px;
        position: relative;
        
        &__nut1 {
          position: absolute;
          right: -65px;
          top: 125px;
        }
        &__nut2 {
          position: absolute;
          bottom: -80px;
          right: 30px;
        }
        
        &__title {
          font-size: 25px;
          font-weight: 500;
          text-transform: uppercase;
          color: @light-black;
          margin-bottom: 17px;
        }
        
        &__address {
          margin-bottom: 10px;
          .address-title {
            font-size: 13px;
            font-weight: 300;
            color: @grey;
          }
          .address-value {
            font-size: 14px;
            font-family: @bold;
            color: @black;
          }
        }
        
        &__area {
          margin-bottom: 10px;
          .area-title {
            font-size: 13px;
            font-weight: 300;
            color: @grey;
          }
          .area-value {
            font-size: 14px;
            font-weight: 300;
            color: @black;
          }
        }
        
        &__email {
          margin-bottom: 10px;
          .email-title {
            font-size: 13px;
            font-weight: 300;
            color: @grey;
          }
          .email-value {
            font-size: 14px;
            font-weight: 300;
            color: @black;
          }
        }
        
        &__operating-mode {
          margin-bottom: 18px;
          display: flex;
          .operating-mode-title {
            font-size: 13px;
            font-weight: 300;
            color: @grey;
            margin-right: 5px;
          }
          .operating-mode-value {
            font-size: 14px;
            font-weight: 300;
            color: @black;
          }
        }
        
        &__phone {
          display: inline-flex;
          align-items: center;
          margin-bottom: 23px;
          .phone-items {
            margin-right: 20px;
            .item-phone {
              font-size: 14px;
              font-weight: 600;
              color: @black;
              margin-bottom: 8px;
              &:last-child {
                margin-bottom: 0px;
              }
            }
          }
        }
        
        &__social {
          display: inline-flex;
          align-items: center;
          
          .social {
            margin-right: 20px;
            display: inline-flex;
            
            .social-item {
              width: 30px;
              height: 30px;
              margin-right: 14px;
              &:last-child {
                margin-right: 0px;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          
          .other-club {
            width: 206px;
            height: 36px;
            border-radius: 100px;
            border: 1px solid @blue;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            line-height: 22px;
            color: @blue;
            cursor: pointer;
          }
            
        }
      }
    }
  }
}

.next-button {
  display: flex;
  align-items: center;
  width: 177px;
  height: 35px;
  padding-left: 19px;
  background: @blue;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: @white;
  text-decoration: none;
  position: relative;
  margin: 0 auto;
  &__img {
    width: 33px;
    height: 33px;
    border-radius: 100px;
    background: @white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1px;
    right: 2px;
    img {
      width: 15px;
      height: 15px;
    }
  }
}

@media (max-width: 1200px) {
  .contacts {
    min-height: 680px;
  }
  .contacts .contacts-content__contact-item .contact-item {
    max-width: 350px;
  }
  .contacts .contacts-content__contact-item {
    max-width: 380px;
  }
  .contacts .contacts-content__contact-item .contact-item__title {
    font-size: 20px;
    margin-bottom: 14px;
  }
  .contacts .contacts-content__contact-item .contact-item__phone {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 15px;
  }
  .contacts .contacts-content__contact-item .contact-item__phone .phone-items {
    font-size: 20px;
    font-family: @bold;
    margin-right: 0px;
    margin-bottom: 25px;
  }
  .next-button {
    width: 288px;
    justify-content: center;
    padding-left: 0px;
  }
  .contacts .contacts-content__contact-item .contact-item__social {
    flex-wrap: wrap;
    justify-content: center;
  }
  .contacts .contacts-content__contact-item .contact-item__social .social {
    margin-right: 0px;
    order: 1;
    margin-top: 25px;
  }
  .contacts .contacts-content__contact-item .contact-item__social .other-club {
    width: 288px;
  }
}

@media (max-width: 1024px) {
  .contacts {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .nut3 {
    display: none;
  }
  .contacts .contacts-map {
    position: static;
    height: 456px;
  }
  .contacts .contacts-content__img {
    display: none;
  }
  .contacts .contacts-content__left-arm {
    display: none;
  }
  .contacts .contacts-content__right-arm {
    display: none;
  }
  
  .contacts .contacts-content__contact-item .contact-item {
    margin: 0 auto;
    text-align: center;
    border: none;
  }
  .contacts .contacts-content {
    padding-left: 0px;
    position: static;
  }
  .contacts .contacts-content__contact-item {
    max-width: 100%;
    border-radius: 0px;
    box-shadow: none;
  }
  .contacts .contacts-content__contact-item .contact-item__nut1 {
    display: none;
  }
  .contacts .contacts-content__contact-item .contact-item__nut2 {
    display: none;
  }
}

@media (max-width: 500px) {
  .contacts .contacts-content__contact-item {
    padding: 0px;
  }
  .contacts .contacts-content__contact-item .contact-item {
    padding: 20px 16px 30px;
  }
  .contacts .contacts-content__contact-item .contact-item__phone .phone-items .item-phone {
    font-size: 20px;
    font-family: @bold;
  }
  .contacts .contacts-map {
    height: 256px;
  }
}
</style>