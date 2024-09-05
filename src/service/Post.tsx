import Pessoa from "@/Classes/Pessoa";
import { useUserContext } from "@/context";

const { pessoa, setPessoa } = useUserContext();

export const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
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

  setPessoa(new Pessoa( pessoa.matricula, new Date(), '', '', '', 0, '', 0, new Date(), new Date(), new Date(), '', '', { value: 0, label: '' }, { id: 0, title: '' }, ''));

};
