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

    if (!cep.trim()) {
      setError("Por favor, digite um CEP.");
      return;
    }

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
    <div className="flex gap-2 w-full">
      <input
        type="text"
        maxLength={9}
        placeholder="Digite o CEP (ex: 90010-281)..."
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800/50 text-slate-800 dark:text-zinc-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-zinc-800 transition-all text-sm font-medium"
      />
      <button
        onClick={handleSearch}
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <FaSearch className="w-3.5 h-3.5" />
        <span>Buscar</span>
      </button>
    </div>
  );
}
