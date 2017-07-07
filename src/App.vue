<template>
  <div id="index">
    <ul>
      <li>
        <router-link :to="{name:'Home'}">首页</router-link> 
     
      </li>  
      <li>
        <router-link :to="{path:'about'}">关于我的</router-link>
      </li>
      <li>
        <router-link :to="{path:'activity'}">促销活动</router-link>
      </li>
      <li>
        <router-link :to="{path:'apple/redApple'}">apple</router-link>
      </li>
      <li>
      <p>{{count}}</p>
      </li>
      
    </ul>
    <hr/>
    <router-view ></router-view>

    
    

  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    count(){
      return this.$store.getters.getCount;
    }
  }
  

  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
