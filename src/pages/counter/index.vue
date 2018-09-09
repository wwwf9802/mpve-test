<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <div>
      <input class="inp" type="number" v-model="num">
    </div>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="add">add</button>
    </p>
    <Bottombar :activeName="'vuex'"></Bottombar>
    <!-- <a href="/pages/index/main" class="home">去往首页</a> -->
  </div>
</template>

<script>
// Use Vuex
import Bottombar from '@/components/bottomBar.vue'
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data(){
    return {
      num:null,
    }
  },
  components:{
    Bottombar
  },
  computed: {
    ...mapState({
      count: state => state.count
    }),
  },
  methods: {
    ...mapMutations(['increment','decrement']),
    ...mapActions({actionAdd:'waitAdd'}),
    async add(){
      console.log('add clicked')
      await this.actionAdd(this.num);
      console.log(this.$store.state.count);
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

.inp{
  width:300rpx;
  height:40rpx;
  display:block;
  margin:0 auto;
  padding:0 10rpx;
  border:1px solid pink;

}
</style>
