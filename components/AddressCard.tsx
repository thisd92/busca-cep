"use client";

import { Cep } from "@/types/cep";

export function CepData({ cepData }: { cepData: Cep | null }) {
  if (!cepData) return null;

  return (
    <div className="bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 rounded-xl p-4 space-y-3 transition-all">
      {/* Topo: Destaque do CEP */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-700 pb-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400">
          Resultado da Busca
        </span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/60 px-3 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
          {cepData.cep}
        </span>
      </div>

      {/* Logradouro */}
      <div>
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
          Logradouro
        </p>
        <p className="text-sm font-semibold text-slate-800 dark:text-zinc-100">
          {cepData.logradouro || "Não informado"}
        </p>
      </div>

      {/* Grid: Bairro e Cidade/UF */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
            Bairro
          </p>
          <p className="text-sm font-medium text-slate-700 dark:text-zinc-200">
            {cepData.bairro || "Não informado"}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
            Cidade / UF
          </p>
          <p className="text-sm font-medium text-slate-700 dark:text-zinc-200">
            {cepData.localidade} - {cepData.uf}
          </p>
        </div>
      </div>

      {/* Complemento (apenas se existir) */}
      {cepData.complemento && (
        <div>
          <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium">
            Complemento
          </p>
          <p className="text-sm text-slate-600 dark:text-zinc-300">
            {cepData.complemento}
          </p>
        </div>
      )}

      {/* Informações Adicionais (IBGE, DDD, etc.) */}
      <div className="pt-2 border-t border-slate-200 dark:border-zinc-700/60 grid grid-cols-3 gap-2 text-center">
        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg border border-slate-100 dark:border-zinc-700">
          <p className="text-[10px] text-slate-400 dark:text-zinc-400 uppercase font-bold">
            DDD
          </p>
          <p className="text-xs font-semibold text-slate-700 dark:text-zinc-200">
            {cepData.ddd || "-"}
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg border border-slate-100 dark:border-zinc-700">
          <p className="text-[10px] text-slate-400 dark:text-zinc-400 uppercase font-bold">
            IBGE
          </p>
          <p className="text-xs font-semibold text-slate-700 dark:text-zinc-200">
            {cepData.ibge || "-"}
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-2 rounded-lg border border-slate-100 dark:border-zinc-700">
          <p className="text-[10px] text-slate-400 dark:text-zinc-400 uppercase font-bold">
            SIAFI
          </p>
          <p className="text-xs font-semibold text-slate-700 dark:text-zinc-200">
            {cepData.siafi || "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
