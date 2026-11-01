"use client";

import { Cep } from "@/types/cep";

export function CepData({ cepData }: { cepData: Cep | null }) {
  if (!cepData) {
    return <div></div>;
  }
  return (
    <div>
      <h1>
        <span className="font-bold">CEP:</span> {cepData.cep}
      </h1>
      <p>
        <span className="font-bold">Logradouro:</span> {cepData.logradouro}
      </p>
      <p>
        <span className="font-bold">Complemento:</span> {cepData.complemento}
      </p>
      <p>
        <span className="font-bold">Bairro:</span> {cepData.bairro}
      </p>
      <p>
        <span className="font-bold">Localidade:</span> {cepData.localidade}
      </p>
      <p>
        <span className="font-bold">UF:</span> {cepData.uf}
      </p>
      <p>
        <span className="font-bold">IBGE:</span> {cepData.ibge}
      </p>
      <p>
        <span className="font-bold">GIA:</span> {cepData.gia}
      </p>
      <p>
        <span className="font-bold">DDD:</span> {cepData.ddd}
      </p>
      <p>
        <span className="font-bold">SIAFI:</span> {cepData.siafi}
      </p>
    </div>
  );
}
