import { lazy } from 'react'


export const NotFoundPage = lazy(async () => await import('./NotFound/NotFound'))
export const HomePage = lazy(async () => await import('./Home/Home'))
