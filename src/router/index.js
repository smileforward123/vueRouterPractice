import Vue from 'vue'
import Router from 'vue-router'
import  VueX from 'vueX'
import Home from '@/components/Home' //组件名字;
import detail from '@/components/detail'
import about from '@/components/about'
import activity from '@/components/activity'
import apple from  '@/components/apple'
import redApple from  '@/components/redApple'
Vue.use(Router)
Vue.use(VueX)

export default new Router({
  /*mode:'history',*///历史记录：实现前进和后退;/**/
  routes: [
    {
      path:'/',//当路由是这个路径时;
      redirect:'Home'//路由重定向;
    },
    {
      path: '/Home',
      name: 'Home',//组件名字;
      component: Home,
      children:[
        {
            path:"detail", //相对于父组件路径;
            name:detail,
            component:detail  
        }
      ]
    },
    {
      path: '/about/:type/person/:num',//冒号后面的代表参数： 在访问路由时是绝对匹配：
      name: 'about',
      component: about
     
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
     
    },
    {
      path: '/apple',
      name: 'apple',
      component: apple,
      children:[
        {
            path:"redApple", //相对于父组件路径;
            name:redApple,   //组件名字
            component:redApple  
        }
      ]

    }


  ]
})
