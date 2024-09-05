'use client';

import React from 'react';
import { updatePessoa } from '@/service/updatePessoa';
import { Input } from '@/components/ui/input';
import { useUserContext } from '@/context';
import IPessoa from '@/model/IPessoa';

type Props = {
  name: keyof IPessoa;
  value: Date; 
};

const formatDateToISO = (date: Date | undefined) => {
  if (!date || isNaN(date.getTime())) {
    return '';
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

const parseISOToDate = (isoDate: string): Date => {
  return new Date(isoDate);
};

const DivInputData: React.FC<Props> = ({ name, value }) => {
  const { pessoa, setPessoa } = useUserContext();

  function nameUpcase(name: string): string {
    if (name.length === 0) return name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updatePessoa(pessoa, setPessoa, name, parseISOToDate(e.target.value));
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-white mb-1">
        {nameUpcase(name)}
      </label>
      <Input
        id={name}
        type="date"
        placeholder={nameUpcase(name)}
        value={formatDateToISO(value)} 
        onChange={handleChange}
        className="p-2 rounded-md"
      />
    </div>
  );
};

export default DivInputData;
