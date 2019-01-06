<template>
  <div class="slider">
    <img src="http://img1.qunarzz.com/vc/30/e6/6c/7236d07f50947d523bcdeadae8.jpg" class="slider__item" />
    <img src="http://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg" class="slider__item" />
    <img src="http://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg" class="slider__item" />
  </div>
</template>

<script>

export default {
  name: 'lunbo',
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 500px;
  height: 300px;
  &:hover &__item {
    animation-play-state: paused;
  }
  &__item {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    animation: ani 6s infinite linear both;
    @for $i from 1 to 4 {
      &:nth-child(#{$i}) {
        animation-delay: (-1+$i)*2s;
      }
    }
  }
}
@keyframes ani {
  0%, 33.33% {
    opacity: 1;
    visibility: visible;
  }
  33.34%, 100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
