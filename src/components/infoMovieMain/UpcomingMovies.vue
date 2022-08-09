<template>
  <section class="tab-panel">
    <div class="bui-tabpanel">
      <div class="coming-show">
        <div class="movie_list">
          <!--          日期展示区域-->
          <div class="coming-show-time">
            <!--            俗称-->
            <div class="show-time-desc">明天</div>
            <!--            具体日期-->
            <div class="show-time-date">07-12</div>
            <!--            卡片主体部分-->

          </div>
          <!--          主体区域-->
          <div class="bui-moviecard" @click="showMovieDetail">
            <div class="bui-movie-item-main">
              <div class="bui-movie-card-poster">
                <div class="bui-image">
                  <img src="https://gw.alicdn.com/i4/O1CN01EOBHTV21mPumeC0Ju_!!6000000007027-0-alipicbeacon.jpg_200x200Q30.jpg_.webp" alt="">
                </div>
                <div class="bui-tag">IMAX 2D</div>
                <!--                播放按钮-->
                <div class="bui-icon-play-wrapper">
                  <svg class="icon bui-icon-play-wrapperIcon" aria-hidden="true">
                    <use xlink:href="#icon-kuihuazi"></use>
                  </svg>
                </div>
              </div>
              <div class="bui-movie-card-content">
                <div class="bui-movie-name-wrapper">
                  <span>外太空的莫扎特</span>
                </div>
                <!--                电影详细信息-->
                <div class="bui-movie-desc">
                  <span>18.0万</span>
                  <span>人想看</span>
                  <span>|</span>
                  <span>本周五上映</span>
                </div>
                <!--                导演信息-->
                <div class="bui-movie-director">导演：陈思诚</div>
                <!--                主演-->
                <div class="bui-movie-role">主演：黄渤,荣梓杉,莫扎特,姚晨</div>
              </div>
              <!--                购票区域-->
              <div class="bui-btn-wrapper">
                <div class="movie-card-btn">
                  预售
                </div>
              </div>

            </div>
          </div>
          <!--          购票区域-->
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {useRoute,useRouter} from 'vue-router'
export default {
  name: "infoMovieMain.UpcomingMovies",
  setup(){
    const router = useRouter()
    const route = useRoute()
    // 定义一个函数
    function showMovieDetail(){
      console.log("showMovieDetail方法执行")
      // 跳转到电影详情
      router.push({
        path:'/movieDetail'
      })
    }
    return {
      showMovieDetail
    }
  },

}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body{
  background-color: #f5f6f8;
}
.tab-panel {
  width: 400px;
  padding: 0 12px;
}
.tab-panel .movie_list{
  width: 374px;
}
.tab-panel .coming-show-time {
  width:100%;
  height: 33px;
  padding: 6px 0;
}
.tab-panel .show-time-desc {
  color: #959aa5;
  font-size:12px;
  line-height: 12px;
  font-weight: 500;
  margin-bottom: 3px;
}
.tab-panel .show-time-date{
  color: #2e333e;
  font-size: 16px;
  line-height: 17px;
  font-weight: 500;
}
.tab-panel .bui-moviecard{
  padding:12px;
  width:348px;
  height:111px;
  margin-bottom: 9px;
  background-color: #fff;
  border-radius: 6px;
}
/*  显示电影内容区域*/
.bui-moviecard .bui-movie-item-main{
  position: relative;
  width: 348px;
  height: 112px;
}
.bui-movie-card-poster{
  float: left;
  position: relative;
  width:81px;
  height:116px;
}
.bui-image img{
  width:100%;
  height:100%;
}
.bui-movie-card-poster .bui-tag{
  position:absolute;
  top: 0;
  left:3px;
  color:#fff;
  background-color:rgba(0,0,0,.8);
  font-weight: 400;
  font-size: 10px;
  border-radius:6px;
}
.bui-movie-card-poster .bui-icon-play-wrapper{
  position:absolute;
  bottom:5px;
  left: 50px;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color:#fff;

}
.bui-icon-play-wrapper .bui-icon-play-wrapperIcon{
  margin-left: 6px;
}
.bui-movie-card-content{
  float:left;
  width: 186px;
  height: 93px;
  padding: 0 12px;
  font-size: 12px;
  color: #5f6672;
}
.bui-movie-card-content .bui-movie-name-wrapper{
  height: 19px;
  margin-bottom:7px;
}
.bui-movie-card-content .bui-movie-name-wrapper span{
  font-size: 16px;
  line-height:1.2;
  font-weight: 500;
  color:#2e333e;
}
.bui-movie-card-content .bui-movie-desc {
  width: 186px;
  height: 16px;
  margin-bottom: 7px;
}
.bui-movie-card-content .bui-movie-desc span:first-child{
  color: #ff901c;
  font-size: 14px;
  font-weight: 500;
}
.bui-movie-card-content .bui-movie-desc span:nth-child(2){
  font-size: 12px;
  color: #5f6672;
  font-weight: 400;
}
.bui-movie-card-content .bui-movie-desc span:nth-child(3){
  color:  #e9ebef;
  font-size: 12px;
  background: none;
  margin: 0 6px;
}
.bui-movie-card-content .bui-movie-desc span:last-child{
  font-size: 12px;
  font-weight: 400;
  /*color: #5f6672;*/
}
.bui-movie-director{
  height: 14px;
  margin-bottom:6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  /*color:#5f6672;*/
}
/*  购票区域*/
.bui-btn-wrapper{
  position: absolute;
  top:50%;
  right:0;
  /*left:0;*/
  margin-top: -14px;

  /*margin-top: 50%;*/
  width:56px;
  height:28px;
}
.bui-btn-wrapper .movie-card-btn{
  height: 28px;
  color: #fff;
  font-weight: 400;
  font-size:12px;
  line-height:28px;
  text-align:center;
  background-image: linear-gradient(45deg,#23cafb,    #36aef9);
  background-color: #f2f2f2;
  /*  过度效果  */
  transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
  border-radius:100px;
}
</style>