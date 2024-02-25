import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type FC } from 'react'

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
        <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.navbar__links}>
                <AppLink to={'/'} className={cls.navbar__main_links}>
                  Главная
                </AppLink>
                <AppLink to={'/about'} className={cls.navbar__main_links}>
                  Обо мне
                </AppLink>
            </div>
      </div>
  )
}
