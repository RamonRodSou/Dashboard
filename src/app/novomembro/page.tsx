'use client';

import React from 'react'
import { Button } from '@/components/ui/button';
import { ComboBox } from '@/components/ui/ComboBox';
import { updatePessoa } from '@/service/updatePessoa';
import { useUserContext } from '@/context';
import DivInput from '@/components/DivInput/DivInput';
import { cargoOptions, funcaoOptions } from '../Arrays/funcoes';
import DivInputData from '@/components/DivInput/DivInputData';
import Pessoa from '@/Classes/Pessoa';

const dataCadastro = new Date();

const NovoMembro: React.FC = () => {

  const { pessoa, setPessoa } = useUserContext();

  const handleSubmit = async  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Deu certo');
    console.log("Pessoa atual:", pessoa);

    try {
      const response = await fetch('http://localhost:3000/membros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pessoa),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }

      const data = await response.json();
      console.log('Dados enviados com sucesso:', data);

      setPessoa(data);
    } catch (error) {
      console.error('Error sending data:', error);
    }

    setPessoa(new Pessoa(pessoa.matricula, '', '', '', '', 0, '', 0, '', '', '', '', '', { value: 0, label: '' }, { id: 0, title: '' }, ''));


  };


  const handleFuncaoChange = (value: number | undefined) => {
    updatePessoa(pessoa, setPessoa, 'funcao', value);
    console.log('Função selecionada:', value);
  };

  const handleCargoChange = (value: number | undefined) => {
    updatePessoa(pessoa, setPessoa, 'cargo', value);
    console.log('Cargo selecionado:', value);
  }

  return (
    <div className="flex lg:flex-row justify-center items-center lg:items-start  lg:justify-start lg:gap-[10rem]  w-full min-h-[70vh]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-sm min-h-[350px] lg:max-w-lg justify-between   items-center flex-col gap-4 p-8 bg-gray-800 rounded-md"
      >
        <span className="text-white sm:text-3xl font-semibold">Novo Membro</span>

        <div className="flex justify-between text-white w-full bg-gray-700 p-2">
          <span>
            <h3>Nova Matrícula:</h3>
            <span className='text-red-40 text-xl text-orange-500'> {pessoa.matricula} </span>
          </span>
          <span className='text-white text-xl'> {dataCadastro.toLocaleDateString()} </span>
        </div>


        <DivInput name='nome' tipo={'text'} value={pessoa.nome} />
        <DivInput name='sobrenome' tipo={'text'} value={pessoa.sobrenome} />
        <DivInput name='email' tipo={'text'} value={pessoa.email} />
        <DivInput name='telefone' tipo={'tel'} value={pessoa.telefone ? pessoa.telefone.toString() : ''} />
        <DivInput name='estadoCivil' tipo={'text'} value={pessoa.estadoCivil} />
        <DivInput name='cpf' tipo={'text'} value={pessoa.cpf ? pessoa.cpf.toString().replace('.', '') : ''} />
        <DivInput name='pai' tipo={'text'} value={pessoa.pai} />
        <DivInput name='mae' tipo={'text'} value={pessoa.mae} />


        <DivInputData name='nascimento' value={pessoa.nascimento} />
        <DivInputData name='casamento' value={pessoa.casamento} />
        <DivInputData name='batismo' value={pessoa.batismo} />


        <div className="flex flex-col w-full">
          <label htmlFor="funcao" className="text-white mb-1">Função na Igreja</label>
          <ComboBox funcao={funcaoOptions} onChange={handleFuncaoChange} />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="funcao" className="text-white mb-1">Cargo Sistema</label>
          <ComboBox funcao={cargoOptions} onChange={handleCargoChange} />
        </div>


        <DivInput name='password' tipo={'password'} value={pessoa.password} /> 


        <Button type="submit" className="w-full bg-black">
          Cadastrar
        </Button>
      </form>

    </div>
  );
};

export default NovoMembro;