<template>
    <div id="container">
        <h4>这是标题</h4>
        <div>
           这是关于我的
           <p>{{this.$route.params.type}}{{this.$route.params.num}}</p>
           <button @click='getParam'>点击关于我的获取路由参数</button>
        </div>
    </div>
    
</template>
<script>
    export default{
        data(){
            return {
                msg:"这是关于我的"
            }
        },
        methods:{
          getParam(){
            console.log(this.$route.params);//路由参数：
          }  
        }


    }
</script>
<style scoped>
 button{
   padding:0 100px;
    height:50px;
    font-size:24px;
    line-hieght:50px;
    border:1px solid #dddddd;
 }
</style>