<template>
<div class="ff-slideshow">
  <div class="slideshow-control slideshow-control--left" @click="pagePrev">
  </div>
  <div class="slideshow-control slideshow-control--right" @click="pageNext">
  </div>
  <Carousel :perPage="1" ref="carousel" :loop="true">
    <Slide>
      <img class="ff-slideshow__image" :src="require('~/assets/images/carousel/carousel-1.jpg')" />
    </Slide>
    <Slide>
      <img class="ff-slideshow__image" :src="require('~/assets/images/carousel/carousel-2.jpg')" />
    </Slide>
    <Slide>
      <img class="ff-slideshow__image" :src="require('~/assets/images/carousel/carousel-3.jpg')" />
    </Slide>
  </Carousel>
</div>
</template>

<style>

</style>

<script>
import { Carousel, Slide } from './src'

export default {
  name: 'Slideshow',
  computed: {
    href () {
      return `#${this.type}`
    }
  },
  components: {
			Carousel,
			Slide
  },
  methods: {
    pagePrev () {
      this.$refs.carousel.advancePage('backward')
    },
    pageNext () {
      this.$refs.carousel.advancePage()
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
    }
  },
  mounted () {
    window.Bus.$on('swipe', this.pageChange)
  }
}
</script>
