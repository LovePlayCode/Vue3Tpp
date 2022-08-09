<template>
  <MovieDetail v-if="flag" :movie="resMovie.Movie"
               :acts="resMovie.directs"
               :image="resMovie.image"
               :coms="resMovie.coms"
               :tabs="resMovie.tabs"
  >
    <div class="bottom-fix-wrap" @click="goBuyMovie">
      <div class="actions-wrap">
        <div class="btn-area">
<!--          文字显示区域-->
          <div class="guide">
            <div class="title">周票房榜No.2</div>
            <div class="sub-title">总票房破15.7亿</div>
          </div>
          <div class="zaoniao-large">
            <div class="title">特惠购票</div>
          </div>
        </div>
      </div>
    </div>
  </MovieDetail>
</template>

<script>
import MovieDetail from "@/components/upComingMovie/MovieDetail";
import {useRouter,useRoute} from "vue-router";
import movieApi from "@/api/movie";
import directorApi from "@/api/director";
import {reactive, ref} from "vue";
import CommentAndTabApi from "@/api/commentAndTab";
export default {
  name: "BuyMovie",
  setup(){
    const router =useRouter()
    let flag = ref(false)
    console.log("flag==",flag)
    const route = useRoute()
    // 定义一个数据
    let resMovie = reactive({Movie:[],directs:[],coms:[],tabs:[]})
    // 发送请求获取当前电影具体信息 由于props子组件总是报错 索性直接连着写了出来 这样保证每个props属性都是可以读取的 避免了报错
    movieApi.getByIdMovie(route.params.id).then(res=>{
      resMovie.Movie = res.data.data.movie
      movieApi.getImage(route.params.id).then(res=>{
        resMovie.image = res.data.data.image
        directorApi.getDirect(route.params.id).then(res=>{
          resMovie.directs = res.data.data
          CommentAndTabApi.getComAndTab(route.params.id).then(res=>{
            resMovie.coms = res.data.data.coms
            resMovie.tabs = res.data.data.tabs
            flag.value = true
          })
          // console.log('resMovie.directs==',resMovie.directs)
        })
      })

    })
    // 发送请求获取电影封面信息

    // 获取演员信息

    console.log("route==",route)
    function goBuyMovie(){
      router.push({name:'goBuyTic',params:{id:route.params.id}})
    }
    return {
      goBuyMovie,resMovie,
      flag
    }
  },
  components:{
    MovieDetail
  }
}
</script>

<style scoped>
  .bottom-fix-wrap{
      width: 400px;
      height: 67px;

  }
  .btn-area{
    width: 374px;
    height: 406px;
    padding: 9px 12px;
  }
  .btn-area .title{
    font-size: 14px;
    font-weight: 500;
    color: #2e333e;
  }
  .guide{
    float: left;
  }
  .zaoniao-large{
    float: right;
  }
  .btn-area .sub-title{
    font-size: 11px;
    color: #959aa5;
  }

  .btn-area .zaoniao-large{
    width: 87px;
    height: 48px;
    padding: 0 52px;
    border-radius:100px;
    background-image: linear-gradient(90deg,#fb54aa,#fb5773)!important;
    transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
  }
  .zaoniao-large .title{
    position: absolute;
    line-height: 48px;
    text-align: center;
    font-size: 17px;
    color: #fff;
  }
</style>