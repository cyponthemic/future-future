<template>
  <section class="container" :class="{'container--loading' : loading}">
    <div class="header" v-show="!loading">
      <ul class="nav">
        <li><a href="">Reservation</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Instagram</a></li>
      </ul>
    </div>
    <div class="slideshow">
      <div class="slideshow-control slideshow-control--left">
      </div>
      <div class="slideshow-control slideshow-control--right">
      </div>
      <img class="main-logo" v-show="!loading" src="~/assets/images/FutureFuture_Logo_White.svg"/>
      <img class="main-logo" v-show="loading" src="~/assets/images/FutureFuture_Logo_Black.svg"/>
    </div>
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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    endLoading () {
      this.loading = false
    }
  },
  mounted () {
    setTimeout(this.endLoading, 3000)
  }
}
</script>

<style>

.main-logo {
  position: absolute;
  cursor: none;
  top: 50%;
  left: 50%;
  height: 60vh;
  transform: translate(-50%,-50%);
}

</style>
