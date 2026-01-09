import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes, appRoutes, authRoutes } from "./routes";
import { Navbar } from "./components/navbar";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
    </BrowserRouter>
  );
}

export default App;
