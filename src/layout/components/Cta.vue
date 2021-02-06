<template>
  <v-expand-transition>
    <v-btn
      v-show="flag"
      @click="backTop"
      style="margin-bottom: 60px"
      color="#1565c0"
      fab
      fixed
      right
      bottom>
      <v-icon color="#fff">
        mdi-chevron-up
      </v-icon>
    </v-btn>
  </v-expand-transition>
</template>

<script>
export default {
  data() {
    return {
      flag: '',
      scrollTop: undefined
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    backTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    scrollToTop() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.flag = this.scrollTop > 100;
    }
  }
}
</script>

<style scoped>

</style>
