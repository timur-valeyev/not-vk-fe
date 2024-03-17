import { useAppDispatch, useAppSelector } from 'app/providers/store/config/hooks'
import { counterActions, getCounterValue } from 'entities/Counter'
import { Button } from 'shared'

export const Counter = () => {
  const value = useAppSelector(getCounterValue)
  const dispatch = useAppDispatch()

  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h2 data-testid='value-title'>value: {value}</h2>
      <Button onClick={increment} data-testid='increment-btn'>
        increment
      </Button>
      <Button onClick={decrement} data-testid='decrement-btn'>
        decrement
      </Button>
    </div>
  )
}
