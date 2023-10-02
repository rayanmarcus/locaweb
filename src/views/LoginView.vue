<template>
  <LoginUser/>
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
  created () {
    this.changeTitlePage('Login • Locaweb')
  }
}
</script>
