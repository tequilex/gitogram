import { shallowMount } from '@vue/test-utils'
import { toggler } from '../../src/components/toggler'

describe('toggler component', () => {
  it('изменяет надпись при клике', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('View issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
