"use client";

import { SearchForm } from "@/components/SearchForm";
import { CepData } from "@/components/AddressCard";
import { AddressSkeleton } from "@/components/AddressSkeleton";
import { Cep } from "@/types/cep";
import { useEffect, useState } from "react";

export default function Home() {
  const [cepData, setCepData] = useState<Cep | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efeito que limpa a mensagem de erro automaticamente após 4 segundos
  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => {
      setError(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-zinc-950 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-md bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl shadow-xl p-6 sm:p-8 transition-all">
        {/* Cabeçalho do Card */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-zinc-100">
            Buscador de CEP
          </h1>
          <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
            Digite o CEP para consultar o endereço completo
          </p>
        </div>

        {/* Formulário de Busca */}
        <SearchForm
          setCepData={setCepData}
          setIsLoading={setIsLoading}
          setError={setError}
        />

        {/* Mensagem de Erro */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium flex items-center gap-2 animate-fadeIn">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Resultado / Skeleton */}
        <div className="mt-6">
          {isLoading ? <AddressSkeleton /> : <CepData cepData={cepData} />}
        </div>
      </main>
    </div>
  );
}
