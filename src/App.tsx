import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./Pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./Pages/MainPage/MainPage.lazy";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./Theme/ThemeContext";
import { useTheme } from "./Theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Тема</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>Обо мне</Link>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
