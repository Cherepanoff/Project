import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export const AppLink: React.FC<AppLinkProps> = ({
  theme = AppLinkTheme.PRIMARY,
  className,
  children,
  to,
  ...props
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls["AppLink"], { [cls[theme]]: true }, [className])}
      {...props}
    >
      {children}
    </Link>
  );
};
