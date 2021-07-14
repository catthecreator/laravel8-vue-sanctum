<template>
  <div>
    <Header/>
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'
  export default {
    name: 'AppLayout',
    components: {
      Header,
      Footer
    }
  }
</script>
