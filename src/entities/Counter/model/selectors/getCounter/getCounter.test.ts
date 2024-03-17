import { StateSchema } from 'app/providers/store/config/StateSchema'
import { getCounter } from 'entities/Counter'

describe('getCounter', () => {
  test('test counter', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
