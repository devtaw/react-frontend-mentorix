import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { ListaMentores } from "./pages/ListaMentores/ListaMentores";
import { AreaMentor } from "./pages/AreaMentor/AreaMentor";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/lista-mentores" element={<ListaMentores />} />
      <Route path="/area-mentor" element={<AreaMentor />} />
    </Routes>
  );
}
