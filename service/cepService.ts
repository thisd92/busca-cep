import { Cep } from "@/types/cep";

const getCep = async (cep: string): Promise<Cep> => {
  // Remove caracteres não numéricos caso o usuário digite hífen ou ponto
  const cleanCep = cep.replace(/\D/g, "");
  if (cleanCep.length !== 8)
    throw new Error("O CEP deve conter exatamente 8 dígitos.");
  const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
  if (!response.ok) throw new Error("Falha ao comunicar com o serviço de CEP.");
  const data = await response.json();
  if (data.erro) throw new Error("CEP não encontrado");
  return data;
};

export default getCep;
