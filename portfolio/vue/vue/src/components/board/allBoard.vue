<template>
    <div class="boardList">
        <div class="topContent">
            <h2>커뮤니티</h2>
            <div class="writeBtn">
                <router-link to="/board/write"><i class="fa fa-pencil"></i> 글쓰기</router-link>
            </div>
        </div>
        <ul class="boardListBox">
            <li v-for="(boardArray, idx) in boardArrays" :key="idx">
                <div class="listBox">
                    <div class="listTop">
                        <span class="listNo">#{{ boardArray.listNo }}</span>
                        <span class="listTag"><i class="fa fa-comments"></i>{{ boardArray.tag }}</span>
                    </div>
                    <div class="listTitle">
                        <router-link :to="{ name:'view', params:{ listNo: boardArray.listNo}}">{{ boardArray.title }}</router-link>
                    </div>
                </div>
                <!--
                <div class="listSummary">
                    <ul class="smmaryBox">
                        <li class="comment"><i class="item-icon fa fa-comment "></i> {{ boardArray.commentNum }}</li>
                        <li class="good"><i class="item-icon fa fa-thumbs-up"></i> {{ boardArray.goodNum }}</li>
                        <li class="view"><i class="item-icon fa fa-eye"></i> {{ boardArray.viewNum }}</li>
                        <li class="auth">{{ boardArray.auth }}</li>
                    </ul>
                </div>
                -->
            </li>
        </ul>
        <paginate v-model="page" :page-range="3" :margin-pages="2" :prev-text="'이전'" :next-text="'다음'" :container-class="'pagination'" :page-class="'page-item'" :click-handler="clickCallback"> </paginate>
    </div>
</template>
<script>
import axios from 'axios'
import Paginate from 'vuejs-paginate' 
import Vue from 'vue'
Vue.component('paginate', Paginate)

export default {
  data () {
    return {
      boardArrays: [],
      boardArrayAll: [],
      pageNum: 10
    }
  },
  methods: {
    nextPage () {
      this.pageNum += 1;
    },
    prevPage() {
      this.pageNum -= 1;
    },
    clickCallback() {
      this.boardArrays = [];
      var listNum = this.page * 10;
      var sttNum = this.page * 10 / 2;
      if(sttNum < 10) {
        sttNum = 0;
      }
      if(listNum > this.boardArrayAll.length) {
        listNum = this.boardArrayAll.length;
      }
      for(sttNum; sttNum<listNum; sttNum++) {
        this.boardArrays.push(this.boardArrayAll[sttNum]);
      }
    }
  },
  created () {
    axios({
      method: 'POST',
      url: '/api/allBoard'
    }).then((response) => {
      for(var i=0; i<this.pageNum; i++){
        this.boardArrays.push(response.data[i]);
      }
      this.boardArrayAll = response.data;
    }).catch((ex) => {
      console.log('ERR!!!!! : ', ex)
    })
  }
}
</script>
