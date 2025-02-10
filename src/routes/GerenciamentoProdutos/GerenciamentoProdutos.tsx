import { useState, ChangeEvent } from "react";
import "./GerenciamentoProdutos.css";
import Table from "../../components/Table";
import Input from "../../components/Input";

interface Produto {
  nome: string;
  quantidade: string;
  valUnitario: string;
}

const GerenciamentoProduto = () => {
  const [dados, setDados] = useState<Produto>({
    nome: "",
    quantidade: "",
    valUnitario: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const handleDadosChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDados((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): string | null => {
    if (!dados.nome || !dados.quantidade || !dados.valUnitario) {
      return "Todos os campos são obrigatórios.";
    }
    if (parseInt(dados.quantidade) < 0) {
      return "A quantidade deve ser positiva.";
    }
    if (parseInt(dados.valUnitario) < 0) {
      return "Valor unitário deve ser positivo.";
    }
    return null;
  };

  const handleCadastro = () => {
    setErrorMessage("");
    setSuccessMessage("");
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    setProdutos((prevProdutos) => [...prevProdutos, { ...dados }]);
    setSuccessMessage("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container">
      <div className="cadastros">
        <h1>Cadastro de Produto</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <Input
          name="nome"
          labeltext="Nome:"
          type="text"
          value={dados.nome}
          handleChange={handleDadosChange}
        />
        <Input
          name="quantidade"
          labeltext="Quantidade:"
          type="number"
          value={dados.quantidade}
          handleChange={handleDadosChange}
        />
        <Input
          name="valUnitario"
          labeltext="Valor Unitário:"
          type="number"
          value={dados.valUnitario}
          handleChange={handleDadosChange}
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
      <div className="tabelaConsulta">
        <Table
          header={[
            { label: "Nome", prop: "nome" },
            { label: "Quantidade", prop: "quantidade" },
            { label: "Valor Unitário", prop: "valUnitario" },
          ]}
          dados={produtos}
        />
      </div>
    </div>
  );
};

export default GerenciamentoProduto;
