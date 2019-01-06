<template>
  <div id="app">
    <div class="header">
      <div><router-link to="/1" class="nav-link">序列动画</router-link></div>
      <div><router-link to="/2" class="nav-link">无限循环的序列动画</router-link></div>
      <div><router-link to="/3" class="nav-link">轮播</router-link></div>
      <div><router-link to="/4" class="nav-link">调试动画</router-link></div>
      <div><router-link to="/5" class="nav-link">保持结束状态</router-link></div>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  height: 50px;
  width: 100%;
  display: flex;
  .nav-link {
    width: 100px;
    margin-right: 10px;
    color: #333;
    text-decoration: none;
    &:hover {
      color: #3a9;
    }
  }
}
</style>
