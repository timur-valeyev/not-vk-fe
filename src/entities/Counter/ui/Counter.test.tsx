import { userEvent } from '@storybook/test'
import { render, screen } from '@testing-library/react'
import { StoreProvider } from 'app/providers/store'
import { StateSchema } from 'app/providers/store/config/StateSchema'
import { Counter } from 'entities/Counter'

describe('Counter', () => {
  test('Counter', () => {
    const initialState: StateSchema = { counter: { value: 10 } }
    render(
      <StoreProvider initialState={initialState}>
        <Counter />
      </StoreProvider>
    )

    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })
  test('decrement', async () => {
    const initialState: StateSchema = { counter: { value: 10 } }
    render(
      <StoreProvider initialState={initialState}>
        <Counter />
      </StoreProvider>
    )
    await userEvent.click(screen.getByTestId('decrement-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
  test('increment', async () => {
    const initialState: StateSchema = { counter: { value: 10 } }
    render(
      <StoreProvider initialState={initialState}>
        <Counter />
      </StoreProvider>
    )
    await userEvent.click(screen.getByTestId('increment-btn'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })
})
