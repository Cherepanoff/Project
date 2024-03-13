import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Navbar.module.scss'
import { useState, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal'
import { Button } from 'shared/ui/Button'
import { ThemeButton } from 'shared/ui/Button/ui/Button'

interface NavbarProps {
  className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])
  return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<Button onClick={onToggleModal} theme={ThemeButton.OUTLINE} className={cls.navbar__links}>
				{t('Войти')}
				<Modal isOpen={isAuthModal} onClose= {onToggleModal}/>
				{/* <AppLink to={'/'} className={cls.navbar__main_links}>
					{t('Главная страница')}
				</AppLink> */}
			</Button>
		</div>
  )
}
