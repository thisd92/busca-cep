"use client";

import { useState } from "react";
import getCep from "@/service/cepService";
import { Cep } from "@/types/cep";
import { FaSearch } from "react-icons/fa";
interface SearchFormProps {
  setCepData: (data: Cep | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

export function SearchForm({
  setCepData,
  setIsLoading,
  setError,
}: SearchFormProps) {
  const [cep, setCep] = useState("");

  const handleSearch = async () => {
    setError(null);
    setCepData(null);
    if (!cep.trim()) return;
    setIsLoading(true);
    try {
      const data = await getCep(cep);
      setCepData(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado ao buscar o CEP.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Digite o CEP..."
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        <FaSearch className="w-4 h-4" />
        Buscar
      </button>
    </div>
  );
}
