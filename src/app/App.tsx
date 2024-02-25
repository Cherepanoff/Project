import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/helpers/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { type FC, Suspense } from 'react'

const App: FC = () => {
  const { theme } = useTheme()
  return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-page'>
					<SideBar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
  )
}

export default App
