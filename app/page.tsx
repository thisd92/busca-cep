"use client";
import { SearchForm } from "@/components/SearchForm";
import { CepData } from "@/components/AddressCard";
import { Cep } from "@/types/cep";
import { useEffect, useState } from "react";
import { AddressSkeleton } from "@/components/AddressSkeleton";

export default function Home() {
  const [cepData, setCepData] = useState<Cep | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Efeito que limpa a mensagem de erro automaticamente após 4 segundos
  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => {
      setError(null);
    }, 4000); // 4000 milissegundos = 4 segundos

    // Função de limpeza para cancelar o timer caso o componente desmonte
    // ou se o usuário fizer uma nova busca antes dos 4 segundos terminarem
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SearchForm
          setCepData={setCepData}
          setIsLoading={setIsLoading}
          setError={setError}
        />
        {/* Exibe a mensagem de erro se existir */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded w-full max-w-md">
            {error}
          </div>
        )}
        {isLoading ? <AddressSkeleton /> : <CepData cepData={cepData} />}
      </main>
    </div>
  );
}
