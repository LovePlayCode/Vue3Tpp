<template>
  <div class="mywrapper">
    <HeaderDate></HeaderDate>
    <TheaterHeader></TheaterHeader>
    <div class="tab-mod">
      <div class="tab-bd">
        <div class="cinema-list">
          <ul class="cinema-list-ul">
            <div class="schedule-tip">今天有场次</div>
            <li @click="goCinema(cin.cid)" v-for="(cin,index) in resCinemaData.cinemas" :key="index" >

              <MyCinema :cinema="cin">
                <div class="list-session">近期场次：13:15 | 15:15 | 17:15 | 21:20</div>
              </MyCinema>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "BuyTicket"
}
</script>
<script setup>
  import MyCinema from "@/components/MovieTheatre/MyCinema";
  import HeaderDate from "@/components/infoMovieMain/HeaderDate";
  import TheaterHeader from "@/components/MovieTheatre/TheaterHeader";
  import {useRouter,useRoute} from "vue-router";
  import movCinemaAPi from "@/api/movCinemaAPi";
  import {reactive, ref} from "vue";
  const router = useRouter()
  const route = useRoute()
  const  props = defineProps(['id'])
  // 定义电影数据
  let resCinemaData = reactive({cinemas:[]})
  console.log("传递的id==",props.id)
  if (props.id){
    // 发送请求
    movCinemaAPi.getCinemaById(props.id).then(res=>{
      resCinemaData.cinemas = res.data.data.cinemas

    })
  }
  function goCinema(cid){
    // alert('1')
    router.push({path:'/goCinemaDetailBuy'+`/${cid}/${props.id}`})
  }
</script>
<style scoped>
  .mywrapper{
    background-color: #f5f6f8;
  }
  .tab-mod{
    font-size: 14px;
  }
  .cinema-list{
    padding: 9px;
  }
  .cinema-list .schedule-tip{
    padding: 0 9px;
    font-size: 13px;
    line-height: 32px;
    color: #5f6672;
  }
  .list-session{
    color: #5f6672;
    font-size: 12px;
  }
  .cinema-list-ul li{
    margin-bottom: 9px;
  }
</style>