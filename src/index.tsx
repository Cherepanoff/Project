import { createRoot } from 'react-dom/client'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from 'app/providers/ThemeProvider/ui/ThemeProvider'

import 'shared/i18nconfig/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<BrowserRouter>
		<ErrorBoundary>
		<ThemeProvider>
			<App />
		</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
)
