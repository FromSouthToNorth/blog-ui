<template>
  <v-footer
    app
  >
    <v-btn
      text
      x-small
      href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51012202000694"
      target="_blank"
      color="grey lighten-1"
    >
      <v-avatar size="16" style="margin-right: 10px">
        <img
          src="../../assets/img/for-the-record-icon.png"
          alt="John"
        >
      </v-avatar>
      川公网安备 51012202000694号
    </v-btn>
    <v-btn
      text
      x-small
      href="http://www.beian.miit.gov.cn/"
      target="_blank"
      color="grey lighten-1"
    >
      蜀ICP备20019889号-1
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-size: 8px;
  color: #E0E0E0;
}
</style>
