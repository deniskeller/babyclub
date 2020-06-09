<script>
/**/
export default {
  props: {
    is_active: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked: this.is_active,
      error: this.isError
    };
  },
  computed: {
    value() {
      return this.checked ? true : false;
    }
  },
  watch: {
    checked() {
      this.sendEvent();
    }
  },
  mounted() {},
  methods: {
    onClick() {
      this.checked = !this.checked;
    },
    sendEvent() {
      this.$emit('input', this.checked);
    },
    onError() {
      this.error = false;

      setTimeout(() => {
        this.error = true;
      }, 30);
    }
  }
};
</script>

<template>
  
  <label 
    ref="input"
    :class="{ is_active: checked }"
    class="checkbox-container"
    @click.prevent="onClick">
    <span class="grey-text"></span>
    <input
      @change="sendEvent"
      ref="input"
      :value="value"
      type="checkbox">
    <span class="checkmark">
      <svg class="checkmark-check" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4L4 8L8 1" stroke="#4C85F7"/>
      </svg>
    </span>
    
    
  </label>
  
</template>

<style lang="less" scoped>
@import "../../src/assets/less/variables.less";

  .checkbox-container {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    font-size: 0;
    user-select: none;
    text-align: center;
  }
  .checkbox-container input {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    font-size: 0;
    width: 0;
    height: 0;
    padding: 0;
    border: 0;
    outline: 0;
  }
  .checkmark-check {
    display: none;
    position: absolute;
    top: 2px;
    left: 2px;
  }
  .is_active input ~ .checkmark {
    .checkmark-check {
      display: block;
    }
  }
  
  .checkbox-container .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    border-radius: 2px;
    border: 1px solid #4C85F7;
    
  }

</style>
