import { classNames } from 'shared/helpers/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
import { type FC } from 'react'

interface ThemeSwitcherProps {
  className?: string
}
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
		</Button>
  )
}
