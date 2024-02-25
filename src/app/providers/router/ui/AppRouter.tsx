import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/routeConfig/routeconfig'

export const AppRouter: FC = () => {
  return (
        <Suspense fallback={<div>Загрузка</div>}>
          <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                  <Route
                        key={path}
                        path={path}
                        element={
                          <Suspense fallback={<div>Загрузка</div>}>
                                <div className='page-wrapper'>{element}</div>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
      </Suspense>
  )
}
