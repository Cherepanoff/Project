import { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/routeConfig/routeconfig'

export const AppRouter: FC = () => {
  const { t } = useTranslation()

  return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
          <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                  <Route
                        key={path}
                        path={path}
                        element={
                          <Suspense fallback={<div>{t('Загрузка')}</div>}>
                                <div className='page-wrapper'>{element}</div>
                            </Suspense>
                        }
                    />
                ))}
            </Routes>
      </Suspense>
  )
}
