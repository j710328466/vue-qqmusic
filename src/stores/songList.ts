import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getHotList, getNewList, getHotTag } from '@/utils/api'


export const useSongListStore = defineStore('songList',  {
    state: () => ({
      hotList: [],
      newList: [],
      newSongTags: []
    }),
    actions: {
        async getHotListFn(value: string) {
            const res = await getHotList(value)
            const newArray: any = []

            if (res.status === 200) {
                let index = 0
                while(index < res.data.playlists.length) {
                    newArray.push(res.data.playlists.slice(index, index += 5));
                }
                this.hotList = newArray
            }
            return newArray
        },
        async getNewSongTagFn() {
            const res = await getHotTag()

            if (res.data.code === 200) {
                this.newSongTags = res.data.tags.slice(0, 6)
            }
        },
        async getNewListFn(value: string) {
            const res = await getNewList(value)
            const newArray = []

            if (res.status === 200) {
                let index = 0
                while(index < res.data.playlists.length) {
                    newArray.push(res.data.playlists.slice(index, index += 9));
                }
                this.newList = newArray
            }
            return newArray
        }
    }
})
