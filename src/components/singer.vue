<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return{

      }
    },
    mounted() {
      this.axios({
        method:'get',
        url:'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=10&offset=0',
        responseType:'stream'
      })
        .then(function(response) {
        console.log(response);
      })
    },
    methods: {

    }
  }
</script>

<style media="screen">

</style>
