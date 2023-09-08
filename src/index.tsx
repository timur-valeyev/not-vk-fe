import { App } from 'app/App'
import { ThemeProvider } from 'app/providers/theme/ui/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
)
