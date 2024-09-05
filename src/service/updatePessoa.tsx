import Pessoa from "@/Classes/Pessoa";
import IPessoa from "@/model/IPessoa";

export const updatePessoa = (
  pessoa: IPessoa,
  setPessoa: React.Dispatch<React.SetStateAction<IPessoa>>,
  key: keyof IPessoa,
  value: any
) => {
  setPessoa((prev) => {
    const updatedPessoa = new Pessoa(
      prev.matricula,
      prev.cadastro,
      prev.nome,
      prev.sobrenome,
      prev.email,
      prev.telefone,
      prev.estadoCivil,
      prev.cpf,
      prev.nascimento,
      prev.casamento,
      prev.batismo, 
      prev.pai,
      prev.mae,
      prev.funcao,
      prev.cargo,
      prev.password
    );

    switch (key) {
      case 'nome':
        updatedPessoa.nome = value;
        break;
      case 'sobrenome':
        updatedPessoa.sobrenome = value;
        break;
      case 'email':
        updatedPessoa.email = value;
        break;
      case 'telefone':
        updatedPessoa.telefone = value;
        break;
      case 'estadoCivil':
        updatedPessoa.estadoCivil = value;
        break;
      case 'cpf':
        updatedPessoa.cpf = value;
        break;
      case 'nascimento':
        updatedPessoa.nascimento = new Date(value); // Assumindo que value é uma string no formato YYYY-MM-DD
        break;
      case 'casamento':
        updatedPessoa.casamento = new Date(value); // Assumindo que value é uma string no formato YYYY-MM-DD
        break;
      case 'batismo':
        updatedPessoa.batismo = new Date(value); // Assumindo que value é uma string no formato YYYY-MM-DD
        break;
      case 'pai':
        updatedPessoa.pai = value;
        break;
      case 'mae':
        updatedPessoa.mae = value;
        break;
      case 'cargo':
        updatedPessoa.cargo = value;
        break;
      case 'funcao':
        updatedPessoa.funcao = value;
        break;
      case 'password':
        updatedPessoa.password = value;
        break;
      default:
        break;
    }

    return updatedPessoa;
  });
};
