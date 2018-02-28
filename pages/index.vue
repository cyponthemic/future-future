<template>
  <section class="container" :class="{'container--loading' : loading}">
    <div class="header" v-show="!loading">
      <ul class="nav">
        <li><a href="">Reservation</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Instagram</a></li>
      </ul>
    </div>
    <div class="main-logo" v-show="loading">
      <svg class="icon">
        <use xlink:href="#future-future-logo"></use>
      </svg>
    </div>
    <Slideshow @ready="endContentLoading"></Slideshow>
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
import Cookies from 'js-cookie';

export default {
  components: {
    Slideshow
  },
  data () {
    return {
      contentLoading: true,
      minLoading: true
    }
  },
  computed: {
    loading() {
      return this.contentLoading || this.minLoading;
    }
  },
  methods: {
    endContentLoading () {
      this.contentLoading = false;
    },
    endMinLoading () {
      this.minLoading = false;
    },
  },
  mounted () {
    const hasVisited = Cookies.get('first-visit');

    if(hasVisited) {
      setTimeout(()=> this.endMinLoading(), 1000);
    }
    else {
      Cookies.set('first-visit', true, { expires: 1 });
      setTimeout(()=> this.endMinLoading(), 3000);
    }

  }
}
</script>

<style>


</style>
