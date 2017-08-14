import Vue from 'vue'
import Router from 'vue-router'
import logo from '@/components/logo'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default:logo,
        todo:todo
      }
    },
  ]
})
