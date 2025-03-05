import LoginPage from "@/app/_components/admin/login-form";

import { Code2Icon, ShieldCheckIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-background flex h-screen items-center justify-center">
      {/* Login Column */}
      <div className="border-border flex h-screen w-full flex-col items-center justify-center border-r lg:w-1/2">
        <div className="w-full space-y-8 px-8 lg:max-w-xl">
          <div>
            <LoginPage />
          </div>

          <div className="border-border/60 bg-secondary text-muted-foreground flex items-center justify-center gap-2 rounded-md border p-3 text-sm">
            <ShieldCheckIcon className="text-primary h-4 w-4" />
            <p>Acesso liberado apenas para Administradores</p>
          </div>
        </div>
      </div>

      {/* Branding Column */}
      <div className="relative hidden min-h-screen w-full justify-center lg:flex lg:w-1/2">
        <div className="z-10 flex flex-col items-center justify-center space-y-6">
          <div className="border-border flex items-center gap-3 rounded-xl border p-4 shadow-lg backdrop-blur-sm">
            <div className="from-primary/70 via-primary to-primary/70 flex size-12 items-center justify-center rounded-lg bg-gradient-to-r">
              <Code2Icon className="size-7 text-white" />
            </div>
            <h1 className="from-primary via-primary/80 to-primary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              LAB NDA
            </h1>
          </div>

          <p className="text-muted-foreground/80 max-w-md text-center text-lg backdrop-blur-sm">
            Plataforma de administração segura para gerenciar seus recursos de
            laboratório
          </p>
        </div>

        <div className="bg-secondary border-border text-muted-foreground absolute bottom-8 rounded-lg border px-4 py-2 text-sm backdrop-blur-sm">
          © {new Date().getFullYear()} LAB NDA • Todos os direitos reservados
        </div>
      </div>
    </div>
  );
}
