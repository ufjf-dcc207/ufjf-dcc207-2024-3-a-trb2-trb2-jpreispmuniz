import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className="container">
      <h1 className="title">Menu Principal</h1>
      <div className="button-group">
        <button onClick={() => handleNavigation("/cadastro-vendedor")}>
          Cadastro de Vendedor
        </button>
        <button onClick={() => handleNavigation("/gerenciamento-produtos")}>
          Gerenciamento de Produtos
        </button>
        <button onClick={() => handleNavigation("/lancamento-venda")}>
          Lançamento de Venda
        </button>
        <button onClick={() => handleNavigation("/relatorios-gerenciais")}>
          Relatórios Gerenciais
        </button>
      </div>
    </div>
  );
};

export default Home;
