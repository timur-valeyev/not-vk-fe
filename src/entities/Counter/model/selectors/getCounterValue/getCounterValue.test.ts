import { StateSchema } from 'app/providers/store/config/StateSchema'
import { getCounterValue } from 'entities/Counter'

describe('getCounterValue', () => {
  test('getCounterValue test', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
