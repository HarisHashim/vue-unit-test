import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(NavBar, { props: { menus: ['menu1', 'menu2'] } })
    expect(wrapper.text()).toContain('menu1menu2')
  })
})
