<template>
    <div class="boardWrite" id="boardWrite">
        <h2>글쓰기</h2>
        <div class="writeWrap">
            <diV class="tagSelect" id="select">
                <select name="" id="" v-model="select">
                    <option value="사는얘기">사는얘기</option>
                    <option value="tip">tip</option>
                    <option value="공지사항">공지사항</option>
                    <option value="포럼">포럼</option>
                    <option value="IT행사">IT행사</option>
                </select>
            </div>
            <div class="titleInput">
                <input type="text" v-model="title"/>
            </div>
            <div class="editor">
                <vue-editor v-model="content"></vue-editor>
            </div>
            <div class="submitBtn">
                <button v-on:click="submit">등록</button>
            </div>
        </div>
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
export default {
  name: 'boardWrite',
  components: {
    VueEditor
  },
  data: function () {
    return {
      select: '',
      title: '',
      content: ''
    }
  },
  methods: {
    submit: function () {
      console.log(this.select)
      axios({
        method: 'POST',
        url: '/api/write',
        params: {
          select: this.select,
          title: this.title,
          content: this.content
        }
      }).then((response) => {
        window.history.go(-1)
      }).catch((ex) => {
        console.log('ERR!!!!! : ', ex)
      })
    }
  }
}
</script>
