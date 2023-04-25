import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSingerList } from '@/utils/api'


export const useSingerStore = defineStore('songList',  {
    state: () => ({
      singerList: [],
    }),
    actions: {
        async getSingerFn(params: { [key: string]: string }) {
            const res = await getSingerList(params)

            if (res.status === 200) {
                this.singerList = res.data.artists
                return res.data.artists
            }
        },
    }
})
