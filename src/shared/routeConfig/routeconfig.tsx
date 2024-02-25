import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
  Main = 'main',
  ABOUT = 'about',
  NOTFOUND = 'notfound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOTFOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage/>
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOTFOUND]: {
    path: RoutePath.notfound,
    element: <NotFoundPage/>
  }

}
