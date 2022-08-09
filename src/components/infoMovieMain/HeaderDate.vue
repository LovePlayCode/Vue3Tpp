<template>
  <div class="tab-hd-wrap">
    <div class="tab-hd">
      <ul id="tabUl">
        <li class="active">
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
        <li>
          <div class="date-wrap">
            <span class="day">
              今天
              07-26
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDate"
}
</script>

<style scoped>

  .tab-hd-wrap{
    width: 400px;
    height: 36px;
  }
  .tab-hd{
    width: 100%;
    height: 100%;
    color: #959aa5;
    overflow: hidden;
  }
  #tabUl{
    padding: 0 7px;
    width: 385px;
    height: 36px;
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
  /* 清除滚动条*/
  #tabUl::-webkit-scrollbar{
    display: none;
  }
  #tabUl li{
    position: relative;
    /*float: left;*/
    display: inline-block;
    width: 68px;
    height: 19px;
    padding: 8px;
    font-weight: 500;
  }
  #tabUl li.active::after{
    content: '';
    width: 19px;
    height: 3px;
    border-radius:  100px;
    background-color: #ff3d5c;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
  }
  /*#tabUl li::after{*/
  /*  */
  /*}*/
  #tabUl li .date-wrap{
    display: flex;
    flex-direction: column;
  }
  #tabUl li .date-wrap .day{
    font-size: 14px;
    color: #222227;
  }
</style>