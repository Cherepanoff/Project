import { createRoot } from 'react-dom/client'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'
import 'app/styles/index.scss'
import 'shared/i18nconfig/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProviders'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<StoreProvider>
	<BrowserRouter>
		<ErrorBoundary>
		<ThemeProvider>
			<App />
		</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
	</StoreProvider>
)
