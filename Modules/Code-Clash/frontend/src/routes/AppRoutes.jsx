import { Routes, Route } from "react-router-dom";
import Lobby from "../pages/Lobby";
import Battle from "../pages/Battle";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Lobby />} />
      <Route path="/battle/:roomId" element={<Battle />} />
    </Routes>
  );
}
