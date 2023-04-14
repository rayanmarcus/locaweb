import { httpApiLogin } from './config'

export default {
  auth () {
    console.log('Teste de api')
    return httpApiLogin.get('/products')
  }
}
