<template>
<div class="tarbbar">
  <keep-alive> <router-view></router-view></keep-alive>
  <van-tabbar v-model="active" v-if="icon">
    <van-tabbar-item  @click="navTo(n.url,index)"  v-bind:icon='n.icon'  v-for="(n,index) in icon" :key="index">{{n.name}}</van-tabbar-item>
  </van-tabbar>
</div>
</template>
<script>
export default {
  data () {
    return {
      active:0,
      icon: [
        {
          name:'首页',
          url:'home',
          icon:'wap-home'
        },
        {
          name:'分类',
          url:'list',
          icon:'balance-list-o'
        },
        {
          name:'购物车',
          url:'bag',
          icon:'shopping-cart-o'
        },
        {
          name:'我的',
          url:'mine',
          icon:'smile-o'
        },
      ],
      
    }
  },
  methods: {
    init(){
      var count =sessionStorage.getItem('active');
      if(!count){
        this.active=0;
      }else{
        this.active=+count
      }
    },
   navTo(name,index){
     this.$router.push({
       name
     })
     sessionStorage.setItem('active',index)
   }
  },
  mounted (){
    this.init();
  }
}
</script>
