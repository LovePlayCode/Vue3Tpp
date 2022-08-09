<template>
  <div class="indexMo">
    <MovieHeader></MovieHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MovieHeader from "@/pages/header/MovieHeader";

export default {
  name: "IndexMovie",
  components:{
    MovieHeader,

  }
}
</script>

<style scoped>
  .indexMo{
    background:#f5f6f8;
  }
</style>