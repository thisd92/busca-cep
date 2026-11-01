import { Skeleton } from "./ui/skeleton";

export function AddressSkeleton() {
  return (
    <div className="w-full max-w-md space-y-3 p-4 rounded-md border border-zinc-200 dark:border-zinc-800 animate-pulse mt-6">
      {/* Simula as linhas de texto do CEP, Logradouro, Bairro, etc. */}
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4"></div>
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/2"></div>
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-2/3"></div>
      <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-2/5"></div>
    </div>
  );
}
