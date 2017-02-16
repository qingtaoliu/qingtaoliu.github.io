<template>
<div class="content">
  <div class="info">
    <ul>
      <li>{{ info.name }}</li>
      <li>{{ info.wechat }}</li>
      <li>{{ info.qq }}</li>
      <li>{{ info.email }}</li>
      <li>{{ info.github }}</li>
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
        github: '//www.github.com/qingtaoliu',
        email: '13651208917@163.com'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
