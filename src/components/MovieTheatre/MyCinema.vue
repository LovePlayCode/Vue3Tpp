<template>
  <div class="list-item">
    <div class="list-item-container">
<!--      这里需要取消a标签跳转  否则会出现意想不到的错误-->
      <a href="javascript:void(0)" class="list-item-in clearfix">
        <h3 class="list-title-warper clearfix">
          <div class="list-title-left">
            <span class="list-title">{{ cinema.ctitle }}</span>
          </div>
          <div class="list-price">
            新人                      ¥{{ price }}
            <span class="word-qi">起</span>
          </div>

        </h3>
        <div class="list-address">
          <span class="list-distance">--km</span>
          <div class="list-location">{{ cinema.caddress }}</div>
        </div>
        <div class="cinema-support">
          <div class="support-tags">
            <div class="tpp-lbl" v-for="ty in types">
              <span class="support-tagName">{{ ty }}</span>
            </div>

          </div>
        </div>
        <!--      添加插槽用于添加场次信息-->
        <slot></slot>
      </a>
    </div>
  </div>
</template>

<script>
import cinema from "@/api/cinema";
import {onMounted,computed} from "vue";

export default {
  name: "MyCinema",
  props:['cinema'],
  setup(props){
    console.log("props==",props)
    let price = computed(()=>{
      let currPrice = props.cinema.cnewprice+""

      currPrice = currPrice.substring(0,3)
      if (currPrice.lastIndexOf('0')!==-1){
        currPrice = currPrice.substring(0,2)
        return currPrice
      }else{
        // console.log("最后一个元素为:",currPrice.charAt(currPrice.length))
        let currP = currPrice.substring(0,2)+"."+currPrice.charAt(currPrice.length-1)
        return currP
      }
    })
    let types = computed(()=>{
      let tps = props.cinema.clabel
      // 切割
      tps = tps.split(',')
      return tps
    })
    return {
      price,
      types
    }
  }
}
</script>

<style scoped>
.list-item{
  position:relative;
  width: 380px;
  /*height:93px;*/
  padding: 0 9px;
  margin-bottom: 9px;
  font-size: 12px;
  line-height: 200%;
}
.list-item-container{
  padding: 12px;
  background:#fff;
  border-radius: 6px;
}
.list-item-container .list-item-in{
  display: block;
}
.list-title-warper{
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
  color:#2e333e;
}
.list-title-warper .list-title-left,.list-price{
  float:left;
}
.list-title-warper .list-title-left{
  margin-right: 50px;
}
.list-title-warper .list-price{
  color:#ff4361;
  font-size: 12px;
  font-weight: 400;
}
.list-title-warper .list-price .word-qi{
  color: #959aa5;
  font-size: 11px;
}
.list-address {
  position:relative;
  line-height: 1.5;
  height: 18px;
  margin-right: 16px;
}
.list-distance,.list-location{
  color: #5f6672;
  font-size: 12px;
}
.list-address .list-distance{
  position:absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  /*color: #5f6672;*/
}
.cinema-support{
  margin: 2px 0;
  height: 18px;
  line-height: 1.5;
}
.cinema-support .tpp-lbl{
  float:left;

  border: 1px solid rgba(49,169,245,0.4);
  border-radius: 3px;
  margin-right: 2px;
  padding:0 3px;
  color: #31a9f5;
}
.cinema-support .tpp-lbl:first-child{
  color:#ff901c;
  border: 1px solid rgba(255,144,28,.3);
  border-radius: 3px;
}
</style>