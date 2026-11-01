export interface Cep {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge?: number | null;
  gia?: number | null ;
  ddd?: number | null;
  siafi?: number | null;
}
