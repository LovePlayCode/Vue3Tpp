<template>
  <div class="mainWrapper">
    <div class="artist-item">

      <div class="artist-item-info">
        <div class="avatar-bg"></div>
        <div class="avatar-wrapper">
          <div class="avatar"></div>
        </div>
        <dl>
          <dt>张吃鱼</dt>
          <dd>Chiyu Zhang</dd>
          <dd>中国</dd>
          <dd>导演 / 编剧</dd>
        </dl>
      </div>
    </div>
    <!--    演职人员介绍-->
    <div class="artist-desc">
      <div class="desc-title">影人简介</div>
      <div class="desc-content">开心麻花签约导演、编剧。</div>
    </div>
    <div class="fenge"></div>
<!--    电影信息展示-->
    <div class="show-list-wrapper">
      <h2>电影作品
        <span>(2)</span>
      </h2>
      <div class="show-list">
        <div class="show-item">
          <div class="show-poster"></div>
          <div class="show-item-content">
            <dl>
              <dt>独行月球</dt>
              <dd class="remark">
                淘票票评分&nbsp;
                <span class="r-score">9.5</span>
              </dd>
              <dd>导演 编剧</dd>
              <dd>2022-07-29 09:00</dd>
            </dl>
          </div>
<!--          购票按钮-->
          <div class="right-btn-red">购票</div>
        </div>
      </div>
    </div>
  </div>
<!--  演员基本信息-->

</template>

<script>
export default {
  name: "ShowArtist"
}
</script>

<style scoped>
  .mainWrapper{
    background-color: #f5f6f8;
  }
  .artist-item-info{
    /* 开启绝对定位*/
    position: relative;
    color: #fff;
    background-size: cover;
  }
  .artist-item-info .avatar-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background:  linear-gradient(180deg,#ad7c57,#c29c7e);
  }
  .avatar-wrapper{
    position: relative;
    width: 125px;
    height: 195px;
    margin: 0 17px;
  }
  .avatar-wrapper .avatar{
    position:absolute;
    bottom: 0;
    opacity: 1;
    /*z-index: 100;*/
    width: 125px;
    height:185px;
  /*  添加过渡*/
    transition: opacity 0.5s ease-in 0s;
    background-image: url("https://gw.alicdn.com/i4/O1CN01FVTfH324GlGsmya5T_!!6000000007364-0-alipicbeacon.jpg_400x400Q50.jpg_.webp");
    background-position: 50%;
    background-size: cover;
  }
  .artist-item-info dl{
    position: absolute;
    top: 13px;
    left: 176px;
  }
  .artist-item-info dl dt{
    margin-bottom: 17px;
    font-size: 18px;
  }
  .artist-item-info dl dd{
    margin-bottom: 17px;

    font-size: 11px;
    color: #fff;
  }
  .artist-desc{
    background-color: #fff;
    padding-bottom: 10px;
  }
  .artist-desc .desc-title{
    padding: 12px 17px;
    font-size: 16px;
    font-weight: 500;

  }
  .artist-desc .desc-content{
    padding: 0 17px;
    font-size: 14px;
  }
  .fenge{
    height: 10px;
  }
/*  电影信息展示*/
  .show-list-wrapper{
    padding-top: 10px;
    padding-left:   16px;
    background-color: #fff;
  }
  .show-list-wrapper h2{
    font-size: 17px;
  }
  .show-list-wrapper h2 span{
    color: grey;
    font-weight: 400;
  }
  .show-list .show-item{
    padding: 16px 16px 16px 0;
    /*background: transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;*/
  }
  .show-list .show-poster{
    float: left;
    width: 74px;
    height: 106px;
    border-radius: 6px;
    margin-right: 5px;
    background: url('https://gw.alicdn.com/i4/O1CN010hgqu821diOofkLq6_!!6000000007008-0-alipicbeacon.jpg_240x240Q50.jpg_.webp') no-repeat ;
    background-size: cover;
  }
  .show-list .show-item-content{
    float: left;
    margin: 0 10px;
    width: 194px;
    height: 92px;
  }
  .show-list .show-item-content dt{
    font-weight: 500;
  }
  .show-list .show-item-content dd{
    font-size:13px;
    color: grey;
  }
  .show-list .show-item-content dd span{
    color: #ff901c;
    font-weight: 500;
  }
  .show-list .right-btn-red{
    float: left;

    width: 26px;
    line-height: 32px;
    margin:  0 1px 0 12px;
    margin-top: 23px;
    padding: 0 16px;
    border: 1px solid #ff5456;;
    color: #ff5456!important;
    border-radius: 60px;
    text-align: center;
    font-size: 13px;
  }
</style>