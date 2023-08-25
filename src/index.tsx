import {createRoot} from 'react-dom/client'
import {App} from './App'
import './index.scss'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <div className='app'>
    <App />
  </div>,
)
