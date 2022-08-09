<template>
  <div class="topbar">
    <!--    城市下拉框-->
    <div class="city-selector">
      <div class="J_cityName">北京</div>
      <i class="iconfont icon-xiala Myicon"></i>
    </div>
    <!--    主体部分-->
    <div class="topbar-container">
      <div class="topbar-selector">
        <div class="selector-value">全城</div>
        <i class="iconfont icon-xiala Myicon"></i>
      </div>
      <div class="topbar-selector">
        <div class="selector-value">筛选</div>
        <i class="iconfont icon-xiala Myicon"></i>

      </div>
      <div class="topbar-selector zonghepaixu">
        <!--        帮助小图标-->
        <div class="sort-selector-helper">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiguazi"></use>
          </svg>
        </div>
        <div class="selector-value">综合排序</div>
        <i class="iconfont icon-xiala Myicon"></i>

      </div>
      <div class="topbar-selector topbar-right">
        <svg class="icon mySearch" aria-hidden="true">
          <use xlink:href="#icon-a-12sousuo"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheaterHeader"
}
</script>

<style scoped>
.clearfix:after{
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
li{
  list-style-type: none;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
/*头部区域*/
.topbar{
  width: 400px;
  height: 44px;
  background:rgba(255,255,255,1)
}
.city-selector{

  float: left;
  position:relative;
  width:28px;
  line-height: 44px;
  padding: 0 16px;
  font-size: 14px;
  background-repeat: no-repeat;

}
.Myicon{
  position: absolute;
  top: 0px;
  right: 0;
  font-size: 1px;
}
.topbar-container{

  float:left;
  width: 340px;
}
.topbar-selector{
  position:relative;
  float:left;
  padding: 0 16px 0 8px;
  line-height: 44px;
}
.selector-value {
  float:left;
  font-size: 14px;
  font-weight: 500;
}
.topbar-right{
  float:right;
}
.sort-selector-helper{
  float:left;
  /*margin-right: 1px;*/
}
.mySearch{
  width: 21px;
  height: 21px;
}
.zonghepaixu{
  margin-left: 80px;
}
</style>