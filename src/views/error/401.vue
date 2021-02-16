<template>
  <v-app>
    <v-container>
      <div class="errPage-container">
        <v-btn class="pan-back-btn" @click="back">
          返回
        </v-btn>
        <v-row>
          <v-col cols="12" sm="6">
            <h1 class="text-jumbo text-ginormous">
              401错误!
            </h1>
            <h2>您没有访问权限！</h2>
            <h6>对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面</h6>
            <ul class="list-unstyled">
              <li class="link-type">
                <router-link to="/">
                  回首页
                </router-link>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              alt="Girl has dropped her ice cream."
              :src="errGif"
              max-width="213"
              max-height="328" />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: '401',
  data() {
    return {
      errGif: errGif + '?' + +new Date()
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  max-width: 100%;
  margin: 100px auto;

  .pan-back-btn {
    background: #008489;
    color: #fff;
    border: none !important;
  }

  .pan-gif {
    margin: 0 auto;
    display: block;
  }

  .pan-img {
    display: block;
    margin: 0 auto;
    width: 100%;
  }

  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }

  .list-unstyled {
    font-size: 14px;

    li {
      padding-bottom: 5px;
    }

    a {
      color: #008489;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
