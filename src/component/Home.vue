<template>
  <div class="list">
    <div class="list-child"></div>
    <div class="list-child"></div>
    <div class="list-child"></div>
    <div class="list-child"></div>
    <div class="list-child"></div>
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
  justify-content: flex-start;
  &-child {
    width: 50px;
    height: 50px;
    background: #6180e9;
    margin-right: 10px;
    animation: listAni 1s ease both;
  }
}

@keyframes listAni {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@mixin item($num) {
  $waitTime: (-1+$num)*0.2;
  animation-delay: #{$waitTime}s;
}

@for $i from 1 to 6 {
  .list-child:nth-child(#{$i}) {
    @include item($i);
  }
}
</style>
