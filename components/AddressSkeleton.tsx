export function AddressSkeleton() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 rounded-xl p-4 space-y-3 animate-pulse">
      {/* Header do Skeleton: Simula o título e a pílula do CEP */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-700 pb-2.5">
        <div className="h-3 bg-slate-200 dark:bg-zinc-700 rounded w-24"></div>
        <div className="h-5 bg-slate-200 dark:bg-zinc-700 rounded-full w-20"></div>
      </div>

      {/* Logradouro */}
      <div className="space-y-1">
        <div className="h-2.5 bg-slate-200 dark:bg-zinc-700 rounded w-16"></div>
        <div className="h-4 bg-slate-300 dark:bg-zinc-600 rounded w-3/4"></div>
      </div>

      {/* Grid: Bairro e Cidade/UF */}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <div className="h-2.5 bg-slate-200 dark:bg-zinc-700 rounded w-12"></div>
          <div className="h-4 bg-slate-300 dark:bg-zinc-600 rounded w-full"></div>
        </div>
        <div className="space-y-1">
          <div className="h-2.5 bg-slate-200 dark:bg-zinc-700 rounded w-16"></div>
          <div className="h-4 bg-slate-300 dark:bg-zinc-600 rounded w-full"></div>
        </div>
      </div>

      {/* Cards de DDD, IBGE, SIAFI */}
      <div className="pt-2 border-t border-slate-200 dark:border-zinc-700/60 grid grid-cols-3 gap-2">
        <div className="h-10 bg-slate-200 dark:bg-zinc-700/80 rounded-lg"></div>
        <div className="h-10 bg-slate-200 dark:bg-zinc-700/80 rounded-lg"></div>
        <div className="h-10 bg-slate-200 dark:bg-zinc-700/80 rounded-lg"></div>
      </div>
    </div>
  );
}
