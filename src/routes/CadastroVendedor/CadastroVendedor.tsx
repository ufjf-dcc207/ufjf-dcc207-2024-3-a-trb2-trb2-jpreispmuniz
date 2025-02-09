import { useState, ChangeEvent } from "react";
import "./CadastroVendedor.css";
import Table from "../../components/Table";
import Input from "../../components/Input";

interface Vendedor {
  id: string;
  nome: string;
  uf: string;
  cpf: string;
}

const CadastroVendedor: React.FC = () => {
  const [dados, setDados] = useState<Vendedor>({
    id: "",
    nome: "",
    uf: "",
    cpf: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [vendedores, setVendedores] = useState<Vendedor[]>([]);

  const handleDadosChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setDados((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): string | null => {
    if (!dados.nome || !dados.uf || !dados.cpf) {
      return "Todos os campos são obrigatórios.";
    }
    if (dados.uf.length !== 2) {
      return "UF deve conter 2 letras.";
    }
    if (dados.cpf.length !== 11) {
      return "CPF deve conter exatamente 11 dígitos.";
    }
    return null;
  };

  const handleCadastro = (): void => {
    setErrorMessage("");
    setSuccessMessage("");
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }
    setVendedores((prevVendedores) => [
      ...prevVendedores,
      { ...dados, id: Date.now().toString() },
    ]);
    setSuccessMessage("Cadastro realizado com sucesso!");
  };

  return (
    <div className="container">
      <div className="cadastros">
        <h1>Cadastro de Vendedor</h1>
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
          name="uf"
          labeltext="UF:"
          type="text"
          value={dados.uf}
          max={2}
          handleChange={handleDadosChange}
        />
        <Input
          name="cpf"
          labeltext="CPF:"
          type="text"
          value={dados.cpf}
          max={11}
          handleChange={handleDadosChange}
        />
        <button onClick={handleCadastro}>Cadastrar</button>
      </div>
      <div className="tabelaConsulta">
        <Table
          header={[
            { label: "Nome", prop: "nome" },
            { label: "UF", prop: "uf" },
            { label: "CPF", prop: "cpf" },
          ]}
          dados={vendedores}
        />
      </div>
    </div>
  );
};

export default CadastroVendedor;