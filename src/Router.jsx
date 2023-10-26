import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ListaMentores } from "./pages/ListaMentores/ListaMentores";
import { AreaMentor } from "./pages/AreaMentor/AreaMentor";

/**
 * No geral, esse código configura o roteamento para um aplicativo React de várias páginas,
 * permitindo ao usuário navegar entre diferentes páginas com base no caminho da URL.
 *
 * Cada componente `Route` possui uma propriedade `path` que especifica o caminho da URL
 *  que deve acionar a renderização da propriedade `element` do componente.
 *
 * A propriedade `element` é definida como um componente diferente para cada `Route`.
 * A primeira `Route` tem um `path` de `/` e um `element` de `<Home />`. Isso significa que
 *  quando o caminho da URL for `/`, o componente `Home` será renderizado.
 * Da mesma forma, a segunda `Rota` tem um `caminho` de `/login` e um `elemento` de `<Login />`,
 * então quando o caminho da URL for `/login`, o componente `Login` será renderizado.
 */

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lista-mentores" element={<ListaMentores />} />
      <Route path="/area-mentor" element={<AreaMentor />} />
    </Routes>
  );
}
