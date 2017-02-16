<template>
<div class="content">
  <div class="info">
    <ul>
      <li><span>姓名: </span>{{ info.name }}</li>
      <li><span>微信: </span>{{ info.wechat }}</li>
      <li><span>qq: </span>{{ info.qq }}</li>
      <li><span>email: </span>{{ info.email }}</li>
      <li><span>github: </span>{{ info.github }}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      info: {
        name: '逝水无痕',
        portrait: '',
        qq: '1548257291',
        wechat: '13651208918',
        github: 'www.github.com/qingtaoliu',
        email: '13651208917@163.com'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

 .info{
   width: 330px;
   padding: 20px 20px;
   background: rgba(255,255,255,.3);
   margin:50px auto;
   border-radius: 15px;
   color:#fff;
   & li{
     line-height: 36px;
     font-size: 16px;
     font-weight: bold;
     color:#fff;
     span{
       font-weight:normal;
       color:#ccc;
     }
   }
 }
</style>
