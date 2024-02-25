import { classNames } from "shared/helpers/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
  children?: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...props
}) => {
  return (
    <button
      className={classNames(cls["button"], {[cls[theme]]: true}, [ className])}
      {...props}
    >
      {children}
    </button>
  );
};
