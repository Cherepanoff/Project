import { classNames } from 'shared/helpers/classNames/classNames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation()
  const toggle = async (): Promise<void> => {
    try {
      await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    } catch (error) {
      console.error('Error toggling language:', error)
    }
  }
  return (
		<Button
			className={classNames('', {}, [className])}
			theme={ThemeButton.CLEAR}
			onClick={toggle}
		>
			{short ? t('Короткий язык') : t('Язык')}
		</Button>
  )
}
