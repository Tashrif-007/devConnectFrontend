import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes, appRoutes, authRoutes } from "./routes";
import "./styles.css";
import { AppLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {authRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {adminRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
