<template>
  <!--影院主体部分-->
  <div class="cinema-list">
    <ul class="cinema-list-ul">
      <li v-for="cinema in cinemaData.cinemas" :key="cinema.cid" @click="goCinemaInfo(cinema.cid)">
        <MyCinema :cinema="cinema"></MyCinema>
<!--        <div class="list-item-container">-->
<!--          <a href="" class="list-item-in clearfix">-->
<!--            <h3 class="list-title-warper clearfix">-->
<!--              <div class="list-title-left">-->
<!--                <span class="list-title">北京百老汇电影中心（万国城店）</span>-->
<!--              </div>-->
<!--              <div class="list-price">-->
<!--                新人                      ¥35-->
<!--                <span class="word-qi">起</span>-->
<!--              </div>-->

<!--            </h3>-->
<!--            <div class="list-address">-->
<!--              <span class="list-distance">&#45;&#45;km</span>-->
<!--              <div class="list-location">东城区香河园路1号当代MOMA北区T4座</div>-->
<!--            </div>-->
<!--            <div class="cinema-support">-->
<!--              <div class="support-tags">-->
<!--                <div class="tpp-lbl">-->
<!--                  <span class="support-tagName">特惠票</span>-->
<!--                </div>-->
<!--                <div class="tpp-lbl">-->
<!--                  <span class="support-tagName">特惠票</span>-->
<!--                </div>-->
<!--                <div class="tpp-lbl">-->
<!--                  <span class="support-tagName">特惠票</span>-->
<!--                </div>-->
<!--                <div class="tpp-lbl">-->
<!--                  <span class="support-tagName">特惠票</span>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </a>-->
<!--        </div>-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheaterMain"
}
</script>
<script setup>
  import MyCinema from "@/components/MovieTheatre/MyCinema";
  import cinemaApi from "@/api/cinema";
  import ChangciApi from "@/api/changciApi";
  import {reactive} from "vue";
  import {useRouter} from "vue-router";
  let cinemaData = reactive({cinemas:[]})
  const router = useRouter()
  cinemaApi.getAllCinema().then(res=>{
    console.log("电影院数据为",res.data.data)
    // 将获取到到数据赋值给响应式数据 cinemaData

    cinemaData.cinemas = res.data.data.item
  })
  function goCinemaInfo(cid){
    router.push({path:'/goCinemaDetailBuy/'+cid})
  }
</script>
<style scoped>
.cinema-list {
  padding: 10px 0;
}
/*.cinema-list .list-item{*/
/*  position:relative;*/
/*  width: 380px;*/
/*  height:93px;*/
/*  padding: 0 9px;*/
/*  margin-bottom: 9px;*/
/*  font-size: 12px;*/
/*  line-height: 200%;*/
/*}*/
/*.cinema-list .list-item .list-item-container{*/
/*  padding: 12px;*/
/*  background:#fff;*/
/*  border-radius: 6px;*/
/*}*/
/*.cinema-list .list-item .list-item-container .list-item-in{*/
/*  display: block;*/
/*}*/
/*.cinema-list .list-item .list-title-warper{*/
/*  margin-bottom: 2px;*/
/*  font-size: 16px;*/
/*  font-weight: 500;*/
/*  color:#2e333e;*/
/*}*/
/*.cinema-list .list-item .list-title-warper .list-title-left,.list-price{*/
/*  float:left;*/
/*}*/
/*.cinema-list .list-item .list-title-warper .list-title-left{*/
/*  margin-right: 50px;*/
/*}*/
/*.cinema-list .list-item .list-title-warper .list-price{*/
/*  color:#ff4361;*/
/*  font-size: 12px;*/
/*  font-weight: 400;*/
/*}*/
/*.cinema-list .list-item .list-title-warper .list-price .word-qi{*/
/*  color: #959aa5;*/
/*  font-size: 11px;*/
/*}*/
/*.list-address {*/
/*  position:relative;*/
/*  line-height: 1.5;*/
/*  height: 18px;*/
/*  margin-right: 16px;*/
/*}*/
/*.list-distance,.list-location{*/
/*  color: #5f6672;*/
/*  font-size: 12px;*/
/*}*/
/*.list-address .list-distance{*/
/*  position:absolute;*/
/*  right: 0;*/
/*  top: 0;*/
/*  font-size: 12px;*/
/*  !*color: #5f6672;*!*/
/*}*/
/*.cinema-support{*/
/*  margin: 2px 0;*/
/*  height: 18px;*/
/*  line-height: 1.5;*/
/*}*/
/*.cinema-support .tpp-lbl{*/
/*  float:left;*/

/*  border: 1px solid rgba(49,169,245,0.4);*/
/*  border-radius: 3px;*/
/*  margin-right: 2px;*/
/*  padding:0 3px;*/
/*  color: #31a9f5;*/
/*}*/
/*.cinema-support .tpp-lbl:first-child{*/
/*  color:#ff901c;*/
/*  border: 1px solid rgba(255,144,28,.3);*/
/*  border-radius: 3px;*/
/*}*/
</style>