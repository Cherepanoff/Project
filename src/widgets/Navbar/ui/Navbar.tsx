import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.navbar__links}>
				<AppLink to={'/'} className={cls.navbar__main_links}>
					{t('Главная страница')}
				</AppLink>
			</div>
		</div>
  )
}
