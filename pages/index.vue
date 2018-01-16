<template>
  <section class="container" :class="{'container--loading' : loading}">
    <div class="header" v-show="!loading">
      <ul class="nav">
        <li><a href="">Reservation</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Instagram</a></li>
      </ul>
    </div>
    <Slideshow></Slideshow>
    <div class="footer" v-show="!loading">
      <ul class="nav">
        <li class="tel"><a href="">T 9812 3456</a></li>
        <li class="address"><a href="">192 Swan Street, Richmond VIC 3121</a></li>
        <li class="email"><a href="">Email us</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
import Slideshow from '~/components/Slideshow.vue'

export default {
  components: {
    Slideshow
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    endLoading () {
      this.loading = false
    },
    swipeHandler (event) {
      window.Bus.$emit('swipe', event)
    }
  },
  mounted () {
    setTimeout(this.endLoading, 3000)
  }
}
</script>

<style>


</style>
