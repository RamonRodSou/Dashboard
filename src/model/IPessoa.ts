export default interface IPessoa {
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
}
