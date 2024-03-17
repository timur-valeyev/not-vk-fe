import { App } from 'app/App'
import { ErrorBoundary } from 'app/providers/errorBoundary/ErrorBoundary'
import { StoreProvider } from 'app/providers/store'
import { ThemeProvider } from 'app/providers/theme'
import { createRoot } from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import { BrowserRouter } from 'react-router-dom'
import './shared/config/translations/translations'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <StoreProvider>
    <ThemeProvider>
      <SkeletonTheme baseColor='#c5c4c4' highlightColor='#e8dede'>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </SkeletonTheme>
    </ThemeProvider>
  </StoreProvider>
)
