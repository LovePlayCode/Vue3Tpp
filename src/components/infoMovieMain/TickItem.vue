<template>
  <div  class="schedule-item-a">
    <div class="item-wrap clearfix">

      <div class="item-contain">
        <span class="item-clock">{{ letTickItemData.sstartdate }}</span>
        <div class="item-other">
          <p>
            <span class="item-type">{{ letTickItemData.type }}</span>
            <span class="item-price">
                          <span class="item-act">新人价 &nbsp;</span>
                          <span>¥&nbsp;</span>
                          <span class="price">{{ letTickItemData.price }}</span>
                        </span>
          </p>
        </div>
      </div>
      <div class="item-contain">
                    <span class="item-end">
                      {{ letTickItemData.sendstart }}
                      散场
                    </span>
        <div class="item-other">
          <p>
            <span class="item-hall">{{ letTickItemData.shall }}</span>
          </p>
        </div>
      </div>
    </div>
    <!--                购票按钮-->
    <div class="btn-wrap">
      <div class="tpp-btn">购票</div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "TickItem",
  props:['letTickItemData'],
  setup(props){
    console.log("李浩龙子组件")
    console.log("李浩龙子组件！！！！！！1")

    return {

    }
  }
}
</script>

<style scoped>
.item-other{
  float: left;
}
.item-other .item-type{
  font-size: 12px;
  color: #5f6672;
}
.item-other .item-price{
  margin-left: 110px;
  font-size: 12px;
  color: #ff5456;

}
.item-other .item-price .price{
  font-size: 19px;
  font-weight: 500;
}
.item-wrap .item-end{
  float: left;
  font-size: 12px;
  color: #959aa5;
}
.item-wrap .item-hall{
  display: block;
  margin-left: 20px;
  margin-top: 1px;
  /*transform: translateY(-10px);*/
  font-size: 12px;
  color: #959aa5;
}
.btn-wrap{
  position: absolute;
  top: 19px;
  right: 0;
  /*width: 50px;*/
  /*height: 50px;*/
  /*background-color: #2cc7a4;*/
}
.btn-wrap .tpp-btn{
  font-weight: 700;
  font-size: 12px;
  background-color: #ffeaea;
  border-radius: 120px;
  color: #ff3d5c;
  text-align: center;
  line-height: 29px;
  height: 29px;
  width: 24px;
  padding: 0 13px;
}
.item-clock{
  /*display: ;*/
  float: left;
  width: 79px;
  height: 24px;
  font-size: 19px;
}
</style>