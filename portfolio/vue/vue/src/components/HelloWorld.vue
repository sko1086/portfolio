<template>
  <div class="hello">
    <h1>사용자 정보를 입력하세요.</h1>
    <form name="user" method="post" action="/api/movies">
        <div class="input-row">
            <label for="userid">아이디</label>
            <input id="userid" name="userid" type="text">
        </div>
        <div class="input-row">
            <label for="name">이름</label>
            <input id="name" name="name" type="text">
        </div>
        <div class="input-row">
            <label for="address">주소</label>
            <input id="address" name="address" type="text">
        </div>
        <div class="btn-row">
          <button type="submit">전송</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App aaa'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello { text-align:left; }
h1 { text-align:center; }
form { margin:0 auto; }
.input-row { border-bottom:1px solid #ccc; }
form input { border:none; height:30px; width:200px; margin-left:30px; }
form label { width:50px; display:inline-block; }
form input:focus { outline:none; }
button { margin:0 auto; width:100px; height:30px; text-align:center; background:#333; color:#fff; outline:none; border:none; }
.btn-row { text-align:center; padding-top:20px;}
</style>
