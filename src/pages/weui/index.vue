<template>
  <div class="demo">
    <MpRadio v-model="radioValue" :options="options" :title="单选列表项" >weui</MpRadio>
    <Bottombar :activeName="'weui'"></Bottombar>
    <button type="primary" size="mini" :loading="loading" :plain="plain"
		:disabled="disabled" @click="showActionSheet">show ActionSheet</button>


    <button type="primary" size="mini" :loading="loading" :plain="plain"
		:disabled="disabled" @click="goTo('son')">跳转子页面</button>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Bottombar from "@/components/bottomBar";
import MpRadio from "mp-weui/packages/radio";
export default {
  data() {
    return {
      loading:false,
      plain:false,
      disabled:false,
      primarySize: 'small',

      ////////////
      motto: "Hello World",
      userInfo: {},
      radioValue:null,
      options: [
        {
          label: "被禁用",
          value: "A",
          disabled: true
        },
        {
          label: "选项B",
          value: "B"
        },
        {
          label: "选项C",
          value: "C"
        }
      ]
    };
  },
  components: {
    Bottombar,
    MpRadio
  },

  methods: {
    showActionSheet(){
      console.log("ssssssssss")
    },
    goTo(path){
      const url = `../${path}/main`//"../logs/main";
      //只有配置了tabber属性的页面 才能使用switchTab方法来跳转
      wx.switchTab({ url });
      //wx.navigateTo({ url });
    }
  },

  created() {
    console.log("created");
    // 调用应用实例的方法获取全局数据
  },

  onShow() {
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
  },
};
</script>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  align-items: center;
  border: 1px solid red;
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
  margin-top: 150px;
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
</style>
