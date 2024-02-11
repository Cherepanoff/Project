import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/routeConfig/routeconfig";

export const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
