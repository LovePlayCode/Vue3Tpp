<template>
  <div class="tab-bar-wrapper">
    <!--    <i class="iconfont">&#xe632;</i>-->
    <div class="tab-bar">
      <router-link to="/index"   v-slot="{isActive}">
        <!--        <i class="iconfont myicon">&#xe635;</i>-->
          <svg class="icon" aria-hidden="true">
            <use :class="[isActive&&'activeFooter']" xlink:href="#icon-xiaweiyiguo"></use>
          </svg>
          <span :class="[isActive&&'activeFooter']">首页</span>
      </router-link>
      <router-link to="/theater" v-slot="{isActive}">
        <!--        <i class="iconfont myicon">&#xe635;</i>-->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bigenguo" :class="[isActive&&'activeFooter']"></use>
        </svg>
        <span :class="[isActive&&'activeFooter']">影院</span>
      </router-link>
      <router-link to="/noKaiFa"   v-slot="{isActive}">
        <!--        <i class="iconfont myicon">&#xe635;</i>-->
        <svg class="icon" aria-hidden="true">
          <use :class="[isActive&&'activeFooter']" xlink:href="#icon-xiaweiyiguo"></use>
        </svg>
        <span :class="[isActive&&'activeFooter']">我的</span>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "MovieFooter"
}
</script>

<style scoped>
/*  尾部区域*/
.tab-bar-wrapper{
  /* 固定定位*/
  position: fixed;
  width:100%;
  height: 52px;
  /*background-color: #42b983;*/
  /*top: %;*/
  bottom: 0;
  z-index: 999;
  background: #fff linear-gradient(180deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 0 repeat-x;
  background-size: 100% 1px;
  background-color:hsla(0,0%,100%,98);
}
.tab-bar {
  padding-top: 8px;
  width:100%;
  height:44px;

}
.tab-bar a{
  float: left;
  display: block;
  width:30%;
  height: 100%;
  text-align: center;
}
.tab-bar a span{
  display: block;
  color: #5f6672;
  font-size: 9px;
  text-align: center;
}
/* 当鼠标点击改变背景色*/
.tab-bar .activeFooter{
  color:#f4606e;
}
/*.tab-bar a span:focus{*/
/*  color:#f4606e;*/
/*}*/
</style>