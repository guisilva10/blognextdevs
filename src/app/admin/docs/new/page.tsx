import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import { Textarea } from "@/app/_components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

export default async function NewDocumentation() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Nova Documentação</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Documentação</CardTitle>
          <CardDescription>
            Crie uma nova página de documentação para a LAB NDA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" placeholder="Digite o título da documentação" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" placeholder="guia-de-instalacao" />
              <p className="text-muted-foreground text-sm">
                O slug é usado na URL da documentação. Ex:
                labnda.com/docs/guia-de-instalacao
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="section">Seção</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma seção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="getting-started">
                    Primeiros Passos
                  </SelectItem>
                  <SelectItem value="api">API</SelectItem>
                  <SelectItem value="guides">Guias</SelectItem>
                  <SelectItem value="reference">Referência</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="order">Ordem</Label>
              <Input id="order" type="number" placeholder="1" />
              <p className="text-muted-foreground text-sm">
                A ordem em que esta página aparecerá na navegação da seção
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                placeholder="Conteúdo da documentação em Markdown"
                rows={15}
              />
              <p className="text-muted-foreground text-sm">
                Suporta formatação em Markdown
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Salvar como Rascunho</Button>
              <Button>Publicar Documentação</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
