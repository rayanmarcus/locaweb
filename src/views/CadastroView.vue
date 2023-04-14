<template>
  <div>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import changeTitlePage from '@/mixins/changeTitlePage.js'

export default {
  name: 'cadastroView',
  mixins: [changeTitlePage],
  async mounted () {
    this.changeTitlePage('Cadastro • Locaweb')
  }
}

</script>
