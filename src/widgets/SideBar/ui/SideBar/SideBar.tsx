import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './SideBar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
interface SideBarProps {
  className?: string
}
export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true)
  const onToggle = (): void => {
    setCollapsed((prev) => !prev)
  }
  return (
		<div
			className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button onClick={onToggle}>123</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
  )
}
