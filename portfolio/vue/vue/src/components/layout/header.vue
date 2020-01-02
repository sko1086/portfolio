<template>
    <div id="header">
        <div id="sideCategory">
            <ul class="ctgList">
                <li><i class="fa fa-search"></i></li>
                <li><i class="fa fa-sign-in"></i></li>
                <li><i class="fa fa-user"></i></li>
                <li><i class="nav-icon fa fa-database"></i></li>
                <li><i class="nav-icon fa fa-code"></i></li>
                <li><i class="nav-icon fa fa-comments"></i></li>
                <li><i class="nav-icon fa fa-quote-left"></i></li>
            </ul>
        </div>
        <div id="innerHead">
            <h1>커뮤니티</h1>
            <ul id="nav">
                <li>
                    <router-link to="/">All</router-link>
                </li>
                <li>
                    <router-link to="/test">공지사항</router-link>
                </li>
                <li>
                    <router-link to="/test">사는얘기</router-link>
                </li>
                <li>
                    <router-link to="/test">포험</router-link>
                </li>
                <li>
                    <router-link to="/test">IT 행사</router-link>
                </li>
                <li>
                    <router-link to="/test">정기모임/스터디</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'app-header'
}
</script>
<style>
    #header { position:fixed; width:250px; height:100%; background:#007E92; z-index:10; }
    #sideCategory { position:fixed; height:100%; width:60px; background:#009DAB; }
    #sideCategory svg { color:#fff; font-size:21px; }
    #sideCategory .ctgList li { text-align:center; margin-top:50px; }
    #innerHead { margin-left:60px; }
    #innerHead:after { content:""; display:block; clear:both; }
    h1 { padding:20px 0; color:#fff; text-align:center; font-size:30px; }
    #nav { float:right; padding-top:20px;}
    #nav li { float:left; width:100%; }
    #nav li a { color:#fff; padding:15px 0 15px 30px; display:block; font-size:13px; }
</style>
