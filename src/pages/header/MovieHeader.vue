<template>
  <!--  电影头部-->
  <div class="header">
    <div class="leftPosition">
      <!--        logo部分-->
      <div class="i-logo"></div>
      <div class="city-namn">北京</div>
    </div>
    <ul class="movieSuggest">
      <li>
        <router-link to="/index/hotMovie" active-class="activeFoucs">正在热映</router-link>
      </li>
      <li>
        <router-link to="/index/upComingMovie" active-class="activeFoucs">即将上映</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieHeader"
}
</script>

<style scoped>

.header{
  width:400px;
  height:42px;
  background: #fff;
  margin-bottom: 14px;
  /*background-color: #42b983;*/
}
.leftPosition{
  /*浮动*/
  float:left;
  width: 71px;
  height: 38px;
  padding: 0 13px;
  /*margin:0 auto;*/
  /*background-color: darkkhaki;*/
}
/* 将城市和图标元素都设置为左浮动*/
.i-logo,.city-namn{
  float:left;
}
.i-logo{
  width: 23px;
  height: 23px;
  margin-right: 1px;
  margin-top: 5px;
  background-image: url('https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg');
  /*  不层叠*/
  background-repeat: no-repeat;
  /* 改变图片大小 设置为父元素的百分百*/
  background-size: 100% 100%;
}
.city-namn{
  margin-top: 5px;
  width: 33px;
  height:23px;
  line-height: 23px;
  text-align: center;
  /*margin: 0 auto;*/
}
.movieSuggest{
  float: right;
}
.movieSuggest li{
  float: left;
  width: 86px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 15px;
  color:#2e333e;
  font-weight: 500;
}
.movieSuggest li>a{
  color: #2e333e;
}
.activeFoucs{
  border-bottom: 1px solid #bfa;

}

</style>