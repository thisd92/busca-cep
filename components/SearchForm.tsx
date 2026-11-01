"use client";
import { Cep } from "@/types/cep";
import { useState } from "react";
import getCep from "@/service/cepService";

interface SearchFormProps {
  cepData: Cep;
  setCepData: (cepData: Cep) => void;
}

export function SearchForm({ cepData, setCepData }: SearchFormProps) {
  const [cep, setCep] = useState("");

  const handleSearch = async () => {
    const data = await getCep(cep);
    setCepData(data);
  };

  return (
    <div>
      <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
