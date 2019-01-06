<template>
  <div>
    <div class="list list--first">
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
    </div>
    <div class="list list--second">
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
    </div>
    <div class="list list--third">
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
      <div class="list__item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
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
.list {
  display: flex;
  // margin-bottom: 10px;
  &__item {
    width: 50px;
    height: 50px;
    background: #6180e9;
    // margin-right: 10px;
    animation: listAni 0.5s linear both alternate infinite;
    // animation-play-state: paused;
  }
}

@keyframes listAni {
    0% {transform: scale(0); }
    100% {transform: scale(1); }
}
@for $i from 1 to 6 {
    .list--first .list__item:nth-child(#{$i}) {
        animation-delay: -$i*0.1s;
    }
}
@for $i from 1 to 6 {
    .list--second .list__item:nth-child(#{$i}) {
        animation-delay: (-2-$i)*0.1s;
    }
}
@for $i from 1 to 6 {
    .list--third .list__item:nth-child(#{$i}) {
        animation-delay: (-4-$i)*0.1s;
    }
}
</style>
