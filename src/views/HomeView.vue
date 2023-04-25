<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { Play } from '@vicons/ionicons5'
  // import Header from '@/components/Header/index.vue'
  // import Footer from '@/components/Footer/index.vue'
  import { useSongListStore } from '@/stores/songList'

  const songListId = ref('古风')
  const newSongId = ref('')

  const store = useSongListStore()

  const changeSongList = async (val) => {
    let res = await store.getHotListFn(val)
    songListId.value = val
  }

  const changeNewSongList = async (val) => {
    await store.getNewListFn(val)
    newSongId.value = val
  }

  onMounted(async () => {
    await store.getHotListFn('华语')
    await store.getNewSongTagFn()
    await store.getNewListFn(store.$state.newSongTags[0]?.name)

    newSongId.value = store.$state.newSongTags[0]?.name
    console.log(store.$state)
  })
</script>

<template>
  <main>
    <!-- <Header /> -->
    <div class="home">
      <div class="songList">
        <h2 class="songList_tit">歌单推荐</h2>
        <div class="songList_subtit">
          <nav class="songList_subtit__nav">
            <a class="songList_subtit__nav___item" :class="songListId === '华语' && 'songList_subtit__nav___item-active'" @click="changeSongList('华语')">为你推荐</a>
            <a class="songList_subtit__nav___item" :class="songListId === '古风' && 'songList_subtit__nav___item-active'" @click="changeSongList('古风')">网络热歌</a>
            <a class="songList_subtit__nav___item" :class="songListId === 'ktv热歌' && 'songList_subtit__nav___item-active'" @click="changeSongList('ktv热歌')">KTV热歌</a>
            <a class="songList_subtit__nav___item" :class="songListId === '伤感' && 'songList_subtit__nav___item-active'" @click="changeSongList('伤感')">伤感</a>
            <a class="songList_subtit__nav___item" :class="songListId === '官方歌单' && 'songList_subtit__nav___item-active'" @click="changeSongList('官方歌单')">官方歌单</a>
            <a class="songList_subtit__nav___item" :class="songListId === '情歌' && 'songList_subtit__nav___item-active'" @click="changeSongList('情歌')">情歌</a>
          </nav>
        </div>
        <n-carousel autoplay style="--n-dot-color: rgba(0,0,0,0.1);--n-dot-color-active: rgba(0,0,0,0.3);">
          <div class="carousel-cont" v-if="store.$state?.hotList?.length" v-for="list in store.$state?.hotList">
            <div class="carousel_cont__item" v-for="item in list" >
              <div class="carousel_cont__item___cover">
                <img class="carousel_cont__item___cover____img" :src="item.coverImgUrl" alt="" />
                <img class="carousel_cont__item___cover____play" src="@/assets/cover-play.png" alt="">
              </div> 
              <p class="carousel_cont__item___name">{{ item.name }}</p>
              <p class="carousel_cont__item___count">播放量：{{ item.playCount }}</p>
            </div>
          </div>
        </n-carousel>
      </div>
      <div class="songList">
        <h2 class="songList_tit">新歌首发</h2>
        <div class="songList_subtit">
          <n-button style="margin-left: 50px;float: left;"><Play />播放全部</n-button>
          <nav class="songList_subtit__nav">
            <a class="songList_subtit__nav___item" :class="newSongId === item.name && 'songList_subtit__nav___item-active'" v-for="item in store.$state.newSongTags" :key="item.name" @click="changeNewSongList(item.name)">{{ item.name }}</a>
          </nav>
        </div>
        <n-carousel autoplay style="--n-dot-color: rgba(0,0,0,0.1);--n-dot-color-active: rgba(0,0,0,0.3);">
          <div class="carousel-cont" v-if="store.$state?.newList?.length" v-for="list in store.$state?.newList">
            <n-row>
              <n-col :span="8" v-for="item in list" :key="item.id">
                <div class="newSong">
                  <div class="newSong_l">
                    <img class="newSong_l__img" :src="item.coverImgUrl" alt="" />
                    <img class="newSong_l__play" src="@/assets/cover-play.png" alt="">
                  </div>
                  <div class="newSong_r">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.creator.nickname }}</p>
                  </div>
                  <div class="newSong_share">分享：{{ item.shareCount }}</div>
                </div>
              </n-col>
            </n-row>
          </div>
        </n-carousel>
      </div>
    </div>
    <!-- <Footer /> -->
  </main>
</template>

<style lang="scss" scoped>
  @import './index.scss';
</style>