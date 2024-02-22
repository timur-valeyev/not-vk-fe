import { createRoot } from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/theme'
import { ErrorBoundary } from 'app/providers/errorBoundary/ErrorBoundary'
import { App } from 'app/App'
import './shared/config/translations/translations'
import './app/styles/index.scss'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <ThemeProvider>
    <SkeletonTheme baseColor='#c5c4c4' highlightColor='#e8dede'>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </SkeletonTheme>
  </ThemeProvider>
)
