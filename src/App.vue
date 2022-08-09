<template>

  <router-view></router-view>
<!--  电影尾部区域-->
  <movieFooter v-show="$route.meta.showFooter"></movieFooter>


</template>

<script>
import movieFooter from "@/pages/footer/MovieFooter";
import {onMounted,watch} from "vue";

import {useRoute} from 'vue-router'

export default {
  setup(){
    let  route = useRoute()



    // onMounted(()=>{
    //   axios.get(`http://localhost:8080/lhl/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=20`)
    //       .then(res=>{
    //         console.log(res)
    //       })
    // })
    watch(route,()=>{
      console.log("路由为",route)
    })

  },
  name: 'App',
  components:{
    // movieMain,
    movieFooter
  }

}
</script>

<style>
    /*.swiper-slide{*/
    /*  width: 200px;*/
    /*  height: 200px;*/
    /*  background-color: firebrick;*/
    /*}*/
/* 字体图标样式*/
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  a{
    text-decoration: none;
  }
  #app{

    overflow: hidden;
  }
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
.clearfix:after{
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}


</style>
