// src/Classes/Pessoa.ts
import IPessoa from "@/model/IPessoa";

class Pessoa implements IPessoa {
  matricula: number;
  cadastro: Date;
  nome: string;
  sobrenome: string;
  email: string;
  telefone: number;
  estadoCivil: string;
  cpf: number;
  nascimento: Date;
  casamento: Date;
  batismo: Date;
  pai: string;
  mae: string;
  funcao: {
    value: number;
    label: string;
  };
  cargo: {
    id: number;
    title: string;
  };
  password: string;

  constructor(
    matricula: number,
    cadastro: Date,
    nome: string,
    sobrenome: string,
    email: string,
    telefone: number,
    estadoCivil: string,
    cpf: number,
    nascimento: Date,
    casamento: Date,
    batismo: Date,
    pai: string,
    mae: string,
    funcao: { value: number; label: string },
    cargo: { id: number; title: string },
    password: string
  ) {
    this.matricula = matricula;
    this.cadastro = cadastro;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.telefone = telefone;
    this.estadoCivil = estadoCivil;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.casamento = casamento;
    this.batismo = batismo;
    this.pai = pai;
    this.mae = mae;
    this.funcao = funcao;
    this.cargo = cargo;
    this.password = password;
  }
}

export default Pessoa;
