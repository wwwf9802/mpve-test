<template>
  <div>
    <div class="userinfo" @click="bindViewTap">
      <div class="wcenter">
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      </div>
      <div class="userinfo-nickname">
        <div class="wcenter">
          <card :text="userInfo.nickName"></card>
        </div>
        <div class="wcenter">{{count}}</div>
      </div>
    </div>


    <div class="usermotto">
      <div class="user-motto wcenter">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <p class="wcenter">
      <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
    </p>
    <p class="wcenter">
      <a href="/pages/weui/main" class="counter">去往WEUIDEMO页面</a>
    </p>
    <div class="ddd">
    </div>
    <Bottombar :activeName="'index'"></Bottombar>
    
  </div>
</template>

<script>
import card from "@/components/card";
import Bottombar from "@/components/bottomBar";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {}
    };
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
    // count() {
    //   return this.$store.state.count;
    // }
  },
  components: {
    card,
    Bottombar
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    console.log("created");
    console.log(wx);
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  },

  onShow() {
    //这个钩子隐藏掉原生的tabBar
    wx.hideTabBar();
    console.log("onShow");
  },
  onReady() {
    console.log("onReady");
  },
  onLoad() {
    console.log("onLoad");
  },
  onShareAppMessage() {
    console.log("onShareAppMessage");
  }
};
</script>

<style lang="scss" scoped>

.wcenter{
  @include flex-w-center;
}



.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 10rpx;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.ddd{
  width:200rpx;
  height:200rpx;
  margin:0 auto;
  border-radius: 50%;
  background:pink;
}

</style>
