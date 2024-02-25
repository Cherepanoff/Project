import { classNames } from "shared/helpers/classNames/classNames";
import cls from "./SideBar.module.scss";
import { FC, useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
interface SideBarProps {
  className?: string;
}
export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(true);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
