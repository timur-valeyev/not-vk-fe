import { createSelector } from '@reduxjs/toolkit'
import { CounterSchema } from 'entities/Counter'
import { getCounter } from 'entities/Counter'

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value)
