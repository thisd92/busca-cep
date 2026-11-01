"use client";
import { SearchForm } from "@/components/SearchForm";
import { CepData } from "@/components/AddressCard";
import { Cep } from "@/types/cep";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { AddressSkeleton } from "@/components/AddressSkeleton";

export default function Home() {
  const [cepData, setCepData] = useState<Cep | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <SearchForm setCepData={setCepData} setIsLoading={setIsLoading} />
        {isLoading ? <AddressSkeleton /> : <CepData cepData={cepData} />}
      </main>
    </div>
  );
}
