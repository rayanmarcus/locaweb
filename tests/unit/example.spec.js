import { shallowMount } from '@vue/test-utils'
import LoginUser from '@/components/LoginUser.vue'

describe('LoginUser.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(LoginUser, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
