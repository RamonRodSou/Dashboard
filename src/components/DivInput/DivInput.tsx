'use client';

import React from 'react';
import { updatePessoa } from '@/service/updatePessoa';
import { Input } from '@/components/ui/input';
import { useUserContext } from '@/context';
import IPessoa from '@/model/IPessoa';

type Props = {
  name: keyof IPessoa;
  tipo: string;
  value: any;
};


const DivInput: React.FC<Props> = ({ name, tipo, value }) => {
  const { pessoa, setPessoa } = useUserContext();

  function nameUpcase(name: string): string {
    if (name.length === 0) return name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }


  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-white mb-1">
        {nameUpcase(name)}
      </label>
      <Input
        id={name}
        type={tipo}
        placeholder={nameUpcase(name)}
        value={value}
        onChange={(e)=> updatePessoa(pessoa, setPessoa, name, e.target.value) }
        className="p-2 rounded-md"
      />
    </div>
  );
};


export default DivInput;
