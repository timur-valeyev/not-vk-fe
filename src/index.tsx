import {createRoot} from 'react-dom/client'
import {App} from 'app/App'
import './app/styles/index.scss'
import {ThemeProvider} from 'app/providers/theme/ui/ThemeProvider'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>
)
