import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode, type FC } from 'react'
import { Portal } from 'shared/ui/Portal'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}
export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
  const mods: Record<string, boolean> = {
    [cls.Open]: isOpen
  }

  return (
        <Portal>
		<div className={classNames(cls.Modal, mods, [className])}>
			<div className={cls.overlay}>
            <div className={cls.content}>
                {children}
			</div>
			</div>
		</div>
        </Portal>
  )
}
