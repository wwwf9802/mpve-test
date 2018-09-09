import Vue from 'vue'
import App from './App'
import store from './store'
import 'mp-weui/lib/style.css'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', '^pages/index/main','pages/weui/main','pages/counter/main','pages/son/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '殷浩楠小程序TEST',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/main",
        text: "首页"
      }, {
        pagePath: "pages/counter/main",
        text: "VUEX"
      },{
        pagePath: "pages/weui/main",
        text: "WEUI"
      }]
    },
  }
}
