<template>
  <div class="ani-area">
    <div class="ani-area__item ani-area__item--forwards"></div>
    <div class="ani-area__item ani-area__item--none"></div>
    <div class="ani-area__item ani-area__item--backwards"></div>
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
.ani-area {
  &__item {
    width: 50px;
    height: 50px;
    background: #6180e9;
    margin-right: 10px;
    float: left;
    animation: ani 1s ease;
    &--forwards {
      animation-fill-mode: forwards;
    }
    &--backwards {
      animation-fill-mode: backwards;
    }
    &--none {
      animation-fill-mode: none;
    }
  }
}

@keyframes ani {
  0% { opacity: 0 }
  100% { opacity: 0.5 }
}
</style>
