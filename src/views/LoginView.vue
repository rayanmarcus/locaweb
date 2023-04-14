<template>
  <div class="home">
    <LoginUser/>
  </div>
</template>

<script>
import LoginUser from '@/components/LoginUser.vue'
import changeTitlePage from '@/mixins/changeTitlePage.js'

export default {
  name: 'LoginView',
  mixins: [changeTitlePage],
  components: {
    LoginUser
  },
  mounted () {
    this.changeTitlePage('Login • Locaweb')
  }
}
</script>
