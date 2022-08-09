<template>
  <div class="mywrapper">
    <TheaterHeader></TheaterHeader>
    <TheaterMain></TheaterMain>
  </div>

</template>

<script>
import TheaterHeader from "@/components/MovieTheatre/TheaterHeader";
import TheaterMain from "@/components/MovieTheatre/TheaterMain";
export default {
  name: "TheaterMovie",
  components:{
    TheaterHeader,
    TheaterMain
  }
}
</script>

<style scoped>
  .mywrapper{
    background: #f5f6f8;
  }
</style>