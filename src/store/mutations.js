import * as types from './mutations_types'
export default{
  [types.SAVE_SONGLIST](state, songList) {
    state.songList = songList
  }
}
