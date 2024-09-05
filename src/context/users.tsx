'use client';
import IPessoa from "@/model/IPessoa";
import { createContext, useContext, useState } from "react";

interface UserContextType {
  pessoa: IPessoa;
  setPessoa: React.Dispatch<React.SetStateAction<IPessoa>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [pessoa, setPessoa] = useState<IPessoa>({
    matricula: 100000,
    cadastro: new Date(),
    nome: '',
    sobrenome: '',
    email: '',
    telefone: 0,
    estadoCivil: '',
    cpf: 0,
    nascimento: new Date(),
    casamento: new Date(),
    batismo: new Date(),
    pai: '',
    mae: '',
    funcao: {
      value: 0,
      label: ''
    },
    cargo: {
      id: 0,
      title: ''
    },
    password: ''
  });

  return (
    <UserContext.Provider value={{ pessoa, setPessoa }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
