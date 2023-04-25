<template>
    <div class="singer">
        <div class="singer_search">
            <ul class="singer_search__words" >
                <n-radio-group v-model:value="currentWord" name="cWord" @click="onSearchWord">
                    <n-radio class="singer_search__words___word" v-for="word in ['全部', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']" :key="word" :value="word" >{{ word }}</n-radio>
                </n-radio-group>
                <br/>
                <n-radio-group v-model:value="currentArea" name="cArea">
                    <n-radio class="singer_search__words___word" v-for="area in ['全部', '内地', '港台', '欧美', '日本', '韩国']" :key="area" :value="area">{{ area }}</n-radio>
                </n-radio-group>
                <br/>
                <n-radio-group v-model:value="currentSex" name="cSex">
                    <n-radio class="singer_search__words___word" v-for="sex in ['全部', '男', '女', '组合']" :key="sex" :value="sex" >{{ sex }}</n-radio>
                </n-radio-group>
                <br />
                <n-radio-group v-model:value="currentTp" name="cTp">
                    <n-radio class="singer_search__words___word" v-for="tp in ['全部', '流行', '说错', '国风', '摇滚', '电子', '民谣', 'R&B', '民族乐', '轻音乐', '爵士', '古典', '乡村']" :key="tp" :value="tp" >{{ tp }}</n-radio>
                </n-radio-group>
            </ul>
        </div>
        <n-grid
            :cols="5"
            :x-gap="16" :y-gap="16"
        >
            <n-gi
                v-for="singer in store.$state.singerList"
                :key="singer.id"
            >
            <div class="singer_member">
                <img class="singer_member__pic" :src="singer.picUrl" alt="" />
                <p class="singer_member__name">{{ singer.name }}</p>
            </div>
            </n-gi>
        </n-grid>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useSingerStore } from '@/stores/singer'

    const store = useSingerStore()

    const currentWord = ref('全部')
    const currentArea = ref('全部')
    const currentSex = ref('全部')
    const currentTp = ref('全部')

    const onSearchWord = async (wd) => {
        const res = await store.getSingerFn({ initial: wd.target.value })
    }

    onMounted(async () => {
        const res = await store.getSingerFn()
    })
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>