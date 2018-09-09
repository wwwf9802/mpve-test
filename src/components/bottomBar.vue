<template>
  <div class="bottomBar">
    <div class="card" :class="{active:activeName==='index'}" @click="goTo('index')">
      <i class="iconfont icon-xihuan"></i>
      <span>首页</span>
    </div>
    <div class="card" :class="{active:activeName==='vuex'}" @click="goTo('counter')">
      <i class="iconfont icon-yinle"></i>
      <span>VUEX</span>
    </div>
    <div class="card" :class="{active:activeName==='weui'}" @click="goTo('weui')">
      <i class="iconfont icon-yinliang1"></i>
      <span>WEUI</span>
    </div>
  </div>
</template>

<script>
import '@/assets/css/iconfont/iconfont.css'
export default {
  props:{
    activeName: {
      type: String,
      default: 'index'
    },
  },
  methods:{
    goTo(path){
      const url = `../${path}/main`//"../logs/main";
      //只有配置了tabber属性的页面 才能使用switchTab方法来跳转
      wx.switchTab({ url });
      //wx.navigateTo({ url });
    }
  }
  //props: ['text']
}
</script>

<style lang='scss' scoped>


.bottomBar{
  width:750rpx;
  height:100rpx;
  position:fixed;
  bottom:0;
}

.card{
  box-sizing: border-box;
  color:#363636;
  @include flex-wh-center;
  width:33.3%;
  height:100%;
  border:1px solid #ddd;
  border-left:none;
  float:left;
  text-align: center;
  // &:active{
  //   background:#f86868;
  //   color:#fff;
  // }
  &.active{
    background:#f86868;
    color:#fff;
  }
}

.iconfont{
  color:pink;
  font-size:40rpx;
}
</style>
