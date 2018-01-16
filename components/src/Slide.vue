<template>
  <div class="VueCarousel-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "slide",
    data() {
      return {
        width: null
      }
    },
    methods: {
      callback() {
        console.log('image loaded', event.path["0"].src)
      }
    },
    mounted () {
      this.$Lazyload.$once('loaded', this.callback);
    }
  }
</script>

<style>
  .VueCarousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
  }
</style>
