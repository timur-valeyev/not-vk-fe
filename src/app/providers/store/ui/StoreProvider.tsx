import { createStore } from 'app/providers/store'
import { StateSchema } from 'app/providers/store/config/StateSchema'
import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProvider {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider: FC<StoreProvider> = ({ children, initialState }) => {
  const store = createStore(initialState)

  return <Provider store={store}>{children}</Provider>
}
