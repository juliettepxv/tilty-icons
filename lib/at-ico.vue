<template>
  <div class="at-ico" v-html="icon" :style="{
  '--size':styleSize,
  '--color':color
}"/>
</template>
<script>
export default {
  name: "at-ico",
  props: {
    icon: {
      type: String
    },
    size: {
      type: String,
      default: "24"
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },
  computed: {
    styleSize() {
      if (this.size.match(/[0-9.]+/)) {
        return this.size + "px";
      }
      return this.size;
    }
  }
}
</script>
<style lang="scss">
body {
  .at-ico {
    position: relative;
    width: var(--size);
    height: var(--size);
    color: var(--color);
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: currentColor;
      }
    }

    &.ico-circle {
      svg {
        width: 70%;
        height: 70%;
      }
    }
  }
}
</style>
