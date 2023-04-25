import axios from 'axios';

// 获取热门歌单
export const getHotList = async  (val: string) => {
  return await axios.get('http://localhost:3001/top/playlist', {
    params: {
      cat: val
    }
  });
};

// 获取热门歌曲类型标签
export const getHotTag = async  () => {
  return await axios.get('http://localhost:3001/playlist/highquality/tags', {
    params: {
    }
  });
};

// 通过name获取热门歌曲
export const getNewList = async  (name: string) => {
  return await axios.get('http://localhost:3001/top/playlist/highquality', {
    params: {
      cat: name
    }
  });
};

// 获取歌手列表
export const getSingerList = async  (params: { [key: string]: string }) => {
  return await axios.get('http://localhost:3001/artist/list', {
    params
  });
};