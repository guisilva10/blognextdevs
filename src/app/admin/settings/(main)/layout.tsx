import { Separator } from "@/app/_components/ui/separator";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col space-y-4">
      <h2 className="mb-4 flex gap-4 text-xl font-bold lg:text-2xl">
        Configurações <Separator orientation="vertical" className="h-8" />{" "}
        Alterar Tema
      </h2>
      {children}
    </main>
  );
}
