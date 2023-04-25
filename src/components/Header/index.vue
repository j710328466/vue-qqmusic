<template>
  <div class="top">
    <div class="header">
      <img class="header_logo" src="../../assets/logo.png" />
      <nav class="header_list">
        <RouterLink class="header_list__item" to="/home">音乐馆</RouterLink>
        <RouterLink class="header_list__item" to="/mymusic">我的音乐</RouterLink>
        <RouterLink class="header_list__item" to="/client">客户端</RouterLink>
        <RouterLink class="header_list__item" to="/open">开放平台</RouterLink>
        <RouterLink class="header_list__item" to="/vip">VIP</RouterLink>
      </nav>
      <n-input round placeholder="搜索" style="width: 200px;border-radius: 4px;">
        <template #suffix>
          <n-icon :component="Search" />
        </template>
      </n-input>

      <div class="header_r">
        <a class="header_r__login">登录</a>
        <n-dropdown trigger="hover" :options="options" @select="handleSelect">
          <n-button type="primary" size="large" icon-placement="right" style=" background-color: #31c27c;">
            开通vip
            <template #icon>
              <n-icon>
                <CaretDown />
              </n-icon>
            </template>
          </n-button>
        </n-dropdown>
      </div>
    </div>
    <nav class="nav">
      <RouterLink class="nav_item" to="/home">首页</RouterLink>
      <RouterLink class="nav_item" to="/singer">歌手</RouterLink>
      <RouterLink class="nav_item" to="/newCd">新碟</RouterLink>
      <RouterLink class="nav_item" to="/ranking">排行榜</RouterLink>
      <RouterLink class="nav_item" to="/sort">分类歌单</RouterLink>
      <RouterLink class="nav_item" to="/radio">电台</RouterLink>
      <RouterLink class="nav_item" to="/mv">MV</RouterLink>
      <RouterLink class="nav_item" to="/album">数字专辑</RouterLink>
    </nav>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'
  import { Search, CaretDown } from '@vicons/ionicons5';

  const activeNav = ref(0)
  const options = ref([
    {
      label: '开通超级会员',
      key: '1',
      disabled: false
    },
    {
      label: '开通绿钻豪华版',
      key: '2',
      disabled: false
    },
  ])

  const changeNav = (num) => {
    activeNav.value = num
  }

  const handleSelect = () => {
    
  }

  const onSearch = (e) => {
    console.log(e)
  }

  const handleMenuClick = () => {

  }

</script>


<style lang="scss" scoped>
  @import './index.scss'
</style>
