'use client';

import React from 'react';
import { updatePessoa } from '@/service/updatePessoa';
import IPessoa from '@/model/IPessoa';
import { DatePicker } from '../ui/DatePicker';
import { useUserContext } from '@/context';

const formatDateToISO = (date: Date | string | undefined) => {
  if (!date) return '';

  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(parsedDate.getTime())) {
    return ''; 
  }

  const day = String(parsedDate.getDate()).padStart(2, '0');
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
  const year = parsedDate.getFullYear();
  return `${year}-${month}-${day}`;
};

type Props = {
  name: keyof IPessoa;
  value: Date | string | undefined; 
};

const DivInputData: React.FC<Props> = ({ name, value }) => {
  const { pessoa, setPessoa } = useUserContext();


  function nameUpcase(name: string): string {
    if (name.length === 0) return name;
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }


  const handleDateChange = (selectedDate: string | undefined) => {
    updatePessoa(pessoa, setPessoa, name, selectedDate ? new Date(selectedDate) : undefined);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-white mb-1">
        {nameUpcase(name)}
      </label>
      <DatePicker
        value={formatDateToISO(value)}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DivInputData;
