import { classNames } from 'shared/helpers/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton
  className?: string
  square?: boolean
  size?: ButtonSize
  children?: React.ReactNode
}
export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={classNames(cls.button, { [cls[theme]]: true }, [className])}
      {...props}
    >
      {children}
    </button>
  )
}
