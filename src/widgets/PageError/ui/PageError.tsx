import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './PageError.module.scss'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
interface PageErrorProps {
  className?: string
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation()
  const reloadPage = (): void => {
    window.location.reload()
  }
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
        {t('Что-то пошло не так')}
        <Button onClick={reloadPage}>
            {t('Обновить страницу')}
        </Button>
    </div>
  )
}
