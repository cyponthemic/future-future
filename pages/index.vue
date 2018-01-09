<template>
  <section class="container">
    <div>
      <img class="main-logo" src="~/assets/images/FutureFuture_Logo_Black.svg"/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation-name: example;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
@keyframes example {
    from {
      background: url(~/assets/images/bg.png);
    }
    to {
      background: url(~/assets/images/bg2.png);
    }
    0%   { background: url(~/assets/images/bg.png) }
     50%  { background: url(~/assets/images/bg.png) }
     50.01%  {background: url(~/assets/images/bg2.png) }
     100%  { background: url(~/assets/images/bg2.png) }
}

.main-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 60vh;
  transform: translate(-50%,-50%);
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
