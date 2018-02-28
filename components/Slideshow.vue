<template>
<div class="ff-slideshow">
  <div class="main-logo">
    <svg class="icon">
      <use xlink:href="#future-future-logo"></use>
    </svg>
  </div>
  <div class="slideshow-control slideshow-control--left" @click="pagePrev">
  </div>
  <div class="slideshow-control slideshow-control--right" @click="pageNext">
  </div>
  <slick ref="slick" :options="slickOptions">
    <div>
      <img class="ff-slideshow__image" :data-lazy="require('~/assets/images/carousel/carousel-1.jpg')"/>
    </div>
    <div>
      <img class="ff-slideshow__image" :data-lazy="require('~/assets/images/carousel/carousel-2.jpg')" />
    </div>
    <div>
      <img class="ff-slideshow__image" :data-lazy="require('~/assets/images/carousel/carousel-3.jpg')" />
    </div>
  </slick>

</div>
</template>

<style>

</style>

<script>
import $ from 'jquery';
export default {
  name: 'Slideshow',
  data () {
    return {
      ready: false,
      slickOptions: {
        slidesToShow: 1,
        lazyLoad: 'anticipated',
        slidesToScroll: 1
      }
    }
  },
  computed: {
    href () {
      return `#${this.type}`
    }
  },
  methods: {
    handler () {
      console.log('image loaded')
    },
    pagePrev () {
      this.$refs.slick.prev();
    },
    pageNext () {
      this.$refs.slick.next();
    },
    pageChange (direction) {
      if (direction === 'right') {
        this.pageNext()
        console.log('right')
      }
      if (direction === 'left') {
        this.pagePrev()
        console.log('left')
      }
    },
    moveLogo() {
      const el = this.$el;
      const draggable = $(this.$el).find('.slick-list.draggable');
      const logo = $(el).find('.main-logo');
      $(logo).detach().appendTo(draggable);
    },
    slideShowReady() {
      console.log('ready');
      this.ready = true;
      this.moveLogo();
      this.$emit('ready', []);
    }
  },
  mounted () {
    this.$refs.slick.$once('lazyLoaded', this.slideShowReady);
  }
}
</script>
