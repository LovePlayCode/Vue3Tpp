<template>
  <section class="cinema-schedules">
    <div class="tab-hd-wrap clearfix">
      <div class="tab-hd">
        <ul>
          <li v-for="(item,index) in set" @click="showChangCi(item,index)">
            <div class="date-tip" :class="{ active:index===currentIndex}">
                <span>
<!--                  {{ item.sdate }}-->
                  {{item}}
                </span>
            </div>
          </li>

        </ul>
      </div>
    </div>
    <div class="ScheduleWrapper">
      <div v-if="changCiFlag" class="schedule-container">
        <ul class="schedules-list">
          <li v-for="item in letTickItemData.data">
            <TickItem :letTickItemData="item"></TickItem>
          </li>
        </ul>
      </div>
      <div v-else>今天无场次</div>
    </div>
  </section>
</template>

<script>
import TickItem from "@/components/infoMovieMain/TickItem";
import ChangciApi from "@/api/changciApi";
import {useRouter,useRoute} from "vue-router";
import {reactive, ref, watch} from "vue";
export default {
  name: "showTIckInfo",
  props:['changci'],
  setup(props){
    // 定义一个flag用于控制当场为空时， 显示提示信息
    let changCiFlag = ref(false)
    let currentIndex = ref(0)
    console.log("showTIckInfo执行")
    const router = useRouter()
    const route = useRoute()
    // 进行去重
    let set = reactive(new Set())
    let data = reactive({changci:[]})
    // 传递子组件值
    let letTickItemData = reactive({
      data:[]
    })

    watch(()=>props.changci,()=>{
      // currentIndex = 0
      currentIndex.value = 0
      // 先将它清除
      set.clear()
      for(let item of props.changci ){
        console.log("监视执行")

        set.add(item.sdate)
      }
      console.log("set最新=",set)
      letTickItemData.data = []
      // 初始化letTickItemData.data
      for(let item of props.changci){
        if(item.sdate===[...set][0]){
          letTickItemData.data.push(item)
        }
      }
    })
    for(let item of props.changci ){
      set.add(item.sdate)
    }
    // 初始化letTickItemData.data
    for(let item of props.changci){
      if(item.sdate===[...set][0]){
        letTickItemData.data.push(item)
      }
    }
    watch(()=>letTickItemData.data[0],()=>{
      console.log('开始监视letTickItemData')
      if(letTickItemData.data[0].price!==0){
        changCiFlag.value = true
      }else{
        changCiFlag.value = false
      }
    },{
      immediate:true
    })
    function showChangCi(date,index) {
      // 控制li是否活动
      currentIndex.value = index
      // alert(2)
      // alert('2')
        letTickItemData.data = []
        for(let item of props.changci){
            if (item.sdate===date){
              letTickItemData.data.push(item)
            }
        }

      }
    console.log("set==",set)
    return{
      set,showChangCi,letTickItemData,currentIndex,changCiFlag
    }
    // router.push({path:'/goCinemaDetailBuy/showTickInfo/tickItem'})
  },
  components: {
    TickItem
  }

}
</script>

<style scoped>
.cinema-schedules .tab-hd{
  color: #959aa5;
  padding: 5px 0;
}
.cinema-schedules .tab-hd li{
  float: left;
}
.cinema-schedules .tab-hd li span{
  position: relative;
  font-size: 13px;
}
.cinema-schedules .tab-hd li:first-child{
  margin-left: 10px;
}
.cinema-schedules .tab-hd li:not(:first-child){
  margin-left: 28px;
}
.cinema-schedules .tab-hd div.active span{
  font-size: 14px;
  color: #2e333e;
  font-weight: 500;

}
.cinema-schedules .tab-hd div.active span::after{
  content: '';
  position: absolute;
  top: 18px;
  left: 37px;
  right: 18px;
  background-color:  #ff5456;
  transform: translateX(-50%);
  width: 19px;
  height: 3px;
}

.cinema-schedules .schedules-list{
  margin: 9px 9px;
  margin-bottom: 0;
}
.cinema-schedules .schedules-list li div.schedule-item-a{
  position: relative;
  margin-top: 9px;
  width: 363px;
  height: 47px;
  background-color: rgba(101, 163, 92, 0.56);
  border-radius:10px;
  padding: 10px 8px;
}


</style>