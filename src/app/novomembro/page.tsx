"use client"
import Pessoa from '@/Classes/Pessoa';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const formatDateToISO = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const parseISOToDate = (isoDate: string) => {
  return new Date(isoDate);
};

type Props = {
}


const dataCadastro = new Date;
console.log()


const NovoMembro: React.FC<Props> = () => {
  const [pessoa, setPessoa] = React.useState<Pessoa>(
    new Pessoa(100000, new Date(), '', '', '', 0, '', 0, new Date(), new Date(), new Date(), '', '', 0, 0, '')
  );
  
  const updatePessoa = (key: keyof Pessoa, value: any) => {
    setPessoa(prev => {
      const updatedPessoa = new Pessoa(
        prev.matricula,
        prev.dataCadastro,
        prev.nome,
        prev.sobrenome,
        prev.email,
        prev.telefone,
        prev.estadoCivil,
        prev.cpf,
        prev.dataNascimento,
        prev.dataCasamento,
        prev.dataBatismo,
        prev.nomePai,
        prev.nomeMae,
        prev.cargo,
        prev.funcao,
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
        case 'dataNascimento':
          updatedPessoa.dataNascimento = value;
          break;
        case 'dataCasamento':
          updatedPessoa.dataCasamento = value;
          break;
        case 'dataBatismo':
          updatedPessoa.dataBatismo = value;
          break;
        case 'nomePai':
          updatedPessoa.nomePai = value;
          break;
        case 'nomeMae':
          updatedPessoa.nomeMae = value;
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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(pessoa);
    setPessoa(new Pessoa(pessoa.matricula, new Date(), '', '', '', 0, '', 0, new Date(), new Date(), new Date(), '', '', 0, 0, '')
    );
  };

  return (
    <div className="flex lg:flex-row justify-center items-center lg:items-start  lg:justify-start lg:gap-[10rem]  w-full min-h-[70vh]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm min-h-[350px] lg:max-w-lg justify-between   items-center flex-col gap-4 p-8 bg-gray-800 rounded-md"
      >
        <span className="text-white sm:text-3xl font-semibold">Novo Membro</span>

        <div className="flex justify-between text-white w-full  bg-gray-700 p-2"  >
          <span>
            <h3>Nova Matrícula:</h3>
            <span className='text-red-40 text-xl text-orange-500'> {pessoa.matricula} </span>
          </span>
          <text className='text-white ' text-xl> {dataCadastro.toLocaleDateString()} </text>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-white mb-1">Nome</label>
          <Input
            id="nome"
            type="text"
            placeholder="Nome"
            value={pessoa.nome}
            onChange={(e) => updatePessoa('nome', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="sobrenome" className="text-white mb-1">Sobrenome</label>
          <Input
            id="sobrenome"
            type="text"
            placeholder="Sobrenome"
            value={pessoa.sobrenome}
            onChange={(e) => updatePessoa('sobrenome', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-white mb-1">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            value={pessoa.email}
            onChange={(e) => updatePessoa('email', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="telefone" className="text-white mb-1">Telefone</label>
          <Input
            id="telefone"
            type="tel"
            placeholder="Telefone"
            value={pessoa.telefone.toString()}
            onChange={(e) => updatePessoa('telefone', Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="estadoCivil" className="text-white mb-1">Estado Civil</label>
          <Input
            id="estadoCivil"
            type="text"
            placeholder="Estado Civil"
            value={pessoa.estadoCivil}
            onChange={(e) => updatePessoa('estadoCivil', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cpf" className="text-white mb-1">CPF</label>
          <Input
            id="cpf"
            type="text"
            placeholder="CPF"
            value={pessoa.cpf.toString().replace('.', '')}
            onChange={(e) => updatePessoa('cpf', Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="dataNascimento" className="text-white mb-1">Data de Nascimento</label>
          <Input
            id="dataNascimento"
            type="date"
            placeholder="Data de Nascimento"
            value={formatDateToISO(pessoa.dataNascimento)}
            onChange={(e) => updatePessoa('dataNascimento', parseISOToDate(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="dataCasamento" className="text-white mb-1">Data de Casamento</label>
          <Input
            id="dataCasamento"
            type="date"
            placeholder="Data de Casamento"
            value={formatDateToISO(pessoa.dataCasamento)}
            onChange={(e) => updatePessoa('dataCasamento', parseISOToDate(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="dataBatismo" className="text-white mb-1">Data de Batismo</label>
          <Input
            id="dataBatismo"
            type="date"
            placeholder="Data de Batismo"
            value={formatDateToISO(pessoa.dataBatismo)}
            onChange={(e) => updatePessoa('dataBatismo', parseISOToDate(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nomePai" className="text-white mb-1">Nome do Pai</label>
          <Input
            id="nomePai"
            type="text"
            placeholder="Nome do Pai"
            value={pessoa.nomePai}
            onChange={(e) => updatePessoa('nomePai', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="nomeMae" className="text-white mb-1">Nome da Mãe</label>
          <Input
            id="nomeMae"
            type="text"
            placeholder="Nome da Mãe"
            value={pessoa.nomeMae}
            onChange={(e) => updatePessoa('nomeMae', e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="cargo" className="text-white mb-1">Cargo</label>
          <Input
            id="cargo"
            type="number"
            placeholder="Cargo"
            value={pessoa.cargo.toString()}
            onChange={(e) => updatePessoa('cargo', Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="funcao" className="text-white mb-1">Função</label>
          <Input
            id="funcao"
            type="number"
            placeholder="Função"
            value={pessoa.funcao.toString()}
            onChange={(e) => updatePessoa('funcao', Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password" className="text-white mb-1">Senha</label>
          <Input
            id="password"
            type="password"
            placeholder="Senha"
            value={pessoa.password}
            onChange={(e) => updatePessoa('password', e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-black">
          Cadastrar
        </Button>
      </form>
      <div>
        
      </div>
      <article className="flex w-full max-w-sm min-h-[350px] lg:max-w-lg justify-between   items-center flex-col gap-4 p-8 bg-gray-800 rounded-md">
        <h2 className='"text-white sm:text-3xl font-semibold text-white'>Cargos</h2>
      </article>
      <article className="flex w-full max-w-sm min-h-[350px] lg:max-w-lg justify-between   items-center flex-col gap-4 p-8 bg-gray-800 rounded-md">
        <h2 className='"text-white sm:text-3xl font-semibold text-white'>Cargos</h2>
      </article>
    </div>
  );
};

export default NovoMembro;