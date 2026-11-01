import { Cep } from "@/types/cep";

const getCep = async (cep: string): Promise<Cep> => {
  // Remove caracteres não numéricos caso o usuário digite hífen ou ponto
  const cleanCep = cep.replace(/\D/g, "");
  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  const data = await response.json();
  return data;
};

export default getCep;
