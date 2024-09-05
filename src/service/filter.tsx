
import { useState } from "react";
type Pessoa = {
 nome: string;
 sobrenome: string;
 email: string;
 telefone: number;
 cpf: number;
 dataNascimento?: Date;
};

export default function useValidation() {
 const [errors, setErrors] = useState<{ [key: string]: string }>({});

 const validate = (pessoa: Pessoa) => {
   const newErrors: { [key: string]: string } = {};

    if (!pessoa.nome.trim()) {
      newErrors.nome = "O nome é obrigatório";
    }

    if (!pessoa.sobrenome.trim()) {
      newErrors.sobrenome = "O sobrenome é obrigatório";
    }

    if (!pessoa.email.trim()) {
      newErrors.email = "O email é obrigatório";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(pessoa.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!pessoa.telefone) {
      newErrors.telefone = "O telefone é obrigatório";
    } else if (!/^\d{10,11}$/.test(pessoa.telefone.toString())) {
      newErrors.telefone = "Formato de telefone inválido";
    }

    if (!pessoa.cpf) {
      newErrors.cpf = "O CPF é obrigatório";
    } else if (!/^\d{11}$/.test(pessoa.cpf.toString())) {
      newErrors.cpf = "Formato de CPF inválido";
    }

    if (!pessoa.dataNascimento) {
      newErrors.dataNascimento = "A data de nascimento é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
}
