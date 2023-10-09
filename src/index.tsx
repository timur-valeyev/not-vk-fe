import { App } from 'app/App'
import { ErrorBoundary } from 'app/providers/errorBoundary/ErrorBoundary'
import { ThemeProvider } from 'app/providers/theme/ui/ThemeProvider'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './app/styles/index.scss'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <ThemeProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ErrorBoundary>
  </ThemeProvider>
)
