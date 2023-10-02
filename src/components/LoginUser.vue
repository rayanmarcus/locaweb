<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <img src="../assets/img/logo.png" alt="" srcset="">
      </div>
      <div class="container-login mx-auto">
        <div class="col-12">
          <h1 class="mb-2">Entre na sua conta</h1>
          <h5 class="mb-3">Para acessar sua conta informe seu e-mail e senha</h5>
        </div>
        <div class="col-12 mb-3">
          <label for="email">E-mail</label>
          <input
            v-model="email"
            type="email"
            name="email"
            id="email"
            placeholder="Seu e-mail"
            class="form-control lw-control"
          >
        </div>
        <div class="col-12">
          <label for="senha">Senha</label>
          <input
            v-model="senha"
            type="senha"
            name="senha"
            id="senha"
            placeholder="Sua senha"
            class="form-control lw-control"
          >
        </div>
        <div class="col-12 text-right mb-3">
          <span>
            Esqueci minha senha
          </span>
        </div>
        <div class="col-12">
          <button
            role="button"
            class="btn lw-btn-login"
            >
            Fazer login
          </button>
        </div>
      </div>
      <div class="col-12 text-center">
        <p>
          Ainda não tem conta?
          <router-link
            to="/cadastro"
            class="lw-link"
          > Cadastre-se</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import login from '@/services/login'

export default {
  name: 'LoginUser'
  // async created () {
  //   await login.auth()
  //     .then((response) => {
  //       console.log(response.data)
  //       this.products = response.data
  //     })
  // }
}
</script>

<style scoped lang="scss">
.container-login {
  background: #fff;
  border: 1px solid #E6EAF2;
  border-radius: 5px;
  margin: 1.5em 0;
  padding: 1.5em 1.5em 2em;
}
</style>
