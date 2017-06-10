<template>
  <div class="mod_header">
    <div class="section_inner">
      <h1 class="qqmusic_title">
        <router-link to="/">
          <img class="qqmusic_logo" src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png" alt="qqmusic">
        </router-link>
      </h1>
      <ul class="mod_top_nav">
        <li class="top_nav__item top_nav__item--room">
          <router-link class="top_nav_link top_nav_link--current" to="/">音乐馆</router-link>
        </li>
        <li class="top_nav__item top_nav__item--mine">
          <router-link class="top_nav_link" to="/myMusic">我的音乐</router-link>
        </li>
        <li class="top_nav__item top_nav__item--down">
          <router-link class="top_nav_link" to="resume">我的简历</router-link>
        </li>
      </ul>
      <ul class="mod_top_subnav">
        <li class="top_subnav__item" v-for="item in subnav">
          <a :href='item.href' class="top_subnav__link">{{item.name}}</a>
        </li>
      </ul>
      <div class="mod_top_search" @mouseout="schleave">
        <div class="mod_search_input">
          <input type="text" class="search_input__input" v-model="keyword" placeholder="先搜一下好吗？" @click="dropmenu">
          <button class="search_input__btn">
            <i class="icon_search" @click="search(keyword)"></i>
            <span class="icon_text"></span>
          </button>
        </div>
        <div class="js_smartbox">
          <div class="mod_search_other" :class="drop?'drop':''">
            <div class="search_hot">
              <dl class="search_hot__list">
                <dt class="search_hot__tit">热门搜索</dt>
                <dd>
                  <a href="javascript:;" class="search_hot__link js_smartbox_search
                    js_left" data-name="">
                      <span class="search_hot__number">1</span>
                      <span class="search_hot__name">鹿晗</span>
                      <span class="search_hot__listen">100.6万</span>
                    </a>
                </dd>
              </dl>
            </div>
            <div class="search_history">
              <dl class="search_history__list">
                <dt class="search_history__tit">
                  搜索历史
                  <a href="" class="search_history__clear js_smartbox_delete_all">
                    <i class="icon_history_clear"></i>
                    <span class="icon_txt">清空</span>
                  </a>
                </dt>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div class="header__opt">
        <span class="mod_top_login">
          <a href="y.qq.com" class="top_login__link js_logined"></a>
          <a href="#" class="top_login__link js_login">登录</a>
          <a href="y.qq.com" class="mod_btn_green top_login__btn_vip js_openvip">开通绿钻豪华版</a>
          <a href="#" class="mod_btn top_login__btn_vip js_openmusic">开通付费包</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        keyword: '',
        test: '海',
        drop: false,
        subnav: [
          {
            name: '首页',
            href: '#'
          },
          {
            name: '歌手',
            href: '#'
          },
          {
            name: '专辑',
            href: '#'
          },
          {
            name: '排行榜',
            href: '#'
          },
          {
            name: '分类歌单',
            href: '#'
          },
          {
            name: 'MV',
            href: '#'
          }
        ]
      }
    },
    mounted () {
      console.log(this.$route.path)

    },
    methods: {
      search: function (keyword) {
        // this.$store.dispatch('get_data', keyword)
        // console.log('sear12132');
        if (keyword.trim()) {
          console.log('sear12132');
          this.axios.get(`http://localhost:3000/search?keywords=${keyword}`)
            .then(res => {
              // console.log(res.data.result.songs);
              this.$store.dispatch('save_songList',res.data.result.songs)
              this.$router.push({path: '/artList', query: {keyword: this.keyword}})
              // console.log(this.songList)
            })

        } else {
          alert('请输入好吗?')
        }
      },
      schleave: function () {
        setTimeout(
          () => {
            this.drop = false
          }, 1000)
      },
      dropmenu: function () {
        this.drop = true
      }
    }
  }
</script>

<style lang="css" scoped>
  @import "../../style/header.css"
</style>
