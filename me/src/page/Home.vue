<template>
<div class="content">
  <div class="info">
    <ul>
      <li><span>姓名: </span>{{ info.name }}</li>
      <li><span>微信: </span>{{ info.wechat }}</li>
      <li><span>qq: </span>{{ info.qq }}</li>
      <li><span>email: </span>{{ info.email }}</li>
      <li><span>github: </span>{{ info.github }}</li>
      <li><router-link to="/introduce">介绍</router-link></li>
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
 .content{
   overflow: hidden;//父元素没有设置宽高的时候子元素的margin-top不起作用最好的方法就是给父元素设置overflow:hidden 就可以了
 }
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
     a{
       color:blue;
     }
   }
 }
</style>
