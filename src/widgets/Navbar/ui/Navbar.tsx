import { Link } from "react-router-dom";
import { classNames } from "shared/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls["navbar"], {}, [className])}>
      <ThemeSwitcher />
      <div className={cls["navbar__links"]}>
        <AppLink to={"/"} className={cls["navbar__main_links"]}>
          Главная
        </AppLink>
        <AppLink to={"/about"} className={cls["navbar__main_links"]}>
          Обо мне
        </AppLink>
      </div>
    </div>
  );
};
