<template lang="html">
  <div class="content">
    <span style="color:#fff;" v-on:click="goback">返回</span><br/>
    帝都小前端一枚  <br/>

  </div>
</template>

<script>
import Router from 'vue-router'
export default {
  data () {
    return {}
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {
    goback () {
      let routers = new Router()
      routers.go(-1)
    }
  },
  components: {}
}
</script>

<style lang="less">
.content{
  padding:10px;
  color:rgba(255,255,255,.6);
}
</style>
