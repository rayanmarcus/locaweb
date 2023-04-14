<template>
  <div>
    <h1>Deus é bom!</h1>
  </div>
</template>

<script>
import login from '@/services/login'

export default {
  name: 'LoginUser',
  async created () {
    await login.auth()
      .then((response) => {
        console.log(response.data)
        this.products = response.data
      })
  }
}
</script>

<style scoped lang="scss">
</style>
