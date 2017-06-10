import Vue from 'vue'
import Router from 'vue-router'
import musicDis from '@/components/musicDis'
import myMusic from '@/components/myMusic'
import artList from '@/components/artList'
import resume from '../pages/resume'
import player from '../pages/player'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'musicDis',
      component: musicDis
    },
    {
      path: '/myMusic',
      name: 'myMusic',
      component: myMusic
    },
    {
      path: '/artList',
      name: 'artList',
      component: artList
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/player:id',
      name: 'player',
      component: player
    },
  ]
})
