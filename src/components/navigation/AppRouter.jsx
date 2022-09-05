import { Route, Routes } from "react-router-dom";
import { HomeView } from "../pages/home/HomeView";

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </div>
  );
}
