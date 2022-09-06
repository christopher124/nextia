import { Route, Routes } from "react-router-dom";
import { HomeView } from "../pages/home/HomeView";
import { UsView } from "../pages/home/UsView";

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/nosotros" element={<UsView />} />
      </Routes>
    </div>
  );
}
