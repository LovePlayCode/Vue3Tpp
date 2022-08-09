#  使用vue搭建一个简单的电影购票项目

##  划分组件

![image-20220706103150914](/Users/lhl/Library/Application Support/typora-user-images/image-20220706103150914.png)

1. 首先将结构在app组件中构建出来
2. 然后开始划分组件
3. 去掉代码规范配置项

###  封装一下axios

首先引入依赖

```javascript
npm install axios
```

新建utils文件夹

文件夹中新建request文件



###  首先将所有页面写入到app中

```javascript
<template>
<!--  电影头部-->
  <div class="header">
      <div class="leftPosition">
<!--        logo部分-->
        <div class="i-logo"></div>
        <div class="city-namn">北京</div>
      </div>
      <ul class="movieSuggest">
        <li>正在热映</li>
        <li>即将上映</li>
      </ul>
  </div>
<!--  电影展示区域-->
  <div class="tab-panel">
    <ul class="bui-moviecard">
      <li>
        <div class="bui-movie-item-main">
<!--           图片部分-->
          <div class="bui-movie-card-poster">
<!--            主体图片部分-->
            <div class="bui-image">
              <img src="https://gw.alicdn.com/i4/O1CN01EOBHTV21mPumeC0Ju_!!6000000007027-0-alipicbeacon.jpg_200x200Q30.jpg_.webp" alt="">
            </div>
<!--            角标部分-->
            <div class="bui-tag">中国巨幕 2D</div>
<!--            图标-->
            <div class="bui-icon-play-wrapper">
              <div class="bui-iconfont"></div>
            </div>
          </div>
<!--          主体部分-->
          <div class="bui-movie-card-content">
<!--            电影标题-->
            <div class="bui-movie-name-wrapper">人生大事</div>
<!--            电影评价-->
            <div class="bui-movie-desc">
              <span class="bui-movie-desc-normal">淘票票评分</span>
              <span class="bui-movie-desc-highlight">9.5</span>
              <span class="bui-movie-desc-splitline">|</span>
              <span class="bui-movie-desc-normal">20.7万 人评</span>
            </div>
<!--            导演展示区域-->
            <div class="bui-movie-director">导演：刘江江</div>
<!--            演员展示区域-->
            <div class="bui-movie-role">主演：朱一龙,杨恩又,王戈,刘陆,罗京民</div>

          </div>
<!--          购票部分-->
          <div class="bui-btn-wrapper">
            <div class="bui-btn-contained">购票</div>
            <div class="bui-movie-button-tips">限时特惠</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
<!--  电影尾部区域-->
  <div class="tab-bar-wrapper">
<!--    <i class="iconfont">&#xe632;</i>-->
    <div class="tab-bar">
      <a href="">
<!--        <i class="iconfont myicon">&#xe635;</i>-->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaweiyiguo"></use>
        </svg>
        <span>首页</span>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bigenguo"></use>
        </svg>
        <span>首页</span>
      </a>
      <a href="">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-songzi"></use>
        </svg>
        <span>首页</span>
      </a>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
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
    background: rgba(0,0,0,0.1);
    overflow: hidden;
  }
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  .header{
    width:400px;
    height:42px;
    background: #fff;
    margin-bottom: 14px;
    /*background-color: #42b983;*/
  }
  .leftPosition{
    /*浮动*/
    float:left;
    width: 71px;
    height: 38px;
    padding: 0 13px;
    /*margin:0 auto;*/
    /*background-color: darkkhaki;*/
  }
  /* 将城市和图标元素都设置为左浮动*/
  .i-logo,.city-namn{
    float:left;
  }
  .i-logo{
    width: 23px;
    height: 23px;
    margin-right: 1px;
    margin-top: 5px;
    background-image: url('https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg');
  /*  不层叠*/
    background-repeat: no-repeat;
    /* 改变图片大小 设置为父元素的百分百*/
    background-size: 100% 100%;
  }
  .city-namn{
    margin-top: 5px;
    width: 33px;
    height:23px;
    line-height: 23px;
    text-align: center;
    /*margin: 0 auto;*/
  }
  .movieSuggest{
    float: right;
  }
  .movieSuggest li{
    float: left;
    width: 86px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 15px;
    color:#2e333e;
    font-weight: 500;
  }
  .movieSuggest li:hover{
    border-bottom: 1px solid #bfa;
  }
/*  网页内容展示区域*/
  .tab-panel{
    width: 374px;
    padding:0 13px;
    /*background-color:khaki;*/
  }
  /* 给图片 主体 购票添加浮动*/
  .bui-movie-item-main .bui-movie-card-poster,.bui-movie-card-content,.bui-btn-wrapper{
    float: left;
  }
  .bui-moviecard li{
    position:relative;
    /* 加一个内边距*/
    /*float: left;*/
    width: 348px;
    height: 112px;
    border-radius:6px;
    background:#fff;
    /*background: #42b983;*/
    padding:13px;
  }
  /* 开启相对定位 子绝父相*/
  .bui-movie-card-poster{
    position: relative;
  }
  .bui-image{
    width: 81px;
    height: 116px;
  }
  .bui-image img{
    width: 100%;
    height: 100%;
  }
  .bui-tag{
    position:absolute;

    top: 3px;
    left: 3px;
    width: 76px;
    height: 12px;
    font-size: 10px;
    line-height:12px;
    font-weight: 400;
    border-radius:3px;


    background-color: rgba(0,0,0,0.8);
    color: #fff;

  }
  .bui-icon-play-wrapper{
    position: absolute;
    top: 84px;
    left: 49px;
    width: 26px;
    height: 26px;
    /* 将一个盒子变成圆*/
    background: #fff;

    border-radius:100%;
  }
  .bui-icon-play-wrapper .bui-iconfont{

  }
  .bui-icon-play-wrapper .bui-iconfont:before{
    content: "";
    display: block;
    margin:7px auto;
    /*margin-top: 13px;*/
    width:12px;
    height:12px;
    background-size: 100% 100%;
    background-image: url('./assets/播放2.png');
  }
/*  电影主体部分*/
  .bui-movie-card-content{
    width: 186px;
    height: 115px;
    padding: 0 12px;
  }
  .bui-movie-card-content .bui-movie-name-wrapper{
    width: 186px;
    height:20px;
    margin-bottom: 8px;
    font-size: 16px;
    line-height:20px;
    /*text-align: center;*/
    font-weight: 500;
    color: #2e333e;
  }
  .bui-movie-card-content .bui-movie-desc{
    width: 186px;
    height: 16px;
    margin-bottom: 8px;
  }
  .bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
    width: 186px;
    color: #5f6672;
    font-weight: 400;
  }
  /*评分*/
  .bui-movie-card-content .bui-movie-desc .bui-movie-desc-highlight{
    color: #ff901c;
    font-size: 14px;
    font-weight: 500;
    margin-left: 2px;
  }
  /*小竖线*/
  .bui-movie-card-content .bui-movie-desc .bui-movie-desc-splitline{
    margin: 0 7px;
    color: #e9ebef;
    font-size:12px;
  }
/*  评价人数*/
  .bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
    color: #5f6672;
    font-weight: 400;
    font-size: 12px;
  }
  /*导演区域*/
  .bui-movie-card-content  .bui-movie-director{
    margin-bottom: 7px;
    font-size: 12px;
    color: #5f6672;
    font-weight: 400;
  }
  .bui-movie-role{
    margin-bottom: 7px;
    font-size: 12px;
    font-weight: 400;
    color: #5f6672;
  }
  .bui-btn-wrapper{
    /*开启定位*/
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -26px;
    width: 56px;
    height: 52px;
    /*background-color: red;*/
  }
  /* 设置购票按钮*/
  .bui-btn-wrapper .bui-btn-contained{
    width: 24px;
    height:28px;
    padding: 0 16px;
    text-align: center;
    line-height: 28px;
    transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
    color:#fff;
    font-size: 12px;
    background-image: linear-gradient(45deg,#fb54aa,#fb5773);
    border-radius:100px;
  }
/*  设置购票按钮下方文字*/
  .bui-btn-wrapper .bui-movie-button-tips{
    margin-top: 5px;
    width: 48px;
    height: 18px;
    color: #999;
    font-size: 9px;
    font-weight:400;
  }
/*  尾部区域*/
  .tab-bar-wrapper{
    position: absolute;
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
    color: #ff4d64;
    font-size: 9px;
    text-align: center;
  }

</style>

```

###  开始分割组件，将头部，主体部分，尾部都分割为对应组件

1. 先将组件分割为头部组件和尾部组件

   MovieHeader.vue

   ```javascript
   <template>
     <!--  电影头部-->
     <div class="header">
       <div class="leftPosition">
         <!--        logo部分-->
         <div class="i-logo"></div>
         <div class="city-namn">北京</div>
       </div>
       <ul class="movieSuggest">
         <li>
           <router-link to="/hotMovie" active-class="activeFoucs">正在热映</router-link>
         </li>
         <li>
           <router-link to="/upComingMovie" active-class="activeFoucs">即将上映</router-link>
         </li>
       </ul>
     </div>
   </template>
   
   <script>
   export default {
     name: "MovieHeader"
   }
   </script>
   
   <style scoped>
   
   .header{
     width:400px;
     height:42px;
     background: #fff;
     margin-bottom: 14px;
     /*background-color: #42b983;*/
   }
   .leftPosition{
     /*浮动*/
     float:left;
     width: 71px;
     height: 38px;
     padding: 0 13px;
     /*margin:0 auto;*/
     /*background-color: darkkhaki;*/
   }
   /* 将城市和图标元素都设置为左浮动*/
   .i-logo,.city-namn{
     float:left;
   }
   .i-logo{
     width: 23px;
     height: 23px;
     margin-right: 1px;
     margin-top: 5px;
     background-image: url('https://gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg');
     /*  不层叠*/
     background-repeat: no-repeat;
     /* 改变图片大小 设置为父元素的百分百*/
     background-size: 100% 100%;
   }
   .city-namn{
     margin-top: 5px;
     width: 33px;
     height:23px;
     line-height: 23px;
     text-align: center;
     /*margin: 0 auto;*/
   }
   .movieSuggest{
     float: right;
   }
   .movieSuggest li{
     float: left;
     width: 86px;
     height: 38px;
     line-height: 38px;
     text-align: center;
     font-size: 15px;
     color:#2e333e;
     font-weight: 500;
   }
   .movieSuggest li>a{
     color: #2e333e;
   }
   .activeFoucs{
     border-bottom: 1px solid #bfa;
   
   }
   
   </style>
   ```

   MovieFooter.vue

   ```javascript
   <template>
     <div class="tab-bar-wrapper">
       <!--    <i class="iconfont">&#xe632;</i>-->
       <div class="tab-bar">
         <a href="">
           <!--        <i class="iconfont myicon">&#xe635;</i>-->
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-xiaweiyiguo"></use>
           </svg>
           <span>首页</span>
         </a>
         <a href="">
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-bigenguo"></use>
           </svg>
           <span>首页</span>
         </a>
         <a href="">
           <svg class="icon" aria-hidden="true">
             <use xlink:href="#icon-songzi"></use>
           </svg>
           <span>首页</span>
         </a>
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
     position: absolute;
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
     color: #ff4d64;
     font-size: 9px;
     text-align: center;
   }
   </style>
   
   
   ```

   

2. 将内容区域分成两部分

   ![image-20220712114432899](/Users/lhl/Library/Application Support/typora-user-images/image-20220712114432899.png)

   在components里面新建infoMovieMain文件夹

   在文件夹新建两个vue文件

   MovieMain.vue

   ```javascript
   <template>
     <div class="tab-panel">
       <ul class="bui-moviecard">
         <li>
           <div class="bui-movie-item-main">
             <!--           图片部分-->
             <div class="bui-movie-card-poster">
               <!--            主体图片部分-->
               <div class="bui-image">
                 <img src="https://gw.alicdn.com/i4/O1CN01EOBHTV21mPumeC0Ju_!!6000000007027-0-alipicbeacon.jpg_200x200Q30.jpg_.webp" alt="">
               </div>
               <!--            角标部分-->
               <div class="bui-tag">中国巨幕 2D</div>
               <!--            图标-->
               <div class="bui-icon-play-wrapper">
                 <div class="bui-iconfont"></div>
               </div>
             </div>
             <!--          主体部分-->
             <div class="bui-movie-card-content">
               <!--            电影标题-->
               <div class="bui-movie-name-wrapper">人生大事</div>
               <!--            电影评价-->
               <div class="bui-movie-desc">
                 <span class="bui-movie-desc-normal">淘票票评分</span>
                 <span class="bui-movie-desc-highlight">9.5</span>
                 <span class="bui-movie-desc-splitline">|</span>
                 <span class="bui-movie-desc-normal">20.7万 人评</span>
               </div>
               <!--            导演展示区域-->
               <div class="bui-movie-director">导演：刘江江</div>
               <!--            演员展示区域-->
               <div class="bui-movie-role">主演：朱一龙,杨恩又,王戈,刘陆,罗京民</div>
   
             </div>
             <!--          购票部分-->
             <div class="bui-btn-wrapper">
               <div class="bui-btn-contained">购票</div>
               <div class="bui-movie-button-tips">限时特惠</div>
             </div>
           </div>
         </li>
       </ul>
     </div>
   </template>
   
   <script>
   export default {
     name: "MoieMain"
   }
   </script>
   
   <style scoped>
   
   /*  网页内容展示区域*/
   .tab-panel{
     width: 374px;
     padding:0 13px;
     /*background-color:khaki;*/
   }
   /* 给图片 主体 购票添加浮动*/
   .bui-movie-item-main .bui-movie-card-poster,.bui-movie-card-content,.bui-btn-wrapper{
     float: left;
   }
   .bui-moviecard li{
     position:relative;
     /* 加一个内边距*/
     /*float: left;*/
     width: 348px;
     height: 112px;
     border-radius:6px;
     background:#fff;
     /*background: #42b983;*/
     padding:13px;
   }
   /* 开启相对定位 子绝父相*/
   .bui-movie-card-poster{
     position: relative;
   }
   .bui-image{
     width: 81px;
     height: 116px;
   }
   .bui-image img{
     width: 100%;
     height: 100%;
   }
   .bui-tag{
     position:absolute;
   
     top: 3px;
     left: 3px;
     width: 76px;
     height: 12px;
     font-size: 10px;
     line-height:12px;
     font-weight: 400;
     border-radius:3px;
   
   
     background-color: rgba(0,0,0,0.8);
     color: #fff;
   
   }
   .bui-icon-play-wrapper{
     position: absolute;
     top: 84px;
     left: 49px;
     width: 26px;
     height: 26px;
     /* 将一个盒子变成圆*/
     background: #fff;
   
     border-radius:100%;
   }
   .bui-icon-play-wrapper .bui-iconfont{
   
   }
   .bui-icon-play-wrapper .bui-iconfont:before{
     content: "";
     display: block;
     margin:7px auto;
     /*margin-top: 13px;*/
     width:12px;
     height:12px;
     background-size: 100% 100%;
     background-image: url('../../assets/播放2.png');
   }
   /*  电影主体部分*/
   .bui-movie-card-content{
     width: 186px;
     height: 115px;
     padding: 0 12px;
   }
   .bui-movie-card-content .bui-movie-name-wrapper{
     width: 186px;
     height:20px;
     margin-bottom: 8px;
     font-size: 16px;
     line-height:20px;
     /*text-align: center;*/
     font-weight: 500;
     color: #2e333e;
   }
   .bui-movie-card-content .bui-movie-desc{
     width: 186px;
     height: 16px;
     margin-bottom: 8px;
   }
   .bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
     width: 186px;
     color: #5f6672;
     font-weight: 400;
   }
   /*评分*/
   .bui-movie-card-content .bui-movie-desc .bui-movie-desc-highlight{
     color: #ff901c;
     font-size: 14px;
     font-weight: 500;
     margin-left: 2px;
   }
   /*小竖线*/
   .bui-movie-card-content .bui-movie-desc .bui-movie-desc-splitline{
     margin: 0 7px;
     color: #e9ebef;
     font-size:12px;
   }
   /*  评价人数*/
   .bui-movie-card-content .bui-movie-desc .bui-movie-desc-normal{
     color: #5f6672;
     font-weight: 400;
     font-size: 12px;
   }
   /*导演区域*/
   .bui-movie-card-content  .bui-movie-director{
     margin-bottom: 7px;
     font-size: 12px;
     color: #5f6672;
     font-weight: 400;
   }
   .bui-movie-role{
     margin-bottom: 7px;
     font-size: 12px;
     font-weight: 400;
     color: #5f6672;
   }
   .bui-btn-wrapper{
     /*开启定位*/
     position: absolute;
     top: 50%;
     right: 0;
     margin-top: -26px;
     width: 56px;
     height: 52px;
     /*background-color: red;*/
   }
   /* 设置购票按钮*/
   .bui-btn-wrapper .bui-btn-contained{
     width: 24px;
     height:28px;
     padding: 0 16px;
     text-align: center;
     line-height: 28px;
     transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
     color:#fff;
     font-size: 12px;
     background-image: linear-gradient(45deg,#fb54aa,#fb5773);
     border-radius:100px;
   }
   /*  设置购票按钮下方文字*/
   .bui-btn-wrapper .bui-movie-button-tips{
     margin-top: 5px;
     width: 48px;
     height: 18px;
     color: #999;
     font-size: 9px;
     font-weight:400;
   }
   </style>
   ```

   UpcomingingMovies.vue

   ```javascript
   <template>
     <section class="tab-panel">
       <div class="bui-tabpanel">
         <div class="coming-show">
           <div class="movie_list">
             <!--          日期展示区域-->
             <div class="coming-show-time">
               <!--            俗称-->
               <div class="show-time-desc">明天</div>
               <!--            具体日期-->
               <div class="show-time-date">07-12</div>
               <!--            卡片主体部分-->
   
             </div>
             <!--          主体区域-->
             <div class="bui-moviecard">
               <div class="bui-movie-item-main">
                 <div class="bui-movie-card-poster">
                   <div class="bui-image">
                     <img src="https://gw.alicdn.com/i4/O1CN01EOBHTV21mPumeC0Ju_!!6000000007027-0-alipicbeacon.jpg_200x200Q30.jpg_.webp" alt="">
                   </div>
                   <div class="bui-tag">IMAX 2D</div>
                   <!--                播放按钮-->
                   <div class="bui-icon-play-wrapper">
                     <svg class="icon bui-icon-play-wrapperIcon" aria-hidden="true">
                       <use xlink:href="#icon-kuihuazi"></use>
                     </svg>
                   </div>
                 </div>
                 <div class="bui-movie-card-content">
                   <div class="bui-movie-name-wrapper">
                     <span>外太空的莫扎特</span>
                   </div>
                   <!--                电影详细信息-->
                   <div class="bui-movie-desc">
                     <span>18.0万</span>
                     <span>人想看</span>
                     <span>|</span>
                     <span>本周五上映</span>
                   </div>
                   <!--                导演信息-->
                   <div class="bui-movie-director">导演：陈思诚</div>
                   <!--                主演-->
                   <div class="bui-movie-role">主演：黄渤,荣梓杉,莫扎特,姚晨</div>
                 </div>
                 <!--                购票区域-->
                 <div class="bui-btn-wrapper">
                   <div class="movie-card-btn">
                     预售
                   </div>
                 </div>
   
               </div>
             </div>
             <!--          购票区域-->
           </div>
         </div>
       </div>
     </section>
   </template>
   
   <script>
   export default {
     name: "infoMovieMain.UpcomingMovies"
   }
   </script>
   
   <style scoped>
   .icon {
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
   }
   body{
     background-color: #f5f6f8;
   }
   .tab-panel {
     width: 400px;
     padding: 0 12px;
   }
   .tab-panel .movie_list{
     width: 374px;
   }
   .tab-panel .coming-show-time {
     width:100%;
     height: 33px;
     padding: 6px 0;
   }
   .tab-panel .show-time-desc {
     color: #959aa5;
     font-size:12px;
     line-height: 12px;
     font-weight: 500;
     margin-bottom: 3px;
   }
   .tab-panel .show-time-date{
     color: #2e333e;
     font-size: 16px;
     line-height: 17px;
     font-weight: 500;
   }
   .tab-panel .bui-moviecard{
     padding:12px;
     width:348px;
     height:111px;
     margin-bottom: 9px;
     background-color: #fff;
     border-radius: 6px;
   }
   /*  显示电影内容区域*/
   .bui-moviecard .bui-movie-item-main{
     position: relative;
     width: 348px;
     height: 112px;
   }
   .bui-movie-card-poster{
     float: left;
     position: relative;
     width:81px;
     height:116px;
   }
   .bui-image img{
     width:100%;
     height:100%;
   }
   .bui-movie-card-poster .bui-tag{
     position:absolute;
     top: 0;
     left:3px;
     color:#fff;
     background-color:rgba(0,0,0,.8);
     font-weight: 400;
     font-size: 10px;
     border-radius:6px;
   }
   .bui-movie-card-poster .bui-icon-play-wrapper{
     position:absolute;
     bottom:5px;
     left: 50px;
     width: 25px;
     height: 25px;
     border-radius: 100%;
     background-color:#fff;
   
   }
   .bui-icon-play-wrapper .bui-icon-play-wrapperIcon{
     margin-left: 6px;
   }
   .bui-movie-card-content{
     float:left;
     width: 186px;
     height: 93px;
     padding: 0 12px;
     font-size: 12px;
     color: #5f6672;
   }
   .bui-movie-card-content .bui-movie-name-wrapper{
     height: 19px;
     margin-bottom:7px;
   }
   .bui-movie-card-content .bui-movie-name-wrapper span{
     font-size: 16px;
     line-height:1.2;
     font-weight: 500;
     color:#2e333e;
   }
   .bui-movie-card-content .bui-movie-desc {
     width: 186px;
     height: 16px;
     margin-bottom: 7px;
   }
   .bui-movie-card-content .bui-movie-desc span:first-child{
     color: #ff901c;
     font-size: 14px;
     font-weight: 500;
   }
   .bui-movie-card-content .bui-movie-desc span:nth-child(2){
     font-size: 12px;
     color: #5f6672;
     font-weight: 400;
   }
   .bui-movie-card-content .bui-movie-desc span:nth-child(3){
     color:  #e9ebef;
     font-size: 12px;
     background: none;
     margin: 0 6px;
   }
   .bui-movie-card-content .bui-movie-desc span:last-child{
     font-size: 12px;
     font-weight: 400;
     /*color: #5f6672;*/
   }
   .bui-movie-director{
     height: 14px;
     margin-bottom:6px;
     font-size: 12px;
     font-weight: 400;
     line-height: 14px;
     /*color:#5f6672;*/
   }
   /*  购票区域*/
   .bui-btn-wrapper{
     position: absolute;
     top:50%;
     right:0;
     /*left:0;*/
     margin-top: -14px;
   
     /*margin-top: 50%;*/
     width:56px;
     height:28px;
   }
   .bui-btn-wrapper .movie-card-btn{
     height: 28px;
     color: #fff;
     font-weight: 400;
     font-size:12px;
     line-height:28px;
     text-align:center;
     background-image: linear-gradient(45deg,#23cafb,    #36aef9);
     background-color: #f2f2f2;
     /*  过度效果  */
     transition: background-color .25s cubic-bezier(.4,0,.2,1) 0ms,opacity .25s cubic-bezier(.4,0,.2,1) 0ms,border-color .25s cubic-bezier(.4,0,.2,1) 0ms,color .25s cubic-bezier(.4,0,.2,1) 0ms;
     border-radius:100px;
   }
   </style>
   
   ```

3. 新建router文件夹，用于编写路由文件

   index.js

   ```javascript
   	import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'
   import MovieMain from "@/components/infoMovieMain/MovieMain";
   import UpcomingMovies from "@/components/infoMovieMain/UpcomingMovies";
   const routes = [
       {
           // 正在热映
           path:'/hotMovie',
           component:MovieMain
       },
       {
           // 正在热映
           path:'/',
           component:MovieMain
       },
       {
           path:'/upComingMovie',
           component:UpcomingMovies
       }
   ]
   const router = createRouter({
       history:createWebHashHistory(),
       routes
   })
   export default router
   
   ```

4. 在main文件中引入router文件配置

   main.js

   ```javascript
   import { createApp } from 'vue'
   import App from './App.vue'
   import Router from "@/router";
   
   // 引入阿里字体图标库
   import '@/assets/font/iconfont.css'
   const app = createApp(App)
   app.use(Router)
   app.mount('#app')
   
   ```

5. 首页已经初步完成

###  影院部分

1. 先用html将影院部分呈现出来

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="./assets/font/iconfont.css">
     <title>Title</title>
     <style>
       *{
           margin: 0;
           padding: 0;
       }
       body{
           background:#f5f6f8;
       }
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
     /*  影院主体部分*/
       .cinema-list {
           padding: 10px 0;
       }
       .cinema-list .list-item{
           position:relative;
           width: 380px;
           height:93px;
           padding: 0 9px;
           margin-bottom: 9px;
           font-size: 12px;
           line-height: 200%;
   
       }
       .cinema-list .list-item .list-item-container{
           padding: 12px;
           background:#fff;
           border-radius: 6px;
       }
       .cinema-list .list-item .list-item-container .list-item-in{
           display: block;
       }
       .cinema-list .list-item .list-title-warper{
           margin-bottom: 2px;
           font-size: 16px;
           font-weight: 500;
           color:#2e333e;
       }
       .cinema-list .list-item .list-title-warper .list-title-left,.list-price{
           float:left;
       }
       .cinema-list .list-item .list-title-warper .list-title-left{
           margin-right: 50px;
       }
       .cinema-list .list-item .list-title-warper .list-price{
           color:#ff4361;
           font-size: 12px;
           font-weight: 400;
       }
       .cinema-list .list-item .list-title-warper .list-price .word-qi{
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
   </head>
   <body>
     <script src="../public/iconfont.js"></script>
   
   <!--顶部导航栏部分-->
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
   <!--影院主体部分-->
     <div class="cinema-list">
       <ul class="cinema-list-ul">
         <li class="list-item">
           <div class="list-item-container">
             <a href="" class="list-item-in clearfix">
               <h3 class="list-title-warper clearfix">
                 <div class="list-title-left">
                   <span class="list-title">北京百老汇电影中心（万国城店）</span>
                 </div>
                 <div class="list-price">
                   新人                      ¥35
                   <span class="word-qi">起</span>
                 </div>
   
               </h3>
               <div class="list-address">
                 <span class="list-distance">--km</span>
                 <div class="list-location">东城区香河园路1号当代MOMA北区T4座</div>
               </div>
               <div class="cinema-support">
                 <div class="support-tags">
                   <div class="tpp-lbl">
                     <span class="support-tagName">特惠票</span>
                   </div>
                   <div class="tpp-lbl">
                     <span class="support-tagName">特惠票</span>
                   </div>
                   <div class="tpp-lbl">
                     <span class="support-tagName">特惠票</span>
                   </div>
                   <div class="tpp-lbl">
                     <span class="support-tagName">特惠票</span>
                   </div>
                 </div>
               </>
             </a>
           </div>
         </li>
       </ul>
     </div>
   </body>
   </html>
   ```

   2. 将整个文件拆成成头部和主体部分

      TheaterHeader

      ```vue
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
        name: "TheatreHeader"
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
      ```

      TheaterMain

      ```vue
      <template>
        <!--影院主体部分-->
        <div class="cinema-list">
          <ul class="cinema-list-ul">
            <li class="list-item">
              <div class="list-item-container">
                <a href="" class="list-item-in clearfix">
                  <h3 class="list-title-warper clearfix">
                    <div class="list-title-left">
                      <span class="list-title">北京百老汇电影中心（万国城店）</span>
                    </div>
                    <div class="list-price">
                      新人                      ¥35
                      <span class="word-qi">起</span>
                    </div>
      
                  </h3>
                  <div class="list-address">
                    <span class="list-distance">--km</span>
                    <div class="list-location">东城区香河园路1号当代MOMA北区T4座</div>
                  </div>
                  <div class="cinema-support">
                    <div class="support-tags">
                      <div class="tpp-lbl">
                        <span class="support-tagName">特惠票</span>
                      </div>
                      <div class="tpp-lbl">
                        <span class="support-tagName">特惠票</span>
                      </div>
                      <div class="tpp-lbl">
                        <span class="support-tagName">特惠票</span>
                      </div>
                      <div class="tpp-lbl">
                        <span class="support-tagName">特惠票</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </template>
      
      <script>
      export default {
        name: "TheaterMain"
      }
      </script>
      
      <style scoped>
      .cinema-list {
        padding: 10px 0;
      }
      .cinema-list .list-item{
        position:relative;
        width: 380px;
        height:93px;
        padding: 0 9px;
        margin-bottom: 9px;
        font-size: 12px;
        line-height: 200%;
      
      }
      .cinema-list .list-item .list-item-container{
        padding: 12px;
        background:#fff;
        border-radius: 6px;
      }
      .cinema-list .list-item .list-item-container .list-item-in{
        display: block;
      }
      .cinema-list .list-item .list-title-warper{
        margin-bottom: 2px;
        font-size: 16px;
        font-weight: 500;
        color:#2e333e;
      }
      .cinema-list .list-item .list-title-warper .list-title-left,.list-price{
        float:left;
      }
      .cinema-list .list-item .list-title-warper .list-title-left{
        margin-right: 50px;
      }
      .cinema-list .list-item .list-title-warper .list-price{
        color:#ff4361;
        font-size: 12px;
        font-weight: 400;
      }
      .cinema-list .list-item .list-title-warper .list-price .word-qi{
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
      ```

      3. 路由js文件中新建路径

         ```javascript
         {
                 path:'/theater',
                 component:TheaterMovie
             },
            
              
         ```

​           然后在MovieFooter组件中配合路径

```
<router-link to="/theater" v-slot="{isActive}">
  <!--        <i class="iconfont myicon">&#xe635;</i>-->
  <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-bigenguo" :class="[isActive&&'activeFooter']"></use>
  </svg>
  <span :class="[isActive&&'activeFooter']">影院</span>
</router-link>
```

##  搭建电影详情页面

1. 首先将整个页面写成一个html方便拆分组件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title</title>
  <style>
    *{
        margin: 0;
        padding: 0;
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
    .video-header-wrapper{
        width: 400px;
        height: 249px;
        background:no-repeat 50%/cover url("https://gw.alicdn.com/i2/O1CN01oepU6m1LFhldYQruh_!!6000000001270-0-alipicbeacon.jpg_760x760Q30.jpg_.webp") ;
    }
  /*  电影详情*/
    .show-info-d{
        width: 374px;
        height: 144px;
        padding: 12px 12px 0 12px;
        margin-bottom: 12px;
    }
    .poster-wrap{
        position: relative;
        margin-right: 6px;
    }
    .poster-wrap .poster{
        width: 103px;
        height: 144px;
        background: url("https://gw.alicdn.com/i3/O1CN01CiuZKy1I5Dr6LcJuu_!!6000000000841-0-alipicbeacon.jpg_320x320Q30s100.jpg_.webp") no-repeat 50%/cover;
    }
    .poster-wrap .force-oneline{
        position: absolute;
        top: 0;
        left: 4px;
    }
    .poster-wrap,.info-container{
        float: left;
    }
    .poster-wrap .force-oneline i{

        color: #000;
        background: #f8f8fb;
        font-size: 10px;
        font-weight: 400;
        border-radius: 3px;
        white-space: nowrap;
        /*取消斜体  */
        font-style: normal;
    }
    .info-container{
        width: 258px;
        height: 91px;
        /*background: red;*/
    }
    .info-container .movie-name{
        padding:4px 0;
        padding-bottom: 0;
    }
    .info-container .chinese{
        color: #2e333e;
        font-size:22px;
        font-weight: 500;
    }
    .info-container .movie-detail{
        padding: 8px 0;
        padding-bottom: 0;
    }
    .movie-detail .show-intro,.movie-detail .open-date-and-issuance{
        color:#959aa5;
        font-size: 13px;
    }
    .movie-detail .show-intro{
      margin-bottom: 4px;
    }
    .open-date,.bui-tag{
        float: left;
    }
    .open-date{
        /*margin-left:1px;*/
        width: 196px;
        /*内容在一行显示*/
        white-space: nowrap;
        overflow: hidden;
        /* 多出来的内容使用省略号代替*/
        text-overflow: ellipsis;
    }
    .bui-tag{

        border: 1px solid rgba(44,199,164,.4);
        padding: 0 4px;
        border-radius: 3px;
        color: #2cc7a4;
        /*border-color: rgba(44,199,164,.4);*/
    }
  /*  k口碑*/
    .show-remark{
        width: 374px;
        height: 47px;
        margin: 12px;
    }
    .show-remark .remark-wrapper{
        height: 24px;
        padding: 10px 16px;
        border: 1px solid #e9ebef;
        border-radius: 12px;

    }
    .show-remark .remark-head{
        font-size: 16px;

    }
    .show-remark .remark-title{
        margin-top: 5px;
        width: 85px;
        height: 14px;
        text-align: center;
        background: url("https://img.alicdn.com/tfs/TB15abfvWL7gK0jSZFBXXXZZpXa-174-33.png");
        /*background-color: red;*/
        background-repeat: no-repeat;
        background-size: contain;
    }
    .show-remark .remark-head span{
        float: left;
    }
    .show-remark .want-see-num{
        margin-left: 143px;
        font-size: 16px;
        color: #ff901c;
    }
    /*背景条*/
    .margin-area{
        width: 100%;
        height:10px;
        background-color: #f5f6f8;
    }
    /*电影简介*/
    .tab-wrapper{
        width: 400px;
        height:51px;
    }
    .tab-container li{
        float: left;
        width: 130px;
        height: 17px;
        padding: 16px 0;
        text-align: center;
        font-size: 16px;
        line-height: 17px;
        color: #4a4a4a;
    }
    .tab-li-active{
        font-weight: 600;
        border-bottom: 1px solid #2e333e;
    }
    .tab-container .sub-info{
        display: block;
        position:absolute;
        top: -3px;
        left: 20px;
        right: -39px;
        width: 37px;
        height: 17px;
        font-size:10px;
        color:#959aa5;
        font-weight: 400;
    }
  /*  电影简介*/
    .show-desc{
        width: 374px;
        height: 164px;

        padding-top: 12px;
        overflow: hidden;
        font-size: 15px;
        background-color: #fff;
    }
    .show-desc .show-desc-content{
        margin: 0 12px;
        margin-bottom: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .seg-line{
        position: relative;
        height:1px;
        background: #fff;
    }
    .seg-line::after{
        position: absolute;
        left: 12px;
        top: 0;
        content:"";
        width: 100%;
        height:1px;
        background:transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
    }
  /*  演员列表*/
    .show-artists{
        height: 251px;
    }
    .show-artists .show-mod-title{
        height: 57px;
    }
    .show-artists .show-mod-title h3,.show-artists .show-mod-title .more-num{
        float: left;
    }
    .show-artists .show-mod-title h3{
        width: 72px;
        height: 40px;
        padding: 8px 0;
        padding-left: 12px;
        font-size: 16px;
        font-weight: 600;
    }
    .show-artists .show-mod-title .more-num{
        margin-left: 267px;
        margin-top: 8px;
        /*line-height: 57px;*/
    }
    .show-artists .show-artists-container{

    }
  </style>
</head>
<body>
<script src="../public/iconfont.js"></script>
<!--电影播放视频-->
  <section class="video-header-wrapper"></section>
<!--电影详情-->
  <div class="show-info-d">
<!--    封面-->
    <div class="poster-wrap">
      <div class="poster"></div>
      <span class="force-oneline">
        <i>2D IMAX</i>
      </span>
    </div>
<!--    详情-->
    <div class="info-container">
      <div class="movie-name">
        <p class="chinese">
          <span>外太空的莫扎特</span>
        </p>
      </div>
      <div class="movie-detail">
        <p class="show-intro">136分钟 / 家庭 / 奇幻 / 喜剧 / 中国大陆</p>
        <div class="open-date-and-issuance">
          <div class="open-date">2022-07-15 17:00 在中国大陆上映</div>
          <div class="bui-tag">发型通知</div>
        </div>
      </div>
    </div>
  </div>
<!--  口碑-->
  <section class="show-remark">
    <div class="remark-wrapper">
      <div class="remark-container">
        <h3 class="remark-head">
          <span class="remark-title"></span>
          <span class="want-see-num">
            <span class="J_WantCount">187,433</span>
            <span class="want-see-text"> &nbsp;人想看</span>
          </span>
        </h3>
      </div>
    </div>
  </section>
<!--  背景条-->
  <div class="margin-area"></div>
<!--电影详情导航栏-->
  <section class="tab-wrapper">
    <ul class="tab-container">
      <li class="tab-item tab-li-active">简介</li>
      <li class="tab-item">
        <span style="position: relative">
          影评
          <span class="sub-info">28</span>
        </span>
      </li>
      <li class="tab-item">更多</li>
    </ul>
  </section>
<!--电影简介-->
  <div class="show-desc">
    <div class="show-desc-content">
      你有没有遇到过一个人，他点亮了你整个青春？大四女孩童知了（周依然饰）喜欢了来自台北的校友顾彬（吴念轩饰）整整四年。她闯入他的世界，他带她感受青春里的肆意和热烈，惊艳了她整个青春。毕业临近，她是选择将秘密留在青春里还是勇敢说出那句“我一直一直都很喜欢你”呢？
    </div>
    <div class="seg-line"></div>

  </div>
<!--演员列表-->
  <div class="show-artists">
    <div class="show-mod-title">
      <h3>演职人员</h3>
      <div class="more-num">
        38
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-you"></use>
        </svg>
      </div>
    </div>
    <div class="show-artists-container">

    </div>
  </div>
</body>
</html>
```

2. 将html拆分成组件为：MovieDetail

   ```vue
   <template>
     <!--电影播放视频-->
     <section class="video-header-wrapper"></section>
     <!--电影详情-->
     <div class="show-info-d">
       <!--    封面-->
       <div class="poster-wrap">
         <div class="poster"></div>
         <span class="force-oneline">
           <i>2D IMAX</i>
         </span>
       </div>
       <!--    详情-->
       <div class="info-container">
         <div class="movie-name">
           <p class="chinese">
             <span>外太空的莫扎特</span>
           </p>
         </div>
         <div class="movie-detail">
           <p class="show-intro">136分钟 / 家庭 / 奇幻 / 喜剧 / 中国大陆</p>
           <div class="open-date-and-issuance">
             <div class="open-date">2022-07-15 17:00 在中国大陆上映</div>
             <div class="bui-tag">发型通知</div>
           </div>
         </div>
       </div>
     </div>
     <!--  口碑-->
     <section class="show-remark">
       <div class="remark-wrapper">
         <div class="remark-container">
           <h3 class="remark-head">
             <span class="remark-title"></span>
             <span class="want-see-num">
               <span class="J_WantCount">187,433</span>
               <span class="want-see-text"> &nbsp;人想看</span>
             </span>
           </h3>
         </div>
       </div>
     </section>
     <!--  背景条-->
     <div class="margin-area"></div>
     <!--电影详情导航栏-->
     <section class="tab-wrapper">
       <ul class="tab-container">
         <li class="tab-item tab-li-active">简介</li>
         <li class="tab-item">
           <span style="position: relative">
             影评
             <span class="sub-info">28</span>
           </span>
         </li>
         <li class="tab-item">更多</li>
       </ul>
     </section>
     <!--电影简介-->
     <div class="movieWrapper">
       <div class="show-desc">
         <div class="show-desc-content">
           你有没有遇到过一个人，他点亮了你整个青春？大四女孩童知了（周依然饰）喜欢了来自台北的校友顾彬（吴念轩饰）整整四年。她闯入他的世界，他带她感受青春里的肆意和热烈，惊艳了她整个青春。毕业临近，她是选择将秘密留在青春里还是勇敢说出那句“我一直一直都很喜欢你”呢？
         </div>
         <div class="seg-line"></div>
   
       </div>
       <!--演员列表-->
       <div class="show-artists">
         <div class="show-mod-title">
           <h3>演职人员</h3>
           <div class="more-num">
             38
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-you"></use>
             </svg>
           </div>
         </div>
         <div class="show-artists-container">
           <div style="display: flex">
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
             <a class="show-artist">
               <div class="show-poster"></div>
               <dl>
                 <dt>吴佳凯</dt>
                 <dd>导演</dd>
               </dl>
             </a>
           </div>
   
         </div>
       </div>
       <!--  视频和剧照-->
       <div class="videoposter">
         <div class="show-albums">
           <div class="show-mod-title">
             <h3>视频和剧照</h3>
             <div class="more-num">
               35
               <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-you"></use>
               </svg>
             </div>
           </div>
           <div class="show-album-container">
             <div style="display:flex">
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
               <a class="show-album-item">
                 <div>
                   <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                 </div>
               </a>
             </div>
           </div>
         </div>
       </div>
       <!--  观众热评-->
       <div class="show-comments clearfix">
         <div class="show-comments-wrapper clearfix">
           <div class="clearfix">
             <h3>观众热评</h3>
             <!--      小图标-->
             <div class="score-tip">
               <svg class="icon" aria-hidden="true">
                 <use xlink:href="#icon-a-07biaoqian"></use>
               </svg>
             </div>
           </div>
           <ul class="tag-list">
             <li>全部</li>
             <li>最新</li>
           </ul>
   <!--        评论列表-->
           <div class="show-comments-list">
             <div class="show-comment">
   
               <div class="comment-title">
                 <!--            头像-->
                 <div class="user-avatar">
                 </div>
                 <div class="user-wrap">
   <!--                文字显示区域-->
                   <div class="user-info">
                     <div class="name">呵**萨</div>
                   </div>
   <!--                评价星形区域-->
                   <div class="movie-info">
                     <span>
                       <div class="show-star-ranking">
                         <div class="show-star-ranking-light">
   
                         </div>
                       </div>
                     </span>
                     <span>9.0</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
   
       </div>
     </div>
   <!--  购票区域-->
     <slot></slot>
   </template>
   
   <script>
   // 引入滑动库
   import BScroll from 'better-scroll'
   import {onMounted,nextTick} from "vue";
   export default {
     name: "MovieDetail",
     setup(){
   
     }
   }
   </script>
   
   <style scoped>
   .video-header-wrapper{
     width: 400px;
     height: 249px;
     background:no-repeat 50%/cover url("https://gw.alicdn.com/i2/O1CN01oepU6m1LFhldYQruh_!!6000000001270-0-alipicbeacon.jpg_760x760Q30.jpg_.webp") ;
   }
   /*  电影详情*/
   .show-info-d{
     width: 374px;
     height: 144px;
     padding: 12px 12px 0 12px;
     margin-bottom: 12px;
   }
   .poster-wrap{
     position: relative;
     margin-right: 6px;
   }
   .poster-wrap .poster{
     width: 103px;
     height: 144px;
     background: url("https://gw.alicdn.com/i3/O1CN01CiuZKy1I5Dr6LcJuu_!!6000000000841-0-alipicbeacon.jpg_320x320Q30s100.jpg_.webp") no-repeat 50%/cover;
   }
   .poster-wrap .force-oneline{
     position: absolute;
     top: 0;
     left: 4px;
   }
   .poster-wrap,.info-container{
     float: left;
   }
   .poster-wrap .force-oneline i{
   
     color: #000;
     background: #f8f8fb;
     font-size: 10px;
     font-weight: 400;
     border-radius: 3px;
     white-space: nowrap;
     /*取消斜体  */
     font-style: normal;
   }
   .info-container{
     width: 258px;
     height: 91px;
     /*background: red;*/
   }
   .info-container .movie-name{
     padding:4px 0;
     padding-bottom: 0;
   }
   .info-container .chinese{
     color: #2e333e;
     font-size:22px;
     font-weight: 500;
   }
   .info-container .movie-detail{
     padding: 8px 0;
     padding-bottom: 0;
   }
   .movie-detail .show-intro,.movie-detail .open-date-and-issuance{
     color:#959aa5;
     font-size: 13px;
   }
   .movie-detail .show-intro{
     margin-bottom: 4px;
   }
   .open-date,.bui-tag{
     float: left;
   }
   .open-date{
     /*margin-left:1px;*/
     width: 196px;
     /*内容在一行显示*/
     white-space: nowrap;
     overflow: hidden;
     /* 多出来的内容使用省略号代替*/
     text-overflow: ellipsis;
   }
   .bui-tag{
   
     border: 1px solid rgba(44,199,164,.4);
     padding: 0 4px;
     border-radius: 3px;
     color: #2cc7a4;
     /*border-color: rgba(44,199,164,.4);*/
   }
   /*  k口碑*/
   .show-remark{
     width: 374px;
     height: 47px;
     margin: 12px;
   }
   .show-remark .remark-wrapper{
     height: 24px;
     padding: 10px 16px;
     border: 1px solid #e9ebef;
     border-radius: 12px;
   
   }
   .show-remark .remark-head{
     font-size: 16px;
   
   }
   .show-remark .remark-title{
     margin-top: 5px;
     width: 85px;
     height: 14px;
     text-align: center;
     background: url("https://img.alicdn.com/tfs/TB15abfvWL7gK0jSZFBXXXZZpXa-174-33.png");
     /*background-color: red;*/
     background-repeat: no-repeat;
     background-size: contain;
   }
   .show-remark .remark-head span{
     float: left;
   }
   .show-remark .want-see-num{
     margin-left: 143px;
     font-size: 16px;
     color: #ff901c;
   }
   /*背景条*/
   .margin-area{
     width: 100%;
     height:10px;
     background-color: #f5f6f8;
   }
   /*电影简介*/
   .tab-wrapper{
     width: 400px;
     height:51px;
   }
   .tab-container li{
     float: left;
     width: 130px;
     height: 17px;
     padding: 16px 0;
     text-align: center;
     font-size: 16px;
     line-height: 17px;
     color: #4a4a4a;
   }
   .tab-li-active{
     font-weight: 600;
     border-bottom: 1px solid #2e333e;
   }
   .tab-container .sub-info{
     display: block;
     position:absolute;
     top: -3px;
     left: 20px;
     right: -39px;
     width: 37px;
     height: 17px;
     font-size:10px;
     color:#959aa5;
     font-weight: 400;
   }
   /*  电影简介*/
   .show-desc{
     width: 374px;
     height: 164px;
   
     padding-top: 12px;
     overflow: hidden;
     font-size: 15px;
     background-color: #fff;
   }
   .show-desc .show-desc-content{
     margin: 0 12px;
     margin-bottom: 12px;
     text-overflow: ellipsis;
     overflow: hidden;
   }
   .seg-line{
     position: relative;
     height:1px;
     background: #fff;
   }
   .seg-line::after{
     position: absolute;
     left: 12px;
     top: 0;
     content:"";
     width: 100%;
     height:1px;
     background:transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
   }
   /*  演员列表*/
   .show-artists{
     height: 251px;
   }
   .show-artists .show-mod-title{
     height: 57px;
   }
   .show-artists .show-mod-title h3,.show-artists .show-mod-title .more-num{
     float: left;
   }
   .show-artists .show-mod-title h3{
     width: 72px;
     height: 40px;
     padding: 8px 0;
     padding-left: 12px;
     font-size: 16px;
     font-weight: 600;
   }
   .show-artists .show-mod-title .more-num{
     margin-left: 267px;
     margin-top: 8px;
     /*line-height: 57px;*/
   }
   /*视频和快照*/
   .videoposter{
     width: 400px;
     height: 197px;
   }
   .videoposter .show-albums .show-mod-title{
     height: 57px;
   }
   .videoposter .show-albums .show-mod-title h3{
     float: left;
     line-height: 57px;
     margin-left: 10px;
   }
   .videoposter .show-albums .show-mod-title .more-num{
     float: right;
   }
   /*观众热评*/
   .show-comments-wrapper h3{
     float: left;
     font-size: 14px;
     padding:14px 0 8px 12px;
   }
   .show-comments-wrapper .score-tip{
     float: left;
     margin-top: 11px;
     margin-left: 3px;
   }
   .tag-list{
     padding: 0 12px;
     width: 374px;
     height: 42px;
   }
   .tag-list li{
   
     float: left;
     padding:7px 16px;
     margin: 0 8px 10px 0;
     border: 1px solid #e9ebef;
     border-radius: 100px;
     font-size: 13px;
   
   }
   /*演员图片表*/
   .show-artists-container{
     width: 387px;
     height: 194px;
     margin-left: 12px;
     overflow-x: scroll;
   }
   .show-artist{
     float: left;
     display: block;
     width: 92px;
     height:181px;
     margin-right: 5px;
     text-align: center;
   }
   .show-artist .show-poster{
     width: 92px;
     height: 128px;
     /*height: 100px;*/
     background: url("https://gw.alicdn.com/i2/O1CN01obN3ls1CavVQGxTQB_!!6000000000098-0-alipicbeacon.jpg_320x320Q30.jpg_.webp") no-repeat 50%/cover;
   }
   .show-artist dl dt{
     font-size: 14px;
   }
   .show-artist dl dd{
     font-size: 11px;
     color: #5f6672;
   }
   .videoposter .show-album-item{
     display: block;
     width: 188px;
     height: 125px;
     margin-right: 5px;
   
   }
   .videoposter .show-album-item img{
     display: block;
     width: 100%;
     height: 100%;
   }
   .videoposter .show-album-item>div{
     width: 188px;
     height: 125px;
   }
   .show-album-container{
     width: 387px;
     height: 140px;
     overflow-x: scroll;
   }
   /*评论列表*/
   .show-comments-list{
     margin-left: 12px;
   }
   .show-comments-list .show-comment{
     margin: 12px 0;
   }
   .show-comments-list .show-comment .comment-title{
     width: 387px;
     height: 52px;
     margin-bottom: 10px;
   }
   .show-comments-list .show-comment .comment-title .user-avatar{
     float: left;
     width: 48px;
     height: 48px;
     padding: 2px;
     border-radius: 50%;
     background: url('https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png') no-repeat 50%/cover;
   }
   .show-comments-list .show-comment .comment-title .user-wrap{
     float: left;
     margin-top: 5px;
     margin-left: 5px;
   }
   .show-comments-list .show-comment .comment-title .user-info{
   
     font-size: 15px;
     font-weight: 600;
   }
   .show-comments-list .show-comment .comment-title .user-wrap .movie-info span{
     display: inline-block;
   }
   .show-comments-list .show-comment .comment-title .user-wrap .movie-info span:last-child{
     font-size: 13px;
     margin-left: 3px;
     color: #ff901c;
   }
   .show-star-ranking{
     width: 55px;
     height: 10px;
     background: url('https://gw.alicdn.com/tfs/TB1UoBbgeH2gK0jSZJnXXaT1FXa-32-32.svg');
     background-size: 11px 100%;
   }
   .show-star-ranking .show-star-ranking-light{
     width: 79%;
     height: 100%;
     background-size: 11px 100%;
     background-image: url("https://gw.alicdn.com/tfs/TB1Kto9f1L2gK0jSZPhXXahvXXa-32-32.svg");
   }
   </style>
   
   ```

   3. 最后在路由文件夹中添加路径

   ```js
   {
           path:'/movieDetail',
           component: movieDetail
       },
   ```

##  搭建电影购票页面

使用电影详情页面   由于电影购票页面比电影详情页面多了一个购票按钮，所以我们使用slot插槽来将内容插入到指定位置。

配置js

```js
 {
        path: '/buyMovie',
        component: buyMovie
    },
```

##  搭建电影购票页面选择电影院

由于电影院的结构和底部导航栏电影院结构基本相似，所以考虑重构代码将部分代码封装成一个组件。

![image-20220725113456659](/Users/lhl/Library/Application Support/typora-user-images/image-20220725113456659.png)

![image-20220725113511584](/Users/lhl/Library/Application Support/typora-user-images/image-20220725113511584.png)

可以利用插槽将结构体现出来。

将部分代码封装为一个组件

```vue
<template>
  <div class="list-item-container">
    <a href="" class="list-item-in clearfix">
      <h3 class="list-title-warper clearfix">
        <div class="list-title-left">
          <span class="list-title">北京百老汇电影中心（万国城店）</span>
        </div>
        <div class="list-price">
          新人                      ¥35
          <span class="word-qi">起</span>
        </div>

      </h3>
      <div class="list-address">
        <span class="list-distance">--km</span>
        <div class="list-location">东城区香河园路1号当代MOMA北区T4座</div>
      </div>
      <div class="cinema-support">
        <div class="support-tags">
          <div class="tpp-lbl">
            <span class="support-tagName">特惠票</span>
          </div>
          <div class="tpp-lbl">
            <span class="support-tagName">特惠票</span>
          </div>
          <div class="tpp-lbl">
            <span class="support-tagName">特惠票</span>
          </div>
          <div class="tpp-lbl">
            <span class="support-tagName">特惠票</span>
          </div>
        </div>
      </div>
<!--      添加插槽用于添加场次信息-->
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "MyCinema"
}
</script>

<style scoped>
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
```

## 进行前后端数据交互

1. 引入axios

   ```
   npm install axios
   ```

2. 封装axios

   ```js
   import axios from "axios";
   // 封装axios
   const requests = axios.create({
       baseURL:'http://localhost:8222',
       timeout:'3000'
   })
   export default requests
   ```

3. 基本接口就略过,将代码贴到下面

   ```js
   import requests from "@/api/utils/requests";
   const BaseUrl = '/cinemaService/t-cinema/'
   export default {
       // 获取电影院全部信息
       getAllCinema(){
           return requests({
               url:BaseUrl+'/getAllCinema',
               method: 'get'
           })
       },
   
   }
   
   
   
   // 获取演员数据
   import requests from "@/api/utils/requests";
   export default {
   //    获取演员数据
       getDirect(tid){
           return requests({
               url:`/actSer/t-directors/getAct/${tid}`,
               method: 'get'
           })
       }
   }
   // 根据电影id获取其他信息
   import requests from "@/api/utils/requests";
   const BaseUrl = '/cinemaService/movie-cinema'
   export default {
       // 获取电影指定电影院
       getCinemaById(id){
           return requests({
               url:BaseUrl+'/getCinema/'+id,
               method: 'get'
           })
       }
   }
   //获取电影信息
   
   import requests from "@/api/utils/requests";
   export default {
       getAllMovie(){
           return requests({
               url:'/service-mov/m-movie/getAll',
               method:'get'
           })
       },
       // 根据id查询指定数据
       getByIdMovie(tid){
           return requests({
               url:`/service-mov/m-movie/getById/${tid}`,
               method:'get'
           })
       },
       // 获取电影封面图片
       getImage(tid){
           return requests({
               url:`/service-mov/m-movie/getImage/${tid}`,
               method:'get'
           })
       }
   
   }
   
   ```

4. 将遇到的问题解决

   1. 首先是MovieDetail.vue问题

      ​	具体问题是通过父组件将数据传到MovieDetail.vue中，然后因为是通过接口获取的数据，在进行页面渲染的时候或发生错误，虽然页面可以渲染出来。但是控制台打印报错。这种情况我采用的解决方法是，

       1. 在父组件BuyMovie中添加一个变量flag

       2. 用v-if控制子组件的显示。如果flag为false，子组件隐藏，相对应的子组件里面的任何方法不会执行

       3. 在发送请求时，将三个请求同时发送，并且在最后将flag设置为true

       4. 代码如下

          父组件BuyMovie（贴关键代码）

          ```js
          let flag = ref(false)
              console.log("flag==",flag)
              const route = useRoute()
              // 定义一个数据
              let resMovie = reactive({Movie:[],directs:[]})
              // 发送请求获取当前电影具体信息 由于props子组件总是报错 索性直接连着写了出来 这样保证每个props属性都是可以读取的 避免了报错
              movieApi.getByIdMovie(route.params.id).then(res=>{
                resMovie.Movie = res.data.data.movie
                movieApi.getImage(route.params.id).then(res=>{
                  resMovie.image = res.data.data.image
                  directorApi.getDirect(route.params.id).then(res=>{
                    resMovie.directs = res.data.data
                    flag.value = true
                    // console.log('resMovie.directs==',resMovie.directs)
                  })
                })
          ```

          子组件MovieDetail.vue

          ```vue
          <template>
            <!--电影播放视频-->
            <section class="video-header-wrapper"></section>
          
            <!--电影详情-->
            <div class="show-info-d">
              <!--    封面-->
              <div class="poster-wrap">
                <div class="poster" :style="`background-image:url(${image})`"></div>
                <span class="force-oneline">
                  <i>2D IMAX</i>
                </span>
              </div>
              <!--    详情-->
              <div class="info-container">
                <div class="movie-name">
                  <p class="chinese">
                    <span>{{ movie.showName }}</span>
                  </p>
                </div>
                <div class="movie-detail">
                  <p class="show-intro">{{ movie.duration }}分钟  <span v-for="(t,index) in type" :key="index">{{t}}/</span></p>
                  <div class="open-date-and-issuance">
                    <div class="open-date">{{ movie.openTime}}在中国大陆上映</div>
                    <div class="bui-tag">发型通知</div>
                  </div>
                </div>
              </div>
            </div>
            <!--  口碑-->
            <section class="show-remark">
              <div class="remark-wrapper">
                <div class="remark-container">
                  <h3 class="remark-head">
                    <span class="remark-title"></span>
                    <span class="want-see-num">
                      <span class="J_WantCount">{{ movie.wantCount }}</span>
                      <span class="want-see-text"> &nbsp;人想看</span>
                    </span>
                  </h3>
                </div>
              </div>
            </section>
            <!--  背景条-->
            <div class="margin-area"></div>
            <!--电影详情导航栏-->
            <section class="tab-wrapper">
              <ul class="tab-container">
                <li class="tab-item tab-li-active">简介</li>
                <li class="tab-item">
                  <span style="position: relative">
                    影评
                    <span class="sub-info">28</span>
                  </span>
                </li>
                <li class="tab-item">更多</li>
              </ul>
            </section>
            <!--电影简介-->
            <div class="movieWrapper">
              <div class="show-desc">
                <div class="show-desc-content">
                  {{movie.description}}
                </div>
                <div class="seg-line"></div>
          
              </div>
              <!--演员列表-->
              <div class="show-artists">
                <div class="show-mod-title">
                  <h3>演职人员</h3>
                  <div class="more-num">
          <!--           计算总共的演职人员-->
                    {{ acts.director.length+acts.acts.length }}
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-you"></use>
                    </svg>
                  </div>
                </div>
                <div class="show-artists-container">
                  <div style="display: flex">
                    <a class="show-artist" @click="goArtist" v-for="dir in acts.director">
                      <div class="show-poster" :style="`background-image:url(${dir.dimage})`"></div>
                      <dl>
                        <dt>{{ dir.dtitle }}</dt>
                        <dd>{{ dir.roleName }}</dd>
                      </dl>
                    </a>
                    <a class="show-artist" @click="goArtist" v-for="act in acts.acts">
                      <div class="show-poster" :style="`background-image:url(${act.dimage})`"></div>
                      <dl>
                        <dt>{{ act.dtitle }}</dt>
                        <dd>{{ act.roleName }}</dd>
                      </dl>
                    </a>
                  </div>
          
                </div>
              </div>
              <!--  视频和剧照-->
              <div class="videoposter">
                <div class="show-albums">
                  <div class="show-mod-title">
                    <h3>视频和剧照</h3>
                    <div class="more-num">
                      35
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-you"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="show-album-container">
                    <div style="display:flex">
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                      <a class="show-album-item">
                        <div>
                          <img src="https://gw.alicdn.com/i3/O1CN01DAmk6u1SiHnVHhH1d_!!6000000002280-0-alipicbeacon.jpg_600x600Q30.jpg_.webp" alt="">
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!--  观众热评-->
              <div class="show-comments clearfix">
                <div class="show-comments-wrapper clearfix">
                  <div class="clearfix">
                    <h3>观众热评</h3>
                    <!--      小图标-->
                    <div class="score-tip">
                      <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-a-07biaoqian"></use>
                      </svg>
                    </div>
                  </div>
                  <ul class="tag-list">
                    <li>全部</li>
                    <li>最新</li>
                  </ul>
          <!--        评论列表-->
                  <div class="show-comments-list">
                    <div class="show-comment">
          
                      <div class="comment-title">
                        <!--            头像-->
                        <div class="user-avatar">
                        </div>
                        <div class="user-wrap">
          <!--                文字显示区域-->
                          <div class="user-info">
                            <div class="name">呵**萨</div>
                          </div>
          <!--                评价星形区域-->
                          <div class="movie-info">
                            <span>
                              <div class="show-star-ranking">
                                <div class="show-star-ranking-light">
          
                                </div>
                              </div>
                            </span>
                            <span>9.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
              </div>
            </div>
          <!--  购票区域-->
            <slot></slot>
          </template>
          
          <script>
          import {useRouter} from "vue-router";
          import {watch} from "vue";
          export default {
            name: "MovieDetail",
            props:['movie','acts','image'],
            setup(props){
              console.log("props==",props)
              // watch(()=>props.movie,(newVal)=>{
              //   console.log("watch执行")
              //   console.log("执行==",props.movie.length)
              //   console.log(Boolean(props.movie))
              //   console.log(newVal)
              //   if (props.movie){
              //     console.log("执行==",props.movie)
              //     props.movie = []
              //   }else{
              //     props.movie = newVal
              //   }
              // },{
              //   immediate:true,
              //   deep:true
              // })
              let flag = false
              let type = props.movie.type
              if (type){
                type = type.split(',')
              }
              const router = useRouter()
              function goArtist(){
                // alert("123")
                router.push({path:'/showArtist'})
              }
              return{
                  goArtist,
                  type,
                  flag
              }
            }
          }
          </script>
          
          <style scoped>
          .video-header-wrapper{
            width: 400px;
            height: 249px;
            background:no-repeat 50%/cover url("https://gw.alicdn.com/i2/O1CN01oepU6m1LFhldYQruh_!!6000000001270-0-alipicbeacon.jpg_760x760Q30.jpg_.webp") ;
          }
          /*  电影详情*/
          .show-info-d{
            width: 374px;
            height: 144px;
            padding: 12px 12px 0 12px;
            margin-bottom: 12px;
          }
          .poster-wrap{
            position: relative;
            margin-right: 6px;
          }
          .poster-wrap .poster{
            width: 103px;
            height: 144px;
            background: url("https://gw.alicdn.com/i3/O1CN01CiuZKy1I5Dr6LcJuu_!!6000000000841-0-alipicbeacon.jpg_320x320Q30s100.jpg_.webp") no-repeat 50%/cover;
          }
          .poster-wrap .force-oneline{
            position: absolute;
            top: 0;
            left: 4px;
          }
          .poster-wrap,.info-container{
            float: left;
          }
          .poster-wrap .force-oneline i{
          
            color: #000;
            background: #f8f8fb;
            font-size: 10px;
            font-weight: 400;
            border-radius: 3px;
            white-space: nowrap;
            /*取消斜体  */
            font-style: normal;
          }
          .info-container{
            width: 258px;
            height: 91px;
            /*background: red;*/
          }
          .info-container .movie-name{
            padding:4px 0;
            padding-bottom: 0;
          }
          .info-container .chinese{
            color: #2e333e;
            font-size:22px;
            font-weight: 500;
          }
          .info-container .movie-detail{
            padding: 8px 0;
            padding-bottom: 0;
          }
          .movie-detail .show-intro,.movie-detail .open-date-and-issuance{
            color:#959aa5;
            font-size: 13px;
          }
          .movie-detail .show-intro{
            margin-bottom: 4px;
          }
          .open-date,.bui-tag{
            float: left;
          }
          .open-date{
            /*margin-left:1px;*/
            width: 196px;
            /*内容在一行显示*/
            white-space: nowrap;
            overflow: hidden;
            /* 多出来的内容使用省略号代替*/
            text-overflow: ellipsis;
          }
          .bui-tag{
          
            border: 1px solid rgba(44,199,164,.4);
            padding: 0 4px;
            border-radius: 3px;
            color: #2cc7a4;
            /*border-color: rgba(44,199,164,.4);*/
          }
          /*  k口碑*/
          .show-remark{
            width: 374px;
            height: 47px;
            margin: 12px;
          }
          .show-remark .remark-wrapper{
            height: 24px;
            padding: 10px 16px;
            border: 1px solid #e9ebef;
            border-radius: 12px;
          
          }
          .show-remark .remark-head{
            font-size: 16px;
          
          }
          .show-remark .remark-title{
            margin-top: 5px;
            width: 85px;
            height: 14px;
            text-align: center;
            background: url("https://img.alicdn.com/tfs/TB15abfvWL7gK0jSZFBXXXZZpXa-174-33.png");
            /*background-color: red;*/
            background-repeat: no-repeat;
            background-size: contain;
          }
          .show-remark .remark-head span{
            float: left;
          }
          .show-remark .want-see-num{
            margin-left: 143px;
            font-size: 16px;
            color: #ff901c;
          }
          /*背景条*/
          .margin-area{
            width: 100%;
            height:10px;
            background-color: #f5f6f8;
          }
          /*电影简介*/
          .tab-wrapper{
            width: 400px;
            height:51px;
          }
          .tab-container li{
            float: left;
            width: 130px;
            height: 17px;
            padding: 16px 0;
            text-align: center;
            font-size: 16px;
            line-height: 17px;
            color: #4a4a4a;
          }
          .tab-li-active{
            font-weight: 600;
            border-bottom: 1px solid #2e333e;
          }
          .tab-container .sub-info{
            display: block;
            position:absolute;
            top: -3px;
            left: 20px;
            right: -39px;
            width: 37px;
            height: 17px;
            font-size:10px;
            color:#959aa5;
            font-weight: 400;
          }
          /*  电影简介*/
          .show-desc{
            width: 374px;
            height: 164px;
          
            padding-top: 12px;
            overflow: hidden;
            font-size: 15px;
            background-color: #fff;
          }
          .show-desc .show-desc-content{
            margin: 0 12px;
            margin-bottom: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .seg-line{
            position: relative;
            height:1px;
            background: #fff;
          }
          .seg-line::after{
            position: absolute;
            left: 12px;
            top: 0;
            content:"";
            width: 100%;
            height:1px;
            background:transparent linear-gradient(0deg,#ededed,#ededed 50%,transparent 0,transparent 0) 0 100% repeat-x;
          }
          /*  演员列表*/
          .show-artists{
            height: 251px;
          }
          .show-artists .show-mod-title{
            height: 57px;
          }
          .show-artists .show-mod-title h3,.show-artists .show-mod-title .more-num{
            float: left;
          }
          .show-artists .show-mod-title h3{
            width: 72px;
            height: 40px;
            padding: 8px 0;
            padding-left: 12px;
            font-size: 16px;
            font-weight: 600;
          }
          .show-artists .show-mod-title .more-num{
            margin-left: 267px;
            margin-top: 8px;
            /*line-height: 57px;*/
          }
          /*视频和快照*/
          .videoposter{
            width: 400px;
            height: 197px;
          }
          .videoposter .show-albums .show-mod-title{
            height: 57px;
          }
          .videoposter .show-albums .show-mod-title h3{
            float: left;
            line-height: 57px;
            margin-left: 10px;
          }
          .videoposter .show-albums .show-mod-title .more-num{
            float: right;
          }
          /*观众热评*/
          .show-comments-wrapper h3{
            float: left;
            font-size: 14px;
            padding:14px 0 8px 12px;
          }
          .show-comments-wrapper .score-tip{
            float: left;
            margin-top: 11px;
            margin-left: 3px;
          }
          .tag-list{
            padding: 0 12px;
            width: 374px;
            height: 42px;
          }
          .tag-list li{
          
            float: left;
            padding:7px 16px;
            margin: 0 8px 10px 0;
            border: 1px solid #e9ebef;
            border-radius: 100px;
            font-size: 13px;
          
          }
          /*演员图片表*/
          .show-artists-container{
            width: 387px;
            height: 194px;
            margin-left: 12px;
            overflow-x: scroll;
          }
          .show-artist{
            float: left;
            display: block;
            width: 92px;
            height:181px;
            margin-right: 5px;
            text-align: center;
          }
          .show-artist .show-poster{
            width: 92px;
            height: 128px;
            /*height: 100px;*/
            background: url("https://gw.alicdn.com/i2/O1CN01obN3ls1CavVQGxTQB_!!6000000000098-0-alipicbeacon.jpg_320x320Q30.jpg_.webp") no-repeat 50%/cover;
          }
          .show-artist dl dt{
            font-size: 14px;
          }
          .show-artist dl dd{
            font-size: 11px;
            color: #5f6672;
          }
          .videoposter .show-album-item{
            display: block;
            width: 188px;
            height: 125px;
            margin-right: 5px;
          
          }
          .videoposter .show-album-item img{
            display: block;
            width: 100%;
            height: 100%;
          }
          .videoposter .show-album-item>div{
            width: 188px;
            height: 125px;
          }
          .show-album-container{
            width: 387px;
            height: 140px;
            overflow-x: scroll;
          }
          /*评论列表*/
          .show-comments-list{
            margin-left: 12px;
          }
          .show-comments-list .show-comment{
            margin: 12px 0;
          }
          .show-comments-list .show-comment .comment-title{
            width: 387px;
            height: 52px;
            margin-bottom: 10px;
          }
          .show-comments-list .show-comment .comment-title .user-avatar{
            float: left;
            width: 48px;
            height: 48px;
            padding: 2px;
            border-radius: 50%;
            background: url('https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png') no-repeat 50%/cover;
          }
          .show-comments-list .show-comment .comment-title .user-wrap{
            float: left;
            margin-top: 5px;
            margin-left: 5px;
          }
          .show-comments-list .show-comment .comment-title .user-info{
          
            font-size: 15px;
            font-weight: 600;
          }
          .show-comments-list .show-comment .comment-title .user-wrap .movie-info span{
            display: inline-block;
          }
          .show-comments-list .show-comment .comment-title .user-wrap .movie-info span:last-child{
            font-size: 13px;
            margin-left: 3px;
            color: #ff901c;
          }
          .show-star-ranking{
            width: 55px;
            height: 10px;
            background: url('https://gw.alicdn.com/tfs/TB1UoBbgeH2gK0jSZJnXXaT1FXa-32-32.svg');
            background-size: 11px 100%;
          }
          .show-star-ranking .show-star-ranking-light{
            width: 79%;
            height: 100%;
            background-size: 11px 100%;
            background-image: url("https://gw.alicdn.com/tfs/TB1Kto9f1L2gK0jSZPhXXahvXXa-32-32.svg");
          }
          </style>
          ```



##  实现一个比较困难的逻辑

​	当做点击购票,然后会跳转到电影院显示页面 ,他会显示电影院基本信息以及播放的电影信息。 然后他默认显示的是你点击的电影的场次信息。具体如下图

​	![image-20220809110535584](/Users/lhl/Library/Application Support/typora-user-images/image-20220809110535584.png)

![image-20220809110642133](/Users/lhl/Library/Application Support/typora-user-images/image-20220809110642133.png)

具体逻辑为:

​	首先根据电影cid发送请求获取数据+由于没有数据之前不能渲染页面，使用flag标志位控制页面的显示隐藏+定义一个变量，通过swiper提供的函数跳转到指定的silde，同时显示对应数据

```js
  // 定义一个响应式对象用于保存数据
  let changciData = reactive({ChangCi:[],index:0,changCiInfo:[]})
  let movieInfo = reactive({})
  let MySwiper = reactive({swiper:{}})
  let onSwiper = (swiper) => {
    // swiper.slideTo(index)
    // console.log("123")
    // 获取实例对象
    MySwiper.swiper = swiper
  };

  // 如果这个参数不为空 就发送请求
  if (route.params.cid){
    ChangciApi.getChangCiByTidAndCid(route.params.cid).then(res=>{
      changciData.ChangCi = res.data.data.data
      console.log("changciData.ChangCi =",changciData.ChangCi )
      // 遍历这个集合
      // for(let item of  changciData.ChangCi){
      //     if (item.movieData.tid ===route.params.tid){
      //       // 如果找到就将flag置为true 同时将swiperslide移动到指定位置
      //       flag.value = true
      //     }
      // }
      
      
      // 如果有电影id  就执行判断 同时swiper跳转到指定silde 否则就默认跳转到第一个
      if (route.params.tid){
        for(let i=0;i<changciData.ChangCi.length;i++){
          // 将轮播图跳转到指定的轮播图
          if (changciData.ChangCi[i].movieData.tid === route.params.tid){
            // 如果找到就将flag置为true 同时将swiperslide移动到指定位置
            // flag.value = true
            changciData.index = i
            // 同时将场次信息赋值给changCiInfo
            changciData.changCiInfo = changciData.ChangCi[i].changcis
          }
        }
      }else{
        changciData.changCiInfo = changciData.ChangCi[0].changcis
      }

      flag.value = true
      // 轮播图跳转到指定位置  使用nextTick 在他下次刷新时跳转到指定位置
      nextTick(()=>{
        MySwiper.swiper.slideTo(changciData.index)
      })
    })
  }
  console.log("传递的tid==",route.params.tid)
  // 定义一个电影id变量用于绑定

  const onSlideChange = (swiper) => {
    // // 如果轮播图改变 就跳转
    // router.push({path:'/goCinemaDetailBuy/showTickInfo'})
    // alert(swiper.activeIndex)
    movieInfo.title = changciData.ChangCi[swiper.activeIndex].movieData.ttitle
    movieInfo.ttype = changciData.ChangCi[swiper.activeIndex].movieData.ttype
    movieInfo.tdirector = changciData.ChangCi[swiper.activeIndex].movieData.tdirector
    changciData.changCiInfo = changciData.ChangCi[swiper.activeIndex].changcis
  };
```

