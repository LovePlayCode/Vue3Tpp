<template>
  <div class="cinema-layout">
    <section class="cinema-info clearfix">
      <div class="cinema-container">
<!--        信息盒子-->
        <div class="info">
          <div class="cinema-name clearfix">
            <div class="name-text">北京百老汇电影中心（万国城店）</div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-you"></use>
            </svg>
          </div>
<!--          地址区域-->
          <div class="cinema-address">
            <span class="address-text">
            东城区香河园路1号当代MOMA北区T4座
            </span>
            <span class="address-marker"></span>
          </div>
          <div class="label-info">
            <span class="label">可改签</span>
            <span class="label">可改签</span>
          </div>
          <div class="cinema-tip">
            <div class="tpp-ntcbar">
              <div class="tpp-ntcbar-content">
                <div class="tpp-ntcbar-text">
                  <div class="tpp-ntcbar-inner">
                    本影城观看3D电影，需自备3D眼镜或在影院前台购买，具体信息详询影城
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="show-list-top-action-bar">

        </div>
      </div>
    </section>
<!--    电影展示区-->
    <div class="cinema-movies">
      <div class="MovieList">
        <Swiper
            slides-per-view="auto"
            :space-between="11"
            @swiper="onSwiper"
            :autoHeight="true"
            :effect="true"
            :centered-slides="true"
            @slideChange="onSlideChange"
            @init="onInit"
            v-if="flag"
        >
          <swiper-slide v-for="item in changciData.ChangCi"><img :src="item.movieData.timage" alt=""></swiper-slide>

        </Swiper>
        <div class="movie-name">
          <div class="wrap">
            <span class="showname">{{ movieInfo.title }}</span>
            <span class="score-name">{{movieInfo.ttype}}</span>
            <span class="show-star-remark">9.5</span>
            <p>
              <span>122分钟 | 喜剧 | {{ movieInfo.tdirector }} ></span>
            </p>
          </div>
        </div>
      </div>
    </div>
<!--    购票区-->
    <ShowTIckInfo v-if="flag" :changci="changciData.changCiInfo"></ShowTIckInfo>
  </div>
</template>

<script>
export default {
  name: "TheaterDetail"
}
</script>
<script setup>
  import {Swiper,SwiperSlide} from 'swiper/vue'
  import ShowTIckInfo from "@/components/infoMovieMain/showTIckInfo";
  import {useRouter,useRoute} from "vue-router";
  import 'swiper/css'
  import ChangciApi from "@/api/changciApi";
  import {nextTick, reactive, ref} from "vue";
  const router = useRouter()
  let flag = ref(false)
  const route = useRoute()
  let changciData = reactive({ChangCi:[],index:0,changCiInfo:[]})
  let movieInfo = reactive({})
  let MySwiper = reactive({swiper:{}})
  let onSwiper = (swiper) => {
    // swiper.slideTo(index)
    // console.log("123")
    // 获取实例对象
    MySwiper.swiper = swiper
  };

  // 如果这个参数不为空 就发送请求
  if (route.params.cid){
    ChangciApi.getChangCiByTidAndCid(route.params.cid).then(res=>{
      changciData.ChangCi = res.data.data.data
      console.log("changciData.ChangCi =",changciData.ChangCi )
      // 遍历这个集合
      // for(let item of  changciData.ChangCi){
      //     if (item.movieData.tid ===route.params.tid){
      //       // 如果找到就将flag置为true 同时将swiperslide移动到指定位置
      //       flag.value = true
      //     }
      // }
      if (route.params.tid){
        for(let i=0;i<changciData.ChangCi.length;i++){
          // 将轮播图跳转到指定的轮播图
          if (changciData.ChangCi[i].movieData.tid === route.params.tid){
            // 如果找到就将flag置为true 同时将swiperslide移动到指定位置
            // flag.value = true
            changciData.index = i
            // 同时将场次信息赋值给changCiInfo
            changciData.changCiInfo = changciData.ChangCi[i].changcis
          }
        }
      }else{
        changciData.changCiInfo = changciData.ChangCi[0].changcis
      }

      flag.value = true
      // 轮播图跳转到指定位置  使用nextTick 在他下次刷新时跳转到指定位置
      nextTick(()=>{
        MySwiper.swiper.slideTo(changciData.index)
      })
    })
  }
  console.log("传递的tid==",route.params.tid)
  // 定义一个电影id变量用于绑定

  const onSlideChange = (swiper) => {
    // // 如果轮播图改变 就跳转
    // router.push({path:'/goCinemaDetailBuy/showTickInfo'})
    // alert(swiper.activeIndex)
    movieInfo.title = changciData.ChangCi[swiper.activeIndex].movieData.ttitle
    movieInfo.ttype = changciData.ChangCi[swiper.activeIndex].movieData.ttype
    movieInfo.tdirector = changciData.ChangCi[swiper.activeIndex].movieData.tdirector
    changciData.changCiInfo = changciData.ChangCi[swiper.activeIndex].changcis
  };
  // function onInit(swiper){
  //   // alert(swiper.activeIndex)
  //   // console.log("执行swiper初始化")
  //   swiper.slideTo(changciData.index)
  //   router.push({path:'/goCinemaDetailBuy/showTickInfo'})
  // }
</script>
<style scoped>

  .swiper-wrapper {
    background-color: #DD4A68;
  }
  .cinema-layout{
    width: 400px;

  }
  .cinema-info{
    /*height: 214px;*/
    font-size: 15px;
    line-height: 1.5;
  }
  .cinema-container{
    position: relative;
    overflow: hidden;
    background: #fff;
  }
  .cinema-container::after{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 202px;
    content: '';
    background: url('https://gw.alicdn.com/tfs/TB11h1E4YY1gK0jSZTEXXXDQVXa-750-300.png') no-repeat top/100%;
  }
/*  信息部分*/
  .info{
    /*width: 100%;*/
    position: relative;
    border-radius: 10px;
    z-index: 100;
    margin: 69px 9px 0 9px;
    padding: 16px 12px;
    width: 380px;
    height: 143px;
    background: url("https://gw.alicdn.com/tfs/TB1DYeR37L0gK0jSZFtXXXQCXXa-376-178.png") no-repeat;

  }
  .cinema-name{
    line-height: 1.25;
    font-size: 18px;
    font-weight: 700;

  }
  .cinema-name .name-text,.cinema-name svg{
    float:left;
  }
  .cinema-name svg{
    width: 16px;
    height: 16px;
  }
  .info .cinema-address{
    /*position: relative;*/
    margin-top: 3px;
    line-height: 1.25;
    font-size: 12px;
    /*text-align: center;*/
  }
  .info .cinema-address span{
    display: inline-block;
  }
  .info .cinema-address .address-marker{
    position: absolute;
    top: 26px;
    right: 50px;
    background: url("https://gw.alicdn.com/tfs/TB1JSa437L0gK0jSZFAXXcA9pXa-54-54.png") no-repeat 50%;
    background-size: 70%;
    background-color: #fff;
    /*margin-left: 88px;*/
    border-radius:100%;
    width: 38px;
    height: 38px;
  }
  .label-info{
    color: #959aa5;
    line-height: 1.25px;
    font-size: 11px;
    margin: 8px 0;

  }
  .label-info span{
    display: inline-block;

  }
  /* 选择不是第一个元素  添加before伪元素*/
  .label-info .label:not(:first-child)::before{
    display: inline-block;
    vertical-align: middle;
    content: '.';
    width: 1px;
    height: 10px;
    margin: 0 8px;
    background-color: hsla(0,0% ,100%,.4);
  }
  .cinema-tip .tpp-ntcbar{
    width: 352px;
    height: 35px;
    background-color: #fff6ed;
    margin: 12px -12px -16px -12px;
    padding: 5px 12px;
    color: #fc9f58;
    line-height: 1.5;
    font-size: 12px;
  }
  .cinema-tip .tpp-ntcbar-inner{
    overflow: hidden;
    width: 355px;
    height: 36px;
  }
  .cinema-movies{
    padding-top: 3px;

  }
  /*.swiper-wrapper .swiper-slide-active,.swiper-wrapper .swiper-slide-duplicate-active{*/
  /*  transform: scale(1.15) translateY(-10px);*/
  /*}*/
  /*.MovieList .swiper-wrapper{*/
  /*  padding-top: 12px;*/
  /*  transform: translateX(147px);*/
  /*}*/
  /*.MovieList .swiper-wrapper img{*/
  /*  width: 81px;*/
  /*  height: 100%;*/
  /*}*/
  /*.MovieList */
  .swiper{
    padding-top: 22px;
  }

  .swiper-slide-active,.swiper-slide-duplicate-active{
    transform: scale(1.15) translateY(-10px);
  }

  .swiper-slide{
    width: 81px;
    height: 106px;
    /*border-radius: 120px;*/
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
  .movie-name{
    padding: 4px 0 7px 0;
  }
  .wrap{
    text-align: center;
    line-height: 1.25;
    font-size: 17px;
  }
  .wrap .showname{
    line-height: 1.25;
    font-size: 17px;
    font-weight: 500;
  }
  .wrap .score-name{
    line-height: 1.25;
    font-size: 17px;
    color: #ff8300;
    margin: 5px;
  }
  .show-star-remark{
    color: #ff8300;
  }
  .wrap p{
    margin: 7px 16px 0 16px;
    color: #959aa5;
    font-size: 12px;
    line-height: 1.2;
  }

</style>