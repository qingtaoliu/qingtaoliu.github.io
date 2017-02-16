<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style src="./assets/css/reset.less" lang="less"></style>
<style lang="less">
@media screen and (max-width: 320px){
  body { zoom: 0.85; }
}
#canvas{
  position: absolute;
  top:0;
  right:0;
  bottom:0;
  left: 0;
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left:0;
  z-index: 2;
}
</style>
