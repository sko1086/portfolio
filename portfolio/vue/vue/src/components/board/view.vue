<template>
    <div class="boardView" id="boardView">
        <h2>상세보기</h2>
        <div class="viewWrap">
            <diV class="tagSelect" id="select">
                <div class="auth">{{boardArrays[0].auth}}</div>
                <div class="tag">{{boardArrays[0].tag}}</div>
            </div>
            <div class="titleInput">
                <div class="listNo">#{{boardArrays[0].listNo}}</div>
                <div class="title">{{boardArrays[0].title}}</div>
            </div>
            <div class="editor" v-html="boardArrays[0].editor">
                {{boardArrays[0].editor}}
            </div>
            <div class="submitBtn">

            </div>
        </div>
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import axios from 'axios'
export default {
  name: 'boardView',
  components: {
    VueEditor
  },
  data: function () {
    return {
      boardArrays: []
    }
  },
  created () {
    axios({
      method: 'POST',
      url: '/api/view',
      params: {
        listNo: this.$route.params.listNo
      }
    }).then((response) => {
      this.boardArrays = response.data
    }).catch((ex) => {
      console.log('ERR!!!!! : ', ex)
    })
  }
}
</script>
