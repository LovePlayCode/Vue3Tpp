<template>
  <!--电影播放视频-->
  <section class="video-header-wrapper"></section>

  <!--电影详情-->
  <div class="show-info-d">
    <!--    封面-->
    <div class="poster-wrap">
      <div class="poster" :style="`background-image:url(${image})`"></div>
      <span class="force-oneline">
        <i>2D IMAX</i>
      </span>
    </div>
    <!--    详情-->
    <div class="info-container">
      <div class="movie-name">
        <p class="chinese">
          <span>{{ movie.showName }}</span>
        </p>
      </div>
      <div class="movie-detail">
        <p class="show-intro">{{ movie.duration }}分钟  <span v-for="(t,index) in type" :key="index">{{t}}/</span></p>
        <div class="open-date-and-issuance">
          <div class="open-date">{{ movie.openTime}}在中国大陆上映</div>
          <div class="bui-tag">发型通知</div>
        </div>
      </div>
    </div>
  </div>
  <!--  口碑-->
  <section class="show-remark">
    <div class="remark-wrapper">
      <div class="remark-container">
        <h3 class="remark-head">
          <span class="remark-title"></span>
          <span class="want-see-num">
            <span class="J_WantCount">{{ movie.wantCount }}</span>
            <span class="want-see-text"> &nbsp;人想看</span>
          </span>
        </h3>
      </div>
    </div>
  </section>
  <!--  背景条-->
  <div class="margin-area"></div>
  <!--电影详情导航栏-->
  <section class="tab-wrapper">
    <ul class="tab-container">
      <li class="tab-item tab-li-active">简介</li>
      <li class="tab-item">
        <span style="position: relative">
          影评
          <span class="sub-info">28</span>
        </span>
      </li>
      <li class="tab-item">更多</li>
    </ul>
  </section>
  <!--电影简介-->
  <div class="movieWrapper">
    <div class="show-desc">
      <div class="show-desc-content">
        {{movie.description}}
      </div>
      <div class="seg-line"></div>

    </div>
    <!--演员列表-->
    <div class="show-artists">
      <div class="show-mod-title">
        <h3>演职人员</h3>
        <div class="more-num">
<!--           计算总共的演职人员-->
          {{ acts.director.length+acts.acts.length }}
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
      </div>
      <div class="show-artists-container">
        <div style="display: flex">
          <a class="show-artist" @click="goArtist" v-for="dir in acts.director">
            <div class="show-poster" :style="`background-image:url(${dir.dimage})`"></div>
            <dl>
              <dt>{{ dir.dtitle }}</dt>
              <dd>{{ dir.roleName }}</dd>
            </dl>
          </a>
          <a class="show-artist" @click="goArtist" v-for="act in acts.acts">
            <div class="show-poster" :style="`background-image:url(${act.dimage})`"></div>
            <dl>
              <dt>{{ act.dtitle }}</dt>
              <dd>{{ act.roleName }}</dd>
            </dl>
          </a>
        </div>

      </div>
    </div>
    <!--  视频和剧照-->
    <div class="videoposter">
      <div class="show-albums">
        <div class="show-mod-title">
          <h3>视频和剧照</h3>
          <div class="more-num">
            35
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you"></use>
            </svg>
          </div>
        </div>
        <div class="show-album-container">
          <div style="display:flex">
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
            <a class="show-album-item">
              <div>
                <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--  观众热评-->
    <div class="show-comments clearfix">
      <div class="show-comments-wrapper clearfix">
        <div class="clearfix">
          <h3>观众热评</h3>
          <!--      小图标-->
          <div class="score-tip">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-a-07biaoqian"></use>
            </svg>
          </div>
        </div>
        <ul class="tag-list clearfix">
          <li v-for="tab in tabs">{{ tab.mcTitle }}</li>

        </ul>
<!--        评论列表-->
        <div class="show-comments-list">
          <div class="show-comment" v-for="com in coms">

            <div class="comment-title">
              <!--            头像-->
              <div class="user-avatar" :style="`background:url('${com.uimage}') no-repeat 50%/contain `">
              </div>
              <div class="user-wrap">
<!--                文字显示区域-->
                <div class="user-info">
                  <div class="name">{{ com.utitle }}</div>
                </div>
<!--                评价星形区域-->
                <div class="movie-info">
                  <span>
                    <div class="show-star-ranking">
                      <div class="show-star-ranking-light">

                      </div>
                    </div>
                  </span>
                  <span>{{ com.ustar }}</span>
                </div>
              </div>
            </div>
            <dl class="comment">
<!--              展示内容区域-->
              <dd class="show-comment-content">
                {{com.comment}}
              </dd>
              <dd class="show-comment-interact">
                <div class="comment-time">{{com.comDate}}</div>
                <div class="comment-msg">
                  <div class="highlight">
                    <i></i>
                    <div class="count">{{com.upraise}}</div>
                  </div>
                  <div class="reply">
                    <i></i>
                    <div class="count">67</div>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>

    </div>
  </div>
<!--  购票区域-->
  <slot></slot>
</template>

<script>
import {useRouter} from "vue-router";

import {watch} from "vue";
export default {
  name: "MovieDetail",
  props:['movie','acts','image','coms','tabs'],
  setup(props){
    // watch(()=>props.movie,(newVal)=>{
    //   console.log("watch执行")
    //   console.log("执行==",props.movie.length)
    //   console.log(Boolean(props.movie))
    //   console.log(newVal)
    //   if (props.movie){
    //     console.log("执行==",props.movie)
    //     props.movie = []
    //   }else{
    //     props.movie = newVal
    //   }
    // },{
    //   immediate:true,
    //   deep:true
    // })
    let flag = false
    let type = props.movie.type
    if (type){
      type = type.split(',')
    }
    const router = useRouter()
    function goArtist(){
      // alert("123")
      router.push({path:'/showArtist'})
    }
    return{
        goArtist,
        type,
        flag
    }
  }
}
</script>

<style scoped>
.video-header-wrapper{
  width: 400px;
  height: 249px;
  background:no-repeat 50%/cover url("https://gw.alicdn.com/i2/O1CN01oepU6m1LFhldYQruh_!!6000000001270-0-alipicbeacon.jpg_760x760Q30.jpg_.webp") ;
}
/*  电影详情*/
.show-info-d{
  width: 374px;
  height: 144px;
  padding: 12px 12px 0 12px;
  margin-bottom: 12px;
}
.poster-wrap{
  position: relative;
  margin-right: 6px;
}
.poster-wrap .poster{
  width: 103px;
  height: 144px;
  background: url("https://gw.alicdn.com/i3/O1CN01CiuZKy1I5Dr6LcJuu_!!6000000000841-0-alipicbeacon.jpg_320x320Q30s100.jpg_.webp") no-repeat 50%/cover;
}
.poster-wrap .force-oneline{
  position: absolute;
  top: 0;
  left: 4px;
}
.poster-wrap,.info-container{
  float: left;
}
.poster-wrap .force-oneline i{

  color: #000;
  background: #f8f8fb;
  font-size: 10px;
  font-weight: 400;
  border-radius: 3px;
  white-space: nowrap;
  /*取消斜体  */
  font-style: normal;
}
.info-container{
  width: 258px;
  height: 91px;
  /*background: red;*/
}
.info-container .movie-name{
  padding:4px 0;
  padding-bottom: 0;
}
.info-container .chinese{
  color: #2e333e;
  font-size:22px;
  font-weight: 500;
}
.info-container .movie-detail{
  padding: 8px 0;
  padding-bottom: 0;
}
.movie-detail .show-intro,.movie-detail .open-date-and-issuance{
  color:#959aa5;
  font-size: 13px;
}
.movie-detail .show-intro{
  margin-bottom: 4px;
}
.open-date,.bui-tag{
  float: left;
}
.open-date{
  /*margin-left:1px;*/
  width: 196px;
  /*内容在一行显示*/
  white-space: nowrap;
  overflow: hidden;
  /* 多出来的内容使用省略号代替*/
  text-overflow: ellipsis;
}
.bui-tag{

  border: 1px solid rgba(44,199,164,.4);
  padding: 0 4px;
  border-radius: 3px;
  color: #2cc7a4;
  /*border-color: rgba(44,199,164,.4);*/
}
/*  k口碑*/
.show-remark{
  width: 374px;
  height: 47px;
  margin: 12px;
}
.show-remark .remark-wrapper{
  height: 24px;
  padding: 10px 16px;
  border: 1px solid #e9ebef;
  border-radius: 12px;

}
.show-remark .remark-head{
  font-size: 16px;

}
.show-remark .remark-title{
  margin-top: 5px;
  width: 85px;
  height: 14px;
  text-align: center;
  background: url("https://img.alicdn.com/tfs/TB15abfvWL7gK0jSZFBXXXZZpXa-174-33.png");
  /*background-color: red;*/
  background-repeat: no-repeat;
  background-size: contain;
}
.show-remark .remark-head span{
  float: left;
}
.show-remark .want-see-num{
  margin-left: 143px;
  font-size: 16px;
  color: #ff901c;
}
/*背景条*/
.margin-area{
  width: 100%;
  height:10px;
  background-color: #f5f6f8;
}
/*电影简介*/
.tab-wrapper{
  width: 400px;
  height:51px;
}
.tab-container li{
  float: left;
  width: 130px;
  height: 17px;
  padding: 16px 0;
  text-align: center;
  font-size: 16px;
  line-height: 17px;
  color: #4a4a4a;
}
.tab-li-active{
  font-weight: 600;
  border-bottom: 1px solid #2e333e;
}
.tab-container .sub-info{
  display: block;
  position:absolute;
  top: -3px;
  left: 20px;
  right: -39px;
  width: 37px;
  height: 17px;
  font-size:10px;
  color:#959aa5;
  font-weight: 400;
}
/*  电影简介*/
.show-desc{
  width: 374px;
  height: 164px;

  padding-top: 12px;
  overflow: hidden;
  font-size: 15px;
  background-color: #fff;
}
.show-desc .show-desc-content{
  margin: 0 12px;
  margin-bottom: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.seg-line{
  position: relative;
  height:1px;
  background: #fff;
}
.seg-line::after{
  position: absolute;
  left: 12px;
  top: 0;
  content:"";
  width: 100%;
  height:1px;
  background:transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
}
/*  演员列表*/
.show-artists{
  height: 251px;
}
.show-artists .show-mod-title{
  height: 57px;
}
.show-artists .show-mod-title h3,.show-artists .show-mod-title .more-num{
  float: left;
}
.show-artists .show-mod-title h3{
  width: 72px;
  height: 40px;
  padding: 8px 0;
  padding-left: 12px;
  font-size: 16px;
  font-weight: 600;
}
.show-artists .show-mod-title .more-num{
  margin-left: 267px;
  margin-top: 8px;
  /*line-height: 57px;*/
}
/*视频和快照*/
.videoposter{
  width: 400px;
  height: 197px;
}
.videoposter .show-albums .show-mod-title{
  height: 57px;
}
.videoposter .show-albums .show-mod-title h3{
  float: left;
  line-height: 57px;
  margin-left: 10px;
}
.videoposter .show-albums .show-mod-title .more-num{
  float: right;
}
/*观众热评*/
.show-comments-wrapper h3{
  float: left;
  font-size: 14px;
  padding:14px 0 8px 12px;
}
.show-comments-wrapper .score-tip{
  float: left;
  margin-top: 11px;
  margin-left: 3px;
}
.tag-list{
  padding: 0 12px;
  width: 374px;
  /*height: 42px;*/
}
.tag-list li{

  float: left;
  padding:7px 16px;
  margin: 0 8px 10px 0;
  border: 1px solid #e9ebef;
  border-radius: 100px;
  font-size: 13px;

}
/*演员图片表*/
.show-artists-container{
  width: 387px;
  height: 194px;
  margin-left: 12px;
  overflow-x: scroll;
}
.show-artist{
  float: left;
  display: block;
  width: 92px;
  height:181px;
  margin-right: 5px;
  text-align: center;
}
.show-artist .show-poster{
  width: 92px;
  height: 128px;
  /*height: 100px;*/
  background: url("https://gw.alicdn.com/i2/O1CN01obN3ls1CavVQGxTQB_!!6000000000098-0-alipicbeacon.jpg_320x320Q30.jpg_.webp") no-repeat 50%/cover;
}
.show-artist dl dt{
  font-size: 14px;
}
.show-artist dl dd{
  font-size: 11px;
  color: #5f6672;
}
.videoposter .show-album-item{
  display: block;
  width: 188px;
  height: 125px;
  margin-right: 5px;

}
.videoposter .show-album-item img{
  display: block;
  width: 100%;
  height: 100%;
}
.videoposter .show-album-item>div{
  width: 188px;
  height: 125px;
}
.show-album-container{
  width: 387px;
  height: 140px;
  overflow-x: scroll;
}
/*评论列表*/
.show-comments-list{
  margin-left: 12px;
}
.show-comments-list .show-comment{
  margin: 12px 0;
}
.show-comments-list .show-comment .comment-title{
  width: 387px;
  height: 52px;
  margin-bottom: 10px;
}
.show-comments-list .show-comment .comment-title .user-avatar{
  float: left;
  width: 48px;
  height: 48px;
  padding: 2px;
  border-radius: 50%;
  background: url('https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png') no-repeat 50%/cover;
}
.show-comments-list .show-comment .comment-title .user-wrap{
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.show-comments-list .show-comment .comment-title .user-info{

  font-size: 15px;
  font-weight: 600;
}
.show-comments-list .show-comment .comment-title .user-wrap .movie-info span{
  display: inline-block;
}
.show-comments-list .show-comment .comment-title .user-wrap .movie-info span:last-child{
  font-size: 13px;
  margin-left: 3px;
  color: #ff901c;
}
.show-star-ranking{
  width: 55px;
  height: 10px;
  background: url('https://gw.alicdn.com/tfs/TB1UoBbgeH2gK0jSZJnXXaT1FXa-32-32.svg');
  background-size: 11px 100%;
}
.show-star-ranking .show-star-ranking-light{
  width: 79%;
  height: 100%;
  background-size: 11px 100%;
  background-image: url("https://gw.alicdn.com/tfs/TB1Kto9f1L2gK0jSZPhXXahvXXa-32-32.svg");
}
dl.comment{
  padding-right: 12px;
  padding-bottom: 12px;
}
dl dd.show-comment-content{
  position: relative;
  overflow: hidden;
  max-height: 175px;
  text-align: justify;
}
/*dl dd.show-comment-content::after{*/
/*  content: '...';*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  right:0;*/
/*  background:#fff;*/
/*}*/
dl dd.show-comment-interact{
  margin-top: 6px;
  width: 374px;
  height: 31px;
}
dl dd.show-comment-interact .comment-time{
  float: left;
  width: 248px;
  color: #bcbcbc;
}
dl dd.show-comment-interact .comment-msg{

  float: left;
  width: 107px;
  color:#bcbcbc;
}
dl dd.show-comment-interact .comment-msg .highlight{
  float: left;
  padding: 5px 10px;

  padding-left: 0;
}
dl dd.show-comment-interact .comment-msg .highlight i{
  float: left;
  display: block;
  width: 17px;
  height: 17px;
  margin-right: 3px;
  background: url('https://gw.alicdn.com/tfs/TB1SeqMr1bviK0jSZFNXXaApXXa-35-36.svg') no-repeat 50%/contain;
}
dl dd.show-comment-interact .comment-msg .highlight .count{
  float: left;

}
dl dd.show-comment-interact .comment-msg .reply{
  float: left;
  padding: 6px;
}
dl dd.show-comment-interact .comment-msg .reply i{
  float: left;
  width:17px;
  height:17px;
  background:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3EPage 1%3C/title%3E%3Cg fill='%23bcbcbc' fill-rule='evenodd'%3E%3Cpath d='M14.13 25.47c-1.35.016-2.673-.203-3.933-.647-.452-.16-.917-.24-1.393-.24-.222 0-.444.017-.663.052l-2.842.32c-.042.007-.083.01-.12.01-.238 0-.37-.06-.502-.265-.063-.097-.04-.39.11-.705l.336-.705c.455-.955-.008-1.957-.605-2.832-1.288-1.885-1.975-4.097-1.99-6.388C2.494 7.76 7.594 2.587 13.895 2.532h.104c6.304 0 11.45 5.128 11.467 11.433.02 6.167-5.173 11.434-11.335 11.504zM26.885 8.52c-.707-1.664-1.716-3.153-3.002-4.435-1.285-1.282-2.778-2.287-4.445-2.99C17.714.37 15.884 0 13.998 0h-.125c-3.738.034-7.24 1.512-9.855 4.166C1.406 6.82-.022 10.344 0 14.083c.015 2.802.858 5.497 2.43 7.804.35.51.4 1.172.137 1.724l-.367.768c-.34.71-.29 1.53.13 2.193.418.666 1.137 1.067 1.915 1.067.125 0 .25-.01.375-.03l3.25-.53c.16-.026.318-.037.477-.037.344 0 .684.057 1.013.174 1.49.52 3.05.786 4.638.786h.163c1.857-.023 3.667-.412 5.376-1.164 1.644-.723 3.126-1.747 4.404-3.04 1.274-1.293 2.276-2.79 2.975-4.446.726-1.72 1.092-3.535 1.085-5.392-.008-1.886-.382-3.716-1.115-5.436z'/%3E%3Crect x='13' y='11' width='2.4' height='5' rx='1.2'/%3E%3Crect x='19' y='11' width='2.4' height='5' rx='1.2'/%3E%3C/g%3E%3C/svg%3E") no-repeat 50%/contain;
}
dl dd.show-comment-interact .comment-msg .reply .count{
  float: left;
}
</style>