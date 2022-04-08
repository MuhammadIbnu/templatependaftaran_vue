<template>
  <div class="h-screen">
    
    <!-- Header -->
    <Header />

    <!-- content -->
    <router-view></router-view>

    <!-- footer -->
    <Footer />

  </div>
</template>

<script>

  import Header from '@/components/Header.vue'


  export default {
    components: {
      Header,
     
    }
  }
</script>

<style>

</style>