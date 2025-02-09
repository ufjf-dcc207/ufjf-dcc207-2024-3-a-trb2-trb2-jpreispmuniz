import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home.tsx";
import CadastroVendedor from "./CadastroVendedor/CadastroVendedor.tsx";
import GerenciamentoProduto from "./GerenciamentoProdutos/GerenciamentoProdutos.tsx";
const Rotas = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/cadastro-vendedor", element: <CadastroVendedor /> },
    { path: "/gerenciamento-produtos", element: <GerenciamentoProduto /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default Rotas;
