export default class Pessoa {

  private static matriculaCounter = 100000;
  private _matricula: number;
  private _dataCadastro: Date;
  private _nome: string;
  private _sobrenome: string;
  private _email: string;
  private _telefone: number;
  private _estadoCivil: string;
  private _cpf: number;
  private _dataNascimento: Date;
  private _dataCasamento: Date;
  private _dataBatismo: Date;
  private _nomePai: string;
  private _nomeMae: string;
  private _cargo: number;
  private _funcao: number;
  private _password: string;
  


  constructor(matricula: number, dataCadastro: Date, nome: string, sobrenome: string, email: string, telefone: number, estadoCivil: string,
    cpf: number, dataNascimento: Date, dataCasamento: Date, dataBatismo: Date, nomePai: string, nomeMae: string,
    cargo: number, funcao: number, password: string
  ) {

    this._matricula = Pessoa.matriculaCounter++;
    this._dataCadastro = dataCadastro;
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._telefone = telefone;
    this._estadoCivil = estadoCivil;
    this._cpf = cpf;
    this._dataNascimento = dataNascimento;
    this._dataCasamento = dataCasamento;
    this._dataBatismo = dataBatismo;
    this._nomePai = nomePai;
    this._nomeMae = nomeMae;
    this._cargo = cargo;
    this._funcao = funcao;
    this._password = password;
  }

  public get matricula(): number {
    return this._matricula;
  }
  public get dataCadastro(): Date {
    return this._dataCadastro;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get sobrenome(): string {
    return this._sobrenome;
  }
  public set sobrenome(value: string) {
    this._sobrenome = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get telefone(): number {
    return this._telefone;
  }
  public set telefone(value: number) {
    this._telefone = value;
  }
  public get estadoCivil(): string {
    return this._estadoCivil;
  }
  public set estadoCivil(value: string) {
    this._estadoCivil = value;
  }
  public get cpf(): number {
    return this._cpf;
  }
  public set cpf(value: number) {
    this._cpf = value;
  }
  public get dataNascimento(): Date {
    return this._dataNascimento;
  }
  public set dataNascimento(value: Date) {
    this._dataNascimento = value;
  }
  public get dataCasamento(): Date {
    return this._dataCasamento;
  }
  public set dataCasamento(value: Date) {
    this._dataCasamento = value;
  }
  public get dataBatismo(): Date {
    return this._dataBatismo;
  }
  public set dataBatismo(value: Date) {
    this._dataBatismo = value;
  }
  public get nomePai(): string {
    return this._nomePai;
  }
  public set nomePai(value: string) {
    this._nomePai = value;
  }
  public get nomeMae(): string {
    return this._nomeMae;
  }
  public set nomeMae(value: string) {
    this._nomeMae = value;
  }
  public get cargo(): number {
    return this._cargo;
  }
  public set cargo(value: number) {
    this._cargo = value;
  }
  public get funcao(): number {
    return this._funcao;
  }
  public set funcao(value: number) {
    this._funcao = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}