<template>
  <div class="tab-panel">
    <ul class="bui-moviecard">
      <li v-for="movie in resMovieData.movies" :key="movie.tid">
        <div class="bui-movie-item-main">
          <!--           图片部分-->
          <div  @click="goBuyMovie(movie.tid)" class="bui-movie-card-poster">
            <!--            主体图片部分-->
            <div class="bui-image">
              <img :src="movie.timage" alt="">
            </div>
            <!--            角标部分-->
            <div class="bui-tag">中国巨幕 2D</div>
            <!--            图标-->
            <div class="bui-icon-play-wrapper">
              <div class="bui-iconfont"></div>
            </div>
          </div>
          <!--          主体部分-->
          <div  @click="goBuyMovie(movie.tid)" class="bui-movie-card-content">
            <!--            电影标题-->
            <div class="bui-movie-name-wrapper">{{ movie.ttitle }}</div>
            <!--            电影评价-->
            <div class="bui-movie-desc">
              <span class="bui-movie-desc-normal">淘票票评分</span>
              <span class="bui-movie-desc-highlight">{{ movie.tscore }}</span>
              <span class="bui-movie-desc-splitline">|</span>
              <span class="bui-movie-desc-normal">{{ movie.tpersons }}</span>
            </div>
            <!--            导演展示区域-->
            <div class="bui-movie-director">{{ movie.tdirector }}</div>
            <!--            演员展示区域-->
            <div class="bui-movie-role">主演：{{ movie.tactors }}</div>

          </div>
          <!--          购票部分-->
          <div class="bui-btn-wrapper">
            <div class="bui-btn-contained" @click="buyTicket(movie.tid)">购票</div>
            <div class="bui-movie-button-tips">限时特惠</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MoieMain"
}
</script>
<script setup>
  import MovieApi from "@/api/movie";
  import {useRouter} from "vue-router";
  import {reactive} from "vue";
  // 发送请求获取数据
  let resMovieData = reactive({
    movies:[]
  })
  MovieApi.getAllMovie().then(res=>{
    resMovieData.movies = res.data.data.item
    console.log(resMovieData)
  })
  const router = useRouter()
// 跳转到购票页面
  function goBuyMovie(tid){
    router.push({path:'/buyMovie/'+tid})
  }
  function buyTicket(tid){
    router.push({name:'goBuyTic',params:{id:tid}})
    // router.push({path:'/goBuyTicket'})
  }
</script>
<style scoped>

/*  网页内容展示区域*/
.tab-panel{
  width: 374px;
  padding:0 13px;
  /*background-color:khaki;*/
}
/* 给图片 主体 购票添加浮动*/
.bui-movie-item-main .bui-movie-card-poster,.bui-movie-card-content,.bui-btn-wrapper{
  float: left;
}
.bui-moviecard li{
  position:relative;
  /* 加一个内边距*/
  /*float: left;*/
  width: 348px;
  height: 112px;
  border-radius:6px;
  background:#fff;
  /*background: #42b983;*/
  padding:13px;
}
/* 开启相对定位 子绝父相*/
.bui-movie-card-poster{
  position: relative;
}
.bui-image{
  width: 81px;
  height: 116px;
}
.bui-image img{
  width: 100%;
  height: 100%;
}
.bui-tag{
  position:absolute;

  top: 3px;
  left: 3px;
  width: 76px;
  height: 12px;
  font-size: 10px;
  line-height:12px;
  font-weight: 400;
  border-radius:3px;


  background-color: rgba(0,0,0,0.8);
  color: #fff;

}
.bui-icon-play-wrapper{
  position: absolute;
  top: 84px;
  left: 49px;
  width: 26px;
  height: 26px;
  /* 将一个盒子变成圆*/
  background: #fff;

  border-radius:100%;
}
.bui-icon-play-wrapper .bui-iconfont{

}
.bui-icon-play-wrapper .bui-iconfont:before{
  content: "";
  display: block;
  margin:7px auto;
  /*margin-top: 13px;*/
  width:12px;
  height:12px;
  background-size: 100% 100%;
  background-image: url('../../assets/播放2.png');
}
/*  电影主体部分*/
.bui-movie-card-content{
  width: 186px;
  height: 115px;
  padding: 0 12px;
}
.bui-movie-card-content .bui-movie-name-wrapper{
  width: 186px;
  height:20px;
  margin-bottom: 8px;
  font-size: 16px;
  line-height:20px;
  /*text-align: center;*/
  font-weight: 500;
  color: #2e333e;
}
.bui-movie-card-content .bui-movie-desc{
  width: 186px;
  height: 16px;
  margin-bottom: 8px;
}
.bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
  width: 186px;
  color: #5f6672;
  font-weight: 400;
}
/*评分*/
.bui-movie-card-content .bui-movie-desc .bui-movie-desc-highlight{
  color: #ff901c;
  font-size: 14px;
  font-weight: 500;
  margin-left: 2px;
}
/*小竖线*/
.bui-movie-card-content .bui-movie-desc .bui-movie-desc-splitline{
  margin: 0 7px;
  color: #e9ebef;
  font-size:12px;
}
/*  评价人数*/
.bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
  color: #5f6672;
  font-weight: 400;
  font-size: 12px;
}
/*导演区域*/
.bui-movie-card-content  .bui-movie-director{
  margin-bottom: 7px;
  font-size: 12px;
  color: #5f6672;
  font-weight: 400;
}
.bui-movie-role{
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 400;
  color: #5f6672;
}
.bui-btn-wrapper{
  /*开启定位*/
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -26px;
  width: 56px;
  height: 52px;
  /*background-color: red;*/
}
/* 设置购票按钮*/
.bui-btn-wrapper .bui-btn-contained{
  width: 24px;
  height:28px;
  padding: 0 16px;
  text-align: center;
  line-height: 28px;
  transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
  color:#fff;
  font-size: 12px;
  background-image: linear-gradient(45deg,#fb54aa,#fb5773);
  border-radius:100px;
}
/*  设置购票按钮下方文字*/
.bui-btn-wrapper .bui-movie-button-tips{
  margin-top: 5px;
  width: 48px;
  height: 18px;
  color: #999;
  font-size: 9px;
  font-weight:400;
}
</style>