import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './SideBar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { Button } from 'shared/ui/Button'
import { ButtonSize, ThemeButton } from 'shared/ui/Button/ui/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/routeConfig/routeconfig'
interface SideBarProps {
  className?: string
}
export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }
  return (
		<div
			data-testid='SideBar'
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button data-testid='sidebar-toggle' className={cls.collapsedBtn} theme={ThemeButton.BACKGROUND_INVERTED} onClick={onToggle} square size ={ButtonSize.XL}>{collapsed ? '>' : '<'}</Button>
			<div className={cls.items}>
			<AppLink to={RoutePath.main} className={cls.navbar__main_links}>
					{t('Главная страница')}
				</AppLink>
				<AppLink to={RoutePath.about} className={cls.navbar__main_links}>
					{t('О сайте')}
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed}/>
			</div>
		</div>
  )
}
