import { classNames } from 'shared/helpers/classNames/classNames'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'
interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
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
          {t('Язык')}
      </Button>
  )
}
